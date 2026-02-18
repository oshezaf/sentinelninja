# 🔗 Azure Event Hubs (Azure Diagnostics)

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Integrations](../integrations-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Integrations Index](../integrations-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Collection Method** | [Azure Diagnostics](../methods/azure-diagnostics.md) |

[Azure Event Hubs](https://learn.microsoft.com/en-us/azure/event-hubs/event-hubs-about) is a big data streaming platform and event ingestion service.

To collect Azure Event Hubs logs into a Log Analytics workspace, configure [Azure Diagnostic Settings](https://learn.microsoft.com/en-us/azure/event-hubs/monitor-event-hubs) for the resource, selecting the log categories to send to the workspace.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`AZMSArchiveLogs`](../tables/azmsarchivelogs.md) | ✓ | ✗ | — |
| [`AZMSAutoscaleLogs`](../tables/azmsautoscalelogs.md) | ✓ | ✗ | — |
| [`AZMSKafkaCoordinatorLogs`](../tables/azmskafkacoordinatorlogs.md) | ✓ | ✗ | — |
| [`AZMSKafkaUserErrorLogs`](../tables/azmskafkausererrorlogs.md) | ✓ | ✗ | — |
| [`AZMSOperationalLogs`](../tables/azmsoperationallogs.md) | ✓ | ✗ | — |
| [`AZMSRunTimeAuditLogs`](../tables/azmsruntimeauditlogs.md) | ✓ | ✗ | — |
| [`AZMSVnetConnectionEvents`](../tables/azmsvnetconnectionevents.md) | ✓ | ✗ | — |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Integrations](../integrations-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Integrations Index](../integrations-index.md)

