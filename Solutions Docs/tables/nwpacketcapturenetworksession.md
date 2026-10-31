# NWPacketCaptureNetworkSession

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for NWPacketCaptureNetworkSession table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | - |
| **Basic Logs Eligible** | ✗ No ([source](https://learn.microsoft.com/azure/azure-monitor/reference/tables-features)) |
| **Supports Transformations** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/reference/tables-features)) |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/nwpacketcapturenetworksession) |
| **Azure Monitor Logs Ingestion API** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview) |

## Schema (38 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/nwpacketcapturenetworksession)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| DestinationIp | string | IP address of the flow responder. |
| DestinationIpBytes | long | Count of bytes in observed IP packets sent from DestinationIp, including IP headers and their contents. |
| DestinationPackets | long | Count of observed packets sent from DestinationIp. |
| DestinationPayloadBytes | long | Count of data bytes sent from DestinationIp, excluding network and transport headers for complete TCP captures. |
| DestinationPort | int | Port number at DestinationIp for TCP or UDP traffic. |
| DetectedProtocols | dynamic | List of application protocols identified in the traffic. |
| DurationMs | real | Observed connection duration in milliseconds. Excludes the final ACK of a normal TCP close. |
| EventTs | datetime | UTC time of the first observed packet in the flow. |
| FlowId | string | Flow identifier used to correlate records across protocol tables within the same capture. |
| IcmpCode | int | ICMP or ICMPv6 message code. |
| IcmpType | int | ICMP or ICMPv6 message type. |
| IpVersion | string | IP address version used by the endpoints. |
| PacketCaptureResourceId | string | Azure resource ID of the packet capture that produced this record. |
| PacketCaptureStorageUrl | string | Storage URL of the packet capture file that produced this record. |
| PayloadObserved | bool | Whether reliable TCP or UDP evidence indicates transport payload is present. |
| SessionStateCode | string | Short code representing the observed connection status. For TCP, TcpSessionState provides a readable description. |
| SourceIp | string | IP address of the flow originator. |
| SourceIpBytes | long | Count of bytes in observed IP packets sent from SourceIp, including IP headers and their contents. |
| SourcePackets | long | Count of observed packets sent from SourceIp. |
| SourcePayloadBytes | long | Count of data bytes sent from SourceIp, excluding network and transport headers for complete TCP captures. |
| SourcePort | int | Port number at SourceIp for TCP or UDP traffic. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| TcpGracefulCloseObserved | bool | Whether a graceful TCP close was observed. |
| TcpHandshakeComplete | bool | Whether the captured traffic confirms a completed TCP handshake. |
| TcpMidstreamStart | bool | Whether capture of this TCP connection began after the connection started. |
| TcpMissingBytes | long | Count of TCP data bytes identified as missing during analysis. |
| TcpPartialCapture | bool | Whether the TCP capture starts midstream or has missing content. |
| TcpResetObserved | bool | Whether a TCP reset was observed, indicating connection rejection or abrupt termination. |
| TcpSessionState | string | Description of the observed TCP connection status. |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | UTC time when the service ingested the record. |
| TransportHistory | string | Encoded sequence of observed transport events and their direction. |
| TransportProtocol | string | Transport protocol used by the flow. |
| Type | string | The name of the table |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [NWPacketCaptureNetworkSession Schema Reference (Azure Monitor)](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/nwpacketcapturenetworksession)

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

