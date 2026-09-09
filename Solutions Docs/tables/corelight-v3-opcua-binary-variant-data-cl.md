# Corelight_v3_opcua_binary_variant_data_CL

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
- [Parsers](#parsers-using-this-table)

## Schema (35 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/Corelight_v3_opcua_binary_variant_data_CL.json)

| Column Name | Type |
|:------------|:-----|
| id_orig_h | string |
| id_orig_p | int |
| id_resp_h | string |
| id_resp_p | int |
| path | string |
| system_name | string |
| TimeGenerated | datetime |
| ts | datetime |
| Type | string |
| uid | string |
| variant_data_diag_info_link_id | string |
| variant_data_encoding_name | string |
| variant_data_encoding_name_idx | long |
| variant_data_ext_obj_link_id | string |
| variant_data_link_id | string |
| variant_data_locale | string |
| variant_data_mask | string |
| variant_data_node_id_encoding_mask | string |
| variant_data_node_id_guid | string |
| variant_data_node_id_namespace_idx | long |
| variant_data_node_id_namespace_uri | string |
| variant_data_node_id_numeric | long |
| variant_data_node_id_opaque | string |
| variant_data_node_id_server_idx | long |
| variant_data_node_id_string | string |
| variant_data_status_code_link_id | string |
| variant_data_text | string |
| variant_data_value_decimal | real |
| variant_data_value_link_id | string |
| variant_data_value_signed_numeric | int |
| variant_data_value_string | string |
| variant_data_value_time | datetime |
| variant_data_value_unsigned_numeric | long |
| variant_metadata_data_link_id | string |
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

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [corelight_opcua_binary_variant_data](../parsers/corelight-opcua-binary-variant-data.md) | [Corelight](../solutions/corelight.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

