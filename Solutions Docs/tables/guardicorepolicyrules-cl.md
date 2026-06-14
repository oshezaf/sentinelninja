# GuardicorePolicyRules_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Ingestion API Supported** | ✓ Yes |

## Contents

- [Schema](#schema)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Content Items](#content-items-using-this-table)

## Schema (31 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/GuardicorePolicyRules_CL.json)

| Column Name | Type |
|:------------|:-----|
| _ResourceId | string |
| action | string |
| attributes | dynamic |
| author | dynamic |
| comments | string |
| Computer | string |
| destination | dynamic |
| enabled | bool |
| exclude_port_ranges | dynamic |
| exclude_ports | dynamic |
| hit_count | long |
| icmp_matches | dynamic |
| id | string |
| ip_protocols | dynamic |
| ManagementGroupName | string |
| MG | string |
| network_profile | string |
| port_ranges | dynamic |
| ports | dynamic |
| RawData | string |
| read_only | bool |
| ruleset_name | string |
| sampling_timestamp | int |
| scope | dynamic |
| section_position | string |
| source | dynamic |
| SourceSystem | string |
| state | string |
| TenantId | string |
| TimeGenerated | datetime |
| Type | string |

## Solutions (1)

This table is used by the following solutions:

- [Akamai Guardicore](../solutions/akamai-guardicore.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Akamai Guardicore](../connectors/akamaiguardicore.md) |  |

---

## Content Items Using This Table (1)

### Workbooks (1)

**In solution [Akamai Guardicore](../solutions/akamai-guardicore.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [GuardicoreInfo](../content/akamai-guardicore-guardicoreinfo-922f455f.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

