# 🔗 Azure Synapse Analytics (Azure Diagnostics)

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Integrations](../integrations-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Integrations Index](../integrations-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Collection Method** | [Azure Diagnostics](../methods/azure-diagnostics.md) |

[Azure Synapse Analytics](https://learn.microsoft.com/en-us/azure/synapse-analytics/overview-what-is) is an analytics service that brings together data integration, enterprise data warehousing, and big data analytics.

To collect Azure Synapse Analytics logs into a Log Analytics workspace, configure [Azure Diagnostic Settings](https://learn.microsoft.com/en-us/azure/synapse-analytics/monitoring/how-to-monitor-using-azure-monitor) for the resource, selecting the log categories to send to the workspace.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`SynapseBigDataPoolApplicationsEnded`](../tables/synapsebigdatapoolapplicationsended.md) | ✓ | ✗ | — |
| [`SynapseBuiltinSqlPoolRequestsEnded`](../tables/synapsebuiltinsqlpoolrequestsended.md) | ✓ | ✗ | — |
| [`SynapseDXCommand`](../tables/synapsedxcommand.md) | ✗ | ✗ | — |
| [`SynapseDXFailedIngestion`](../tables/synapsedxfailedingestion.md) | ✓ | ✗ | — |
| [`SynapseDXIngestionBatching`](../tables/synapsedxingestionbatching.md) | ✗ | ✗ | — |
| [`SynapseDXQuery`](../tables/synapsedxquery.md) | ✗ | ✗ | — |
| [`SynapseDXSucceededIngestion`](../tables/synapsedxsucceededingestion.md) | ✓ | ✗ | — |
| [`SynapseDXTableDetails`](../tables/synapsedxtabledetails.md) | ✗ | ✗ | — |
| [`SynapseDXTableUsageStatistics`](../tables/synapsedxtableusagestatistics.md) | ✗ | ✗ | — |
| [`SynapseGatewayApiRequests`](../tables/synapsegatewayapirequests.md) | ✓ | ✗ | — |
| [`SynapseIntegrationActivityRuns`](../tables/synapseintegrationactivityruns.md) | ✓ | ✗ | — |
| [`SynapseIntegrationPipelineRuns`](../tables/synapseintegrationpipelineruns.md) | ✓ | ✗ | — |
| [`SynapseIntegrationTriggerRuns`](../tables/synapseintegrationtriggerruns.md) | ✓ | ✗ | — |
| [`SynapseLinkEvent`](../tables/synapselinkevent.md) | ✓ | ✗ | — |
| [`SynapseRbacOperations`](../tables/synapserbacoperations.md) | ✓ | ✗ | — |
| [`SynapseSqlPoolDmsWorkers`](../tables/synapsesqlpooldmsworkers.md) | ✓ | ✗ | — |
| [`SynapseSqlPoolExecRequests`](../tables/synapsesqlpoolexecrequests.md) | ✓ | ✗ | — |
| [`SynapseSqlPoolRequestSteps`](../tables/synapsesqlpoolrequeststeps.md) | ✓ | ✗ | — |
| [`SynapseSqlPoolSqlRequests`](../tables/synapsesqlpoolsqlrequests.md) | ✓ | ✗ | — |
| [`SynapseSqlPoolWaits`](../tables/synapsesqlpoolwaits.md) | ✓ | ✗ | — |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Integrations](../integrations-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Integrations Index](../integrations-index.md)

