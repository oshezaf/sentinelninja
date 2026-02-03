# Zscaler Private Access (ZPA)

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/ZscalerLogo.svg" alt="Zscaler Private Access (ZPA) Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

The [Zscaler Private Access (ZPA)](https://www.zscaler.com/) solution provides the capability to ingest [Zscaler Private Access events](https://help.zscaler.com/zpa/what-zscaler-private-access) into Microsoft Sentinel.

 This solution is dependent on the Custom logs via AMA connector to collect the logs. The Custom logs solution will be installed as part of this solution installation. 

 **NOTE**: Microsoft recommends installation of Custom logs via AMA Connector. Legacy connector uses the Log Analytics agent which were deprecated on **Aug 31, 2024.** Using MMA and AMA on same machine can cause log duplication and extra ingestion cost [more details](https://learn.microsoft.com/azure/sentinel/ama-migrate?WT.mc_id=Portal-fx).

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **Version** | 3.0.1 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2022-01-31 |
| **Solution Folder** | [Zscaler Private Access (ZPA)](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Zscaler%20Private%20Access%20%28ZPA%29) |
| **Dependencies** | [CustomLogsAma](customlogsama.md) |

## Data Connectors

This solution has **1 discovered data connector(s)⚠️** (not in Solution definition):

- [[Deprecated] Zscaler Private Access](../connectors/zscalerprivateaccess.md) ⚠️

*⚠️ Discovered connector - found in solution folder but not listed in Solution JSON definition.*

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`ZPA_CL`](../tables/zpa-cl.md) | [[Deprecated] Zscaler Private Access](../connectors/zscalerprivateaccess.md) | Analytics, Hunting, Workbooks |

## Content Items

This solution includes **22 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 10 |
| Hunting Queries | 10 |
| Workbooks | 1 |
| Parsers | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Zscaler - Connections by dormant user](../content/zscaler-private-access-zpa-zscaler-connections-by-dormant-user-66bc77ee-3e45-11ec-9bbc-0242ac130002-f761f156.md) | High | Persistence | [`ZPA_CL`](../tables/zpa-cl.md) |
| [Zscaler - Forbidden countries](../content/zscaler-private-access-zpa-zscaler-forbidden-countries-b3d112b4-3e1e-11ec-9bbc-0242ac130002-e3dd2b4c.md) | High | InitialAccess | [`ZPA_CL`](../tables/zpa-cl.md) |
| [Zscaler - Shared ZPA session](../content/zscaler-private-access-zpa-zscaler-shared-zpa-session-40a98355-0e52-479f-8c91-4ab659cba878-34f5ac2f.md) | High | InitialAccess | [`ZPA_CL`](../tables/zpa-cl.md) |
| [Zscaler - Unexpected ZPA session duration](../content/zscaler-private-access-zpa-zscaler-unexpected-zpa-session-duration-e07846e0-43ad-11ec-81d3-0242ac130003-e4bc983b.md) | Medium | InitialAccess | [`ZPA_CL`](../tables/zpa-cl.md) |
| [Zscaler - Unexpected event count of rejects by policy](../content/zscaler-private-access-zpa-zscaler-unexpected-event-count-of-rejects-by-policy-593e3e2a-43ce-11ec-81d3-0242ac130003-671436d7.md) | High | InitialAccess | [`ZPA_CL`](../tables/zpa-cl.md) |
| [Zscaler - Unexpected update operation](../content/zscaler-private-access-zpa-zscaler-unexpected-update-operation-672e2846-4226-11ec-81d3-0242ac130003-ca8c0527.md) | Medium | InitialAccess | [`ZPA_CL`](../tables/zpa-cl.md) |
| [Zscaler - ZPA connections by new user](../content/zscaler-private-access-zpa-zscaler-zpa-connections-by-new-user-236a7ec1-0120-40f2-a157-c1a72dde8bcb-6ed3d7b4.md) | Medium | Persistence | [`ZPA_CL`](../tables/zpa-cl.md) |
| [Zscaler - ZPA connections from new IP](../content/zscaler-private-access-zpa-zscaler-zpa-connections-from-new-ip-24f0779d-3927-403a-aac1-cc8791653606-b6a233fe.md) | Medium | InitialAccess | [`ZPA_CL`](../tables/zpa-cl.md) |
| [Zscaler - ZPA connections from new country](../content/zscaler-private-access-zpa-zscaler-zpa-connections-from-new-country-c4902121-7a7e-44d1-810b-88d26db622ff-6623ecbd.md) | Medium | InitialAccess | [`ZPA_CL`](../tables/zpa-cl.md) |
| [Zscaler - ZPA connections outside operational hours](../content/zscaler-private-access-zpa-zscaler-zpa-connections-outside-operational-hours-2859ad22-46c8-4cc7-ad7b-80ce0cba0af3-55a9e7fc.md) | Medium | InitialAccess | [`ZPA_CL`](../tables/zpa-cl.md) |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [Zscaler - Abnormal total bytes size](../content/zscaler-private-access-zpa-zscaler-abnormal-total-bytes-size-181dc982-4631-11ec-81d3-0242ac130003-e7032088.md) | Exfiltration, Collection | [`ZPA_CL`](../tables/zpa-cl.md) |
| [Zscaler - Applications using by accounts](../content/zscaler-private-access-zpa-zscaler-applications-using-by-accounts-6ae7b9e0-462a-11ec-81d3-0242ac130003-1ebaabc5.md) | InitialAccess | [`ZPA_CL`](../tables/zpa-cl.md) |
| [Zscaler - Connection close reasons](../content/zscaler-private-access-zpa-zscaler-connection-close-reasons-5467efc0-422c-11ec-81d3-0242ac130003-b72f2e60.md) | InitialAccess | [`ZPA_CL`](../tables/zpa-cl.md) |
| [Zscaler - Destination ports by IP](../content/zscaler-private-access-zpa-zscaler-destination-ports-by-ip-20733e72-4231-11ec-81d3-0242ac130003-28998a41.md) | InitialAccess | [`ZPA_CL`](../tables/zpa-cl.md) |
| [Zscaler - Rare urlhostname requests](../content/zscaler-private-access-zpa-zscaler-rare-urlhostname-requests-d311eb1e-4231-11ec-81d3-0242ac130003-f54f8f3b.md) | InitialAccess | [`ZPA_CL`](../tables/zpa-cl.md) |
| [Zscaler - Server error by user](../content/zscaler-private-access-zpa-zscaler-server-error-by-user-22545900-422d-11ec-81d3-0242ac130003-ce586a93.md) | InitialAccess | [`ZPA_CL`](../tables/zpa-cl.md) |
| [Zscaler - Top connectors](../content/zscaler-private-access-zpa-zscaler-top-connectors-26d5244a-462f-11ec-81d3-0242ac130003-404c3d4b.md) | InitialAccess | [`ZPA_CL`](../tables/zpa-cl.md) |
| [Zscaler - Top source IP](../content/zscaler-private-access-zpa-zscaler-top-source-ip-baf67720-4623-11ec-81d3-0242ac130003-f7a6f7b3.md) | InitialAccess | [`ZPA_CL`](../tables/zpa-cl.md) |
| [Zscaler - Users access groups](../content/zscaler-private-access-zpa-zscaler-users-access-groups-018e11f4-4627-11ec-81d3-0242ac130003-595e360a.md) | InitialAccess | [`ZPA_CL`](../tables/zpa-cl.md) |
| [Zscaler - Users by source location countries](../content/zscaler-private-access-zpa-zscaler-users-by-source-location-countries-bf8ce3e8-422a-11ec-81d3-0242ac130003-b3a2653a.md) | InitialAccess | [`ZPA_CL`](../tables/zpa-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [ZscalerZPA](../content/zscaler-private-access-zpa-zscalerzpa-0c8a39a9.md) | [`ZPA_CL`](../tables/zpa-cl.md) |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [ZPAEvent](../content/zscaler-private-access-zpa-zpaevent-5e9317c6-d07d-4d5f-b048-c487aaab9de2-aa653b0b.md) | - | [`ZPA_CL`](../tables/zpa-cl.md) *(read)* |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                 |
|-------------|--------------------------------|--------------------------------------------------------------------|
| 3.0.4       | 12-01-2026                     | Updated the **ZscalerZPAUnexpectedSessionDuration** Analytic Rule  |
| 3.0.3       | 28-08-2025                     | The parser query now includes additional fields such as SessionID, IPProtocol, ClientCountryCode, and others, improving event parsing and enrichment.                                              |
| 3.0.2       | 08-07-2025                     | Enhanced **Parser** logic to improve result filtering. |
| 3.0.1       | 05-12-2024                     | Removed Deperacted **Data connectors**                             |
| 3.0.0       | 22-08-2024                     | Deprecating data connectors    								    |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

