# <img src="../images/asim-badge.png" alt="ASIM" height="32"> File event ASIM parser

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

---

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimFileEvent` |
| **Built-in Parser** | `_ASim_FileEvent` |
| **Schema** | FileEvent |
| **Schema Version** | 0.2.1 |
| **Parser Type** | 📦 Union (schema-level) |
| **Parser Version** | 0.1.3 ([version history](https://github.com/Azure/Azure-Sentinel/tree/master/Parsers/ASimFileEvent/CHANGELOG/ASimFileEvent.md)) |
| **Last Updated** | Jun 6, 2024 |
| **Source File** | [Parsers\ASimFileEvent\Parsers\ASimFileEvent.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimFileEvent/Parsers/ASimFileEvent.yaml) |

## Description

This ASIM parser supports normalizing File activity logs from all supported sources to the ASIM File Event normalized schema.

## Products

This union parser includes parsers for the following products:

| Product | Source Parser | Solutions |
|:--------|:--------------|:----------|
| Microsoft Azure Blob Storage | [_ASim_FileEvent_AzureBlobStorage](asimfileeventazureblobstorage.md) | [Azure Storage](../solutions/azure-storage.md) |
| Microsoft Azure File Storage | [_ASim_FileEvent_AzureFileStorage](asimfileeventazurefilestorage.md) | [Azure Storage](../solutions/azure-storage.md) |
| Microsoft Azure Queue Storage | [_ASim_FileEvent_AzureQueueStorage](asimfileeventazurequeuestorage.md) | [Azure Storage](../solutions/azure-storage.md) |
| Microsoft Azure Table Storage | [_ASim_FileEvent_AzureTableStorage](asimfileeventazuretablestorage.md) | [Azure Storage](../solutions/azure-storage.md) |
| Google Workspace | [_ASim_FileEvent_GoogleWorkspace](asimfileeventgoogleworkspace.md) |  |
| Microsoft Sysmon for Linux | [_ASim_FileEvent_LinuxSysmonFileCreated](asimfileeventlinuxsysmonfilecreated.md) | [Syslog](../solutions/syslog.md) |
| Microsoft Sysmon for Linux | [_ASim_FileEvent_LinuxSysmonFileDeleted](asimfileeventlinuxsysmonfiledeleted.md) | [Syslog](../solutions/syslog.md) |
| Microsoft 365 Defender for EndPoint | [_ASim_FileEvent_Microsoft365D](asimfileeventmicrosoft365d.md) |  |
| Microsoft Windows Events | [_ASim_FileEvent_MicrosoftSecurityEvents](asimfileeventmicrosoftsecurityevents.md) | [Windows Security Events](../solutions/windows-security-events.md) |
| Microsoft SharePoint | [_ASim_FileEvent_MicrosoftSharePoint](asimfileeventmicrosoftsharepoint.md) |  |
| Windows Sysmon | [_ASim_FileEvent_MicrosoftSysmon](asimfileeventmicrosoftsysmon.md) |  |
| Windows Sysmon | [_ASim_FileEvent_MicrosoftSysmonWindowsEvent](asimfileeventmicrosoftsysmonwindowsevent.md) | [Windows Forwarded Events](../solutions/windows-forwarded-events.md) |
| Microsoft Windows Events | [_ASim_FileEvent_MicrosoftWindowsEvents](asimfileeventmicrosoftwindowsevents.md) | [Windows Forwarded Events](../solutions/windows-forwarded-events.md) |
| Native | [_ASim_FileEvent_Native](asimfileeventnative.md) | [CrowdStrike Falcon Endpoint Protection](../solutions/crowdstrike-falcon-endpoint-protection.md)<br>[VMware Carbon Black Cloud](../solutions/vmware-carbon-black-cloud.md) |
| SentinelOne | [_ASim_FileEvent_SentinelOne](asimfileeventsentinelone.md) | [SentinelOne](../solutions/sentinelone.md) |
| VMware Carbon Black Cloud | [_ASim_FileEvent_VMwareCarbonBlackCloud](asimfileeventvmwarecarbonblackcloud.md) | [VMware Carbon Black Cloud](../solutions/vmware-carbon-black-cloud.md) |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `pack` | bool | False |

## References

- [ASIM File Event Schema](https://aka.ms/ASimFileEventDoc)
- [ASIM](https://aka.ms/AboutASIM)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

