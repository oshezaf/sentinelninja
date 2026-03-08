# Tropico Security - Events

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Tropico.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `TropicoEventsDefinition` |
| **Publisher** | Tropico Security |
| **Used in Solutions** | [Tropico](../solutions/tropico.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [TropicoEvents_ConnectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Tropico/Data%20Connectors/TropicoEvents_CCF/TropicoEvents_ConnectorDefinition.json) |
| **CCF Configuration** | [TropicoEvents_PollerConfig.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Tropico/Data%20Connectors/TropicoEvents_CCF/TropicoEvents_PollerConfig.json) |
| **CCF Capabilities** | `APIKey`, `Paging` |

Ingest security events from Tropico Security Platform in OCSF Security Finding format.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`Tropico_Events_CL`](../tables/tropico-events-cl.md) | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and write permissions required

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Connect Tropico Security Platform**

Enter your read-only API key from Tropico Settings.
- **API Key**: (password field)
- Click 'Connect' to establish connection

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Connectors Index](../connectors-index.md)

