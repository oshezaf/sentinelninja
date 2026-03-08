# Corelight_v2_smb_mapping_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
| **Ingestion API Supported** | ✓ Yes |

## Schema (21 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/Corelight_v2_smb_mapping_CL.json)

| Column Name | Type |
|:------------|:-----|
| _path_s | string |
| _system_name_s | string |
| _timestamp_s | string |
| _timestamp_t | datetime |
| _version_s | string |
| _write_ts_t | datetime |
| id_orig_h_s | string |
| id_orig_l2_addr_s | string |
| id_orig_l2_vendor_s | string |
| id_orig_p_d | real |
| id_resp_h_s | string |
| id_resp_l2_addr_s | string |
| id_resp_l2_vendor_s | string |
| id_resp_p_d | real |
| native_file_system_s | string |
| path_s | string |
| service_s | string |
| share_type_s | string |
| sid | string |
| TimeGenerated | datetime |
| uid_s | string |

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

### Hunting Queries (1)

**In solution [Corelight](../solutions/corelight.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Corelight - Multiple Remote SMB Connections from single client](../content/corelight-corelight-multiple-remote-smb-connections-from-single-client-69736969-6ae0-48cd-a05a-743f7372ee84-4142e974.md) |  |

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
| [corelight_smb_mapping](../parsers/corelight-smb-mapping.md) | [Corelight](../solutions/corelight.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Tables Index](../tables-index.md)

