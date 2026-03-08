# alertsdlpdata_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
| **Supports Transformations** | ✗ No |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✗ No |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |

## Schema (152 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/alertsdlpdata_CL.json)

| Column Name | Type |
|:------------|:-----|
| _id_s | string |
| _ResourceId | string |
| access_method_s | string |
| acked_s | string |
| act_user_s | string |
| action_s | string |
| activity_s | string |
| alert_name_s | string |
| alert_s | string |
| alert_type_s | string |
| app_activity_s | string |
| app_s | string |
| app_session_id_d | real |
| appcategory_s | string |
| appsuite_s | string |
| bcc_s | string |
| browser_s | string |
| browser_session_id_d | real |
| browser_version_s | string |
| Category | string |
| ccl_s | string |
| channel_s | string |
| classification_name_s | string |
| collaborated_s | string |
| Computer | string |
| connection_id_d | real |
| data_type_s | string |
| device_classification_s | string |
| device_s | string |
| displayName_s | string |
| dlp_file_s | string |
| dlp_fingerprint_classification_s | string |
| dlp_fingerprint_match_s | string |
| dlp_fingerprint_score_d | real |
| dlp_incident_id_d | real |
| dlp_is_unique_count_s | string |
| dlp_mail_parent_id_s | string |
| dlp_parent_id_d | real |
| dlp_profile_s | string |
| dlp_rule_count_d | real |
| dlp_rule_s | string |
| dlp_rule_score_d | real |
| dlp_rule_severity_s | string |
| dlp_unique_count_d | real |
| dst_country_s | string |
| dst_geoip_src_d | real |
| dst_latitude_d | real |
| dst_location_s | string |
| dst_longitude_d | real |
| dst_region_s | string |
| dst_timezone_s | string |
| dst_zipcode_s | string |
| dstip_s | string |
| dynamic_classification_s | string |
| exposure_s | string |
| external_collaborator_count_d | real |
| file_category_s | string |
| file_cls_encrypted_b | bool |
| file_lang_s | string |
| file_password_protected_s | string |
| file_path_s | string |
| file_size_d | real |
| file_type_s | string |
| from_storage_s | string |
| from_user_s | string |
| group_s | string |
| hostname_s | string |
| incident_id_d | real |
| instance_id_s | string |
| instance_s | string |
| local_sha256_s | string |
| mail_s | string |
| managed_app_s | string |
| ManagementGroupName | string |
| managementID_s | string |
| manager_s | string |
| md5_g | string |
| message_id_s | string |
| message_size_d | real |
| MG | string |
| mime_type_s | string |
| modified_d | real |
| object_id_s | string |
| object_s | string |
| object_type_s | string |
| organization_unit_s | string |
| orignal_file_path_s | string |
| os_s | string |
| os_version_s | string |
| outer_doc_type_d | real |
| owner_pdl_s | string |
| owner_s | string |
| page_s | string |
| page_site_s | string |
| parent_id_s | string |
| policy_id_s | string |
| policy_s | string |
| protocol_s | string |
| RawData | string |
| referer_s | string |
| request_id_s | string |
| retro_scan_name_s | string |
| sAMAccountName_s | string |
| sanctioned_instance_s | string |
| scan_type_s | string |
| severity_s | string |
| sha256_s | string |
| shared_domains_s | string |
| shared_with_s | string |
| site_s | string |
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
| sub_type_s | string |
| suppression_key_s | string |
| TenantId | string |
| TimeGenerated | datetime |
| timestamp_d | real |
| title_s | string |
| to_storage_s | string |
| to_user_s | string |
| total_collaborator_count_d | real |
| traffic_type_s | string |
| transaction_id_d | real |
| true_filetype_s | string |
| true_obj_category_s | string |
| true_obj_type_s | string |
| true_type_id_d | real |
| tss_mode_s | string |
| Type | string |
| type_s | string |
| universal_connector_s | string |
| ur_normalized_s | string |
| url_s | string |
| user_id_s | string |
| user_s | string |
| userCountry_s | string |
| userip_s | string |
| userkey_s | string |
| userPrincipalName_s | string |
| violating_user_s | string |
| violating_user_type_s | string |
| web_universal_connector_s | string |

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
| [AlertsDLP](../parsers/alertsdlp.md) | [Netskopev2](../solutions/netskopev2.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

