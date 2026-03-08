# AGWFirewallLogs

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

Reference for AGWFirewallLogs table in Azure Monitor Logs.

| Attribute | Value |
|:----------|:------|
| **Category** | Audit, Azure Resources, Network |
| **Basic Logs Eligible** | ✓ Yes |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✗ No |
| **Azure Monitor Tables Reference** | [View Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/agwfirewalllogs) |
| **Azure Monitor Tables Feature Support** | [View Documentation](https://learn.microsoft.com/azure/azure-monitor/logs/tables-feature-support) |

## Schema (28 columns)

**Source:** [Azure Monitor documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/reference/tables/agwfirewalllogs)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| _BilledSize | real | The record size in bytes |
| _IsBillable | string | Specifies whether ingesting the data is billable. When _IsBillable isfalseingestion isn't billed to your Azure account |
| _ResourceId | string | A unique identifier for the resource that the record is associated with |
| _SubscriptionId | string | A unique identifier for the subscription that the record is associated with |
| Action | string | Action taken on the request. Available values are Blocked and Allowed (for custom rules), Matched (when a rule matches a part of the request), and Detected and Blocked (these are both for mandatory rules, depending on if the WAF is in detection or prevention mode). |
| ClientIp | string | Originating IP for the request. |
| ClientPort | int | Originating port for the request. |
| DetailedData | string | Specific data found in request that matched the rule for the triggered event. |
| DetailedMessage | string | Description of the rule for the triggered event. |
| FileDetails | string | Configuration file that contained the rule for the triggered event. |
| Hostname | string | Hostname or IP address of the Application Gateway. |
| InstanceId | string | Application Gateway instance for which firewall data is being generated. For a multiple-instance application gateway, there is one row per instance. |
| LineDetails | string | Line number in the configuration file that triggered the event. |
| Message | string | User-friendly message for the triggering event. More details are provided in the details section. |
| OperationName | string | Name of the operation. |
| PolicyId | string | The ID of the firewall policy applied to the request. |
| PolicyScope | string | The scope of the policy. Values can be Global, Listener, or Location (for path-based rules). |
| PolicyScopeName | string | The name of the policy scope applied. |
| RequestUri | string | URL of the received request. |
| RuleId | string | Rule ID of the triggering event. |
| RuleSetType | string | Rule set type. The available value is OWASP. |
| RuleSetVersion | string | Rule set version used. Available values are 2.2.9 and 3.0. |
| Site | string | Site for which the log was generated. Currently, only Global is listed because rules are global. |
| SourceSystem | string | The type of agent the event was collected by. For example,OpsManagerfor Windows agent, either direct connect or Operations Manager,Linuxfor all Linux agents, orAzurefor Azure Diagnostics |
| TenantId | string | The Log Analytics workspace ID |
| TimeGenerated | datetime | Time (UTC) when the log was created. |
| TransactionId | string | Unique ID for a given transaction which helps group multiple rule violations that occurred within the same request. |
| Type | string | The name of the table |

## Solutions (1)

This table is used by the following solutions:

- [Azure Web Application Firewall (WAF)](../solutions/azure-web-application-firewall-waf.md)

---

## Content Items Using This Table (6)

### Analytic Rules (6)

**In solution [Azure Web Application Firewall (WAF)](../solutions/azure-web-application-firewall-waf.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [A potentially malicious web request was executed against a web server](../content/azure-web-application-firewall-waf-a-potentially-malicious-web-request-was-executed-against-a-web-server-46ac55ae-47b8-414a-8f94-89ccd1962178-ef0d4240.md) |  |
| [App GW WAF - Code Injection](../content/azure-web-application-firewall-waf-app-gw-waf-code-injection-912a18fc-6165-446b-8740-81ae6c3f75ee-5ee99e9c.md) |  |
| [App GW WAF - Path Traversal Attack](../content/azure-web-application-firewall-waf-app-gw-waf-path-traversal-attack-b6c3a8a6-d22c-4882-9c57-abc01690938b-ce8dc4ad.md) |  |
| [App Gateway WAF - SQLi Detection](../content/azure-web-application-firewall-waf-app-gateway-waf-sqli-detection-bdb2cd63-99f2-472e-b1b9-acba473b6744-280638ed.md) |  |
| [App Gateway WAF - Scanner Detection](../content/azure-web-application-firewall-waf-app-gateway-waf-scanner-detection-9b8dd8fd-f192-42eb-84f6-541920400a7a-40d3fac2.md) |  |
| [App Gateway WAF - XSS Detection](../content/azure-web-application-firewall-waf-app-gateway-waf-xss-detection-1c7ff502-2ad4-4970-9d29-9210c6753138-cf69ab37.md) |  |

## Resource Types

This table collects data from the following Azure resource types:

- `microsoft.network/applicationgateways`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

