# NordPass - Deleting items of deleted member

This will alert you if the deleted user's items have been removed without being transferred to another active user, as this could result in the loss of access to critical tools or information.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [NordPass](../solutions/nordpass.md) |
| **ID** | `0068dca4-dea0-46a3-a970-655e067a145f` |
| **Severity** | High |
| **Kind** | Scheduled |
| **Tactics** | Impact |
| **Techniques** | T1485 |
| **Required Connectors** | [NordPass](../connectors/nordpass.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/NordPass/Analytics%20Rules/nordpass_items_reassignment_deletion.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`NordPassEventLogs_CL`](../tables/nordpasseventlogs-cl.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to NordPass](../solutions/nordpass.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
