# ExposureGraphEdges

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

> **Defender XDR Only:** This table is available in Microsoft Defender XDR advanced hunting but is not available in the Azure Monitor Log Analytics table reference.

Microsoft Security Exposure Management exposure graph edge information provides visibility into relationships between entities and assets in the graph

| Attribute | Value |
|:----------|:------|
| **Category** | XDR |
| **Ingestion API Supported** | ✗ No |
| **Defender XDR Advanced Hunting Schema** | [View Documentation](https://learn.microsoft.com/en-us/defender-xdr/advanced-hunting-exposuregraphedges-table) |

## Schema (11 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/exposuregraphedges)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| EdgeId | string | Unique identifier for the relationship/edge |
| EdgeLabel | string | The edge label like "routes traffic to" |
| EdgeProperties | dynamic | Optional data relevant for the relationship between the nodes in JSON format |
| SourceNodeCategories | dynamic | Categories list of the source node in JSON format |
| SourceNodeId | string | Node ID of the edge's source |
| SourceNodeLabel | string | Source node label |
| SourceNodeName | string | Source node display name |
| TargetNodeCategories | dynamic | The categories list of the target node in JSON format |
| TargetNodeId | string | Node ID of the edge's target |
| TargetNodeLabel | string | Target node label |
| TargetNodeName | string | Display name of the target node |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

