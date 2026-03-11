# NetskopeEventsConnection_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Ingestion API Supported** | ✓ Yes |

## Schema (86 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/NetskopeEventsConnection_CL.json)

| Column Name | Type |
|:------------|:-----|
| access_method | string |
| app | string |
| app_sessionid | string |
| appcategory | string |
| browser | string |
| browser_sessionid | string |
| browser_version | string |
| bypass_reason | string |
| bypass_traffic | string |
| category | string |
| cci | int |
| ccl | string |
| client_bytes | int |
| conn_duration | int |
| conn_endtime | int |
| conn_starttime | int |
| connectionid | string |
| CononicalName | string |
| count_i | int |
| device | string |
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
| dynamic_classification | string |
| forward_to_proxy_profile | string |
| fromlogs | string |
| hostname | string |
| http_transaction_count | int |
| log_file_name | string |
| netskope_pop | string |
| network | string |
| numbytes | int |
| org | string |
| organization_unit | string |
| os | string |
| os_version | string |
| page | string |
| policy | string |
| protocol | string |
| req_cnt | int |
| requestid | string |
| resp_cnt | int |
| resp_content_len | int |
| resp_content_type | string |
| sAMAccountName | string |
| serial | string |
| server_bytes | int |
| sessionid | string |
| severity | string |
| sfwder | string |
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
| ssl_decrypt_policy | string |
| suppression_end_time | int |
| suppression_start_time | int |
| TimeGenerated | datetime |
| timestamp | int |
| traffic_type | string |
| transactionid | string |
| type_s | string |
| ur_normalized | string |
| url | string |
| user | string |
| user_generated | string |
| useragent | string |
| userip | string |
| userkey | string |
| userPrincipalName | string |

## Solutions (1)

This table is used by the following solutions:

- [Netskopev2](../solutions/netskopev2.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Netskope Alerts and Events](../connectors/netskopealertsevents.md) |  |

---

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [NetskopeEventsConnection](../parsers/netskopeeventsconnection.md) | [Netskopev2](../solutions/netskopev2.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

