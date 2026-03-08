# <img src="../images/asim-badge.png" alt="ASIM" height="32"> ASIM Source Agnostic File Events Parser

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

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

| Product | Source Parser | Solutions |
|:--------|:--------------|:----------|
| Microsoft Azure Blob Storage | [_Im_FileEvent_AzureBlobStorage](asimfileeventazureblobstorage.md) | [Azure Storage](../solutions/azure-storage.md) |
| Microsoft Azure File Storage | [_Im_FileEvent_AzureFileStorage](asimfileeventazurefilestorage.md) | [Azure Storage](../solutions/azure-storage.md) |
| Microsoft Azure Queue Storage | [_Im_FileEvent_AzureQueueStorage](asimfileeventazurequeuestorage.md) | [Azure Storage](../solutions/azure-storage.md) |
| Microsoft Azure Table Storage | [_Im_FileEvent_AzureTableStorage](asimfileeventazuretablestorage.md) | [Azure Storage](../solutions/azure-storage.md) |
| Google Workspace | [_Im_FileEvent_GoogleWorkspace](asimfileeventgoogleworkspace.md) |  |
| Microsoft Sysmon for Linux | [_Im_FileEvent_LinuxSysmonFileCreated](asimfileeventlinuxsysmonfilecreated.md) | [Syslog](../solutions/syslog.md) |
| Microsoft Sysmon for Linux | [_Im_FileEvent_LinuxSysmonFileDeleted](asimfileeventlinuxsysmonfiledeleted.md) | [Syslog](../solutions/syslog.md) |
| Microsoft 365 Defender for EndPoint | [_Im_FileEvent_Microsoft365D](asimfileeventmicrosoft365d.md) |  |
| Microsoft Windows Events | [_Im_FileEvent_MicrosoftSecurityEvents](asimfileeventmicrosoftsecurityevents.md) | [Windows Security Events](../solutions/windows-security-events.md) |
| Microsoft SharePoint | [_Im_FileEvent_MicrosoftSharePoint](asimfileeventmicrosoftsharepoint.md) |  |
| Windows Sysmon | [_Im_FileEvent_MicrosoftSysmon](asimfileeventmicrosoftsysmon.md) |  |
| Windows Sysmon | [_Im_FileEvent_MicrosoftSysmonWindowsEvent](asimfileeventmicrosoftsysmonwindowsevent.md) | [Windows Forwarded Events](../solutions/windows-forwarded-events.md) |
| Microsoft Windows Events | [_Im_FileEvent_MicrosoftWindowsEvents](asimfileeventmicrosoftwindowsevents.md) | [Windows Forwarded Events](../solutions/windows-forwarded-events.md) |
| Native | [_Im_FileEvent_Native](asimfileeventnative.md) | [CrowdStrike Falcon Endpoint Protection](../solutions/crowdstrike-falcon-endpoint-protection.md)<br>[VMware Carbon Black Cloud](../solutions/vmware-carbon-black-cloud.md) |
| SentinelOne | [_Im_FileEvent_SentinelOne](asimfileeventsentinelone.md) | [SentinelOne](../solutions/sentinelone.md) |
| VMware Carbon Black Cloud | [_Im_FileEvent_VMwareCarbonBlackCloud](asimfileeventvmwarecarbonblackcloud.md) | [VMware Carbon Black Cloud](../solutions/vmware-carbon-black-cloud.md) |

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

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to ASIM Index](asim-index.md)

