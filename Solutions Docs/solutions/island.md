# Island

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/island.svg" alt="Island Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Island |
| **Support Tier** | Partner |
| **Support Link** | [https://www.island.io](https://www.island.io) |
| **Categories** | domains |
| **Version** | 3.2.0 |
| **Author** | Island - support@island.io |
| **First Published** | 2023-05-02 |
| **Last Updated** | 2026-04-14 |
| **Solution Folder** | [Island](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Island) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/islandtechnologyinc1679434413850.island-sentinel-solution) · Popularity: 🟡 Low (27%) |

The [Island Enterprise Browser](https://www.island.io/) solution for Microsoft Sentinel enables you to ingest events for both User Activity and Admin Audit via API using Microsoft Sentinel CCP Data Connectors.

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)

## Data Connectors

This solution provides **3 data connector(s)**:

- [Island Enterprise Browser V2](../connectors/islandv2.md)
- [Island Enterprise Browser Admin Events (Legacy)](../connectors/island-admin-polling.md)
- [Island Enterprise Browser User Events (Legacy)](../connectors/island-user-polling.md)

## Tables Used

This solution uses **5 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`Island_AdminEvents_V2_CL`](../tables/island-adminevents-v2-cl.md) | [Island Enterprise Browser V2](../connectors/islandv2.md) | - |
| [`Island_Admin_CL`](../tables/island-admin-cl.md) | [Island Enterprise Browser Admin Events (Legacy)](../connectors/island-admin-polling.md) | Workbooks |
| [`Island_SystemEvents_V2_CL`](../tables/island-systemevents-v2-cl.md) | [Island Enterprise Browser V2](../connectors/islandv2.md) | - |
| [`Island_UserEvents_V2_CL`](../tables/island-userevents-v2-cl.md) | [Island Enterprise Browser V2](../connectors/islandv2.md) | - |
| [`Island_User_CL`](../tables/island-user-cl.md) | [Island Enterprise Browser User Events (Legacy)](../connectors/island-user-polling.md) | Workbooks |

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
| 3.2.0       | 05-04-2026                     | Reverted V1 connector names and descriptions to original. Updated V2 connector title, description, prerequisites, and configuration text. Removed placeholder URL from V2 connector. |
| 3.1.0       | 16-02-2026                     | Added **Island V2 CCP Data Connector** with DCR-based ingestion for user events, admin events, and system events. Marked V1 connectors as legacy. |
| 3.0.0       | 28-07-2023                     | Added API Url field to Data Connectors so all regions can be supported |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

