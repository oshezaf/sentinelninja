# Unauthorized Job Posting (Low)

New Unauthorized Job Posting with severity Low found

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [CTM360](../solutions/ctm360.md) |
| **ID** | `066b94d6-23ec-46e6-a375-f77b64a92553` |
| **Severity** | Low |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess |
| **Techniques** | T1566 |
| **Required Connectors** | [CBSPollingIDAzureFunctions](../connectors/cbspollingidazurefunctions.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CTM360/Analytic%20Rules/unauthorized_job_posting_low.yaml) |

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
