# DSMAzureBlobStorageLogs

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for DSMAzureBlobStorageLogs table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | - |
| **Basic Logs Eligible** | ✗ No ([source](https://learn.microsoft.com/azure/azure-monitor/reference/tables-features)) |
| **Supports Transformations** | ✗ No ([source](https://learn.microsoft.com/azure/azure-monitor/reference/tables-features)) |
| **Ingestion API Supported** | ✗ No |
| **Lake-Only Ingestion** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/dsmazureblobstoragelogs) |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Content Items](#content-items-using-this-table)

## Schema (26 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/dsmazureblobstoragelogs)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| AccountName | string | The name of the storage account. |
| AggregationCount | long | Number of events that were aggregated into a single entry. |
| AggregationLastEventTime | datetime | The time (UTC) when the last request was received by storage. |
| AuthenticationHash | string | The hash of authentication token. |
| AuthenticationType | string | The type of authentication that was used to make the request. E.g. OAuth, SAS, etc. |
| CallerIpAddress | string | The IP address of the requester. |
| Category | string | The category of requested operation. |
| CorrelationId | string | The ID that is used to correlate resource logs with data sensitivity logs. |
| Location | string | The location of storage account. |
| OperationName | string | The type of REST operation that was performed. For example: GetBlob, DeleteBlob. |
| RequesterAppId | string | The Open Authorization (OAuth) application ID that is used as the requester. |
| RequesterObjectId | string | The Open Authorization (OAuth) object ID that is used as the requester. |
| RequesterTenantId | string | The Open Authorization (OAuth) tenant ID that is used as the requester. |
| RequesterUpn | string | The user principal names (UPN) of requestor. |
| ResourceGroup | string | The Resource Group name of the storage account that was accessed. |
| ResourceSubscriptionId | string | The subscription ID (GUID) of the storage account being accessed. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| StatusCode | string | The HTTP status code for the request. If the request is interrupted, this value might be set to Unknown. |
| SumResponseBodySize | long | The sum of packets in responses written by the storage service, in bytes. If request(s) are unsuccessful, this value may be empty. |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | The time (UTC) when the first request was received by storage. |
| Type | string | The name of the table |
| Uri | string | Uniform resource identifier that is requested. |
| UserAgentHeader | string | The user-agent header value. |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [DSMAzureBlobStorageLogs Schema Reference (Azure Monitor)](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/dsmazureblobstoragelogs)

---

## Content Items Using This Table (1)

### Workbooks (1)

**GitHub Only:**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [DSTIMWorkbook](../content/github-only-dstimworkbook-062fa645.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

