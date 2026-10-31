# Abnormal Security - Most-targeted recipients

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Aggregates Abnormal Security threats by recipient to reveal the most-targeted users over the hunting window. A spike for a single recipient can indicate a focused campaign against a high-value target.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [AbnormalSecurity](../solutions/abnormalsecurity.md) |
| **ID** | `9dbf1df0-03cd-4c5a-ba22-4f10b82ac90a` |
| **Tactics** | InitialAccess, Reconnaissance |
| **Techniques** | T1566 |
| **Required Connectors** | [AbnormalSecurityPush](../connectors/abnormalsecuritypush.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AbnormalSecurity/Hunting%20Queries/AbnormalSecurity_TopAttackTargets.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`ABNORMAL_SECURITY_THREAT_LOG_CL`](../tables/abnormal-security-threat-log-cl.md) 🔶 | ? | ✓ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to AbnormalSecurity](../solutions/abnormalsecurity.md)

