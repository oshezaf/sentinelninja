# App Gateway WAF - SQLi Detection

Identifies a match for a SQL Injection attack in the App Gateway WAF logs. The threshold value in the query can be changed as per your infrastructure's requirements. References: https://owasp.org/Top10/A03_2021-Injection/

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Azure Web Application Firewall (WAF)](../solutions/azure-web-application-firewall-%28waf%29.md) |
| **ID** | `bdb2cd63-99f2-472e-b1b9-acba473b6744` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | DefenseEvasion, Execution, InitialAccess, PrivilegeEscalation |
| **Techniques** | T1211, T1059, T1190, T0890 |
| **Required Connectors** | [WAF](../connectors/waf.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Azure%20Web%20Application%20Firewall%20%28WAF%29/Analytic%20Rules/App-GW-WAF-SQLiDetection.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`AGWFirewallLogs`](../tables/agwfirewalllogs.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to Azure Web Application Firewall (WAF)](../solutions/azure-web-application-firewall-%28waf%29.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
