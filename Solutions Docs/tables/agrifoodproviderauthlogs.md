# AgriFoodProviderAuthLogs

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for AgriFoodProviderAuthLogs table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Azure Resources |
| **Basic Logs Eligible** | ✗ No |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/agrifoodproviderauthlogs) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |

## Schema (25 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/agrifoodproviderauthlogs)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| ApplicationId | string | ApplicationId in identity claims. |
| CallerIpAddress | string | IP address of the client that made the request. |
| Category | string | Logs generated as a result of operations executed using FarmBeats APIs are grouped into categories. Categories in FarmBeats are logical groupings based on either the data source the underlying APIs fetch data from or on the basis of hierarchy of entities in FarmBeats. |
| ClientTenantId | string | TenantId in identity claims. |
| CorrelationId | string | Unique identifier to be used to correlate logs, when available. |
| DataPlaneResourceId | string | ID that uniquely identifies a FarmBeats resource such as a Farm, Farmer, Boundary etc. |
| DurationMs | real | Time it took to service the REST API request, in milliseconds. |
| FarmerId | string | Farmer ID associated with the request, wherever applicable. |
| Level | string | The severity level of the event, will be one of Informational, Warning, Error, or Critical. |
| Location | string | The region of the resource emitting the event. |
| ObjectId | string | ObjectId in identity claims. |
| OperationName | string | The operation name for which the log entry was created. |
| RequestBody | dynamic | Request body of the API calls. |
| RequestUri | string | URI of the API request. |
| ResultDescription | string | Additional details about the result, when available. |
| ResultSignature | int | HTTP status of API request. |
| ResultType | string | Result of the REST API request. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | Timestamp (in UTC) when the log was created. |
| Type | string | The name of the table |

---

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.agfoodplatform/farmbeats`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

