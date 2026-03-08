# Netskope_Alerts_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
| **Ingestion API Supported** | ✓ Yes |

## Schema (286 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/Netskope_Alerts_CL.json)

| Column Name | Type |
|:------------|:-----|
| _correlation_id_g | string |
| _event_id_g | string |
| _forwarded_by_s | string |
| _generator_id_g | string |
| _id_s | string |
| _insertion_epoch_timestamp_t | datetime |
| _raw_event_inserted_at_d | real |
| _ResourceId | string |
| _seq_id_d | real |
| _service_identifier_s | string |
| _skip_geoip_lookup_s | string |
| access_method_s | string |
| acked_s | string |
| act_user_s | string |
| action_s | string |
| actions_taken_s | string |
| activity_s | string |
| aggregated_user_s | string |
| alert_id_g | string |
| alert_name_s | string |
| alert_s | string |
| alert_type_s | string |
| all_policy_matches_s | string |
| app_activity_s | string |
| app_name_s | string |
| app_s | string |
| app_session_id_s | string |
| appcategory_s | string |
| appsuite_s | string |
| audit_category_s | string |
| audit_type_s | string |
| breach_date_t | datetime |
| breach_description_s | string |
| breach_id_s | string |
| breach_media_references_s | string |
| breach_score_s | string |
| breach_target_references_s | string |
| browser_s | string |
| browser_session_id_s | string |
| browser_version_s | string |
| Category | string |
| cci_d | real |
| ccl_s | string |
| client_bytes_d | real |
| Computer | string |
| conn_duration_d | real |
| connection_id_d | real |
| count_d | real |
| data_type_s | string |
| department_s | string |
| detection_engine_s | string |
| device_classification_s | string |
| device_s | string |
| distinguishedname_s | string |
| division_s | string |
| dlp_fail_reason_s | string |
| dlp_file_s | string |
| dlp_incident_id_s | string |
| dlp_is_unique_count_b | bool |
| dlp_is_unique_count_s | string |
| dlp_parent_id_s | string |
| dlp_profile_s | string |
| dlp_rule_count_d | real |
| dlp_rule_s | string |
| dlp_rule_severity_s | string |
| dlp_scan_failed_s | string |
| dlp_unique_count_d | real |
| dst_country_s | string |
| dst_geoip_src_d | real |
| dst_latitude_d | real |
| dst_location_s | string |
| dst_longitude_d | real |
| dst_region_s | string |
| dst_timezone_s | string |
| dst_zipcode_s | string |
| dsthost_s | string |
| dstip_s | string |
| dstport_d | real |
| edr_app_s | string |
| email_source_s | string |
| employeetype_s | string |
| endpoint_count_d | real |
| endpoints_s | string |
| enterprise_id_s | string |
| enterprise_s | string |
| event_type_s | string |
| evt_src_chnl_s | string |
| exposure_s | string |
| external_collaborator_count_d | real |
| external_email_d | real |
| file_category_s | string |
| file_id_s | string |
| file_lang_s | string |
| file_name_s | string |
| file_path_s | string |
| file_size_d | real |
| file_type_s | string |
| from_object_s | string |
| from_storage_s | string |
| from_user_category_s | string |
| from_user_s | string |
| fromlogs_s | string |
| hostname_s | string |
| incident_id_d | real |
| instance_id_s | string |
| instance_s | string |
| internal_collaborator_count_d | real |
| justification_reason_s | string |
| justification_type_s | string |
| legal_hold_profile_name_s | string |
| lh_custodian_email_s | string |
| lh_custodian_name_s | string |
| lh_dest_app_s | string |
| lh_dest_instance_s | string |
| lh_fileid_s | string |
| lh_filename_s | string |
| lh_filepath_s | string |
| lh_original_filename_s | string |
| lh_shared_s | string |
| lh_shared_with_s | string |
| lh_version_d | real |
| local_md5_g | string |
| local_sha256_s | string |
| log_file_name_s | string |
| mail_s | string |
| malicious_s | string |
| malsite_active_s | string |
| malsite_as_number_s | string |
| malsite_category_s | string |
| malsite_city_s | string |
| malsite_confidence_d | real |
| malsite_consecutive_s | string |
| malsite_country_s | string |
| malsite_first_seen_t | datetime |
| malsite_hostility_s | string |
| malsite_id_s | string |
| malsite_ip_host_s | string |
| malsite_isp_s | string |
| malsite_last_seen_t | datetime |
| malsite_latitude_d | real |
| malsite_longitude_d | real |
| malsite_region_s | string |
| malsite_reputation_s | string |
| malware_id_s | string |
| malware_name_s | string |
| malware_profile_s | string |
| malware_severity_s | string |
| malware_type_s | string |
| managed_app_s | string |
| ManagementGroupName | string |
| managementid_g | string |
| managementid_s | string |
| manager_s | string |
| matched_username_s | string |
| md5_g | string |
| MG | string |
| mime_type_s | string |
| ml_detection_s | string |
| modified_d | real |
| netskope_activity_s | string |
| netskope_pop_s | string |
| network_s | string |
| notify_template_s | string |
| nsdeviceuid_g | string |
| nsdeviceuid_s | string |
| numbytes_d | real |
| object_count_d | real |
| object_id_s | string |
| object_s | string |
| object_type_s | string |
| org_s | string |
| organization_unit_s | string |
| orig_ty_s | string |
| os_s | string |
| os_version_s | string |
| other_categories_s | string |
| owner_s | string |
| page_s | string |
| page_site_s | string |
| parent_id_s | string |
| password_type_s | string |
| policy_actions_s | string |
| policy_id_s | string |
| policy_s | string |
| profile_hits_s | string |
| profile_id_s | string |
| protocol_s | string |
| q_admin_s | string |
| q_app_s | string |
| q_instance_s | string |
| q_original_filename_s | string |
| q_original_filepath_s | string |
| q_original_shared_s | string |
| q_original_version_s | string |
| q_shared_with_s | string |
| quarantine_action_reason_s | string |
| quarantine_app_s | string |
| quarantine_failure_s | string |
| quarantine_file_id_s | string |
| quarantine_file_name_s | string |
| quarantine_profile_id_s | string |
| quarantine_profile_s | string |
| RawData | string |
| referer_s | string |
| remediation_profile_s | string |
| req_cnt_d | real |
| request_id_s | string |
| resp_cnt_d | real |
| sa_profile_id_d | real |
| sa_profile_name_s | string |
| sa_rule_id_s | string |
| sa_rule_name_s | string |
| sa_rule_severity_s | string |
| samaccountname_s | string |
| samaccounttype_s | string |
| sanctioned_instance_s | string |
| scan_type_s | string |
| scanner_result_s | string |
| serial_s | string |
| server_bytes_d | real |
| severity_id_d | real |
| severity_level_id_d | real |
| severity_level_s | string |
| severity_s | string |
| sfwder_s | string |
| sha256_s | string |
| shared_domains_s | string |
| shared_with_s | string |
| site_s | string |
| SourceSystem | string |
| src_country_s | string |
| src_geoip_src_d | real |
| src_latitude_d | real |
| src_location_s | string |
| src_longitude_d | real |
| src_region_s | string |
| src_time_s | string |
| src_timezone_s | string |
| src_zipcode_s | string |
| srcip_s | string |
| suppression_end_time_t | datetime |
| suppression_key_s | string |
| suppression_start_time_t | datetime |
| telemetry_app_s | string |
| tenant_name_s | string |
| TenantId | string |
| threat_match_field_s | string |
| threat_match_value_s | string |
| threat_source_id_d | real |
| threshold_d | real |
| threshold_time_d | real |
| TimeGenerated | datetime |
| timestamp_t | datetime |
| title_s | string |
| to_object_s | string |
| to_storage_s | string |
| to_user_category_s | string |
| to_user_s | string |
| total_collaborator_count_d | real |
| traffic_type_s | string |
| transaction_id_s | string |
| true_obj_category_s | string |
| true_obj_type_s | string |
| true_type_id_d | real |
| tss_fail_reason_s | string |
| tss_mode_s | string |
| tss_scan_failed_s | string |
| tss_scan_s | string |
| two_factor_auth_s | string |
| Type | string |
| type_s | string |
| universal_connector_s | string |
| ur_normalized_s | string |
| url_s | string |
| user_category_s | string |
| user_id_s | string |
| user_s | string |
| useragent_s | string |
| usergroup_s | string |
| userip_s | string |
| userkey_s | string |
| userprincipalname_s | string |
| web_universal_connector_s | string |
| web_url_s | string |
| workspace_id_s | string |
| workspace_s | string |

## Solutions (2)

This table is used by the following solutions:

- [Netskope](../solutions/netskope.md)
- [Netskopev2](../solutions/netskopev2.md)

---

## Content Items Using This Table (2)

### Workbooks (2)

**In solution [Netskope](../solutions/netskope.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [NetskopeEvents](../content/netskope-netskopeevents-8c0bf08d.md) |  |

**In solution [Netskopev2](../solutions/netskopev2.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [NetskopeCEDashboard](../content/netskopev2-netskopecedashboard-35668be9.md) |  |

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [NetskopeCEAlerts](../parsers/netskopecealerts.md) | [Netskopev2](../solutions/netskopev2.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

