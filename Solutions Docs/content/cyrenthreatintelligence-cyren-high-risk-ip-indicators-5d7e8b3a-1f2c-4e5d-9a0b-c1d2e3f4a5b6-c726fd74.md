# Cyren High-Risk IP Indicators

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Detects high-risk IP indicators (risk score >= 80) from Cyren threat intelligence feeds in the last 24 hours. These IPs are associated with malicious activity such as malware distribution, phishing, or botnet command and control.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [CyrenThreatIntelligence](../solutions/cyrenthreatintelligence.md) |
| **ID** | `5d7e8b3a-1f2c-4e5d-9a0b-c1d2e3f4a5b6` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | CommandAndControl, Impact |
| **Techniques** | T1071, T1568 |
| **Required Connectors** | [CyrenThreatIntel](../connectors/cyrenthreatintel.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CyrenThreatIntelligence/Analytic%20Rules/Cyren%20-%20High%20Risk%20IP%20Indicators.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API |
|:------|:---------------:|:-------------:|
| [`Cyren_Indicators_CL`](../tables/cyren-indicators-cl.md) | — | — |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to CyrenThreatIntelligence](../solutions/cyrenthreatintelligence.md)

