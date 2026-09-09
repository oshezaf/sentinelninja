# Speculus - Network traffic to or from high-risk IP indicator

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Matches network events in CommonSecurityLog against high-risk Speculus IP indicators (risk score >= 75) received in the last 14 days. These IPs are associated with malicious activity such as command and control, botnets, ransomware infrastructure, or brute-force campaigns.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Speculus Threat Intelligence](../solutions/speculus-threat-intelligence.md) |
| **ID** | `a7c3f9e2-4d18-4b6a-9f0c-2e5d8b1a6c43` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | CommandAndControl, InitialAccess |
| **Techniques** | T1071, T1090 |
| **Required Connectors** | [SpeculusThreatIntel](../connectors/speculusthreatintel.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Speculus%20Threat%20Intelligence/Analytic%20Rules/Speculus%20-%20IP%20Indicator%20Match%20CommonSecurityLog.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`Speculus_Indicators_CL`](../tables/speculus-indicators-cl.md) | ? | ✓ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Speculus Threat Intelligence](../solutions/speculus-threat-intelligence.md)

