# FunctionAppLogs

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for FunctionAppLogs table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Low value |
| **Basic Logs Eligible** | ✗ No |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/functionapplogs) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |

## Schema (26 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/functionapplogs)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| ActivityId | string | The activity ID that logged the message. |
| AppName | string | The Function application name. |
| Category | string | The log category name. |
| EventId | int | The event ID. |
| EventName | string | The event name. |
| ExceptionDetails | string | The exception details. This includes the exception type, message, and stack trace. |
| ExceptionMessage | string | The exception message. |
| ExceptionType | string | The exception type (e.g., System.InvalidOperationException). |
| FunctionInvocationId | string | The invocation ID that logged the message. |
| FunctionName | string | The name of the function that logged the message. |
| HostInstanceId | string | The host instance ID. |
| HostVersion | string | The Functions host version. |
| Level | string | The log level. Valid values are Trace, Debug, Information, Warning, Error, or Critical. |
| LevelId | int | The integer value of the log level. Valid values are 0 (Trace), 1 (Debug), 2 (Information), 3 (Warning), 4 (Error), or 5 (Critical). |
| Location | string | The location of the server that processed the request (e.g., South Central US). |
| Message | string | The log message. |
| ProcessId | int | The process ID. |
| RoleInstance | string | The role instance ID. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | The timestamp (UTC) of the log. |
| Type | string | The name of the table |

---

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.web/sites`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

