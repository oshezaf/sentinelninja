# Netskope_Events_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
| **Ingestion API Supported** | ✓ Yes |

## Schema (165 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/Netskope_Events_CL.json)

| Column Name | Type |
|:------------|:-----|
| _id_s | string |
| _insertion_epoch_timestamp_t | datetime |
| _ResourceId | string |
| access_method_s | string |
| act_user_s | string |
| action_s | string |
| activity_s | string |
| activity_type_s | string |
| alarm_description_s | string |
| alarm_name_s | string |
| alert_generated_b | bool |
| alert_name_s | string |
| alert_s | string |
| alert_type_s | string |
| app_activity_s | string |
| app_s | string |
| app_session_id_s | string |
| appcategory_s | string |
| audit_log_event_s | string |
| browser_s | string |
| browser_session_id_s | string |
| browser_version_s | string |
| Category | string |
| cci_d | real |
| ccl_s | string |
| client_bytes_d | real |
| client_packets_d | real |
| Computer | string |
| computer_name_s | string |
| conn_duration_d | real |
| conn_endtime_t | datetime |
| conn_starttime_t | datetime |
| connection_id_d | real |
| connection_id_s | string |
| connection_type_s | string |
| count_d | real |
| destination_file_directory_s | string |
| destination_file_name_s | string |
| destination_file_path_s | string |
| details_s | string |
| device_id_s | string |
| device_name_s | string |
| device_s | string |
| device_sn_s | string |
| device_type_s | string |
| dlp_incident_id_s | string |
| dlp_profile_name_s | string |
| dlp_profile_s | string |
| dlp_rule_s | string |
| domain_s | string |
| driver_s | string |
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
| end_time_t | datetime |
| event_recovered_b | bool |
| event_type_s | string |
| executable_hash_s | string |
| executable_signed_b | bool |
| file_origin_s | string |
| file_size_d | real |
| file_type_s | string |
| incident_id_d | real |
| instance_id_s | string |
| ip_protocol_s | string |
| justification_s | string |
| location_s | string |
| ManagementGroupName | string |
| md5_s | string |
| metric_value_d | real |
| MG | string |
| netskope_pop_s | string |
| num_sessions_d | real |
| numbytes_d | real |
| object_id_s | string |
| object_s | string |
| object_type_s | string |
| organization_unit_s | string |
| os_details_s | string |
| os_s | string |
| os_user_name_s | string |
| os_version_s | string |
| other_categories_s | string |
| page_endtime_t | datetime |
| page_s | string |
| page_starttime_t | datetime |
| pid_s | string |
| policy_action_enforced_s | string |
| policy_action_s | string |
| policy_name_enforced_s | string |
| policy_name_s | string |
| policy_s | string |
| policy_version_s | string |
| port_s | string |
| printer_identifier_s | string |
| process_cert_subject_s | string |
| process_name_s | string |
| process_path_s | string |
| product_id_s | string |
| protocol_s | string |
| publisher_cn_s | string |
| RawData | string |
| req_cnt_d | real |
| resp_cnt_d | real |
| serial_s | string |
| server_bytes_d | real |
| server_packets_d | real |
| session_duration_d | real |
| severity_level_d | real |
| severity_s | string |
| sha256_s | string |
| site_s | string |
| slc_latitude_d | real |
| slc_longitude_d | real |
| source_file_directory_s | string |
| source_file_name_s | string |
| SourceSystem | string |
| src_country_s | string |
| src_geoip_src_d | real |
| src_latitude_d | real |
| src_location_s | string |
| src_longitude_d | real |
| src_region_s | string |
| src_timezone_s | string |
| src_zipcode_s | string |
| srcip_s | string |
| srcport_d | real |
| start_time_t | datetime |
| sub_type_s | string |
| supporting_data_data_type_s | string |
| supporting_data_data_values_s | string |
| supporting_data_s | string |
| tenant_name_s | string |
| TenantId | string |
| TimeGenerated | datetime |
| timestamp_t | datetime |
| tnetwork_session_id_d | real |
| total_packets_d | real |
| traffic_type_s | string |
| tunnel_id_s | string |
| tunnel_type_s | string |
| tunnel_up_time_d | real |
| Type | string |
| type_s | string |
| unc_path_s | string |
| ur_normalized_s | string |
| user_category_s | string |
| user_generated_s | string |
| user_id_s | string |
| user_name_s | string |
| user_role_s | string |
| user_s | string |
| useragent_s | string |
| usergroup_s | string |
| userip_s | string |
| userkey_s | string |
| vendor_id_s | string |

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
| [NetskopeCEEventsApplication](../parsers/netskopeceeventsapplication.md) | [Netskopev2](../solutions/netskopev2.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

