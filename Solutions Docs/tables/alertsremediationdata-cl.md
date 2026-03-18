# alertsremediationdata_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
| **Supports Transformations** | ✗ No |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✗ No ([source](https://learn.microsoft.com/azure/sentinel/data-connectors-reference)) |

## Contents

- [Schema](#schema)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Content Items](#content-items-using-this-table)
- [Parsers](#parsers-using-this-table)

## Schema (96 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/alertsremediationdata_CL.json)

| Column Name | Type |
|:------------|:-----|
| _id_s | string |
| _ResourceId | string |
| access_method_s | string |
| acked_s | string |
| action_s | string |
| actions_taken_s | string |
| activity_s | string |
| alert_name_s | string |
| alert_s | string |
| alert_type_s | string |
| all_policy_matches_s | string |
| app_s | string |
| app_session_id_d | real |
| appcategory_s | string |
| appsuite_s | string |
| browser_s | string |
| browser_session_id_d | real |
| Category | string |
| cci_d | real |
| cci_s | string |
| ccl_s | string |
| Computer | string |
| connection_id_d | real |
| count_d | real |
| device_classification_s | string |
| device_s | string |
| dlp_profile_s | string |
| dst_country_s | string |
| dst_geoip_src_d | real |
| dst_latitude_d | real |
| dst_location_s | string |
| dst_longitude_d | real |
| dst_region_s | string |
| dst_timezone_s | string |
| dst_zipcode_s | string |
| dstip_s | string |
| edr_app_s | string |
| endpoint_count_d | real |
| endpoints_s | string |
| file_size_d | real |
| file_type_s | string |
| from_user_s | string |
| hostname_s | string |
| incident_id_d | real |
| instance_id_s | string |
| malware_id_s | string |
| malware_name_s | string |
| malware_severity_s | string |
| malware_type_s | string |
| managed_app_s | string |
| ManagementGroupName | string |
| managementID_s | string |
| md5_g | string |
| MG | string |
| notify_template_s | string |
| nsdeviceuid_s | string |
| object_s | string |
| object_type_s | string |
| organization_unit_s | string |
| os_s | string |
| os_version_s | string |
| page_s | string |
| page_site_s | string |
| policy_id_s | string |
| policy_s | string |
| profile_hits_s | string |
| protocol_s | string |
| RawData | string |
| remediation_profile_s | string |
| request_id_s | string |
| sanctioned_instance_s | string |
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
| TenantId | string |
| TimeGenerated | datetime |
| timestamp_d | real |
| traffic_type_s | string |
| transaction_id_d | real |
| tss_mode_s | string |
| Type | string |
| type_s | string |
| ur_normalized_s | string |
| url_s | string |
| user_s | string |
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
| [AlertsRemediation](../parsers/alertsremediation.md) | [Netskopev2](../solutions/netskopev2.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

