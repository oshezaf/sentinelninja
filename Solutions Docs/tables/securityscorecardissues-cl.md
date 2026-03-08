# SecurityScorecardIssues_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Custom Log V1** | Yes 🔶 — uses type-suffixed column names |
| **Ingestion API Supported** | ✓ Yes |

## Schema (25 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/SecurityScorecardIssues_CL.json)

| Column Name | Type |
|:------------|:-----|
| _ResourceId | string |
| body_s | string |
| Computer | string |
| date_t | string |
| detail_url_s | string |
| eventID_s | string |
| Factor_s | string |
| findingsCount_d | string |
| groupStatus_s | string |
| industry_s | string |
| issueName_s | string |
| issueType_s | string |
| ManagementGroupName | string |
| MG | string |
| portfolioId_g | string |
| portfolioName_s | string |
| RawData | string |
| severity_s | string |
| severity_value_s | string |
| SourceSystem | string |
| subject_s | string |
| TenantId | string |
| TimeGenerated | datetime |
| totalScoreImpact_d | string |
| Type | string |

## Solutions (1)

This table is used by the following solutions:

- [SecurityScorecard Cybersecurity Ratings](../solutions/securityscorecard-cybersecurity-ratings.md)

## Connectors (1)

This table is ingested by the following connectors:

| Connector | Selection Criteria |
|:----------|:-------------------|
| [SecurityScorecard Issue](../connectors/securityscorecardissueazurefunctions.md) |  |

---

## Content Items Using This Table (1)

### Workbooks (1)

**In solution [SecurityScorecard Cybersecurity Ratings](../solutions/securityscorecard-cybersecurity-ratings.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [SecurityScorecardWorkbook](../content/securityscorecard-cybersecurity-ratings-securityscorecardworkbook-305a0f99.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Tables Index](../tables-index.md)

