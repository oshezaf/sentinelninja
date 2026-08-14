# SpyCloud_MDE_Automation

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook automates endpoint response actions in Microsoft Defender for Endpoint (MDE) when SpyCloud breach data identifies compromised machines.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [SpyCloud Enterprise Protection CCF](../solutions/spycloud-enterprise-protection-ccf.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SpyCloud%20Enterprise%20Protection%20CCF/Playbooks/SpyCloud_MDE_Automation/azuredeploy.json) |

## Logic App Connectors

This playbook uses **4** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| [`azuresentinel`](../logic-apps/managed-azuresentinel.md) | Managed | 1 | 5 |
| [`office365`](../logic-apps/managed-office365.md) | Managed | 1 | 1 |
| [`wdatp`](../logic-apps/managed-wdatp.md) | Managed | 1 | 3 |
| [`http`](../logic-apps/builtin-http.md) | Built-in | 0 | 4 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

#### [`azuresentinel`](../logic-apps/managed-azuresentinel.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Entities_-_Get_Hosts | post | `/entities/host` | — |
| Create_incident | put | `[concat('/Incidents/subscriptions/', subscription().subscriptionId, '/resourceGroups/', resourceGroup().name, '/workspaces/', parameters('Workspace_Name'))]` | — |
| Entities_-_Get_DNS | post | `/entities/dnsresolution` | — |
| Entities_-_Get_IPs | post | `/entities/ip` | — |
| Entities_-_Get_URLs | post | `/entities/url` | — |

#### [`office365`](../logic-apps/managed-office365.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Send_an_email_(V2) | post | `/v2/Mail` | — |

#### [`wdatp`](../logic-apps/managed-wdatp.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Machines_-_Get_single_machine | get | `/api/machines/@variables('host_name')` | — |
| Actions_-_Isolate_machine | post | `/api/machines/@{encodeURIComponent(body('Machines_-_Get_single_machine')?['id'])}/isolate` | — |
| Machines_-_Tag_machine | post | `/api/machines/@{encodeURIComponent(body('Machines_-_Get_single_machine')?['id'])}/tags` | — |

#### [`http`](../logic-apps/builtin-http.md) (Built-in)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| GetAccessToken | POST | `@concat(variables('loginUrl'), parameters('TenantID'), '/oauth2/v2.0/token')` | — |
| Log_ingestion | POST | `@variables('log_ingestion_api')` | — |
| Auth_MDE | POST | `@concat(variables('loginUrl'), parameters('TenantID'), '/oauth2/v2.0/token')` | — |
| HTTP_-_Create_Indicator | POST | `https://api.security.microsoft.com/api/indicators/import` | — |

</details>

## Additional Documentation

> 📄 *Source: [SpyCloud_MDE_Automation/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SpyCloud%20Enterprise%20Protection%20CCF/Playbooks/SpyCloud_MDE_Automation/readme.md)*

# SpyCloud MDE Automation Playbook

This playbook automates endpoint response actions in Microsoft Defender for Endpoint (MDE) when SpyCloud breach data identifies compromised machines.

**Capabilities**
- Machine isolation in Defender for Endpoint
- Machine tagging for tracking, grouping, and policy targeting
- IOC submission to Defender Threat Intelligence
- Microsoft Sentinel incident creation
- Email notifications
- Execution log ingestion to `Spycloud_MDE_LogsV2_CL`

## Prerequisites

- App Registration with the Microsoft Graph and WindowsDefenderATP permissions listed in the [Integration Guide](../../SpyCloud_Sentinel_Integration_Guide.md), Section 2.1
- DCR Immutable ID and DCE Logs Ingestion Endpoint URL for `Spycloud_MDE_LogsV2_CL` (Section 2.2)
- Monitoring Metrics Publisher role assigned to the App Registration on that DCR

## Deployment

1. In the Azure Portal, navigate to **Deploy a custom template**
2. Select this template (`azuredeploy.json`)
3. Confirm Subscription, Resource Group, and Region
4. Enter a value for **PlaybookName** (this is the only ARM deployment-time parameter)
5. Click **Review + Create**, then **Create**
6. Authorize the `office365`, `WindowsDefenderATP`, and `azuresentinel` API connections created by the deployment

## Post-deployment configuration

All other settings are **workflow parameters**, baked into the Logic App with default values. After the playbook is deployed, update them with your own values:

1. Navigate to the Microsoft Sentinel workspace, open **Automation**, and select the `SpyCloud_MDE_Automation` playbook — or go directly to the Logic App resource in the Azure Portal
2. Open the Logic App and click **Edit** to open the workflow designer
3. Open the **Parameters** section (in the designer toolbar, or under **Development Tools → Workflow parameters**)
4. For each parameter listed below, enter the appropriate value for your environment
5. Click **Save** to apply the changes to the playbook

| Parameter | Type | Default | Description |
|---|---|---|---|
| Isolate_Machine | Bool | false | Enables automatic machine isolation in Defender for Endpoint |
| Machine_Tag_Value | String | (empty) | Tag value applied to affected machines |
| Save_IOCs_Defender | Bool | false | Enables submitting IOCs to Defender Threat Intelligence |
| IOC_Expiration_Days | Int | 30 | Days before a submitted IOC expires in Defender |
| Spycloud_Defender_DCE_Endpoint | String | (empty) | DCE Logs Ingestion Endpoint URL |
| Spycloud_Defender_DCE_Immutable_ID | String | (empty) | DCR Immutable ID for `Spycloud_MDE_LogsV2_CL` |
| TenantID | String | (empty) | Azure Tenant ID |
| ClientID | String | (empty) | App Registration Client ID |
| Client_Secret | String | (empty) | App Registration Client Secret |
| Ingestion_Table_Name | String | Spycloud_MDE_LogsV2_CL | Custom Log Analytics table for playbook logs |
| create_incident_in_sentinel | Bool | false | Enables automatic Sentinel incident creation |
| Workspace_Name | String | Your workspace name | Log Analytics Workspace name |
| Defender_IOC_Action_Type | String | Alert | IOC action in Defender, e.g. Alert, Warn, Block, Audit, or AlertAndBlock |
| notification_email | String | (empty) | Notification email address(es), semicolon-separated |

After saving workflow parameters, confirm `SpyCloud_MDE_Automation` shows status **Enabled** and check Run History for immediate failures.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to SpyCloud Enterprise Protection CCF](../solutions/spycloud-enterprise-protection-ccf.md)

