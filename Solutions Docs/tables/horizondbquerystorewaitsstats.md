# HorizonDBQueryStoreWaitsStats

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for HorizonDBQueryStoreWaitsStats table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Audit, Azure Resources |
| **Basic Logs Eligible** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/reference/tables-features)) |
| **Supports Transformations** | ✗ No ([source](https://learn.microsoft.com/azure/azure-monitor/reference/tables-features)) |
| **Ingestion API Supported** | ✗ No |
| **Lake-Only Ingestion** | ✓ Yes |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/horizondbquerystorewaitsstats) |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Resource Types](#resource-types)

## Schema (20 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/horizondbquerystorewaitsstats)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| Calls | long | Number of times the same event is captured for this entry in this time window. |
| DatabaseId | int | Identifier (OID) of database in which the statement was executed. 0 indicates it is a background worker or a system call. |
| EndTime | datetime | End time corresponding to the time window for this entry. Statistics for queries are aggregated by time window. |
| Event | string | PostgreSQL event name for which backend is currently waiting. |
| EventType | string | Type of PostgreSQL event for which backend is waiting. |
| Location | string | Location of Azure HorizonDB replica. |
| Node | string | Logical name of the node. |
| Pool | string | Name of the pool containing the node. |
| QueryId | string | Identifier of the query. An internal hash code, computed from the statement's parse tree. |
| Role | string | Role of the replica. Possible values are Unknown, ReadWrite, and ReadOnly. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| StartTime | datetime | Start time corresponding to the time window for this entry. Statistics for queries are aggregated by time window. |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | Timestamp (UTC) of when the event is generated. |
| Type | string | The name of the table |
| UserId | int | Identifier (OID) of the user that executed the statement. |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [HorizonDBQueryStoreWaitsStats Schema Reference (Azure Monitor)](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/horizondbquerystorewaitsstats)

---

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.horizondb/clusters`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

