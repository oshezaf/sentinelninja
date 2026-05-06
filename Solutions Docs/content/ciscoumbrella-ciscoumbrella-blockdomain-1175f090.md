# CiscoUmbrella-BlockDomain

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This playbook showcases an example of triggering an incident within a targeted Teams channel and opening up a ticket within Service Now. Additionally The playbook will also list playbooks that can be initiated from teams using an adaptive card and callbacks that will take action upon certain entities identified in the incident.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [CiscoUmbrella](../solutions/ciscoumbrella.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CiscoUmbrella/Playbooks/CiscoUmbrellaPlaybooks/CiscoUmbrella-BlockDomain/azuredeploy.json) |

## Logic App Connectors

This playbook uses **3** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| [`azuresentinel`](../logic-apps/managed-azuresentinel.md) | Managed | 1 | 2 |
| [`ciscoumbrellaenforcement`](../logic-apps/managed-ciscoumbrellaenforcement.md) | Managed | 0 | 1 |
| [`CiscoUmbrellaEnforcementAPI`](../logic-apps/custom-ciscoumbrellaenforcementapi.md) | Custom | 1 | 0 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

#### [`azuresentinel`](../logic-apps/managed-azuresentinel.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Add_comment_to_incident_(V3) | post | `/Incidents/Comment` | — |
| Entities_-_Get_URLs | post | `/entities/url` | — |

#### [`ciscoumbrellaenforcement`](../logic-apps/managed-ciscoumbrellaenforcement.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Block_domain | post | `/1.0/events` | — |

</details>

## Additional Documentation

> 📄 *Source: [CiscoUmbrellaPlaybooks/CiscoUmbrella-BlockDomain/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CiscoUmbrella/Playbooks/CiscoUmbrellaPlaybooks/CiscoUmbrella-BlockDomain/readme.md)*

## Summary

When a new sentinel incident is created, this playbook gets triggered and performs the following actions

1. Obtains domains from URL entities in the incident.
2. Optionally adds these domains to a customer's domain lists using [Cisco Cloud Security Enforcement API](https://developer.cisco.com/docs/cloud-security/#!enforcement-overview/overview).
3. Adds comment to incident with information about posted domains.

<img src="https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CiscoUmbrella/Playbooks/CiscoUmbrellaPlaybooks%5CCiscoUmbrella-BlockDomain/playbook_screenshot.png" width="50%"/><br>

### Prerequisites

1. Prior to the deployment of this playbook, Cisco Cloud Security Enforcement Connector needs to be deployed under the same subscription.
2. Obtain Cisco Cloud Security API credentials. Refer to Cisco Cloud Security Enforcement Custom Connector documentation.

### Deployment instructions

1. To deploy the Playbook, click the Deploy to Azure button. This will launch the ARM Template deployment wizard.
2. Fill in the required parameters:
    * Playbook Name: Enter the playbook name here

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FCiscoUmbrella%2FPlaybooksk%2FPlaybooks%2FCiscoUmbrella-BlockDomain%2Fazuredeploy.json) [![Deploy to Azure](https://aka.ms/deploytoazuregovbutton)](https://portal.azure.us/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FCiscoUmbrella%2FPlaybooks%2FPlaybooks%2FCiscoUmbrella-BlockDomain%2Fazuredeploy.json)

### Post-Deployment instructions

#### a. Authorize connections

Once deployment is complete, authorize each connection.

1. Click the Microsoft Sentinel connection resource
2. Click edit API connection
3. Click Authorize
4. Sign in
5. Click Save
6. Repeat steps for Cisco Cloud Security Enforcement connector API Connection. Provide your key and the secret for authorizing.

#### b. Configurations in Sentinel

1. In Microsoft sentinel, analytical rules should be configured to trigger an incident with a malicious URL. In the *Entity mapping* section of the analytics rule creation workflow, malicious URL should be mapped to **Url** identifier of the **URL** entity type. Check the [documentation](https://docs.microsoft.com/azure/sentinel/map-data-fields-to-entities) to learn more about mapping entities.
2. Configure the automation rules to trigger the playbook.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to CiscoUmbrella](../solutions/ciscoumbrella.md)

