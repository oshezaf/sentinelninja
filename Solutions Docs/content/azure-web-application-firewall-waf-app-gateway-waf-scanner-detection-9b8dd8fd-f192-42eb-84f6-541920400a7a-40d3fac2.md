# App Gateway WAF - Scanner Detection

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Identifies a match for a Scanner detection user agent based attack in the App Gateway WAF logs. The threshold value in the query can be changed as per your infrastructure's requirements. References: https://owasp.org/www-community/Vulnerability_Scanning_Tools

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Azure Web Application Firewall (WAF)](../solutions/azure-web-application-firewall-waf.md) |
| **ID** | `9b8dd8fd-f192-42eb-84f6-541920400a7a` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | DefenseEvasion, Execution, InitialAccess, Reconnaissance, Discovery |
| **Techniques** | T1548, T1203, T1190, T1595, T1046 |
| **Required Connectors** | [WAF](../connectors/waf.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Azure%20Web%20Application%20Firewall%20%28WAF%29/Analytic%20Rules/App-GW-WAF-Scanner-detection.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`AGWFirewallLogs`](../tables/agwfirewalllogs.md) | ✓ | ✗ | — |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Azure Web Application Firewall (WAF)](../solutions/azure-web-application-firewall-waf.md)

