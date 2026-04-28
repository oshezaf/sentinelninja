# argsentdc_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

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

## Schema (38 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/argsentdc_CL.json)

| Column Name | Type |
|:------------|:-----|
| acknowledged_by | dynamic |
| acknowledged_date | dynamic |
| alert_data | dynamic |
| analysis_report | dynamic |
| attachments | dynamic |
| category | string |
| closed_by | dynamic |
| closure_date | dynamic |
| closure_reason | dynamic |
| closure_reason_description | dynamic |
| confidence | int |
| created_by | dynamic |
| created_date | datetime |
| description | string |
| environment | string |
| event_title | string |
| event_type | string |
| id | int |
| impacts | dynamic |
| indicators | dynamic |
| iocs | dynamic |
| mitre | dynamic |
| modification_date | datetime |
| publish_date | string |
| recommendation | string |
| ref_id | string |
| related_assets | dynamic |
| related_entities | dynamic |
| severity | string |
| source | string |
| source_category | string |
| status | string |
| tags | dynamic |
| targeted_brands | dynamic |
| targeted_vectors | dynamic |
| threat_actor | string |
| ticket_id | dynamic |
| TimeGenerated | datetime |

## Solutions (1)

This table is used by the following solutions:

- [Check Point Cyberint Alerts](../solutions/check-point-cyberint-alerts.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Check Point Cyberint Alerts Connector (via Codeless Connector Platform)](../connectors/checkpointcyberintalerts.md) |  |

---

## Content Items Using This Table (3)

### Analytic Rules (1)

**In solution [Check Point Cyberint Alerts](../solutions/check-point-cyberint-alerts.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Check Point Exposure Management - Alert Ingestion Anomaly](../content/check-point-cyberint-alerts-check-point-exposure-management-alert-ingestion-anomaly-8d3b9c7e-5a2f-4e1d-b6c8-3f9a7e2d1b4c-1545e994.md) |  |

### Workbooks (1)

**In solution [Check Point Cyberint Alerts](../solutions/check-point-cyberint-alerts.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [CPEMAlertOverview](../content/check-point-cyberint-alerts-cpemalertoverview-1fe40da5.md) |  |

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [CPEMAlerts](../parsers/cpemalerts.md) | [Check Point Cyberint Alerts](../solutions/check-point-cyberint-alerts.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

