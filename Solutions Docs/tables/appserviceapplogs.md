# AppServiceAppLogs

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for AppServiceAppLogs table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Low value |
| **Basic Logs Eligible** | ✗ No |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/appserviceapplogs) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |

## Schema (22 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/appserviceapplogs)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| Category | string | Log category name |
| ContainerId | string | Application container id |
| CustomLevel | string | Verbosity level of log |
| ExceptionClass | string | Application class from where log message is emitted |
| Host | string | Host where the application is running |
| Level | string | Verbosity level of log mapped to standard levels (Informational, Warning, Error, or Critical) |
| Logger | string | Application logger used to emit log message |
| Message | string | Log message |
| Method | string | Application Method from where log message is emitted |
| OperationName | string | The name of the operation represented by this event. |
| ResultDescription | string | Log message description |
| Source | string | Application source from where log message is emitted |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| Stacktrace | string | Complete stack trace of the log message in case of exception |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | Time when event is generated |
| Type | string | The name of the table |
| WebSiteInstanceId | string | Instance Id the application running |

---

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.web/sites`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

