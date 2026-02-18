# 🔗 Azure Media Services (Azure Diagnostics)

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Integrations](../integrations-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Integrations Index](../integrations-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Collection Method** | [Azure Diagnostics](../methods/azure-diagnostics.md) |

[Azure Media Services](https://learn.microsoft.com/en-us/azure/media-services/latest/media-services-overview) is a cloud-based media workflow platform for encoding, packaging, and streaming media.

To collect Azure Media Services logs into a Log Analytics workspace, configure [Azure Diagnostic Settings](https://learn.microsoft.com/en-us/azure/media-services/latest/monitoring/monitor-media-services) for the resource, selecting the log categories to send to the workspace.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`AMSKeyDeliveryRequests`](../tables/amskeydeliveryrequests.md) | ✓ | ✗ | — |
| [`AMSLiveEventOperations`](../tables/amsliveeventoperations.md) | ✓ | ✗ | — |
| [`AMSMediaAccountHealth`](../tables/amsmediaaccounthealth.md) | ✓ | ✗ | — |
| [`AMSStreamingEndpointRequests`](../tables/amsstreamingendpointrequests.md) | ✓ | ✗ | — |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Integrations](../integrations-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Integrations Index](../integrations-index.md)

