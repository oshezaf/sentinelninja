# Contrast ADR - WAF Alert Correlation

Correlates Contrast ADR security alerts with WAF logs to identify confirmed attack attempts that were either exploited or blocked. This rule helps security teams prioritize incidents by focusing on attacks that have been validated by application security monitoring.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [ContrastADR](../solutions/contrastadr.md) |
| **ID** | `93641436-afb3-4921-8828-ceab0d15aaab` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess, DefenseEvasion, CommandAndControl |
| **Techniques** | T1190, T1211, T1008 |
| **Required Connectors** | [ContrastADR](../connectors/contrastadr.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ContrastADR/Analytic%20Rules/Contrast_ADR_Confirmed_WAF.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`ContrastADR_CL`](../tables/contrastadr-cl.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to ContrastADR](../solutions/contrastadr.md)
- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

