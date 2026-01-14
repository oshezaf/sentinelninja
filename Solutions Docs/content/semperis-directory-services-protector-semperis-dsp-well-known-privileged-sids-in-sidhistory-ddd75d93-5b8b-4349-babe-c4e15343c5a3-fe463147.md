# Semperis DSP Well-known privileged SIDs in sIDHistory

This indicator looks for security principals that contain specific SIDs of accounts from built-in privileged groups within their sIDHistory attribute. This would allow those security principals to have the same privileges as those privileged accounts, but in a way that is not obvious to monitor (e.g. through group membership).

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Semperis Directory Services Protector](../solutions/semperis-directory-services-protector.md) |
| **ID** | `ddd75d93-5b8b-4349-babe-c4e15343c5a3` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | PrivilegeEscalation, DefenseEvasion |
| **Techniques** | T1134 |
| **Required Connectors** | [SemperisDSP](../connectors/semperisdsp.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Semperis%20Directory%20Services%20Protector/Analytic%20Rules/SemperisDSP_WellKnownPrivilegedSIDsInsIDHistory.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`SecurityEvent`](../tables/securityevent.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Semperis Directory Services Protector](../solutions/semperis-directory-services-protector.md)

