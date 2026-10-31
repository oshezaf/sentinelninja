# NWPacketCaptureDnsQuery

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for NWPacketCaptureDnsQuery table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | - |
| **Basic Logs Eligible** | ✗ No ([source](https://learn.microsoft.com/azure/azure-monitor/reference/tables-features)) |
| **Supports Transformations** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/reference/tables-features)) |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/nwpacketcapturednsquery) |
| **Azure Monitor Logs Ingestion API** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview) |

## Schema (30 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/nwpacketcapturednsquery)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| Answers | dynamic | List of DNS answers, each containing a value and ttl_seconds specifying the time to live in seconds. |
| AuthoritativeAnswer | bool | Whether the DNS response has the authoritative answer flag set. |
| EventTs | datetime | UTC time of the first observed DNS message for this query or response. |
| FlowId | string | Flow identifier used to correlate records across protocol tables within the same capture. |
| IpVersion | string | IP address version used by the endpoints. |
| PacketCaptureResourceId | string | Azure resource ID of the packet capture that produced this record. |
| PacketCaptureStorageUrl | string | Storage URL of the packet capture file that produced this record. |
| QueryClass | string | DNS query class. |
| QueryDestinationIp | string | IP address on the receiving side of the DNS query. |
| QueryDestinationPort | int | Port number on the receiving side of the DNS query. |
| QueryName | string | Name requested in the DNS query. |
| QuerySourceIp | string | IP address on the sending side of the DNS query. |
| QuerySourcePort | int | Port number on the sending side of the DNS query. |
| QueryType | string | DNS record type requested. |
| RecursionAvailable | bool | Whether the DNS response indicates recursive resolution is available. |
| RecursionDesired | bool | Whether the DNS query requests recursive resolution. |
| ResponseCode | string | Response code reported by the DNS server. |
| ResponseSeen | bool | Whether a DNS response code was observed for the lookup. |
| ResponseTimeMs | real | Elapsed time in milliseconds between the observed DNS query and response. |
| ResponseTruncated | bool | Whether the DNS response has the truncation flag set. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | UTC time when the service ingested the record. |
| TransactionId | int | DNS transaction identifier. It can be reused across queries. |
| TransportProtocol | string | Transport protocol carrying the DNS messages. |
| Type | string | The name of the table |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [NWPacketCaptureDnsQuery Schema Reference (Azure Monitor)](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/nwpacketcapturednsquery)

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

