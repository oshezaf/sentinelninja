# 🔗 OpenTelemetry

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Integrations](../integrations-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Integrations Index](../integrations-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Collection Method** | [OpenTelemetry](../methods/opentelemetry.md) |

[OpenTelemetry](https://learn.microsoft.com/en-us/azure/azure-monitor/app/opentelemetry-configuration) is an open-source observability framework for generating, collecting, and exporting traces, metrics, and logs from cloud-native applications.

To collect telemetry, [configure the OpenTelemetry SDK](https://learn.microsoft.com/azure/azure-monitor/app/opentelemetry-configuration) with the Azure Monitor exporter in your application, setting the connection string to route data to your workspace.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`OTelEvents`](../tables/otelevents.md) | ✓ | ✗ | — |
| [`OTelLogs`](../tables/otellogs.md) | ✓ | ✗ | — |
| [`OTelResources`](../tables/otelresources.md) | ✓ | ✗ | — |
| [`OTelSpans`](../tables/otelspans.md) | ✓ | ✗ | — |
| [`OTelTraces`](../tables/oteltraces.md) | ✗ | ✗ | — |
| [`OTelTracesAgent`](../tables/oteltracesagent.md) | ✗ | ✗ | — |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Integrations](../integrations-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Integrations Index](../integrations-index.md)

