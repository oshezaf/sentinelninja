# Executable Files Created in Uncommon Locations

This analytic rule detects any executable file creation in uncommon locations like temproray folders. This could be an indication of a persistence or defese evasion attempt by an adversary.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Malware Protection Essentials](../solutions/malware-protection-essentials.md) |
| **ID** | `ab8ddb26-050c-40aa-aaf0-bfb7e3eeb05f` |
| **Tactics** | Persistence, PrivilegeEscalation, DefenseEvasion |
| **Techniques** | T1037, T1547, T1564 |
| **Required Connectors** | [CrowdStrikeFalconEndpointProtection](../connectors/crowdstrikefalconendpointprotection.md), [MicrosoftThreatProtection](../connectors/microsoftthreatprotection.md), [SentinelOne](../connectors/sentinelone.md), [VMwareCarbonBlack](../connectors/vmwarecarbonblack.md), [CiscoSecureEndpoint](../connectors/ciscosecureendpoint.md), [TrendMicroApexOne](../connectors/trendmicroapexone.md), [TrendMicroApexOneAma](../connectors/trendmicroapexoneama.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Malware%20Protection%20Essentials/Hunting%20Queries/ExecutableInUncommonLocation.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`CarbonBlackEvents_CL`](../tables/carbonblackevents-cl.md)
- [`Event`](../tables/event.md)
- [`EventParser`](../tables/eventparser.md)
- [`OfficeActivity`](../tables/officeactivity.md)
- [`SecurityEvent`](../tables/securityevent.md)
- [`SentinelOne_CL`](../tables/sentinelone-cl.md)
- [`Syslog`](../tables/syslog.md)
- [`WindowsEvent`](../tables/windowsevent.md)
- [`WindowsEventParser`](../tables/windowseventparser.md)
- [`parseddata`](../tables/parseddata.md)

---

**Browse:**

- [← Back to Hunting Queries](hunting-queries.md)
- [← Back to Malware Protection Essentials](../solutions/malware-protection-essentials.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
