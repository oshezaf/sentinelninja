# ADTDigitalTwinsOperation

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for ADTDigitalTwinsOperation table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Azure Resources |
| **Basic Logs Eligible** | ✗ No |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/adtdigitaltwinsoperation) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |

## Schema (26 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/adtdigitaltwinsoperation)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| ApplicationId | string | Application ID used in bearer authorization |
| CallerIpAddress | string | A masked source IP address for the event |
| Category | string | The type of resource being emitted |
| CorrelationId | string | Customer provided unique identifier for the event |
| DurationMs | string | How long it took to perform the event in milliseconds |
| Level | string | The logging severity of the event |
| Location | string | Azure region in which the Digital Twins instance is located |
| OperationName | string | The type of action being performed during the event |
| OperationVersion | string | The API Version utilized during the event |
| ParentId | string | ParentId as part of W3C's Trace Context. A request without a parent id is the root of the trace |
| RequestUri | string | The endpoint utilized during the event |
| ResultDescription | string | Additional details about the event |
| ResultSignature | string | Http status code of the event (if applicable) |
| ResultType | string | Outcome of the event |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| SpanId | string | SpanId as part of W3C's Trace Context. The ID of this request in the trace |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | The date and time that this event occurred, in UTC |
| TraceFlags | string | TraceFlags as part of W3C's Trace Context. Controls tracing flags such as sampling, trace level, etc. |
| TraceId | string | TraceId as part of W3C's Trace Context. The ID of the whole trace used to uniquely identify a distributed trace across systems |
| TraceState | string | TraceState as part of W3C's Trace Context. Additional vendor-specific trace identification information to span across different distributed tracing systems |
| Type | string | The name of the table |

---

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.digitaltwins/digitaltwinsinstances`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

