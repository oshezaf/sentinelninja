# AWSWAF

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for AWSWAF table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | AWS |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Lake-Only Ingestion** | ✓ Yes |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/awswaf) |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |

## Schema (36 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/awswaf)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| Action | string | The terminating action taken by AWS WAF (ALLOW, BLOCK, CAPTCHA, or Challenge). |
| Args | string | The query string parameters of the request. |
| CaptchaResponse | dynamic | Status of the CAPTCHA action for the request. |
| ChallengeResponse | dynamic | Status of the security challenge for the request. |
| ClientIp | string | IP address of the client making the request. |
| Country | string | Country of origin for the request. |
| ExcludedRules | dynamic | Rules excluded from evaluation in the rule group. |
| FormatVersion | string | Version of the AWS WAF log format. |
| Headers | dynamic | Headers included in the HTTP request. |
| HttpMethod | string | The HTTP method (GET, POST, etc.) of the request. |
| HttpRequest | dynamic | Metadata about the HTTP request. |
| HttpSourceId | string | ID of the associated resource (e.g., CloudFront distribution, Load Balancer). |
| HttpSourceName | string | Source of the request (e.g., CF, APIGW, ALB). |
| HttpVersion | string | HTTP version used in the request. |
| Ja3Fingerprint | string | JA3 fingerprint of the TLS Client Hello. |
| Labels | dynamic | Labels applied to the request by rules. |
| NonTerminatingMatchingRules | dynamic | List of rules that matched but didn't terminate the request. |
| OversizeFields | dynamic | Fields in the request that exceeded AWS WAF inspection limits. |
| RateBasedRuleList | dynamic | List of rate-based rules applied to the request. |
| RequestHeadersInserted | dynamic | Headers inserted for custom request handling. |
| RequestId | string | Request ID for the network request. |
| ResponseCodeSent | int | HTTP response code sent to the client. |
| RuleGroupId | string | ID of the rule group that matched. |
| RuleGroupList | dynamic | List of rule groups that acted on the request. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| TenantId | string | The Log Analytics workspace ID |
| TerminatingRule | dynamic | The rule that terminated the request. If this is present, it contains action, ruleId, ruleMatchDetails, and any additional information provided for each rule varies according factors such as the rule configuration, rule match type, and details of the match. |
| TerminatingRuleId | string | ID of the network rule that matched. |
| TerminatingRuleMatchDetails | dynamic | Details of the rule that terminated the request. |
| TerminatingRuleType | string | Type of rule that terminated the request. |
| TimeGenerated | datetime | Timestamp when the log was processed. |
| Type | string | The name of the table |
| Uri | string | The URI of the request. |
| WebAclId | string | The GUID of the web ACL applied to the request. |

## Solutions (1)

This table is used by the following solutions:

- [Amazon Web Services](../solutions/amazon-web-services.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Amazon Web Services S3 WAF](../connectors/awss3wafccpdefinition.md) |  |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

