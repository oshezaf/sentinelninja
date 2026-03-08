# OTelSpans

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for OTelSpans table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Applications |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/otelspans) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |

## Schema (56 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/otelspans)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| Attributes | dynamic | A collection of key-value pairs representing properties of the span. |
| ClientBrowser | string | Name and version of the web browser used by the client that triggered this span. |
| ClientCity | string | City where the client device is located. |
| ClientCountryOrRegion | string | Country or region where the client device is located. |
| ClientIP | string | IP address of the client device. |
| ClientModel | string | Model of the client device. |
| ClientOS | string | Operating system of the client device. |
| ClientStateOrProvince | string | State or province where the client device is located. |
| ClientType | string | Type of the client device. |
| Data | string | Normalized, high cardinality destination for this span (Ex. HTTP URL). |
| DependencyType | string | Normalized type of destination for this span, if it is representing an outgoing call (Ex. HTTP, SQL). |
| DroppedAttributesCount | int | The number of attributes that were discarded by the data source. |
| DroppedEventsCount | int | The number of events that were discarded by the data source. |
| DroppedLinksCount | int | The number of links that were discarded by the data source. |
| DurationMs | real | The time elapsed between the start and end of this span, in milliseconds. |
| EndTime | datetime | Date and time when the span ended. |
| EndUserId | string | Persistent string that uniquely represents an authenticated user of the service. |
| EnrichedName | string | An alternate name for this span that may be enriched with additional diagnostic information to make it more useful for aggregation and reporting purposes. |
| ItemCount | int | The number of spans represented by this record. This value is greater than 1 when sampling is in effect. |
| Kind | string | The kind of span that this record represents. Can be Unspecified, Internal, Server, Client, Producer, or Consumer. |
| Links | dynamic | References from this span to other spans. |
| Measurements | dynamic | Application-defined measurements associated with this span. |
| OperationName | string | Service-defined name of the overall operation. |
| ParentSpanId | string | The identifier of the parent of this span. |
| PerformanceBucket | string | A low cardinality binning of the duration of this span. |
| ResourceAttributes | dynamic | Resource attributes emitted by an OpenTelemetry source. |
| ResourceAttributesId | string | Id of the matching record in the OTelResources table that contains this span's resource attributes. |
| ResultCode | string | Normalized result code for the process this span represents (ex. HTTP status code). |
| RoleName | string | A human-readable name of the service emitting this span. This is a simplified service identifier combining ServiceNamespace and ServiceName. |
| ScopeName | string | The name of the instrumentation scope. |
| ScopeVersion | string | The version of the instrumentation scope. |
| SDKVersion | string | The name and version of the SDK, agent, or other source that emitted this record. |
| ServiceInstanceId | string | A unique identifier for the instance of the service. |
| ServiceName | string | Logical name of the service. |
| ServiceNamespace | string | A namespace for ServiceName. |
| ServiceVersion | string | Version information associated with the service. |
| SessionId | string | Service-defined session id. |
| Source | string | Friendly name of the direct source of this span, when known. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| SpanId | string | A unique identifier for the span. |
| StatusCode | string | The status of the span. Example values include OK and Error. |
| StatusMessage | string | Human-readable error message for the span. |
| Success | bool | Indicates whether the call completed successfully based on domain-specific criteria. |
| SyntheticSource | string | Upstream source of this span if it is well-known to be synthetic (ex. web crawlers). |
| Target | string | Normalized, low-cardinality destination for this span, if it is representing an outgoing call (Ex. HTTP host). |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | Date and time when the span began. |
| TraceId | string | The identifier of the trace this span belongs to. |
| TraceState | string | An opaque string representing vendor-specific trace information that was propagated with this span. |
| Type | string | The name of the table |
| UserAccountId | string | Service-defined account associated with the user. |
| UserId | string | Anonymous ID of a user accessing the service. |

---

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.operationalinsights/workspaces`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

