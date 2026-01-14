# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Dev-0322 File Drop Activity November 2021 (ASIM Version)

This query hunts for file creation events linked to Dev-0322's compromise of ZOHO ManageEngine ADSelfService Plus software. It focuses on files dropped during post-exploitation activity. Hosts with higher risk scores should be prioritized.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Legacy IOC based Threat Protection](../solutions/legacy-ioc-based-threat-protection.md) |
| **ID** | `9b72769e-6ab1-4736-988b-018d92dc5e62` |
| **Tactics** | Persistence, CommandAndControl |
| **Techniques** | T1078, T1219 |
| **Required Connectors** | [MicrosoftDefenderAdvancedThreatProtection](../connectors/microsoftdefenderadvancedthreatprotection.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Legacy%20IOC%20based%20Threat%20Protection/Hunting%20Queries/Dev-0322FileDropActivityNovember2021%28ASIMVersion%29.yaml) |

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

- [`SecurityAlert`](../tables/securityalert.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to Legacy IOC based Threat Protection](../solutions/legacy-ioc-based-threat-protection.md)

