# HorizonDBServerLogs

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for HorizonDBServerLogs table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Audit, Azure Resources |
| **Basic Logs Eligible** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/reference/tables-features)) |
| **Supports Transformations** | ✗ No ([source](https://learn.microsoft.com/azure/azure-monitor/reference/tables-features)) |
| **Ingestion API Supported** | ✗ No |
| **Lake-Only Ingestion** | ✓ Yes |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/horizondbserverlogs) |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Resource Types](#resource-types)

## Schema (27 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/horizondbserverlogs)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| BackendType | string | Type of current backend. Available for PostgreSQL 14 and later. |
| Constraint | string | Name of the constraint (if applicable). |
| Context | string | Error context (if applicable). |
| Datatype | string | Name of the datatype (if applicable). |
| Detail | string | Detail log message (if applicable). |
| DetailLog | string | Extended detail log message (if applicable). |
| ErrorLevel | string | Logging level, example: LOG, ERROR, NOTICE. |
| Hint | string | Message hint (if applicable). |
| Location | string | Location of Azure HorizonDB replica. |
| Message | string | Primary log message. |
| Node | string | Logical name of the node. |
| Pool | string | Name of the pool containing the node. |
| ProcessId | int | Process identifier (PID) of the backend that generates the event. |
| Query | string | Internal query that led to the error (if applicable). |
| Role | string | Role of the replica. Possible values are Unknown, ReadWrite, and ReadOnly. |
| Schema | string | Name of the schema (if applicable). |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| SqlErrorCode | string | PostgreSQL Error code that follows the SQL standard's conventions for SQLSTATE codes. |
| Statement | string | Query string (if applicable). |
| Table | string | Name of the table (if applicable). |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | Timestamp (UTC) of when the event is generated. |
| Type | string | The name of the table |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [HorizonDBServerLogs Schema Reference (Azure Monitor)](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/horizondbserverlogs)

---

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.horizondb/clusters`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

