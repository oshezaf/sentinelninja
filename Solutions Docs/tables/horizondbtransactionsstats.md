# HorizonDBTransactionsStats

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for HorizonDBTransactionsStats table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Audit, Azure Resources |
| **Basic Logs Eligible** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/reference/tables-features)) |
| **Supports Transformations** | ✗ No ([source](https://learn.microsoft.com/azure/azure-monitor/reference/tables-features)) |
| **Ingestion API Supported** | ✗ No |
| **Lake-Only Ingestion** | ✓ Yes |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/horizondbtransactionsstats) |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Resource Types](#resource-types)

## Schema (29 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/horizondbtransactionsstats)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| AutovacuumFreezeMaxAge | int | Value of the parameter autovacuum_freeze_max_age at collection time. |
| AutovacuumMultixactFreezeMaxAge | int | Value of the parameter autovacuum_multixact_freeze_max_age at collection time. |
| ConnectionsLimit | int | Maximum number of concurrent connections that can be made to this database, -1 means no limit. |
| Database | string | Name of the database. |
| Location | string | Location of Azure HorizonDB replica. |
| MinMultixactId | long | All multixact identifier before this one have been replaced with a transaction identifier in this database. |
| MinMultixactIdAge | long | Age in transactions of multixact identifier in this database. |
| Node | string | Logical name of the node. |
| Pool | string | Name of the pool containing the node. |
| RemainingMultixactIds | long | Remaining multixact identifiers in this database. |
| RemainingMultixactIdsTillEmergencyAV | long | Remaining multixact identifiers in this database until emergency autovacuum is triggered. |
| RemainingMultixactIdsTillWraparound | long | Remaining multixact identifiers in this database until wraparound protection is triggered. |
| RemainingTransactionIds | long | Remaining transaction identifiers in this database. |
| RemainingTransactionIdsTillEmergencyAV | long | Remaining transaction identifiers in this database until emergency autovacuum is triggered. |
| RemainingTransactionIdsTillWraparound | long | Remaining transaction identifiers in this database until wraparound protection is triggered. |
| Role | string | Role of the replica. Possible values are Unknown, ReadWrite, and ReadOnly. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | Timestamp (UTC) of when the event is generated. |
| TransactionIdFrozen | long | All transaction identifiers before this one has been replaced with a permanent ('frozen') transaction identifier in this database. |
| TransactionIdFrozenAge | long | Age in transactions of TransactionIdFrozen in this database. |
| Type | string | The name of the table |
| UserId | int | Identifier (OID) of the user that executed the statement. |
| VacuumFreezeMinAge | int | Value of the parameter vacuum_freeze_min_age at collection time. |
| VacuumMultixactFreezeMinAge | int | Value of the parameter vacuum_multixact_freeze_min_age at collection time. |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [HorizonDBTransactionsStats Schema Reference (Azure Monitor)](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/horizondbtransactionsstats)

---

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.horizondb/clusters`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

