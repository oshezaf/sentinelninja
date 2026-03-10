# MicrosoftGraphActivityLogs

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for MicrosoftGraphActivityLogs table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Microsoft Graph |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/microsoftgraphactivitylogs) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |

## Schema (35 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/microsoftgraphactivitylogs)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| AadTenantId | string | The Azure AD tenant ID. |
| ApiVersion | string | The API version of the event. |
| AppId | string | The identifier for the application. |
| ATContent | string | Reserved for future use. |
| ATContentH | string | Reserved for future use. |
| ATContentP | string | Reserved for future use. |
| ClientAuthMethod | int | Indicates how the client was authenticated. For a public client, the value is 0. If client ID and client secret are used, the value is 1. If a client certificate was used for authentication, the value is 2. |
| ClientRequestId | string | Optional. The client request identifier when sent. If no client request identifier is sent, the value will be equal to the operation identifier. |
| DeviceId | string | The identifier of the device from which the authentication request originated. |
| DurationMs | int | The duration of the request in milliseconds. |
| IdentityProvider | string | The identity provider that authenticated the subject of the token. |
| IPAddress | string | The IP address of the client from where the request occurred. |
| Location | string | The name of the region that served the request. |
| OperationId | string | The identifier for the batch. For non-batched requests, this will be unique per request. For batched requests, this will be the same for all requests in the batch. |
| RequestId | string | The identifier representing the request. |
| RequestMethod | string | The HTTP method of the event. |
| RequestUri | string | The URI of the request. |
| ResponseSizeBytes | int | The size of the response in Bytes. |
| ResponseStatusCode | int | The HTTP response status code for the event. |
| Roles | string | The roles in token claims. |
| Scopes | string | The scopes in token claims. |
| ServicePrincipalId | string | The identifier of the servicePrincipal making the request. |
| SessionId | string | The unique identifier for the authentication session. |
| SignInActivityId | string | The identifier representing the sign-in activitys. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | The date and time the request was received. |
| TokenIssuedAt | datetime | The timestamp the token was issued at. |
| Type | string | The name of the table |
| UniqueTokenId | string | The unique token identifier of the API call used to make the audited change. |
| UserAgent | string | The user agent information related to request. |
| UserId | string | The identifier of the user making the request. |
| Wids | string | Denotes the tenant-wide roles assigned to this user. |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

