# Header: HTTP Strict Transport Security Missing

Header: HTTP Strict Transport Security Missing

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [CTM360](../solutions/ctm360.md) |
| **ID** | `a3efb9ff-14a4-42ef-b019-0b9cbe5d3888` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | CredentialAccess, Collection |
| **Techniques** | T1557 |
| **Required Connectors** | [HVPollingIDAzureFunctions](../connectors/hvpollingidazurefunctions.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CTM360/Analytic%20Rules/HeaderHTTPStrictTransportSecurityMissing.yaml) |

> ⚠️ **Not listed in Solution JSON:** This content item was discovered by scanning the solution folder but is not included in the official Solution JSON file. It may be a legacy item, under development, or excluded from the official solution package.

## Tables Used

This content item queries data from the following tables:

- [`HackerViewLog_Azure_1_CL`](../tables/hackerviewlog-azure-1-cl.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to CTM360](../solutions/ctm360.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
