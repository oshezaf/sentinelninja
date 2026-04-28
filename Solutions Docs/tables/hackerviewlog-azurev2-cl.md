# HackerViewLog_AzureV2_CL

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

## Schema (27 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/HackerViewLog_AzureV2_CL.json)

| Column Name | Type |
|:------------|:-----|
| AssetName | string |
| AssetType | string |
| AssignedTo | string |
| Category | string |
| CreatedAt | string |
| Cve | string |
| CvssScore | real |
| Description | string |
| ExternalLink | string |
| FirstSeen | string |
| IpAddress | string |
| IssueId | string |
| LastSeen | string |
| Notes | string |
| Port | int |
| Priority | string |
| Protocol | string |
| RawPayload | dynamic |
| References | string |
| Remediation | string |
| Severity | string |
| Status | string |
| Tags | string |
| Technology | string |
| TimeGenerated | datetime |
| Title | string |
| UpdatedAt | string |

## Solutions (1)

This table is used by the following solutions:

- [CTM360](../solutions/ctm360.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [CTM360 HackerView (Serverless)](../connectors/ctm360hackerviewconnectordefinition.md) |  |

---

## Content Items Using This Table (1)

### Analytic Rules (1)

**In solution [CTM360](../solutions/ctm360.md):**

| Analytic Rule | Selection Criteria |
|:-------------|:-------------------|
| [HackerView - Any Issue Detected](../content/ctm360-hackerview-any-issue-detected-abe1a663-d00d-482e-aa68-9394622ae03e-0626c64c.md) |  |

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [HackerViewLog](../parsers/hackerviewlog.md) | [CTM360](../solutions/ctm360.md) ⚠️ |  |

> ⚠️ Parsers marked with ⚠️ are not listed in their Solution JSON file.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

