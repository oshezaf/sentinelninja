# Silverfort - Certifried Incident

An Active Directory domain privilege escalation vulnerability that enables a privileged user to access the Domain Controller by abusing Active Directory Certificate Service

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Silverfort](../solutions/silverfort.md) |
| **ID** | `9ae540c9-c926-4100-8f07-1eac22596292` |
| **Severity** | High |
| **Kind** | Scheduled |
| **Tactics** | PrivilegeEscalation |
| **Techniques** | T1068 |
| **Required Connectors** | [SilverfortAma](../connectors/silverfortama.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Silverfort/Analytic%20Rules/Certifried.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`CommonSecurityLog`](../tables/commonsecuritylog.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to Silverfort](../solutions/silverfort.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
