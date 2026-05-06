# CiscoISE-TakeEndpointActionFromTeams

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

When a new sentinel incident is created, this playbook gets triggered and performs the following actions: 1. Sends an adaptive card to the Teams channel where the analyst can choose an action to be taken. 2. Assigns a policy (policy name is provided during the deployment stage) to an endpoint (*MACAddress* of the endpoint is provided in the alert custom entities) depending on the action chosen in the adaptive card. 3. Changes incident status and severity depending on the action chosen in the ada

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Cisco ISE](../solutions/cisco-ise.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cisco%20ISE/Playbooks/CiscoISE-TakeEndpointActionFromTeams/azuredeploy.json) |

## Logic App Connectors

This playbook uses **3** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| [`azuresentinel`](../logic-apps/managed-azuresentinel.md) | Managed | 1 | 12 |
| [`teams`](../logic-apps/managed-teams.md) | Managed | 1 | 0 |
| [`CiscoISE`](../logic-apps/custom-ciscoise.md) | Custom | 1 | 1 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

#### [`azuresentinel`](../logic-apps/managed-azuresentinel.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Add_comment_to_incident_(V3) | post | `/Incidents/Comment` | — |
| Update_incident | put | `/Incidents` | — |
| Update_incident_2 | put | `/Incidents` | — |
| Update_incident_3 | put | `/Incidents` | — |
| Update_incident_4 | put | `/Incidents` | — |
| Update_incident_5 | put | `/Incidents` | — |
| Update_incident_6 | put | `/Incidents` | — |
| Update_incident_7 | put | `/Incidents` | — |
| Update_incident_8 | put | `/Incidents` | — |
| Update_incident_9 | put | `/Incidents` | — |
| Update_incident_10 | put | `/Incidents` | — |
| Update_incident_11 | put | `/Incidents` | — |

#### [`CiscoISE`](../logic-apps/custom-ciscoise.md) (Custom)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Assign_an_ANC_policy_to_an_endpoint | put | `/ers/config/ancendpoint/apply` | — |

</details>

## Additional Documentation

> 📄 *Source: [CiscoISE-TakeEndpointActionFromTeams/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cisco%20ISE/Playbooks/CiscoISE-TakeEndpointActionFromTeams/readme.md)*

## Summary

When a new sentinel incident is created, this playbook gets triggered and performs the following actions:

1. Sends an adaptive card to the Teams channel where the analyst can choose an action to be taken.

<img src="https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cisco%20ISE/Playbooks/CiscoISE-TakeEndpointActionFromTeams/teams_screenshot.png" width="50%"/><br>

2. Assigns a policy (policy name is provided during the deployment stage) to an and point (*MACAddress* of the endpoint is provided in the alert custom entities) depending on the action chosen in the adaptive card.
3. Changes incident status and severity depending on the action chosen in the adaptive card.
4. Adds comment to the incident with information about the actions taken.

<img src="https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cisco%20ISE/Playbooks/CiscoISE-TakeEndpointActionFromTeams/playbook_screenshot.png" width="50%"/><br>

### Prerequisites

1. Prior to the deployment of this playbook, Cisco ISE Connector needs to be deployed under the same subscription.
2. Obtain Cisco ISE ERS API credentials. Refer to Cisco ISE Custom Connector documentation.
3. Obtain Teams group id and channel id.

### Deployment instructions

1. To deploy the Playbook, click the Deploy to Azure button. This will launch the ARM Template deployment wizard.
2. Fill in the required paramteres:
    * Playbook Name: Enter the playbook name here
    * Teams Group Id: Id of the Teams Group where the adaptive card will be posted
    * Teams Channel Id: Id of the Teams Channel where the adaptive card will be posted
    * Policy Name: Policy name to be assigned to an endpoint

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FCisco%2520ISE%2FPlaybooks%2FCiscoISE-TakeEndpointActionFromTeams%2Fazuredeploy.json) [![Deploy to Azure](https://aka.ms/deploytoazuregovbutton)](https://portal.azure.us/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FCisco%2520ISE%2FPlaybooks%2FCiscoISE-TakeEndpointActionFromTeams%2Fazuredeploy.json)

### Post-Deployment instructions

#### a. Authorize connections

Once deployment is complete, authorize each connection.

1. Click the Azure Sentinel connection resource
2. Click edit API connection
3. Click Authorize
4. Sign in
5. Click Save
6. Repeat steps for other connections

#### b. Configurations in Sentinel

1. In Azure sentinel, analytical rules should be configured to trigger an incident. An incident should have the *MACAddress* custom entity that contains MAC address of an endpoint in Cisco ISE. It can be obtained from the corresponding field in Cisco ISE logs. Check the [documentation](https://docs.microsoft.com/azure/sentinel/surface-custom-details-in-alerts) to learn more about adding custom entities to incidents.
2. Configure the automation rules to trigger the playbook.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to Cisco ISE](../solutions/cisco-ise.md)

