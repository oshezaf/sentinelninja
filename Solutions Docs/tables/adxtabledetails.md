# ADXTableDetails

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for ADXTableDetails table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Azure Resources |
| **Basic Logs Eligible** | ✗ No ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Supports Transformations** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/adxtabledetails) |

## Contents

- [Schema](#schema)
- [Content Items](#content-items-using-this-table)
- [Resource Types](#resource-types)

## Schema (27 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/adxtabledetails)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| CachingPolicy | dynamic | The table's effective entity caching policy, serialized as JSON |
| CachingPolicyOrigin | string | Caching policy origin entity (Table/Database/Cluster) |
| CorrelationId | string | The client request ID |
| DatabaseName | string | The name of the database |
| EntityType | string | The type of the table. Can be Table or MaterializedView |
| HotExtentCount | long | The total number of extents in the table, stored in the hot cache |
| HotExtentSize | real | The total size of extents (compressed size + index size) in the table, stored in the hot cache (in bytes) |
| HotOriginalSize | long | The total original size of data in the table, stored in the hot cache (in bytes) |
| HotRowCount | long | The total number of rows in the table, stored in the hot cache |
| MaxExtentsCreationTime | datetime | The maximum creation time of an extent in the table (or null, if there are no extents) |
| MinExtentsCreationTime | datetime | The minimum creation time of an extent in the table (or null, if there are no extents) |
| OperationName | string | The name of this operation |
| RetentionPolicy | dynamic | The table's effective entity retention policy, serialized as JSON |
| RetentionPolicyOrigin | string | Retention policy origin entity (Table/Database/Cluster) |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| TableName | string | The name of the table |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | The time (UTC) at which this event was generated. |
| TotalExtentCount | long | The total number of extents in the table |
| TotalExtentSize | real | The total size of extents (compressed size + index size) in the table (in bytes) |
| TotalOriginalSize | real | The total original size of data in the table (in bytes) |
| TotalRowCount | long | The total number of rows in the table |
| Type | string | The name of the table |

---

## Content Items Using This Table (1)

### Workbooks (1)

**GitHub Only:**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [ADXvsLA](../content/github-only-adxvsla-0ddedeb5.md) |  |

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.kusto/clusters`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

