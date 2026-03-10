# AWSNetworkFirewallFlow

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for AWSNetworkFirewallFlow table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | AWS |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Lake-Only Ingestion** | ✓ Yes |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/awsnetworkfirewallflow) |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |

## Schema (36 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/awsnetworkfirewallflow) · [Data Collection Rule definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Amazon%20Web%20Services%20NetworkFirewall/Data%20Connectors/AWSNetworkFirewallLogs_CCP/AWSNetworkFirewallLog_DCR.json)

| Column Name | Type | Description | Source |
|:------------|:-----|:------------|:-------|
| _BilledSize | real | The record size in bytes | Azure Monitor docs |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account | Azure Monitor docs |
| Ack | bool | Indicates whether the ACK flag is set in the TCP packet (true/false). | Azure Monitor docs |
| AppProto | string | The application layer protocol detected (e.g., HTTP, HTTPS, DNS). | Azure Monitor docs |
| availability_zone | string |  | DCR |
| AvailabilityZone | string | The AWS Availability Zone where the firewall instance is located. | Azure Monitor docs |
| DestIp | string | The destination IP address of the packet. | Azure Monitor docs |
| DestPort | string | The destination port to which the packet was sent. | Azure Monitor docs |
| Ecn | bool | Indicates whether the ECN flag is set in the TCP packet (true/false). | Azure Monitor docs |
| event | dynamic |  | DCR |
| event_timestamp | string |  | DCR |
| EventTimestamp | string | The epoch timestamp of when the event occurred. | Azure Monitor docs |
| EventType | string | The type of event recorded (e.g., flow, alert, drop, pass). | Azure Monitor docs |
| Fin | bool | Indicates whether the FIN flag is set in the TCP packet (true/false). | Azure Monitor docs |
| firewall_name | string |  | DCR |
| FirewallName | string | The name of the AWS Network Firewall instance generating the log. | Azure Monitor docs |
| FlowId | string | A unique identifier for the network flow related to this event. | Azure Monitor docs |
| NetFlowAge | string | The duration of the network flow in seconds. | Azure Monitor docs |
| NetFlowBytes | string | The total number of bytes transferred in the network flow. | Azure Monitor docs |
| NetFlowEnd | datetime | The timestamp when the network flow ended. | Azure Monitor docs |
| NetFlowMaxttl | string | The maximum Time-to-Live (TTL) observed in the network flow. | Azure Monitor docs |
| NetFlowMinttl | string | The minimum Time-to-Live (TTL) observed in the network flow. | Azure Monitor docs |
| NetFlowPkts | string | The number of packets in the network flow. | Azure Monitor docs |
| NetFlowStart | datetime | The timestamp when the network flow started. | Azure Monitor docs |
| Proto | string | The protocol used (e.g., TCP, UDP, ICMP). | Azure Monitor docs |
| Psh | bool | Indicates whether the PSH flag is set in the TCP packet (true/false). | Azure Monitor docs |
| Rst | bool | Indicates whether the RST flag is set in the TCP packet (true/false). | Azure Monitor docs |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics | Azure Monitor docs |
| SrcIp | string | The source IP address of the packet that triggered the event. | Azure Monitor docs |
| SrcPort | string | The source port from which the packet originated. | Azure Monitor docs |
| Syn | bool | Indicates whether the SYN flag is set in the TCP packet (true/false). | Azure Monitor docs |
| TCPFlags | string | The TCP flags observed in the packet | Azure Monitor docs |
| TenantId | string | The Log Analytics workspace ID | Azure Monitor docs |
| TimeGenerated | datetime | The timestamp when the log entry was created in AWS Network Firewall. | Azure Monitor docs |
| Timestamp | datetime | The exact timestamp when the event was captured. | Azure Monitor docs |
| Type | string | The name of the table | Azure Monitor docs |

## Solutions (1)

This table is used by the following solutions:

- [Amazon Web Services NetworkFirewall](../solutions/amazon-web-services-networkfirewall.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Amazon Web Services NetworkFirewall (via Codeless Connector Framework)](../connectors/awsnetworkfirewallccpdefinition.md) |  |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

