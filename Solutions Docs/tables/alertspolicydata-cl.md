# alertspolicydata_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
| **Supports Transformations** | ✗ No |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✗ No |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |

## Schema (216 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/alertspolicydata_CL.json)

| Column Name | Type |
|:------------|:-----|
| _id_s | string |
| _ResourceId | string |
| access_method_s | string |
| acked_s | string |
| act_user_s | string |
| action_s | string |
| activity_s | string |
| activity_status_s | string |
| activity_type_s | string |
| aggregated_user_s | string |
| alert_name_s | string |
| alert_s | string |
| alert_type_s | string |
| all_policy_matches_s | string |
| app_activity_s | string |
| app_s | string |
| app_scopes_s | string |
| app_session_id_d | real |
| appcategory_s | string |
| appsuite_s | string |
| bcc_s | string |
| browser_s | string |
| browser_session_id_d | real |
| browser_version_s | string |
| Category | string |
| cc_s | string |
| cci_d | real |
| cci_s | string |
| ccl_s | string |
| client_bytes_d | real |
| client_packets_d | real |
| Computer | string |
| conn_duration_d | real |
| connection_id_d | real |
| count_d | real |
| custom_connector_s | string |
| data_type_s | string |
| device_classification_s | string |
| device_s | string |
| displayName_s | string |
| distinguishedName_s | string |
| division_s | string |
| dlp_fail_reason_s | string |
| dlp_profile_s | string |
| dlp_scan_failed_s | string |
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
| dynamic_classification_s | string |
| encrypt_failure_s | string |
| end_time_s | string |
| event_type_s | string |
| exposure_s | string |
| external_collaborator_count_d | real |
| file_category_s | string |
| file_id_s | string |
| file_path_s | string |
| file_size_d | real |
| file_type_s | string |
| forward_to_proxy_xau_s | string |
| from_object_s | string |
| from_storage_s | string |
| from_user_s | string |
| gateway_s | string |
| group_s | string |
| hostname_s | string |
| http_status_s | string |
| incident_id_d | real |
| instance_id_s | string |
| instance_s | string |
| internal_collaborator_count_d | real |
| ip_protocol_s | string |
| justification_reason_s | string |
| justification_type_s | string |
| last_name_s | string |
| log_file_name_s | string |
| mail_s | string |
| malicious_s | string |
| malsite_category_s | string |
| malware_id_s | string |
| malware_name_s | string |
| malware_severity_s | string |
| malware_type_s | string |
| managed_app_s | string |
| ManagementGroupName | string |
| managementID_s | string |
| manager_s | string |
| md5_g | string |
| memberOf_s | string |
| message_id_s | string |
| message_size_d | real |
| MG | string |
| mime_type_s | string |
| modified_d | real |
| network_s | string |
| network_session_id_s | string |
| notify_template_s | string |
| nsdeviceuid_s | string |
| num_sessions_d | real |
| numbytes_d | real |
| object_count_d | real |
| object_id_s | string |
| object_s | string |
| object_type_s | string |
| org_s | string |
| organization_unit_s | string |
| orignal_file_path_s | string |
| os_s | string |
| os_version_s | string |
| other_categories_s | string |
| owner_s | string |
| page_s | string |
| page_site_s | string |
| parent_id_s | string |
| policy_id_s | string |
| policy_s | string |
| profile_emails_s | string |
| protocol_port_s | string |
| protocol_s | string |
| publisher_cn_s | string |
| publisher_name_s | string |
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
| redirect_url_s | string |
| referer_s | string |
| remediation_profile_s | string |
| req_cnt_d | real |
| request_id_s | string |
| resp_cnt_d | real |
| risk_level_s | string |
| sAMAccountName_s | string |
| sAMAccountType_s | string |
| sanctioned_instance_s | string |
| scan_type_s | string |
| sender_s | string |
| serial_s | string |
| server_bytes_d | real |
| server_packets_d | real |
| session_duration_d | real |
| sessionid_s | string |
| severity_s | string |
| sfwder_s | string |
| shared_domains_s | string |
| shared_with_s | string |
| site_s | string |
| smtp_status_s | string |
| smtp_to_s | string |
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
| start_time_s | string |
| suppression_end_time_d | real |
| suppression_key_s | string |
| suppression_start_time_d | real |
| telemetry_app_s | string |
| TenantId | string |
| threat_match_field_s | string |
| threat_match_value_s | string |
| threat_source_id_d | real |
| TimeGenerated | datetime |
| timestamp_d | real |
| Title_s | string |
| to_object_s | string |
| to_storage_s | string |
| to_user_s | string |
| total_collaborator_count_d | real |
| total_packets_d | real |
| traffic_type_s | string |
| transaction_id_d | real |
| trust_computer_checked_s | string |
| tss_fail_reason_s | string |
| tss_mode_s | string |
| tss_scan_failed_s | string |
| TSS_scan_s | string |
| tunnel_id_s | string |
| tunnel_type_s | string |
| tunnel_up_time_d | real |
| two_factor_auth_s | string |
| Type | string |
| type_s | string |
| universal_connector_s | string |
| ur_normalized_s | string |
| url_s | string |
| user_id_s | string |
| user_s | string |
| user_tmp_s | string |
| useragent_s | string |
| userCountry_s | string |
| userip_s | string |

## Solutions (1)

This table is used by the following solutions:

- [Netskopev2](../solutions/netskopev2.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Netskope Data Connector](../connectors/netskopedataconnector.md) |  |

---

## Content Items Using This Table (1)

### Workbooks (1)

**In solution [Netskopev2](../solutions/netskopev2.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [NetskopeDashboard](../content/netskopev2-netskopedashboard-7f2bb16f.md) |  |

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [AlertsPolicy](../parsers/alertspolicy.md) | [Netskopev2](../solutions/netskopev2.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

