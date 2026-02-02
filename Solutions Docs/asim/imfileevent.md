# <img src="../images/asim-badge.png" alt="ASIM" height="32"> ASIM Source Agnostic File Events Parser

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

---

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `imFileEvent` |
| **Built-in Parser** | `_Im_FileEvent` |
| **Schema** | FileEvent |
| **Schema Version** | 0.2.1 |
| **Parser Type** | 📦 Union (schema-level) |
| **Parser Version** | 0.2.1 ([version history](https://github.com/Azure/Azure-Sentinel/tree/master/Parsers/ASimFileEvent/CHANGELOG/imFileEvent.md)) |
| **Last Updated** | Jun 5, 2024 |
| **Source File** | [Parsers\ASimFileEvent\Parsers\imFileEvent.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimFileEvent/Parsers/imFileEvent.yaml) |

## Description

This ASIM parser supports normalizing File activity logs from all supported sources to the ASIM File Event normalized schema.

## Products

This union parser includes parsers for the following products:

| Product | Source Parser |
|:--------|:--------------|
|  | [_Im_FileEvent_AzureBlobStorage](im-fileevent-azureblobstorage.md) |
|  | [_Im_FileEvent_AzureFileStorage](im-fileevent-azurefilestorage.md) |
|  | [_Im_FileEvent_AzureQueueStorage](im-fileevent-azurequeuestorage.md) |
|  | [_Im_FileEvent_AzureTableStorage](im-fileevent-azuretablestorage.md) |
|  | [_Im_FileEvent_Empty](im-fileevent-empty.md) |
|  | [_Im_FileEvent_GoogleWorkspace](im-fileevent-googleworkspace.md) |
|  | [_Im_FileEvent_LinuxSysmonFileCreated](im-fileevent-linuxsysmonfilecreated.md) |
|  | [_Im_FileEvent_LinuxSysmonFileDeleted](im-fileevent-linuxsysmonfiledeleted.md) |
|  | [_Im_FileEvent_Microsoft365D](im-fileevent-microsoft365d.md) |
|  | [_Im_FileEvent_MicrosoftSecurityEvents](im-fileevent-microsoftsecurityevents.md) |
|  | [_Im_FileEvent_MicrosoftSharePoint](im-fileevent-microsoftsharepoint.md) |
|  | [_Im_FileEvent_MicrosoftSysmon](im-fileevent-microsoftsysmon.md) |
|  | [_Im_FileEvent_MicrosoftSysmonWindowsEvent](im-fileevent-microsoftsysmonwindowsevent.md) |
|  | [_Im_FileEvent_MicrosoftWindowsEvents](im-fileevent-microsoftwindowsevents.md) |
|  | [_Im_FileEvent_Native](im-fileevent-native.md) |
|  | [_Im_FileEvent_SentinelOne](im-fileevent-sentinelone.md) |
|  | [_Im_FileEvent_VMwareCarbonBlackCloud](im-fileevent-vmwarecarbonblackcloud.md) |

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

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

