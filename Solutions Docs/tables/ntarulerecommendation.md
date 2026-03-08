# NTARuleRecommendation

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for NTARuleRecommendation table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Network |
| **Basic Logs Eligible** | ✗ No |
| **Supports Transformations** | ✗ No |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/ntarulerecommendation) |

## Schema (30 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/ntarulerecommendation)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| AdditionalProperties | string | Placeholder for additional properties related to the recommended rule. |
| DestPortsRanges | string | Comma-separated list of destination port ranges on target resource id. |
| DestPublicIpCidrs | string | Public destination IPs in CIDR format for outbound flows. |
| DestServiceTagsList | string | Service tags associated with destination traffic for outbound flows. |
| DestSubscriptionId | string | Subscription ID of the target resource id receiving the traffic. |
| EndTime | datetime | End time of the flow observation window. |
| IpRegionDetails | string | Region information for the involved IP addresses. |
| IpUrls | string | List of Urls for the malicious Ips. |
| L4Protocol | string | Layer 4 protocol used in the traffic. Possible values are TCP, UDP. |
| PortCategory | string | Indicates the classification of the destination port based on well-known or commonly used port ranges. |
| RecommendedAction | string | Recommended action on the recommended rule. Possible values are Allow, Block, Advisory. |
| RecommendedRuleName | string | The name of the rule being recommended. |
| RuleScope | string | Scope within which the rule applies. Possible values are SubscriptionId, VirtualNetwork. |
| SchemaVersion | string | Version of the schema used for this record. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| SrcPublicIpCidrs | string | Public source IPs in CIDR format for inbound flows. |
| SrcServiceTagsList | string | Service tags associated with source traffic for inbound flows. |
| SrcSubscriptionId | string | Subscription ID of the target resource id sending the traffic. |
| StartTime | datetime | Start time of the flow observation window. |
| SummarizationType | string | Indicates how the flows were summarized by time. Possible values are Hourly, Daily. |
| TargetResourceId | string | The resource targeted by the rule. |
| TargetResourceIdsList | string | List of all targeted resource IDs covered by the rule. |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | The time when the data gets ingested into the Log Analytics Workspace. |
| TotalFlowCount | int | Total number of flows observed for this rule. |
| Type | string | The name of the table |
| UnecryptedFlowDetails | string | For unencrypted flow, it specifies the encryption level. Possible values are Unencrypted, Unsupported hardware, Software not ready, Drop due to no encryption, Discovery not supported, Destination on same host, Fall back to no encryption. |
| VirtualNetworkResourceId | string | Virtual network name targeted by rule. |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

