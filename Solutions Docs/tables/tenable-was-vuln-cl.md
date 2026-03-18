# Tenable_WAS_Vuln_CL

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

## Schema (92 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/Tenable_WAS_Vuln_CL.json)

| Column Name | Type |
|:------------|:-----|
| asset | dynamic |
| asset_fqdn | string |
| asset_ipv4 | string |
| asset_ipv4s | dynamic |
| asset_uuid | string |
| finding_id | string |
| first_found | datetime |
| http_method | string |
| indexed_at | datetime |
| input_name | string |
| input_type | string |
| last_fixed | datetime |
| last_found | datetime |
| last_observed | datetime |
| output | string |
| payload | string |
| plugin | dynamic |
| plugin_bid | dynamic |
| plugin_cpe | dynamic |
| plugin_cve | dynamic |
| plugin_cvss2_base_score | real |
| plugin_cvss2_temporal_vector | dynamic |
| plugin_cvss2_vector | dynamic |
| plugin_cvss2_vector_access_complexity | string |
| plugin_cvss2_vector_access_vector | string |
| plugin_cvss2_vector_authentication | string |
| plugin_cvss2_vector_availability_impact | string |
| plugin_cvss2_vector_confidentiality_impact | string |
| plugin_cvss2_vector_integrity_impact | string |
| plugin_cvss2_vector_raw | string |
| plugin_cvss3_base_score | real |
| plugin_cvss3_temporal_vector | dynamic |
| plugin_cvss3_vector | dynamic |
| plugin_cvss3_vector_access_complexity | string |
| plugin_cvss3_vector_access_vector | string |
| plugin_cvss3_vector_availability_impact | string |
| plugin_cvss3_vector_confidentiality_impact | string |
| plugin_cvss3_vector_integrity_impact | string |
| plugin_cvss3_vector_raw | string |
| plugin_cwe | dynamic |
| plugin_description | string |
| plugin_exploit_frameworks | dynamic |
| plugin_exploitability_ease | string |
| plugin_exploited_by_malware | bool |
| plugin_id | real |
| plugin_in_the_news | bool |
| plugin_intel_type | string |
| plugin_locale | string |
| plugin_modification_date | datetime |
| plugin_name | string |
| plugin_original_risk_factor_num | real |
| plugin_owasp_2010 | dynamic |
| plugin_owasp_2013 | dynamic |
| plugin_owasp_2017 | dynamic |
| plugin_owasp_2021 | dynamic |
| plugin_owasp_api_2019 | dynamic |
| plugin_patch_publication_date | datetime |
| plugin_policy | dynamic |
| plugin_public_display | real |
| plugin_publication_date | datetime |
| plugin_risk_factor | string |
| plugin_see_also | dynamic |
| plugin_solution | string |
| plugin_synopsis | string |
| plugin_type | string |
| plugin_vpr | dynamic |
| plugin_vpr_drivers | dynamic |
| plugin_vpr_drivers_age_of_vuln | dynamic |
| plugin_vpr_drivers_age_of_vuln_lower_bound | real |
| plugin_vpr_drivers_cvss3_impact_score | real |
| plugin_vpr_drivers_cvss_impact_score_predicted | bool |
| plugin_vpr_drivers_exploit_code_maturity | string |
| plugin_vpr_drivers_product_coverage | string |
| plugin_vpr_drivers_threat_intensity_last28 | string |
| plugin_vpr_drivers_threat_sources_last28 | dynamic |
| plugin_vpr_score | real |
| plugin_vpr_updated | datetime |
| plugin_wasc | dynamic |
| plugin_xrefs | dynamic |
| proof | string |
| recast_reason | string |
| recast_rule_uuid | string |
| scan | dynamic |
| scan_completed_at | datetime |
| scan_uuid | string |
| severity | string |
| severity_default_id | real |
| severity_id | real |
| severity_modification_type | string |
| state | string |
| TimeGenerated | datetime |
| url | string |

## Solutions (1)

This table is used by the following solutions:

- [Tenable App](../solutions/tenable-app.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Tenable Vulnerability Management](../connectors/tenablevm.md) |  |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

