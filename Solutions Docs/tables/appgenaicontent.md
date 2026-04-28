# AppGenAIContent

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for AppGenAIContent table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Applications |
| **Basic Logs Eligible** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/appgenaicontent) |

## Schema (27 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/appgenaicontent)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| AgentId | string | The unique identifier of the GenAI agent. |
| AgentName | string | The name of the GenAI agent. |
| Attributes | dynamic | A property bag of additional key-value pairs associated with this record. |
| EvaluationExplanation | string | The explanation or reasoning provided by an evaluation of the GenAI interaction. |
| Id | string | A unique identifier for the record. |
| InputMessages | string | The chat history provided to the model as an input. |
| ModelName | string | The name of the GenAI model the request is being made to. |
| OutputMessages | string | Messages returned by the model where each message represents a specific model response (choice, candidate). |
| ParentSpanId | string | The identifier of the parent of the associated span. |
| RoleName | string | A simplified service identifier combining ServiceNamespace and ServiceName. |
| ServiceInstanceId | string | A unique identifier for the instance of the service. This is the value of the 'service.instance.id' resource attribute. |
| ServiceName | string | Logical name of the service. This is the value of the 'service.name' resource attribute. |
| ServiceNamespace | string | A namespace for ServiceName. This is the value of the 'service.namespace' resource attribute. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| SpanId | string | The identifier of the span this content is associated with. |
| SystemInstructions | string | The system message or instructions provided to the GenAI model separately from the chat history. |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | Date and time when the GenAI content was captured. |
| ToolCallArguments | string | Parameters passed to the tool call. |
| ToolCallResult | string | The result returned by the tool call (if any and if execution was successful). |
| ToolDefinitions | string | The list of source system tool definitions available to the GenAI agent or model. |
| TraceId | string | The identifier of the trace this record belongs to. |
| Type | string | The name of the table |

---

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.operationalinsights/workspaces`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

