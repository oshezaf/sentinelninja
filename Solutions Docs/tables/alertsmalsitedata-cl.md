# alertsmalsitedata_CL

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
- [Parsers](#parsers-using-this-table)

## Schema (124 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/alertsmalsitedata_CL.json)

| Column Name | Type |
|:------------|:-----|
| _id_s | string |
| _ResourceId | string |
| access_method_s | string |
| acked_s | string |
| action_s | string |
| aggregated_user_s | string |
| alert_name_s | string |
| alert_s | string |
| alert_type_s | string |
| app_s | string |
| app_session_id_d | real |
| appcategory_s | string |
| appsuite_s | string |
| browser_s | string |
| browser_session_id_d | real |
| browser_version_s | string |
| Category | string |
| cci_d | real |
| cci_s | string |
| ccl_s | string |
| client_bytes_d | real |
| co_s | string |
| Computer | string |
| conn_duration_d | real |
| connection_id_d | real |
| count_d | real |
| department_s | string |
| device_classification_s | string |
| device_s | string |
| division_s | string |
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
| from_user_s | string |
| fromlogs_s | string |
| gateway_s | string |
| hostname_s | string |
| incident_id_d | real |
| ja3_s | string |
| ja3s_s | string |
| log_file_name_s | string |
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
| managed_app_s | string |
| ManagementGroupName | string |
| MG | string |
| notify_template_s | string |
| numbytes_d | real |
| object_s | string |
| object_type_s | string |
| org_s | string |
| organization_unit_s | string |
| os_s | string |
| os_version_s | string |
| other_categories_s | string |
| page_s | string |
| page_site_s | string |
| policy_id_s | string |
| policy_s | string |
| protocol_s | string |
| RawData | string |
| referer_s | string |
| req_cnt_d | real |
| request_id_s | string |
| resp_cnt_d | real |
| sAMAccountName_s | string |
| serial_s | string |
| server_bytes_d | real |
| severity_level_id_d | real |
| severity_level_s | string |
| severity_s | string |
| sfwder_s | string |
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
| telemetry_app_s | string |
| TenantId | string |
| threat_match_field_s | string |
| threat_match_value_s | string |
| threat_source_id_d | real |
| TimeGenerated | datetime |
| timestamp_d | real |
| traffic_type_s | string |
| transaction_id_d | real |
| Type | string |
| type_s | string |
| universal_connector_s | string |
| ur_normalized_s | string |
| url_s | string |
| user_s | string |
| useragent_s | string |
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

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [NetskopeDashboard](../content/netskopev2-netskopedashboard-7f2bb16f.md) |  |

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [AlertsMalsite](../parsers/alertsmalsite.md) | [Netskopev2](../solutions/netskopev2.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

