# AzureSQLAutomaticTuning

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for AzureSQLAutomaticTuning table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Workloads |
| **Basic Logs Eligible** | ✗ No |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/azuresqlautomatictuning) |

## Schema (24 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/azuresqlautomatictuning)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| Category | string | Log category. |
| CreateIndexStateNew | string | New Create Index state. |
| CreateIndexStateOld | string | Old Create Index state. |
| DatabaseModeNew | string | New database tuning mode. |
| DatabaseModeOld | string | Old database tuning mode. |
| DatabaseName | string | Database name. |
| DropIndexStateNew | string | New Drop Index state. |
| DropIndexStateOld | string | Old Drop Index state. |
| ForceLastGoodPlanStateNew | string | New Force Last Good Plan state. |
| ForceLastGoodPlanStateOld | string | Old Force Last Good Plan state. |
| Location | string | Azure region location. |
| LogicalServerName | string | Logical server name. |
| MaintainIndexStateNew | string | New Maintain Index state. |
| MaintainIndexStateOld | string | Old Maintain Index state. |
| OperationName | string | Operation name. |
| ResourceGroup | string | Resource group. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | Timestamp when the log was generated. |
| Type | string | The name of the table |

---

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.sql/servers`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

