# SpyCloud Conditional Access Playbook

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Spycloud Conditional access playbook

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [SpyCloud Enterprise Protection CCF](../solutions/spycloud-enterprise-protection-ccf.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SpyCloud%20Enterprise%20Protection%20CCF/Playbooks/SpyCloud_Conditional_Access_Playbook/azuredeploy.json) |

## Logic App Connectors

This playbook uses **3** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| [`azuresentinel`](../logic-apps/managed-azuresentinel.md) | Managed | 1 | 4 |
| [`office365`](../logic-apps/managed-office365.md) | Managed | 1 | 1 |
| [`http`](../logic-apps/builtin-http.md) | Built-in | 0 | 7 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

#### [`azuresentinel`](../logic-apps/managed-azuresentinel.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Entities_-_Get_Accounts | post | `/entities/account` | — |
| Add_comment_to_incident | post | `/Incidents/Comment` | — |
| Add_comment_to_incident_-_Password_Latest | post | `/Incidents/Comment` | — |
| Add_comment_to_incident_-_user_disable | post | `/Incidents/Comment` | — |

#### [`office365`](../logic-apps/managed-office365.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Send_an_email_-_to_manager_ | post | `/v2/Mail` | — |

#### [`http`](../logic-apps/builtin-http.md) (Built-in)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Get_User_Details | GET | `https://graph.microsoft.com/v1.0/users/@{concat(items('For_each')?['Name'],'@',items('For_each')?['UPNSuffix'])}?$select=id,displayName,accountEnabled,lastPasswordChangeDateTime,userPrincipalName` | — |
| Add_user_to_Conditional_Access_Group | POST | `https://graph.microsoft.com/v1.0/groups/@{parameters('Azure_CA_Group_Object_ID')}/members/$ref` | — |
| HTTP_-_Disable_User | PATCH | `https://graph.microsoft.com/v1.0/users/@{concat(items('For_each')?['Name'],'@',items('For_each')?['UPNSuffix'])}` | — |
| HTTP_-_Revoke_User_Sessions | POST | `https://graph.microsoft.com/v1.0/users/@{concat(items('For_each')?['Name'],'@',items('For_each')?['UPNSuffix'])}/revokeSignInSessions` | — |
| Force_Password_Reset | PATCH | `https://graph.microsoft.com/v1.0/users/@{concat(items('For_each')?['Name'],'@',items('For_each')?['UPNSuffix'])}` | — |
| GetAccessToken | POST | `@concat(variables('loginUrl'), parameters('TenantID'), '/oauth2/v2.0/token')` | — |
| Log_ingestion | POST | `@variables('log_ingestion_api')` | — |

</details>

## Additional Documentation

> 📄 *Source: [SpyCloud_Conditional_Access_Playbook/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SpyCloud%20Enterprise%20Protection%20CCF/Playbooks/SpyCloud_Conditional_Access_Playbook/readme.md)*

This playbook automates Azure AD / Entra ID identity response actions when SpyCloud breach data identifies compromised user credentials.

**Capabilities**
- Account disablement
- Session revocation across all applications
- Forced password reset at next sign-in
- Conditional Access group membership enforcement
- Email notifications
- Execution log ingestion to `SpyCloud_ConditionalAccessLogsV2_CL`

The deployment also creates the Microsoft Sentinel automation rule that invokes this playbook, so no separate wiring step is needed. See [Automation rule](#automation-rule) below.

## Prerequisites

- App Registration with the Microsoft Graph permissions listed in the SpyCloud Sentinel Integration Guide, Section 2.1
- DCR Immutable ID and DCE Logs Ingestion Endpoint URL for `SpyCloud_ConditionalAccessLogsV2_CL` (Section 2.2)
- Monitoring Metrics Publisher role assigned to the App Registration on that DCR
- Object ID of the Azure AD Conditional Access enforcement group (if using group membership actions)
- **Microsoft Sentinel Automation Contributor** granted to the **Azure Security Insights** service principal on the resource group you are deploying into — see below

### Finding the DCR immutable ID and DCE endpoint

The solution template names its data collection rule `SpyCloudwatchlist-DCR`, but Microsoft Sentinel does not create it under that name. When you connect the data connector, Sentinel provisions the rule itself as `Microsoft-Sentinel-SpyCloudwatchlist-DCR-<guid>` and pairs it with an auto-generated `asi-<guid>` data collection endpoint. Searching for `SpyCloudwatchlist-DCR` in the portal will not find it, and if the connector has been connected more than once there will be several, only the most recent of which is in use.

Read both values from the live connector rather than hunting through the resource list:

```bash
SUB=<subscription-id>; RG=<resource-group>; WS=<workspace-name>
az rest --method get --url "https://management.azure.com/subscriptions/$SUB/resourceGroups/$RG/providers/Microsoft.OperationalInsights/workspaces/$WS/providers/Microsoft.SecurityInsights/dataConnectors?api-version=2023-02-01-preview" --query "value[?properties.dcrConfig] | [0].properties.dcrConfig.{immutableId: dataCollectionRuleImmutableId, endpoint: dataCollectionEndpoint}"
```

All four pollers share the same rule and endpoint, so any one of them gives the right answer. Grant the App Registration **Monitoring Metrics Publisher** on that same rule.

### Grant Automation Contributor first

This deployment creates a Microsoft Sentinel automation rule alongside the Logic App, and Sentinel refuses to create an automation rule unless it already has permission to run playbooks in the target resource group. Without it the deployment fails with:

```
Missing required permissions for Microsoft Sentinel on the playbook resource '.../SpyCloud_Conditional_Access_Playbook'
```

Grant it once per resource group, before deploying either playbook:

```bash
az role assignment create \
  --role "Microsoft Sentinel Automation Contributor" \
  --assignee 98785600-1bb7-4fb9-b9fa-19afe2c8a360 \
  --scope /subscriptions/<subscription-id>/resourceGroups/<resource-group>
```

`98785600-1bb7-4fb9-b9fa-19afe2c8a360` is the fixed application ID for Azure Security Insights. In the portal, use **Access control (IAM)** on the resource group → **Add role assignment** → *Microsoft Sentinel Automation Contributor* → search for **Azure Security Insights**.

This permission has always been required for the automation to work. It is now enforced at deployment time rather than allowing a rule to be created that silently never fires.

## Deployment

All settings are supplied at deployment time. There is no post-deployment parameter editing.

1. In the Azure Portal, navigate to **Deploy a custom template**
2. Select this template (`azuredeploy.json`)
3. Confirm Subscription, Resource Group, and Region
4. Complete the parameters below
5. Click **Review + Create**, then **Create**
6. Authorize the `office365` API connection created by the deployment

### Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| PlaybookName | String | SpyCloud_Conditional_Access_Playbook | Name of the Logic App resource |
| Notify_Users_Emails | String | — | Email address(es) for notifications, semicolon-separated |
| Force_Password_Reset_On_Next_SignIn | String | false | Forces password reset at next sign-in for affected users |
| Disable_User | String | false | Disables affected Entra ID user accounts |
| Add_User_To_Azure_CA_Group | String | false | Adds affected users to the Conditional Access enforcement group |
| Azure_CA_Group_Object_ID | String | — | Object ID of the Entra ID Conditional Access group |
| Revoke_User_Sessions | String | false | Revokes all active sign-in sessions for affected users |
| ClientID | String | — | App Registration Client ID |
| TenantID | String | — | Azure Tenant ID |

*[Content truncated...]*

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to SpyCloud Enterprise Protection CCF](../solutions/spycloud-enterprise-protection-ccf.md)

