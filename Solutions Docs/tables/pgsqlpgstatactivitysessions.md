# PGSQLPgStatActivitySessions

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for PGSQLPgStatActivitySessions table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Audit, Azure Resources |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/pgsqlpgstatactivitysessions) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |

## Schema (28 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/pgsqlpgstatactivitysessions)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| ApplicationName | string | Name of the application that is connected to this backend. |
| BackendStartTime | datetime | Time when this process was started. For client backends, this is the time the client connected to the server. |
| BackendType | string | Type of current backend. |
| ClientIpAddress | string | IP address of the client connected to this backend. If this field is empty, it indicates either that the client is connected via a Unix socket on the server machine or that this is an internal process such as autovacuum. The last octet of the IP is obfuscated. |
| CollectionTime | datetime | The collection time indicating the time when the information was collected. |
| DatabaseId | int | ID (OID) of the database this backend is connected to. |
| DatabaseName | string | Name of the database this backend is connected to. |
| Location | string | Location of Azure Database for PostgreSQL Flexible server. |
| LogicalServerName | string | Logical name of the instance. |
| OldestTransactionId | long | The oldest transaction ID that a backend is currently seeing. |
| ProcessId | int | Process ID (PID) of this backend. |
| QueryStartTime | datetime | Time when the currently active query was started, or if state is not active, when the last query was started. |
| ReplicaRole | string | Replica role example. Primary or secondary. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| State | string | State of this backend at the collection time. |
| StateChangeTime | datetime | Time when the state was last changed. |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | The timestamp (UTC) of when the log was generated. |
| TransactionId | long | Top-level transaction identifier of this backend, if any. |
| TransactionStartTime | datetime | Time when this process' current transaction was started, or empty if no transaction is active. |
| Type | string | The name of the table |
| UserId | int | ID (OID) of the user logged into this backend. |
| WaitEvent | string | Wait event name if backend is currently waiting, otherwise empty string. |
| WaitEventType | string | The type of event for which the backend is waiting, if any, otherwise empty string. |

---

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.dbforpostgresql/flexibleservers`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

