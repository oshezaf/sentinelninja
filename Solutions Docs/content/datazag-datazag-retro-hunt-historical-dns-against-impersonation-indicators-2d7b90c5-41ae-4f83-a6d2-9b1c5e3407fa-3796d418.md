# Datazag - retro-hunt historical DNS against impersonation indicators

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Matches Datazag impersonation indicators against historical ASIM-normalized DNS to surface domains resolved inside the estate before the feed was connected. Adjust dns_lookback to your DNS retention. Requires ASIM DNS parsers.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Datazag](../solutions/datazag.md) |
| **ID** | `2d7b90c5-41ae-4f83-a6d2-9b1c5e3407fa` |
| **Kind** | Hunting |
| **Tactics** | InitialAccess, CommandAndControl |
| **Techniques** | T1566, T1071 |
| **Required Connectors** | [ThreatIntelligenceTaxii](../connectors/threatintelligencetaxii.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Datazag/Hunting%20Queries/DatazagRetroHunt_DNS.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`ThreatIntelIndicators`](../tables/threatintelindicators.md) |  | ✓ | ✓ | ✗ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to Datazag](../solutions/datazag.md)

