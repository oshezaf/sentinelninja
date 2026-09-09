# Corelight_v3_opcua_binary_aggregate_filter_CL

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

## Schema (34 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/Corelight_v3_opcua_binary_aggregate_filter_CL.json)

| Column Name | Type |
|:------------|:-----|
| aggregate_type_encoding_mask | string |
| aggregate_type_guid | string |
| aggregate_type_namespace_idx | long |
| aggregate_type_numeric | long |
| aggregate_type_opaque | string |
| aggregate_type_string | string |
| id_orig_h | string |
| id_orig_p | int |
| id_resp_h | string |
| id_resp_p | int |
| monitored_parameters_link_id | string |
| path | string |
| percent_data_bad | long |
| percent_data_good | long |
| processing_interval | real |
| revised_percent_data_bad | long |
| revised_percent_data_good | long |
| revised_processing_interval | real |
| revised_start_time | datetime |
| revised_start_time_str | string |
| revised_treat_uncertain_as_bad | bool |
| revised_use_server_capabilities_default | bool |
| revised_use_slopped_extrapolation | bool |
| start_time | datetime |
| start_time_str | string |
| system_name | string |
| TimeGenerated | datetime |
| treat_uncertain_as_bad | bool |
| ts | datetime |
| Type | string |
| uid | string |
| use_server_capabilities_default | bool |
| use_slopped_extrapolation | bool |
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
| [corelight_opcua_binary_aggregate_filter](../parsers/corelight-opcua-binary-aggregate-filter.md) | [Corelight](../solutions/corelight.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

