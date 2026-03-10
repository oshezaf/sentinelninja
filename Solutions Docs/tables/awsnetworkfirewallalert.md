# AWSNetworkFirewallAlert

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for AWSNetworkFirewallAlert table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | AWS |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/awsnetworkfirewallalert) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |

## Schema (34 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/awsnetworkfirewallalert) · [Data Collection Rule definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Amazon%20Web%20Services%20NetworkFirewall/Data%20Connectors/AWSNetworkFirewallLogs_CCP/AWSNetworkFirewallLog_DCR.json)

| Column Name | Type | Description | Source |
|:------------|:-----|:------------|:-------|
| _BilledSize | real | The record size in bytes | Azure Monitor docs |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account | Azure Monitor docs |
| AlertAction | string | The action taken when an alert was triggered (e.g., allowed, dropped, rejected). | Azure Monitor docs |
| AppProto | string | The application layer protocol detected. | Azure Monitor docs |
| availability_zone | string |  | DCR |
| AvailabilityZone | string | The AWS Availability Zone where the firewall instance is located. | Azure Monitor docs |
| Category | string | The category of the detected threat or network activity. | Azure Monitor docs |
| DestIp | string | The destination IP address of the packet. | Azure Monitor docs |
| DestPort | string | The destination port to which the packet was sent. | Azure Monitor docs |
| Direction | string | The direction of the traffic (e.g., inbound, outbound). | Azure Monitor docs |
| event | dynamic |  | DCR |
| event_timestamp | string |  | DCR |
| EventTimestamp | datetime | The epoch timestamp of when the event occurred. | Azure Monitor docs |
| EventType | string | The type of event recorded (e.g., alert, flow, drop, pass). | Azure Monitor docs |
| firewall_name | string |  | DCR |
| FirewallName | string | The name of the AWS Network Firewall instance generating the log. | Azure Monitor docs |
| FlowId | string | A unique identifier for the network flow related to this event. | Azure Monitor docs |
| PktSrc | string | The source of the packet (e.g., internal, external, firewall rule). | Azure Monitor docs |
| Proto | string | The protocol used (e.g., TCP, UDP, ICMP). | Azure Monitor docs |
| Rev | string | The revision number of the matched Suricata rule. | Azure Monitor docs |
| Severity | string | The severity level of the event, typically based on Suricata rule classifications. | Azure Monitor docs |
| Signature | string | The name or description of the Suricata rule that triggered the alert. | Azure Monitor docs |
| SignatureId | string | The unique identifier of the Suricata rule that matched the event. | Azure Monitor docs |
| Sni | string | The Server Name Indication (SNI) from TLS traffic. | Azure Monitor docs |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics | Azure Monitor docs |
| SrcIp | string | The source port from which the packet originated. | Azure Monitor docs |
| SrcPort | string | The source port from which the packet originated. | Azure Monitor docs |
| TenantId | string | The Log Analytics workspace ID | Azure Monitor docs |
| TimeGenerated | datetime | The timestamp when the log entry was created in AWS Network Firewall. | Azure Monitor docs |
| Timestamp | datetime | The exact timestamp when the event was captured. | Azure Monitor docs |
| TxId | string | The transaction ID associated with the specific network flow. | Azure Monitor docs |
| Type | string | The name of the table | Azure Monitor docs |
| VerdictAction | string | The final decision made by the firewall (e.g., pass, drop, alert). | Azure Monitor docs |
| Version | string | The version of the log schema or Suricata rule format used. | Azure Monitor docs |

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

