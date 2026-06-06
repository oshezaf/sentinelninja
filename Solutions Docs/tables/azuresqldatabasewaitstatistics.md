# AzureSQLDatabaseWaitStatistics

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for AzureSQLDatabaseWaitStatistics table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Workloads |
| **Basic Logs Eligible** | ✗ No |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/azuresqldatabasewaitstatistics) |

## Schema (21 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/azuresqldatabasewaitstatistics)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| Category | string | Log category. |
| DatabaseName | string | Database name. |
| DeltaMaxWaitTimeMs | real | Maximum wait time in milliseconds for this wait type during the interval. |
| DeltaSignalWaitTimeMs | real | Signal wait time in milliseconds for this wait type during the interval. |
| DeltaWaitingTasksCount | int | Number of waiting tasks for this wait type during the interval. |
| DeltaWaitTimeMs | real | Total wait time in milliseconds for this wait type during the interval. |
| ElasticPoolName | string | Elastic pool name if applicable. |
| EndUtcDate | string | Wait statistics interval end time. |
| Location | string | Azure region location. |
| OperationName | string | Operation name. |
| ResourceGroup | string | Resource group. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| StartUtcDate | string | Wait statistics interval start time. |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | Timestamp when the log was generated. |
| Type | string | The name of the table |
| WaitType | string | Wait type name. |

---

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.sql/servers`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

