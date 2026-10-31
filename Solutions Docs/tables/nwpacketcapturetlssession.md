# NWPacketCaptureTlsSession

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for NWPacketCaptureTlsSession table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | - |
| **Basic Logs Eligible** | ✗ No ([source](https://learn.microsoft.com/azure/azure-monitor/reference/tables-features)) |
| **Supports Transformations** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/reference/tables-features)) |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/nwpacketcapturetlssession) |
| **Azure Monitor Logs Ingestion API** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview) |

## Schema (31 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/nwpacketcapturetlssession)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| Alpn | string | Application protocol selected by the server through Application-Layer Protocol Negotiation. |
| CipherSuite | string | Cipher suite selected by the server. |
| ClientCertificateIssuer | string | Issuer name of the client leaf certificate. |
| ClientCertificateSubject | string | Subject name of the client leaf certificate. |
| DestinationIp | string | IP address of the flow responder, not necessarily the TLS server. |
| DestinationPort | int | Port number at DestinationIp. |
| EventTs | datetime | UTC time when TLS traffic for the flow was first detected. |
| FlowId | string | Flow identifier used to correlate records across protocol tables within the same capture. |
| HandshakeEstablished | bool | Whether successful handshake completion was observed. |
| IpVersion | string | IP address version used by the endpoints. |
| KeyExchangeGroup | string | Named key exchange group selected by the server. |
| LastAlert | string | Last observed TLS alert, including error or normal shutdown alerts. |
| PacketCaptureResourceId | string | Azure resource ID of the packet capture that produced this record. |
| PacketCaptureStorageUrl | string | Storage URL of the packet capture file that produced this record. |
| RequestedServerName | string | First hostname observed in the client's Server Name Indication extension. |
| RequestedServerNameMatchesCertificate | bool | Whether the requested hostname matches the server leaf certificate. A match does not establish certificate trust. |
| ServerCertificateIssuer | string | Issuer name of the server leaf certificate. |
| ServerCertificateSubject | string | Subject name of the server leaf certificate. |
| SessionResumed | bool | Whether the TLS session was resumed. Null when undetermined. |
| SourceIp | string | IP address of the flow originator, not necessarily the TLS client. |
| SourcePort | int | Port number at SourceIp. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | UTC time when the service ingested the record. |
| TlsHistory | string | Encoded sequence of observed TLS messages and their direction. |
| TlsVersion | string | TLS version selected by the server. |
| Type | string | The name of the table |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [NWPacketCaptureTlsSession Schema Reference (Azure Monitor)](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/nwpacketcapturetlssession)

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

