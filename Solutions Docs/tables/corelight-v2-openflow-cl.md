# Corelight_v2_openflow_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
| **Ingestion API Supported** | ✓ Yes |

## Schema (38 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/Corelight_v2_openflow_CL.json)

| Column Name | Type |
|:------------|:-----|
| _path_s | string |
| _system_name_s | string |
| _write_ts_t | datetime |
| dpid_d | real |
| flow_mod_actions_dl_dst_s | string |
| flow_mod_actions_dl_src_s | string |
| flow_mod_actions_nw_dst_s | string |
| flow_mod_actions_nw_src_s | string |
| flow_mod_actions_nw_tos_d | real |
| flow_mod_actions_out_ports_s | string |
| flow_mod_actions_tp_dst_d | real |
| flow_mod_actions_tp_src_d | real |
| flow_mod_actions_vlan_pcp_d | real |
| flow_mod_actions_vlan_strip_b | bool |
| flow_mod_actions_vlan_vid_d | real |
| flow_mod_command_s | string |
| flow_mod_cookie_d | real |
| flow_mod_flags_d | real |
| flow_mod_hard_timeout_d | real |
| flow_mod_idle_timeout_d | real |
| flow_mod_out_group_d | real |
| flow_mod_out_port_d | real |
| flow_mod_priority_d | real |
| flow_mod_table_id_d | real |
| match_dl_dst_s | string |
| match_dl_src_s | string |
| match_dl_type_d | real |
| match_dl_vlan_d | real |
| match_dl_vlan_pcp_d | real |
| match_in_port_d | real |
| match_nw_dst_s | string |
| match_nw_proto_d | real |
| match_nw_src_s | string |
| match_nw_tos_d | real |
| match_tp_dst_d | real |
| match_tp_src_d | real |
| TimeGenerated | datetime |
| ts_t | datetime |

## Solutions (1)

This table is used by the following solutions:

- [Corelight](../solutions/corelight.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) |  |

---

## Content Items Using This Table (3)

### Workbooks (3)

**In solution [Corelight](../solutions/corelight.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Corelight_Alert_Aggregations](../content/corelight-corelight-alert-aggregations-f385ae6f.md) |  |
| [Corelight_Data_Explorer](../content/corelight-corelight-data-explorer-258d9f06.md) |  |
| [Corelight_Security_Workflow](../content/corelight-corelight-security-workflow-7c756761.md) |  |

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [corelight_openflow](../parsers/corelight-openflow.md) | [Corelight](../solutions/corelight.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

