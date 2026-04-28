# Cribl

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Cribl-Logo.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `Cribl` |
| **Publisher** | Cribl |
| **Used in Solutions** | [Cribl](../solutions/cribl.md) |
| **Collection Method** | [REST Pull API](../methods/rest-pull-api.md) |
| **Connector Definition Files** | [Connector_Cribl.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cribl/Data%20Connectors/Connector_Cribl.json) |
| **Ingestion API** | [HTTP Data Collector API](../methods/http-data-collector-api.md) — *Connector definition requires workspace key (SharedKey pattern)* |
| **Custom Log V1 Tables** | Yes 🔶 — ingests into tables with type-suffixed columns |

The [Cribl](https://cribl.io/accelerate-cloud-migration/) connector allows you to easily connect your Cribl (Cribl Enterprise Edition - Standalone) logs with Microsoft Sentinel. This gives you more security insight into your organization's data pipelines.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`CriblAccess_CL`](../tables/criblaccess-cl.md) 🔶 | ? | ✓ | ? |
| [`CriblAudit_CL`](../tables/criblaudit-cl.md) 🔶 | ? | ✓ | ? |
| [`CriblInternal_CL`](../tables/criblinternal-cl.md) 🔶 | ? | ✓ | ? |
| [`CriblUIAccess_CL`](../tables/cribluiaccess-cl.md) 🔶 | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): read and write permissions are required.
- **Keys** (Workspace): read permissions to shared keys for the workspace are required. [See the documentation to learn more about workspace keys](https://docs.microsoft.com/azure/azure-monitor/platform/agent-windows#obtain-workspace-id-and-key).

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Installation and setup instructions for Cribl Stream for Microsoft Sentinel**

Use the documentation from this Github repository and configure Cribl Stream using 

https://docs.cribl.io/stream/usecase-azure-workspace/

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

