# Island

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/island.svg" alt="Island Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

The [Island Enterprise Browser](https://www.island.io/) solution for Microsoft Sentinel enables you to ingest events for both User Activity and Admin Audit via API using Microsoft Sentinel CCP Data Connectors.

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Island |
| **Support Tier** | Partner |
| **Support Link** | [https://www.island.io](https://www.island.io) |
| **Categories** | domains |
| **Version** | 3.0.0 |
| **Author** | Island - support@island.io |
| **First Published** | 2023-05-02 |
| **Last Updated** | 2023-07-20 |
| **Solution Folder** | [Island](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Island) |

## Data Connectors

This solution provides **2 data connector(s)**:

- [Island Enterprise Browser Admin Audit (Polling CCP)](../connectors/island-admin-polling.md)
- [Island Enterprise Browser User Activity (Polling CCP)](../connectors/island-user-polling.md)

## Tables Used

This solution uses **2 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`Island_Admin_CL`](../tables/island-admin-cl.md) | [Island Enterprise Browser Admin Audit (Polling CCP)](../connectors/island-admin-polling.md) | Workbooks |
| [`Island_User_CL`](../tables/island-user-cl.md) | [Island Enterprise Browser User Activity (Polling CCP)](../connectors/island-user-polling.md) | Workbooks |

## Content Items

This solution includes **2 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Workbooks | 2 |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [IslandAdminAuditOverview](../content/island-islandadminauditoverview-f64c0889.md) | [`Island_Admin_CL`](../tables/island-admin-cl.md) |
| [IslandUserActivityOverview](../content/island-islanduseractivityoverview-2db014e3.md) | [`Island_User_CL`](../tables/island-user-cl.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                          |
|-------------|--------------------------------|---------------------------------------------|
| 3.0.0       | 28-07-2023                     | Added API Url field to Data Connectors so all regions can be supported |
|       |                     | Added new query rate limit in Data Connectors to prevent API flooding |
|       |                     | Bug fix for wrong table referenced in query in workbook |
| 2.0.1       | 08-05-2023                     | Bug fix for APIVersion in Data Connector |
| 2.0.0       | 14-02-2023                     | Initial Solution Release |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

