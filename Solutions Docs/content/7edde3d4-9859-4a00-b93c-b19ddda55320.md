# Detect Print Processors Registry Driver Key Creation/Modification

This analytic rule detects any registry value creation or modification of print processor registry Driver key. This will load the executable at startup with print spooler service. This could be an indication of a persistence attempt by an adversary.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Malware Protection Essentials](../solutions/malware-protection-essentials.md) |
| **ID** | `7edde3d4-9859-4a00-b93c-b19ddda55320` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Persistence, PrivilegeEscalation |
| **Techniques** | T1547 |
| **Required Connectors** | [CrowdStrikeFalconEndpointProtection](../connectors/crowdstrikefalconendpointprotection.md), [MicrosoftThreatProtection](../connectors/microsoftthreatprotection.md), [SentinelOne](../connectors/sentinelone.md), [VMwareCarbonBlack](../connectors/vmwarecarbonblack.md), [CiscoSecureEndpoint](../connectors/ciscosecureendpoint.md), [TrendMicroApexOne](../connectors/trendmicroapexone.md), [TrendMicroApexOneAma](../connectors/trendmicroapexoneama.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Malware%20Protection%20Essentials/Analytic%20Rules/PrintProcessersModified.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`ASimRegistryEventLogs`](../tables/asimregistryeventlogs.md)
- [`CarbonBlackEvents_CL`](../tables/carbonblackevents-cl.md)
- [`DeviceRegistryEvents`](../tables/deviceregistryevents.md)
- [`Event`](../tables/event.md)
- [`SecurityEvent`](../tables/securityevent.md)
- [`SentinelOne_CL`](../tables/sentinelone-cl.md)
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
