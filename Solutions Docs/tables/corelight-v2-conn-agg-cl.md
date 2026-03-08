# Corelight_v2_conn_agg_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

## Schema (70 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/Corelight_v2_conn_agg_CL.json)

| Column Name | Type |
|:------------|:-----|
| _path_s | string |
| _system_name_s | string |
| _write_ts_t | datetime |
| app_s | string |
| community_id_s | string |
| conn_state_s | string |
| corelight_shunted_b | bool |
| duration_d | real |
| history_s | string |
| id_orig_h_n_s | string |
| id_orig_h_s | string |
| id_orig_p_d | real |
| id_resp_h_n_s | string |
| id_resp_h_s | string |
| id_resp_p_d | real |
| id_vlan_d | real |
| inner_vlan_d | real |
| local_orig_b | bool |
| local_resp_b | bool |
| missed_bytes_d | real |
| netskope_site_id_s | string |
| netskope_user_id_s | string |
| orig_bytes_d | real |
| orig_inst_az_s | string |
| orig_inst_id_s | string |
| orig_inst_location_s | string |
| orig_inst_name_s | string |
| orig_inst_network_s | string |
| orig_inst_network_tags_s | string |
| orig_inst_nsg_s | string |
| orig_inst_org_id_s | string |
| orig_inst_os_s | string |
| orig_inst_project_s | string |
| orig_inst_resource_group_s | string |
| orig_inst_sg_ids_s | string |
| orig_inst_subnet_id_s | string |
| orig_inst_subscription_s | string |
| orig_inst_vpc_id_s | string |
| orig_ip_bytes_d | real |
| orig_pkts_d | real |
| orig_shunted_bytes_d | real |
| orig_shunted_pkts_d | real |
| proto_s | string |
| resp_bytes_d | real |
| resp_inst_az_s | string |
| resp_inst_id_s | string |
| resp_inst_location_s | string |
| resp_inst_name_s | string |
| resp_inst_network_s | string |
| resp_inst_network_tags_s | string |
| resp_inst_nsg_s | string |
| resp_inst_org_id_s | string |
| resp_inst_os_s | string |
| resp_inst_project_s | string |
| resp_inst_resource_group_s | string |
| resp_inst_sg_ids_s | string |
| resp_inst_subnet_id_s | string |
| resp_inst_subscription_s | string |
| resp_inst_vpc_id_s | string |
| resp_ip_bytes_d | real |
| resp_pkts_d | real |
| resp_shunted_bytes_d | real |
| resp_shunted_pkts_d | real |
| service_s | string |
| spcap_url_s | string |
| suri_ids_s | string |
| TimeGenerated | datetime |
| tunnel_parents_s | string |
| uid_s | string |
| vlan_d | real |

---

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [corelight_conn_agg](../parsers/corelight-conn-agg.md) | [Corelight](../solutions/corelight.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

