# AWSRoute53Resolver

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for AWSRoute53Resolver table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | AWS |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Lake-Only Ingestion** | ✓ Yes |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/awsroute53resolver) |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |

## Schema (23 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/awsroute53resolver)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| AccountId | string | The AWS account ID that owns the VPC which sent the query. |
| Answers | dynamic | Array of DNS response records, including resolved IP addresses and other query-related information. |
| FirewallDomainListId | string | ID of the domain list that matched the query domain. |
| FirewallRuleAction | string | Rule action from the matching firewall rule. |
| FirewallRuleGroupId | string | ID of the firewall rule group that applied to the query. |
| LogType | string | Indicates the type of DNS log (e.g. ResolverQueryLogs). |
| QueryClass | string | The DNS query class. Usually IN (Internet). |
| QueryName | string | The domain name that was queried. |
| QueryType | string | The DNS record type requested (e.g. A, AAAA, MX). |
| Rcode | string | Textual DNS response code (e.g. NOERROR, NXDOMAIN). |
| Region | string | AWS region where the log was generated. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| SrcAddr | string | The source IP address of the instance that made the query. |
| SrcIds | dynamic | Identifiers related to the source instance where the DNS query originated from or passed through. |
| SrcPort | string | The source port on the instance that made the query. |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | The time the DNS query was received by Route 53 Resolver. |
| Transport | string | The protocol used to send the query (e.g. UDP, TCP, TLS). |
| Type | string | The name of the table |
| Version | string | Version of the log format. |
| VpcId | string | The ID of the VPC where the DNS query originated. |

## Solutions (1)

This table is used by the following solutions:

- [Amazon Web Services Route 53](../solutions/amazon-web-services-route-53.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Amazon Web Services S3 DNS Route53 (via Codeless Connector Framework)](../connectors/awsroute53resolverccpdefinition.md) |  |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

