# BitSight

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/BitSight.svg" alt="BitSight Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | BitSight Support |
| **Support Tier** | Partner |
| **Support Link** | [https://www.bitsight.com/customer-success-support](https://www.bitsight.com/customer-success-support) |
| **Categories** | Security - Others |
| **Version** | 3.2.0 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2023-02-20 |
| **Last Updated** | 2024-02-20 |
| **Solution Folder** | [BitSight](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/BitSight) |

The [BitSight](https://www.bitsight.com/) solution enables security operations teams to integrate insights from BitSight's Security Ratings platform into Microsoft Sentinel via the Codeless Connector Framework (CCF). The connector ingests Security Ratings, Company Profiles, Risk Vector breakdowns, Diligence Historical Statistics, Findings Summaries, Industry peer comparisons, and Vulnerability reference data for companies in your BitSight portfolio.

**Underlying Microsoft Technologies used:**

This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs:

a. [Codeless Connector Framework (CCF)](https://learn.microsoft.com/azure/sentinel/create-codeless-connector)

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)

## Data Connectors

This solution provides **3 data connector(s)**:

- [Bitsight data connector](../connectors/bitsight.md)
- [BitSight Security Events (via Codeless Connector Framework)](../connectors/bitsighteventsconnector.md)
- [BitSight Security Statistics (via Codeless Connector Framework)](../connectors/bitsightstatisticsconnector.md)

## Tables Used

This solution uses **22 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`BitSightAlerts_CL`](../tables/bitsightalerts-cl.md) | [BitSight Security Events (via Codeless Connector Framework)](../connectors/bitsighteventsconnector.md) | Analytics |
| [`BitSightBreaches_CL`](../tables/bitsightbreaches-cl.md) | [BitSight Security Events (via Codeless Connector Framework)](../connectors/bitsighteventsconnector.md) | Analytics |
| [`BitSightCompanyDetails_CL`](../tables/bitsightcompanydetails-cl.md) | [BitSight Security Statistics (via Codeless Connector Framework)](../connectors/bitsightstatisticsconnector.md) | Analytics, Workbooks |
| [`BitSightCompanyRatingDetails_CL`](../tables/bitsightcompanyratingdetails-cl.md) | [BitSight Security Statistics (via Codeless Connector Framework)](../connectors/bitsightstatisticsconnector.md) | - |
| [`BitSightDiligenceHistoricalStatistics_CL`](../tables/bitsightdiligencehistoricalstatistics-cl.md) | [BitSight Security Statistics (via Codeless Connector Framework)](../connectors/bitsightstatisticsconnector.md) | Workbooks |
| [`BitSightDiligenceStatistics_CL`](../tables/bitsightdiligencestatistics-cl.md) | [BitSight Security Statistics (via Codeless Connector Framework)](../connectors/bitsightstatisticsconnector.md) | - |
| [`BitSightFindingsSummary_CL`](../tables/bitsightfindingssummary-cl.md) | [BitSight Security Statistics (via Codeless Connector Framework)](../connectors/bitsightstatisticsconnector.md) | Workbooks |
| [`BitSightFindings_CL`](../tables/bitsightfindings-cl.md) | [BitSight Security Events (via Codeless Connector Framework)](../connectors/bitsighteventsconnector.md) | Analytics, Workbooks |
| [`BitSightObservationStatistics_CL`](../tables/bitsightobservationstatistics-cl.md) | [BitSight Security Statistics (via Codeless Connector Framework)](../connectors/bitsightstatisticsconnector.md) | - |
| [`BitsightAlerts_data_CL`](../tables/bitsightalerts-data-cl.md) | [Bitsight data connector](../connectors/bitsight.md) | Analytics |
| [`BitsightBreaches_data_CL`](../tables/bitsightbreaches-data-cl.md) | [Bitsight data connector](../connectors/bitsight.md) | Analytics |
| [`BitsightCompany_details_CL`](../tables/bitsightcompany-details-cl.md) | [Bitsight data connector](../connectors/bitsight.md) | Workbooks |
| [`BitsightCompany_rating_details_CL`](../tables/bitsightcompany-rating-details-cl.md) | [Bitsight data connector](../connectors/bitsight.md) | - |
| [`BitsightDiligence_historical_statistics_CL`](../tables/bitsightdiligence-historical-statistics-cl.md) | [Bitsight data connector](../connectors/bitsight.md) | Workbooks |
| [`BitsightDiligence_statistics_CL`](../tables/bitsightdiligence-statistics-cl.md) | [Bitsight data connector](../connectors/bitsight.md) | - |
| [`BitsightFindings_data_CL`](../tables/bitsightfindings-data-cl.md) | [Bitsight data connector](../connectors/bitsight.md) | Analytics, Workbooks |
| [`BitsightFindings_summary_CL`](../tables/bitsightfindings-summary-cl.md) | [Bitsight data connector](../connectors/bitsight.md) | Workbooks |
| [`BitsightGraph_data_CL`](../tables/bitsightgraph-data-cl.md) | [Bitsight data connector](../connectors/bitsight.md) | Analytics, Workbooks |
| [`BitsightIndustrialStatistics_CL`](../tables/bitsightindustrialstatistics-cl.md) | [BitSight Security Statistics (via Codeless Connector Framework)](../connectors/bitsightstatisticsconnector.md) | - |
| [`BitsightIndustrial_statistics_CL`](../tables/bitsightindustrial-statistics-cl.md) | [Bitsight data connector](../connectors/bitsight.md) | - |
| [`BitsightObservation_statistics_CL`](../tables/bitsightobservation-statistics-cl.md) | [Bitsight data connector](../connectors/bitsight.md) | - |
| [`BitsightVulnerabilitiesFindingsSummary_CL`](../tables/bitsightvulnerabilitiesfindingssummary-cl.md) | [BitSight Security Statistics (via Codeless Connector Framework)](../connectors/bitsightstatisticsconnector.md) | Workbooks |

## Content Items

This solution includes **20 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Parsers | 13 |
| Analytic Rules | 6 |
| Workbooks | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [BitSight - compromised systems detected](../content/bitsight-bitsight-compromised-systems-detected-d68b758a-b117-4cb8-8e1d-dcab5a4a2f21-a4f59745.md) | Medium | Execution | [`BitSightFindings_CL`](../tables/bitsightfindings-cl.md)<br>[`BitsightFindings_data_CL`](../tables/bitsightfindings-data-cl.md) |
| [BitSight - diligence risk category detected](../content/bitsight-bitsight-diligence-risk-category-detected-161ed3ac-b242-4b13-8c6b-58716e5e9972-ffcba42e.md) | Medium | Execution, Reconnaissance | [`BitSightFindings_CL`](../tables/bitsightfindings-cl.md)<br>[`BitsightFindings_data_CL`](../tables/bitsightfindings-data-cl.md) |
| [BitSight - drop in company ratings](../content/bitsight-bitsight-drop-in-company-ratings-d8844f11-3a36-4b97-9062-1e6d57c00e37-6dbc0005.md) | High | Reconnaissance, CommandAndControl | [`BitSightCompanyDetails_CL`](../tables/bitsightcompanydetails-cl.md)<br>[`BitsightGraph_data_CL`](../tables/bitsightgraph-data-cl.md) |
| [BitSight - drop in the headline rating](../content/bitsight-bitsight-drop-in-the-headline-rating-b11fdc35-6368-4cc0-8128-52cd2e2cdda0-d880d206.md) | High | Reconnaissance, CommandAndControl | [`BitSightCompanyDetails_CL`](../tables/bitsightcompanydetails-cl.md)<br>[`BitsightGraph_data_CL`](../tables/bitsightgraph-data-cl.md) |
| [BitSight - new alert found](../content/bitsight-bitsight-new-alert-found-a1275c5e-0ff4-4d15-a7b7-96018cd979f5-773a55bf.md) | High | Impact, InitialAccess | [`BitSightAlerts_CL`](../tables/bitsightalerts-cl.md)<br>[`BitsightAlerts_data_CL`](../tables/bitsightalerts-data-cl.md) |
| [BitSight - new breach found](../content/bitsight-bitsight-new-breach-found-a5526ba9-5997-47c6-bf2e-60a08b681e9b-ce9a2a1e.md) | Medium | Impact, InitialAccess | [`BitSightBreaches_CL`](../tables/bitsightbreaches-cl.md)<br>[`BitsightBreaches_data_CL`](../tables/bitsightbreaches-data-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [BitSightWorkbook](../content/bitsight-bitsightworkbook-85beb528.md) | [`BitSightCompanyDetails_CL`](../tables/bitsightcompanydetails-cl.md)<br>[`BitSightDiligenceHistoricalStatistics_CL`](../tables/bitsightdiligencehistoricalstatistics-cl.md)<br>[`BitSightFindingsSummary_CL`](../tables/bitsightfindingssummary-cl.md)<br>[`BitSightFindings_CL`](../tables/bitsightfindings-cl.md)<br>[`BitsightCompany_details_CL`](../tables/bitsightcompany-details-cl.md)<br>[`BitsightDiligence_historical_statistics_CL`](../tables/bitsightdiligence-historical-statistics-cl.md)<br>[`BitsightFindings_data_CL`](../tables/bitsightfindings-data-cl.md)<br>[`BitsightFindings_summary_CL`](../tables/bitsightfindings-summary-cl.md)<br>[`BitsightGraph_data_CL`](../tables/bitsightgraph-data-cl.md)<br>[`BitsightVulnerabilitiesFindingsSummary_CL`](../tables/bitsightvulnerabilitiesfindingssummary-cl.md) |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [BitSightAlerts](../parsers/bitsightalerts.md) | - | [`BitSightAlerts_CL`](../tables/bitsightalerts-cl.md) *(read)*<br>[`BitsightAlerts_data_CL`](../tables/bitsightalerts-data-cl.md) *(read)* |
| [BitSightBreaches](../parsers/bitsightbreaches.md) | - | [`BitSightBreaches_CL`](../tables/bitsightbreaches-cl.md) *(read)*<br>[`BitsightBreaches_data_CL`](../tables/bitsightbreaches-data-cl.md) *(read)* |
| [BitSightCompanyDetails](../parsers/bitsightcompanydetails.md) | - | [`BitSightCompanyDetails_CL`](../tables/bitsightcompanydetails-cl.md) *(read)*<br>[`BitsightCompany_details_CL`](../tables/bitsightcompany-details-cl.md) *(read)* |
| [BitSightCompanyRatingDetails](../parsers/bitsightcompanyratingdetails.md) | - | [`BitSightCompanyRatingDetails_CL`](../tables/bitsightcompanyratingdetails-cl.md) *(read)* |
| [BitSightCompanyRatings](../parsers/bitsightcompanyratings.md) | - | [`BitSightCompanyRatingDetails_CL`](../tables/bitsightcompanyratingdetails-cl.md) *(read)*<br>[`BitsightCompany_rating_details_CL`](../tables/bitsightcompany-rating-details-cl.md) *(read)* |
| [BitSightDiligenceHistoricalStatistics](../parsers/bitsightdiligencehistoricalstatistics.md) | - | [`BitSightDiligenceHistoricalStatistics_CL`](../tables/bitsightdiligencehistoricalstatistics-cl.md) *(read)*<br>[`BitsightDiligence_historical_statistics_CL`](../tables/bitsightdiligence-historical-statistics-cl.md) *(read)* |
| [BitSightDiligenceStatistics](../parsers/bitsightdiligencestatistics.md) | - | [`BitSightDiligenceStatistics_CL`](../tables/bitsightdiligencestatistics-cl.md) *(read)*<br>[`BitsightDiligence_statistics_CL`](../tables/bitsightdiligence-statistics-cl.md) *(read)* |
| [BitSightFindingsData](../parsers/bitsightfindingsdata.md) | - | [`BitSightFindings_CL`](../tables/bitsightfindings-cl.md) *(read)*<br>[`BitsightFindings_data_CL`](../tables/bitsightfindings-data-cl.md) *(read)* |
| [BitSightFindingsSummary](../parsers/bitsightfindingssummary.md) | - | [`BitSightFindingsSummary_CL`](../tables/bitsightfindingssummary-cl.md) *(read)*<br>[`BitsightFindings_summary_CL`](../tables/bitsightfindings-summary-cl.md) *(read)*<br>[`BitsightVulnerabilitiesFindingsSummary_CL`](../tables/bitsightvulnerabilitiesfindingssummary-cl.md) *(read)* |
| [BitSightGraphData](../parsers/bitsightgraphdata.md) | - | [`BitSightCompanyDetails_CL`](../tables/bitsightcompanydetails-cl.md) *(read)*<br>[`BitsightGraph_data_CL`](../tables/bitsightgraph-data-cl.md) *(read)* |
| [BitSightIndustrialStatistics](../parsers/bitsightindustrialstatistics.md) | - | [`BitsightIndustrialStatistics_CL`](../tables/bitsightindustrialstatistics-cl.md) *(read)*<br>[`BitsightIndustrial_statistics_CL`](../tables/bitsightindustrial-statistics-cl.md) *(read)* |
| [BitSightObservationStatistics](../parsers/bitsightobservationstatistics.md) | - | [`BitSightObservationStatistics_CL`](../tables/bitsightobservationstatistics-cl.md) *(read)*<br>[`BitsightObservation_statistics_CL`](../tables/bitsightobservation-statistics-cl.md) *(read)* |
| [BitSightVulnerabilitiesFindingsSummary](../parsers/bitsightvulnerabilitiesfindingssummary.md) | - | [`BitsightVulnerabilitiesFindingsSummary_CL`](../tables/bitsightvulnerabilitiesfindingssummary-cl.md) *(read)* |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                 |
|-------------|--------------------------------|--------------------------------------------------------------------|
| 3.2.0       | 04-06-2026                     | Replaced legacy Function App connector with two **Codeless Connector Framework (CCF)** connectors: **BitSight Security Events** (Alerts, Breaches, Findings) and **BitSight Security Statistics** (CompanyDetails, CompanyRatingDetails, DiligenceHistoricalStatistics, DiligenceStatistics, ObservationStatistics, IndustrialStatistics, VulnerabilitiesFindingsSummary, FindingsSummary). Added parsers for **BitSightCompanyRatingDetails** and **BitSightVulnerabilitiesFindingsSummary**. |
| 3.1.1       | 22-04-2026                     | Updated **Solution Package** with the fix of solutionId |
| 3.1.0       | 31-03-2026                     | Updated the python runtime version to 3.12. Added support for Log Ingestion API and updated parsers accordingly. <br> Reverted the solution id to fix the BitSight Solution publishing issue.                   |
| 3.0.2       | 26-07-2024                     | Update **Analytic rules** for missing TTP                          |
| 3.0.1       | 15-04-2024                     | Added Bitsight prefix in data tables name                           |
| 3.0.0       | 23-01-2024                     | Updated **Data Connector** code with the fix of Pagination and Checkpoint related issue |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

