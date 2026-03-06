# AWSNetworkFirewallTls

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for AWSNetworkFirewallTls table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | AWS |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/awsnetworkfirewalltls) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |

## Schema (22 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/awsnetworkfirewalltls) · [Data Collection Rule definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Amazon%20Web%20Services%20NetworkFirewall/Data%20Connectors/AWSNetworkFirewallLogs_CCP/AWSNetworkFirewallLog_DCR.json)

| Column Name | Type | Description | Source |
|:------------|:-----|:------------|:-------|
| _BilledSize | real | The record size in bytes | Azure Monitor docs |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account | Azure Monitor docs |
| Action | string | The action taken by the firewall (e.g., allowed, dropped, inspected). | Azure Monitor docs |
| availability_zone | string |  | DCR |
| AvailabilityZone | string | The AWS Availability Zone where the firewall instance is located. | Azure Monitor docs |
| DestIp | string | The destination IP address of the packet. | Azure Monitor docs |
| DestPort | string | The destination port to which the packet was sent. | Azure Monitor docs |
| ErrorMessage | string | Any error message associated with the event, if applicable. | Azure Monitor docs |
| event | dynamic |  | DCR |
| event_timestamp | string |  | DCR |
| EventTimestamp | datetime | The epoch timestamp of when the event occurred. | Azure Monitor docs |
| firewall_name | string |  | DCR |
| FirewallName | string | The name of the AWS Network Firewall instance generating the log. | Azure Monitor docs |
| LeafCertificateFingerprint | string | The SHA-256 fingerprint of the leaf certificate observed in the TLS handshake. | Azure Monitor docs |
| Sni | string | The Server Name Indication (SNI) from TLS traffic. | Azure Monitor docs |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics | Azure Monitor docs |
| SrcIp | string | The source IP address of the packet that triggered the event. | Azure Monitor docs |
| SrcPort | string | The source port from which the packet originated. | Azure Monitor docs |
| Status | string | The status of the TLS inspection event (e.g., success, failure). | Azure Monitor docs |
| TenantId | string | The Log Analytics workspace ID | Azure Monitor docs |
| TimeGenerated | datetime | The timestamp when the log entry was created in AWS Network Firewall. | Azure Monitor docs |
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

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

