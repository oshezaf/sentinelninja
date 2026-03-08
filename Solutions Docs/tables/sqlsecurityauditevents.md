# SQLSecurityAuditEvents

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for SQLSecurityAuditEvents table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Azure Resources |
| **Basic Logs Eligible** | ✗ No |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/sqlsecurityauditevents) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |

## Schema (56 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/sqlsecurityauditevents)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| ActionId | string | ID of the audit action. |
| ActionName | string | The name of the audit action. |
| AdditionalInformation | string | Unique information that only applies to a single event is returned as XML. |
| AffectedRows | long | Number of rows affected by the executed statement. |
| ApplicationName | string | Name of client application which executed the statement that caused the audit event. |
| AuditSchemaVersion | int | The audit logs schema version. |
| Category | string | The category of the log. |
| ClassType | string | The type of auditable entity that the audit occurs on. |
| ClassTypeDescription | string | The description of the class type. |
| ClientIp | string | Source IP of the client application |
| ClientTlsVersion | int | Client TLS version |
| ConnectionId | string | ID of the connection in the server. |
| DatabaseName | string | The database context in which the action occurred. |
| DatabasePrincipalId | int | ID of the database user context that the action is performed in. |
| DatabasePrincipalName | string | Current user. |
| DataSensitivityInformation | string | Information types and sensitivity labels returned by the audited query, based on the classified columns in the database. |
| DurationMs | long | Query execution duration in milliseconds. |
| EventId | string | unique Guid identifying each audit event. |
| EventTime | datetime | The time (UTC) the event was fired at. |
| HostName | string | The host name. |
| IsColumnPermission | bool | Flag indicating if this is a column level permission. |
| IsServerLevelAudit | bool | Boolean indicating whether this was generated from a server level audit or database level audit. |
| LogicalServerName | string | Logical server name. |
| ObjectId | int | The ID of the entity on which the audit occurred. |
| ObjectName | string | The name of the entity on which the audit occurred. |
| PermissionBitmask | string | In some actions, this is the permissions that were grant, denied, or revoked. |
| ResourceGroup | string | Resource group of the SQL resoruce. |
| ResponseRows | long | Number of rows returned in the result set. |
| SchemaName | string | The schema context in which the action occurred. |
| SecurableClassType | string | The type of auditable entity that the audit occurs on. |
| SequenceGroupId | string | Unique identifier. |
| SequenceNumber | int | Tracks the sequence of records within a single audit record that was too large to fit in the write buffer for audits. |
| ServerPrincipalId | int | ID of the login context that the action is performed in. |
| ServerPrincipalName | string | Current login. Is nullable. |
| ServerPrincipalSid | string | Current login SID. |
| SessionContext | string | The Session context key value content. provided as an XML. |
| SessionId | int | ID of the session on which the event occurred. |
| SessionServerPrincipalName | string | Server principal for session. Is nullable. Returns the identity of the original login which was connected to the instance of SQL Server in case there were explicit or implicit context switches. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| Statement | string | TSQL statement if it exists. |
| Succeeded | bool | Indicates whether the action that triggered the event succeeded. Is not nullable. For all events other than login events, this only reports whether the permission check succeeded or failed, not the operation. |
| TargetDatabasePrincipalId | int | The database principal the GRANT/DENY/REVOKE operation is performed on. |
| TargetDatabasePrincipalName | string | Target user of action. |
| TargetServerPrincipalId | int | Server principal that the GRANT/DENY/REVOKE operation is performed on. |
| TargetServerPrincipalName | string | Target login of action. |
| TargetServerPrincipalSid | string | SID of target login. |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | The timestamp (UTC) of when the log was generated. |
| TransactionId | long | Unique identifier to identify multiple audit events in one transaction. |
| Type | string | The name of the table |
| UserDefinedEventId | int | User defined event id passed as an argument to sp_audit_write. |
| UserDefinedInformation | string | Used to record any extra information the user wants to record in audit log by using the sp_audit_write stored procedure. |

---

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.synapse/workspaces`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

