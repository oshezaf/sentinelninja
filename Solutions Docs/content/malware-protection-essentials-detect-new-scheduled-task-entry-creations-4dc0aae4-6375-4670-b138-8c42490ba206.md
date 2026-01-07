# Detect New Scheduled Task Entry Creations

This hunting query identifies new scheduled task entry creations. Malware often creates scheduled tasks to execute malicious code and maintain persistence on a system.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Malware Protection Essentials](../solutions/malware-protection-essentials.md) |
| **ID** | `4dc0aae4-6375-4670-b138-8c42490ba206` |
| **Tactics** | Execution, PrivilegeEscalation, Persistence |
| **Techniques** | T1053 |
| **Required Connectors** | [CrowdStrikeFalconEndpointProtection](../connectors/crowdstrikefalconendpointprotection.md), [MicrosoftThreatProtection](../connectors/microsoftthreatprotection.md), [SentinelOne](../connectors/sentinelone.md), [VMwareCarbonBlack](../connectors/vmwarecarbonblack.md), [CiscoSecureEndpoint](../connectors/ciscosecureendpoint.md), [TrendMicroApexOne](../connectors/trendmicroapexone.md), [TrendMicroApexOneAma](../connectors/trendmicroapexoneama.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Malware%20Protection%20Essentials/Hunting%20Queries/NewScheduledTaskCreation.yaml) |

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
