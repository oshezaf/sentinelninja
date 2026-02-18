# 🔗 Container Insights

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Integrations](../integrations-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Integrations Index](../integrations-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Collection Method** | [Container Insights](../methods/container-insights.md) |

[Container Insights](https://learn.microsoft.com/en-us/azure/azure-monitor/containers/kubernetes-monitoring-enable) provides comprehensive monitoring for containerized workloads running on AKS and Arc-enabled Kubernetes clusters, collecting container logs, performance metrics, and Kubernetes events.

To collect these logs, [enable Container Insights](https://learn.microsoft.com/azure/azure-monitor/containers/kubernetes-monitoring-enable) on the AKS cluster or Arc-enabled Kubernetes resource, which deploys monitoring agents to collect container and Kubernetes data into the Log Analytics workspace.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`ContainerImageInventory`](../tables/containerimageinventory.md) | ✓ | ✗ | — |
| [`ContainerLog`](../tables/containerlog.md) | ✓ | ✗ | — |
| [`ContainerLogV2`](../tables/containerlogv2.md) | ✓ | ✗ | — |
| [`ContainerNetworkLogs`](../tables/containernetworklogs.md) | ✗ | ✗ | — |
| [`ContainerNodeInventory`](../tables/containernodeinventory.md) | ✓ | ✗ | — |
| [`ContainerServiceLog`](../tables/containerservicelog.md) | ✓ | ✗ | — |
| [`KubeMonAgentEvents`](../tables/kubemonagentevents.md) | ✓ | ✗ | — |
| [`KubeNodeInventory`](../tables/kubenodeinventory.md) | ✓ | ✗ | — |
| [`KubePVInventory`](../tables/kubepvinventory.md) | ✓ | ✗ | — |
| [`KubePodInventory`](../tables/kubepodinventory.md) | ✓ | ✗ | — |
| [`KubeServices`](../tables/kubeservices.md) | ✓ | ✗ | — |
| [`RetinaNetworkFlowLogs`](../tables/retinanetworkflowlogs.md) | ✓ | ✗ | — |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Integrations](../integrations-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Integrations Index](../integrations-index.md)

