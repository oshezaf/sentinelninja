# Semperis DSP Recent sIDHistory changes on AD objects

This indicator detects any recent changes to sIDHistory on AD objects, including changes to non-privileged accounts where privileged SIDs are added.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Semperis Directory Services Protector](../solutions/semperis-directory-services-protector.md) |
| **ID** | `64796da3-6383-4de2-9c97-866c83c459ae` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | PrivilegeEscalation, Persistence |
| **Techniques** | T1098 |
| **Required Connectors** | [SemperisDSP](../connectors/semperisdsp.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Semperis%20Directory%20Services%20Protector/Analytic%20Rules/SemperisDSP_RecentsIDHistoryChangesOnADObjects.yaml) |

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to Semperis Directory Services Protector](../solutions/semperis-directory-services-protector.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
