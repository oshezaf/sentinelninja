# ADXQuery

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for ADXQuery table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | - |
| **Basic Logs Eligible** | ✗ No ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Supports Transformations** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/adxquery) |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Resource Types](#resource-types)

## Schema (44 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/adxquery)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable is <code>false</code> ingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| ApplicationName | string | The name of the application that invoked the query |
| CacheDiskHits | long | Disk cache hits |
| CacheDiskMisses | long | Disk cache misses |
| CacheMemoryHits | long | Memory cache hits |
| CacheMemoryMisses | long | Memory cache misses |
| CacheShardsBypassBytes | long | Shards cache bypass bytes |
| CacheShardsColdHits | long | Shards cold cache hits |
| CacheShardsColdMisses | long | Shards cold cache misses |
| CacheShardsHotHits | long | Shards hot cache hits |
| CacheShardsHotMisses | long | Shards hot cache misses |
| Category | string | The category of this log. For this event, it will be Query |
| ClientRequestProperties | dynamic | The client request properties of the query |
| ComponentFault | string | The entity that caused the query to fail. For example, if the query result is too large, the ComponentFault will be 'Client'. If an internal error occurred, it will be 'Server' |
| CorrelationId | string | The client request ID |
| DatabaseName | string | The name of the database that the command ran on |
| Duration | string | Command duration |
| ExtentsMaxDataScannedTime | datetime | Maximum data scan time |
| ExtentsMinDataScannedTime | datetime | Minimum data scan time |
| FailureReason | string | The failure reason |
| LastUpdatedOn | datetime | Time (UTC) at which this command ended |
| MemoryPeak | long | Memory peak |
| OperationName | string | The name of this operation |
| Principal | string | The principal that invoked the query |
| RootActivityId | string | The root activity ID |
| ScannedExtentsCount | long | Scanned extents count |
| ScannedRowsCount | long | Scanned rows count |
| SourceSystem | string | The type of agent the event was collected by. For example, <code>OpsManager</code> for Windows agent, either direct connect or Operations Manager, <code>Linux</code> for all Linux agents, or <code>Azure</code> for Azure Diagnostics |
| StartedOn | datetime | Time (UTC) at which this command started |
| State | string | The state the command ended with |
| TableCount | int | Table count |
| TablesStatistics | dynamic | Tables statistics |
| TenantId | string | The Log Analytics workspace ID |
| Text | string | The text of the invoked query |
| TimeGenerated | datetime | The time (UTC) at which this event was generated |
| TotalCPU | string | Total CPU duration |
| TotalExtentsCount | long | Total extents count |
| TotalRowsCount | long | Total rows count |
| Type | string | The name of the table |
| User | string | The user that invoked the query |
| WorkloadGroup | string | The workload group the query was classified to |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [ADXQuery Schema Reference (Azure Monitor)](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/adxquery)

---

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.kusto/clusters`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

