# Corelight_v2_http_agg_CL

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

## Schema (32 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/Corelight_v2_http_agg_CL.json)

| Column Name | Type |
|:------------|:-----|
| _path_s | string |
| _system_name_s | string |
| host_s | string |
| id_orig_h_s | string |
| id_orig_p_d | real |
| id_resp_h_s | string |
| id_resp_p_d | real |
| info_code_d | real |
| info_msg_s | string |
| method_s | string |
| orig_filenames_s | string |
| orig_fuids_s | string |
| orig_mime_types_s | string |
| origin_s | string |
| password_s | string |
| post_body_s | string |
| proxied_s | string |
| referrer_s | string |
| request_body_len_d | real |
| resp_filenames_s | string |
| resp_fuids_s | string |
| resp_mime_types_s | string |
| response_body_len_d | real |
| status_code_d | real |
| status_msg_s | string |
| tags_s | string |
| TimeGenerated | datetime |
| uid_s | string |
| uri_s | string |
| user_agent_s | string |
| username_s | string |
| version_s | string |

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
| [corelight_http_agg](../parsers/corelight-http-agg.md) | [Corelight](../solutions/corelight.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

