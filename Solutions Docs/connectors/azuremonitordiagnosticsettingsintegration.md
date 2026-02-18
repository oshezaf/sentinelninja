# 🔗 Azure Monitor Platform (Azure Diagnostics)

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Integrations](../integrations-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Integrations Index](../integrations-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Collection Method** | [Azure Diagnostics](../methods/azure-diagnostics.md) |

[Azure Monitor platform logs](https://learn.microsoft.com/en-us/azure/azure-monitor/essentials/platform-logs-overview) provide detailed diagnostic and auditing information for Azure resources and the Azure platform.

To collect these logs into a Log Analytics workspace, configure [Azure Diagnostic Settings](https://learn.microsoft.com/en-us/azure/azure-monitor/essentials/create-diagnostic-settings) for the resource, selecting the log categories to send to the workspace.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`AACAudit`](../tables/aacaudit.md) | ✓ | ✗ | — |
| [`AOIDatabaseQuery`](../tables/aoidatabasequery.md) | ✓ | ✗ | — |
| [`AOIStorage`](../tables/aoistorage.md) | ✓ | ✗ | — |
| [`AzureMetricsV2`](../tables/azuremetricsv2.md) | ✗ | ✗ | — |
| [`DataTransferOperations`](../tables/datatransferoperations.md) | ✓ | ✗ | — |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Integrations](../integrations-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Integrations Index](../integrations-index.md)

