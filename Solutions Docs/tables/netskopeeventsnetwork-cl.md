# NetskopeEventsNetwork_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Ingestion API Supported** | ✓ Yes |

## Schema (67 columns)

**Source:** [Data Collection Rule definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Netskopev2/Data%20Connectors/NetskopeAlertsEvents_RestAPI_CCP/NetskopeAlertsEvents_DCR.json)

| Column Name | Type |
|:------------|:-----|
| _id | string |
| access_method | string |
| action | string |
| app | string |
| appcategory | string |
| category | string |
| cci | int |
| ccl | string |
| client_bytes | int |
| client_packets | int |
| count | int |
| device | string |
| domain | string |
| dst_country | string |
| dst_geoip_src | int |
| dst_latitude | int |
| dst_location | string |
| dst_longitude | int |
| dst_region | string |
| dst_zipcode | string |
| dsthost | string |
| dstip | string |
| dstport | int |
| end_time | string |
| flow_status | string |
| hostname | string |
| ip_protocol | string |
| netskope_pop | string |
| network_session_id | string |
| num_sessions | int |
| numbytes | int |
| organization_unit | string |
| os | string |
| os_version | string |
| policy | string |
| pop_id | string |
| protocol | string |
| protocol_port | string |
| publisher_cn | string |
| publisher_name | string |
| sAMAccountName | string |
| server_bytes | int |
| server_packets | int |
| session_duration | int |
| site | string |
| src_country | string |
| src_geoip_src | int |
| src_latitude | int |
| src_location | string |
| src_longitude | int |
| src_region | string |
| src_zipcode | string |
| srcip | string |
| srcport | int |
| start_time | string |
| timestamp | int |
| total_packets | int |
| traffic_type | string |
| tunnel_id | string |
| tunnel_type | string |
| tunnel_up_time | int |
| type | string |
| ur_normalized | string |
| user | string |
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
| [NetskopeEventsNetwork](../parsers/netskopeeventsnetwork.md) | [Netskopev2](../solutions/netskopev2.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

