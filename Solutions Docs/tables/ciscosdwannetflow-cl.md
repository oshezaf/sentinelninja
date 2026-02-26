# CiscoSDWANNetflow_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Supports Transformations** | ✗ No |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✗ No |
| **Sentinel Tables and Connectors Reference** | [View Documentation](https://learn.microsoft.com/azure/sentinel/data-connectors-reference) |

## Schema (167 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/CiscoSDWANNetflow_CL.json)

| Column Name | Type |
|:------------|:-----|
| _ResourceId | string |
| _timestamp_t | datetime |
| _version_s | string |
| agent_ephemeral_id_g | string |
| agent_id_g | string |
| agent_name_s | string |
| agent_type_s | string |
| agent_version_s | string |
| cloud_availability_zone_s | string |
| cloud_instance_id_s | string |
| cloud_instance_name_s | string |
| cloud_machine_type_s | string |
| cloud_provider_s | string |
| cloud_service_name_s | string |
| Computer | string |
| ecs_version_s | string |
| event_action_s | string |
| event_category_s | string |
| event_created_t | datetime |
| event_kind_s | string |
| event_type_s | string |
| flow_id_s | string |
| flow_locality_s | string |
| host_architecture_s | string |
| host_containerized_b | bool |
| host_hostname_s | string |
| host_id_g | string |
| host_ip_s | string |
| host_mac_s | string |
| host_name_s | string |
| host_os_codename_s | string |
| host_os_family_s | string |
| host_os_kernel_s | string |
| host_os_name_s | string |
| host_os_platform_s | string |
| host_os_type_s | string |
| host_os_version_s | string |
| input_type_s | string |
| ManagementGroupName | string |
| MG | string |
| netflow_application_tag_s | string |
| netflow_biflow_direction_d | real |
| netflow_bytes_in_but_not_coming_in_hsl_data_d | real |
| netflow_bytes_in_d | real |
| netflow_egress_vrf_id_d | real |
| netflow_element_9_2239_d | real |
| netflow_exporter_address_s | string |
| netflow_exporter_source_id_d | real |
| netflow_exporter_timestamp_t | datetime |
| netflow_exporter_uptime_millis_d | real |
| netflow_exporter_version_d | real |
| netflow_firewall_event_d | real |
| netflow_flow_class_id_d | real |
| netflow_flow_end_milliseconds_t | datetime |
| netflow_flow_end_reason_d | real |
| netflow_flow_field_dst_dsa_id_d | real |
| netflow_flow_field_sgt_d | real |
| netflow_flow_field_src_dsa_id_d | real |
| netflow_flow_start_milliseconds_t | datetime |
| netflow_fw_action_d | real |
| netflow_fw_dest_addr_ipv4_s | string |
| netflow_fw_dest_port_d | real |
| netflow_fw_event_time_msec_d | real |
| netflow_fw_ext_event_d | real |
| netflow_fw_icmp_code_d | real |
| netflow_fw_icmp_type_d | real |
| netflow_fw_initiator_octets_d | real |
| netflow_fw_ipv4_ident_d | real |
| netflow_fw_policy_d | real |
| netflow_fw_protocol_d | real |
| netflow_fw_responder_octets_d | real |
| netflow_fw_src_addr_ipv4_s | string |
| netflow_fw_src_port_d | real |
| netflow_fw_summary_pkt_cnt_d | real |
| netflow_fw_tcp_ack_d | real |
| netflow_fw_tcp_flags_d | real |
| netflow_fw_tcp_seq_d | real |
| netflow_fw_username_s | string |
| netflow_fw_xlate_dst_addr_ipv4_s | string |
| netflow_fw_xlate_dst_port_d | real |
| netflow_fw_xlate_src_addr_ipv4_s | string |
| netflow_fw_xlate_src_port_d | real |
| netflow_fw_zonepair_id_d | real |
| netflow_ingress_vrf_id_d | real |
| netflow_input_snmpidx_d | real |
| netflow_ip_diff_serv_code_point_d | real |
| netflow_options_application_description_s | string |
| netflow_options_application_name_s | string |
| netflow_options_application_tag_s | string |
| netflow_options_encrypted_technology_s | string |
| netflow_options_flow_class_id_d | real |
| netflow_options_fw_action_rule_s | string |
| netflow_options_fw_ext_event_d | real |
| netflow_options_fw_ext_event_desc_s | string |
| netflow_options_fw_policy_d | real |
| netflow_options_fw_policy_rule_s | string |
| netflow_options_fw_policy_type_s | string |
| netflow_options_fw_zonepair_id_d | real |
| netflow_options_fw_zonepair_name_s | string |
| netflow_options_interface_description_s | string |
| netflow_options_interface_name_s | string |
| netflow_options_p2p_technology_s | string |
| netflow_options_sdvt_drop_reason_name_s | string |
| netflow_options_tunnel_technology_s | string |
| netflow_options_utd_action_name_s | string |
| netflow_options_utd_amp_dispos_name_s | string |
| netflow_options_utd_amp_filename_s | string |
| netflow_options_utd_amp_filetype_name_s | string |
| netflow_options_utd_drop_reason_name_s | string |
| netflow_options_utd_policy_name_s | string |
| netflow_options_utd_urlf_category_name_s | string |
| netflow_options_utd_urlf_url_str_s | string |
| netflow_options_utd_urlf_webfilter_name_s | string |
| netflow_output_snmpidx_d | real |
| netflow_packets_in_but_not_coming_in_hsl_data_d | real |
| netflow_packets_in_d | real |
| netflow_post_ip_diff_serv_code_point_d | real |
| netflow_scope_application_tag_s | string |
| netflow_scope_element_9_2239_d | real |
| netflow_scope_fw_action_d | real |
| netflow_scope_fw_policy_d | real |
| netflow_scope_ip_diff_serv_code_point_d | real |
| netflow_scope_sdvt_drop_reason_id_s | string |
| netflow_scope_utd_amp_action_d | real |
| netflow_scope_utd_amp_dispos_d | real |
| netflow_scope_utd_amp_file_type_d | real |
| netflow_scope_utd_amp_filename_hash_s | string |
| netflow_scope_utd_drop_reason_id_s | string |
| netflow_scope_utd_ips_action_d | real |
| netflow_scope_utd_ips_policy_id_d | real |
| netflow_scope_utd_urlf_action_d | real |
| netflow_scope_utd_urlf_reason_id_d | real |
| netflow_scope_utd_urlf_url_category_d | real |
| netflow_scope_utd_urlf_url_hash_s | string |
| netflow_sdvt_drop_reason_id_s | string |
| netflow_src_tos_d | real |
| netflow_type_s | string |
| netflow_username_s | string |
| netflow_utd_amp_action_d | real |
| netflow_utd_amp_dispos_d | real |
| netflow_utd_amp_file_type_d | real |
| netflow_utd_amp_filename_hash_s | string |
| netflow_utd_amp_malname_hash_s | string |
| netflow_utd_amp_policy_id_d | real |
| netflow_utd_drop_reason_id_s | string |
| netflow_utd_ips_action_d | real |
| netflow_utd_ips_cid_d | real |
| netflow_utd_ips_gid_d | real |
| netflow_utd_ips_policy_id_d | real |
| netflow_utd_ips_pri_d | real |
| netflow_utd_ips_sid_d | real |
| netflow_utd_urlf_action_d | real |
| netflow_utd_urlf_app_name_s | string |
| netflow_utd_urlf_policy_id_d | real |
| netflow_utd_urlf_reason_id_d | real |
| netflow_utd_urlf_url_category_d | real |
| netflow_utd_urlf_url_hash_s | string |
| netflow_utd_urlf_url_reputation_d | real |
| network_community_id_s | string |
| network_direction_s | string |
| observer_ip_s | string |
| RawData | string |
| SourceSystem | string |
| tags_s | string |
| TenantId | string |
| TimeGenerated | datetime |
| Type | string |

## Solutions (1)

This table is used by the following solutions:

- [Cisco SD-WAN](../solutions/cisco-sd-wan.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Cisco Software Defined WAN](../connectors/ciscosdwan.md) |  |

---

## Content Items Using This Table (3)

### Analytic Rules (2)

**In solution [Cisco SD-WAN](../solutions/cisco-sd-wan.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Cisco SDWAN - Maleware Events](../content/cisco-sd-wan-cisco-sdwan-maleware-events-cb14defd-3415-4420-a2e4-2dd0f3e07a86-22961fd0.md) |  |
| [Cisco SDWAN - Monitor Critical IPs](../content/cisco-sd-wan-cisco-sdwan-monitor-critical-ips-a62a207e-62be-4a74-acab-4466d5b3854f-5ff0b015.md) |  |

### Workbooks (1)

**In solution [Cisco SD-WAN](../solutions/cisco-sd-wan.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [CiscoSDWAN](../content/cisco-sd-wan-ciscosdwan-1291f60c.md) |  |

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [CiscoSDWANNetflow](../parsers/ciscosdwannetflow.md) | [Cisco SD-WAN](../solutions/cisco-sd-wan.md) ⚠️ |  |

> ⚠️ Parsers marked with ⚠️ are not listed in their Solution JSON file.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

