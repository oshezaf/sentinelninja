# TacitRed_Findings_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
| **Supports Transformations** | ✗ No |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✗ No |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |

## Schema (16 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/TacitRedThreatIntelligence%5CData%20Connectors%5CTacitRed_CCF/TacitRed_Table.json)

| Column Name | Type |
|:------------|:-----|
| campaign_id_s | string |
| confidence_d | int |
| detection_ts_t | datetime |
| domain_s | string |
| email_s | string |
| findingType_s | string |
| firstSeen_t | datetime |
| lastSeen_t | datetime |
| metadata_s | string |
| notes_s | string |
| severity_s | string |
| source_s | string |
| status_s | string |
| TimeGenerated | datetime |
| user_id_s | string |
| username_s | string |

## Solutions (1)

This table is used by the following solutions:

- [TacitRedThreatIntelligence](../solutions/tacitredthreatintelligence.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [TacitRed Compromised Credentials](../connectors/tacitredthreatintel.md) |  |

---

## Content Items Using This Table (3)

### Analytic Rules (2)

**In solution [TacitRedThreatIntelligence](../solutions/tacitredthreatintelligence.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [TacitRed - High Confidence Compromise](../content/tacitredthreatintelligence-tacitred-high-confidence-compromise-b2c3d4e5-f6a7-8901-bcde-f23456789012-9220bb1c.md) |  |
| [TacitRed - Repeat Compromise Detection](../content/tacitredthreatintelligence-tacitred-repeat-compromise-detection-a1b2c3d4-e5f6-7890-abcd-ef1234567890-01245705.md) |  |

### Workbooks (1)

**In solution [TacitRedThreatIntelligence](../solutions/tacitredthreatintelligence.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [TacitRedSecOpsWorkbook](../content/tacitredthreatintelligence-tacitredsecopsworkbook-52402f02.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

