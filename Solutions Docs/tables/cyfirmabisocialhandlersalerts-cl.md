# CyfirmaBISocialHandlersAlerts_CL

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

## Schema (33 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/CyfirmaBISocialHandlersAlerts_CL.json)

| Column Name | Type |
|:------------|:-----|
| action | string |
| alert_object_uid | string |
| Alert_title | string |
| alert_uid | string |
| asset_comments | string |
| asset_type | string |
| asset_value | string |
| category | string |
| comments | string |
| created_date | datetime |
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
| source_type | dynamic |
| status | string |
| sub_category | string |
| TimeGenerated | datetime |
| uid | string |
| use_cases | string |

## Solutions (1)

This table is used by the following solutions:

- [Cyfirma Brand Intelligence](../solutions/cyfirma-brand-intelligence.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [CYFIRMA Brand Intelligence](../connectors/cyfirmabrandintelligencealertsdc.md) |  |

---

## Content Items Using This Table (2)

### Analytic Rules (2)

**In solution [Cyfirma Brand Intelligence](../solutions/cyfirma-brand-intelligence.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [CYFIRMA - Brand Intelligence - Social Media Handle Impersonation Detected High Rule](../content/cyfirma-brand-intelligence-cyfirma-brand-intelligence-social-media-handle-impersonation-detected-high-ru-22f49d67-7da7-4809-8d07-89e4478aa6b0-95ffee3b.md) |  |
| [CYFIRMA - Brand Intelligence - Social Media Handle Impersonation Detected Medium Rule](../content/cyfirma-brand-intelligence-cyfirma-brand-intelligence-social-media-handle-impersonation-detected-medium--710f4755-490d-4fa7-aef0-43b5a66edc7b-bb5ed364.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

