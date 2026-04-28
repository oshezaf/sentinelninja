# GigamonV2_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Ingestion API Supported** | ✓ Yes |

## Contents

- [Schema](#schema)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Content Items](#content-items-using-this-table)

## Schema (129 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Gigamon%20Connector%5CData%20Connectors%5CGigamon_CCF/Gigamon_table.json)

| Column Name | Type |
|:------------|:-----|
| app_family | string |
| app_id | string |
| app_name | string |
| app_tags | string |
| device_inbound_interface | string |
| dicom_pdu_data_pdv_elem_val_cs | string |
| dicom_pdu_data_pdv_elem_val_pn | string |
| dnp3_al_function_code | string |
| dnp3_dl_dir | string |
| dnp3_dl_function_code | string |
| dns_class | string |
| dns_flags | string |
| dns_host | string |
| dns_host_addr | string |
| dns_host_class | string |
| dns_host_raw | string |
| dns_host_type | string |
| dns_name | string |
| dns_opcode | string |
| dns_query | string |
| dns_query_type | string |
| dns_reply_code | string |
| dns_response_time | string |
| dns_ttl | string |
| dst_bytes | string |
| dst_inner_bytes | string |
| dst_ip | string |
| dst_ipv6 | string |
| dst_mac | string |
| dst_packets | string |
| dst_port | string |
| egress_intf_id | string |
| end_time | string |
| flow_end_sec | string |
| flow_end_usec | string |
| flow_start_sec | string |
| flow_start_usec | string |
| generator | string |
| hl7_msg_seg_name | string |
| hl7_version | string |
| http_code | string |
| http_content_encoding | string |
| http_rtt | string |
| http_version | string |
| id | string |
| ingress_vlan_id | string |
| intf_name | string |
| ip_frag_flags | string |
| ip_hdr_len | string |
| ip_ttl | string |
| ip_version | string |
| ip_wrong_crc | string |
| modbus_exception_code | string |
| mpls | string |
| next_hdr_v6 | string |
| outer_dst_ip | string |
| outer_src_ip | string |
| protocol | string |
| RawData | string |
| seq_num | string |
| smb_version | string |
| snmp_version | string |
| src_bytes | string |
| src_inner_bytes | string |
| src_ip | string |
| src_ipv6 | string |
| src_mac | string |
| src_packets | string |
| src_port | string |
| ssl_certificate_algo_oid | string |
| ssl_certificate_algo_oid_raw | string |
| ssl_certificate_algo_raw | string |
| ssl_certificate_dn_issuer | string |
| ssl_certificate_issuer_c | string |
| ssl_certificate_raw | string |
| ssl_certificate_subject_c | string |
| ssl_certificate_subject_cn | string |
| ssl_certificate_subject_key_algo_oid | string |
| ssl_certificate_subject_key_algo_oid_raw | string |
| ssl_certificate_subject_key_algo_raw | string |
| ssl_certificate_subject_key_size | string |
| ssl_certificate_subject_key_value_raw | string |
| ssl_certificate_subject_o | string |
| ssl_cipher_suite_id | string |
| ssl_common_name | string |
| ssl_common_name_raw | string |
| ssl_content_type | string |
| ssl_ext_sig_algorithm_hash | string |
| ssl_ext_sig_algorithm_scheme | string |
| ssl_ext_sig_algorithm_sig | string |
| ssl_ext_sig_algorithms_len | string |
| ssl_fingerprint_ja3 | string |
| ssl_fingerprint_ja3_full | string |
| ssl_fingerprint_ja3s | string |
| ssl_fingerprint_ja3s_full | string |
| ssl_handshake_type | string |
| ssl_issuer | string |
| ssl_key_share_group | string |
| ssl_organization_name | string |
| ssl_protocol_version | string |
| ssl_session_id | string |
| ssl_validity_not_after | string |
| ssl_validity_not_before | string |
| SSL_version | string |
| start_time | string |
| tcp_ack_id | string |
| tcp_dport | string |
| tcp_flag_reset | string |
| tcp_flags | string |
| tcp_hdr_len | string |
| tcp_loss_count | string |
| tcp_rtt | string |
| tcp_rtt_app | string |
| tcp_seq_no | string |
| tcp_sport | string |
| tcp_win_size | string |
| tcpflagfin | string |
| tcpflagrst | string |
| tcpflagsyn | string |
| tcpflagsynack | string |
| TimeGenerated | datetime |
| total_bytes | string |
| total_packets | string |
| ts | string |
| udp_dport | string |
| udp_msg_len | string |
| udp_sport | string |
| vendor | string |
| version | string |

## Solutions (1)

This table is used by the following solutions:

- [Gigamon Connector](../solutions/gigamon-connector.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Gigamon AMX Connector](../connectors/gigamondefinition.md) |  |

---

## Content Items Using This Table (1)

### Workbooks (1)

**In solution [Gigamon Connector](../solutions/gigamon-connector.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [Gigamon](../content/gigamon-connector-gigamon-07ba033c.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

