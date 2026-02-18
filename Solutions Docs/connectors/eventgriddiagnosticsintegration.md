# 🔗 Azure Event Grid (Azure Diagnostics)

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Integrations](../integrations-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Integrations Index](../integrations-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Collection Method** | [Azure Diagnostics](../methods/azure-diagnostics.md) |

[Azure Event Grid](https://learn.microsoft.com/en-us/azure/event-grid/overview) is a fully managed event routing service for building event-driven architectures.

To collect Azure Event Grid logs into a Log Analytics workspace, configure [Azure Diagnostic Settings](https://learn.microsoft.com/en-us/azure/event-grid/diagnostic-logs) for the resource, selecting the log categories to send to the workspace.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`AegDataPlaneRequests`](../tables/aegdataplanerequests.md) | ✓ | ✗ | — |
| [`AegDeliveryFailureLogs`](../tables/aegdeliveryfailurelogs.md) | ✓ | ✗ | — |
| [`AegPublishFailureLogs`](../tables/aegpublishfailurelogs.md) | ✓ | ✗ | — |
| [`EGNFailedHttpDataPlaneOperations`](../tables/egnfailedhttpdataplaneoperations.md) | ✓ | ✗ | — |
| [`EGNFailedMqttConnections`](../tables/egnfailedmqttconnections.md) | ✓ | ✗ | — |
| [`EGNFailedMqttPublishedMessages`](../tables/egnfailedmqttpublishedmessages.md) | ✓ | ✗ | — |
| [`EGNFailedMqttSubscriptions`](../tables/egnfailedmqttsubscriptions.md) | ✓ | ✗ | — |
| [`EGNMqttDisconnections`](../tables/egnmqttdisconnections.md) | ✓ | ✗ | — |
| [`EGNSuccessfulHttpDataPlaneOperations`](../tables/egnsuccessfulhttpdataplaneoperations.md) | ✓ | ✗ | — |
| [`EGNSuccessfulMqttConnections`](../tables/egnsuccessfulmqttconnections.md) | ✓ | ✗ | — |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Integrations](../integrations-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Integrations Index](../integrations-index.md)

