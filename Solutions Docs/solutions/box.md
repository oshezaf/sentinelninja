# Box

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Solutions/Box/Workbooks/Images/Logo/box.svg" alt="Box Logo" width="75" height="75">

The [Box](https://developer.box.com/guides/events/enterprise-events/for-enterprise/) solution connector provides the capability to ingest [Box enterprise's events](https://developer.box.com/guides/events/#admin-events) into Microsoft Sentinel using the Box REST API 
 
 **Underlying Microsoft Technologies used:** 
 
 This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs:
 
 a. [Azure Monitor HTTP Data Collector API](https://docs.microsoft.com/azure/azure-monitor/logs/data-collector-api) 
 
 b. [Azure Functions ](https://azure.microsoft.com/services/functions/#overview)

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **Version** | 3.1.2 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2022-05-20 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Box](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Box) |

## Data Connectors

This solution provides **2 data connector(s)**:

- [Box](../connectors/boxdataconnector.md)
- [Box Events (CCP)](../connectors/boxeventsccpdefinition.md)

## Tables Used

This solution uses **2 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`BoxEventsV2_CL`](../tables/boxeventsv2-cl.md) | [Box Events (CCP)](../connectors/boxeventsccpdefinition.md) | - |
| [`BoxEvents_CL`](../tables/boxevents-cl.md) | [Box](../connectors/boxdataconnector.md) | - |

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
| [Box - Abmormal user activity](../content/box-box-abmormal-user-activity-1139230c-cf10-45db-b616-fed0d1415c05-d050017d.md) | Medium | Collection | - |
| [Box - Executable file in folder](../content/box-box-executable-file-in-folder-b91ec98d-5747-45c8-b2f6-a07bf47068f0-524e216a.md) | Medium | InitialAccess | - |
| [Box - File containing sensitive data](../content/box-box-file-containing-sensitive-data-266746ae-5eaf-4068-a980-5d630f435c46-bb951f6a.md) | Medium | Exfiltration | - |
| [Box - Forbidden file type downloaded](../content/box-box-forbidden-file-type-downloaded-8889e69c-2161-412a-94a6-76c1b2d9daa7-190c2323.md) | Medium | InitialAccess | - |
| [Box - Inactive user login](../content/box-box-inactive-user-login-edbf38d7-e170-4af2-ad50-1a05b374611b-ede0d64c.md) | Medium | InitialAccess | - |
| [Box - Item shared to external entity](../content/box-box-item-shared-to-external-entity-3b803560-f8a6-4db4-89cb-617d89724ba1-77c468b4.md) | Medium | Exfiltration | - |
| [Box - Many items deleted by user](../content/box-box-many-items-deleted-by-user-1b212329-6f2c-46ca-9071-de3464f3d88d-af060c46.md) | Medium | Impact | - |
| [Box - New external user](../content/box-box-new-external-user-fd36ac88-cd92-4137-aa23-37a3648621fa-96cd22de.md) | Medium | InitialAccess, Persistence | - |
| [Box - User logged in as admin](../content/box-box-user-logged-in-as-admin-b2197d7f-4731-483c-89de-d48606b872da-6058ec71.md) | Medium | PrivilegeEscalation | - |
| [Box - User role changed to owner](../content/box-box-user-role-changed-to-owner-174c31c9-22ec-42e5-8226-814391c08200-4e0da2af.md) | Medium | PrivilegeEscalation | - |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [Box - Deleted users](../content/box-box-deleted-users-4b4a1802-8fcc-4eeb-9ccd-b5bb16f4b64b-640b3c89.md) | Impact | - |
| [Box - Downloaded data volume per user](../content/box-box-downloaded-data-volume-per-user-47e0a82d-fd66-4d6e-a64a-ac377f136426-48750ae0.md) | Exfiltration, Collection | - |
| [Box - IP list for admin users](../content/box-box-ip-list-for-admin-users-949aec39-304d-4fba-94b3-15337d05e3f1-35a7f33f.md) | InitialAccess, PrivilegeEscalation | - |
| [Box - Inactive admin users](../content/box-box-inactive-admin-users-d8ef8d5c-97f3-4552-afca-75d44339fa8f-5119ae4c.md) | PrivilegeEscalation | - |
| [Box - Inactive users](../content/box-box-inactive-users-c0a4169e-c713-484b-95a9-d8f437b52d66-db4d3cd3.md) | InitialAccess | - |
| [Box - New users](../content/box-box-new-users-c8e19aa5-3424-4b90-8594-79ee4613f429-1fc18e56.md) | PrivilegeEscalation, Persistence | - |
| [Box - New users](../content/box-box-new-users-5ff08015-2d1e-4c2b-862f-2759e6132d0e-618b766e.md) | PrivilegeEscalation | - |
| [Box - Suspicious or sensitive files](../content/box-box-suspicious-or-sensitive-files-6b91dda7-d9c5-4197-9dea-0c41f7c55176-6026681b.md) | Exfiltration | - |
| [Box - Uploaded data volume per user](../content/box-box-uploaded-data-volume-per-user-484f9c1c-a8d6-4a78-b526-d38958ade100-a4aab1ac.md) | Exfiltration, Collection | - |
| [Box - Users with owner permissions](../content/box-box-users-with-owner-permissions-09fee766-d5ba-4e8c-8e9e-363915aee1f4-c5ab842d.md) | PrivilegeEscalation | - |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [Box](../content/box-box-c7528016.md) | - |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [BoxEvents](../content/box-boxevents-231a04da-9a8d-4cd6-8a20-2da7ded173ba-dc778668.md) | - | - |

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
- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

