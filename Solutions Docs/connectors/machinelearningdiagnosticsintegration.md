# 🔗 Azure Machine Learning (Azure Diagnostics)

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Integrations](../integrations-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Integrations Index](../integrations-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Collection Method** | [Azure Diagnostics](../methods/azure-diagnostics.md) |

[Azure Machine Learning](https://learn.microsoft.com/en-us/azure/machine-learning/overview-what-is-azure-machine-learning) is a cloud service for building, training, and deploying machine learning models.

To collect Azure Machine Learning logs into a Log Analytics workspace, configure [Azure Diagnostic Settings](https://learn.microsoft.com/en-us/azure/machine-learning/monitor-azure-machine-learning) for the resource, selecting the log categories to send to the workspace.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`AmlComputeClusterEvent`](../tables/amlcomputeclusterevent.md) | ✓ | ✗ | — |
| [`AmlComputeClusterNodeEvent`](../tables/amlcomputeclusternodeevent.md) | ✗ | ✗ | — |
| [`AmlComputeCpuGpuUtilization`](../tables/amlcomputecpugpuutilization.md) | ✓ | ✗ | — |
| [`AmlComputeInstanceEvent`](../tables/amlcomputeinstanceevent.md) | ✓ | ✗ | — |
| [`AmlComputeJobEvent`](../tables/amlcomputejobevent.md) | ✓ | ✗ | — |
| [`AmlDataLabelEvent`](../tables/amldatalabelevent.md) | ✓ | ✗ | — |
| [`AmlDataSetEvent`](../tables/amldatasetevent.md) | ✓ | ✗ | — |
| [`AmlDataStoreEvent`](../tables/amldatastoreevent.md) | ✓ | ✗ | — |
| [`AmlDeploymentEvent`](../tables/amldeploymentevent.md) | ✓ | ✗ | — |
| [`AmlEnvironmentEvent`](../tables/amlenvironmentevent.md) | ✓ | ✗ | — |
| [`AmlInferencingEvent`](../tables/amlinferencingevent.md) | ✓ | ✗ | — |
| [`AmlModelsEvent`](../tables/amlmodelsevent.md) | ✓ | ✗ | — |
| [`AmlOnlineEndpointConsoleLog`](../tables/amlonlineendpointconsolelog.md) | ✓ | ✗ | — |
| [`AmlOnlineEndpointEventLog`](../tables/amlonlineendpointeventlog.md) | ✓ | ✗ | — |
| [`AmlOnlineEndpointTrafficLog`](../tables/amlonlineendpointtrafficlog.md) | ✓ | ✗ | — |
| [`AmlPipelineEvent`](../tables/amlpipelineevent.md) | ✓ | ✗ | — |
| [`AmlRegistryReadEventsLog`](../tables/amlregistryreadeventslog.md) | ✓ | ✗ | — |
| [`AmlRegistryWriteEventsLog`](../tables/amlregistrywriteeventslog.md) | ✓ | ✗ | — |
| [`AmlRunEvent`](../tables/amlrunevent.md) | ✓ | ✗ | — |
| [`AmlRunStatusChangedEvent`](../tables/amlrunstatuschangedevent.md) | ✓ | ✗ | — |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Integrations](../integrations-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Integrations Index](../integrations-index.md)

