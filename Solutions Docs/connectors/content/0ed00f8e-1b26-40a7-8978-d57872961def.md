# Attack Indication (Medium)

New Attack Indication with severity Medium found

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [CTM360](../solutions/ctm360.md) |
| **ID** | `0ed00f8e-1b26-40a7-8978-d57872961def` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Execution, Persistence |
| **Techniques** | T1059, T1543 |
| **Required Connectors** | [CBSPollingIDAzureFunctions](../connectors/cbspollingidazurefunctions.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CTM360/Analytic%20Rules/attack_indication_medium.yaml) |

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
