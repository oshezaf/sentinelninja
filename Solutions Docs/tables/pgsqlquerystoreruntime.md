# PGSQLQueryStoreRuntime

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for PGSQLQueryStoreRuntime table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Audit, Azure Resources |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/pgsqlquerystoreruntime) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |

## Schema (42 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/pgsqlquerystoreruntime)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| BlkReadTime | real | Total time the statement spent reading blocks in milliseconds for all calls in this time bucket. Only available if track_io_timing is enabled, otherwise zero. |
| BlkWriteTime | real | Total time the statement spent writing blocks in milliseconds for all calls in this time bucket. Only available if track_io_timing is enabled, otherwise zero. |
| Calls | long | Number of times the query executed within this time bucket. |
| DatabaseId | int | ID (OID) of database in which the statement was executed. |
| EndTime | datetime | The end time corresponding to the time bucket for this entry. Queries are aggregated by time buckets. |
| IsSystemQuery | bool | Boolean value indicating if the query is run by Azure managed system user. |
| LocalBlksDirtied | long | Total number of local blocks dirtied by the statement for all calls in this time bucket. |
| LocalBlksHit | long | Total number of local block cache hits by the statement for all calls in this time bucket. |
| LocalBlksRead | long | Total number of local blocks read by the statement for all calls in this time bucket. |
| LocalBlksWritten | long | Total number of local blocks written by the statement for all calls in this time bucket. |
| Location | string | Location of Azure Database for PostgreSQL Flexible server. |
| LogicalServerName | string | Logical name of the instance. |
| MaxExecDurationMs | real | Maximum query execution duration in milliseconds in this time bucket. |
| MeanExecDurationMs | real | Mean query execution duration in milliseconds in this time bucket. |
| MinExecDurationMs | real | Minimum query execution duration in milliseconds in this time bucket. |
| ParametersCaptureStatus | string | Indicates the status of capturing parameters of a parameterized query. |
| PlanId | long | ID of the plan corresponding to this query if plan store is enabled, otherwise the field is empty. |
| QueryId | string | Unique query ID of the statement that is an internal hash code, computed from the statement's parse tree. |
| QueryType | string | Indicates the query type of the statement. Possible values: select, update, insert, delete, utility, nothing, unknown. |
| ReplicaRole | string | Replica role example. Primary or secondary. |
| Rows | long | Total number of rows retrieved or affected by the statement for all calls in this time bucket. |
| RuntimeStatsEntryId | long | ID of the runtime entry. |
| SearchPath | string | Value of search_path set at the time the query was captured. |
| SearchPathCaptureStatus | string | Indicates the status of capturing the search_path. |
| SharedBlksDirtied | long | Total number of shared blocks dirtied by the statement for all calls in this time bucket. |
| SharedBlksHit | long | Total number of shared block cache hits by the statement for all calls in this time bucket. |
| SharedBlksRead | long | Total number of shared blocks read by the statement for all calls in this time bucket. |
| SharedBlksWritten | long | Total number of shared blocks written by the statement for all calls in this time bucket. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| StartTime | datetime | The start time corresponding to the time bucket for this entry. Queries are aggregated by time buckets. |
| StdDevExecDurationMs | real | Standard deviation of the query execution duration time in milliseconds in this time bucket. |
| TempBlksRead | long | Total number of temporary file blocks read by the statement for all calls in this time bucket. |
| TempBlksWritten | long | Total number of temporary file blocks written by the statement for all calls in this time bucket. |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | The timestamp (UTC) of when the log was generated. |
| TotalExecDurationMs | real | Total query execution duration in milliseconds for all calls in this time bucket. |
| Type | string | The name of the table |
| UserId | int | ID (OID) of the user that executed the statement. |

---

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.dbforpostgresql/flexibleservers`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

