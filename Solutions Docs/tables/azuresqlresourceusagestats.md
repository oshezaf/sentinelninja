# AzureSQLResourceUsageStats

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for AzureSQLResourceUsageStats table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Workloads |
| **Basic Logs Eligible** | ✗ No |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/azuresqlresourceusagestats) |

## Schema (20 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/azuresqlresourceusagestats)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| avg_cpu_percent | string | Average CPU percentage. |
| Category | string | Log category. |
| io_bytes_read | string | IO bytes read. |
| io_bytes_written | string | IO bytes written. |
| io_requests | string | Number of IO requests. |
| Location | string | Azure region location. |
| OperationName | string | Operation name. |
| reserved_storage_mb | string | Reserved storage in MB. |
| ResourceGroup | string | Resource group. |
| SKU | string | Service tier SKU. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| storage_space_used_mb | string | Storage space used in MB. |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | Timestamp when the log was generated. |
| Type | string | The name of the table |
| virtual_core_count | string | Virtual core count. |

---

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.sql/servers`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

