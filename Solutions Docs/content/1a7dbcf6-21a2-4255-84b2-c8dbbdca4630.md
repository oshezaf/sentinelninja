# Illusive Incidents Analytic Rule

Create a Microsoft Sentinel incident upon a new Illusive alert (incident) and associate all related Illusive events to the relevant Microsoft Sentinel alert. This is done by filtering and processing Illusive Syslog messages.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Illusive Platform](../solutions/illusive-platform.md) |
| **ID** | `1a7dbcf6-21a2-4255-84b2-c8dbbdca4630` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Persistence, PrivilegeEscalation, DefenseEvasion, CredentialAccess, LateralMovement |
| **Techniques** | T1078, T1098, T1548, T1021 |
| **Required Connectors** | [Illusive](../connectors/illusive.md), [illusiveAttackManagementSystemAma](../connectors/illusiveattackmanagementsystemama.md), [CefAma](../connectors/cefama.md) |
| **Event Product** | illusive |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Illusive%20Platform/Analytic%20Rules/Illusive_Detection_Query.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`CommonSecurityLog`](../tables/commonsecuritylog.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to Illusive Platform](../solutions/illusive-platform.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
