# CyfirmaBIMaliciousMobileAppsAlerts_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✓ Yes |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |

## Schema (30 columns)

**Source:** [Data Collection Rule definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cyfirma%20Brand%20Intelligence/Data%20Connectors/CyfirmaBIAlerts_ccp/CyfirmaBIAlerts_DCR.json)

| Column Name | Type |
|:------------|:-----|
| alert_created_date | datetime |
| alert_object_uid | string |
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
| is_third_party | boolean |
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
| title | string |
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

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [CYFIRMA - Brand Intelligence - Malicious Mobile App High Rule](../content/cyfirma-brand-intelligence-cyfirma-brand-intelligence-malicious-mobile-app-high-rule-3176ac89-b195-48b7-a01e-740a6b26fb2f-0ea9e2ed.md) |  |
| [CYFIRMA - Brand Intelligence - Malicious Mobile App Medium Rule](../content/cyfirma-brand-intelligence-cyfirma-brand-intelligence-malicious-mobile-app-medium-rule-b73e6628-d44c-4ad3-a801-ea225c5744ee-7ad99738.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

