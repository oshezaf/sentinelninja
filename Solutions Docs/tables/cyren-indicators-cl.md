# Cyren_Indicators_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Supports Transformations** | ✗ No |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✗ No |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |

## Schema (21 columns)

**Source:** [Data Collection Rule definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CyrenThreatIntelligence/Data%20Connectors/CyrenThreatIntel_CCF/Cyren_DCR.json)

| Column Name | Type |
|:------------|:-----|
| action_s | string |
| category_s | string |
| detection_methods_s | string |
| detection_ts_t | datetime |
| domain_s | string |
| fileHash_s | string |
| firstSeen_t | datetime |
| identifier_s | string |
| ip_s | string |
| lastSeen_t | datetime |
| object_type_s | string |
| payload | dynamic |
| port_d | int |
| protocol_s | string |
| relationships_s | string |
| risk_d | int |
| source_s | string |
| TimeGenerated | datetime |
| timestamp | datetime |
| type_s | string |
| url_s | string |

## Solutions (1)

This table is used by the following solutions:

- [CyrenThreatIntelligence](../solutions/cyrenthreatintelligence.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Cyren Threat Intelligence](../connectors/cyrenthreatintel.md) |  |

---

## Content Items Using This Table (4)

### Analytic Rules (3)

**In solution [CyrenThreatIntelligence](../solutions/cyrenthreatintelligence.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Cyren Feed Outage Detection](../content/cyrenthreatintelligence-cyren-feed-outage-detection-7f9a0d5c-3b4c-6d7e-1f2a-e3f4a5b6c7d8-a7fce6c8.md) |  |
| [Cyren High-Risk IP Indicators](../content/cyrenthreatintelligence-cyren-high-risk-ip-indicators-5d7e8b3a-1f2c-4e5d-9a0b-c1d2e3f4a5b6-c726fd74.md) |  |
| [Cyren High-Risk URL Indicators](../content/cyrenthreatintelligence-cyren-high-risk-url-indicators-6e8f9c4b-2a3b-5c6d-0e1f-d2e3f4a5b6c7-78e6d5f5.md) |  |

### Workbooks (1)

**In solution [CyrenThreatIntelligence](../solutions/cyrenthreatintelligence.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [CyrenThreatIntelligenceDashboard](../content/cyrenthreatintelligence-cyrenthreatintelligencedashboard-f33799ef.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

