# Keeper Security - Password Changed

Creates an informational incident based on Keeper Security Password Changed data in Microsoft Sentinel

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Keeper Security](../solutions/keeper-security.md) |
| **ID** | `f031fbbc-37d8-4667-b795-d386bf2b5ab2` |
| **Severity** | Informational |
| **Status** | Available |
| **Kind** | NRT |
| **Tactics** | Persistence |
| **Techniques** | T1556 |
| **Required Connectors** | [KeeperSecurityPush2](../connectors/keepersecuritypush2.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Keeper%20Security/Analytic%20Rules/Keeper%20Security%20-%20Alternate%20Master%20Password.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`KeeperSecurityEventNewLogs_CL`](../tables/keepersecurityeventnewlogs-cl.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to Keeper Security](../solutions/keeper-security.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
