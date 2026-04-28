# DynatraceAttacksV2_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

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
- [Parsers](#parsers-using-this-table)

## Schema (13 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Dynatrace%5CData%20Connectors%5CDynatraceAttacksV2/Connector_Dynatrace_Attacks_table.json)

| Column Name | Type |
|:------------|:-----|
| affectedEntities | dynamic |
| attacker | dynamic |
| attackId | string |
| attackType | string |
| displayId | string |
| displayName | string |
| entrypoint | dynamic |
| managementZones | dynamic |
| request | dynamic |
| state | string |
| technology | string |
| TimeGenerated | datetime |
| vulnerability | dynamic |

## Solutions (1)

This table is used by the following solutions:

- [Dynatrace](../solutions/dynatrace.md)

## Connectors (2)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Dynatrace Attacks V1](../connectors/dynatraceattacks.md) |  |
| [Dynatrace Attacks V2](../connectors/dynatraceattacksccpdefinition.md) |  |

---

## Content Items Using This Table (2)

### Analytic Rules (1)

**In solution [Dynatrace](../solutions/dynatrace.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [Dynatrace Application Security - Attack detection](../content/dynatrace-dynatrace-application-security-attack-detection-1b0b2065-8bac-5a00-83c4-1b58f69ac212-bb12d178.md) |  |

### Workbooks (1)

**In solution [Dynatrace](../solutions/dynatrace.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [Dynatrace](../content/dynatrace-dynatrace-eddf4fe2.md) |  |

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [DynatraceAttacks](../parsers/dynatraceattacks.md) | [Dynatrace](../solutions/dynatrace.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

