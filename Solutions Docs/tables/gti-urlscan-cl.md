# GTI_URLScan_CL

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

## Schema (52 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/GTI_URLScan_CL.json)

| Column Name | Type |
|:------------|:-----|
| _ResourceId | string |
| attributes_crowdsourced_ids_results | dynamic |
| attributes_detected_brands | dynamic |
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
| attributes_gti_cf_mandiant_confidence_score | real |
| attributes_gti_cf_pervasive_indicator | bool |
| attributes_gti_cf_safebrowsing_verdict | string |
| attributes_html_meta | dynamic |
| attributes_html_meta_viewport | dynamic |
| attributes_last_final_url | string |
| attributes_last_http_response_code | real |
| attributes_last_http_response_content_length | real |
| attributes_last_http_response_content_sha256 | string |
| attributes_last_http_response_headers | dynamic |
| attributes_last_http_response_headers_age | string |
| attributes_last_http_response_headers_allow | string |
| attributes_last_http_response_headers_cf_cache_status | string |
| attributes_last_http_response_headers_cf_ray | string |
| attributes_last_http_response_headers_content_encoding | string |
| attributes_last_http_response_headers_content_type | string |
| attributes_last_http_response_headers_date | string |
| attributes_last_http_response_headers_last_modified | string |
| attributes_last_http_response_headers_server | string |
| attributes_outgoing_links | dynamic |
| attributes_private | bool |
| attributes_redirection_chain | dynamic |
| attributes_sandbox_verdicts | dynamic |
| attributes_sigma_analysis_results | dynamic |
| attributes_sigma_analysis_summary | dynamic |
| attributes_tags | dynamic |
| attributes_title | string |
| attributes_tld | string |
| attributes_trackers | dynamic |
| attributes_url | string |
| context_attributes_role | string |
| context_attributes_shared_with_me | bool |
| id | string |
| links_self | string |
| TenantId | string |
| TimeGenerated | datetime |
| Type | string |
| UrlType | string |

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

