# CDBMongoRequests

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for CDBMongoRequests table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Audit, Azure Resources |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/cdbmongorequests) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |

## Schema (28 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/cdbmongorequests)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| AccountName | string | The name of the Cosmos DB account against which this Mongo API request was issued. |
| ActivityId | string | The unique identifier (GUID) for this Mongo API request. |
| Address | string | The IP address of the client VM which issued the request. |
| AuthorizationTokenType | string | The authorization token used for this request. |
| CollectionName | string | The name of the Cosmos DB container against which this request was issued. |
| DatabaseName | string | The name of the Cosmos DB database against which this request was issued. |
| DurationMs | real | The server-side execution time (in ms) for this request. |
| ErrorCode | string | The error code (if applicable) for this request. |
| OpCode | string | The operation code for the Mongo API request. |
| OperationName | string | The Mongo API operation that was executed |
| PIICommandText | string | Full text query (if opted in) for this Mongo API request. |
| RateLimitingDelayMs | real | The estimated time (in ms) spent retrying due to rate limited operations. |
| RegionName | string | The region against which this request was issued. |
| RequestCharge | real | The RU (Request Unit) consumption for this request. |
| RequestLength | real | The payload size (in bytes) of the request. |
| ResponseLength | real | The payload size (in bytes) of the server response. |
| RetriedDueToRateLimiting | bool | Boolean flag indicating if this request was retried server side due to throttles. |
| RetryCount | int | The number of server side retries executed for this request. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | Timestamp (in UTC) of the Mongo API data plane request. |
| Type | string | The name of the table |
| UserAgent | string | The user agent suffix associated with the client issuing the request. |
| UserId | string | The user ID associated with the client issuing the request. |

---

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.documentdb/databaseaccounts`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

