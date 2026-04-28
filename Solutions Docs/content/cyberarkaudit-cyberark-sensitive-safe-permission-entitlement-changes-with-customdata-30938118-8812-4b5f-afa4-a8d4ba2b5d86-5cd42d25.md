# CyberArk - Sensitive Safe/Permission/Entitlement Changes (with customData)

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Alerts on control-plane modifications: safes, permissions, roles, entitlements, policy changes. Leverages customData fields such as changeType/role/permission/policy/entitlement to reduce misses.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [CyberArkAudit](../solutions/cyberarkaudit.md) |
| **ID** | `30938118-8812-4b5f-afa4-a8d4ba2b5d86` |
| **Severity** | Low |
| **Kind** | Scheduled |
| **Tactics** | PrivilegeEscalation |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CyberArkAudit/Analytics%20Rules/CyberArkAuditSensitiveChanges.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`CyberArk_AuditEvents_CL`](../tables/cyberark-auditevents-cl.md) | ? | ✓ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to CyberArkAudit](../solutions/cyberarkaudit.md)

