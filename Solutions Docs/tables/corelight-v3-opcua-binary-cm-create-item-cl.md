# Corelight_v3_opcua_binary_cm_create_item_CL

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

## Schema (40 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/Corelight_v3_opcua_binary_cm_create_item_CL.json)

| Column Name | Type |
|:------------|:-----|
| create_item_link_id | string |
| filter_info_details_link_id | string |
| id_orig_h | string |
| id_orig_p | int |
| id_resp_h | string |
| id_resp_p | int |
| item_to_monitor_attribute_id | string |
| item_to_monitor_index_range | string |
| item_to_monitor_name | string |
| item_to_monitor_namespace_idx | long |
| item_to_monitor_node_id_encoding_mask | string |
| item_to_monitor_node_id_guid | string |
| item_to_monitor_node_id_namespace_idx | long |
| item_to_monitor_node_id_numeric | long |
| item_to_monitor_node_id_opaque | string |
| item_to_monitor_node_id_string | string |
| mon_params_filter_type_id_node_id_enc_mask | string |
| mon_params_filter_type_id_node_id_ns_idx | long |
| monitored_item_index_id | long |
| monitoring_mode | string |
| monitoring_parameters_client_handle | long |
| monitoring_parameters_discard_oldest | bool |
| monitoring_parameters_filter_info_type_id_encoding | string |
| monitoring_parameters_filter_info_type_id_node_id_guid | string |
| monitoring_parameters_filter_info_type_id_node_id_numeric | long |
| monitoring_parameters_filter_info_type_id_node_id_opaque | string |
| monitoring_parameters_filter_info_type_id_node_id_string | string |
| monitoring_parameters_filter_info_type_id_string | string |
| monitoring_parameters_queue_size | long |
| monitoring_parameters_revised_queue_size | long |
| monitoring_parameters_revised_sampling_interval | real |
| monitoring_parameters_sampling_interval | real |
| monitoring_parameters_status_code_link_id | string |
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
| [corelight_opcua_binary_create_monitored_items_create_item](../parsers/corelight-opcua-binary-create-monitored-items-create-item.md) | [Corelight](../solutions/corelight.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

