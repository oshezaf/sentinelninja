# HorizonDBQueryStoreRuntimeStats

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for HorizonDBQueryStoreRuntimeStats table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Audit, Azure Resources |
| **Basic Logs Eligible** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/reference/tables-features)) |
| **Supports Transformations** | ✗ No ([source](https://learn.microsoft.com/azure/azure-monitor/reference/tables-features)) |
| **Ingestion API Supported** | ✗ No |
| **Lake-Only Ingestion** | ✓ Yes |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/horizondbquerystoreruntimestats) |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Resource Types](#resource-types)

## Schema (43 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/horizondbquerystoreruntimestats)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| BlkReadTime | real | Total time the statement spent reading blocks in milliseconds for all calls in this time window. Only available if track_io_timing is enabled, otherwise zero. |
| BlkWriteTime | real | Total time the statement spent writing blocks in milliseconds for all calls in this time window. Only available if track_io_timing is enabled, otherwise zero. |
| Calls | long | Number of times the query executed within this time window. |
| DatabaseId | int | Identifier (OID) of database in which the statement was executed. 0 indicates it is a background worker or a system call. |
| EndTime | datetime | End time corresponding to the time window for this entry. Statistics for queries are aggregated by time window. |
| IsSystemQuery | bool | Boolean value indicating if the query is executed by Azure managed system user. |
| LocalBlksDirtied | long | Total number of local blocks dirtied by the statement for all calls in this time window. |
| LocalBlksHit | long | Total number of local block cache hits by the statement for all calls in this time window. |
| LocalBlksRead | long | Total number of local blocks read by the statement for all calls in this time window. |
| LocalBlksWritten | long | Total number of local blocks written by the statement for all calls in this time window. |
| Location | string | Location of Azure HorizonDB replica. |
| MaxExecDurationMs | real | Maximum query execution duration in milliseconds in this time window. |
| MeanExecDurationMs | real | Mean query execution duration in milliseconds in this time window. |
| MinExecDurationMs | real | Minimum query execution duration in milliseconds in this time window. |
| Node | string | Logical name of the node. |
| ParametersCaptureStatus | string | Indicates the status of capturing parameters of a parameterized query. |
| PlanId | long | Identifier of the plan corresponding to this query. Only available when query store is configured to store query plans, otherwise the field is empty. |
| Pool | string | Name of the pool containing the node. |
| QueryId | string | Identifier of the query. An internal hash code, computed from the statement's parse tree. |
| QueryType | string | Indicates the query type of the statement. Possible values: unknown, select, update, insert, delete, merge, utility, nothing. |
| Role | string | Role of the replica. Possible values are Unknown, ReadWrite, and ReadOnly. |
| Rows | long | Total number of rows retrieved or affected by the statement for all calls in this time window. |
| RuntimeStatsEntryId | long | Identifier of the runtime entry. |
| SearchPath | string | Value of search_path set at the time the query was captured. |
| SearchPathCaptureStatus | string | Indicates the status of capturing the search_path. |
| SharedBlksDirtied | long | Total number of shared blocks dirtied by the statement for all calls in this time window. |
| SharedBlksHit | long | Total number of shared block cache hits by the statement for all calls in this time window. |
| SharedBlksRead | long | Total number of shared blocks read by the statement for all calls in this time window. |
| SharedBlksWritten | long | Total number of shared blocks written by the statement for all calls in this time window. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| StartTime | datetime | Start time corresponding to the time window for this entry. Statistics for queries are aggregated by time window. |
| StdDevExecDurationMs | real | Standard deviation of the query execution duration time in milliseconds in this time window. |
| TempBlksRead | long | Total number of temporary file blocks read by the statement for all calls in this time window. |
| TempBlksWritten | long | Total number of temporary file blocks written by the statement for all calls in this time window. |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | Timestamp (UTC) of when the event is generated. |
| TotalExecDurationMs | real | Total query execution duration in milliseconds for all calls in this time window. |
| Type | string | The name of the table |
| UserId | int | Identifier (OID) of the user that executed the statement. |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [HorizonDBQueryStoreRuntimeStats Schema Reference (Azure Monitor)](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/horizondbquerystoreruntimestats)

---

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.horizondb/clusters`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

