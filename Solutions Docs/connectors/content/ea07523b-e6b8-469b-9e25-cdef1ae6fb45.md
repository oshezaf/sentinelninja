# Dataverse - Audit logging disabled

Identifies a change in system audit configuration whereby audit logging is turned off.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Microsoft Business Applications](../solutions/microsoft-business-applications.md) |
| **ID** | `ea07523b-e6b8-469b-9e25-cdef1ae6fb45` |
| **Severity** | Low |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | DefenseEvasion |
| **Techniques** | T1562 |
| **Required Connectors** | [Dataverse](../connectors/dataverse.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Business%20Applications/Analytic%20Rules/Dataverse%20-%20Audit%20logging%20disabled.yaml) |

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
