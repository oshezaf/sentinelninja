# VectraStream_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Supports Transformations** | ✗ No |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✗ No |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |

## Schema (214 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/VectraStream_CL.json)

| Column Name | Type |
|:------------|:-----|
| _ItemId | string |
| _ResourceId | string |
| AA_b | int |
| action_s | string |
| answers_s | string |
| application_s | string |
| assigned_ip_s | string |
| attributes_s | string |
| auth_s | string |
| base_object_s | string |
| basic_constraints_ca_b | int |
| basic_constraints_path_len_d | real |
| beacon_type_s | string |
| beacon_uid_s | string |
| bind_error_count_d | real |
| certificate_cn_s | string |
| certificate_curve_s | string |
| certificate_exponent_s | string |
| certificate_issuer_s | string |
| certificate_key_alg_s | string |
| certificate_key_length_s | string |
| certificate_key_type_s | string |
| certificate_not_valid_after_d | real |
| certificate_not_valid_before_d | real |
| certificate_self_issued_b | int |
| certificate_serial_g | string |
| certificate_serial_s | string |
| certificate_sig_alg_s | string |
| certificate_subject_s | string |
| certificate_version_d | real |
| cipher_alg_s | string |
| cipher_s | string |
| client_build_s | string |
| client_curve_num_s | string |
| client_dig_product_id_s | string |
| client_dig_protocol_id_s | string |
| client_ec_point_format_s | string |
| client_extension_s | string |
| client_issuer_s | string |
| client_name_s | string |
| client_s | string |
| client_subject_s | string |
| client_version_num_d | real |
| client_version_s | string |
| community_id_s | string |
| compression_alg_s | string |
| Computer | string |
| conn_state_s | string |
| cookie_s | string |
| cookie_vars_s | string |
| curve_s | string |
| data_source_s | string |
| date_s | string |
| delete_on_close_b | int |
| desktop_height_d | real |
| desktop_width_d | real |
| dhcp_server_ip_s | string |
| dir_confidence_d | real |
| dns_server_ips_s | string |
| domain_s | string |
| duration_d | real |
| encrypted_sasl_payload_count_d | real |
| endpoint_s | string |
| error_code_s | string |
| error_msg_s | string |
| error_s | string |
| established_b | int |
| first_event_time_d | real |
| first_orig_resp_data_pkt_s | string |
| first_orig_resp_data_pkt_time_d | real |
| first_orig_resp_pkt_time_d | real |
| first_received_s | string |
| first_resp_orig_data_pkt_s | string |
| first_resp_orig_data_pkt_time_d | real |
| first_resp_orig_pkt_time_d | real |
| from_s | string |
| hassh_g | string |
| hasshServer_g | string |
| helo_s | string |
| host_key_alg_s | string |
| host_key_s | string |
| host_multihomed_b | int |
| host_s | string |
| hostname_s | string |
| id_ip_ver_s | string |
| id_orig_h_s | string |
| id_orig_p_d | real |
| id_resp_h_s | string |
| id_resp_p_d | real |
| in_reply_to_s | string |
| is_close_b | int |
| is_proxied_b | int |
| is_query_b | int |
| issuer_s | string |
| ja3_g | string |
| ja3s_g | string |
| kex_alg_s | string |
| keyboard_layout_s | string |
| last_event_time_d | real |
| lease_time_d | real |
| local_orig_b | int |
| local_resp_b | int |
| logon_failure_error_count_d | real |
| mac_alg_s | string |
| mac_s | string |
| mail_from_s | string |
| ManagementGroupName | string |
| matched_dn_s | string |
| message_id_d | real |
| metadata_type_s | string |
| method_s | string |
| MG | string |
| msgid_s | string |
| name_s | string |
| next_protocol_s | string |
| operation_s | string |
| orig_host_observed_privilege_d | real |
| orig_hostname_s | string |
| orig_huid_s | string |
| orig_ip_bytes_d | real |
| orig_ip_bytes_s | string |
| orig_mime_types_s | string |
| orig_pkts_d | real |
| orig_sluid_s | string |
| orig_vlan_id_d | real |
| path_s | string |
| proto_d | real |
| protocol_d | real |
| protoName_s | string |
| proxied_s | string |
| qclass_d | real |
| qclass_name_s | string |
| qtype_d | real |
| qtype_name_s | string |
| query_s | string |
| query_scope_s | string |
| RA_b | int |
| RawData | string |
| rcode_d | real |
| rcode_name_s | string |
| rcpt_to_s | string |
| RD_b | int |
| referrer_s | string |
| rejected_b | int |
| rep_cipher_s | string |
| reply_timestamp_d | real |
| reply_to_s | string |
| req_ciphers_s | string |
| request_body_len_d | real |
| request_bytes_s | string |
| request_cache_control_s | string |
| request_header_count_d | real |
| request_type_s | string |
| resp_domain_s | string |
| resp_domains_s | string |
| resp_filename_s | string |
| resp_hostname_s | string |
| resp_huid_s | string |
| resp_ip_bytes_d | real |
| resp_ip_bytes_s | string |
| resp_mime_types_s | string |
| resp_multihomed_b | int |
| resp_pkts_d | real |
| resp_sluid_s | string |
| resp_vlan_id_d | real |
| response_body_len_d | real |
| response_bytes_s | string |
| response_cache_control_s | string |
| response_content_disposition_s | string |
| response_expires_s | string |
| response_header_count_d | real |
| result_code_s | string |
| result_count_d | real |
| result_s | string |
| rtt_d | real |
| san_dns_s | string |
| san_ip_s | string |
| san_other_fields_b | int |
| saw_query_b | int |
| saw_reply_b | int |
| second_received_s | string |
| sensor_uid_s | string |
| server_extensions_s | string |
| server_name_s | string |
| server_s | string |
| service_s | string |
| session_count_d | real |
| session_start_time_d | real |
| SourceSystem | string |
| spf_mailfrom_s | string |
| status_code_d | real |
| status_d | real |
| status_msg_s | string |
| subject_s | string |
| success_b | int |
| TC_b | int |
| TenantId | string |
| TimeGenerated | datetime |
| tls_b | int |
| to_s | string |
| total_answers_d | real |
| total_replies_d | real |
| trans_id_d | real |
| ts_d | real |
| TTLs_s | string |
| Type | string |
| uid_s | string |
| uri_s | string |
| user_agent_s | string |
| useragent_s | string |
| username_s | string |
| version_num_d | real |
| version_s | string |
| x_originating_ip_s | string |

## Solutions (3)

This table is used by the following solutions:

- [CustomLogsAma](../solutions/customlogsama.md)
- [Team Cymru Scout](../solutions/team-cymru-scout.md)
- [Vectra AI Stream](../solutions/vectra-ai-stream.md)

## Connectors (2)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [AI Vectra Stream via Legacy Agent](../connectors/aivectrastream.md) |  |
| [Custom logs via AMA](../connectors/customlogsviaama.md) |  |

---

## Content Items Using This Table (1)

### Workbooks (1)

**In solution [Team Cymru Scout](../solutions/team-cymru-scout.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [TeamCymruScout](../content/team-cymru-scout-teamcymruscout-b64c6ed4.md) |  |

## Parsers Using This Table (4)

### ASIM Parsers (3)

| Parser | Schema | Product | Selection Criteria |
|:-------|:-------|:--------|:-------------------|
| [ASimDnsVectraAI](../asim/asimdnsvectraai.md) | Dns | Vectra AI Streams |  |
| [ASimNetworkSessionVectraAI](../asim/asimnetworksessionvectraai.md) | NetworkSession | Vectra AI Streams |  |
| [ASimWebSessionVectraAI](../asim/asimwebsessionvectraai.md) | WebSession | Vectra AI Streams |  |

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [VectraStream_function](../parsers/vectrastream-function.md) | [Vectra AI Stream](../solutions/vectra-ai-stream.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

