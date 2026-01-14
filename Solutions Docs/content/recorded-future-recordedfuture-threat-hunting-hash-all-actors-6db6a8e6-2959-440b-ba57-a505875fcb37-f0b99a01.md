# <img src="../images/asim-badge.png" alt="ASIM" height="32"> RecordedFuture Threat Hunting Hash All Actors

Recorded Future Threat Hunting hash correlation for all actors.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Recorded Future](../solutions/recorded-future.md) |
| **ID** | `6db6a8e6-2959-440b-ba57-a505875fcb37` |
| **Severity** | Medium |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess, Execution, Persistence |
| **Techniques** | T1189, T1059, T1554 |
| **Required Connectors** | [ThreatIntelligenceUploadIndicatorsAPI](../connectors/threatintelligenceuploadindicatorsapi.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Recorded%20Future/Analytic%20Rules/ThreatHunting/RecordedFutureThreatHuntingHashAllActors.yaml) |

## <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> ASIM Parsers Used

This content item uses ASIM (Advanced Security Information Model) parsers for normalized data:

- [`_Im_FileEvent_AzureBlobStorage`](../asim/im-fileevent-azureblobstorage.md)
- [`_Im_FileEvent_AzureFileStorage`](../asim/im-fileevent-azurefilestorage.md)
- [`_Im_FileEvent_AzureQueueStorage`](../asim/im-fileevent-azurequeuestorage.md)
- [`_Im_FileEvent_AzureTableStorage`](../asim/im-fileevent-azuretablestorage.md)
- [`_Im_FileEvent_GoogleWorkspace`](../asim/im-fileevent-googleworkspace.md)
- [`_Im_FileEvent_LinuxSysmonFileCreated`](../asim/im-fileevent-linuxsysmonfilecreated.md)
- [`_Im_FileEvent_LinuxSysmonFileDeleted`](../asim/im-fileevent-linuxsysmonfiledeleted.md)
- [`_Im_FileEvent_Microsoft365D`](../asim/im-fileevent-microsoft365d.md)
- [`_Im_FileEvent_MicrosoftSecurityEvents`](../asim/im-fileevent-microsoftsecurityevents.md)
- [`_Im_FileEvent_MicrosoftSharePoint`](../asim/im-fileevent-microsoftsharepoint.md)
- [`_Im_FileEvent_MicrosoftSysmon`](../asim/im-fileevent-microsoftsysmon.md)
- [`_Im_FileEvent_MicrosoftSysmonWindowsEvent`](../asim/im-fileevent-microsoftsysmonwindowsevent.md)
- [`_Im_FileEvent_MicrosoftWindowsEvents`](../asim/im-fileevent-microsoftwindowsevents.md)
- [`_Im_FileEvent_Native`](../asim/im-fileevent-native.md)
- [`_Im_FileEvent_SentinelOne`](../asim/im-fileevent-sentinelone.md)
- [`_Im_FileEvent_VMwareCarbonBlackCloud`](../asim/im-fileevent-vmwarecarbonblackcloud.md)

## Tables Used

This content item queries data from the following tables:

- [`ThreatIntelIndicators`](../tables/threatintelindicators.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Recorded Future](../solutions/recorded-future.md)

