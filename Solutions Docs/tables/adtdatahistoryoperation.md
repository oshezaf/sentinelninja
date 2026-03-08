# ADTDataHistoryOperation

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for ADTDataHistoryOperation table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Azure Resources |
| **Basic Logs Eligible** | ✗ No |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/adtdatahistoryoperation) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |

## Schema (25 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/adtdatahistoryoperation)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| ApplicationId | string | Application ID used in bearer authorization. |
| CallerIpAddress | string | A masked source IP address for the event. |
| CorrelationId | string | The ID for correlated events. Can be used to identify correlated events between multiple tables. |
| DurationMs | long | How long it took to perform the event in milliseconds. |
| Level | int | The logging severity of the event. |
| OperationName | string | The operation associated with log record. |
| OperationVersion | string | The API version utilized during the event. |
| ParentId | string | ParentId as part of W3C's trace context. A request without a parent id is the root of the trace. |
| Region | string | Azure region in which the Digital Twins instance is located. |
| RequestUri | string | The time series database connection's eventhub endpoint. |
| ResultDescription | string | Additional details about the event. |
| ResultSignature | int | Http status code of the event (if applicable). |
| ResultType | string | Result of the event. For example: Success, Failure, ClientFalure, etc. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| SpanId | string | SpanId as part of W3C's trace context. The ID of this request in the trace. |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | The timestamp (UTC) when the log was generated. |
| TraceFlags | string | TraceFlags as part of W3C's trace context. Controls tracing flags such as sampling, trace level, etc. |
| TraceId | string | TraceId as part of W3C's trace context. The ID of the whole trace used to uniquely identify a distributed trace across systems. |
| TraceState | string | TraceState as part of W3C's trace context. Additional vendor-specific trace identification information to span across different distributed tracing systems. |
| Type | string | The name of the table |

---

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.digitaltwins/digitaltwinsinstances`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

