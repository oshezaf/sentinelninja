# Corelight_v2_conn_long_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
| **Ingestion API Supported** | ✓ Yes |

## Schema (46 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/Corelight_v2_conn_long_CL.json)

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
| id_orig_h_n_src_s | string |
| id_orig_h_n_vals_s | string |
| id_orig_h_s | string |
| id_orig_p_d | real |
| id_resp_h_n_src_s | string |
| id_resp_h_n_vals_s | string |
| id_resp_h_s | string |
| id_resp_p_d | real |
| inner_vlan_d | real |
| local_orig_b | bool |
| local_resp_b | bool |
| missed_bytes_d | real |
| orig_bytes_d | real |
| orig_cc_s | string |
| orig_ip_bytes_d | real |
| orig_l2_addr_s | string |
| orig_pkts_d | real |
| orig_shunted_bytes_d | real |
| orig_shunted_pkts_d | real |
| proto_s | string |
| resp_bytes_d | real |
| resp_cc_s | string |
| resp_ip_bytes_d | real |
| resp_l2_addr_s | string |
| resp_pkts_d | real |
| resp_shunted_bytes_d | real |
| resp_shunted_pkts_d | real |
| service_s | string |
| spcap_rule_d | real |
| spcap_trigger_s | string |
| spcap_url_s | string |
| suri_ids_s | string |
| TimeGenerated | datetime |
| ts_t | datetime |
| tunnel_parents_s | string |
| uid_s | string |
| vlan_d | real |

## Solutions (1)

This table is used by the following solutions:

- [Corelight](../solutions/corelight.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) |  |

---

## Content Items Using This Table (8)

### Analytic Rules (2)

**In solution [Corelight](../solutions/corelight.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Corelight - Forced External Outbound SMB](../content/corelight-corelight-forced-external-outbound-smb-73f23aa2-5cc4-4507-940b-75c9092e9e01-7d9f3286.md) |  |
| [Corelight - Network Service Scanning Multiple IP Addresses](../content/corelight-corelight-network-service-scanning-multiple-ip-addresses-599570d4-06f8-4939-8e29-95cd003f1abd-442ae0cd.md) |  |

### Hunting Queries (1)

**In solution [Corelight](../solutions/corelight.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Corelight - External Facing Services](../content/corelight-corelight-external-facing-services-3e42a796-9a4c-4ebf-a0e0-5282947986b5-c93e035f.md) |  |

### Workbooks (5)

**In solution [Corelight](../solutions/corelight.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Corelight](../content/corelight-corelight-90dad195.md) |  |
| [Corelight_AWS_VPC_Flow](../content/corelight-corelight-aws-vpc-flow-f89e8db1.md) |  |
| [Corelight_Alert_Aggregations](../content/corelight-corelight-alert-aggregations-f385ae6f.md) |  |
| [Corelight_Data_Explorer](../content/corelight-corelight-data-explorer-258d9f06.md) |  |
| [Corelight_Security_Workflow](../content/corelight-corelight-security-workflow-7c756761.md) |  |

## Parsers Using This Table (2)

### Other Parsers (2)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [corelight_conn](../parsers/corelight-conn.md) | [Corelight](../solutions/corelight.md) |  |
| [corelight_conn_long](../parsers/corelight-conn-long.md) | [Corelight](../solutions/corelight.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

