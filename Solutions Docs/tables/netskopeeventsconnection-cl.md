# NetskopeEventsConnection_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Ingestion API Supported** | ✓ Yes |

## Schema (86 columns)

**Source:** [Data Collection Rule definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Netskopev2/Data%20Connectors/NetskopeAlertsEvents_RestAPI_CCP/NetskopeAlertsEvents_DCR.json)

| Column Name | Type |
|:------------|:-----|
| _id | string |
| access_method | string |
| app | string |
| app_session_id | long |
| appcategory | string |
| browser | string |
| browser_session_id | long |
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
| connection_id | long |
| CononicalName | string |
| count | int |
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
| request_id | long |
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
| timestamp | int |
| traffic_type | string |
| transaction_id | long |
| type | string |
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

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

