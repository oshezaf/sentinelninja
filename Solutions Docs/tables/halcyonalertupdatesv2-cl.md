# HalcyonAlertUpdatesV2_CL

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

## Schema (31 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Halcyon%5CData%20Connectors%5CHalcyon_ccp_v2/Halcyon_table_alert_updates.json)

| Column Name | Type |
|:------------|:-----|
| action | string |
| action_id | int |
| activity_id | int |
| activity_name | string |
| actor | dynamic |
| category_name | string |
| category_uid | int |
| class_name | string |
| class_uid | int |
| comment | string |
| count | int |
| device | dynamic |
| disposition | string |
| disposition_id | int |
| evidences | dynamic |
| finding_info | dynamic |
| HalcyonAlertId | string |
| HalcyonSourceTime | datetime |
| message | string |
| metadata | dynamic |
| observables | dynamic |
| raw_record | string |
| resources | dynamic |
| severity | string |
| severity_id | int |
| status | string |
| status_id | int |
| TimeGenerated | datetime |
| type_name | string |
| type_uid | long |
| unmapped | dynamic |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [Halcyon](../solutions/halcyon.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Halcyon Connector (v2)](../connectors/halcyonpushv2.md) |  |

---

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [Halcyon_Alerts](../parsers/halcyon-alerts.md) | [Halcyon](../solutions/halcyon.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

