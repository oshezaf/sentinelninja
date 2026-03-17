# AWSNLBAccessLogs

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for AWSNLBAccessLogs table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | AWS |
| **Basic Logs Eligible** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/awsnlbaccesslogs) |

## Schema (27 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/awsnlbaccesslogs)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| ALPNBEProtocol | string | Application-layer protocol negotiated on the backend. |
| ALPNClientPrefList | string | List of application protocols preferred by the client during ALPN. |
| ALPNFEProtocol | string | Application-layer protocol negotiated on the frontend (e.g., HTTP/1.1, h2). |
| ChosenCertArn | string | ARN of the TLS certificate selected during the handshake. |
| ChosenCertSerial | string | Serial number of the TLS certificate used in the connection. |
| ClientIPPort | string | IP address and port of the client initiating the request. |
| ConnectionTime | string | Duration of the connection in milliseconds. |
| DomainName | string | Domain name requested by the client via SNI (Server Name Indication). |
| IncomingTLSAlert | string | Details of any incoming TLS alert message. |
| Listener | string | Listener configuration used for the connection (protocol and port). |
| Nlb | string | Identifier or name of the Network Load Balancer. |
| NLBType | string | Type of Network Load Balancer (e.g., 'gateway', 'application'). |
| ReceivedBytes | string | Number of bytes received from the client. |
| SentBytes | string | Number of bytes sent to the client. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| TargetIPPort | string | IP address and port of the target receiving the request. |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | Timestamp when the log entry was generated. |
| TLSCipher | string | Cipher suite used for the TLS connection. |
| TLSConnectionCreationTime | string | Time taken to establish the complete TLS connection, including handshake. |
| TlsHandshakeTime | string | Time taken to complete the TLS handshake in milliseconds. |
| TLSNamedGroup | string | Elliptic curve or Diffie-Hellman group used in the handshake. |
| TLSProtocolVersion | string | Version of the TLS protocol used (e.g., TLS 1.2, TLS 1.3). |
| Type | string | The name of the table |
| Version | string | Version of the NLB log format. |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

