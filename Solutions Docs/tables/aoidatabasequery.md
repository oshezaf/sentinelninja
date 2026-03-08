# AOIDatabaseQuery

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for AOIDatabaseQuery table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Audit, Azure Resources |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/aoidatabasequery) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |

## Schema (43 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/aoidatabasequery)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| ApplicationName | string | The name of the application that invoked the query. |
| CacheDiskHits | long | Disk cache hits. |
| CacheDiskMisses | long | Disk cache misses. |
| CacheMemoryHits | long | Memory cache hits. |
| CacheMemoryMisses | long | Memory cache misses. |
| CacheShardsBypassBytes | long | Shards cache bypass bytes. |
| CacheShardsColdHits | long | Shards cold cache hits. |
| CacheShardsColdMisses | long | Shards cold cache misses. |
| CacheShardsHotHits | long | Shards hot cache hits. |
| CacheShardsHotMisses | long | Shards hot cache misses. |
| ComponentFault | string | The entity that caused the query to fail. For example, if the query result is too large, the ComponentFault will be 'Client'. If an internal error occured, it will be 'Server'. |
| CorrelationId | string | The client request ID. |
| DatabaseName | string | The name of the database that the command ran on. |
| DurationMs | string | Command duration in milliseconds. |
| FailureReason | string | The failure reason. |
| LastUpdatedOn | datetime | Time (UTC) at which this command ended. |
| Location | string | The region where this query was executed. |
| MaxDataScannedTime | datetime | Maximum data scan time. |
| MemoryPeak | long | Memory peak. |
| MinDataScannedTime | datetime | Minimum data scan time. |
| OperationName | string | The name of this operation. |
| Principal | string | The principal that invoked the query. |
| RootActivityId | string | The root activity ID. |
| ScannedExtentsCount | long | Scanned extents count. |
| ScannedRowsCount | long | Scanned rows count. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| StartedOn | datetime | Time (UTC) at which this command started. |
| State | string | The state the command ended with. |
| TableCount | int | Table count. |
| TablesStatistics | dynamic | Tables statistics. |
| TenantId | string | The Log Analytics workspace ID |
| Text | string | The text of the invoked query. |
| TimeGenerated | datetime | The time (UTC) at which this event was generated. |
| TotalCPU | string | Total CPU duration time. |
| TotalExtentsCount | long | Total extents count. |
| TotalRowsCount | long | Total rows count. |
| Type | string | The name of the table |
| User | string | The user that invoked the query. |
| WorkloadGroup | string | The workload group the query was classified to. |

---

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.networkanalytics/dataproducts`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

