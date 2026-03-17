# alertsubadata_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
| **Supports Transformations** | ✗ No |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✗ No ([source](https://learn.microsoft.com/azure/sentinel/data-connectors-reference)) |

## Schema (156 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/alertsubadata_CL.json)

| Column Name | Type |
|:------------|:-----|
| _id_s | string |
| _ResourceId | string |
| access_method_s | string |
| AccountType_s | string |
| acked_s | string |
| act_user_s | string |
| action_s | string |
| activity_s | string |
| activity_status_s | string |
| alert_id_g | string |
| alert_name_s | string |
| alert_s | string |
| alert_type_s | string |
| all_policy_matches_s | string |
| anomaly_type_s | string |
| app_activity_s | string |
| app_category_s | string |
| app_s | string |
| app_session_id_d | real |
| appcategory_s | string |
| appsuite_s | string |
| audit_category_s | string |
| audit_type_s | string |
| bin_timestamp_d | real |
| browser_s | string |
| browser_session_id_d | real |
| browser_version_s | string |
| Category | string |
| cci_d | real |
| ccl_s | string |
| Computer | string |
| connection_id_d | real |
| count_d | real |
| createdTime_s | string |
| device_classification_s | string |
| device_s | string |
| displayName_s | string |
| distinguishedName_s | string |
| division_s | string |
| download_app_s | string |
| dst_country_s | string |
| dst_geoip_src_d | real |
| dst_latitude_d | real |
| dst_location_s | string |
| dst_longitude_d | real |
| dst_region_s | string |
| dst_timezone_s | string |
| dst_zipcode_s | string |
| dstip_s | string |
| employeeType_s | string |
| event_type_s | string |
| evt_src_chnl_s | string |
| file_category_s | string |
| file_size_d | real |
| file_type_s | string |
| from_user_category_s | string |
| from_user_s | string |
| group_s | string |
| hostname_s | string |
| incident_id_d | real |
| instance_id_s | string |
| last_app_s | string |
| last_country_s | string |
| last_device_s | string |
| last_location_s | string |
| last_region_s | string |
| last_timestamp_d | real |
| logintype_s | string |
| loginurl_s | string |
| mail_s | string |
| managed_app_s | string |
| ManagementGroupName | string |
| managementID_s | string |
| manager_s | string |
| md5_g | string |
| MG | string |
| netskope_activity_s | string |
| object_count_d | real |
| object_id_g | string |
| object_s | string |
| object_type_s | string |
| organization_unit_s | string |
| os_s | string |
| os_version_s | string |
| page_s | string |
| page_site_s | string |
| parent_id_s | string |
| policy_actions_s | string |
| policy_id_s | string |
| policy_name_s | string |
| policy_s | string |
| profile_id_s | string |
| protocol_s | string |
| RawData | string |
| referer_s | string |
| request_id_d | real |
| risk_level_id_d | real |
| risk_level_s | string |
| sAMAccountName_s | string |
| sanctioned_instance_s | string |
| scopes_s | string |
| score_s | string |
| severity_s | string |
| shared_credential_user_s | string |
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
| suppression_end_time_d | real |
| suppression_start_time_d | real |
| surhn_s | string |
| telemetry_app_s | string |
| TenantId | string |
| threshold_d | real |
| threshold_time_d | real |
| TimeGenerated | datetime |
| timestamp_d | real |
| to_object_s | string |
| to_user_category_s | string |
| to_user_s | string |
| traffic_type_s | string |
| transaction_id_d | real |
| tss_fail_reason_s | string |
| tss_mode_s | string |
| tss_scan_failed_s | string |
| TSS_scan_s | string |
| two_factor_auth_s | string |
| Type | string |
| type_s | string |
| uba_ap1_s | string |
| uba_ap2_s | string |
| uba_inst1_s | string |
| uba_inst2_s | string |
| ur_normalized_s | string |
| url_s | string |
| user_category_s | string |
| user_id_s | string |
| user_name_s | string |
| user_role_s | string |
| user_s | string |
| User_SPACE_Id_s | string |
| User_SPACE_Name_s | string |
| useragent_s | string |
| userip_s | string |
| userkey_s | string |
| userPrincipalName_s | string |
| web_universal_connector_s | string |
| windowId_d | real |

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
| [AlertsUba](../parsers/alertsuba.md) | [Netskopev2](../solutions/netskopev2.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

