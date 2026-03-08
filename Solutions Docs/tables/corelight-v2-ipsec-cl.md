# Corelight_v2_ipsec_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
| **Ingestion API Supported** | ✓ Yes |

## Schema (34 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/Corelight_v2_ipsec_CL.json)

| Column Name | Type |
|:------------|:-----|
| _path_s | string |
| _system_name_s | string |
| _write_ts_t | datetime |
| certificates_s | string |
| doi_d | real |
| exchange_type_d | real |
| flag_a_b | bool |
| flag_c_b | bool |
| flag_e_b | bool |
| flag_i_b | bool |
| flag_r_b | bool |
| flag_v_b | bool |
| id_orig_h_s | string |
| id_orig_p_d | real |
| id_resp_h_s | string |
| id_resp_p_d | real |
| initiator_spi_s | string |
| is_orig_b | bool |
| ke_dh_groups_s | string |
| length_d | real |
| maj_ver_d | real |
| message_id_d | real |
| min_ver_d | real |
| notify_messages_s | string |
| proposals_s | string |
| protocol_id_d | real |
| responder_spi_s | string |
| situation_s | string |
| TimeGenerated | datetime |
| transform_attributes_s | string |
| transforms_s | string |
| ts_t | datetime |
| uid_s | string |
| vendor_ids_s | string |

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
| [corelight_ipsec](../parsers/corelight-ipsec.md) | [Corelight](../solutions/corelight.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

