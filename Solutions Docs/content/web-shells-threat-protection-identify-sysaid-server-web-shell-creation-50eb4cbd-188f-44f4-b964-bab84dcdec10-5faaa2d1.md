# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Identify SysAid Server web shell creation

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Content Index](../content/content-index.md)

---

This query looks for potential webshell creation by the threat actor Mercury after the sucessful exploitation of SysAid server.  Reference:  https://www.microsoft.com/security/blog/2022/08/25/mercury-leveraging-log4j-2-vulnerabilities-in-unpatched-systems-to-target-israeli-organizations/

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Web Shells Threat Protection](../solutions/web-shells-threat-protection.md) |
| **ID** | `50eb4cbd-188f-44f4-b964-bab84dcdec10` |
| **Severity** | High |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess |
| **Techniques** | T1190 |
| **Required Connectors** | [SecurityEvents](../connectors/securityevents.md), [WindowsSecurityEvents](../connectors/windowssecurityevents.md), [MicrosoftThreatProtection](../connectors/microsoftthreatprotection.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Web%20Shells%20Threat%20Protection/Analytic%20Rules/PotentialMercury_Webshell.yaml) |

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

- [`DeviceFileEvents`](../tables/devicefileevents.md)
- [`SecurityEvent`](../tables/securityevent.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Web Shells Threat Protection](../solutions/web-shells-threat-protection.md)

