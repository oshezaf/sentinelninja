# PGSQLAutovacuumStats

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for PGSQLAutovacuumStats table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Audit, Azure Resources |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/pgsqlautovacuumstats) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |

## Schema (33 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/pgsqlautovacuumstats)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| AnalyzeCount | long | Number of times tables have been manually analyzed in this schema. |
| AutoanalyzeCount | long | Number of times tables have been analyzed by the autovacuum daemon in this schema. |
| AutovacuumCount | long | Number of times tables have been vacuumed by the autovacuum daemon in this schema. |
| DatabaseName | string | Name of the database the schema belongs to. |
| DeadRowsCount | long | Estimated number of dead rows of all tables in this schema. |
| IndexScansCount | long | Number of index scans initiated on all tables in this schema. |
| LiveRowsCount | long | Estimated number of live rows of all tables in this schema. |
| Location | string | Location of Azure Database for PostgreSQL Flexible server. |
| LogicalServerName | string | Logical name of the instance. |
| ModificationsSinceAnalyzeCount | long | Estimated number of rows modified from all tables since last analyzed of each individual table in this schema. |
| ReplicaRole | string | Replica role example. Primary or secondary. |
| RowsDeletedCount | long | Number of rows deleted from all tables in this schema. |
| RowsFromIndexScansCount | long | Number of live rows fetched by index scans on all tables in this schema. |
| RowsFromSeqentialScansCount | long | Number of live rows fetched by sequential scans on all tables in this schema. |
| RowsHotUpdatedCount | long | Number of rows HOT updated from all tables in this schema (i.e., with no separate index update required). |
| RowsInsertedCount | long | Number of rows inserted in all tables in this schema. |
| RowsUpdatedCount | long | Number of rows updated from all tables in this schema (includes HOT updated rows). |
| SchemaName | string | Name of the schema the statistics were collected from. |
| SeqentialScansCount | long | Number of sequential scans initiated on all tables in this schema. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| TablesAnalyzedCount | long | Number of tables that were manually analyzed in this schema. |
| TablesAutoanalyzedCount | long | Number of tables that were analyzed by the autovacuum daemon in this schema. |
| TablesAutovacuumedCount | long | Number of tables that were vacuumed by the autovacuum daemon in this schema. |
| TablesCount | long | Number of tables in this schema. |
| TablesVacuumedCount | long | Number of tables that were manually vacuumed in this schema. |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | The timestamp (UTC) of when the log was generated. |
| Type | string | The name of the table |
| VacuumCount | long | Number of times tables have been manually vacuumed in this schema (not counting VACUUM FULL). |

---

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.dbforpostgresql/flexibleservers`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

