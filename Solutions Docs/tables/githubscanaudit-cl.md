# githubscanaudit_CL

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

## Schema (23 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/githubscanaudit_CL.json)

| Column Name | Type |
|:------------|:-----|
| _ResourceId | string |
| action | string |
| alert | string |
| changes | string |
| commit_oid | string |
| Computer | string |
| created_at | datetime |
| description | string |
| ManagementGroupName | string |
| MG | string |
| organization | string |
| RawData | string |
| ref | string |
| repository | string |
| rule | string |
| sender | string |
| SourceSystem | string |
| TenantId | string |
| TimeGenerated | datetime |
| timestamp_t | datetime |
| Type | string |
| updated_at | datetime |
| url | string |

## Solutions (1)

This table is used by the following solutions:

- [GitHub](../solutions/github.md)

## Connectors (2)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [GitHub (using Webhooks)](../connectors/githubwebhook.md) |  |
| [GitHub (using Webhooks) V2](../connectors/githubwebhookv2.md) |  |

---

## Content Items Using This Table (2)

### Workbooks (2)

**In solution [GitHub](../solutions/github.md):**

| Workbook | Selection Criteria |
|:-------------|:-------------------|
| [GitHub](../content/github-github-87916f66.md) |  |
| [GitHubAdvancedSecurity](../content/github-githubadvancedsecurity-62e1aa58.md) |  |

## Parsers Using This Table (4)

### Other Parsers (4)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [GitHubCodeScanningData](../parsers/githubcodescanningdata.md) | [GitHub](../solutions/github.md) |  |
| [GitHubDependabotData](../parsers/githubdependabotdata.md) | [GitHub](../solutions/github.md) |  |
| [GitHubSecretScanningData](../parsers/githubsecretscanningdata.md) | [GitHub](../solutions/github.md) |  |
| [githubscanaudit](../parsers/githubscanaudit.md) | [GitHub](../solutions/github.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

