# TaniumThreatResponse_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
| **Ingestion API Supported** | ✓ Yes |

## Contents

- [Schema](#schema)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Content Items](#content-items-using-this-table)

## Schema (68 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Tanium%5CData%20Connectors/Table_ThreatResponseAlerts.json)

| Column Name | Type | Description |
|:------------|:-----|:------------|
| Alert_Id_g | guid |  |
| Computer_IP_s | string |  |
| Computer_Name_s | string |  |
| EID | string |  |
| Impact_Score_s | string |  |
| Intel_Id_d | real |  |
| Intel_Labels_s | string |  |
| Intel_Name_s | string |  |
| Intel_Type_s | string |  |
| IntelSource | string |  |
| Link | string |  |
| Match_Details_config_id_d | real |  |
| Match_Details_config_rev_id_d | real |  |
| Match_Details_finding_artifact_artifact_hash_s | string |  |
| Match_Details_finding_artifact_instance_hash_s | string |  |
| Match_Details_finding_artifact_windows_defender_event | string |  |
| Match_Details_finding_description_s | string |  |
| Match_Details_finding_domain_s | string |  |
| Match_Details_finding_finding_id_s | string |  |
| Match_Details_finding_first_seen_t | datetime |  |
| Match_Details_finding_hunt_id_s | string |  |
| Match_Details_finding_intel_id_s | string |  |
| Match_Details_finding_last_seen_t | datetime |  |
| Match_Details_finding_reporting_id_s | string |  |
| Match_Details_finding_source_name_s | string |  |
| Match_Details_finding_system_info_bits_d | real |  |
| Match_Details_finding_system_info_build_number_s | string |  |
| Match_Details_finding_system_info_logged_on_user_s | string |  |
| Match_Details_finding_system_info_os_s | string |  |
| Match_Details_finding_system_info_patch_level_s | string |  |
| Match_Details_finding_system_info_platform_s | string |  |
| Match_Details_finding_threat_id_s | string |  |
| Match_Details_finding_type_id_s | string |  |
| Match_Details_finding_whats_s | string |  |
| Match_Details_intel_id_d | real |  |
| Match_Details_json | string | The raw json from the match details. |
| Match_Details_match_contexts_s | string |  |
| Match_Details_match_hash_s | string |  |
| Match_Details_match_properties_args_s | string |  |
| Match_Details_match_properties_file_fullpath_s | string |  |
| Match_Details_match_properties_file_md5_g | guid |  |
| Match_Details_match_properties_file_sha1_s | string |  |
| Match_Details_match_properties_file_sha256_s | string |  |
| Match_Details_match_properties_file_size_s | string |  |
| Match_Details_match_properties_name_s | string |  |
| Match_Details_match_properties_parent_args_s | string |  |
| Match_Details_match_properties_parent_file_s | string |  |
| Match_Details_match_properties_parent_name_s | string |  |
| Match_Details_match_properties_parent_parent_s | string |  |
| Match_Details_match_properties_parent_pid_d | real |  |
| Match_Details_match_properties_parent_ppid_d | real |  |
| Match_Details_match_properties_parent_recorder_table_id_s | string |  |
| Match_Details_match_properties_parent_recorder_unique_id_s | string |  |
| Match_Details_match_properties_parent_start_time_t | datetime |  |
| Match_Details_match_properties_parent_user_s | string |  |
| Match_Details_match_properties_pid_d | real |  |
| Match_Details_match_properties_ppid_d | real |  |
| Match_Details_match_properties_recorder_table_id_s | string |  |
| Match_Details_match_properties_recorder_unique_id_s | string |  |
| Match_Details_match_properties_start_time_t | datetime |  |
| Match_Details_match_properties_user_s | string |  |
| Match_Details_match_source_s | string |  |
| Match_Details_match_type_s | string |  |
| Match_Details_match_version_d | real |  |
| MatchDets_finding_artifact_WindowsDefenderEvent_timestamp_ms | string |  |
| MITRE_Techniques_s | string |  |
| TimeGenerated | datetime | The time at which the data was generated |
| Timestamp_t | datetime |  |

## Solutions (1)

This table is used by the following solutions:

- [Tanium](../solutions/tanium.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Tanium's CCF Push Connector](../connectors/taniumconnector.md) |  |

---

## Content Items Using This Table (2)

### Analytic Rules (1)

**In solution [Tanium](../solutions/tanium.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Tanium Threat Response Alerts](../content/tanium-tanium-threat-response-alerts-dd9aa0ff-7ac1-4448-879c-e1a18d5890b4-94582d48.md) |  |

### Workbooks (1)

**In solution [Tanium](../solutions/tanium.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [TaniumWorkbook](../content/tanium-taniumworkbook-97052723.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

