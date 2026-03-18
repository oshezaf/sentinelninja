# CyfirmaSPESocialThreatAlerts_CL

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

## Schema (30 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/CyfirmaSPESocialThreatAlerts_CL.json)

| Column Name | Type |
|:------------|:-----|
| alert_object_uid | string |
| Alert_title | string |
| alert_uid | string |
| asset_comments | string |
| asset_name | string |
| asset_type | string |
| asset_value | string |
| category | string |
| description | string |
| domain | string |
| dr_domain | string |
| dr_sub_domain | string |
| first_seen | datetime |
| impact | string |
| last_seen | datetime |
| notes | dynamic |
| posted_date | string |
| recommendation | string |
| risk_score | int |
| safe_flag_comments | string |
| safe_flag_marked_by | string |
| safe_flag_marked_date | string |
| severity | string |
| signature | string |
| source | string |
| status | string |
| sub_category | string |
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
| [CYFIRMA - Social and Public Exposure -  Social Media Threats  Activity Detected Rule](../content/cyfirma-digital-risk-cyfirma-social-and-public-exposure-social-media-threats-activity-detected-rule-4fe04459-13f1-4ff7-9b7c-f9be0c2aad6d-2e67b8fc.md) |  |
| [CYFIRMA - Social and Public Exposure -  Social Media Threats  Activity Detected Rule](../content/cyfirma-digital-risk-cyfirma-social-and-public-exposure-social-media-threats-activity-detected-rule-b8149f2f-54da-4f7b-98e1-c01ca47e1e55-2aa4324a.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

