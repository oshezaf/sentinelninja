# RelevanceSystemAlerts_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Ingestion API Supported** | ✓ Yes |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Content Items](#content-items-using-this-table)
- [Parsers](#parsers-using-this-table)

## Schema (33 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/RelevanceSystemAlerts_CL.json)

| Column Name | Type |
|:------------|:-----|
| _ResourceId | string |
| aiSummary | string |
| audit_createTime | datetime |
| audit_creator | string |
| audit_updater | string |
| audit_updateTime | datetime |
| detail_dataLeak_discoveryDocumentIds | dynamic |
| detail_dataLeak_severity | string |
| detail_detailType | string |
| detail_initialAccessBroker_discoveryDocumentIds | dynamic |
| detail_initialAccessBroker_severity | string |
| detail_insiderThreat_discoveryDocumentIds | dynamic |
| detail_insiderThreat_severity | string |
| displayName | string |
| etag | string |
| findingCount | string |
| findings | dynamic |
| name | string |
| priorityAnalysis_priorityLevel | string |
| priorityAnalysis_reasoning | string |
| relevanceAnalysis_confidence | string |
| relevanceAnalysis_evidence_commonThemes | dynamic |
| relevanceAnalysis_evidence_distinctThemes | dynamic |
| relevanceAnalysis_reasoning | string |
| relevanceAnalysis_relevanceLevel | string |
| relevanceAnalysis_relevant | bool |
| severityAnalysis_confidence | string |
| severityAnalysis_reasoning | string |
| severityAnalysis_severityLevel | string |
| state | string |
| TenantId | string |
| TimeGenerated | datetime |
| Type | string |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [Google Threat Intelligence](../solutions/google-threat-intelligence.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Google Threat Intelligence Relevance System Alerts](../connectors/googlethreatintelligencerelevancesystemalertsapi.md) |  |

---

## Content Items Using This Table (6)

### Analytic Rules (6)

**In solution [Google Threat Intelligence](../solutions/google-threat-intelligence.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [GTI - Data Leak Alert Detected](../content/google-threat-intelligence-gti-data-leak-alert-detected-d4e5f6a7-b8c9-0123-defa-234567890124-c47c0531.md) |  |
| [GTI - High Relevance Alert Detected](../content/google-threat-intelligence-gti-high-relevance-alert-detected-f6a7b8c9-d0e1-2345-fabc-456789012345-8fc2e3f3.md) |  |
| [GTI - High and Critical Priority Alerts](../content/google-threat-intelligence-gti-high-and-critical-priority-alerts-b2c3d4e5-f6a7-8901-bcde-f12345678902-eac20a8f.md) |  |
| [GTI - Initial Access Broker Alert Detected](../content/google-threat-intelligence-gti-initial-access-broker-alert-detected-c3d4e5f6-a7b8-9012-cdef-123456789013-8ea823e9.md) |  |
| [GTI - Insider Threat Alert Detected](../content/google-threat-intelligence-gti-insider-threat-alert-detected-e5f6a7b8-c9d0-1234-efab-345678901234-1ae6bfc8.md) |  |
| [GTI Relevance System Alert - Incident by Alert ID](../content/google-threat-intelligence-gti-relevance-system-alert-incident-by-alert-id-a1b2c3d4-e5f6-7890-abcd-ef1234567891-4ca388b2.md) |  |

## Parsers Using This Table (2)

### ASIM Parsers (1)

| Parser | Schema | Product | Selection Criteria |
|:-------|:-------|:--------|:-------------------|
| [ASimAlertEventGoogleThreatIntelligence](../asim/asimalerteventgooglethreatintelligence.md) | AlertEvent | Google Threat Intelligence |  |

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [GTIRelevanceSystemAlerts](../parsers/gtirelevancesystemalerts.md) | [Google Threat Intelligence](../solutions/google-threat-intelligence.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

