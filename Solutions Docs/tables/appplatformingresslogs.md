# AppPlatformIngressLogs

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for AppPlatformIngressLogs table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Azure Resources |
| **Basic Logs Eligible** | ✗ No |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/appplatformingresslogs) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |

## Schema (28 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/appplatformingresslogs)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| BodyBytesSent | string | Number of bytes sent to a client, not counting the response header |
| Host | string | The host name of the log |
| HttpReferer | string | Value of the referer header |
| HttpUserAgent | string | Value of user-agent header |
| OperationName | string | The name of the operation represented by this event |
| ProxyAlternativeUpstreamName | string | Name of the alternative upstream server. The format is upstream-<namespace>-<service name>-<service port> |
| ProxyUpstreamName | string | Name of the upstream server. The format is upstream-<namespace>-<service name>-<service port> |
| RemoteAddr | string | The source IP address of the client |
| RemoteUser | string | User name supplied with the basic authentication |
| ReqId | string | The randomly generated ID of the request |
| Request | string | Full original request line |
| RequestHeaders | string | Request headers end with 'id' or 'ID' |
| RequestLength | string | Request length in bytes (including request line, header, and request body) |
| RequestTime | real | Time in seconds with millisecond resolution elapsed since the first bytes were read from the client |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| Status | string | Response status |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | The timestamp (UTC) when the log is collected by Azure Spring Cloud |
| TimeLocal | string | Local time in the common log format |
| Type | string | The name of the table |
| UpstreamAddr | string | The IP address and port (or the path to the domain socket) of the upstream server. If several servers were contacted during request processing, their addresses are separated by commas |
| UpstreamResponseLength | string | The length in bytes of the response obtained from the upstream server |
| UpstreamResponseTime | string | Time spent on receiving the response from the upstream server, the time is kept in seconds with millisecond resolution |
| UpstreamStatus | string | Status code of the response obtained from the upstream server |

---

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.appplatform/spring`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

