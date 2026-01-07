# NordPass - Manual invitation, suspension, or deletion

This will alert you when the user is manually invited, suspended, or deleted.  !This rule should be enabled only by organizations that have User and Group Provisioning enabled.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [NordPass](../solutions/nordpass.md) |
| **ID** | `693c5217-e840-427f-9661-3fa0ef266040` |
| **Severity** | Medium |
| **Kind** | Scheduled |
| **Tactics** | Persistence |
| **Techniques** | T1098 |
| **Required Connectors** | [NordPass](../connectors/nordpass.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/NordPass/Analytics%20Rules/nordpass_manual_user_manipulation.yaml) |

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
