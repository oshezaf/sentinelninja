# Corelight_v3_opcua_bef_where_clause_elements_CL

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

## Schema (24 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/Corelight_v3_opcua_bef_where_clause_elements_CL.json)

| Column Name | Type |
|:------------|:-----|
| content_filter_element_link_id | string |
| content_filter_filter_operand_link_id | string |
| content_filter_filter_operand_type_id_encoding | string |
| content_filter_filter_operand_type_id_node_id_encoding_mask | string |
| content_filter_filter_operand_type_id_node_id_guid | string |
| content_filter_filter_operand_type_id_node_id_namespace_idx | long |
| content_filter_filter_operand_type_id_node_id_numeric | long |
| content_filter_filter_operand_type_id_node_id_opaque | string |
| content_filter_filter_operand_type_id_node_id_string | string |
| content_filter_filter_operand_type_id_string | string |
| content_filter_operand_diag_info_link_id | string |
| content_filter_operand_status_code_link_id | string |
| filter_operator | string |
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
| [corelight_opcua_binary_event_filter_where_clause_elements](../parsers/corelight-opcua-binary-event-filter-where-clause-elements.md) | [Corelight](../solutions/corelight.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

