# HoneyLabs high-confidence indicator seen for the first time

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Surfaces hosts that contacted a HoneyLabs indicator backed by heavy evidence (Confidence 80 or above, meaning ten or more observed attacks) where that IP has not been seen in your logs in the preceding 14 days. First contact with a well-evidenced attacker is a stronger hunting lead than repeat background noise.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [HoneyLabs](../solutions/honeylabs.md) |
| **ID** | `9f1c2a44-7d18-4f5b-9c33-2a6e5b8d1c07` |
| **Tactics** | InitialAccess |
| **Techniques** | T1190 |
| **Required Connectors** | [ThreatIntelligenceTaxii](../connectors/threatintelligencetaxii.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/HoneyLabs/Hunting%20Queries/HoneyLabsFirstContactHighConfidence.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | ✓ | ✓ | ✓ |
| [`ThreatIntelIndicators`](../tables/threatintelindicators.md) | ✓ | ✓ | ✗ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to HoneyLabs](../solutions/honeylabs.md)

