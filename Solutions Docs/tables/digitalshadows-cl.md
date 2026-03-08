# DigitalShadows_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✓ Yes |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |

## Schema (22 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/DigitalShadows_CL.json)

| Column Name | Type |
|:------------|:-----|
| app_s | string |
| assets_s | string |
| classification_s | string |
| comments_s | string |
| Computer | string |
| description_s | string |
| id_d | real |
| id_g | string |
| impact_description_s | string |
| mitigation_s | string |
| portal_id_s | string |
| raised_t | datetime |
| risk_assessment_risk_level_s | string |
| risk_factors_s | string |
| risk_level_s | string |
| status_s | string |
| TimeGenerated | datetime |
| title_s | datetime |
| triage_id_g | string |
| triage_raised_time_t | datetime |
| triage_updated_time_t | datetime |
| updated_t | datetime |

## Solutions (1)

This table is used by the following solutions:

- [Digital Shadows](../solutions/digital-shadows.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Digital Shadows Searchlight](../connectors/digitalshadowssearchlightazurefunctions.md) |  |

---

## Content Items Using This Table (3)

### Analytic Rules (2)

**In solution [Digital Shadows](../solutions/digital-shadows.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Digital Shadows Incident Creation for exclude-app](../content/digital-shadows-digital-shadows-incident-creation-for-exclude-app-f7abe9c1-1e6c-4317-b907-25769e7764c5-54e3b41d.md) |  |
| [Digital Shadows Incident Creation for include-app](../content/digital-shadows-digital-shadows-incident-creation-for-include-app-ede3071d-9317-45f9-b36c-6a6effee5294-078d7289.md) |  |

### Workbooks (1)

**In solution [Digital Shadows](../solutions/digital-shadows.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [DigitalShadows](../content/digital-shadows-digitalshadows-3362ae13.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

