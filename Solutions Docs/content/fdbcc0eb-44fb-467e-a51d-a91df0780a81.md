# Process Creation with Suspicious CommandLine Arguments

This analytic rule detects process creation events with base64 encoded command line arguments. This could be an indication of a malicious process being executed.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Malware Protection Essentials](../solutions/malware-protection-essentials.md) |
| **ID** | `fdbcc0eb-44fb-467e-a51d-a91df0780a81` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Execution, DefenseEvasion |
| **Techniques** | T1059, T1027 |
| **Required Connectors** | [CrowdStrikeFalconEndpointProtection](../connectors/crowdstrikefalconendpointprotection.md), [MicrosoftThreatProtection](../connectors/microsoftthreatprotection.md), [SentinelOne](../connectors/sentinelone.md), [VMwareCarbonBlack](../connectors/vmwarecarbonblack.md), [CiscoSecureEndpoint](../connectors/ciscosecureendpoint.md), [TrendMicroApexOne](../connectors/trendmicroapexone.md), [TrendMicroApexOneAma](../connectors/trendmicroapexoneama.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Malware%20Protection%20Essentials/Analytic%20Rules/SuspiciousProcessCreation.yaml) |

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
