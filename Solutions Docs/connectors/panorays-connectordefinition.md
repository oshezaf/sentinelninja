# Panorays

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `Panorays_ConnectorDefinition` |
| **Publisher** | Panorays |
| **Used in Solutions** | [Panorays](../solutions/panorays.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [PanoraysSelfFindings_ConnectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Panorays/Data%20Connectors/PanoraysSelfFindings_ccf/PanoraysSelfFindings_ConnectorDefinition.json) |
| **DCR Definition Files** | [PanoraysSelfFindings_DCR.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Panorays/Data%20Connectors/PanoraysSelfFindings_ccf/PanoraysSelfFindings_DCR.json) |
| **CCF Configuration** | [PanoraysSelfFindings_PollerConfig.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Panorays/Data%20Connectors/PanoraysSelfFindings_ccf/PanoraysSelfFindings_PollerConfig.json) |
| **CCF Capabilities** | `APIKey`, `Paging` |

The Panorays data connector allows ingesting company findings from the Panorays API into Microsoft Sentinel.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`PanoraysCompanyFindingPOC_CL`](../tables/panorayscompanyfindingpoc-cl.md) | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Microsoft.OperationalInsights/workspaces** (Workspace): Read and Write permissions on the Log Analytics workspace are required. A valid Panorays API Token and API Base URL are required for data ingestion.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

#### Configuration steps for the Panorays API
- **API Token**: API Token
- Click 'Connect' to establish connection

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

