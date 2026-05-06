# Create And Update ServiceNow Record

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook will create or update incident in ServiceNow. When incident is created, playbook will run and create incident in ServiceNow. When incident is updated, playbook will run and add update to comment section. When incident is closed, playbook will run and close incident in ServiceNow.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Servicenow](../solutions/servicenow.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Servicenow/Playbooks/ServiceNow-CreateAndUpdateIncident/azuredeploy.json) |

## Logic App Connectors

This playbook uses **3** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| `azuresentinel` | Managed | 1 | 0 |
| `microsoftsentinel` | Managed | 0 | 1 |
| `service-now` | Managed | 1 | 3 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

**`microsoftsentinel`** (managedApi):
- *Update_incident*: method=`put`, path=`/Incidents`

**`service-now`** (managedApi):
- *Create_Record*: method=`post`, path=`/api/now/v2/table/@{encodeURIComponent('incident')}`
- *Update_Record_-_Incident_closed*: method=`put`, path=`/api/now/v2/table/@{encodeURIComponent('incident')}/@{encodeURIComponent(variables('SNOW System ID'))}`
- *Update_Record_-_incident_not_closed*: method=`put`, path=`/api/now/v2/table/@{encodeURIComponent('incident')}/@{encodeURIComponent(variables('SNOW System ID'))}`

</details>

## Additional Documentation

> 📄 *Source: [ServiceNow-CreateAndUpdateIncident/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Servicenow/Playbooks/ServiceNow-CreateAndUpdateIncident/readme.md)*

# ServiceNow-CreateAndUpdateIncident
author: Benjamin Kovacevic

This playbook will create or update incident in ServiceNow. When incident is created, playbook will run and create incident in ServiceNow. When incident is updated, playbook will run and add update to comment section. When incident is closed, playbook will run and close incident in ServiceNow.

# Prerequisites

We will need following data to make Jira connector:<br>
1. ServiceNow instance (ex. xyz.service-now.com)
2. Username
3. Password
![ServiceNow connector requirements](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Servicenow/Playbooks/ServiceNow-CreateAndUpdateIncident/images/ServiceNow-connector-requirementsDark.png)<br>

# Quick Deployment
[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FServicenow%2FPlaybooks%2FServiceNow-CreateAndUpdateIncident%2Fazuredeploy.json)
[![Deploy to Azure Gov](https://raw.githubusercontent.com/Azure/azure-quickstart-templates/master/1-CONTRIBUTION-GUIDE/images/deploytoazuregov.png)](https://portal.azure.us/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FServicenow%2FPlaybooks%2FServiceNow-CreateAndUpdateIncident%2Fazuredeploy.json)
<br><br>

# Post-deployment
1. Authorize ServiceNow connector
2. Assign Microsoft Sentinel Responder role to playbook's managed identity. To do so, choose Identity blade under Settings of the Logic App.
3. Add playbook as an action to the automation rule, ex.:
- Trigger = When incident is updated;  
- Condition = Staus > Changed To > Closed;.<br>
**Automation Rule Example**<br>
![Automation Rule Example](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Servicenow/Playbooks/ServiceNow-CreateAndUpdateIncident/images/AutomationRuleExampleDark.jpg)
**Automation Rule Condition Example**<br>
![Automation Rule Condition Example](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Servicenow/Playbooks/ServiceNow-CreateAndUpdateIncident/images/AutomationRuleExample2Dark.jpg)

# Screenshots

**Playbook** <br>
![playbook screenshot](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Servicenow/Playbooks/ServiceNow-CreateAndUpdateIncident/images/ServiceNowPlaybookDark.jpg)<br>
![playbook screenshot](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Servicenow/Playbooks/ServiceNow-CreateAndUpdateIncident/images/ServiceNowPlaybookLight.jpg)<br><br>

**ServiceNow New Incident** <br>
![ServiceNow screenshot new](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Servicenow/Playbooks/ServiceNow-CreateAndUpdateIncident/images/ServiceNowNewIncident.jpg)<br><br>

**ServiceNow Update Incident** <br>
![ServiceNow screenshot update](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Servicenow/Playbooks/ServiceNow-CreateAndUpdateIncident/images/ServiceNowTagAdded.jpg)<br>

**ServiceNow Incident closed** <br>
![ServiceNow screenshot closed](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Servicenow/Playbooks/ServiceNow-CreateAndUpdateIncident/images/ServiceNowIncidentClosed.jpg)<br><br>

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to Servicenow](../solutions/servicenow.md)

