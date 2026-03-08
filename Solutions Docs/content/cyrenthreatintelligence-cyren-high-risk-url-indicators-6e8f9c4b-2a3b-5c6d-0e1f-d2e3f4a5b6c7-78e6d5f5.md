# Cyren High-Risk URL Indicators

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Content Index](../content/content-index.md)

---

Detects high-risk URL indicators (risk score >= 80) from Cyren malware URL threat intelligence feeds in the last 24 hours. These URLs are associated with malware distribution, phishing campaigns, or other malicious content hosting.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [CyrenThreatIntelligence](../solutions/cyrenthreatintelligence.md) |
| **ID** | `6e8f9c4b-2a3b-5c6d-0e1f-d2e3f4a5b6c7` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess, Execution |
| **Techniques** | T1566, T1189 |
| **Required Connectors** | [CyrenThreatIntel](../connectors/cyrenthreatintel.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CyrenThreatIntelligence/Analytic%20Rules/Cyren%20-%20High%20Risk%20URL%20Indicators.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`Cyren_Indicators_CL`](../tables/cyren-indicators-cl.md) 🔶 | ✗ | ✓ | ✗ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to CyrenThreatIntelligence](../solutions/cyrenthreatintelligence.md)

