# Corelight_v2_dns_agg_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

---

## Schema (30 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/Corelight_v2_dns_agg_CL.json)

| Column Name | Type |
|:------------|:-----|
| _path_s | string |
| _system_name_s | string |
| AA_b | bool |
| answers_s | string |
| icann_domain_s | string |
| icann_host_subdomain_s | string |
| icann_tld_s | string |
| id_orig_h_s | string |
| id_orig_p_d | real |
| id_resp_h_s | string |
| id_resp_p_d | real |
| is_trusted_domain_b | bool |
| proto_s | string |
| qclass_d | real |
| qclass_name_s | string |
| qtype_d | real |
| qtype_name_s | string |
| query_s | string |
| RA_b | bool |
| rcode_d | real |
| rcode_name_s | string |
| RD_b | bool |
| rejected_b | bool |
| rtt_d | real |
| TC_b | bool |
| TimeGenerated | datetime |
| trans_id_d | string |
| TTLs_s | string |
| uid_s | string |
| Z_d | real |

---

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [corelight_dns_agg](../parsers/corelight-dns-agg.md) | [Corelight](../solutions/corelight.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

