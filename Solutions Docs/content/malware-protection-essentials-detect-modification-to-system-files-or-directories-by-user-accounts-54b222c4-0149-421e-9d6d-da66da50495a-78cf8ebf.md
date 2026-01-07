# Detect Modification to System Files or Directories by User Accounts

This hunting query searches for modifications to system files or directories by a non system account (User Account).

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Malware Protection Essentials](../solutions/malware-protection-essentials.md) |
| **ID** | `54b222c4-0149-421e-9d6d-da66da50495a` |
| **Tactics** | DefenseEvasion, Persistence, PrivilegeEscalation |
| **Techniques** | T1036, T1543 |
| **Required Connectors** | [CrowdStrikeFalconEndpointProtection](../connectors/crowdstrikefalconendpointprotection.md), [MicrosoftThreatProtection](../connectors/microsoftthreatprotection.md), [SentinelOne](../connectors/sentinelone.md), [VMwareCarbonBlack](../connectors/vmwarecarbonblack.md), [CiscoSecureEndpoint](../connectors/ciscosecureendpoint.md), [TrendMicroApexOne](../connectors/trendmicroapexone.md), [TrendMicroApexOneAma](../connectors/trendmicroapexoneama.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Malware%20Protection%20Essentials/Hunting%20Queries/SystemFilesModifiedByUser.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`ASimFileEventLogs`](../tables/asimfileeventlogs.md)
- [`CarbonBlackEvents_CL`](../tables/carbonblackevents-cl.md)
- [`DeviceFileEvents`](../tables/devicefileevents.md)
- [`Event`](../tables/event.md)
- [`OfficeActivity`](../tables/officeactivity.md)
- [`SecurityEvent`](../tables/securityevent.md)
- [`SentinelOne_CL`](../tables/sentinelone-cl.md)
- [`StorageBlobLogs`](../tables/storagebloblogs.md)
- [`StorageFileLogs`](../tables/storagefilelogs.md)
- [`StorageQueueLogs`](../tables/storagequeuelogs.md)
- [`StorageTableLogs`](../tables/storagetablelogs.md)
- [`Syslog`](../tables/syslog.md)
- [`WindowsEvent`](../tables/windowsevent.md)

---

**Browse:**

- [← Back to Hunting Queries](hunting-queries.md)
- [← Back to Malware Protection Essentials](../solutions/malware-protection-essentials.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
