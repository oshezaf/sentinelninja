# DNSQueryLogs

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for DNSQueryLogs table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Azure Resources |
| **Basic Logs Eligible** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Supports Transformations** | ✓ Yes ([source](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support)) |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/dnsquerylogs) |

## Schema (32 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/dnsquerylogs)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| AdditionalRecords | dynamic | Array of additional resource records. |
| Answer | dynamic | Array of answers for DNS query. |
| Authority | dynamic | Array of authority DNS servers for DNS query. |
| DestinationIpAddress | string | The IP address of the instance that the query was sent to (outbound endpoints). |
| DestinationPort | int | The port on the instance that the query was sent to. |
| DnsForwardingRulesetDomain | string | The domain which was hit in the DNS Forwarding ruleset. |
| DnsForwardingRulesetId | string | The ID of the DNS forwarding ruleset which was hit. |
| OperationName | string | Name of the operation. |
| PrivateResolverEndpointId | string | The ID of the resolver endpoint. Can be inbound, or outbound. |
| QueryClass | string | Specifies the protocol family. For example, IN for Internet. |
| QueryName | string | The domain name (contoso.com) or subdomain name (www.contoso.com) that was specified in the query. |
| QueryResponseTime | int | Response time for resolution of DNS query. |
| QueryType | string | Either the DNS record type that was specified in the request, or ANY. |
| Region | string | The region where the virtual network was created in. |
| ResolutionPath | string | Resolution path can be private zones, ruleset, or public DNS resolution. |
| ResolverPolicyDomainListId | string | The ID of the domain list which was hit. |
| ResolverPolicyId | string | The ID of the security policy which filtered the query. |
| ResolverPolicyRuleAction | string | Result after evaluation of the policy rules. |
| ResponseCode | int | Response code that resolver returned in response to the DNS query. |
| SourceIpAddress | string | The IP address of the instance that the query originated from. |
| SourcePort | int | The port on the instance that the query originated from. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | Time (UTC) when the log was created. |
| Transport | string | The protocol (UDP or TCP) used to submit the DNS query. |
| Type | string | The name of the table |
| Version | string | The version number of the query log format. |
| VirtualNetworkId | string | The ID of the virtual network that the query originated in. |

---

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.network/dnsresolverpolicies`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

