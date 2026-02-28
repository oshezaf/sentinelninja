# eventsnetworkdata_CL

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

## Schema (75 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/eventsnetworkdata_CL.json)

| Column Name | Type |
|:------------|:-----|
| _id_s | string |
| _ResourceId | string |
| access_method_s | string |
| action_s | string |
| app_s | string |
| appcategory_s | string |
| Category | string |
| cci_d | real |
| cci_s | string |
| ccl_s | string |
| client_bytes_d | real |
| client_packets_d | real |
| Computer | string |
| count_d | real |
| device_s | string |
| domain_s | string |
| dst_country_s | string |
| dst_geoip_src_d | real |
| dst_latitude_d | real |
| dst_location_s | string |
| dst_longitude_d | real |
| dst_region_s | string |
| dst_zipcode_s | string |
| dsthost_s | string |
| dstip_s | string |
| dstport_d | real |
| end_time_s | string |
| flow_status_s | string |
| hostname_s | string |
| ip_protocol_s | string |
| ManagementGroupName | string |
| MG | string |
| network_session_id_s | string |
| num_sessions_d | real |
| numbytes_d | real |
| organization_unit_s | string |
| os_s | string |
| os_version_s | string |
| policy_s | string |
| protocol_port_s | string |
| protocol_s | string |
| publisher_cn_s | string |
| publisher_name_s | string |
| RawData | string |
| sAMAccountName_s | string |
| server_bytes_d | real |
| server_packets_d | real |
| session_duration_d | real |
| site_s | string |
| SourceSystem | string |
| src_country_s | string |
| src_geoip_src_d | real |
| src_latitude_d | real |
| src_location_s | string |
| src_longitude_d | real |
| src_region_s | string |
| src_zipcode_s | string |
| srcip_s | string |
| srcport_d | real |
| start_time_s | string |
| TenantId | string |
| TimeGenerated | datetime |
| timestamp_d | real |
| total_packets_d | real |
| traffic_type_s | string |
| tunnel_id_s | string |
| tunnel_type_s | string |
| tunnel_up_time_d | real |
| Type | string |
| type_s | string |
| ur_normalized_s | string |
| user_s | string |
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
| [EventsNetwork](../parsers/eventsnetwork.md) | [Netskopev2](../solutions/netskopev2.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

