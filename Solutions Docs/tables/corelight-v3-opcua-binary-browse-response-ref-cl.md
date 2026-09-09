# Corelight_v3_opcua_binary_browse_response_ref_CL

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

## Schema (41 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/Corelight_v3_opcua_binary_browse_response_ref_CL.json)

| Column Name | Type |
|:------------|:-----|
| browse_reference_link_id | string |
| browse_response_display_name_locale | string |
| browse_response_display_name_mask | string |
| browse_response_display_name_text | string |
| browse_response_is_forward | bool |
| browse_response_node_class | string |
| browse_response_ref_encoding_mask | string |
| browse_response_ref_guid | string |
| browse_response_ref_name | string |
| browse_response_ref_name_idx | long |
| browse_response_ref_namespace_idx | long |
| browse_response_ref_numeric | long |
| browse_response_ref_opaque | string |
| browse_response_ref_string | string |
| browse_response_ref_type_encoding_mask | string |
| browse_response_ref_type_guid | string |
| browse_response_ref_type_namespace_idx | long |
| browse_response_ref_type_namespace_uri | string |
| browse_response_ref_type_numeric | long |
| browse_response_ref_type_opaque | string |
| browse_response_ref_type_server_idx | long |
| browse_response_ref_type_string | string |
| browse_response_type_def_encoding_mask | string |
| browse_response_type_def_guid | string |
| browse_response_type_def_namespace_idx | long |
| browse_response_type_def_namespace_uri | string |
| browse_response_type_def_numeric | long |
| browse_response_type_def_opaque | string |
| browse_response_type_def_server_idx | long |
| browse_response_type_def_string | string |
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
| [corelight_opcua_binary_browse_response_references](../parsers/corelight-opcua-binary-browse-response-references.md) | [Corelight](../solutions/corelight.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

