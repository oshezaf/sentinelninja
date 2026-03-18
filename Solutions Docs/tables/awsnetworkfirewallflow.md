# AWSNetworkFirewallFlow

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for AWSNetworkFirewallFlow table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | AWS |
| **Basic Logs Eligible** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Supports Transformations** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Ingestion API Supported** | ✗ No |
| **Lake-Only Ingestion** | ✓ Yes ([source](https://learn.microsoft.com/azure/sentinel/data-connectors-reference)) |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/awsnetworkfirewallflow) |

## Contents

- [Schema](#schema)
- [Solutions](#solutions)
- [Connectors](#connectors)

## Schema (32 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/awsnetworkfirewallflow)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| Ack | bool | Indicates whether the ACK flag is set in the TCP packet (true/false). |
| AppProto | string | The application layer protocol detected (e.g., HTTP, HTTPS, DNS). |
| AvailabilityZone | string | The AWS Availability Zone where the firewall instance is located. |
| DestIp | string | The destination IP address of the packet. |
| DestPort | string | The destination port to which the packet was sent. |
| Ecn | bool | Indicates whether the ECN flag is set in the TCP packet (true/false). |
| EventTimestamp | string | The epoch timestamp of when the event occurred. |
| EventType | string | The type of event recorded (e.g., flow, alert, drop, pass). |
| Fin | bool | Indicates whether the FIN flag is set in the TCP packet (true/false). |
| FirewallName | string | The name of the AWS Network Firewall instance generating the log. |
| FlowId | string | A unique identifier for the network flow related to this event. |
| NetFlowAge | string | The duration of the network flow in seconds. |
| NetFlowBytes | string | The total number of bytes transferred in the network flow. |
| NetFlowEnd | datetime | The timestamp when the network flow ended. |
| NetFlowMaxttl | string | The maximum Time-to-Live (TTL) observed in the network flow. |
| NetFlowMinttl | string | The minimum Time-to-Live (TTL) observed in the network flow. |
| NetFlowPkts | string | The number of packets in the network flow. |
| NetFlowStart | datetime | The timestamp when the network flow started. |
| Proto | string | The protocol used (e.g., TCP, UDP, ICMP). |
| Psh | bool | Indicates whether the PSH flag is set in the TCP packet (true/false). |
| Rst | bool | Indicates whether the RST flag is set in the TCP packet (true/false). |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| SrcIp | string | The source IP address of the packet that triggered the event. |
| SrcPort | string | The source port from which the packet originated. |
| Syn | bool | Indicates whether the SYN flag is set in the TCP packet (true/false). |
| TCPFlags | string | The TCP flags observed in the packet |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | The timestamp when the log entry was created in AWS Network Firewall. |
| Timestamp | datetime | The exact timestamp when the event was captured. |
| Type | string | The name of the table |

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

