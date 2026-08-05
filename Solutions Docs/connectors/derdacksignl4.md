# Derdack SIGNL4

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/signl4.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `DerdackSIGNL4` |
| **Publisher** | Derdack |
| **Used in Solutions** | [SIGNL4](../solutions/signl4.md) |
| **Collection Method** | [REST Pull API](../methods/rest-pull-api.md) |
| **Connector Definition Files** | [DerdackSIGNL4.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SIGNL4/Data%20Connectors/DerdackSIGNL4.json) |
| **Ingestion API** | [HTTP Data Collector API](../methods/http-data-collector-api.md) — *Connector definition requires workspace key (SharedKey pattern)* |
| **Custom Log V1 Tables** | Yes 🔶 — ingests into tables with type-suffixed columns |
| **Microsoft Learn** | [View on Learn](https://learn.microsoft.com/azure/sentinel/data-connectors-reference#derdack-signl4) |

When critical systems fail or security incidents happen, SIGNL4 bridges the ‘last mile’ to your staff, engineers, IT admins and workers in the field. It adds real-time mobile alerting to your services, systems, and processes in no time. SIGNL4 notifies through persistent mobile push, SMS text and voice calls with acknowledgement, tracking and escalation. Integrated duty and shift scheduling ensure the right people are alerted at the right time.



[Learn more >](https://www.signl4.com)

## Tables Ingested

This connector ingests data into the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`SIGNL4_CL`](../tables/signl4-cl.md) 🔶 |  | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): read and write permissions are required.
- **Keys** (Workspace): read permissions to shared keys for the workspace are required. [See the documentation to learn more about workspace keys](https://docs.microsoft.com/azure/azure-monitor/platform/agent-windows#obtain-workspace-id-and-key).

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

>**NOTE:** This legacy data connector includes a basic Azure Logic Apps playbook template for Microsoft Sentinel. The playbook runs when a new Microsoft Sentinel incident is created. You can extend the workflow by adding a SIGNL4 action in Azure Logic Apps to create a new alert in SIGNL4.

>**SIGNL4 Connector:** The recommended way to integrate SIGNL4 with Microsoft Sentinel is to use the Microsoft Sentinel connector app in SIGNL4. For full setup instructions, see [**Integrate SIGNL4 with Microsoft Sentinel**](https://docs.signl4.com/integrations/microsoft-sentinel/microsoft-sentinel.html).

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

