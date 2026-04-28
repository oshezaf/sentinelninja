# SentinelAlibabaCloudAPIGatewayLogs

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for SentinelAlibabaCloudAPIGatewayLogs table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Security |
| **Basic Logs Eligible** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Supports Transformations** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Ingestion API Supported** | ✓ Yes |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/sentinelalibabacloudapigatewaylogs) |
| **Azure Monitor Logs Ingestion API** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview) |

## Schema (47 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/sentinelalibabacloudapigatewaylogs)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| ApiGroupName | string | The name of the group to which the API belongs. |
| ApiGroupUid | string | The ID of the group to which the API belongs. |
| ApiName | string | The API name. |
| ApiStageName | string | The environment name. |
| ApiStageUid | string | The ID of the environment in which the API was called. |
| ApiUid | string | The API ID. |
| AppId | string | The ID of the application that was used to call the API. |
| AppName | string | The name of the application that was used to call the API. |
| ClientIp | string | The IP address of the client that initiated the API call. |
| ClientNonce | string | The X-Ca-Nonce header in the request initiated from the client. |
| ConsumerAppKey | string | The AppKey that was used in the request. |
| CustomTraceId | string | The traceId of the end-to-end log. |
| Domain | string | The domain name that was used for the API call. |
| ErrorCode | string | The error code, such as X500ER. |
| ErrorMessage | string | The returned error message. |
| Exception | string | The specific error message that was returned by the backend service of the API. |
| ExchangeTimestamp | string | The I/O points in time in the request link. FrontRequestStart: the point in time when API Gateway started to receive the request from the client. FrontRequestEnd: the point in time when API Gateway completed receiving the request from the client. BackendRequestStart: the point in time when API Gateway started to forward the request to the backend service. BackendRequestEnd: the point in time when API Gateway completed forwarding the request to the backend service. BackendResponseStart: the point in time when API Gateway started to receive the response from the backend service. BackendResponseEnd: the point in time when API Gateway completed receiving the response from the backend service. FrontResponseStart: the point in time when API Gateway started to send the response to the client. FrontResponseEnd: the point in time when API Gateway completed sending the response to the client. |
| HttpMethod | string | The HTTP method that was used by the API request. |
| InitialRequestId | string | If an API calls another API, for example, API-1 calls API-2, initialRequestId is used to record the request ID of API-1 in the logs of API-2. |
| InstanceId | string | The ID of the API Gateway instance to which the API belongs. |
| JwtClaims | string | The JSON web token (JWT) claims. The claims can be configured at the group level. |
| LogProject | string | The name of the log project where the logs are stored. |
| LogRegion | string | The region where the log store is located. |
| LogStore | string | The name of the log store where the logs are stored. |
| Path | string | The request path of the API. |
| Plugin | string | The plug-in hit by the request and the relevant context. |
| ProviderAliUid | string | The ID of the account that provides the API. |
| Region | string | The region where the API resides, for example, cn-hangzhou, which indicates the China (Hangzhou) region. |
| RequestBody | string | The body of the request sent by the client. The body can contain up to 1,024 bytes in length. This field is for dedicated instances only. |
| RequestHandleTime | datetime | The time point in UTC at which the API request was received by API Gateway. |
| RequestHeaders | string | The header content in the request initiated from the client. This field is for dedicated instances only. |
| RequestId | string | The request ID. The ID is globally unique. |
| RequestProtocol | string | The protocol used by the client to send the request. Valid values: HTTP, HTTPS, and WS. |
| RequestQueryString | string | The queryString in the request initiated from the client. This field is for dedicated instances only. |
| RequestSize | string | The request size. Unit: bytes. |
| ResponseBody | string | The response content. The response can contain up to 1,024 bytes in length. This field is for dedicated instances only. |
| ResponseHeaders | string | The header content of the API response. This field is for dedicated instances only. |
| ResponseSize | string | The response size. Unit: bytes. |
| ServiceLatency | real | The total time consumed to access the backend resources. The total time includes the time consumed to request a connection to the resources, the time consumed to establish the connection, and the time consumed to call the backend service. Unit: milliseconds. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| StatusCode | string | HttpStatusCode |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | The time when the log entry was generated |
| TotalLatency | real | The total latency of the API request. Unit: milliseconds. |
| Type | string | The name of the table |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

