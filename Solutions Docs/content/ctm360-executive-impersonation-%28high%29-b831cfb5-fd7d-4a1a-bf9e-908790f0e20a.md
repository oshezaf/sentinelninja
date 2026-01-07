# Executive Impersonation (High)

New Executive Impersonation with severity High found

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [CTM360](../solutions/ctm360.md) |
| **ID** | `b831cfb5-fd7d-4a1a-bf9e-908790f0e20a` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess |
| **Techniques** | T0865 |
| **Required Connectors** | [CBSPollingIDAzureFunctions](../connectors/cbspollingidazurefunctions.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CTM360/Analytic%20Rules/executive_impersonation_high.yaml) |

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
