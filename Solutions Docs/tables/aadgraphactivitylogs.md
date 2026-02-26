# AADGraphActivityLogs

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for AADGraphActivityLogs table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Entra |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✗ No |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/aadgraphactivitylogs) |

## Schema (37 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/aadgraphactivitylogs)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| AADTenantId | string | The identifier of the tenant where the request was made. |
| ActorType | string | The type of actor making the request (e.g., User, Application). |
| ApiVersion | string | The API version of the operation. |
| AppId | string | The identifier of the application making the request. |
| CallerIpAddress | string | The IP address of the caller making the request. |
| Category | string | The log category, e.g., AzureADGraphActivityLogs. |
| ClientAuthMethod | string | The authentication method used by the client. |
| DeviceId | string | The identifier of the device used in the request. |
| DurationMs | int | The duration of the request in milliseconds. |
| IdentityProvider | string | The identity provider used during authentication. |
| Level | string | The severity level of the event (e.g., Informational). |
| Location | string | The name of the region that served the request. |
| OperationName | string | The name of the operation performed on the resource. |
| RequestId | string | The identifier representing the request. |
| RequestMethod | string | The HTTP method used (e.g., GET, POST). |
| RequestUri | string | The URI of the request sent to the AAD Graph API. |
| ResponseSizeBytes | int | The size of the response returned to the caller, in bytes. |
| ResponseStatusCode | int | The HTTP status code returned in the response. |
| ResultSignature | string | The HTTP response status or outcome of the operation. |
| Roles | string | The roles assigned in the token claims. |
| Scopes | string | The scopes included in the token claims. |
| ServicePrincipalId | string | The identifier of the service principal making the request. |
| SessionId | string | The session identifier from the request context. |
| SignInActivityId | string | The identifier representing the sign-in activity. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | The date and time the request was received. |
| TimeRequested | datetime | The timestamp when the request was made. |
| TokenIssuedAt | datetime | The timestamp when the token was issued. |
| Type | string | The name of the table |
| UserAgent | string | The user agent string provided by the client. |
| UserId | string | The identifier of the user making the request. |
| Wids | string | The WIDs from the token claims. |

---

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.azureadgraph/tenants`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

