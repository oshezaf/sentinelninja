# NetskopeEventsApplication_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Ingestion API Supported** | ✓ Yes |

## Schema (146 columns)

**Source:** [Data Collection Rule definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Netskopev2/Data%20Connectors/NetskopeAlertsEvents_RestAPI_CCP/NetskopeAlertsEvents_DCR.json)

| Column Name | Type |
|:------------|:-----|
| _id | string |
| access_method | string |
| action | string |
| activity | string |
| alert | string |
| alert_type | string |
| app | string |
| app_activity | string |
| app_session_id | long |
| appcategory | string |
| appsuite | string |
| audit_category | string |
| audit_type | string |
| browser | string |
| browser_session_id | long |
| browser_version | string |
| category | string |
| cci | int |
| ccl | string |
| channel_id | string |
| client_bytes | int |
| conn_duration | int |
| connection_id | long |
| CononicalName | string |
| count | int |
| custom_connector | string |
| data_center | string |
| data_type | string |
| device | string |
| device_classification | string |
| dlp_file | string |
| dlp_incident_id | long |
| dlp_is_unique_count | string |
| dlp_mail_parent_id | string |
| dlp_parent_id | long |
| dlp_profile | string |
| dlp_rule | string |
| dlp_rule_count | int |
| dlp_rule_severity | string |
| dlp_unique_count | int |
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
| exposure | string |
| file_lang | string |
| file_path | string |
| file_size | int |
| file_type | string |
| from_user | string |
| from_user_category | string |
| fromlogs | string |
| hostname | string |
| instance | string |
| instance_id | string |
| internal_collaborator_count | int |
| log_file_name | string |
| logintype | string |
| loginurl | string |
| managed_app | string |
| managementID | string |
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
| orignal_file_path | string |
| os | string |
| os_version | string |
| other_categories | dynamic |
| outer_doc_type | int |
| owner | string |
| page | string |
| page_site | string |
| parent_id | string |
| policy | string |
| policy_id | string |
| protocol | string |
| referer | string |
| req_cnt | int |
| request_id | long |
| resp_cnt | int |
| sAMAccountName | string |
| sanctioned_instance | string |
| scan_type | string |
| serial | string |
| server_bytes | int |
| sessionid | string |
| severity | string |
| sfwder | string |
| sha256 | string |
| shared_with | string |
| site | string |
| smtp_to | dynamic |
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
| timestamp | int |
| title | string |
| to_user | string |
| total_collaborator_count | int |
| traffic_type | string |
| transaction_id | long |
| true_obj_category | string |
| true_obj_type | string |
| tss_mode | string |
| type | string |
| universal_connector | string |
| ur_normalized | string |
| url | string |
| user | string |
| user_category | string |
| user_id | string |
| useragent | string |
| userip | string |
| userkey | string |
| userPrincipalName | string |
| web_universal_connector | string |
| workspace | string |
| workspace_id | string |

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
| [NetskopeEventsApplication](../parsers/netskopeeventsapplication.md) | [Netskopev2](../solutions/netskopev2.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

