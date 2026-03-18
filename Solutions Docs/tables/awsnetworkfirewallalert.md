# AWSNetworkFirewallAlert

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for AWSNetworkFirewallAlert table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | AWS |
| **Basic Logs Eligible** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Supports Transformations** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/awsnetworkfirewallalert) |

## Contents

- [Schema](#schema)
- [Solutions](#solutions)
- [Connectors](#connectors)

## Schema (30 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/awsnetworkfirewallalert)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| AlertAction | string | The action taken when an alert was triggered (e.g., allowed, dropped, rejected). |
| AppProto | string | The application layer protocol detected. |
| AvailabilityZone | string | The AWS Availability Zone where the firewall instance is located. |
| Category | string | The category of the detected threat or network activity. |
| DestIp | string | The destination IP address of the packet. |
| DestPort | string | The destination port to which the packet was sent. |
| Direction | string | The direction of the traffic (e.g., inbound, outbound). |
| EventTimestamp | datetime | The epoch timestamp of when the event occurred. |
| EventType | string | The type of event recorded (e.g., alert, flow, drop, pass). |
| FirewallName | string | The name of the AWS Network Firewall instance generating the log. |
| FlowId | string | A unique identifier for the network flow related to this event. |
| PktSrc | string | The source of the packet (e.g., internal, external, firewall rule). |
| Proto | string | The protocol used (e.g., TCP, UDP, ICMP). |
| Rev | string | The revision number of the matched Suricata rule. |
| Severity | string | The severity level of the event, typically based on Suricata rule classifications. |
| Signature | string | The name or description of the Suricata rule that triggered the alert. |
| SignatureId | string | The unique identifier of the Suricata rule that matched the event. |
| Sni | string | The Server Name Indication (SNI) from TLS traffic. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| SrcIp | string | The source port from which the packet originated. |
| SrcPort | string | The source port from which the packet originated. |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | The timestamp when the log entry was created in AWS Network Firewall. |
| Timestamp | datetime | The exact timestamp when the event was captured. |
| TxId | string | The transaction ID associated with the specific network flow. |
| Type | string | The name of the table |
| VerdictAction | string | The final decision made by the firewall (e.g., pass, drop, alert). |
| Version | string | The version of the log schema or Suricata rule format used. |

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

