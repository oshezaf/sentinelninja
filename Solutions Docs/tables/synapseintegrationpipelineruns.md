# SynapseIntegrationPipelineRuns

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for SynapseIntegrationPipelineRuns table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Azure Resources |
| **Basic Logs Eligible** | ✗ No |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/synapseintegrationpipelineruns) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |

## Schema (25 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/synapseintegrationpipelineruns)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| Annotations | dynamic | The annotation details of the log record. |
| Category | string | The category of the log. |
| CorrelationId | string | The correlationId for the log record. |
| End | datetime | The end time (UTC) for the pipelien run. |
| Level | string | The log type info level of the record. |
| Location | string | The location of the resource in the cloud where this log is originated. |
| OperationName | string | The operation associated with log record. |
| Parameters | dynamic | The parameter details of the pipeline run. |
| PipelineName | string | The name of the pipeline flow. |
| PipelineTenantId | string | The tenantId details of the pipeline run. |
| Predecessors | dynamic | The predecessors information of the pipeline log. |
| RunId | string | The run id of the pipeline job. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| Start | datetime | The start time (UTC) of the pipeline run. |
| Status | string | The Status of the SQL requests. |
| SystemParameters | dynamic | The system parameter details of the pipeline run. |
| Tags | dynamic | The associated tags of the log record. |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | The timestamp (UTC) of when the log was generated. |
| Type | string | The type of the pipeline run. |
| UserProperties | dynamic | The user properties of the log record. |

---

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.synapse/workspaces`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

