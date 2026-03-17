# CDBDataPlaneRequests

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for CDBDataPlaneRequests table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Audit, Azure Resources |
| **Basic Logs Eligible** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Supports Transformations** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/cdbdataplanerequests) |

## Schema (32 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/cdbdataplanerequests)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| AadAppliedRoleAssignmentId | string | The ID of the applied role assignment for the caller issuing the data plane request. |
| AadPrincipalId | string | The AAD Principal ID of the caller issuing the data plane request. |
| AccountName | string | The name of the Cosmos DB account. |
| ActivityId | string | The unique identifier (GUID) for this data plane operation |
| AuthTokenType | string | The authorization type (System Read/Write key) for this request by the Cosmos DB Gateway service when running in Gateway mode or using the REST API. |
| ClientIpAddress | string | The IP address of the client VM issuing the request. |
| CollectionName | string | The Cosmos DB container against which the request was issued. |
| ConnectionMode | string | The connection mode used by the client issuing the request - (Direct or Gateway mode). |
| DatabaseName | string | The Cosmos DB database against which the request was issued. |
| DurationMs | real | The server-side execution time (in milliseconds) for this request. |
| KeyType | string | The authorization type (Primary/Secondary Read/Write key) for this request when running in Direct mode. |
| OperationName | string | The specific data plane operation executed against the account. |
| PartitionId | string | The physical partition ID for the Cosmos DB container against which the request was issued. |
| RegionName | string | The Azure region to which this request was issued. |
| RequestCharge | real | The RUs (Request Units) consumed by this operation. |
| RequestLength | real | The payload size (in bytes) for the request. |
| RequestResourceId | string | The ID of the specific Cosmos DB resource within the account against which the data plane request was executed. |
| RequestResourceType | string | The Cosmos DB resource type within the account against which the data plane request was executed, can be one of Database, Collection, Document, Attachment, User, Permission, StoredProcedure, Trigger, UserDefinedFunction, Offer. |
| ResourceTokenPermissionId | string | The ID of the resource token associated with the resource accessed by this request. |
| ResourceTokenPermissionMode | string | The permission mode of the resource token associated with the resource accessed by this request. |
| ResourceTokenUserRid | string | The user ID associated with the resource token for the resource accessed by this request. |
| ResponseLength | real | The payload size (in bytes) of the server response. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| StatusCode | int | The HTTP status code response for the data plane request, highlighting details of the success/failure of the request. |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | Timestamp (in UTC) when the data plane request was issued. |
| Type | string | The name of the table |
| UserAgent | string | The name of the user specified user agent suffix (as specified when initializing the Cosmos DB client) when running in Direct mode. |

---

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.documentdb/databaseaccounts`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

