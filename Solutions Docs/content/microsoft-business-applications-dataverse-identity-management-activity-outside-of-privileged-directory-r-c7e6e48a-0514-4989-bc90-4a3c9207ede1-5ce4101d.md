# Dataverse - Identity management activity outside of privileged directory role membership

This query detects identity administration events in Dataverse/Dynamics 365 made by accounts which are not members of privileged directory roles 'Dynamics 365 Admins', 'Power Platform Admins' or 'Global Admins

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Microsoft Business Applications](../solutions/microsoft-business-applications.md) |
| **ID** | `c7e6e48a-0514-4989-bc90-4a3c9207ede1` |
| **Tactics** | PrivilegeEscalation |
| **Techniques** | T1078, T1078.004 |
| **Required Connectors** | [Dataverse](../connectors/dataverse.md), [IdentityInfo](../connectors/identityinfo.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Business%20Applications/Hunting%20Queries/Dataverse%20-%20Identity%20management%20activity%20outside%20of%20privileged%20directory%20role%20membership.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`DataverseActivity`](../tables/dataverseactivity.md)
- [`IdentityInfo`](../tables/identityinfo.md)

---

**Browse:**

- [← Back to Hunting Queries](hunting-queries.md)
- [← Back to Microsoft Business Applications](../solutions/microsoft-business-applications.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
