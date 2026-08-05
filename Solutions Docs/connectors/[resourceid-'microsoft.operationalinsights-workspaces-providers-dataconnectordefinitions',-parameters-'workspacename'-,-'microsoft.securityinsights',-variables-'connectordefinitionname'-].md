# ⚠️ 🔍 Panorays (Manual)

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace or not installed in Content Hub.

> 🔍 **Discovered:** This item was discovered by scanning the solution folder but is not listed in the Solution JSON file.

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `[resourceId('Microsoft.OperationalInsights/workspaces/providers/dataConnectorDefinitions', parameters('workspaceName'), 'Microsoft.SecurityInsights', variables('connectorDefinitionName'))]` |
| **Publisher** | Panorays |
| **Used in Solutions** | [Panorays](../solutions/panorays.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [PanoraysSelfFindings_DeployInstance.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Panorays/Data%20Connectors/PanoraysSelfFindings_ccf/PanoraysSelfFindings_DeployInstance.json) |
| **DCR Definition Files** | [PanoraysSelfFindings_DCR.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Panorays/Data%20Connectors/PanoraysSelfFindings_ccf/PanoraysSelfFindings_DCR.json) |
| **CCF Configuration** | [PanoraysSelfFindings_PollerConfig.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Panorays/Data%20Connectors/PanoraysSelfFindings_ccf/PanoraysSelfFindings_PollerConfig.json) |
| **CCF Capabilities** | `APIKey`, `Paging` |

Manually deployed Panorays Connector for testing.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`PanoraysCompanyFindingPOC_CL`](../tables/panorayscompanyfindingpoc-cl.md) | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Log Analytics Workspace** (ResourceGroup): Read and Write required.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

Manual Deployment Test

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

