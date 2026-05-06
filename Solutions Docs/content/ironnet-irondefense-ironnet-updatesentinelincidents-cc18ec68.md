# IronNet_UpdateSentinelIncidents

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

author: IronNet

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [IronNet IronDefense](../solutions/ironnet-irondefense.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/IronNet%20IronDefense/Playbooks/IronNet_UpdateSentinelIncidents/azuredeploy.json) |

> ⚠️ **Not listed in Solution JSON:** This content item was discovered by scanning the solution folder but is not included in the official Solution JSON file. It may be a legacy item, under development, or excluded from the official solution package.

## Logic App Connectors

This playbook uses **2** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `azuresentinel` | Managed | 1 | 3 |
| `http` | Built-in | 0 | 3 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`azuresentinel`** (managedApi):
- *Update_incident_2*: method=`put`, path=`/Incidents`
- *Update_incident*: method=`put`, path=`/Incidents`
- *Add_comment_to_incident_(V3)*: method=`post`, path=`/Incidents/Comment`

**`http`** (builtin):
- *Get_Alert_IronDome_Information*: method=`POST`, uri=`@{parameters('IronNetUrl')}/IronApi/GetAlertIronDomeInformation`
- *Generate_the_token_for_Azure_Sentinel_Incident*: method=`POST`, uri=`https://login.microsoftonline.com/@{parameters('TenantId')}/oauth2/token`
- *Get_Sentinel_Incident*: method=`GET`, uri=`https://management.azure.com@{parameters('ResourceGroupId')}/providers/Microsoft.OperationalInsights/workspaces/@{parameters('workspace_name')}/providers/Microsoft.SecurityInsights/incidents?api-version=2020-01-01&$filter=endsWith(properties/title,'(@{variables('IronNet Alert Id')})')`

</details>

## Additional Documentation

> 📄 *Source: [IronNet_UpdateSentinelIncidents/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/IronNet%20IronDefense/Playbooks/IronNet_UpdateSentinelIncidents/readme.md)*

author: IronNet

This playbook is used to keep IronDefense and Azure Sentinel in sync by
triggering on any new IronDefense alert notifications that is added to a
Sentinel incident and updating the incident's status and classification based on
the IronDefense alert.

## Prerequisites
1. Configure the IronNet IronDefense data connector.
2. Create an analytic rule using the "Create Incidents from IronDefense" rule
   template.

## Deployment Instructions
1. Click the "Deploy to Azure" button to open the ARM template wizard to deploy
this playbook.<br>
[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FIronNet%20IronDefense%2FPlaybooks%2FIronNet_UpdateSentinelIncidents%2Fazuredeploy.json) [![Deploy to Azure](https://aka.ms/deploytoazuregovbutton)](https://portal.azure.us/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FIronNet%20IronDefense%2FPlaybooks%2FIronNet_UpdateSentinelIncidents%2Fazuredeploy.json)
2. Enter template parameters. Use the IronVue user credentials for IronAPI.

## Playbook Execution
1. The Playbook execution begins with an Alert triggered due to the IronDefense 
   Alert activity
2. This Alert contains the actions taken by the IronDefense Alert
3. These actions will have the information about the status, classification and 
   severity of the Irondefense Alert
4. These details will be picked from the IronDefense and update to its corresponding 
   Sentinel Incidents
5. The Alerts from IronDefense will be the Events associated with the Sentinel Incidents
6. The Status, Classification and Severity of the Irondefense Alert will be updated as 
   the Sentinel Incident's status, classification and severity respectively
7. The Sentinel Incident's "custom details" will be consisting of IronDefense Analyst rating, 
   AlertCreatedTime and IronDefenseAlertId fields
8. The Sentinel Incident's comments will be updated with the comments raised by users for IronDome Notifications

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to IronNet IronDefense](../solutions/ironnet-irondefense.md)

