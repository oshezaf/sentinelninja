# ApiManagementGatewayLogs

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for ApiManagementGatewayLogs table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Azure Resources |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/apimanagementgatewaylogs) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |

## Schema (59 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/apimanagementgatewaylogs)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| ApiId | string |  |
| ApimSubscriptionId | string |  |
| ApiRevision | string |  |
| BackendId | string |  |
| BackendMethod | string |  |
| BackendProtocol | string |  |
| BackendRequestBody | string | Backend request body |
| BackendRequestHeaders | dynamic |  |
| BackendResponseBody | string | Backend response body |
| BackendResponseCode | int |  |
| BackendResponseHeaders | dynamic |  |
| BackendTime | long |  |
| BackendUrl | string |  |
| Cache | string |  |
| CacheTime | long |  |
| CallerIpAddress | string |  |
| Category | string |  |
| ClientProtocol | string |  |
| ClientTime | long |  |
| ClientTlsVersion | string |  |
| CorrelationId | string |  |
| Errors | dynamic |  |
| IsMasterTrace | bool | Indication if the request trace was created with the master subscription |
| IsRequestSuccess | bool |  |
| IsTraceAllowed | bool | Indication if the requested trace was allowed |
| IsTraceExpired | bool | Indication if the requested trace has expired and is not granted |
| IsTraceRequested | bool | Indication if the caller has requested to create a request trace |
| LastErrorElapsed | long |  |
| LastErrorMessage | string |  |
| LastErrorReason | string |  |
| LastErrorScope | string |  |
| LastErrorSection | string |  |
| LastErrorSource | string |  |
| Method | string |  |
| OperationId | string |  |
| OperationName | string |  |
| ProductId | string |  |
| Region | string |  |
| RequestBody | string | Client request body |
| RequestHeaders | dynamic |  |
| RequestSize | int |  |
| ResponseBody | string | Gateway response body |
| ResponseCode | int |  |
| ResponseHeaders | dynamic |  |
| ResponseSize | int |  |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime |  |
| Timestamp | datetime |  |
| TotalTime | long |  |
| TraceRecords | dynamic | Records emitted by trace policies |
| Type | string | The name of the table |
| Url | string |  |
| UserId | string |  |
| WorkspaceId | string | ID of a workspace for which the request API operation is a part of |

---

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.apimanagement/service`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

