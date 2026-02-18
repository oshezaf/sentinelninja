# 🔗 Azure Digital Twins (Azure Diagnostics)

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Integrations](../integrations-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Integrations Index](../integrations-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Collection Method** | [Azure Diagnostics](../methods/azure-diagnostics.md) |

[Azure Digital Twins](https://learn.microsoft.com/en-us/azure/digital-twins/overview) is an IoT platform for creating digital models of real-world environments.

To collect Azure Digital Twins logs into a Log Analytics workspace, configure [Azure Diagnostic Settings](https://learn.microsoft.com/en-us/azure/digital-twins/how-to-enable-diagnostic-logs) for the resource, selecting the log categories to send to the workspace.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`ADTDataHistoryOperation`](../tables/adtdatahistoryoperation.md) | ✓ | ✗ | — |
| [`ADTDigitalTwinsOperation`](../tables/adtdigitaltwinsoperation.md) | ✓ | ✗ | — |
| [`ADTEventRoutesOperation`](../tables/adteventroutesoperation.md) | ✗ | ✗ | — |
| [`ADTModelsOperation`](../tables/adtmodelsoperation.md) | ✓ | ✗ | — |
| [`ADTQueryOperation`](../tables/adtqueryoperation.md) | ✓ | ✗ | — |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Integrations](../integrations-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Integrations Index](../integrations-index.md)

