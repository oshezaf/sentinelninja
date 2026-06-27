# AzureSQLQueryStoreRuntimeStatistics

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for AzureSQLQueryStoreRuntimeStatistics table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Workloads |
| **Basic Logs Eligible** | ✗ No |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/azuresqlquerystoreruntimestatistics) |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Resource Types](#resource-types)

## Schema (47 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/azuresqlquerystoreruntimestatistics)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable is <code>false</code> ingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| Category | string | Log category. |
| count_executions | long | Count of executions. |
| cpu_time | long | CPU time in microseconds. |
| DatabaseName | string | Database name. |
| dop | long | Degree of parallelism. |
| duration | long | Duration in microseconds. |
| ElasticPoolName | string | Elastic pool name if applicable. |
| execution_type | long | Execution type. |
| interval_end_time | long | Interval end time. |
| interval_start_time | long | Interval start time. |
| is_primary | long | Is primary replica. |
| Location | string | Azure region location. |
| log_bytes_used | long | Log bytes used. |
| logical_io_reads | long | Logical IO reads. |
| logical_io_writes | long | Logical IO writes. |
| max_cpu_time | long | Maximum CPU time in microseconds. |
| max_dop | long | Maximum degree of parallelism. |
| max_duration | long | Maximum duration in microseconds. |
| max_log_bytes_used | long | Maximum log bytes used. |
| max_logical_io_reads | long | Maximum logical IO reads. |
| max_logical_io_writes | long | Maximum logical IO writes. |
| max_num_physical_io_reads | long | Maximum number of physical IO reads. |
| max_page_server_reads | long | Maximum page server reads. |
| max_physical_io_reads | long | Maximum physical IO reads. |
| max_query_max_used_memory | long | Maximum query maximum used memory. |
| max_rowcount | long | Maximum row count. |
| num_physical_io_reads | long | Number of physical IO reads. |
| OperationName | string | Operation name. |
| page_server_reads | long | Page server reads. |
| physical_io_reads | long | Physical IO reads. |
| plan_id | long | Plan identifier. |
| query_hash | string | Query hash. |
| query_id | long | Query identifier. |
| query_max_used_memory | long | Query maximum used memory. |
| query_plan_hash | string | Query plan hash. |
| replica_group_id | long | Replica group identifier. |
| ResourceGroup | string | Resource group. |
| rowcount | long | Row count. |
| SourceSystem | string | The type of agent the event was collected by. For example, <code>OpsManager</code> for Windows agent, either direct connect or Operations Manager, <code>Linux</code> for all Linux agents, or <code>Azure</code> for Azure Diagnostics |
| statement_sql_handle | string | Statement SQL handle. |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | Timestamp when the log was generated. |
| Type | string | The name of the table |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [AzureSQLQueryStoreRuntimeStatistics Schema Reference (Azure Monitor)](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/azuresqlquerystoreruntimestatistics)

---

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.sql/servers`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

