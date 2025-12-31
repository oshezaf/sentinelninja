# Legacy IOC based Threat Protection

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **First Published** | 2022-12-19 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Legacy%20IOC%20based%20Threat%20Protection](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Legacy%20IOC%20based%20Threat%20Protection) |

## Data Connectors

**This solution does not include data connectors.**

This solution may contain other components such as analytics rules, workbooks, hunting queries, or playbooks.

## Tables Reference

This solution queries **18 table(s)** from its content items:

| Table | Used By Content |
|-------|----------------|
| [`ASimFileEventLogs`](../tables/asimfileeventlogs.md) | Hunting |
| [`CarbonBlackEvents_CL`](../tables/carbonblackevents-cl.md) | Hunting |
| [`DeviceFileEvents`](../tables/devicefileevents.md) | Hunting |
| [`DeviceProcessEvents`](../tables/deviceprocessevents.md) | Hunting |
| [`Event`](../tables/event.md) | Hunting |
| [`EventParser`](../tables/eventparser.md) | Hunting |
| [`OfficeActivity`](../tables/officeactivity.md) | Hunting |
| [`SecurityEvent`](../tables/securityevent.md) | Hunting |
| [`SentinelOne_CL`](../tables/sentinelone-cl.md) | Hunting |
| [`StorageBlobLogs`](../tables/storagebloblogs.md) | Hunting |
| [`StorageFileLogs`](../tables/storagefilelogs.md) | Hunting |
| [`StorageQueueLogs`](../tables/storagequeuelogs.md) | Hunting |
| [`StorageTableLogs`](../tables/storagetablelogs.md) | Hunting |
| [`Syslog`](../tables/syslog.md) | Hunting |
| [`WindowsEvent`](../tables/windowsevent.md) | Hunting |
| [`WindowsEventParser`](../tables/windowseventparser.md) | Hunting |
| [`imProcess`](../tables/improcess.md) | Hunting |
| [`parseddata`](../tables/parseddata.md) | Hunting |

### Internal Tables

The following **1 table(s)** are used internally by this solution's playbooks:

| Table | Used By Content |
|-------|----------------|
| [`SecurityAlert`](../tables/securityalert.md) | Hunting |

## Content Items

This solution includes **10 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Hunting Queries | 10 |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [Connection from external IP to OMI related Ports](../content/767b8f6d-8029-4c92-afe1-282167d9d49a.md) | Reconnaissance, InitialAccess | - |
| [Dev-0056 Command Line Activity November 2021](../content/e2629949-2043-4421-8064-bca23c8491dd.md) | CommandAndControl | - |
| [Dev-0322 Command Line Activity November 2021](../content/78fa22f9-0c13-4847-bbe6-6a7aa1b47547.md) | Persistence, LateralMovement, CommandAndControl | [`DeviceProcessEvents`](../tables/deviceprocessevents.md) |
| [Dev-0322 Command Line Activity November 2021 (ASIM Version)](../content/6bfea14f-2122-46b3-8f8b-3947e0fb6d92.md) | Persistence, LateralMovement, CommandAndControl | [`imProcess`](../tables/improcess.md) |
| [Dev-0322 File Drop Activity November 2021](../content/5bf2d4d8-ea03-4673-aaf8-716a61446022.md) | Persistence, CommandAndControl | [`DeviceFileEvents`](../tables/devicefileevents.md) |
| [Dev-0322 File Drop Activity November 2021 (ASIM Version)](../content/9b72769e-6ab1-4736-988b-018d92dc5e62.md) | Persistence, CommandAndControl | [`ASimFileEventLogs`](../tables/asimfileeventlogs.md)<br>[`CarbonBlackEvents_CL`](../tables/carbonblackevents-cl.md)<br>[`DeviceFileEvents`](../tables/devicefileevents.md)<br>[`Event`](../tables/event.md)<br>[`EventParser`](../tables/eventparser.md)<br>[`OfficeActivity`](../tables/officeactivity.md)<br>[`SecurityEvent`](../tables/securityevent.md)<br>[`SentinelOne_CL`](../tables/sentinelone-cl.md)<br>[`StorageBlobLogs`](../tables/storagebloblogs.md)<br>[`StorageFileLogs`](../tables/storagefilelogs.md)<br>[`StorageQueueLogs`](../tables/storagequeuelogs.md)<br>[`StorageTableLogs`](../tables/storagetablelogs.md)<br>[`Syslog`](../tables/syslog.md)<br>[`WindowsEvent`](../tables/windowsevent.md)<br>[`WindowsEventParser`](../tables/windowseventparser.md)<br>[`parseddata`](../tables/parseddata.md) |
| [Known Nylon Typhoon Registry modifications patterns](../content/f090f8f4a-b986-42d2-b536-e0795c723e25.md) | Persistence | [`SecurityEvent`](../tables/securityevent.md) |
| [Nylon Typhoon Command Line Activity November 2021](../content/bb30abbc-9af6-4a37-9536-e9207e023989.md) | Collection | *Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md) |
| [Retrospective hunt for Forest Blizzard IP IOCs](../content/b8b7574f-1cd6-4308-822a-ab07256106f8.md) | CommandAndControl | - |
| [SolarWinds Inventory](../content/278592b5-612b-48a4-bb38-4c01ff8ee2a5.md) | Execution | [`SecurityEvent`](../tables/securityevent.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                             |
|-------------|--------------------------------|--------------------------------------------------------------------------------|
| 3.0.5       | 03-06-2024                     | Added missing AMA **Data Connector** reference in **Hunting Query**     |
| 3.0.4       | 22-02-2024                     | Tagged for dependent solutions for deployment                                  |
| 3.0.3       | 19-12-2023                     | Corrected typo mistake *Microsoft Windows DNS* to *Windows Server DNS*         |                           
| 3.0.2       | 12-12-2023                     | Removed deprecated **Analytical Rules**                                        |
| 3.0.1       | 07-11-2023                     | Changes for rebranding from Azure Active Directory to Microsoft Entra ID & Microsoft 365 Defender to Microsoft Defender XDR   |
| 3.0.0       | 19-05-2023                     | Deprecating outdated IOC Based **Analytic Rules** 		                        |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
