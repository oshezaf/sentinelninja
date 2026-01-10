# BitSight

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/BitSight.svg" alt="BitSight Logo" width="75" height="75">

The BitSight solution enables security operations teams to integrate insights from BitSight’s Data Observability services into Microsoft Sentinel. The insights include Security Ratings, Count of Observations by Risk Vector, Compromised Systems, Infections, Count of Diligence Observations and Vulnerabilities for companies in your portfolio.

## Solution Information

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
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/BitSight](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/BitSight) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Bitsight data connector](../connectors/bitsight.md)

## Tables Used

This solution uses **11 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`BitsightAlerts_data_CL`](../tables/bitsightalerts-data-cl.md) | [Bitsight data connector](../connectors/bitsight.md) | - |
| [`BitsightBreaches_data_CL`](../tables/bitsightbreaches-data-cl.md) | [Bitsight data connector](../connectors/bitsight.md) | - |
| [`BitsightCompany_details_CL`](../tables/bitsightcompany-details-cl.md) | [Bitsight data connector](../connectors/bitsight.md) | - |
| [`BitsightCompany_rating_details_CL`](../tables/bitsightcompany-rating-details-cl.md) | [Bitsight data connector](../connectors/bitsight.md) | - |
| [`BitsightDiligence_historical_statistics_CL`](../tables/bitsightdiligence-historical-statistics-cl.md) | [Bitsight data connector](../connectors/bitsight.md) | - |
| [`BitsightDiligence_statistics_CL`](../tables/bitsightdiligence-statistics-cl.md) | [Bitsight data connector](../connectors/bitsight.md) | - |
| [`BitsightFindings_data_CL`](../tables/bitsightfindings-data-cl.md) | [Bitsight data connector](../connectors/bitsight.md) | - |
| [`BitsightFindings_summary_CL`](../tables/bitsightfindings-summary-cl.md) | [Bitsight data connector](../connectors/bitsight.md) | - |
| [`BitsightGraph_data_CL`](../tables/bitsightgraph-data-cl.md) | [Bitsight data connector](../connectors/bitsight.md) | - |
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
| [BitSight - compromised systems detected](../content/bitsight-bitsight-compromised-systems-detected-d68b758a-b117-4cb8-8e1d-dcab5a4a2f21-a4f59745.md) | Medium | Execution | - |
| [BitSight - diligence risk category detected](../content/bitsight-bitsight-diligence-risk-category-detected-161ed3ac-b242-4b13-8c6b-58716e5e9972-ffcba42e.md) | Medium | Execution, Reconnaissance | - |
| [BitSight - drop in company ratings](../content/bitsight-bitsight-drop-in-company-ratings-d8844f11-3a36-4b97-9062-1e6d57c00e37-6dbc0005.md) | High | Reconnaissance, CommandAndControl | - |
| [BitSight - drop in the headline rating](../content/bitsight-bitsight-drop-in-the-headline-rating-b11fdc35-6368-4cc0-8128-52cd2e2cdda0-d880d206.md) | High | Reconnaissance, CommandAndControl | - |
| [BitSight - new alert found](../content/bitsight-bitsight-new-alert-found-a1275c5e-0ff4-4d15-a7b7-96018cd979f5-773a55bf.md) | High | Impact, InitialAccess | - |
| [BitSight - new breach found](../content/bitsight-bitsight-new-breach-found-a5526ba9-5997-47c6-bf2e-60a08b681e9b-ce9a2a1e.md) | Medium | Impact, InitialAccess | - |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [BitSightWorkbook](../content/bitsight-bitsightworkbook-85beb528.md) | - |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [BitSightAlerts](../content/bitsight-bitsightalerts-ce09d0fb-6816-496d-822e-198a56187a30-66d8fc5d.md) | - | - |
| [BitSightBreaches](../content/bitsight-bitsightbreaches-43e914e1-3b7b-4824-bb16-90e5dedad176-6891951c.md) | - | - |
| [BitSightCompanyDetails](../content/bitsight-bitsightcompanydetails-25fcb934-4665-48c3-a4ce-2dd6c0874beb-30257bc4.md) | - | - |
| [BitSightCompanyRatings](../content/bitsight-bitsightcompanyratings-1280e2d5-9d9a-4455-8aec-3e340a3ffeb2-6190c9b9.md) | - | - |
| [BitSightDiligenceHistoricalStatistics](../content/bitsight-bitsightdiligencehistoricalstatistics-a1d7d1c7-5677-4abe-a717-60cdf261e0c7-4dc5717d.md) | - | - |
| [BitSightDiligenceStatistics](../content/bitsight-bitsightdiligencestatistics-3900f610-56b5-4f8f-84f4-291d9b41dfe2-2d67b4ce.md) | - | - |
| [BitSightFindingsData](../content/bitsight-bitsightfindingsdata-4bb0ba56-5a8c-4b74-88c5-237037eaa3ee-381bfc2c.md) | - | - |
| [BitSightFindingsSummary](../content/bitsight-bitsightfindingssummary-39844fcb-d451-4050-ae41-23c8f27b611c-4ea22d67.md) | - | - |
| [BitSightGraphData](../content/bitsight-bitsightgraphdata-6495f5c6-12ac-4416-8060-94e3cfad695b-e914fabf.md) | - | - |
| [BitSightIndustrialStatistics](../content/bitsight-bitsightindustrialstatistics-44c51bc8-1c06-46ca-ba25-0422d0af4015-4027f794.md) | - | - |
| [BitSightObservationStatistics](../content/bitsight-bitsightobservationstatistics-144a9fa0-98a3-40f7-b39e-9c7ff0229290-c33969b2.md) | - | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                 |
|-------------|--------------------------------|--------------------------------------------------------------------|
| 3.1.0       | 28-07-2025                     | Updated the python runtime version to 3.12. Added support for Log Ingestion API and updated parsers accordingly                          |
| 3.0.2       | 26-07-2024                     | Update **Analytic rules** for missing TTP                          |
| 3.0.1       | 15-04-2024                     | Added Bitsight prefix in data tables name                           |
| 3.0.0       | 23-01-2024                     | Updated **Data Connector** code with the fix of Pagination and Checkpoint related issue |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

