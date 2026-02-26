# Netskope_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Ingestion API Supported** | ✓ Yes |

## Schema (339 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/Netskope_CL.json)

| Column Name | Type |
|:------------|:-----|
| _id_s | string |
| _insertion_epoch_timestamp_d | real |
| _ResourceId | string |
| access_method_s | string |
| account_id_s | string |
| account_name_s | string |
| act_user_s | string |
| action_s | string |
| activity_s | string |
| activity_status_s | string |
| activity_type_s | string |
| alert_id_g | string |
| alert_name_s | string |
| alert_s | string |
| alert_type_s | string |
| AlertName | string |
| all_policy_matches_s | string |
| anomaly_type_s | string |
| anomalyData_binCount_d | real |
| anomalyData_convergenceFactor_d | real |
| anomalyData_featureValue_s | string |
| anomalyData_histo_s | string |
| anomalyData_modelId_s | string |
| anomalyData_observationCount_d | real |
| anomalyData_percentileThresholdCount_d | real |
| anomalyData_probability_d | real |
| anomalyData_pValue_d | real |
| anomalyData_sampleCount_d | real |
| anomalyData_scope_s | string |
| api_command_s | string |
| app_activity_s | string |
| app_category_s | string |
| app_name_s | string |
| app_s | string |
| app_session_id_d | real |
| app_sessionid_s | string |
| appcategory_s | string |
| appsuite_s | string |
| asset_id_s | string |
| asset_object_id_s | string |
| audit_category_s | string |
| audit_log_event_s | string |
| breach_date_d | real |
| breach_description_s | string |
| breach_id_g | string |
| breach_media_references_s | string |
| breach_score_d | real |
| breach_target_references_s | string |
| browser_s | string |
| browser_session_id_d | real |
| browser_sessionid_s | string |
| browser_version_s | string |
| bypass_reason_s | string |
| bypass_traffic_s | string |
| Category | string |
| channel_id_s | string |
| client_bytes_d | real |
| client_packets_d | real |
| collaborated_s | string |
| compliance_standards_s | string |
| Computer | string |
| conn_duration_d | real |
| conn_endtime_d | real |
| conn_starttime_d | real |
| connection_id_d | real |
| connectionid_s | string |
| count_d | real |
| createdTime_s | string |
| data_center_s | string |
| data_type_s | string |
| details_s | string |
| detection_engine_s | string |
| detection_type_s | string |
| device_classification_s | string |
| device_s | string |
| deviceClassification_s | string |
| dlp_file_s | string |
| dlp_incident_id_d | real |
| dlp_incidentid_s | string |
| dlp_is_unique_count_s | string |
| dlp_mail_parent_id_s | string |
| dlp_parent_id_d | real |
| dlp_profile_s | string |
| dlp_rule_count_d | real |
| dlp_rule_s | string |
| dlp_rule_severity_s | string |
| domain_s | string |
| download_app_s | string |
| dst_country_s | string |
| dst_geoip_src_d | real |
| dst_latitude_d | real |
| dst_latitude_s | string |
| dst_location_s | string |
| dst_longitude_d | real |
| dst_longitude_s | string |
| dst_region_s | string |
| dst_timezone_s | string |
| dst_zipcode_s | string |
| dsthost_s | string |
| dstip_s | string |
| dstport_d | real |
| dynamic_classification_s | string |
| email_source_s | string |
| encrypt_failure_s | string |
| end_time_t | datetime |
| event_type_s | string |
| EventTime_s | string |
| exposure_s | string |
| external_collaborator_count_d | real |
| external_email_d | real |
| Facility_s | string |
| fastscan_req_id_d | real |
| fastscan_results_s | string |
| file_category_s | string |
| file_id_g | string |
| file_lang_s | string |
| file_password_protected_s | string |
| file_path_s | string |
| file_size_d | real |
| file_type_s | string |
| filename_s | string |
| flow_status_s | string |
| forward_to_proxy_xau_s | string |
| from_object_s | string |
| from_storage_s | string |
| from_user_category_s | string |
| from_user_s | string |
| gid_d | real |
| hold_until_proven_b | bool |
| home_pop_s | string |
| HostIP_s | string |
| HostName_s | string |
| http_method_s | string |
| http_transaction_count_d | real |
| iaas_asset_tags_s | string |
| iaas_remediated_s | string |
| id_d | real |
| incident_id_d | real |
| instance_id_s | string |
| instance_s | string |
| instance_type_s | string |
| internal_collaborator_count_d | real |
| ip_protocol_s | string |
| justification_reason_s | string |
| justification_type_s | string |
| last_app_s | string |
| last_country_s | string |
| last_device_s | string |
| last_location_s | string |
| last_region_s | string |
| last_timestamp_d | real |
| logintype_s | string |
| loginurl_s | string |
| malicious_s | string |
| malsite_active_s | string |
| malsite_category_s | string |
| malsite_confidence_d | real |
| malsite_consecutive_s | string |
| malsite_country_s | string |
| malsite_first_seen_d | real |
| malsite_hostility_s | string |
| malsite_id_s | string |
| malsite_ip_host_s | string |
| malsite_last_seen_d | real |
| malsite_latitude_d | real |
| malsite_longitude_d | real |
| malsite_region_s | string |
| malsite_reputation_s | string |
| malware_id_g | string |
| malware_name_s | string |
| malware_profile_s | string |
| malware_severity_s | string |
| malware_type_s | string |
| managed_app_s | string |
| ManagementGroupName | string |
| managementID_s | string |
| matched_username_s | string |
| Message | string |
| metadata_attack_severity_s | string |
| metadata_policy_s | string |
| metadata_service_s | string |
| MG | string |
| mime_type_s | string |
| ml_detection_s | string |
| modified_d | real |
| modified_date_d | real |
| netskope_activity_s | string |
| netskope_pop_s | string |
| notify_template_s | string |
| nsdeviceuid_g | string |
| numbytes_d | real |
| object_count_d | real |
| object_id_g | string |
| object_s | string |
| object_type_s | string |
| OpId_s | string |
| organization_unit_s | string |
| orig_ty_s | string |
| orignal_file_path_s | string |
| os_s | string |
| os_version_s | string |
| other_categories_s | string |
| outer_doc_type_d | real |
| owner_s | string |
| page_s | string |
| page_site_s | string |
| parent_id_s | string |
| password_type_s | string |
| path_id_s | string |
| policy_actions_s | string |
| policy_id_s | string |
| policy_name_s | string |
| policy_s | string |
| pop_id_s | string |
| ProcessID_s | string |
| ProcessName_s | string |
| profile_emails_s | string |
| profile_id_s | string |
| protocol_s | string |
| q_admin_s | string |
| q_app_s | string |
| q_instance_s | string |
| q_original_filename_s | string |
| q_original_filepath_s | string |
| q_original_shared_s | string |
| q_original_version_s | string |
| quarantine_file_id_s | string |
| quarantine_file_name_s | string |
| quarantine_profile_id_s | string |
| quarantine_profile_s | string |
| RawData | string |
| referer_s | string |
| region_id_s | string |
| region_name_s | string |
| request_id_d | real |
| requestid_s | string |
| resource_category_s | string |
| resp_cnt_d | real |
| resp_content_len_d | real |
| resp_content_type_s | string |
| retro_scan_name_s | string |
| role_s | string |
| sa_profile_id_d | real |
| sa_profile_name_s | string |
| sa_rule_id_s | string |
| sa_rule_name_s | string |
| sa_rule_remediation_s | string |
| sa_rule_severity_s | string |
| sanctioned_instance_s | string |
| scan_time_d | real |
| scan_type_s | string |
| scanner_result_s | string |
| score_d | real |
| server_bytes_d | real |
| server_packets_d | real |
| service_identifier_s | string |
| session_duration_d | real |
| severity_id_d | real |
| severity_level_d | real |
| severity_s | string |
| SeverityLevel_s | string |
| shared_domains_s | string |
| shared_type_s | string |
| shared_with_s | string |
| signature_id_d | real |
| signature_s | string |
| site_s | string |
| slc_latitude_d | real |
| slc_longitude_d | real |
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
| srcport_d | real |
| SrcUserName | string |
| ssl_decrypt_policy_s | string |
| start_time_t | datetime |
| Sub_s | string |
| supporting_data_data_type_s | string |
| supporting_data_data_values_d | real |
| suppression_end_time_d | real |
| suppression_key_s | string |
| suppression_start_time_d | real |
| SyslogMessage_s | string |
| telemetry_app_s | string |
| TenantId | string |
| threat_match_field_s | string |
| threat_match_value_s | string |
| threat_source_id_d | real |
| threshold_d | real |
| threshold_time_d | real |
| TimeGenerated | datetime |
| title_s | string |
| to_object_s | string |
| to_storage_s | string |
| to_user_category_s | string |
| to_user_s | string |
| total_collaborator_count_d | real |
| total_packets_d | real |
| traffic_type_s | string |
| true_filetype_s | string |
| true_obj_category_s | string |
| true_obj_type_s | string |
| true_type_id_d | real |
| trust_computer_checked_s | string |
| tss_license_s | string |
| tss_mode_s | string |
| TSS_scan_s | string |
| tunnel_id_g | string |
| tunnel_id_s | string |
| tunnel_type_s | string |
| tunnel_up_time_d | real |
| two_factor_auth_s | string |
| Type | string |
| ur_normalized_s | string |
| url_s | string |
| user_category_s | string |
| user_generated_s | string |
| user_id_g | string |
| user_name_s | string |
| user_role_s | string |
| user_s | string |
| User_SPACE_Id_s | string |
| User_SPACE_Name_s | string |
| useragent_s | string |
| userip_s | string |
| userkey_g | string |
| UserName_s | string |
| violating_user_s | string |
| web_universal_connector_s | string |
| web_url_s | string |
| windowId_d | real |

## Solutions (1)

This table is used by the following solutions:

- [Netskope](../solutions/netskope.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Netskope](../connectors/netskope.md) |  |

---

## Parsers Using This Table (2)

### Other Parsers (2)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [Netskope](../parsers/netskope.md) | [Netskope](../solutions/netskope.md) ⚠️ |  |
| [Netskope](../parsers/netskope.md) | [Netskope](../solutions/netskope.md) |  |

> ⚠️ Parsers marked with ⚠️ are not listed in their Solution JSON file.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

