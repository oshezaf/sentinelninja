# CyberSixgill_Alerts_CL

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

## Schema (30 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/CyberSixgill_Alerts_CL.json)

| Column Name | Type |
|:------------|:-----|
| _ResourceId | string |
| alert_name | string |
| alert_type_id | string |
| assets | string |
| Category | string |
| Computer | string |
| content | string |
| date | string |
| id | string |
| lang | string |
| langcode | string |
| ManagementGroupName | string |
| MG | string |
| portal_url | string |
| RawData | string |
| read | bool |
| Severity | int |
| SourceSystem | string |
| status_name | string |
| sub_alerts | string |
| sub_alertsize | real |
| TenantId | string |
| threat_actor | string |
| threat_level | string |
| threatource | string |
| threats | string |
| TimeGenerated | datetime |
| title | string |
| Type | string |
| user_id | string |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [Cybersixgill-Actionable-Alerts](../solutions/cybersixgill-actionable-alerts.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Cybersixgill Actionable Alerts](../connectors/cybersixgillactionablealerts.md) |  |

---

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

