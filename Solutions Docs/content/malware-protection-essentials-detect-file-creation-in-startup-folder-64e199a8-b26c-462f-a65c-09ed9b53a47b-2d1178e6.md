# Detect File Creation in Startup Folder

This hunting query detects when a file is created in the Startup folder. This is a common technique used by adversaries to maintain persistence on a system.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Malware Protection Essentials](../solutions/malware-protection-essentials.md) |
| **ID** | `64e199a8-b26c-462f-a65c-09ed9b53a47b` |
| **Tactics** | Persistence, PrivilegeEscalation, DefenseEvasion |
| **Techniques** | T1547, T1112 |
| **Required Connectors** | [CrowdStrikeFalconEndpointProtection](../connectors/crowdstrikefalconendpointprotection.md), [MicrosoftThreatProtection](../connectors/microsoftthreatprotection.md), [SentinelOne](../connectors/sentinelone.md), [VMwareCarbonBlack](../connectors/vmwarecarbonblack.md), [CiscoSecureEndpoint](../connectors/ciscosecureendpoint.md), [TrendMicroApexOne](../connectors/trendmicroapexone.md), [TrendMicroApexOneAma](../connectors/trendmicroapexoneama.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Malware%20Protection%20Essentials/Hunting%20Queries/FileCretaedInStartupFolder.yaml) |

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
