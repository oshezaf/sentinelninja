# Speculus - Threat intelligence feed outage

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Detects when no Speculus threat intelligence indicators have been received for more than 24 hours. The Speculus indexer refreshes continuously, so a silent day usually means an expired API key, a connector misconfiguration, or a feed-side outage rather than an empty feed.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Speculus Threat Intelligence](../solutions/speculus-threat-intelligence.md) |
| **ID** | `c4f2a8d1-6e39-4c07-b5a2-1d8e3f7c9a25` |
| **Severity** | Informational |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Impact |
| **Techniques** | T1565 |
| **Required Connectors** | [SpeculusThreatIntel](../connectors/speculusthreatintel.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Speculus%20Threat%20Intelligence/Analytic%20Rules/Speculus%20-%20Feed%20Outage%20Detection.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`Speculus_Indicators_CL`](../tables/speculus-indicators-cl.md) | ? | ✓ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Speculus Threat Intelligence](../solutions/speculus-threat-intelligence.md)

