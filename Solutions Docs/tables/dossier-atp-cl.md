# dossier_atp_CL

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
- [Content Items](#content-items-using-this-table)

## Schema (29 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/dossier_atp_CL.json)

| Column Name | Type |
|:------------|:-----|
| _ResourceId | string |
| data | dynamic |
| data_attack_chain | dynamic |
| data_attack_chain_collection | dynamic |
| data_attack_chain_command_and_control | dynamic |
| data_attack_chain_credential_access | dynamic |
| data_attack_chain_defense_evasion | dynamic |
| data_attack_chain_discovery | string |
| data_attack_chain_execution | dynamic |
| data_attack_chain_exfiltration | dynamic |
| data_attack_chain_impact | string |
| data_attack_chain_initial_access | dynamic |
| data_attack_chain_lateral_movement | string |
| data_attack_chain_persistence | string |
| data_attack_chain_privilege_escalation | string |
| data_record_count | real |
| params | dynamic |
| params_source | string |
| params_target | string |
| params_type | string |
| RowData | dynamic |
| status | string |
| status_message_for_dossier | string |
| task_id | string |
| TenantId | string |
| time_value | real |
| TimeGenerated | datetime |
| Type | string |
| v_value | string |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [Infoblox](../solutions/infoblox.md)

---

## Content Items Using This Table (1)

### Workbooks (1)

**In solution [Infoblox](../solutions/infoblox.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [Infoblox_Lookup_Workbook](../content/infoblox-infoblox-lookup-workbook-5d6a67bf.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

