# Cisco Duo - Multiple admin 2FA failures

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Detects when multiple admin 2FA failures occurs.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [CiscoDuoSecurity](../solutions/ciscoduosecurity.md) |
| **ID** | `e46c5588-e643-4a60-a008-5ba9a4c84328` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess |
| **Techniques** | T1078 |
| **Required Connectors** | [CiscoDuoSecurity](../connectors/ciscoduosecurity.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CiscoDuoSecurity/Analytic%20Rules/CiscoDuoAdminMFAFailures.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`CiscoDuo_CL`](../tables/ciscoduo-cl.md) | — | — | — |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to CiscoDuoSecurity](../solutions/ciscoduosecurity.md)

