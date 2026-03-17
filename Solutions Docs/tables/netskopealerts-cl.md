# NetskopeAlerts_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✓ Yes ([source](https://learn.microsoft.com/azure/sentinel/data-connectors-reference)) |

## Schema (201 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/NetskopeAlerts_CL.json)

| Column Name | Type |
|:------------|:-----|
| access_method | string |
| account_id | string |
| account_name | string |
| acked | string |
| action | string |
| activity | string |
| alert | string |
| alert_id | string |
| alert_name | string |
| alert_type | string |
| app | string |
| app_activity | string |
| app_sessionid | string |
| appcategory | string |
| appsuite | string |
| asset_id | string |
| asset_object_id | string |
| breach_date | int |
| breach_description | string |
| breach_id | string |
| breach_media_references | string |
| breach_score | string |
| breach_target_references | string |
| browser | string |
| browser_sessionid | string |
| browser_version | string |
| bypass_traffic | string |
| category | string |
| cci | int |
| ccl | string |
| client_bytes | int |
| compliance_standards | dynamic |
| conn_duration | int |
| conn_endtime | int |
| conn_starttime | int |
| connectionid | string |
| CononicalName | string |
| count_i | int |
| data_type | string |
| device | string |
| device_classification | string |
| dlp_file | string |
| dlp_incidentid | string |
| dlp_is_unique_count | string |
| dlp_mail_parent_id | string |
| dlp_parentid | string |
| dlp_profile | string |
| dlp_rule | string |
| dlp_rule_count | int |
| dlp_rule_severity | string |
| dlp_unique_count | int |
| domain | string |
| dst_country | string |
| dst_geoip_src | int |
| dst_latitude | int |
| dst_location | string |
| dst_longitude | int |
| dst_region | string |
| dst_timezone | string |
| dst_zipcode | string |
| dsthost | string |
| dstip | string |
| dstport | int |
| email_source | string |
| event_type | string |
| evt_src_chnl | string |
| exposure | string |
| external_collaborator_count | int |
| external_email | int |
| file_cls_encrypted | bool |
| file_lang | string |
| file_path | string |
| file_size | int |
| file_type | string |
| from_user | string |
| fromlogs | string |
| hostname | string |
| http_transaction_count | int |
| iaas_asset_tags | dynamic |
| iaas_remediated | string |
| instance | string |
| instance_id | string |
| internal_collaborator_count | int |
| justification_reason | string |
| justification_type | string |
| last_app | string |
| last_country | string |
| last_device | string |
| last_location | string |
| last_region | string |
| last_timestamp | int |
| log_file_name | string |
| malicious | string |
| malsite_category | dynamic |
| malsite_country | string |
| malsite_id | string |
| malsite_ip_host | string |
| malsite_latitude | int |
| malsite_longitude | int |
| malsite_region | string |
| managed_app | string |
| managementID | string |
| matched_username | string |
| md5 | string |
| mime_type | string |
| modified | int |
| netskope_activity | string |
| netskope_pop | string |
| notify_template | string |
| nsdeviceuid | string |
| numbytes | int |
| object | string |
| object_id | string |
| object_type | string |
| org | string |
| organization_unit | string |
| orig_ty | string |
| orignal_file_path | string |
| os | string |
| os_version | string |
| other_categories | dynamic |
| outer_doc_type | int |
| owner | string |
| page | string |
| page_site | string |
| parent_id | string |
| password_type | string |
| policy | string |
| policy_actions | dynamic |
| policy_id | string |
| profile_id | string |
| protocol | string |
| referer | string |
| region_id | string |
| region_name | string |
| req_cnt | int |
| requestid | string |
| resource_category | string |
| resource_group | string |
| resp_cnt | int |
| sa_profile_id | int |
| sa_profile_name | string |
| sa_rule_id | string |
| sa_rule_name | string |
| sa_rule_severity | string |
| sAMAccountName | string |
| sanctioned_instance | string |
| scan_type | string |
| serial | string |
| server_bytes | int |
| sessionid | string |
| severity | string |
| severity_level | string |
| severity_level_id | int |
| sfwder | string |
| sha256 | string |
| shared_domains | string |
| shared_with | string |
| site | string |
| src_country | string |
| src_geoip_src | int |
| src_latitude | int |
| src_location | string |
| src_longitude | int |
| src_region | string |
| src_time | string |
| src_timezone | string |
| src_zipcode | string |
| srcip | string |
| suppression_end_time | int |
| suppression_key | string |
| suppression_start_time | int |
| telemetry_app | string |
| threat_match_field | string |
| threat_match_value | string |
| threat_source_id | int |
| threshold | int |
| threshold_time | int |
| TimeGenerated | datetime |
| timestamp | int |
| title_s | string |
| to_object | string |
| total_collaborator_count | int |
| traffic_type | string |
| transactionid | string |
| true_obj_category | string |
| true_obj_type | string |
| tss_mode | string |
| two_factor_auth | string |
| type_s | string |
| universal_connector | string |
| ur_normalized | string |
| url | string |
| user | string |
| user_generated | string |
| user_id | string |
| useragent | string |
| userip | string |
| userkey | string |
| userPrincipalName | string |
| web_universal_connector | string |

## Solutions (1)

This table is used by the following solutions:

- [Netskopev2](../solutions/netskopev2.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Netskope Alerts and Events](../connectors/netskopealertsevents.md) |  |

---

## Content Items Using This Table (1)

### Workbooks (1)

**In solution [Netskopev2](../solutions/netskopev2.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [NetskopeCCPDashboard](../content/netskopev2-netskopeccpdashboard-b47aef2b.md) |  |

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [NetskopeAlerts](../parsers/netskopealerts.md) | [Netskopev2](../solutions/netskopev2.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

