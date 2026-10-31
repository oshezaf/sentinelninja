# SpyCloud MDE Automation Playbook

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Automates Microsoft Defender for Endpoint response actions - machine isolation, machine tagging and IOC submission - when SpyCloud breach data identifies a compromised machine.

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
| Machines_-_Get_single_machine | get | `/api/machines/@{items('For_each')?['HostName']}` | — |
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

This playbook automates endpoint response actions in Microsoft Defender for Endpoint (MDE) when SpyCloud breach data identifies compromised machines.

**Capabilities**
- Machine isolation in Defender for Endpoint
- Machine tagging for tracking, grouping, and policy targeting
- IOC submission to Defender Threat Intelligence
- Optional Microsoft Sentinel incident creation
- Email notifications
- Execution log ingestion to `Spycloud_MDE_LogsV2_CL`

The deployment also creates the Microsoft Sentinel automation rule that invokes this playbook, so no separate wiring step is needed. See [Automation rule](#automation-rule) below.

## Prerequisites

- App Registration with the Microsoft Graph and WindowsDefenderATP permissions listed in the SpyCloud Sentinel Integration Guide, Section 2.1
- DCR Immutable ID and DCE Logs Ingestion Endpoint URL for `Spycloud_MDE_LogsV2_CL` (Section 2.2)
- Monitoring Metrics Publisher role assigned to the App Registration on that DCR
- **Microsoft Sentinel Automation Contributor** granted to the **Azure Security Insights** service principal on the resource group you are deploying into — see below

### Finding the DCR immutable ID and DCE endpoint

The solution template names its data collection rule `SpyCloudwatchlist-DCR`, but Microsoft Sentinel does not create it under that name. When you connect the data connector, Sentinel provisions the rule itself as `Microsoft-Sentinel-SpyCloudwatchlist-DCR-<guid>` and pairs it with an auto-generated `asi-<guid>` data collection endpoint. Searching for `SpyCloudwatchlist-DCR` in the portal will not find it, and if the connector has been connected more than once there will be several, only the most recent of which is in use.

Read both values from the live connector rather than hunting through the resource list:

```bash
SUB=<subscription-id>; RG=<resource-group>; WS=<workspace-name>
az rest --method get --url "https://management.azure.com/subscriptions/$SUB/resourceGroups/$RG/providers/Microsoft.OperationalInsights/workspaces/$WS/providers/Microsoft.SecurityInsights/dataConnectors?api-version=2023-02-01-preview" --query "value[?properties.dcrConfig] | [0].properties.dcrConfig.{immutableId: dataCollectionRuleImmutableId, endpoint: dataCollectionEndpoint}"
```

All four pollers share the same rule and endpoint, so any one of them gives the right answer. Note that the endpoint you need is the **Logs Ingestion** URL — `...ingest.monitor.azure.com`, not the `...handler.control.monitor.azure.com` configuration-access URL shown alongside it on the DCE resource. Grant the App Registration **Monitoring Metrics Publisher** on that same rule.

### Grant Automation Contributor first

This deployment creates a Microsoft Sentinel automation rule alongside the Logic App, and Sentinel refuses to create an automation rule unless it already has permission to run playbooks in the target resource group. Without it the deployment fails with:

```
Missing required permissions for Microsoft Sentinel on the playbook resource '.../SpyCloud_MDE_Automation'
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
6. Authorize the `office365` and `WindowsDefenderATP` API connections created by the deployment

### Parameters

| Parameter | Type | Default | Description |
|---|---|---|---|
| PlaybookName | String | SpyCloud_MDE_Automation | Name of the Logic App resource |
| Workspace_Name | String | — | Name of the Log Analytics workspace where Microsoft Sentinel is enabled. Used to build the incident path for the optional 'Create incident in Sentinel' action |
| Isolate_Machine | String | false | Enable automatic machine isolation in Defender for Endpoint |
| Machine_Tag_Value | String | — | Tag applied to affected machines in Defender for Endpoint. Leave blank to skip tagging |
| Save_IOCs_Defender | String | false | Submit breach-derived indicators to Defender Threat Intelligence |

*[Content truncated...]*

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to SpyCloud Enterprise Protection CCF](../solutions/spycloud-enterprise-protection-ccf.md)

