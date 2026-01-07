# Detect Malicious Usage of Recovery Tools to Delete Backup Files

This analytic rule detects usage of recovery tools vssadmin, wbadmin, wmic and bcedit to delete backup files or change recovery configuration. Adversaries may use these tools to delete shadow copies and backup files to prevent recovery of files. https://attack.mitre.org/techniques/T1490/

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Malware Protection Essentials](../solutions/malware-protection-essentials.md) |
| **ID** | `259de2c1-c546-4c6d-a17c-df639722f4d7` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Impact |
| **Techniques** | T1490 |
| **Required Connectors** | [CrowdStrikeFalconEndpointProtection](../connectors/crowdstrikefalconendpointprotection.md), [MicrosoftThreatProtection](../connectors/microsoftthreatprotection.md), [SentinelOne](../connectors/sentinelone.md), [VMwareCarbonBlack](../connectors/vmwarecarbonblack.md), [CiscoSecureEndpoint](../connectors/ciscosecureendpoint.md), [TrendMicroApexOne](../connectors/trendmicroapexone.md), [TrendMicroApexOneAma](../connectors/trendmicroapexoneama.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Malware%20Protection%20Essentials/Analytic%20Rules/BackupDeletionDetected.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`ASimProcessEventLogs`](../tables/asimprocesseventlogs.md)
- [`CarbonBlackEvents_CL`](../tables/carbonblackevents-cl.md)
- [`CarbonBlackNotifications_CL`](../tables/carbonblacknotifications-cl.md)
- [`DeviceProcessEvents`](../tables/deviceprocessevents.md)
- [`Event`](../tables/event.md)
- [`SecurityEvent`](../tables/securityevent.md)
- [`SecurityIoTRawEvent`](../tables/securityiotrawevent.md)
- [`SentinelOne_CL`](../tables/sentinelone-cl.md)
- [`Syslog`](../tables/syslog.md)
- [`TrendMicro_XDR_OAT_CL`](../tables/trendmicro-xdr-oat-cl.md)
- [`WindowsEvent`](../tables/windowsevent.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to Malware Protection Essentials](../solutions/malware-protection-essentials.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
