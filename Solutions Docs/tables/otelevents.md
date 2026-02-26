# OTelEvents

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for OTelEvents table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Applications |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/otelevents) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |

## Schema (40 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/otelevents)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| Attributes | dynamic | A collection of key-value pairs representing properties of the event. |
| ClientBrowser | string | Name and version of the web browser used by the client that triggered this span. |
| ClientCity | string | City where the client device is located. |
| ClientCountryOrRegion | string | Country or region where the client device is located. |
| ClientIP | string | IP address of the client device. |
| ClientModel | string | Model of the client device. |
| ClientOS | string | Operating system of the client device. |
| ClientStateOrProvince | string | State or province where the client device is located. |
| ClientType | string | Type of the client device. |
| DroppedAttributesCount | int | The number of attributes that were discarded by the data source. |
| EndUserId | string | Persistent string that uniquely represents an authenticated user of the service. |
| ExceptionMessage | string | If this event is an exception, this is the message associated with the exception. |
| ExceptionProblem | string | If the event is an exception, this is a summarized identifier for it. |
| ExceptionStackTrace | string | If the event is an exception, this is the stack trace associated with it. |
| ExceptionType | string | If this event is an exception, this is the type of the exception. |
| ItemCount | int | The number of spans represented by this record. This value is greater than 1 when sampling is in effect. |
| Measurements | dynamic | Application-defined measurements associated with this event. |
| OperationName | string | Service-defined name of the overall operation. |
| ReferencedItemId | string | This is the item id for the the span that this event is associated with. |
| ResourceAttributes | dynamic | Resource attributes emitted by an OpenTelemetry source. |
| RoleName | string | A human-readable name of the service emitting this span. This is a simplified service identifier combining ServiceNamespace and ServiceName. |
| SDKVersion | string | The name and version of the SDK, agent, or other source that emitted this record. |
| ServiceInstanceId | string | A unique identifier for the instance of the service. |
| ServiceName | string | Logical name of the service. |
| ServiceNamespace | string | A namespace for ServiceName. |
| ServiceVersion | string | Version information associated with the service. |
| SessionId | string | Service-defined session id. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| SpanId | string | The identifier of the span this event is about. |
| SyntheticSource | string | Upstream source of this event if it is well-known to be synthetic (ex. web crawlers). |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | Date and time when the event's span began. |
| TraceId | string | The identifier of the trace this span belongs to. |
| Type | string | The name of the table |
| UserAccountId | string | Service-defined account associated with the user. |
| UserId | string | Anonymous ID of a user accessing the service. |

---

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.operationalinsights/workspaces`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

