# Power Apps - Multiple apps deleted

Identifies mass delete activity where multiple Power Apps are deleted, matching a predefined threshold of total apps deleted or app delete events across multiple Power Platform environments.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Microsoft Business Applications](../solutions/microsoft-business-applications.md) |
| **ID** | `ed88638d-8627-4c20-ba08-67c13807a9b1` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Impact |
| **Techniques** | T1485, T0826 |
| **Required Connectors** | [PowerPlatformAdmin](../connectors/powerplatformadmin.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Business%20Applications/Analytic%20Rules/Power%20Apps%20-%20Multiple%20apps%20deleted.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`PowerPlatformAdminActivity`](../tables/powerplatformadminactivity.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to Microsoft Business Applications](../solutions/microsoft-business-applications.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
