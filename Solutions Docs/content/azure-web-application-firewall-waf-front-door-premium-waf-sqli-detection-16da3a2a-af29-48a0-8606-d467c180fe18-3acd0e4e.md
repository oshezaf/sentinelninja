# Front Door Premium WAF - SQLi Detection

Identifies a match for a SQL Injection attack in the Front Door Premium WAF logs. The threshold value in the query can be changed as per your infrastructure's requirements. References: https://owasp.org/Top10/A03_2021-Injection/

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Azure Web Application Firewall (WAF)](../solutions/azure-web-application-firewall-waf.md) |
| **ID** | `16da3a2a-af29-48a0-8606-d467c180fe18` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | DefenseEvasion, Execution, InitialAccess, PrivilegeEscalation |
| **Techniques** | T1211, T1059, T1190, T0890 |
| **Required Connectors** | [WAF](../connectors/waf.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Azure%20Web%20Application%20Firewall%20%28WAF%29/Analytic%20Rules/AFD-Premium-WAF-SQLiDetection.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`AzureDiagnostics`](../tables/azurediagnostics.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to Azure Web Application Firewall (WAF)](../solutions/azure-web-application-firewall-waf.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
