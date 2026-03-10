# BitSight

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/BitSight.svg" alt="BitSight Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | BitSight Support |
| **Support Tier** | Partner |
| **Support Link** | [https://www.bitsight.com/customer-success-support](https://www.bitsight.com/customer-success-support) |
| **Categories** | domains |
| **Version** | 3.1.0 |
| **Author** | Ariela Silberstein - ariela.silberstein@bitsighttech.com |
| **First Published** | 2023-02-20 |
| **Last Updated** | 2024-02-20 |
| **Solution Folder** | [BitSight](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/BitSight) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/bitsighttechnologiesinc1695119434818.bitsight_v1) |

The BitSight solution enables security operations teams to integrate insights from BitSight’s Data Observability services into Microsoft Sentinel. The insights include Security Ratings, Count of Observations by Risk Vector, Compromised Systems, Infections, Count of Diligence Observations and Vulnerabilities for companies in your portfolio.

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)

## Data Connectors

This solution provides **1 data connector(s)**:

- [Bitsight data connector](../connectors/bitsight.md)

## Tables Used

This solution uses **11 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`BitsightAlerts_data_CL`](../tables/bitsightalerts-data-cl.md) | [Bitsight data connector](../connectors/bitsight.md) | Analytics |
| [`BitsightBreaches_data_CL`](../tables/bitsightbreaches-data-cl.md) | [Bitsight data connector](../connectors/bitsight.md) | Analytics |
| [`BitsightCompany_details_CL`](../tables/bitsightcompany-details-cl.md) | [Bitsight data connector](../connectors/bitsight.md) | Workbooks |
| [`BitsightCompany_rating_details_CL`](../tables/bitsightcompany-rating-details-cl.md) | [Bitsight data connector](../connectors/bitsight.md) | - |
| [`BitsightDiligence_historical_statistics_CL`](../tables/bitsightdiligence-historical-statistics-cl.md) | [Bitsight data connector](../connectors/bitsight.md) | Workbooks |
| [`BitsightDiligence_statistics_CL`](../tables/bitsightdiligence-statistics-cl.md) | [Bitsight data connector](../connectors/bitsight.md) | - |
| [`BitsightFindings_data_CL`](../tables/bitsightfindings-data-cl.md) | [Bitsight data connector](../connectors/bitsight.md) | Analytics, Workbooks |
| [`BitsightFindings_summary_CL`](../tables/bitsightfindings-summary-cl.md) | [Bitsight data connector](../connectors/bitsight.md) | Workbooks |
| [`BitsightGraph_data_CL`](../tables/bitsightgraph-data-cl.md) | [Bitsight data connector](../connectors/bitsight.md) | Analytics, Workbooks |
| [`BitsightIndustrial_statistics_CL`](../tables/bitsightindustrial-statistics-cl.md) | [Bitsight data connector](../connectors/bitsight.md) | - |
| [`BitsightObservation_statistics_CL`](../tables/bitsightobservation-statistics-cl.md) | [Bitsight data connector](../connectors/bitsight.md) | - |

## Content Items

This solution includes **18 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Parsers | 11 |
| Analytic Rules | 6 |
| Workbooks | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [BitSight - compromised systems detected](../content/bitsight-bitsight-compromised-systems-detected-d68b758a-b117-4cb8-8e1d-dcab5a4a2f21-a4f59745.md) | Medium | Execution | [`BitsightFindings_data_CL`](../tables/bitsightfindings-data-cl.md) |
| [BitSight - diligence risk category detected](../content/bitsight-bitsight-diligence-risk-category-detected-161ed3ac-b242-4b13-8c6b-58716e5e9972-ffcba42e.md) | Medium | Execution, Reconnaissance | [`BitsightFindings_data_CL`](../tables/bitsightfindings-data-cl.md) |
| [BitSight - drop in company ratings](../content/bitsight-bitsight-drop-in-company-ratings-d8844f11-3a36-4b97-9062-1e6d57c00e37-6dbc0005.md) | High | Reconnaissance, CommandAndControl | [`BitsightGraph_data_CL`](../tables/bitsightgraph-data-cl.md) |
| [BitSight - drop in the headline rating](../content/bitsight-bitsight-drop-in-the-headline-rating-b11fdc35-6368-4cc0-8128-52cd2e2cdda0-d880d206.md) | High | Reconnaissance, CommandAndControl | [`BitsightGraph_data_CL`](../tables/bitsightgraph-data-cl.md) |
| [BitSight - new alert found](../content/bitsight-bitsight-new-alert-found-a1275c5e-0ff4-4d15-a7b7-96018cd979f5-773a55bf.md) | High | Impact, InitialAccess | [`BitsightAlerts_data_CL`](../tables/bitsightalerts-data-cl.md) |
| [BitSight - new breach found](../content/bitsight-bitsight-new-breach-found-a5526ba9-5997-47c6-bf2e-60a08b681e9b-ce9a2a1e.md) | Medium | Impact, InitialAccess | [`BitsightBreaches_data_CL`](../tables/bitsightbreaches-data-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [BitSightWorkbook](../content/bitsight-bitsightworkbook-85beb528.md) | [`BitsightCompany_details_CL`](../tables/bitsightcompany-details-cl.md)<br>[`BitsightDiligence_historical_statistics_CL`](../tables/bitsightdiligence-historical-statistics-cl.md)<br>[`BitsightFindings_data_CL`](../tables/bitsightfindings-data-cl.md)<br>[`BitsightFindings_summary_CL`](../tables/bitsightfindings-summary-cl.md)<br>[`BitsightGraph_data_CL`](../tables/bitsightgraph-data-cl.md) |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [BitSightAlerts](../parsers/bitsightalerts.md) | - | [`BitsightAlerts_data_CL`](../tables/bitsightalerts-data-cl.md) *(read)* |
| [BitSightBreaches](../parsers/bitsightbreaches.md) | - | [`BitsightBreaches_data_CL`](../tables/bitsightbreaches-data-cl.md) *(read)* |
| [BitSightCompanyDetails](../parsers/bitsightcompanydetails.md) | - | [`BitsightCompany_details_CL`](../tables/bitsightcompany-details-cl.md) *(read)* |
| [BitSightCompanyRatings](../parsers/bitsightcompanyratings.md) | - | [`BitsightCompany_rating_details_CL`](../tables/bitsightcompany-rating-details-cl.md) *(read)* |
| [BitSightDiligenceHistoricalStatistics](../parsers/bitsightdiligencehistoricalstatistics.md) | - | [`BitsightDiligence_historical_statistics_CL`](../tables/bitsightdiligence-historical-statistics-cl.md) *(read)* |
| [BitSightDiligenceStatistics](../parsers/bitsightdiligencestatistics.md) | - | [`BitsightDiligence_statistics_CL`](../tables/bitsightdiligence-statistics-cl.md) *(read)* |
| [BitSightFindingsData](../parsers/bitsightfindingsdata.md) | - | [`BitsightFindings_data_CL`](../tables/bitsightfindings-data-cl.md) *(read)* |
| [BitSightFindingsSummary](../parsers/bitsightfindingssummary.md) | - | [`BitsightFindings_summary_CL`](../tables/bitsightfindings-summary-cl.md) *(read)* |
| [BitSightGraphData](../parsers/bitsightgraphdata.md) | - | [`BitsightGraph_data_CL`](../tables/bitsightgraph-data-cl.md) *(read)* |
| [BitSightIndustrialStatistics](../parsers/bitsightindustrialstatistics.md) | - | [`BitsightIndustrial_statistics_CL`](../tables/bitsightindustrial-statistics-cl.md) *(read)* |
| [BitSightObservationStatistics](../parsers/bitsightobservationstatistics.md) | - | [`BitsightObservation_statistics_CL`](../tables/bitsightobservation-statistics-cl.md) *(read)* |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                 |
|-------------|--------------------------------|--------------------------------------------------------------------|
| 3.1.0       | 28-07-2025                     | Updated the python runtime version to 3.12. Added support for Log Ingestion API and updated parsers accordingly                          |
| 3.0.2       | 26-07-2024                     | Update **Analytic rules** for missing TTP                          |
| 3.0.1       | 15-04-2024                     | Added Bitsight prefix in data tables name                           |
| 3.0.0       | 23-01-2024                     | Updated **Data Connector** code with the fix of Pagination and Checkpoint related issue |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

