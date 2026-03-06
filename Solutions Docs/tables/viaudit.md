# VIAudit

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for VIAudit table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Audit |
| **Basic Logs Eligible** | ✗ No |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/viaudit) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |

## Schema (24 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/viaudit)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| AccountId | string | The Video Indexer account ID. |
| AccountName | string | The Video Indexer account name. |
| CallerIpAddress | string | The caller IP address. |
| Claims | dynamic | Caller claims details. |
| CorrelationId | string | A unique record identifier. |
| Description | string | The operation description. |
| DurationMs | int | The operation duration in milliseconds. |
| ExternalUserId | string | Caller external user Id. |
| Location | string | The Video Indexer resource location. |
| OperationName | string | The name of the operation that triggered the event. |
| OperationVersion | string | The Video Indexer operations API version. |
| Signature | int | Http response signature of the operation, for example: 200, 401. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| Status | string | Status of the operation, for example: Success, Failure, Warning, Informational, Partial Success. |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | The timestamp (UTC) of when the event was generated. |
| Type | string | The name of the table |
| Upn | string | Caller email. |
| VideoId | string | The Video Indexer video ID. |
| VideoIndexerResourceId | string | The Video Indexer resource ID. |

---

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.videoindexer/accounts`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

