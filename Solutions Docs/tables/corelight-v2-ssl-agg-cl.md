# Corelight_v2_ssl_agg_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

## Schema (22 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/Corelight_v2_ssl_agg_CL.json)

| Column Name | Type |
|:------------|:-----|
| _path_s | string |
| _system_name_s | string |
| cert_chain_fps_s | string |
| cipher_s | string |
| client_cert_chain_fps_s | string |
| curve_s | string |
| established_b | bool |
| id_orig_h_s | string |
| id_orig_p_d | real |
| id_resp_h_s | string |
| id_resp_p_d | real |
| ja3_s | string |
| ja3s_s | string |
| next_protocol_s | string |
| resumed_b | bool |
| server_name_s | string |
| sni_matches_cert_b | bool |
| ssl_history_s | string |
| TimeGenerated | datetime |
| uid_s | string |
| validation_status_s | string |
| version_s | string |

---

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [corelight_ssl_agg](../parsers/corelight-ssl-agg.md) | [Corelight](../solutions/corelight.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

