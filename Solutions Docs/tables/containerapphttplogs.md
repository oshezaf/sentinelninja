# ContainerAppHTTPLogs

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for ContainerAppHTTPLogs table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Audit, Azure Resources |
| **Basic Logs Eligible** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/containerapphttplogs) |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Resource Types](#resource-types)

## Schema (33 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/containerapphttplogs)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable is <code>false</code> ingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| Authority | string | The Host or :authority header of the HTTP request. |
| BytesReceived | long | Number of bytes received in the request body. |
| BytesSent | long | Number of bytes sent in the response body. |
| ConnectionId | string | The unique connection identifier assigned to this request by the ingress. |
| ContainerAppName | string | The name of the Container App generating this log. |
| EnvironmentName | string | The name of the Container App Environment generating this log. |
| EnvoyContainerId | string | The container ID of the ingress envoy pod that handled this request. |
| EnvoyPodName | string | The name of the ingress envoy pod that handled this request. |
| Location | string | The location of the Container App generating this log. |
| Method | string | The HTTP method of the request. |
| OperationName | string | The name of the operation generating this log. |
| Path | string | The request path sent to the Container App. May contain query string parameters that include sensitive values such as authentication tokens or API keys. |
| Protocol | string | The HTTP protocol version used for the request. |
| ReplicaName | string | The name of the Container App replica generating this log. |
| RequestDuration | long | The total time, in milliseconds, taken to process the request. |
| RequestId | string | The unique identifier assigned to this request by the ingress. May be a value supplied by an upstream client via the x-request-id header. |
| ResponseCodeDetails | string | Additional context for the response code, such as the reason the request was completed or terminated. |
| ResponseFlags | string | Response flags describing how the request was handled by the ingress. |
| RevisionName | string | The name of the revision generating this log. |
| SourceSystem | string | The type of agent the event was collected by. For example, <code>OpsManager</code> for Windows agent, either direct connect or Operations Manager, <code>Linux</code> for all Linux agents, or <code>Azure</code> for Azure Diagnostics |
| StartTime | datetime | Timestamp (UTC) when the ingress started processing the request. |
| StatusCode | int | The HTTP response status code returned to the client. |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | Time (UTC) when the log was generated. |
| Type | string | The name of the table |
| UpstreamHost | string | Address of the upstream container endpoint that served this request. |
| UpstreamRequestAttemptCount | int | Number of upstream attempts made to fulfill this request. |
| UserAgent | string | The User-Agent header from the client. |
| XForwardedFor | string | The X-Forwarded-For header indicating the client IP chain. Contains end-user client IP addresses; treat as personally identifiable information. |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [ContainerAppHTTPLogs Schema Reference (Azure Monitor)](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/containerapphttplogs)

---

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.app/managedenvironments`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

