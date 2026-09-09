# HoneyLabs TI Map URL Entity to CommonSecurityLog

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Identifies requests in CommonSecurityLog to malware loader or command-and-control URLs that HoneyLabs pulled out of payloads captured by its honeypot sensors. A hit usually means a host inside your estate reached out to attacker-controlled infrastructure, so treat it as post-compromise until proven otherwise. Indicator Confidence reflects how much evidence HoneyLabs holds (90 = 100+ observed attacks, 60 = a single sighting); raise the threshold in the query to trade coverage for precision.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [HoneyLabs](../solutions/honeylabs.md) |
| **ID** | `afe2a5ff-f4fe-4dee-8b6b-fd28d29d6738` |
| **Severity** | High |
| **Kind** | Scheduled |
| **Tactics** | CommandAndControl, Execution |
| **Techniques** | T1071, T1105 |
| **Required Connectors** | [ThreatIntelligenceTaxii](../connectors/threatintelligencetaxii.md), [CEF](../connectors/cef.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/HoneyLabs/Analytic%20Rules/HoneyLabsTIMapURLEntityCommonSecurityLog.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | ✓ | ✓ | ✓ |
| [`ThreatIntelIndicators`](../tables/threatintelindicators.md) | ✓ | ✓ | ✗ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to HoneyLabs](../solutions/honeylabs.md)

