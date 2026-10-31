# SecurityScorecard Ratings for Microsoft Sentinel

*Solution: SecurityScorecard Cybersecurity Ratings*

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/SecurityScorecard-Cybersecurity-Ratings.svg" alt="SecurityScorecard Cybersecurity Ratings Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | SecurityScorecard |
| **Support Tier** | Partner |
| **Support Link** | [https://support.securityscorecard.com/hc/en-us/requests/new](https://support.securityscorecard.com/hc/en-us/requests/new) |
| **Categories** | Security - Others,Security - Network,Security - Vulnerability Management |
| **Version** | 3.0.0 |
| **Author** | SecurityScorecard - integrations@securityscorecard.io |
| **First Published** | 2022-10-01 |
| **Last Updated** | 2026-10-19 |
| **Solution Folder** | [SecurityScorecard Cybersecurity Ratings](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SecurityScorecard%20Cybersecurity%20Ratings) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/securityscorecardinc1667844176331.ssc-rating-sentinel) · Popularity: ⚪ Very Low (0%) |

This package includes three Codeless Connector Framework (CCF) data connectors, three KQL parsers, and an associated workbook for the SecurityScorecard offering within Microsoft Sentinel. The CCF connectors ingest 11 company scores from SecurityScorecard (overall score and 10 factor scores) as well as new issue events without requiring an Azure Function deployment. The legacy Function App connectors are retained but marked Deprecated.

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)

## Data Connectors

This solution provides **6 data connector(s)**:

- [[DEPRECATED] SecurityScorecard Factor](../connectors/securityscorecardfactorazurefunctions.md) 🔶
- [SecurityScorecard Factors (via Codeless Connector Framework)](../connectors/securityscorecardfactorccpdefinition.md)
- [[DEPRECATED] SecurityScorecard Issue](../connectors/securityscorecardissueazurefunctions.md) 🔶
- [SecurityScorecard Issues (via Codeless Connector Framework)](../connectors/securityscorecardissueccpdefinition.md)
- [[DEPRECATED] SecurityScorecard Cybersecurity Ratings](../connectors/securityscorecardratingsazurefunctions.md) 🔶
- [SecurityScorecard Ratings (via Codeless Connector Framework)](../connectors/securityscorecardratingsccpdefinition.md)

> 🔶 **CLv1:** This connector ingests into a table that uses the legacy Custom Log V1 schema format with type-suffixed column names (e.g. `_s`, `_d`, `_b`, `_t`, `_g`). Note: identification is based on column name suffixes which are also permitted in CLv2, so this classification may not always be accurate.


## Tables Used

This solution uses **6 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`SecurityScorecardFactorHistory_CL`](../tables/securityscorecardfactorhistory-cl.md) | [SecurityScorecard Factors (via Codeless Connector Framework)](../connectors/securityscorecardfactorccpdefinition.md) | Workbooks |
| [`SecurityScorecardFactor_CL`](../tables/securityscorecardfactor-cl.md) 🔶 | [[DEPRECATED] SecurityScorecard Factor](../connectors/securityscorecardfactorazurefunctions.md) | Workbooks |
| [`SecurityScorecardIssuesHistory_CL`](../tables/securityscorecardissueshistory-cl.md) | [SecurityScorecard Issues (via Codeless Connector Framework)](../connectors/securityscorecardissueccpdefinition.md) | Workbooks |
| [`SecurityScorecardIssues_CL`](../tables/securityscorecardissues-cl.md) 🔶 | [[DEPRECATED] SecurityScorecard Issue](../connectors/securityscorecardissueazurefunctions.md) | Workbooks |
| [`SecurityScorecardRatingsHistory_CL`](../tables/securityscorecardratingshistory-cl.md) | [SecurityScorecard Ratings (via Codeless Connector Framework)](../connectors/securityscorecardratingsccpdefinition.md) | Workbooks |
| [`SecurityScorecardRatings_CL`](../tables/securityscorecardratings-cl.md) 🔶 | [[DEPRECATED] SecurityScorecard Cybersecurity Ratings](../connectors/securityscorecardratingsazurefunctions.md) | Workbooks |


> 🔶 **CLv1:** This table uses the legacy Custom Log V1 schema format with type-suffixed column names (e.g. `_s`, `_d`, `_b`, `_t`, `_g`). Note: identification is based on column name suffixes which are also permitted in CLv2, so this classification may not always be accurate.

## Content Items

This solution includes **4 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Parsers | 3 |
| Workbooks | 1 |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [SecurityScorecardWorkbook](../content/securityscorecard-cybersecurity-ratings-securityscorecardworkbook-305a0f99.md) | [`SecurityScorecardFactorHistory_CL`](../tables/securityscorecardfactorhistory-cl.md)<br>[`SecurityScorecardFactor_CL`](../tables/securityscorecardfactor-cl.md)<br>[`SecurityScorecardIssuesHistory_CL`](../tables/securityscorecardissueshistory-cl.md)<br>[`SecurityScorecardIssues_CL`](../tables/securityscorecardissues-cl.md)<br>[`SecurityScorecardRatingsHistory_CL`](../tables/securityscorecardratingshistory-cl.md)<br>[`SecurityScorecardRatings_CL`](../tables/securityscorecardratings-cl.md) |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [SecurityScorecardFactor](../parsers/securityscorecardfactor.md) | - | [`SecurityScorecardFactorHistory_CL`](../tables/securityscorecardfactorhistory-cl.md) *(read)*<br>[`SecurityScorecardFactor_CL`](../tables/securityscorecardfactor-cl.md) *(read)* |
| [SecurityScorecardIssue](../parsers/securityscorecardissue.md) | - | [`SecurityScorecardIssuesHistory_CL`](../tables/securityscorecardissueshistory-cl.md) *(read)*<br>[`SecurityScorecardIssues_CL`](../tables/securityscorecardissues-cl.md) *(read)* |
| [SecurityScorecardRatings](../parsers/securityscorecardratings.md) | - | [`SecurityScorecardRatingsHistory_CL`](../tables/securityscorecardratingshistory-cl.md) *(read)*<br>[`SecurityScorecardRatings_CL`](../tables/securityscorecardratings-cl.md) *(read)* |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                             |
|-------------|--------------------------------|--------------------------------------------------------------------------------|
| 3.0.0       | 07-08-2026                     | Migrated the Ratings, Factor, and Issue **Data Connectors** to the **Codeless Connector Framework (CCF)**, removing the need for an Azure Function App deployment. <br> Added multi-instance support: each connector uses a DataConnectorsGrid and ContextPane, so one independently-managed connection can be created per SecurityScorecard portfolio, scoped server-side by Portfolio ID. <br> Added an optional own-company "My Scorecard" domain to ingest your own organization's scores alongside portfolio companies. <br> Ingest real dated score, factor, and issue history, enriched with company industry. <br> Marked the legacy Python Function App **Data Connectors** as deprecated. They are retained in the solution, not removed, so existing deployments continue to work. <br> Added **Parsers** that unify legacy (`*_CL`) and CCF (`*History_CL`) data for backward compatibility. <br> Updated the **Workbook** to query through the new parsers. |
| 2.0.0       | 01-10-2022                     | Solution release with three Azure Function App data connectors (Ratings, Factor, Issue) and the SecurityScorecard workbook. |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

