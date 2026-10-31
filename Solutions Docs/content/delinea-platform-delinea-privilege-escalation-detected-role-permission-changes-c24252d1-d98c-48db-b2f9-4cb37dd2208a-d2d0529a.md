# Delinea - Privilege escalation detected (role / permission changes)

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Detects role assignments, permission or right grants, admin grants and elevation events that the acting user has not performed against the same target in the prior 14 days. Only grant-type actions (added / assigned / granted / elevated / approved / created / updated) against role, permission, privilege, admin or entitlement objects are considered; removals and read-only events are excluded, and plain group-membership or ownership events are not matched because they make up most routine directory

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Delinea Platform](../solutions/delinea-platform.md) |
| **ID** | `c24252d1-d98c-48db-b2f9-4cb37dd2208a` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | PrivilegeEscalation, Persistence |
| **Techniques** | T1098, T1078 |
| **Required Connectors** | [DelineaPlatformConnector](../connectors/delineaplatformconnector.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Delinea%20Platform/Analytic%20Rules/DelineaPrivilegeEscalation.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`DelineaAuditEvents_CL`](../tables/delineaauditevents-cl.md) | ? | ✓ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Delinea Platform](../solutions/delinea-platform.md)

