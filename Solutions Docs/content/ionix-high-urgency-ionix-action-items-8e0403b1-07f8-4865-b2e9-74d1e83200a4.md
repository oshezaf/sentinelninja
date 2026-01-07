# High Urgency IONIX Action Items

This query creates an alert for active IONIX Action Items with high urgency (9-10).  Urgency can be altered using the "min_urgency" variable in the query.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [IONIX](../solutions/ionix.md) |
| **ID** | `8e0403b1-07f8-4865-b2e9-74d1e83200a4` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess |
| **Techniques** | T1190, T1195 |
| **Required Connectors** | [CyberpionSecurityLogs](../connectors/cyberpionsecuritylogs.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/IONIX/Analytic%20Rules/HighUrgencyActionItems.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`CyberpionActionItems_CL`](../tables/cyberpionactionitems-cl.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to IONIX](../solutions/ionix.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
