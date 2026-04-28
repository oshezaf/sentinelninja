# SentinelAlibabaCloudVPCFlowLogs

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for SentinelAlibabaCloudVPCFlowLogs table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Security |
| **Basic Logs Eligible** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Supports Transformations** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Ingestion API Supported** | ✓ Yes |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/sentinelalibabacloudvpcflowlogs) |
| **Azure Monitor Logs Ingestion API** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview) |

## Schema (32 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/sentinelalibabacloudvpcflowlogs)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| AccountId | string | The Alibaba Cloud account ID |
| Action | string | Indicates whether the traffic was permitted or denied by a security group or network ACL: ACCEPT (traffic was permitted) or REJECT (traffic was denied) |
| Bytes | string | The number of bytes |
| Direction | string | The direction of the traffic: in (Inbound traffic to the ENI) or out (Outbound traffic from the ENI) |
| DstAddr | string | The destination IP address |
| DstPort | string | The destination port |
| DstType | string | The CIDR block information of the destination IP address after enabling the inter-domain analysis feature. This field is included only if you enable the inter-domain analysis feature. |
| End | string | For a persistent connection, this is the end time of the capture window. For a short-lived connection, this is the time when the connection was closed. The value is a Unix timestamp |
| EniId | string | The ID of the ENI |
| LogProject | string | The name of the log project where the logs are stored. |
| LogRegion | string | The region where the log store is located. |
| LogStatus | string | The logging status of the flow log: OK (Data is recorded normally), NODATA (No network traffic), SKIPDATA (Some flow log records are skipped) |
| LogStore | string | The name of the log store where the logs are stored. |
| Packets | string | The number of packets |
| Protocol | string | The Internet Assigned Numbers Authority (IANA) protocol number of the traffic. Common protocol numbers include 1 for ICMP, 6 for TCP, and 17 for UDP |
| Region | string | The region where the VPC resides, Not included in all records |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| SrcAddr | string | The source IP address |
| SrcPort | string | The source port |
| SrcType | string | The CIDR block information of the source IP address after enabling the inter-domain analysis feature. This field is included only if you enable the inter-domain analysis feature. |
| Start | string | The time when the first packet was received in the capture window. The value is a Unix timestamp |
| TcpFlags | string | The TCP flag, represented in decimal, which reflects a combination of flags from the TCP protocol, such as SYN, ACK, and FIN |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | The time when the log entry was generated |
| TrafficPath | string | The scenario where the traffic occurs (0-22): 0=Other scenarios, 1=Traffic through other resources in same VPC, 2=Private traffic to ECS instance in same VPC, etc. |
| Type | string | The name of the table |
| Version | string | The version of the flow log. The version of all current flow log entries is 1 |
| VmId | string | The ID of the ECS instance to which the ENI is attached |
| VpcId | string | The ID of the VPC to which the ENI belongs |
| VswitchId | string | The ID of the vSwitch to which the elastic network interface (ENI) is attached |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

