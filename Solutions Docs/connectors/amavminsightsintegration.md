# 🔗 VM Insights

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Integrations](../integrations-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Integrations Index](../integrations-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Collection Method** | [AMA](../methods/ama.md) |

[VM Insights](https://learn.microsoft.com/en-us/azure/azure-monitor/vm/vminsights-enable-overview) monitors virtual machine performance and health, including process and dependency mapping, resource utilization metrics, and network connection tracking.

To collect these logs, [enable VM Insights](https://learn.microsoft.com/azure/azure-monitor/vm/vminsights-enable-overview) on the virtual machine or scale set, which deploys the Azure Monitor Agent and Dependency Agent to collect performance data and inter-component dependencies.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`InsightsMetrics`](../tables/insightsmetrics.md) | ✓ | ✗ | — |
| [`VMBoundPort`](../tables/vmboundport.md) | ✗ | ✗ | — |
| [`VMComputer`](../tables/vmcomputer.md) | ✗ | ✗ | — |
| [`VMConnection`](../tables/vmconnection.md) | ✗ | ✗ | — |
| [`VMProcess`](../tables/vmprocess.md) | ✗ | ✗ | — |
| [`WorkloadDiagnosticLogs`](../tables/workloaddiagnosticlogs.md) | ✓ | ✗ | — |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Integrations](../integrations-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Integrations Index](../integrations-index.md)

