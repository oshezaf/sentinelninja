# BitsightFindings_data_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✓ Yes |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |

## Schema (34 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/BitsightFindings_data_CL.json)

| Column Name | Type |
|:------------|:-----|
| affects_rating | bool |
| assets | dynamic |
| comments | string |
| company_name | string |
| details | dynamic |
| duration | string |
| evidence_key | string |
| first_seen | datetime |
| grace_period_end_date | string |
| guest_network_end_date | string |
| impacts_risk_vector_details | string |
| last_seen | datetime |
| no_rv_grade_impact_end_date | string |
| related_findings | dynamic |
| remaining_decay | real |
| remediated | string |
| remediation_history | dynamic |
| remediation_history_instant_rescan_details | string |
| remediation_history_last_refresh_reason_code | string |
| remediation_history_last_refresh_requester | string |
| remediation_history_last_refresh_status_date | string |
| remediation_history_last_refresh_status_label | string |
| remediation_history_last_refresh_status_reason | string |
| remediation_history_last_requested_refresh_date | string |
| remediation_history_result_finding_date | string |
| risk_category | string |
| risk_vector | string |
| risk_vector_label | string |
| rolledup_observation_id | string |
| severity | real |
| severity_category | string |
| tags | dynamic |
| temporary_id | string |
| TimeGenerated | datetime |

## Solutions (1)

This table is used by the following solutions:

- [BitSight](../solutions/bitsight.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Bitsight data connector](../connectors/bitsight.md) |  |

---

## Content Items Using This Table (3)

### Analytic Rules (2)

**In solution [BitSight](../solutions/bitsight.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [BitSight - compromised systems detected](../content/bitsight-bitsight-compromised-systems-detected-d68b758a-b117-4cb8-8e1d-dcab5a4a2f21-a4f59745.md) |  |
| [BitSight - diligence risk category detected](../content/bitsight-bitsight-diligence-risk-category-detected-161ed3ac-b242-4b13-8c6b-58716e5e9972-ffcba42e.md) |  |

### Workbooks (1)

**In solution [BitSight](../solutions/bitsight.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [BitSightWorkbook](../content/bitsight-bitsightworkbook-85beb528.md) |  |

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [BitSightFindingsData](../parsers/bitsightfindingsdata.md) | [BitSight](../solutions/bitsight.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

