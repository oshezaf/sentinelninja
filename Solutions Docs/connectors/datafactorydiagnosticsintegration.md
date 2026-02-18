# 🔗 Azure Data Factory (Azure Diagnostics)

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Integrations](../integrations-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Integrations Index](../integrations-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Collection Method** | [Azure Diagnostics](../methods/azure-diagnostics.md) |

[Azure Data Factory](https://learn.microsoft.com/en-us/azure/data-factory/introduction) is a cloud-based data integration service for creating data-driven workflows.

To collect Azure Data Factory logs into a Log Analytics workspace, configure [Azure Diagnostic Settings](https://learn.microsoft.com/en-us/azure/data-factory/monitor-using-azure-monitor) for the resource, selecting the log categories to send to the workspace.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`ADFActivityRun`](../tables/adfactivityrun.md) | ✓ | ✗ | — |
| [`ADFPipelineRun`](../tables/adfpipelinerun.md) | ✓ | ✗ | — |
| [`ADFSandboxActivityRun`](../tables/adfsandboxactivityrun.md) | ✓ | ✗ | — |
| [`ADFSandboxPipelineRun`](../tables/adfsandboxpipelinerun.md) | ✓ | ✗ | — |
| [`ADFTriggerRun`](../tables/adftriggerrun.md) | ✓ | ✗ | — |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Integrations](../integrations-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Integrations Index](../integrations-index.md)

