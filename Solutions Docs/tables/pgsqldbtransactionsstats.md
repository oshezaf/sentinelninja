# PGSQLDbTransactionsStats

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for PGSQLDbTransactionsStats table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Audit, Azure Resources |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/pgsqldbtransactionsstats) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |

## Schema (28 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/pgsqldbtransactionsstats)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| AutovacuumFreezeMaxAge | int | Value of the parameter autovacuum_freeze_max_age at the collection time. |
| AutovacuumMultixactFreezeMaxAge | int | Value of the parameter autovacuum_multixact_freeze_max_age at the collection time. |
| ConnectionsLimit | int | Maximum number of concurrent connections that can be made to this database, -1 means no limit. |
| DatabaseName | string | Name of the database. |
| Location | string | Location of Azure Database for PostgreSQL Flexible server. |
| LogicalServerName | string | Logical name of the instance. |
| MinMultixactId | long | All multixact IDs before this one have been replaced with a transaction ID in this database. |
| MinMultixactIdAge | long | Age in transactions of multixact ID in this database. |
| RemainingMultixactIds | long | Remaining multixact IDs in this database. |
| RemainingMultixactIdsTillEmergencyAV | long | Remaining multixact IDs in this database till emergency autovacuum is triggered. |
| RemainingMultixactIdsTillWraparound | long | Remaining multixact IDs in this database till wraparound protection will be triggered. |
| RemainingTransactionIds | long | Remaining transaction IDs in this database. |
| RemainingTransactionIdsTillEmergencyAV | long | Remaining transaction IDs in this database till emergency autovacuum is triggered. |
| RemainingTransactionIdsTillWraparound | long | Remaining transaction IDs in this database till wraparound protection will be triggered. |
| ReplicaRole | string | Replica role example. Primary or secondary. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | The timestamp (UTC) of when the log was generated. |
| TransactionIdFrozen | long | All transaction IDs before this one have been replaced with a permanent ('frozen') transaction ID in this database. |
| TransactionIdFrozenAge | long | Age in transactions of TransactionIdFrozen in this database. |
| Type | string | The name of the table |
| UserId | int | Owner of the database, usually the user who created it. |
| VacuumFreezeMinAge | int | Value of the parameter vacuum_freeze_min_age at the collection time. |
| VacuumMultixactFreezeMinAge | int | Value of the parameter vacuum_multixact_freeze_min_age at the collection time. |

---

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.dbforpostgresql/flexibleservers`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

