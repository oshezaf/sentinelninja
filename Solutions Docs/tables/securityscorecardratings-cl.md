# SecurityScorecardRatings_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
| **Ingestion API Supported** | ✓ Yes |

## Schema (23 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/SecurityScorecardRatings_CL.json)

| Column Name | Type |
|:------------|:-----|
| _ResourceId | string |
| body_s | string |
| Computer | string |
| dateToday_t | datetime |
| dateYesterday_t | datetime |
| industry_s | string |
| ManagementGroupName | string |
| MG | string |
| portfolioId_g | string |
| portfolioId_g_s | string |
| portfolioId_s | string |
| portfolioName_s | string |
| RawData | string |
| scoreChange_d | real |
| scoreToday_d | real |
| scoreYesterday_d | real |
| severity_s | string |
| SourceSystem | string |
| src_s | string |
| subject_s | string |
| TenantId | string |
| TimeGenerated | datetime |
| Type | string |

## Solutions (1)

This table is used by the following solutions:

- [SecurityScorecard Cybersecurity Ratings](../solutions/securityscorecard-cybersecurity-ratings.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [SecurityScorecard Cybersecurity Ratings](../connectors/securityscorecardratingsazurefunctions.md) |  |

---

## Content Items Using This Table (1)

### Workbooks (1)

**In solution [SecurityScorecard Cybersecurity Ratings](../solutions/securityscorecard-cybersecurity-ratings.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [SecurityScorecardWorkbook](../content/securityscorecard-cybersecurity-ratings-securityscorecardworkbook-305a0f99.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Tables Index](../tables-index.md)

