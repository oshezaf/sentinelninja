# NWPacketCaptureHttpTransaction

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for NWPacketCaptureHttpTransaction table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | - |
| **Basic Logs Eligible** | ✗ No ([source](https://learn.microsoft.com/azure/azure-monitor/reference/tables-features)) |
| **Supports Transformations** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/reference/tables-features)) |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/nwpacketcapturehttptransaction) |
| **Azure Monitor Logs Ingestion API** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview) |

## Schema (35 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/nwpacketcapturehttptransaction)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| EventTs | datetime | UTC time of the first observed HTTP evidence for this transaction. |
| FlowId | string | Flow identifier used to correlate records across protocol tables within the same capture. |
| HttpVersion | string | HTTP protocol version reported in the response. Null when only a request was observed. |
| InformationalStatusCode | long | Status code of the last observed informational HTTP response. |
| InformationalStatusReason | string | Reason phrase of the last observed informational HTTP response. |
| IpVersion | string | IP address version used by the endpoints. |
| Method | string | HTTP request method. |
| PacketCaptureResourceId | string | Azure resource ID of the packet capture that produced this record. |
| PacketCaptureStorageUrl | string | Storage URL of the packet capture file that produced this record. |
| Referrer | string | HTTP Referer header value. |
| RequestBodyBytes | long | Count of uncompressed request-body bytes analyzed, excluding headers. |
| RequestDestinationIp | string | Destination IP address in the HTTP request direction. May identify a proxy. |
| RequestDestinationPort | int | Port number on the receiving side of the HTTP request. |
| RequestHost | string | HTTP Host header value. |
| RequestMimeTypes | dynamic | List of MIME types identified in request content. |
| RequestOrigin | string | HTTP Origin header value. |
| RequestSeen | bool | Whether HTTP request evidence was observed. |
| RequestSourceIp | string | IP address on the sending side of the HTTP request. |
| RequestSourcePort | int | Port number on the sending side of the HTTP request. |
| RequestTarget | string | Decoded HTTP request target. |
| ResponseBodyBytes | long | Count of uncompressed response-body bytes analyzed, excluding headers. |
| ResponseMimeTypes | dynamic | List of MIME types identified in response content. |
| ResponseSeen | bool | Whether HTTP response evidence was observed. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| StatusCode | long | Status code of the observed final HTTP response. |
| StatusReason | string | Reason phrase of the observed final HTTP response. |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | UTC time when the service ingested the record. |
| TransactionSequence | long | Transaction order within the flow identified by FlowId. |
| Type | string | The name of the table |
| UserAgent | string | HTTP User-Agent header value. |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [NWPacketCaptureHttpTransaction Schema Reference (Azure Monitor)](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/nwpacketcapturehttptransaction)

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

