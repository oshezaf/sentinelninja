# CIEventsAudit

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for CIEventsAudit table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Audit, Azure Resources |
| **Basic Logs Eligible** | ✗ No |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/cieventsaudit) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |

## Schema (30 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/cieventsaudit)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| Audience | string | The audience for which the accessToken was requested for. |
| CallerIPAddress | string | Caller IP address, if the operation corresponds to an API call that would come from an entity with a publicly available IP address. |
| CallerObjectId | string | Azure Active Directory ObjectId of the caller. |
| Category | string | Log category of the event. Either Operational or Audit. All POST/PUT/PATCH/DELETE HTTP Requests are tagged with Audit, everything else with Operational. |
| Claims | string | Claims of the user or app JSON web token (JWT). Claim properties vary per organization and the Azure Active Directory configuration. |
| CorrelationId | string | The ID for the correlated events. Can be used to identify correlated events between multiple tables. |
| DurationMs | long | Duration of the operation in milliseconds. |
| EventType | string | Always ApiEvent, marking the log event as API event. |
| InstanceId | string | Customer Insights instanceId. |
| Level | string | Severity level of the event, is one of: Informational, Warning, Error, or Critical. |
| Method | string | HTTP method: GET/POST/PUT/PATCH/HEAD |
| OperationName | string | Name of the operation represented by this event. |
| OperationStatus | string | Success for HTTP status code < 400, ClientError for HTTP status code < 500, Error for HTTP Status >= 500. |
| Origin | string | URI indicating where a fetch originates from or unknown. |
| Path | string | Relative path of the request. |
| RequiredRoles | string | Required roles to do the operation. Admin role is allowed to do all operations. |
| ResultSignature | string | Sub status of the event. If the operation corresponds to a REST API call, it's the HTTP status code. |
| ResultType | string | Status of the event. Running, Skipped, Successful, Failure. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | The timestamp (UTC) of when the log was generated. |
| Type | string | The name of the table |
| Uri | string | Absolute request URI. |
| UserAgent | string | Browser agent sending the request or unknown. |
| UserPrincipalName | string | The UserPrincipalName is the Azure AD username for the user accounts. |
| UserRole | string | Assigned role for the user or app. |

---

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.d365customerinsights/instances`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

