# CBSLog_AzureV2_CL

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

## Schema (15 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/CBSLog_AzureV2_CL.json)

| Column Name | Type |
|:------------|:-----|
| Brand | string |
| Class | string |
| COA | string |
| ExternalLink | string |
| FirstSeen | string |
| IncidentId | string |
| IncidentType | string |
| LastSeen | string |
| RawPayload | dynamic |
| Remarks | string |
| Screenshots | dynamic |
| Severity | string |
| Status | string |
| Subject | string |
| TimeGenerated | datetime |

## Solutions (1)

This table is used by the following solutions:

- [CTM360](../solutions/ctm360.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [CTM360 CyberBlindSpot (Serverless)](../connectors/ctm360cbsconnectordefinition.md) |  |

---

## Content Items Using This Table (1)

### Analytic Rules (1)

**In solution [CTM360](../solutions/ctm360.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [CyberBlindSpot - Any Issue Detected](../content/ctm360-cyberblindspot-any-issue-detected-abe1a662-d00d-482e-aa68-9394622ae02e-cd8c88d0.md) |  |

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [CBSLog](../parsers/cbslog.md) | [CTM360](../solutions/ctm360.md) ⚠️ |  |

> ⚠️ Parsers marked with ⚠️ are not listed in their Solution JSON file.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

