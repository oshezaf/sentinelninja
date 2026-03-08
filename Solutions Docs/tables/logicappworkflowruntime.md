# LogicAppWorkflowRuntime

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for LogicAppWorkflowRuntime table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Azure Resources |
| **Basic Logs Eligible** | ✗ No |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/logicappworkflowruntime) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |

## Schema (27 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/logicappworkflowruntime)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| ActionName | string | The name of the workflow action. |
| ActionTrackingId | string | The unique ID of the workflow action. |
| ClientKeywords | string | The client keywords sent through the header. |
| ClientTrackingId | string | The unique ID of the client. |
| Code | string | The HTTP status code of the request. |
| EndTime | datetime | The end time (UTC) of the operation. |
| Error | string | The error message of this operation. |
| Location | string | The geographical run location of the workflow. |
| OperationName | string | The name of this operation. |
| OriginRunId | string | The unique ID of the original workflow run, only relevant for resubmission scenarios. |
| RetryHistory | string | The retry history of the workflow action. |
| RunId | string | The unique ID of the workflow run. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| StartTime | datetime | The start time (UTC) of the operation. |
| Status | string | The status of the operation, e.g. Succeeded, Failed, Skipped, Ignored. |
| Tags | string | The custom tags associated with the workflow. |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | The timestamp (UTC) of when the log was generated. |
| TrackedProperties | string | The custom tracked properties. |
| TriggerName | string | The name of the workflow trigger. |
| Type | string | The name of the table |
| WorkflowId | string | The unique ID of the workflow. |
| WorkflowName | string | The name of the workflow. |

---

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.web/sites`
- `microsoft.logic/workflows`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

