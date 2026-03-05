# Tenable_IO_Vuln_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
| **Ingestion API Supported** | ✓ Yes |

## Schema (65 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/Tenable_IO_Vuln_CL.json)

| Column Name | Type |
|:------------|:-----|
| _ResourceId | string |
| asset_fqdn_s | string |
| asset_hostname_s | string |
| asset_ipv4_s | string |
| asset_network_id_g | string |
| asset_operating_system_s | string |
| asset_tracked_b | bool |
| asset_uuid_g | string |
| Computer | string |
| first_found_t | datetime |
| indexed_at_s | string |
| last_found_t | datetime |
| ManagementGroupName | string |
| MG | string |
| output_s | string |
| plugin_cve_s | string |
| plugin_cvss_base_score_d | real |
| plugin_cvss_temporal_score_d | real |
| plugin_cvss_temporal_vector_exploitability_s | string |
| plugin_cvss_temporal_vector_raw_s | string |
| plugin_cvss_temporal_vector_remediation_level_s | string |
| plugin_cvss_temporal_vector_report_confidence_s | string |
| plugin_cvss_vector_access_complexity_s | string |
| plugin_cvss_vector_access_vector_s | string |
| plugin_cvss_vector_authentication_s | string |
| plugin_cvss_vector_availability_impact_s | string |
| plugin_cvss_vector_confidentiality_impact_s | string |
| plugin_cvss_vector_integrity_impact_s | string |
| plugin_cvss_vector_raw_s | string |
| plugin_description_s | string |
| plugin_family_id_d | real |
| plugin_family_s | string |
| plugin_has_patch_b | bool |
| plugin_id_d | real |
| plugin_name_s | string |
| plugin_risk_factor_s | string |
| plugin_see_also_s | string |
| plugin_solution_s | string |
| plugin_synopsis_s | string |
| plugin_vpr_drivers_age_of_vuln_lower_bound_d | real |
| plugin_vpr_drivers_age_of_vuln_upper_bound_d | real |
| plugin_vpr_drivers_cvss3_impact_score_d | real |
| plugin_vpr_drivers_cvss_impact_score_predicted_b | bool |
| plugin_vpr_drivers_exploit_code_maturity_s | string |
| plugin_vpr_drivers_product_coverage_s | string |
| plugin_vpr_drivers_threat_intensity_last28_s | string |
| plugin_vpr_drivers_threat_sources_last28_s | string |
| plugin_vpr_score_d | real |
| plugin_vpr_updated_t | datetime |
| port_port_d | real |
| port_protocol_s | string |
| RawData | string |
| scan_completed_at_t | datetime |
| scan_schedule_uuid_s | string |
| scan_started_at_t | datetime |
| scan_uuid_s | string |
| severity_default_id_d | real |
| severity_id_d | real |
| severity_modification_type_s | string |
| severity_s | string |
| SourceSystem | string |
| state_s | string |
| TenantId | string |
| TimeGenerated | datetime |
| Type | string |

## Solutions (1)

This table is used by the following solutions:

- [TenableIO](../solutions/tenableio.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Tenable.io Vulnerability Management](../connectors/tenableioapi.md) |  |

---

## Content Items Using This Table (1)

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [TenableIOVulnerabilities](../parsers/tenableiovulnerabilities.md) | [TenableIO](../solutions/tenableio.md) ⚠️ |  |

> ⚠️ Parsers marked with ⚠️ are not listed in their Solution JSON file.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

