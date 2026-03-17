# Tenable_VM_Vuln_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✓ Yes ([source](https://learn.microsoft.com/azure/sentinel/data-connectors-reference)) |

## Schema (127 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/Tenable_VM_Vuln_CL.json)

| Column Name | Type |
|:------------|:-----|
| asset | dynamic |
| asset_agent_uuid | string |
| asset_bios_uuid | string |
| asset_device_type | string |
| asset_fqdn | string |
| asset_hostname | string |
| asset_ipv4 | string |
| asset_ipv6 | string |
| asset_last_authenticated_results | datetime |
| asset_last_scan_target | string |
| asset_mac_address | string |
| asset_netbios_name | string |
| asset_network_id | string |
| asset_operating_system | dynamic |
| asset_serial_number | string |
| asset_tracked | bool |
| asset_uuid | string |
| finding_id | string |
| first_found | datetime |
| indexed | datetime |
| last_fixed | datetime |
| last_found | datetime |
| output | string |
| plugin | dynamic |
| plugin_bid | dynamic |
| plugin_checks_for_default_account | bool |
| plugin_checks_for_malware | bool |
| plugin_cpe | dynamic |
| plugin_cve | dynamic |
| plugin_cvss3_base_score | real |
| plugin_cvss3_temporal_score | real |
| plugin_cvss3_temporal_vector | dynamic |
| plugin_cvss3_temporal_vector_exploitability | string |
| plugin_cvss3_temporal_vector_raw | string |
| plugin_cvss3_temporal_vector_remediation_level | string |
| plugin_cvss3_temporal_vector_report_confidence | string |
| plugin_cvss3_vector | dynamic |
| plugin_cvss3_vector_access_complexity | string |
| plugin_cvss3_vector_access_vector | string |
| plugin_cvss3_vector_availability_impact | string |
| plugin_cvss3_vector_confidentiality_impact | string |
| plugin_cvss3_vector_integrity_impact | string |
| plugin_cvss3_vector_raw | string |
| plugin_cvss_base_score | real |
| plugin_cvss_temporal_score | real |
| plugin_cvss_temporal_vector | dynamic |
| plugin_cvss_temporal_vector_exploitability | string |
| plugin_cvss_temporal_vector_raw | string |
| plugin_cvss_temporal_vector_remediation_level | string |
| plugin_cvss_temporal_vector_report_confidence | string |
| plugin_cvss_vector | dynamic |
| plugin_cvss_vector_access_complexity | string |
| plugin_cvss_vector_access_vector | string |
| plugin_cvss_vector_authentication | string |
| plugin_cvss_vector_availability_impact | string |
| plugin_cvss_vector_confidentiality_impact | string |
| plugin_cvss_vector_integrity_impact | string |
| plugin_cvss_vector_raw | string |
| plugin_description | string |
| plugin_exploit_available | bool |
| plugin_exploit_framework_canvas | bool |
| plugin_exploit_framework_core | bool |
| plugin_exploit_framework_d2_elliot | bool |
| plugin_exploit_framework_exploithub | bool |
| plugin_exploit_framework_metasploit | bool |
| plugin_exploitability_ease | string |
| plugin_exploited_by_malware | bool |
| plugin_exploited_by_nessus | bool |
| plugin_family | string |
| plugin_family_id | real |
| plugin_has_patch | bool |
| plugin_has_workaround | bool |
| plugin_id | real |
| plugin_in_the_news | bool |
| plugin_modification_date | datetime |
| plugin_ms_bulletin | dynamic |
| plugin_name | string |
| plugin_patch_publication_date | datetime |
| plugin_publication_date | datetime |
| plugin_risk_factor | string |
| plugin_see_also | dynamic |
| plugin_solution | string |
| plugin_stig_severity | string |
| plugin_synopsis | string |
| plugin_type | string |
| plugin_unsupported_by_vendor | bool |
| plugin_vendor_severity | string |
| plugin_vendor_unpatched | bool |
| plugin_version | string |
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
| plugin_vuln_publication_date | datetime |
| plugin_workaround | string |
| plugin_workaround_published | datetime |
| plugin_workaround_type | string |
| plugin_xrefs | dynamic |
| port | dynamic |
| port_port | real |
| port_protocol | string |
| port_service | string |
| recast_reason | string |
| recast_rule_uuid | string |
| resurfaced_date | datetime |
| scan | dynamic |
| scan_last_scan_target | string |
| scan_schedule_uuid | string |
| scan_started_at | datetime |
| scan_target | string |
| scan_uuid | string |
| severity | string |
| severity_default_id | real |
| severity_id | real |
| severity_modification_type | string |
| source | string |
| state | string |
| time_taken_to_fix | string |
| TimeGenerated | datetime |

## Solutions (1)

This table is used by the following solutions:

- [Tenable App](../solutions/tenable-app.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Tenable Vulnerability Management](../connectors/tenablevm.md) |  |

---

## Content Items Using This Table (1)

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [TenableVMVulnerabilities](../parsers/tenablevmvulnerabilities.md) | [Tenable App](../solutions/tenable-app.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

