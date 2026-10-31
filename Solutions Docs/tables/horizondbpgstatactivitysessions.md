# HorizonDBPgStatActivitySessions

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for HorizonDBPgStatActivitySessions table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Audit, Azure Resources |
| **Basic Logs Eligible** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/reference/tables-features)) |
| **Supports Transformations** | ✗ No ([source](https://learn.microsoft.com/azure/azure-monitor/reference/tables-features)) |
| **Ingestion API Supported** | ✗ No |
| **Lake-Only Ingestion** | ✓ Yes |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/horizondbpgstatactivitysessions) |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Resource Types](#resource-types)

## Schema (29 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/horizondbpgstatactivitysessions)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| Application | string | Name of the application that is connected to the backend that generates the event. |
| BackendStartTime | datetime | Time when the backend that generates the event starts. For client backends, this is the time the client connected to the replica. |
| BackendType | string | Type of backend that generates the event. |
| ClientIp | string | IP address of the client connected to the backend that generates the event. If this field is empty, it indicates that the client is connected via a Unix socket on the server compute or that it corresponds to an internal process such as autovacuum. The last octet of the IP is obfuscated. |
| CollectionTime | datetime | The collection time indicating the time when the information was collected. |
| Database | string | Name of the database the backend that generfates the event is connected to. |
| DatabaseId | int | Identifier (OID) of the database the backend that generates the event is connected to. |
| Location | string | Location of Azure HorizonDB replica. |
| Node | string | Logical name of the node. |
| OldestTransactionId | long | Oldest transaction identifier that the backend that generates this event is able to see. |
| Pool | string | Name of the pool containing the node. |
| ProcessId | int | Process ID (PID) of this backend. |
| QueryStartTime | datetime | Time when the active query starts. If state is not active, this represents the time when last executed query started. |
| Role | string | Role of the replica. Possible values are Unknown, ReadWrite, and ReadOnly. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| State | string | State, at collection time, of the backend that generates the event. |
| StateChangeTime | datetime | Time when the state was last changed. |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | Timestamp (UTC) of when the event is generated. |
| TransactionId | long | Top-level transaction identifier of this backend, if any. |
| TransactionStartTime | datetime | Time when the backend that generates the event starts current transaction. If there's no active transaction, this is set to an empy value. |
| Type | string | The name of the table |
| UserId | int | Identifier (OID) of the user that executed the statement. |
| WaitEvent | string | Name of event for which the backend is waiting. If it isn't waiting, this is set to an empty string. |
| WaitEventType | string | Type of event for which the backend is waiting. If it isn't waiting, this is set to an empty string. |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [HorizonDBPgStatActivitySessions Schema Reference (Azure Monitor)](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/horizondbpgstatactivitysessions)

---

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.horizondb/clusters`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

