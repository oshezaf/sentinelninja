# ⚠️ SecurityScorecard Cybersecurity Ratings

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace.

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/SecurityScorecard-Cybersecurity-Ratings.svg" alt="SecurityScorecard Cybersecurity Ratings Logo" width="75" height="75">

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

This package includes three data connectors and an associated workbook for the SecurityScorecard offering within Microsoft Sentinel. These connectors are able to import 11 company scores from SecurityScorecard (overall score and 10 factor scores) as well as new issue events.

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | SecurityScorecard |
| **Support Tier** | Partner |
| **Support Link** | [https://support.securityscorecard.com/hc/en-us/requests/new](https://support.securityscorecard.com/hc/en-us/requests/new) |
| **Categories** | domains |
| **Version** | 2.0.0 |
| **Author** | SecurityScorecard - integrations@securityscorecard.io |
| **First Published** | 2022-10-01 |
| **Last Updated** | 2022-10-01 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SecurityScorecard%20Cybersecurity%20Ratings](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SecurityScorecard%20Cybersecurity%20Ratings) |

## Data Connectors

This solution provides **3 data connector(s)**:

- [SecurityScorecard Factor](../connectors/securityscorecardfactorazurefunctions.md)
- [SecurityScorecard Issue](../connectors/securityscorecardissueazurefunctions.md)
- [SecurityScorecard Cybersecurity Ratings](../connectors/securityscorecardratingsazurefunctions.md)

## Tables Used

This solution uses **3 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`SecurityScorecardFactor_CL`](../tables/securityscorecardfactor-cl.md) | [SecurityScorecard Factor](../connectors/securityscorecardfactorazurefunctions.md) | Workbooks |
| [`SecurityScorecardIssues_CL`](../tables/securityscorecardissues-cl.md) | [SecurityScorecard Issue](../connectors/securityscorecardissueazurefunctions.md) | Workbooks |
| [`SecurityScorecardRatings_CL`](../tables/securityscorecardratings-cl.md) | [SecurityScorecard Cybersecurity Ratings](../connectors/securityscorecardratingsazurefunctions.md) | Workbooks |

## Content Items

This solution includes **1 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Workbooks | 1 |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [SecurityScorecardWorkbook](../content/securityscorecard-cybersecurity-ratings-securityscorecardworkbook-305a0f99.md) | [`SecurityScorecardFactor_CL`](../tables/securityscorecardfactor-cl.md)<br>[`SecurityScorecardIssues_CL`](../tables/securityscorecardissues-cl.md)<br>[`SecurityScorecardRatings_CL`](../tables/securityscorecardratings-cl.md) |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

