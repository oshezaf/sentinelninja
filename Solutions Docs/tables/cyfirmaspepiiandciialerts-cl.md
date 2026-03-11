# CyfirmaSPEPIIAndCIIAlerts_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✓ Yes |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |

## Schema (31 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/CyfirmaSPEPIIAndCIIAlerts_CL.json)

| Column Name | Type |
|:------------|:-----|
| alert_object_uid | string |
| Alert_title | string |
| alert_uid | string |
| asset_comments | string |
| asset_name | string |
| asset_type | string |
| asset_value | string |
| breached_data | string |
| category | string |
| description | string |
| domain | string |
| dr_domain | string |
| dr_sub_domain | string |
| first_seen | datetime |
| impact | string |
| last_seen | string |
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

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [CYFIRMA - Social and Public Exposure - Exposure of PII/CII in Public Domain Rule](../content/cyfirma-digital-risk-cyfirma-social-and-public-exposure-exposure-of-pii-cii-in-public-domain-rule-52d71822-41e4-4c21-b36f-400294f2b43a-b233ea7b.md) |  |
| [CYFIRMA - Social and Public Exposure - Exposure of PII/CII in Public Domain Rule](../content/cyfirma-digital-risk-cyfirma-social-and-public-exposure-exposure-of-pii-cii-in-public-domain-rule-b484f224-687f-4406-af8a-ff019f9f2c24-d3be53cc.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

