# BitsightGraph_data_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Supports Transformations** | ✓ Yes |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✓ Yes ([source](https://learn.microsoft.com/azure/sentinel/data-connectors-reference)) |

## Contents

- [Schema](#schema)
- [Solutions](#solutions)
- [Connectors](#connectors)
- [Content Items](#content-items-using-this-table)
- [Parsers](#parsers-using-this-table)

## Schema (5 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/BitsightGraph_data_CL.json)

| Column Name | Type |
|:------------|:-----|
| Company_name | string |
| Rating | real |
| Rating_Date | datetime |
| Rating_differance | real |
| TimeGenerated | datetime |

## Solutions (1)

This table is used by the following solutions:

- [BitSight](../solutions/bitsight.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Bitsight data connector](../connectors/bitsight.md) |  |

---

## Content Items Using This Table (3)

### Analytic Rules (2)

**In solution [BitSight](../solutions/bitsight.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [BitSight - drop in company ratings](../content/bitsight-bitsight-drop-in-company-ratings-d8844f11-3a36-4b97-9062-1e6d57c00e37-6dbc0005.md) |  |
| [BitSight - drop in the headline rating](../content/bitsight-bitsight-drop-in-the-headline-rating-b11fdc35-6368-4cc0-8128-52cd2e2cdda0-d880d206.md) |  |

### Workbooks (1)

**In solution [BitSight](../solutions/bitsight.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [BitSightWorkbook](../content/bitsight-bitsightworkbook-85beb528.md) |  |

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [BitSightGraphData](../parsers/bitsightgraphdata.md) | [BitSight](../solutions/bitsight.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

