# <img src="../images/asim-badge.png" alt="ASIM" height="32"> ASIM Source Agnostic File Events Parser

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `imFileEvent` |
| **Built-in Parser** | `_Im_FileEvent` |
| **Schema** | FileEvent |
| **Schema Version** | 0.2.1 |
| **Parser Type** | 📦 Union (schema-level) |
| **Parser Version** | 0.2.1 |
| **Last Updated** | Jun 5, 2024 |
| **Source File** | [Parsers\ASimFileEvent\Parsers\imFileEvent.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimFileEvent/Parsers/imFileEvent.yaml) |

## Description

This ASIM parser supports normalizing File activity logs from all supported sources to the ASIM File Event normalized schema.

## Products

This union parser includes parsers for the following products:

| Product | Source Parser |
|:--------|:--------------|
| Microsoft Azure Blob Storage | [_Im_FileEvent_AzureBlobStorage](vimfileeventazureblobstorage.md) |
| Microsoft Azure File Storage | [_Im_FileEvent_AzureFileStorage](vimfileeventazurefilestorage.md) |
| Microsoft Azure Queue Storage | [_Im_FileEvent_AzureQueueStorage](vimfileeventazurequeuestorage.md) |
| Microsoft Azure Table Storage | [_Im_FileEvent_AzureTableStorage](vimfileeventazuretablestorage.md) |
| Microsoft Sentinel | [_Im_FileEvent_Empty](vimfileeventempty.md) |
| Google Workspace | [_Im_FileEvent_GoogleWorkspace](vimfileeventgoogleworkspace.md) |
| Microsoft Sysmon for Linux | [_Im_FileEvent_LinuxSysmonFileCreated](vimfileeventlinuxsysmonfilecreated.md) |
| Microsoft Sysmon for Linux | [_Im_FileEvent_LinuxSysmonFileDeleted](vimfileeventlinuxsysmonfiledeleted.md) |
| Microsoft 365 Defender for EndPoint | [_Im_FileEvent_Microsoft365D](vimfileeventmicrosoft365d.md) |
| Microsoft Windows Events | [_Im_FileEvent_MicrosoftSecurityEvents](vimfileeventmicrosoftsecurityevents.md) |
| Microsoft SharePoint | [_Im_FileEvent_MicrosoftSharePoint](vimfileeventmicrosoftsharepoint.md) |
| Windows Sysmon | [_Im_FileEvent_MicrosoftSysmon](vimfileeventmicrosoftsysmon.md) |
| Windows Sysmon | [_Im_FileEvent_MicrosoftSysmonWindowsEvent](vimfileeventmicrosoftsysmonwindowsevent.md) |
| Microsoft Windows Events | [_Im_FileEvent_MicrosoftWindowsEvents](vimfileeventmicrosoftwindowsevents.md) |
| Native | [_Im_FileEvent_Native](vimfileeventnative.md) |
| SentinelOne | [_Im_FileEvent_SentinelOne](vimfileeventsentinelone.md) |
| VMware Carbon Black Cloud | [_Im_FileEvent_VMwareCarbonBlackCloud](vimfileeventvmwarecarbonblackcloud.md) |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `starttime` | datetime | datetime(null) |
| `endtime` | datetime | datetime(null) |
| `eventtype_in` | dynamic | dynamic([]) |
| `srcipaddr_has_any_prefix` | dynamic | dynamic([]) |
| `actorusername_has_any` | dynamic | dynamic([]) |
| `targetfilepath_has_any` | dynamic | dynamic([]) |
| `srcfilepath_has_any` | dynamic | dynamic([]) |
| `hashes_has_any` | dynamic | dynamic([]) |
| `dvchostname_has_any` | dynamic | dynamic([]) |
| `disabled` | bool | False |
| `pack` | bool | False |

## References

- [ASIM File Event Schema](https://aka.ms/ASimFileEventDoc)
- [ASIM](https://aka.ms/AboutASIM)

---

**Browse:**

- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

