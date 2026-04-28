# DynatraceProblemsV2_CL

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

## Schema (18 columns)

**Source:** [Connector definition](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Dynatrace%5CData%20Connectors%5CDynatraceProblemsV2/Connector_Dynatrace_Problems_table.json)

| Column Name | Type |
|:------------|:-----|
| affectedEntities | dynamic |
| displayId | string |
| endTimeUtc | datetime |
| entityTags | dynamic |
| evidenceDetails | dynamic |
| impactAnalysis | dynamic |
| impactedEntities | dynamic |
| impactLevel | string |
| managementZones | dynamic |
| problemFilters | dynamic |
| problemId | string |
| problemTitle | string |
| recentComments | dynamic |
| rootCauseEntity | dynamic |
| severityLevel | string |
| startTimeUtc | datetime |
| status | string |
| TimeGenerated | datetime |

## Solutions (1)

This table is used by the following solutions:

- [Dynatrace](../solutions/dynatrace.md)

## Connectors (2)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Dynatrace Problems V1](../connectors/dynatraceproblems.md) |  |
| [Dynatrace Problems V2](../connectors/dynatraceproblemsccpdefinition.md) |  |

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

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

