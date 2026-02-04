# A potentially malicious web request was executed against a web server

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

'Detects unobstructed Web Application Firewall (WAF) activity in sessions where the WAF blocked incoming requests by computing the ratio between blocked requests and unobstructed WAF requests in these sessions (BlockvsSuccessRatio metric). A high ratio value for a given client IP and hostname calls for further investigation of the WAF data in that session, due to the significantly high number of blocked requests and a few unobstructed logs that may be malicious but have passed undetected through

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Azure Web Application Firewall (WAF)](../solutions/azure-web-application-firewall-waf.md) |
| **ID** | `46ac55ae-47b8-414a-8f94-89ccd1962178` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess |
| **Techniques** | T1190 |
| **Required Connectors** | [WAF](../connectors/waf.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Azure%20Web%20Application%20Firewall%20%28WAF%29/Analytic%20Rules/MaliciousWAFSessions.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`AGWAccessLogs`](../tables/agwaccesslogs.md) | ✓ | ✗ | — |
| [`AGWFirewallLogs`](../tables/agwfirewalllogs.md) | ✓ | ✗ | — |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Azure Web Application Firewall (WAF)](../solutions/azure-web-application-firewall-waf.md)

