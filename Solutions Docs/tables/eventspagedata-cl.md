# eventspagedata_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes � — uses type-suffixed column names |
| **Supports Transformations** | ✗ No |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✗ No |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |

## Schema (95 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/eventspagedata_CL.json)

| Column Name | Type |
|:------------|:-----|
| _id_s | string |
| _ResourceId | string |
| access_method_s | string |
| app_s | string |
| app_session_id_d | real |
| appcategory_s | string |
| browser_s | string |
| browser_session_id_d | real |
| browser_version_s | string |
| bypass_reason_s | string |
| bypass_traffic_s | string |
| Category | string |
| cci_d | real |
| ccl_s | string |
| client_bytes_d | real |
| Computer | string |
| conn_duration_d | real |
| conn_endtime_d | real |
| conn_starttime_d | real |
| connection_id_d | real |
| CononicalName_s | string |
| count_d | real |
| device_s | string |
| domain_s | string |
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
| forward_to_proxy_profile_s | string |
| fromlogs_s | string |
| hostname_s | string |
| http_transaction_count_d | real |
| log_file_name_s | string |
| ManagementGroupName | string |
| MG | string |
| netskope_pop_s | string |
| network_s | string |
| numbytes_d | real |
| org_s | string |
| organization_unit_s | string |
| os_s | string |
| os_version_s | string |
| other_categories_s | string |
| page_s | string |
| policy_s | string |
| protocol_s | string |
| RawData | string |
| req_cnt_d | real |
| request_id_d | real |
| resp_cnt_d | real |
| resp_content_len_d | real |
| resp_content_type_s | string |
| sAMAccountName_s | string |
| serial_s | string |
| server_bytes_d | real |
| sessionid_s | string |
| severity_s | string |
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
| ssl_decrypt_policy_s | string |
| suppression_end_time_d | real |
| suppression_start_time_d | real |
| TenantId | string |
| TimeGenerated | datetime |
| timestamp_d | real |
| traffic_type_s | string |
| transaction_id_d | real |
| Type | string |
| type_s | string |
| ur_normalized_s | string |
| url_s | string |
| user_generated_s | string |
| user_s | string |
| useragent_s | string |
| userip_s | string |
| userkey_s | string |
| userPrincipalName_s | string |

## Solutions (1)

This table is used by the following solutions:

- [Netskopev2](../solutions/netskopev2.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Netskope Data Connector](../connectors/netskopedataconnector.md) |  |

---

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [EventsPage](../parsers/eventspage.md) | [Netskopev2](../solutions/netskopev2.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

