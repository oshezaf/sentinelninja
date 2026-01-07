# Zscaler Private Access (ZPA)

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **First Published** | 2022-01-31 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Zscaler%20Private%20Access%20%28ZPA%29](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Zscaler%20Private%20Access%20%28ZPA%29) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [[Deprecated] Zscaler Private Access](../connectors/zscalerprivateaccess.md)

## Tables Reference

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`ZPA_CL`](../tables/zpa-cl.md) | [[Deprecated] Zscaler Private Access](../connectors/zscalerprivateaccess.md) | - |

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
| [Zscaler - Connections by dormant user](../content/zscaler-private-access-%28zpa%29-zscaler---connections-by-dormant-user-66bc77ee-3e45-11ec-9bbc-0242ac130002.md) | High | Persistence | - |
| [Zscaler - Forbidden countries](../content/zscaler-private-access-%28zpa%29-zscaler---forbidden-countries-b3d112b4-3e1e-11ec-9bbc-0242ac130002.md) | High | InitialAccess | - |
| [Zscaler - Shared ZPA session](../content/zscaler-private-access-%28zpa%29-zscaler---shared-zpa-session-40a98355-0e52-479f-8c91-4ab659cba878.md) | High | InitialAccess | - |
| [Zscaler - Unexpected ZPA session duration](../content/zscaler-private-access-%28zpa%29-zscaler---unexpected-zpa-session-duration-e07846e0-43ad-11ec-81d3-0242ac130003.md) | Medium | InitialAccess | - |
| [Zscaler - Unexpected event count of rejects by policy](../content/zscaler-private-access-%28zpa%29-zscaler---unexpected-event-count-of-rejects-by-policy-593e3e2a-43ce-11ec-81d3-0242ac130003.md) | High | InitialAccess | - |
| [Zscaler - Unexpected update operation](../content/zscaler-private-access-%28zpa%29-zscaler---unexpected-update-operation-672e2846-4226-11ec-81d3-0242ac130003.md) | Medium | InitialAccess | - |
| [Zscaler - ZPA connections by new user](../content/zscaler-private-access-%28zpa%29-zscaler---zpa-connections-by-new-user-236a7ec1-0120-40f2-a157-c1a72dde8bcb.md) | Medium | Persistence | - |
| [Zscaler - ZPA connections from new IP](../content/zscaler-private-access-%28zpa%29-zscaler---zpa-connections-from-new-ip-24f0779d-3927-403a-aac1-cc8791653606.md) | Medium | InitialAccess | - |
| [Zscaler - ZPA connections from new country](../content/zscaler-private-access-%28zpa%29-zscaler---zpa-connections-from-new-country-c4902121-7a7e-44d1-810b-88d26db622ff.md) | Medium | InitialAccess | - |
| [Zscaler - ZPA connections outside operational hours](../content/zscaler-private-access-%28zpa%29-zscaler---zpa-connections-outside-operational-hours-2859ad22-46c8-4cc7-ad7b-80ce0cba0af3.md) | Medium | InitialAccess | - |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [Zscaler - Abnormal total bytes size](../content/zscaler-private-access-%28zpa%29-zscaler---abnormal-total-bytes-size-181dc982-4631-11ec-81d3-0242ac130003.md) | Exfiltration, Collection | - |
| [Zscaler - Applications using by accounts](../content/zscaler-private-access-%28zpa%29-zscaler---applications-using-by-accounts-6ae7b9e0-462a-11ec-81d3-0242ac130003.md) | InitialAccess | - |
| [Zscaler - Connection close reasons](../content/zscaler-private-access-%28zpa%29-zscaler---connection-close-reasons-5467efc0-422c-11ec-81d3-0242ac130003.md) | InitialAccess | - |
| [Zscaler - Destination ports by IP](../content/zscaler-private-access-%28zpa%29-zscaler---destination-ports-by-ip-20733e72-4231-11ec-81d3-0242ac130003.md) | InitialAccess | - |
| [Zscaler - Rare urlhostname requests](../content/zscaler-private-access-%28zpa%29-zscaler---rare-urlhostname-requests-d311eb1e-4231-11ec-81d3-0242ac130003.md) | InitialAccess | - |
| [Zscaler - Server error by user](../content/zscaler-private-access-%28zpa%29-zscaler---server-error-by-user-22545900-422d-11ec-81d3-0242ac130003.md) | InitialAccess | - |
| [Zscaler - Top connectors](../content/zscaler-private-access-%28zpa%29-zscaler---top-connectors-26d5244a-462f-11ec-81d3-0242ac130003.md) | InitialAccess | - |
| [Zscaler - Top source IP](../content/zscaler-private-access-%28zpa%29-zscaler---top-source-ip-baf67720-4623-11ec-81d3-0242ac130003.md) | InitialAccess | - |
| [Zscaler - Users access groups](../content/zscaler-private-access-%28zpa%29-zscaler---users-access-groups-018e11f4-4627-11ec-81d3-0242ac130003.md) | InitialAccess | - |
| [Zscaler - Users by source location countries](../content/zscaler-private-access-%28zpa%29-zscaler---users-by-source-location-countries-bf8ce3e8-422a-11ec-81d3-0242ac130003.md) | InitialAccess | - |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [ZscalerZPA](../content/zscaler-private-access-%28zpa%29-zscalerzpa.md) | - |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [ZPAEvent](../content/zscaler-private-access-%28zpa%29-zpaevent-5e9317c6-d07d-4d5f-b048-c487aaab9de2.md) | - | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                 |
|-------------|--------------------------------|--------------------------------------------------------------------|
| 3.0.3       | 28-08-2025                     | The parser query now includes additional fields such as SessionID, IPProtocol, ClientCountryCode, and others, improving event parsing and enrichment.                                              |
| 3.0.2       | 08-07-2025                     | Enhanced **Parser** logic to improve result filtering. |
| 3.0.1       | 05-12-2024                     | Removed Deperacted **Data connectors**                             |
| 3.0.0       | 22-08-2024                     | Deprecating data connectors    								    |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
