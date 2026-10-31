# Gambit Security - Critical Policy Issue Promotion

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Creates an incident when Gambit Security reports an Active, High-severity policy issue in Microsoft Sentinel.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [GambitSecurity](../solutions/gambitsecurity.md) |
| **ID** | `8d2b6f4c-1a37-4e9b-b5c8-7f0e3a2d9c14` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Impact |
| **Techniques** | T1490 |
| **Required Connectors** | [GambitSecurityPush](../connectors/gambitsecuritypush.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/GambitSecurity/Analytic%20Rules/GambitCriticalIssuePromotion.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`GambitPoliciesIssues_CL`](../tables/gambitpoliciesissues-cl.md) | ? | ✓ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to GambitSecurity](../solutions/gambitsecurity.md)

