# Windows365AuditLogs

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for Windows365AuditLogs table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Audit |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/windows365auditlogs) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |

## Schema (28 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/windows365auditlogs)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| ActivityId | string | The activity Id of the operation. |
| ApplicationId | string | The caller application id of the operation. |
| ApplicationName | string | The application name of the operation. |
| BuildVersion | string | The build version of the operation. |
| CallerExtendedProperties | string | The caller extended properties of the operation. |
| ComponentName | string | The component name of the operation. |
| OperationName | string | The name of the operation. |
| OtherAuditEventProperties | string | The audit event properties of the operation, include componentName, operationType, category, activityDateTime, auditEventId, correlationId, shoeboxCategory, and resources. |
| OtherIdentityProperties | string | The identity properties of the user, include Type, UserPermission, ApplicationDisplayName, ServicePrincipleName, UserScopeTags, RemoteTenantId, and RemoteUserId. |
| Pid | string | The pid of the operation. |
| RelatedActivityId | string | The related activity Id of the operation. |
| ResourceExtendedProperties | string | The resource extended properties of the operation. |
| Result | string | The result of the operation. |
| ScenarioId | string | The scenario Id of the operation. |
| ScenarioInstanceId | string | The scenario instance Id of the operation. |
| ServiceName | string | The service name of the operation. |
| SessionId | string | The session Id of the operation. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| TenantId | string | The Log Analytics workspace ID |
| Tid | string | The tid of the operation. |
| TimeGenerated | datetime | Date and time when the report was generated (UTC). |
| Type | string | The name of the table |
| UserId | string | The user Id of the user. |
| UserPrincipalName | string | The user principal name of the user. |

---

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.intune/operations`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

