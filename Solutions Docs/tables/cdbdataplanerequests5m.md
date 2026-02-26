# CDBDataPlaneRequests5M

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for CDBDataPlaneRequests5M table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Audit, Azure Resources |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✗ No |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/cdbdataplanerequests5m) |

## Schema (40 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/cdbdataplanerequests5m)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| AadAppliedRoleAssignmentId | string | The ID of the applied role assignment for the caller issuing the data plane requests in this interval. |
| AadPrincipalId | string | The AAD Principal ID of the caller issuing the data plane requests in this interval. |
| AccountName | string | The name of the Cosmos DB account. |
| AuthTokenType | string | The authorization type (System Read/Write key) for this request set by the Cosmos DB Gateway service when running in Gateway mode or using the REST API. |
| AvgDurationMs | real | The average server-side execution times (in milliseconds) for the requests in this interval. |
| AvgRequestCharge | real | The average RUs (Request Units) consumed by an operation in this interval. |
| AvgRequestLength | real | The average payload size (in bytes) for the requests in this interval. |
| AvgResponseLength | real | The average payload size (in bytes) of the server response in this interval. |
| ClientIpAddress | string | The IP address of the client VM issuing the requests in the interval. |
| CollectionName | string | The Cosmos DB container against which the requests in this interval were issued. |
| ConnectionMode | string | The connection mode used by the client issuing the requests in the interval - (Direct or Gateway mode). |
| DatabaseName | string | The Cosmos DB database against which the requests in this interval were issued. |
| KeyType | string | The authorization type (Primary/Secondary Read/Write key) for this request set when running in Direct mode. |
| MaxDurationMs | real | The highest server-side execution time (in milliseconds) of a request in this interval. |
| MaxRequestCharge | real | The maximum number of RUs (Request Units) consumed by an operation in this interval. |
| MaxRequestLength | real | The highest payload size (in bytes) for a request in this interval. |
| MaxResponseLength | real | The highest payload size (in bytes) of the server response in this aggregation. |
| OperationName | string | The specific data plane operation executed against the account. |
| PartitionId | string | The physical partition ID for the Cosmos DB container against which the requests in this interval were issued. |
| RegionName | string | The Azure region to which the requests in this interval were issued. |
| RequestCount | real | The number of requests aggregated in this interval. |
| RequestResourceId | string | The ID of the specific Cosmos DB resource within the account against which the data plane requests in the interval were executed. |
| RequestResourceType | string | The Cosmos DB resource type within the account against which the data plane requests in the interval were executed, can be one of Database, Collection, Document, Attachment, User, Permission, StoredProcedure, Trigger, UserDefinedFunction, Offer. |
| ResourceTokenPermissionId | string | The ID of the resource token associated with the resource accessed by the requests in this interval. |
| ResourceTokenPermissionMode | string | The permission mode of the resource token associated with the resource accessed by this requests in this interval. |
| ResourceTokenUserRid | string | The user ID associated with the resource token for the resource accessed by the requests in this interval. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| StatusCode | int | The HTTP status code response for the data plane request, highlighting details of the success/failure of the request. |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | Timestamp (in UTC) of the 5 minute interval for the aggregation. |
| TotalDurationMs | real | The sum of the server-side execution times (in milliseconds) for the requests in this interval. |
| TotalRequestCharge | real | The total RUs (Request Units) consumed by all operations in this interval. |
| TotalRequestLength | real | The total payload size (in bytes) for the all requests in this interval. |
| TotalResponseLength | real | The total payload size (in bytes) of the server response in this interval. |
| Type | string | The name of the table |
| UserAgent | string | The name of the user specified user agent suffix (as specified when initializing the Cosmos DB client) when running in Direct mode. |

---

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.documentdb/databaseaccounts`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

