# GTI_FileScan_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Ingestion API Supported** | ✓ Yes |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Solutions](#solutions)
- [Content Items](#content-items-using-this-table)

## Schema (50 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/GTI_FileScan_CL.json)

| Column Name | Type |
|:------------|:-----|
| _ResourceId | string |
| attributes | dynamic |
| attributes_available_tools | dynamic |
| attributes_expiration | real |
| attributes_gti_assessment | dynamic |
| attributes_gti_assessment_contributing_factors | dynamic |
| attributes_gti_assessment_description | string |
| attributes_gti_assessment_severity | dynamic |
| attributes_gti_assessment_severity_value | string |
| attributes_gti_assessment_threat_score | dynamic |
| attributes_gti_assessment_threat_score_value | real |
| attributes_gti_assessment_verdict | dynamic |
| attributes_gti_assessment_verdict_value | string |
| attributes_gti_cf_gti_confidence_score | real |
| attributes_gti_cf_legitimate_software | bool |
| attributes_gti_cf_malicious_sandbox_verdict | bool |
| attributes_gti_cf_mandiant_analyst_benign | bool |
| attributes_gti_cf_mandiant_analyst_malicious | bool |
| attributes_gti_cf_mandiant_confidence_score | real |
| attributes_gti_cf_normalised_categories | dynamic |
| attributes_gti_cf_pervasive_indicator | bool |
| attributes_last_analysis_date | real |
| attributes_magic | string |
| attributes_md5 | string |
| attributes_names | dynamic |
| attributes_private | bool |
| attributes_sha1 | string |
| attributes_sha256 | string |
| attributes_size | real |
| attributes_ssdeep | string |
| attributes_tags | dynamic |
| attributes_threat_severity | dynamic |
| attributes_threat_severity_last_analysis_date | string |
| attributes_threat_severity_level_description | string |
| attributes_threat_severity_threat_severity_data | dynamic |
| attributes_threat_severity_threat_severity_level | string |
| attributes_threat_severity_version | real |
| attributes_threat_verdict | string |
| attributes_type_description | string |
| attributes_type_tags | dynamic |
| context_attributes | dynamic |
| context_attributes_role | string |
| context_attributes_shared_with_me | bool |
| FileType | string |
| id | string |
| links | dynamic |
| links_self | string |
| TenantId | string |
| TimeGenerated | datetime |
| Type | string |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [Google Threat Intelligence](../solutions/google-threat-intelligence.md)

---

## Content Items Using This Table (1)

### Workbooks (1)

**In solution [Google Threat Intelligence](../solutions/google-threat-intelligence.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [GoogleThreatIntelligence](../content/google-threat-intelligence-googlethreatintelligence-81b272e5.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

