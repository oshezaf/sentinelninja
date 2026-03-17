# ATCExpressRouteCircuitIpfix

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for ATCExpressRouteCircuitIpfix table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Azure Resources |
| **Basic Logs Eligible** | ✗ No ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Supports Transformations** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/atcexpressroutecircuitipfix) |

## Schema (42 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/atcexpressroutecircuitipfix)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| ATCRegion | string | Azure Traffic Collector (ATC) deployment region. |
| ATCResourceId | string | Azure resource ID of Azure Traffic Collector (ATC). |
| BgpNextHop | string | Border Gateway Protocol (BGP) next hop as defined in the routing table. |
| DestinationIp | string | Destination IP address. |
| DestinationPort | int | TCP destination port. |
| Dot1qCustomerVlanId | int | Dot1q Customer VlanId. |
| Dot1qVlanId | int | Dot1q VlanId. |
| DstAsn | int | Destination Autonomous System Number (ASN). |
| DstMask | int | Mask of destination subnet. |
| DstSubnet | string | Destination subnet of destination IP. |
| ExRCircuitDirectPortId | string | Azure resource ID of Express Route Circuit's direct port. |
| ExRCircuitId | string | Azure resource ID of Express Route Circuit. |
| ExRCircuitServiceKey | string | Service key of Express Route Circuit. |
| FlowRecordTime | datetime | Timestamp (UTC) when Express Route Circuit emitted this flow record. |
| Flowsequence | long | Flow sequence of this flow. |
| IcmpType | int | Protocol type as specified in IP header. |
| IpClassOfService | int | IP Class of service as specified in IP header. |
| IpProtocolIdentifier | int | Protocol type as specified in IP header. |
| IpVerCode | int | IP version as defined in the IP header. |
| MaxTtl | int | Maximum time to live (TTL) as defined in the IP header. |
| MinTtl | int | Minimum time to live (TTL) as defined in the IP header. |
| NextHop | string | Next hop as per forwarding table. |
| NumberOfBytes | long | Total number of bytes of packets captured in this flow. |
| NumberOfPackets | long | Total number of packets captured in this flow. |
| OperationName | string | The specific Azure Traffic Collector (ATC) operation that emitted this flow record. |
| PeeringType | string | Express Route Circuit peering type. |
| Protocol | int | Protocol type as specified in IP header. |
| SchemaVersion | string | Flow record schema version. |
| SourceIp | string | Source IP address. |
| SourcePort | int | TCP source port. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| SrcAsn | int | Source Autonomous System Number (ASN). |
| SrcMask | int | Mask of source subnet. |
| SrcSubnet | string | Source subnet of source IP. |
| TcpFlag | int | TCP flag as defined in the TCP header. |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | Timestamp (UTC) when the Azure Traffic Collector (ATC) emitted this flow record. |
| Type | string | The name of the table |

---

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.networkfunction/azuretrafficcollectors`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

