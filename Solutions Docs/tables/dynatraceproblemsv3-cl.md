# DynatraceProblemsV3_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Supports Transformations** | ✗ No |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✗ No ([source](https://learn.microsoft.com/azure/sentinel/data-connectors-reference)) |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Content Items](#content-items-using-this-table)
- [Parsers](#parsers-using-this-table)

## Schema (23 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Dynatrace%5CData%20Connectors%5CDynatraceProblemsV3/Connector_Dynatrace_Problems_table.json)

| Column Name | Type |
|:------------|:-----|
| affected_entities_count | long |
| affected_entity_ids | dynamic |
| affected_entity_names | dynamic |
| affected_users_count | long |
| display_id | string |
| dt_davis_impact_level | string |
| dt_davis_mute_status | string |
| dt_davis_mute_user | string |
| duration | long |
| entity_tags | dynamic |
| event_category | string |
| event_count | long |
| event_description | string |
| event_end | datetime |
| event_name | string |
| event_severity | string |
| event_status | string |
| maintenance_is_under_maintenance | bool |
| problem_id | string |
| root_cause_entity_id | string |
| root_cause_entity_name | string |
| smartscape_affected_entity_ids | dynamic |
| TimeGenerated | datetime |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [Dynatrace](../solutions/dynatrace.md)

## Connectors (2)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Dynatrace Problems V3](../connectors/dtproblemsv3ccpdefinition.md) |  |
| [[Deprecated] Dynatrace Problems V1](../connectors/dynatraceproblems.md) |  |

---

## Content Items Using This Table (2)

### Analytic Rules (1)

**In solution [Dynatrace](../solutions/dynatrace.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Dynatrace - Problem detection](../content/dynatrace-dynatrace-problem-detection-415978ff-074e-4203-824a-b06153d77bf7-a4be516e.md) |  |

### Workbooks (1)

**In solution [Dynatrace](../solutions/dynatrace.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [Dynatrace](../content/dynatrace-dynatrace-eddf4fe2.md) |  |

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [DynatraceProblems](../parsers/dynatraceproblems.md) | [Dynatrace](../solutions/dynatrace.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

