# ForcepointDLPEvents_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
| **Supports Transformations** | ✗ No |
| **Ingestion API Supported** | ✓ Yes |
| **Lake-Only Ingestion** | ✗ No ([source](https://learn.microsoft.com/azure/sentinel/data-connectors-reference)) |

## Schema (29 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/ForcepointDLPEvents_CL.json)

| Column Name | Type |
|:------------|:-----|
| _ResourceId | string |
| Computer | string |
| CreatedAt_t | datetime |
| Description | real |
| DestinationCommonName | real |
| DestinationDomain | string |
| DestinationHostname | string |
| DestinationIpV4 | real |
| ExternalId | string |
| ForcepointDLPSourceIP | string |
| GeneratorId | string |
| Id | string |
| ManagementGroupName | string |
| MG | string |
| PolicyCategoryId | string |
| Protocol | string |
| RawData | string |
| RuleName_1_s | string |
| Severity_s | string |
| SourceDomain | string |
| SourceIpV4_s | string |
| SourceSystem | string |
| TenantId | string |
| Text | real |
| TimeGenerated | datetime |
| Title | string |
| Type | string |
| UpdatedAt | string |
| UpdatedBy | string |

## Solutions (1)

This table is used by the following solutions:

- [Forcepoint DLP](../solutions/forcepoint-dlp.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [Forcepoint DLP](../connectors/forcepoint-dlp.md) |  |

---

## Content Items Using This Table (2)

### Workbooks (2)

**In solution [Forcepoint DLP](../solutions/forcepoint-dlp.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [ForcepointDLP](../content/forcepoint-dlp-forcepointdlp-aa61cdb9.md) |  |

**GitHub Only:**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [ForcepointDLP](../content/github-only-forcepointdlp-897d7584.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

