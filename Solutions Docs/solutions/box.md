# Box

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **First Published** | 2022-05-20 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Box](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Box) |

## Data Connectors

This solution provides **2 data connector(s)**:

- [Box](../connectors/boxdataconnector.md)
- [Box Events (CCP)](../connectors/boxeventsccpdefinition.md)

## Tables Reference

This solution uses **2 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`BoxEventsV2_CL`](../tables/boxeventsv2-cl.md) | [Box Events (CCP)](../connectors/boxeventsccpdefinition.md) | - |
| [`BoxEvents_CL`](../tables/boxevents-cl.md) | [Box](../connectors/boxdataconnector.md), [Box Events (CCP)](../connectors/boxeventsccpdefinition.md) | Analytics, Hunting, Workbooks |

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
| [Box - Abmormal user activity](../content/1139230c-cf10-45db-b616-fed0d1415c05.md) | Medium | Collection | [`BoxEvents_CL`](../tables/boxevents-cl.md) |
| [Box - Executable file in folder](../content/b91ec98d-5747-45c8-b2f6-a07bf47068f0.md) | Medium | InitialAccess | [`BoxEvents_CL`](../tables/boxevents-cl.md) |
| [Box - File containing sensitive data](../content/266746ae-5eaf-4068-a980-5d630f435c46.md) | Medium | Exfiltration | [`BoxEvents_CL`](../tables/boxevents-cl.md) |
| [Box - Forbidden file type downloaded](../content/8889e69c-2161-412a-94a6-76c1b2d9daa7.md) | Medium | InitialAccess | [`BoxEvents_CL`](../tables/boxevents-cl.md) |
| [Box - Inactive user login](../content/edbf38d7-e170-4af2-ad50-1a05b374611b.md) | Medium | InitialAccess | [`BoxEvents_CL`](../tables/boxevents-cl.md) |
| [Box - Item shared to external entity](../content/3b803560-f8a6-4db4-89cb-617d89724ba1.md) | Medium | Exfiltration | [`BoxEvents_CL`](../tables/boxevents-cl.md) |
| [Box - Many items deleted by user](../content/1b212329-6f2c-46ca-9071-de3464f3d88d.md) | Medium | Impact | [`BoxEvents_CL`](../tables/boxevents-cl.md) |
| [Box - New external user](../content/fd36ac88-cd92-4137-aa23-37a3648621fa.md) | Medium | InitialAccess, Persistence | [`BoxEvents_CL`](../tables/boxevents-cl.md) |
| [Box - User logged in as admin](../content/b2197d7f-4731-483c-89de-d48606b872da.md) | Medium | PrivilegeEscalation | [`BoxEvents_CL`](../tables/boxevents-cl.md) |
| [Box - User role changed to owner](../content/174c31c9-22ec-42e5-8226-814391c08200.md) | Medium | PrivilegeEscalation | [`BoxEvents_CL`](../tables/boxevents-cl.md) |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [Box - Deleted users](../content/4b4a1802-8fcc-4eeb-9ccd-b5bb16f4b64b.md) | Impact | [`BoxEvents_CL`](../tables/boxevents-cl.md) |
| [Box - Downloaded data volume per user](../content/47e0a82d-fd66-4d6e-a64a-ac377f136426.md) | Exfiltration, Collection | [`BoxEvents_CL`](../tables/boxevents-cl.md) |
| [Box - IP list for admin users](../content/949aec39-304d-4fba-94b3-15337d05e3f1.md) | InitialAccess, PrivilegeEscalation | [`BoxEvents_CL`](../tables/boxevents-cl.md) |
| [Box - Inactive admin users](../content/d8ef8d5c-97f3-4552-afca-75d44339fa8f.md) | PrivilegeEscalation | [`BoxEvents_CL`](../tables/boxevents-cl.md) |
| [Box - Inactive users](../content/c0a4169e-c713-484b-95a9-d8f437b52d66.md) | InitialAccess | [`BoxEvents_CL`](../tables/boxevents-cl.md) |
| [Box - New users](../content/c8e19aa5-3424-4b90-8594-79ee4613f429.md) | PrivilegeEscalation, Persistence | [`BoxEvents_CL`](../tables/boxevents-cl.md) |
| [Box - New users](../content/5ff08015-2d1e-4c2b-862f-2759e6132d0e.md) | PrivilegeEscalation | [`BoxEvents_CL`](../tables/boxevents-cl.md) |
| [Box - Suspicious or sensitive files](../content/6b91dda7-d9c5-4197-9dea-0c41f7c55176.md) | Exfiltration | [`BoxEvents_CL`](../tables/boxevents-cl.md) |
| [Box - Uploaded data volume per user](../content/484f9c1c-a8d6-4a78-b526-d38958ade100.md) | Exfiltration, Collection | [`BoxEvents_CL`](../tables/boxevents-cl.md) |
| [Box - Users with owner permissions](../content/09fee766-d5ba-4e8c-8e9e-363915aee1f4.md) | PrivilegeEscalation | [`BoxEvents_CL`](../tables/boxevents-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [Box](../content/box-box.md) | [`BoxEvents_CL`](../tables/boxevents-cl.md) |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [BoxEvents](../content/231a04da-9a8d-4cd6-8a20-2da7ded173ba.md) | - | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                 |
|-------------|--------------------------------|--------------------------------------------------------------------|
| 3.1.2       | 29-10-2025                     | Updated KQL queries in Workbook to use EventEndTime instead of TimeGenerated for time-based filtering |
| 3.1.1       | 10-02-2025                     | Advancing CCP **Data Connector** from Public preview to Global Availability.|
| 3.1.0       | 06-12-2024                     | Added new CCP **Data Connector** and modified **Parser**.           |
| 3.0.1       | 18-08-2023                     | Added text 'using Azure Functions' in **Data Connector** page.      |
| 3.0.0       | 19-07-2023                     | Manual deployment instructions updated for **Data Connector**.		|

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
