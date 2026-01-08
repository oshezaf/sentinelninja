# Malicious Ip (High)

New Malicious Ip with severity High found

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [CTM360](../solutions/ctm360.md) |
| **ID** | `1b94c418-856e-462e-8fe8-857d6c4d43e5` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess |
| **Techniques** | T1566 |
| **Required Connectors** | [CBSPollingIDAzureFunctions](../connectors/cbspollingidazurefunctions.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CTM360/Analytic%20Rules/malicious_ip_high.yaml) |

> ⚠️ **Not listed in Solution JSON:** This content item was discovered by scanning the solution folder but is not included in the official Solution JSON file. It may be a legacy item, under development, or excluded from the official solution package.

## Tables Used

This content item queries data from the following tables:

- [`CBSLog_Azure_1_CL`](../tables/cbslog-azure-1-cl.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to CTM360](../solutions/ctm360.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
