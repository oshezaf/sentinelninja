# vectra_radius_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Ingestion API Supported** | ✓ Yes |

## Schema (55 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/vectra_radius_CL.json)

| Column Name | Type |
|:------------|:-----|
| account_authentic | long |
| account_delay_time | long |
| account_input_gigawords | long |
| account_input_octets | long |
| account_input_packets | long |
| account_output_gigawords | long |
| account_output_octets | long |
| account_output_packets | long |
| account_session_id | string |
| account_session_time | long |
| accounting_session_id | string |
| calling_station_id | string |
| connect_info | string |
| delegated_ipv6_prefix | string |
| dst_display_name | string |
| dst_host_luid | string |
| dst_luid | string |
| dst_luid_external | bool |
| event_timestamp | datetime |
| filter_id | string |
| framed_address | string |
| framed_interface | long |
| framed_ip_address | string |
| framed_ipv6_prefix | string |
| framed_protocol | long |
| id_ip_ver | string |
| id_orig_h | string |
| id_orig_p | int |
| id_resp_h | string |
| id_resp_p | int |
| idle_timeout | long |
| logged | bool |
| mac | string |
| nas_identifier | string |
| nas_ip_address | string |
| nas_port | long |
| nas_port_id | string |
| nas_port_type | long |
| password | string |
| password_seen | bool |
| radius_type | string |
| reply_msg | string |
| reply_timestamp | datetime |
| result | string |
| service_type | long |
| session_timeout | long |
| src_display_name | string |
| src_host_luid | string |
| src_luid | string |
| src_luid_external | bool |
| TimeGenerated | datetime |
| ttl | long |
| tunnel_client | string |
| uid | string |
| username | string |

## Solutions (1)

This table is used by the following solutions:

- [Vectra AI Stream](../solutions/vectra-ai-stream.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [[Recommended] Vectra AI Stream via AMA](../connectors/vectrastreamama.md) |  |

---

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [vectra_radius](../parsers/vectra-radius.md) | [Vectra AI Stream](../solutions/vectra-ai-stream.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

