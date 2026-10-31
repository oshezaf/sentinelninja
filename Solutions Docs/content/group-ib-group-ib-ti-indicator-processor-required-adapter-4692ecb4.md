# Group-IB TI - Indicator processor (required adapter)

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Required adapter for the Group-IB collector playbooks. Receives batched STIX 2.1 indicators from the collectors and uploads them to Microsoft Sentinel with Upload_Indicators_V2 using a managed identity. Deploy this playbook before any Group-IB collector.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Group-IB](../solutions/group-ib.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Group-IB/Playbooks/GIBTIA_IndicatorProcessor_v2/azuredeploy.json) |

## Logic App Connectors

This playbook uses **1** Logic App connector / built-in action:

| Connector / Action | Type | Connections | Actions |
|:-------------------|:-----|:-----------:|:-------:|
| [`azuresentinel`](../logic-apps/managed-azuresentinel.md) | Managed | 1 | 1 |

<details><summary>Action parameters (URLs, paths, function IDs)</summary>

#### [`azuresentinel`](../logic-apps/managed-azuresentinel.md) (Managed)

| Action | Method | Endpoint | Other |
|:-------|:-------|:---------|:------|
| Upload_Indicators_V2 | post | `/V2/ThreatIntelligence/@{parameters('WorkspaceId')}/UploadIndicators/` | — |

</details>

## Additional Documentation

> 📄 *Source: [GIBTIA_IndicatorProcessor_v2/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Group-IB/Playbooks/GIBTIA_IndicatorProcessor_v2/readme.md)*

Required adapter for the Group-IB collector playbooks. Receives batched STIX 2.1 indicators from the collectors and uploads them to Microsoft Sentinel with Upload_Indicators_V2 using a managed identity. Deploy this playbook before any Group-IB collector.

## Quick Deployment

[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FGroup-IB%2FPlaybooks%2FGIBTIA_IndicatorProcessor_v2%2Fazuredeploy.json)

## Prerequisites

- A Log Analytics workspace connected to Microsoft Sentinel.

## Post-deployment

1. Assign the Microsoft Sentinel Contributor role to the playbook's managed identity at workspace scope.
2. Enable the Logic App. It deploys in a Disabled state by design.
3. Deploy the Group-IB collector playbooks afterwards. Each one batches indicators to this adapter by name.

---

Part of the Group-IB Threat Intelligence integration. See [the Playbooks readme](../readme.md) for the full catalog, architecture and deployment order.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Playbooks](playbooks.md) · [Back to Group-IB](../solutions/group-ib.md)

