# Power Apps - Bulk sharing of Power Apps to newly created guest users

Identifies unusual bulk sharing, based on a predefined threshold in the query, of Power Apps to newly created Microsoft Entra guest users.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Microsoft Business Applications](../solutions/microsoft-business-applications.md) |
| **ID** | `943acfa0-9285-4eb0-a9c0-42e36177ef19` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | ResourceDevelopment, InitialAccess, LateralMovement |
| **Techniques** | T1587, T1566, T1534 |
| **Required Connectors** | [PowerPlatformAdmin](../connectors/powerplatformadmin.md), [AzureActiveDirectory](../connectors/azureactivedirectory.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Business%20Applications/Analytic%20Rules/Power%20Apps%20-%20Bulk%20sharing%20of%20Power%20Apps%20to%20newly%20created%20guest%20users.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`AuditLogs`](../tables/auditlogs.md)
- [`PowerPlatformAdminActivity`](../tables/powerplatformadminactivity.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to Microsoft Business Applications](../solutions/microsoft-business-applications.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
