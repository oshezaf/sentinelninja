# HorizonDBAutovacuumStats

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for HorizonDBAutovacuumStats table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Audit, Azure Resources |
| **Basic Logs Eligible** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/reference/tables-features)) |
| **Supports Transformations** | ✗ No ([source](https://learn.microsoft.com/azure/azure-monitor/reference/tables-features)) |
| **Ingestion API Supported** | ✗ No |
| **Lake-Only Ingestion** | ✓ Yes |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/horizondbautovacuumstats) |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Resource Types](#resource-types)

## Schema (34 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/horizondbautovacuumstats)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| Analyze | long | Number of times tables have been manually analyzed in this schema. |
| Autoanalyze | long | Number of times tables have been analyzed by the autovacuum daemon in this schema. |
| Autovacuum | long | Number of times tables have been vacuumed by the autovacuum daemon in this schema. |
| Database | string | Name of the database the schema belongs to. |
| DeadRows | long | Estimated number of dead rows of all tables in this schema. |
| IndexScans | long | Number of index scans initiated on all tables in this schema. |
| LiveRows | long | Estimated number of live rows of all tables in this schema. |
| Location | string | Location of Azure HorizonDB replica. |
| ModificationsSinceAnalyze | long | Estimated number of rows modified from all tables since last analyzed of each individual table in this schema. |
| Node | string | Logical name of the node. |
| Pool | string | Name of the pool containing the node. |
| Role | string | Role of the replica. Possible values are Unknown, ReadWrite, and ReadOnly. |
| RowsDeleted | long | Number of rows deleted from all tables in this schema. |
| RowsFromIndexScans | long | Number of live rows fetched by index scans on all tables in this schema. |
| RowsFromSequentialScans | long | Number of live rows fetched by sequential scans on all tables in this schema. |
| RowsHotUpdated | long | Number of rows HOT updated from all tables in this schema (those with no separate index update required). |
| RowsInserted | long | Number of rows inserted in all tables in this schema. |
| RowsUpdated | long | Number of rows updated from all tables in this schema (includes HOT updated rows). |
| Schema | string | Name of the schema the statistics were collected from. |
| SequentialScans | long | Number of sequential scans initiated on all tables in this schema. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| Tables | long | Number of tables in this schema. |
| TablesAnalyzed | long | Number of tables that were manually analyzed in this schema. |
| TablesAutoanalyzed | long | Number of tables that were analyzed by the autovacuum daemon in this schema. |
| TablesAutovacuumed | long | Number of tables that were vacuumed by the autovacuum daemon in this schema. |
| TablesVacuumed | long | Number of tables that were manually vacuumed in this schema. |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | Timestamp (UTC) of when the event is generated. |
| Type | string | The name of the table |
| Vacuum | long | Number of times tables have been manually vacuumed in this schema (not counting VACUUM FULL). |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [HorizonDBAutovacuumStats Schema Reference (Azure Monitor)](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/horizondbautovacuumstats)

---

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.horizondb/clusters`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

