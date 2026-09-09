# Corelight_v3_files_red_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Ingestion API Supported** | ✓ Yes |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Content Items](#content-items-using-this-table)
- [Parsers](#parsers-using-this-table)

## Schema (37 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/Corelight_v3_files_red_CL.json)

| Column Name | Type |
|:------------|:-----|
| analyzers | dynamic |
| conn_uids | dynamic |
| depth | long |
| duration | real |
| extracted | dynamic |
| extracted_cutoff | bool |
| extracted_size | long |
| filename | string |
| fuid | string |
| id_orig_h | string |
| id_orig_p | int |
| id_resp_h | string |
| id_resp_p | int |
| is_orig | bool |
| local_orig | bool |
| md5 | string |
| mime_type | string |
| missing_bytes | long |
| num | long |
| overflow_bytes | long |
| parent_fuid | string |
| path | string |
| rx_hosts | dynamic |
| seen_bytes | long |
| sha1 | string |
| sha256 | string |
| source | string |
| system_name | string |
| timedout | bool |
| TimeGenerated | datetime |
| total_bytes | long |
| ts | dynamic |
| tx_hosts | dynamic |
| Type | string |
| uid | string |
| vlan | real |
| write_ts | datetime |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

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

| Hunting Query | Selection Criteria |
|:-------------|:-------------------|
| [Corelight - Files in logs](../content/corelight-corelight-files-in-logs-0c3ad86f-6b92-4ff5-8d41-86ff7e01d518-360eb7b5.md) |  |

### Workbooks (3)

**In solution [Corelight](../solutions/corelight.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [Corelight](../content/corelight-corelight-90dad195.md) |  |
| [Corelight_Data_Explorer](../content/corelight-corelight-data-explorer-258d9f06.md) |  |
| [Corelight_Security_Workflow](../content/corelight-corelight-security-workflow-7c756761.md) |  |

## Parsers Using This Table (2)

### Other Parsers (2)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [corelight_files](../parsers/corelight-files.md) | [Corelight](../solutions/corelight.md) |  |
| [corelight_files_red](../parsers/corelight-files-red.md) | [Corelight](../solutions/corelight.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

