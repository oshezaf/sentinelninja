# WizDetectionsV3_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✓ Yes ([source](https://learn.microsoft.com/azure/sentinel/data-connectors-reference)) |

## Contents

- [Schema](#schema)
- [Schema References](#schema-references)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Parsers](#parsers-using-this-table)

## Schema (23 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/WizDetectionsV3_CL.json)

| Column Name | Type |
|:------------|:-----|
| actors | dynamic |
| cloudAccounts | dynamic |
| cloudOrganizations | dynamic |
| createdAt | datetime |
| description | string |
| detectionId | string |
| detectionTitle | string |
| mitreTactics | dynamic |
| mitreTechniques | dynamic |
| primaryActor | dynamic |
| primaryResource | dynamic |
| projects | dynamic |
| resources | dynamic |
| severity | string |
| tdrId | string |
| tdrSource | string |
| threatId | string |
| threatUrl | string |
| timeFrame | dynamic |
| TimeGenerated | datetime |
| triggeringEvents | dynamic |
| triggeringEventsCount | long |
| Type | string |

## Schema References

Official Microsoft Learn documentation for field/column information:

- [Data Source Schema Reference](https://learn.microsoft.com/en-us/azure/sentinel/data-source-schema-reference)

## Solutions (1)

This table is used by the following solutions:

- [Wiz](../solutions/wiz.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Wiz for Microsoft Sentinel](../connectors/wizsentinel.md) |  |

---

## Parsers Using This Table (1)

### ASIM Parsers (1)

| Parser | Schema | Product | Selection Criteria |
|:-------|:-------|:--------|:-------------------|
| [ASimAlertEventWizDefend](../asim/asimalerteventwizdefend.md) | AlertEvent | Wiz Defend |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

