# DetectionAlerts_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Ingestion API Supported** | ✓ Yes |

## Contents

- [Schema](#schema)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Content Items](#content-items-using-this-table)
- [Parsers](#parsers-using-this-table)

## Schema (20 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/DetectionAlerts_CL.json)

| Column Name | Type |
|:------------|:-----|
| _ResourceId | string |
| collectionElements | dynamic |
| createdTime | datetime |
| detection | dynamic |
| detectionTime | datetime |
| detectionTimingDetails | dynamic |
| DetectionType | string |
| id | string |
| latencyMetrics | dynamic |
| latencyMetrics_ingestionLatency | string |
| latencyMetrics_newestEventTime | datetime |
| latencyMetrics_newestIngestionTime | datetime |
| latencyMetrics_oldestEventTime | datetime |
| latencyMetrics_oldestIngestionTime | datetime |
| TenantId | string |
| TimeGenerated | datetime |
| timeWindow | dynamic |
| timeWindow_endTime | datetime |
| timeWindow_startTime | datetime |
| Type | string |

## Solutions (1)

This table is used by the following solutions:

- [GoogleSecOps](../solutions/googlesecops.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Google SecOps Detection Alerts](../connectors/gsdetectionalerts.md) |  |

---

## Content Items Using This Table (4)

### Analytic Rules (4)

**In solution [GoogleSecOps](../solutions/googlesecops.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Google SecOps - Detection Alerts](../content/googlesecops-google-secops-detection-alerts-f6b0c254-8f7d-4a1b-d5c2-0e4a6b9f2d8a-5c1e3e3b.md) |  |
| [Google SecOps - GCTI Threat Intelligence Finding](../content/googlesecops-google-secops-gcti-threat-intelligence-finding-b3e7f921-5c4a-4d8e-a2f9-7b1d3e6c9a5f-d7741376.md) |  |
| [Google SecOps - Multi-Event Correlated Alert](../content/googlesecops-google-secops-multi-event-correlated-alert-d4f8a032-6d5b-4e9f-b3a0-8c2e4f7d0b6e-b1a07461.md) |  |
| [Google SecOps - Single-Event Alert](../content/googlesecops-google-secops-single-event-alert-e5a9b143-7e6c-4f0a-c4b1-9d3f5a8e1c7f-4b55b757.md) |  |

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [GoogleSecOpsDetectionAlerts](../parsers/googlesecopsdetectionalerts.md) | [GoogleSecOps](../solutions/googlesecops.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

