# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Suspicious access of BEC related documents

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Content Index](../content/content-index.md)

---

'This query looks for users with suspicious spikes in the number of files accessed that relate to topics commonly accessed as part of Business Email Compromise (BEC) attacks. The query looks for access to files in storage that relate to topics such as invoices or payments, and then looks for users accessing these files in significantly higher numbers than in the previous 14 days. Incidents raised by this analytic should be investigated to see if the user accessing these files should be accessing

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Business Email Compromise - Financial Fraud](../solutions/business-email-compromise-financial-fraud.md) |
| **ID** | `cd8d946d-10a4-40a9-bac1-6d0a6c847d65` |
| **Severity** | Medium |
| **Kind** | Scheduled |
| **Tactics** | Collection |
| **Techniques** | T1530 |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Business%20Email%20Compromise%20-%20Financial%20Fraud/Analytic%20Rules/SuspiciousAccessOfBECRelatedDocuments.yaml) |

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

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Business Email Compromise - Financial Fraud](../solutions/business-email-compromise-financial-fraud.md)

