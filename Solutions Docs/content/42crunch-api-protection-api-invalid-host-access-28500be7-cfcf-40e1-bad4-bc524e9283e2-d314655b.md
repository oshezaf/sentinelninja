# API - Invalid host access

42Crunch API protection against invalid host access

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [42Crunch API Protection](../solutions/42crunch-api-protection.md) |
| **ID** | `28500be7-cfcf-40e1-bad4-bc524e9283e2` |
| **Severity** | Low |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Reconnaissance |
| **Techniques** | T1592 |
| **Required Connectors** | [42CrunchAPIProtection](../connectors/42crunchapiprotection.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/42Crunch%20API%20Protection/Analytic%20Rules/APIInvalidHostAccess.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`apifirewall_log_1_CL`](../tables/apifirewall-log-1-cl.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to 42Crunch API Protection](../solutions/42crunch-api-protection.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
