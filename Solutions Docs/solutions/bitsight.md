# BitSight

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | BitSight Support |
| **Support Tier** | Partner |
| **Support Link** | [https://www.bitsight.com/customer-success-support](https://www.bitsight.com/customer-success-support) |
| **Categories** | domains |
| **First Published** | 2023-02-20 |
| **Last Updated** | 2024-02-20 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/BitSight](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/BitSight) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Bitsight data connector](../connectors/bitsight.md)

## Tables Reference

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
| [BitSight - compromised systems detected](../content/d68b758a-b117-4cb8-8e1d-dcab5a4a2f21.md) | Medium | Execution | [`BitsightFindings_data_CL`](../tables/bitsightfindings-data-cl.md) |
| [BitSight - diligence risk category detected](../content/161ed3ac-b242-4b13-8c6b-58716e5e9972.md) | Medium | Execution, Reconnaissance | [`BitsightFindings_data_CL`](../tables/bitsightfindings-data-cl.md) |
| [BitSight - drop in company ratings](../content/d8844f11-3a36-4b97-9062-1e6d57c00e37.md) | High | Reconnaissance, CommandAndControl | [`BitsightGraph_data_CL`](../tables/bitsightgraph-data-cl.md) |
| [BitSight - drop in the headline rating](../content/b11fdc35-6368-4cc0-8128-52cd2e2cdda0.md) | High | Reconnaissance, CommandAndControl | [`BitsightGraph_data_CL`](../tables/bitsightgraph-data-cl.md) |
| [BitSight - new alert found](../content/a1275c5e-0ff4-4d15-a7b7-96018cd979f5.md) | High | Impact, InitialAccess | [`BitsightAlerts_data_CL`](../tables/bitsightalerts-data-cl.md) |
| [BitSight - new breach found](../content/a5526ba9-5997-47c6-bf2e-60a08b681e9b.md) | Medium | Impact, InitialAccess | [`BitsightBreaches_data_CL`](../tables/bitsightbreaches-data-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [BitSightWorkbook](../content/bitsightworkbook-bitsight.md) | [`BitsightCompany_details_CL`](../tables/bitsightcompany-details-cl.md)<br>[`BitsightDiligence_historical_statistics_CL`](../tables/bitsightdiligence-historical-statistics-cl.md)<br>[`BitsightFindings_data_CL`](../tables/bitsightfindings-data-cl.md)<br>[`BitsightFindings_summary_CL`](../tables/bitsightfindings-summary-cl.md)<br>[`BitsightGraph_data_CL`](../tables/bitsightgraph-data-cl.md) |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [BitSightAlerts](../content/ce09d0fb-6816-496d-822e-198a56187a30.md) | - | - |
| [BitSightBreaches](../content/43e914e1-3b7b-4824-bb16-90e5dedad176.md) | - | - |
| [BitSightCompanyDetails](../content/25fcb934-4665-48c3-a4ce-2dd6c0874beb.md) | - | - |
| [BitSightCompanyRatings](../content/1280e2d5-9d9a-4455-8aec-3e340a3ffeb2.md) | - | - |
| [BitSightDiligenceHistoricalStatistics](../content/a1d7d1c7-5677-4abe-a717-60cdf261e0c7.md) | - | - |
| [BitSightDiligenceStatistics](../content/3900f610-56b5-4f8f-84f4-291d9b41dfe2.md) | - | - |
| [BitSightFindingsData](../content/4bb0ba56-5a8c-4b74-88c5-237037eaa3ee.md) | - | - |
| [BitSightFindingsSummary](../content/39844fcb-d451-4050-ae41-23c8f27b611c.md) | - | - |
| [BitSightGraphData](../content/6495f5c6-12ac-4416-8060-94e3cfad695b.md) | - | - |
| [BitSightIndustrialStatistics](../content/44c51bc8-1c06-46ca-ba25-0422d0af4015.md) | - | - |
| [BitSightObservationStatistics](../content/144a9fa0-98a3-40f7-b39e-9c7ff0229290.md) | - | - |

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
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
