# Corelight_v2_vpn_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
| **Ingestion API Supported** | ✓ Yes |

## Schema (27 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/Corelight_v2_vpn_CL.json)

| Column Name | Type |
|:------------|:-----|
| _path_s | string |
| _system_name_s | string |
| _write_ts_t | datetime |
| client_info_s | string |
| duration_d | real |
| id_orig_h_s | string |
| id_orig_p_d | real |
| id_resp_h_s | string |
| id_resp_p_d | real |
| inferences_s | string |
| issuer_s | string |
| orig_bytes_d | real |
| orig_cc_s | string |
| orig_city_s | string |
| orig_region_s | string |
| proto_s | string |
| resp_bytes_d | real |
| resp_cc_s | string |
| resp_city_s | string |
| resp_region_s | string |
| server_name_s | string |
| service_s | string |
| subject_s | string |
| TimeGenerated | datetime |
| ts_t | datetime |
| uid_s | string |
| vpn_type_s | string |

## Solutions (1)

This table is used by the following solutions:

- [Corelight](../solutions/corelight.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Corelight Connector Exporter](../connectors/corelightconnectorexporter.md) |  |

---

## Content Items Using This Table (4)

### Workbooks (4)

**In solution [Corelight](../solutions/corelight.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Corelight](../content/corelight-corelight-90dad195.md) |  |
| [Corelight_Alert_Aggregations](../content/corelight-corelight-alert-aggregations-f385ae6f.md) |  |
| [Corelight_Data_Explorer](../content/corelight-corelight-data-explorer-258d9f06.md) |  |
| [Corelight_Security_Workflow](../content/corelight-corelight-security-workflow-7c756761.md) |  |

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [corelight_vpn](../parsers/corelight-vpn.md) | [Corelight](../solutions/corelight.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

