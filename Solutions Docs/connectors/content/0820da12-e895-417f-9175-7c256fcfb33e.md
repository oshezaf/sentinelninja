# Dataverse - Anomalous application user activity

Identifies anomalies in activity patterns of Dataverse application (non-interactive) users, based on activity falling outside the normal pattern of use.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Microsoft Business Applications](../solutions/microsoft-business-applications.md) |
| **ID** | `0820da12-e895-417f-9175-7c256fcfb33e` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | CredentialAccess, Execution, Persistence |
| **Techniques** | T1528, T1569, T0871, T0834, T0859 |
| **Required Connectors** | [Dataverse](../connectors/dataverse.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Business%20Applications/Analytic%20Rules/Dataverse%20-%20Anomalous%20application%20user%20activity.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`DataverseActivity`](../tables/dataverseactivity.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to Microsoft Business Applications](../solutions/microsoft-business-applications.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
