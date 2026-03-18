# CyfirmaDBWMRansomwareAlerts_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✓ Yes ([source](https://learn.microsoft.com/azure/sentinel/data-connectors-reference)) |

## Contents

- [Schema](#schema)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Content Items](#content-items-using-this-table)

## Schema (29 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/CyfirmaDBWMRansomwareAlerts_CL.json)

| Column Name | Type |
|:------------|:-----|
| alert_object_uid | string |
| Alert_title | string |
| alert_uid | string |
| asset_comments | string |
| asset_type | string |
| category | string |
| comments | string |
| description | string |
| domain | string |
| dr_domain | string |
| dr_sub_domain | string |
| first_seen | datetime |
| impact | string |
| last_seen | dynamic |
| notes | dynamic |
| published_date | datetime |
| risk_score | int |
| safe_flag_comments | string |
| safe_flag_marked_by | string |
| safe_flag_marked_date | string |
| severity | string |
| signature | string |
| source | string |
| status | string |
| sub_category | string |
| threat_actors | dynamic |
| TimeGenerated | datetime |
| uid | string |
| use_cases | string |

## Solutions (1)

This table is used by the following solutions:

- [Cyfirma Digital Risk](../solutions/cyfirma-digital-risk.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [CYFIRMA Digital Risk](../connectors/cyfirmadigitalriskalertsconnector.md) |  |

---

## Content Items Using This Table (2)

### Analytic Rules (2)

**In solution [Cyfirma Digital Risk](../solutions/cyfirma-digital-risk.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [CYFIRMA - Data Breach and Web Monitoring - Ransomware Exposure Detected Rule](../content/cyfirma-digital-risk-cyfirma-data-breach-and-web-monitoring-ransomware-exposure-detected-rule-ed1aabc1-e1c1-42f4-abac-fd5637730f13-b632239e.md) |  |
| [CYFIRMA - Data Breach and Web Monitoring - Ransomware Exposure Detected Rule](../content/cyfirma-digital-risk-cyfirma-data-breach-and-web-monitoring-ransomware-exposure-detected-rule-d5f9a6fe-7fd2-488c-8690-0ca24fba43dc-2e4543c4.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

