# AzureLoadTestingOperation

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for AzureLoadTestingOperation table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Audit, Azure Resources |
| **Basic Logs Eligible** | ✗ No |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/azureloadtestingoperation) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |

## Schema (25 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/azureloadtestingoperation)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| CallerIpAddress | string | IP Address of the client that submitted the request. |
| CorrelationId | string | Unique identifier to be used to correlate logs. |
| DurationMs | real | Amount of time it took to process request in milliseconds. |
| FailureDetails | string | Details of the error in case if request is failed. |
| HttpStatusCode | int | HTTP status code of the API response. |
| Identity | dynamic | JSON structure containing information about the caller. |
| OperationId | string | Operation identifier for rest api |
| OperationName | string | Name of the operation attempted on the resource. |
| OperationVersion | string | Request api version |
| RequestBody | dynamic | Request body of the API calls. |
| RequestId | string | Unique identifier to be used to correlate request logs. |
| RequestMethod | string | HTTP method of the API request. |
| RequestUri | string | URI of the API request. |
| ResourceRegion | string | Region where the resource is located. |
| ResultType | string | Indicates if the request was successful or failed. |
| ServiceLocation | string | Location of the service which processed the request. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | Date and time the record was created. |
| Type | string | The name of the table |
| UserAgent | string | HTTP header passed by the client, if applicable. |

---

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.loadtestservice/loadtests`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

