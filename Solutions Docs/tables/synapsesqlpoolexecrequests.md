# SynapseSqlPoolExecRequests

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for SynapseSqlPoolExecRequests table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Azure Resources |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/synapsesqlpoolexecrequests) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |

## Schema (33 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/synapsesqlpoolexecrequests)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| Category | string | The category of the log. |
| ClassifierName | string | The classifier name of the execution requests. |
| ClientCorrelationId | string | The correlation set by client/user. |
| Command | string | The SQL command of the execution requests. |
| DatabaseId | string | The databaseId of the execution requests. |
| EndCompileTime | datetime | The end compile time (UTC) of the execution requests. |
| EndTime | datetime | The end time (UTC) for the execution requests. |
| ErrorId | string | The errorId of the execution requests. |
| ExplainOutput | string | The output explain of the execution requests. |
| Importance | string | The importance of the execution requests. |
| Label | string | The label of the execution requests. |
| LogicalServerName | string | The logical server name of the SQL DW. |
| OperationName | string | The operation associated with log record. |
| RequestId | string | The requestId of the execution requests. |
| ResourceAllocationPercent | string | The resource allocation percent of the execution requests. |
| ResourceClass | string | The resource class of the execution requests. |
| ResourceGroup | string | The azure resourceGroup of the SQL DW. |
| ResultCacheHit | string | The result cache hit of the execution requests. |
| RootQueryId | string | The rootQueryId of the execution requests. |
| ScopeDepth | int | The scope depth of the execution requests. |
| SessionId | string | The Session ID of the SQL pool instance. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| StartTime | datetime | The startTime (UTC) of the execution requests. |
| StatementType | string | The statement type of the execution requests. |
| Status | string | The status of the execution requests. |
| SubmitTime | datetime | The submitTime (UTC) of the execution requests. |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | The timestamp (UTC) of when the log was generated. |
| Type | string | The name of the table |

---

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.synapse/workspaces`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

