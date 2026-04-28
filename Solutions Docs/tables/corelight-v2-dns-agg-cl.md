# Corelight_v2_dns_agg_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
| **Ingestion API Supported** | ✓ Yes |

## Contents

- [Schema](#schema)
- [Solutions](#solutions)
- [Content Items](#content-items-using-this-table)
- [Parsers](#parsers-using-this-table)

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

## Solutions (1)

This table is used by the following solutions:

- [Corelight](../solutions/corelight.md)

---

## Content Items Using This Table (1)

### Workbooks (1)

**In solution [Corelight](../solutions/corelight.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [Corelight_Data_Explorer](../content/corelight-corelight-data-explorer-258d9f06.md) |  |

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [corelight_dns_agg](../parsers/corelight-dns-agg.md) | [Corelight](../solutions/corelight.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

