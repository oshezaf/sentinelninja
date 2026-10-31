# Group-IB TI - Score incident IP addresses

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Triggered by a Microsoft Sentinel incident. Retrieves the Group-IB risk score and associated categories for every IP entity on the incident and posts the result back as an incident comment.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Group-IB](../solutions/group-ib.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Group-IB/Playbooks/GIBTIA_Score_IP/azuredeploy.json) |

## Logic App Connectors

This playbook uses **2** Logic App connectors / built-in actions:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| [`azuresentinel`](../logic-apps/managed-azuresentinel.md) | Managed | 1 | 1 |
| [`http`](../logic-apps/builtin-http.md) | Built-in | 0 | 1 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

#### [`azuresentinel`](../logic-apps/managed-azuresentinel.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Add_comment_to_incident | post | `/Incidents/Comment` | — |

#### [`http`](../logic-apps/builtin-http.md) (Built-in)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Score_IPs | POST | `https://tap.group-ib.com/api/v2/scoring` | — |

</details>

## Additional Documentation

> 📄 *Source: [GIBTIA_Score_IP/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Group-IB/Playbooks/GIBTIA_Score_IP/readme.md)*

Triggered by a Microsoft Sentinel incident. Retrieves the Group-IB risk score and associated categories for every IP entity on the incident and posts the result back as an incident comment.

## Quick Deployment

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FGroup-IB%2FPlaybooks%2FGIBTIA_Score_IP%2Fazuredeploy.json)

## Prerequisites

- A Group-IB Threat Intelligence subscription with API access.
- A Log Analytics workspace connected to Microsoft Sentinel.

**Entity types:** `ip`

## Post-deployment

1. Authorize the Microsoft Sentinel API connection.
2. Assign the Microsoft Sentinel Responder role to the playbook's managed identity so it can add incident comments.
3. Set the GIBUsername and GIBApiKey parameters.
4. Attach the playbook to an automation rule so it runs when an incident is created.

---

Part of the Group-IB Threat Intelligence integration. See [the Playbooks readme](../readme.md) for the full catalog, architecture and deployment order.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to Group-IB](../solutions/group-ib.md)

