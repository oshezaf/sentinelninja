# WhoisFreaks - burst of newly registered domains

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Identifies unusually large NRD ingest volume that may indicate bulk registration campaigns. The NRD feeds are polled once a day, so the rule compares the last 24 hours of distinct domains against the average of the previous seven daily loads and alerts only when the current load is at least 50% above that average and more than three standard deviations from it.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [WhoisFreaks](../solutions/whoisfreaks.md) |
| **ID** | `9d79f28f-5d1d-4ca8-b3d3-4ab5f5513e8d` |
| **Severity** | Low |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | ResourceDevelopment |
| **Techniques** | T1583 |
| **Required Connectors** | [WhoisFreaks](../connectors/whoisfreaks.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/WhoisFreaks/Analytic%20Rules/WhoisFreaks-FreshNRD-Burst.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`WhoisFreaksNRDNoWhois_CL`](../tables/whoisfreaksnrdnowhois-cl.md) | ? | ✓ | ? |
| [`WhoisFreaksNRD_CL`](../tables/whoisfreaksnrd-cl.md) | ? | ✓ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to WhoisFreaks](../solutions/whoisfreaks.md)

