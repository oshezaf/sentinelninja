# PGSQLServerLogs

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for PGSQLServerLogs table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Audit, Azure Resources |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/pgsqlserverlogs) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |

## Schema (27 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/pgsqlserverlogs)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| BackendType | string | Type of current backend. Available for PostgreSQL 14 and later. |
| ColumnName | string | Name of the column (if applicable). |
| ConstraintName | string | Name of the constraint (if applicable). |
| Context | string | Error context (if applicable). |
| DatatypeName | string | Name of the datatype (if applicable). |
| Detail | string | Detail log message (if applicable). |
| DetailLog | string | Extended detail log message (if applicable). |
| ErrorLevel | string | Logging level, example: LOG, ERROR, NOTICE. |
| Hint | string | Message hint (if applicable). |
| Location | string | Location of Azure Database for PostgreSQL Flexible server. |
| LogicalServerName | string | Logical name of the instance. |
| Message | string | Primary log message. |
| ProcessId | int | Process ID of the PostgreSQL backend. |
| Query | string | Internal query that led to the error (if applicable). |
| ReplicaRole | string | Replica role example. Primary or secondary. |
| SchemaName | string | Name of the schema (if applicable). |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| SqlErrorCode | string | PostgreSQL Error code that follows the SQL standard's conventions for SQLSTATE codes. |
| Statement | string | Query string (if applicable). |
| TableName | string | Name of the table (if applicable). |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | The timestamp (UTC) of when the log was generated. |
| Type | string | The name of the table |

---

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.dbforpostgresql/flexibleservers`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

