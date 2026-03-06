# SynapseSqlPoolDmsWorkers

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for SynapseSqlPoolDmsWorkers table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Azure Resources |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/synapsesqlpooldmsworkers) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |

## Schema (28 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/synapsesqlpooldmsworkers)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| BytesProcessed | int | The bytes processed of the DMS workers. |
| Category | string | The category of the log. |
| CpuTime | int | The cpu time for the DMS workers. |
| DestinationInfo | string | The row count of the DMS workers. |
| DistributionId | int | The distribution id of the DMS workers. |
| DmsCpuId | int | The DMS cpu Id for the DMS workers. |
| DmsStepIndex | int | The DMS step index of the DMS workers. |
| EndTime | datetime | The end time (UTC) for the DMS workers. |
| ErrorId | string | The errorId of the DMS workers. |
| LogicalServerName | string | The logical server name of the SQL DW. |
| OperationName | string | The operation associated with log record. |
| PdwNodeId | int | The pdw node id of the DMS workers. |
| RequestId | string | The requestId of the DMS workers. |
| ResourceGroup | string | The azure resourceGroup of the SQL DW. |
| RowsProcessed | int | The rows processed of the DMS workers. |
| SourceInfo | string | The row count of the DMS workers. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| SqlSpId | int | The SQL Sp Id for the DMS workers. |
| StartTime | datetime | The startTime (UTC) of the DMS workers. |
| Status | string | The status of the DMS workers. |
| StepIndex | int | The step index of the DMS workers. |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | The timestamp (UTC) of when the log was generated. |
| Type | string | The type of the DMS workers. |

---

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.synapse/workspaces`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

