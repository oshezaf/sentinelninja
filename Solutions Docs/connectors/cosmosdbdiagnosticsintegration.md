# 🔗 Azure Cosmos DB (Azure Diagnostics)

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Integrations](../integrations-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Integrations Index](../integrations-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Collection Method** | [Azure Diagnostics](../methods/azure-diagnostics.md) |

[Azure Cosmos DB](https://learn.microsoft.com/en-us/azure/cosmos-db/introduction) is a globally distributed, multi-model NoSQL database service.

To collect Azure Cosmos DB logs into a Log Analytics workspace, configure [Azure Diagnostic Settings](https://learn.microsoft.com/en-us/azure/cosmos-db/monitor-resource-logs) for the resource, selecting the log categories to send to the workspace.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`CDBCassandraRequests`](../tables/cdbcassandrarequests.md) | ✓ | ✗ | — |
| [`CDBControlPlaneRequests`](../tables/cdbcontrolplanerequests.md) | ✓ | ✗ | — |
| [`CDBDataPlaneRequests`](../tables/cdbdataplanerequests.md) | ✓ | ✗ | — |
| [`CDBDataPlaneRequests15M`](../tables/cdbdataplanerequests15m.md) | ✗ | ✗ | — |
| [`CDBDataPlaneRequests5M`](../tables/cdbdataplanerequests5m.md) | ✗ | ✗ | — |
| [`CDBGremlinRequests`](../tables/cdbgremlinrequests.md) | ✓ | ✗ | — |
| [`CDBMongoRequests`](../tables/cdbmongorequests.md) | ✓ | ✗ | — |
| [`CDBPartitionKeyRUConsumption`](../tables/cdbpartitionkeyruconsumption.md) | ✓ | ✗ | — |
| [`CDBPartitionKeyStatistics`](../tables/cdbpartitionkeystatistics.md) | ✓ | ✗ | — |
| [`CDBQueryRuntimeStatistics`](../tables/cdbqueryruntimestatistics.md) | ✓ | ✗ | — |
| [`CDBTableApiRequests`](../tables/cdbtableapirequests.md) | ✓ | ✗ | — |
| [`VCoreMongoRequests`](../tables/vcoremongorequests.md) | ✓ | ✗ | — |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Integrations](../integrations-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Integrations Index](../integrations-index.md)

