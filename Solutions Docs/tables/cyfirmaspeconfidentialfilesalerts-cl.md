# CyfirmaSPEConfidentialFilesAlerts_CL

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

## Schema (29 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/CyfirmaSPEConfidentialFilesAlerts_CL.json)

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
| [CYFIRMA - Social and Public Exposure - Confidential Files Information Exposure Rule](../content/cyfirma-digital-risk-cyfirma-social-and-public-exposure-confidential-files-information-exposure-rule-67e9c4aa-a2fa-4e4e-9272-1a8da41475c6-3f32254f.md) |  |
| [CYFIRMA - Social and Public Exposure - Confidential Files Information Exposure Rule](../content/cyfirma-digital-risk-cyfirma-social-and-public-exposure-confidential-files-information-exposure-rule-a2984be5-8d69-4139-b98f-e89c9c421c27-d4335323.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

