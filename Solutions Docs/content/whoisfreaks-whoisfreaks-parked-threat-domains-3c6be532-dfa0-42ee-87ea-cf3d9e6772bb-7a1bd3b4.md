# WhoisFreaks - parked threat domains

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Identifies threat-listed domains that are currently parked and may be used for staging. The feed reports parked state in the is_parked column as t or f.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [WhoisFreaks](../solutions/whoisfreaks.md) |
| **ID** | `3c6be532-dfa0-42ee-87ea-cf3d9e6772bb` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | ResourceDevelopment |
| **Techniques** | T1583 |
| **Required Connectors** | [WhoisFreaks](../connectors/whoisfreaks.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/WhoisFreaks/Analytic%20Rules/WhoisFreaks-ParkedThreatDomain.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`WhoisFreaksThreat_CL`](../tables/whoisfreaksthreat-cl.md) | ✗ | ✓ | ✗ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to WhoisFreaks](../solutions/whoisfreaks.md)

