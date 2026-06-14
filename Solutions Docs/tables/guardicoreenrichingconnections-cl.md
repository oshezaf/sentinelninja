# GuardicoreEnrichingConnections_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Ingestion API Supported** | ✓ Yes |

## Contents

- [Schema](#schema)
- [Solutions](#solutions)
- [Content Items](#content-items-using-this-table)

## Schema (45 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/GuardicoreEnrichingConnections_CL.json)

| Column Name | Type |
|:------------|:-----|
| _ResourceId | string |
| Computer | string |
| connection_type | string |
| connector_dest_rule_id | string |
| connector_source_rule_id | string |
| count | long |
| destination_asset_hash | long |
| destination_ip | string |
| destination_node_id | string |
| destination_node_type | string |
| destination_port | long |
| destination_process | string |
| destination_process_full_path | string |
| destination_process_id | string |
| destination_process_name | string |
| destination_windows_service_display_name | string |
| destination_windows_service_name | string |
| has_mismatch_alert | bool |
| id | string |
| ip_protocol | string |
| ManagementGroupName | string |
| MG | string |
| original_policy_verdict | string |
| policy_rule | string |
| policy_ruleset | string |
| policy_verdict | string |
| RawData | string |
| sampling_timestamp | int |
| slot_identifier | string |
| slot_start_time | real |
| source_ip | string |
| source_node_id | string |
| source_node_type | string |
| source_process | string |
| source_process_full_path | string |
| source_process_hash | string |
| source_process_id | string |
| source_process_name | string |
| source_windows_service_display_name | string |
| source_windows_service_name | string |
| SourceSystem | string |
| TenantId | string |
| TimeGenerated | datetime |
| Type | string |
| violates_policy | bool |

## Solutions (1)

This table is used by the following solutions:

- [Akamai Guardicore](../solutions/akamai-guardicore.md)

---

## Content Items Using This Table (1)

### Workbooks (1)

**In solution [Akamai Guardicore](../solutions/akamai-guardicore.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [GuardicoreIncident](../content/akamai-guardicore-guardicoreincident-eaef0237.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

