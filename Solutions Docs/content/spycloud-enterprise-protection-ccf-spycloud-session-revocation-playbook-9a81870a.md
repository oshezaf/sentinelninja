# SpyCloud Session Revocation Playbook

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Revoke all active sign-in sessions for users named in an identity access record exposure.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [SpyCloud Enterprise Protection CCF](../solutions/spycloud-enterprise-protection-ccf.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SpyCloud%20Enterprise%20Protection%20CCF/Playbooks/SpyCloud_Session_Revocation/azuredeploy.json) |

## Logic App Connectors

This playbook uses **2** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| [`azuresentinel`](../logic-apps/managed-azuresentinel.md) | Managed | 1 | 2 |
| [`http`](../logic-apps/builtin-http.md) | Built-in | 0 | 3 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

#### [`azuresentinel`](../logic-apps/managed-azuresentinel.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Entities_-_Get_Accounts | post | `/entities/account` | — |
| Add_comment_to_incident | post | `/Incidents/Comment` | — |

#### [`http`](../logic-apps/builtin-http.md) (Built-in)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| HTTP_-_Revoke_User_Sessions | POST | `https://graph.microsoft.com/v1.0/users/@{concat(items('For_each')?['Name'],'@',items('For_each')?['UPNSuffix'])}/revokeSignInSessions` | — |
| GetAccessToken | POST | `@concat(variables('loginUrl'), parameters('TenantID'), '/oauth2/v2.0/token')` | — |
| Log_ingestion | POST | `@variables('log_ingestion_api')` | — |

</details>

## Additional Documentation

> 📄 *Source: [SpyCloud_Session_Revocation/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SpyCloud%20Enterprise%20Protection%20CCF/Playbooks/SpyCloud_Session_Revocation/readme.md)*

This playbook revokes active Microsoft Entra sign-in sessions for users named in a SpyCloud identity access record exposure.

Identity access records cover session cookies, OAuth tokens and SSO credentials. That material grants account access **without a password**, so it survives a password reset and defeats single-factor controls. Revoking active sessions is the primary containment action, which is why this playbook does that and nothing else.

**Capabilities**
- Revokes all active sign-in sessions for affected users
- Adds an explanatory comment to the incident
- Execution log ingestion to `SpyCloud_ConditionalAccessLogsV2_CL`

The deployment also creates the Microsoft Sentinel automation rule that invokes this playbook, so no separate wiring step is needed.

## Prerequisites

- App Registration with Microsoft Graph permission to revoke sessions (`User.RevokeSessions.All`, or `User.ReadWrite.All`), granted admin consent
- DCR Immutable ID and DCE Logs Ingestion Endpoint URL — the same pair used by the other SpyCloud playbooks
- Monitoring Metrics Publisher role assigned to the App Registration on that DCR
- **Microsoft Sentinel Automation Contributor** granted to the **Azure Security Insights** service principal on the resource group you are deploying into

### Grant Automation Contributor first

This deployment creates an automation rule alongside the Logic App, and Sentinel refuses to create one unless it already has permission to run playbooks in the target resource group. Without it the deployment fails with `Missing required permissions for Microsoft Sentinel on the playbook resource`.

```bash
az role assignment create \
  --role "Microsoft Sentinel Automation Contributor" \
  --assignee 98785600-1bb7-4fb9-b9fa-19afe2c8a360 \
  --scope /subscriptions/<subscription-id>/resourceGroups/<resource-group>
```

`98785600-1bb7-4fb9-b9fa-19afe2c8a360` is the fixed application ID for Azure Security Insights.

### Finding the DCR immutable ID and DCE endpoint

Sentinel creates the data collection rule as `Microsoft-Sentinel-SpyCloudwatchlist-DCR-<guid>`, not under the name in the solution template, and pairs it with an auto-generated `asi-<guid>` endpoint. Read both from the live connector:

```bash
SUB=<subscription-id>; RG=<resource-group>; WS=<workspace-name>
az rest --method get --url "https://management.azure.com/subscriptions/$SUB/resourceGroups/$RG/providers/Microsoft.OperationalInsights/workspaces/$WS/providers/Microsoft.SecurityInsights/dataConnectors?api-version=2023-02-01-preview" --query "value[?properties.dcrConfig] | [0].properties.dcrConfig.{immutableId: dataCollectionRuleImmutableId, endpoint: dataCollectionEndpoint}"
```

Note that `DCE_Immutable_ID` takes the **DCR's** immutable ID despite its name.

## Deployment

All settings are supplied at deployment time.

1. In the Azure Portal, navigate to **Deploy a custom template**
2. Select this template (`azuredeploy.json`)
3. Confirm Subscription, Resource Group, and Region
4. Complete the parameters below
5. Click **Review + Create**, then **Create**

### Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| PlaybookName | String | SpyCloud_Session_Revocation | Name of the Logic App resource |
| Revoke_User_Sessions | String | false | Set to `true` to revoke sessions. With `false` the playbook runs, comments on the incident and logs, but takes no action |
| ClientID | String | — | App Registration Client ID |
| TenantID | String | — | Azure Tenant ID |
| ClientSecret | SecureString | — | App Registration Client Secret |
| DCE_Endpoint | String | — | DCE Logs Ingestion Endpoint URL |
| DCE_Immutable_ID | String | — | DCR Immutable ID |
| Custom_Table_Name | String | SpyCloud_ConditionalAccessLogsV2_CL | Log table, shared with the Conditional Access playbook |
| Sentinel_Workspace_Resource_Id | String | Solution workspace | Workspace the automation rule is created in. Pre-filled when deploying from Content Hub |
| AccessRecordIncidentTitle | String | SpyCloud identity access record exposure | Incident title the automation rule matches on |
| Automation_Rule_Order | Int | 3 | Execution order of the automation rule |

`Revoke_User_Sessions` is a **string** with allowed values `true` / `false`, not a boolean. Microsoft Sentinel's Content Hub playbook editor renders no input control at all for ARM `bool` parameters, which would leave the toggle stuck at its default. The editor also ignores the declared allowed values and shows a plain textbox — **type exactly `true` or `false`**. Anything else fails the deployment when the value is converted back to a boolean, which is deliberate.

### API connections

The deployment creates one connection, `azuresentinel`, which uses the playbook's system-assigned managed identity. There is **no Authorize button** and none is needed. Grant that managed identity the **Microsoft Sentinel Responder** role on the workspace, or the playbook cannot read incident entities or comment on incidents.


*[Content truncated...]*

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to SpyCloud Enterprise Protection CCF](../solutions/spycloud-enterprise-protection-ccf.md)

