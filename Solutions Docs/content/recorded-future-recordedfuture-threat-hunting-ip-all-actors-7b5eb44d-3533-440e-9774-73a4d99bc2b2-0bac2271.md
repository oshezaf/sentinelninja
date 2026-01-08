# RecordedFuture Threat Hunting IP All Actors

Recorded Future Threat Hunting IP correlation for all actors.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Recorded Future](../solutions/recorded-future.md) |
| **ID** | `7b5eb44d-3533-440e-9774-73a4d99bc2b2` |
| **Severity** | Medium |
| **Required Connectors** | [ThreatIntelligence](../connectors/threatintelligence.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Recorded%20Future/Hunting%20Queries/RecordedFutureIPThreatActorHunt.yaml) |

> ⚠️ **Not listed in Solution JSON:** This content item was discovered by scanning the solution folder but is not included in the official Solution JSON file. It may be a legacy item, under development, or excluded from the official solution package.

## Tables Used

This content item queries data from the following tables:

- [`ALERT`](../tables/alert.md)
- [`ASimNetworkSessionLogs`](../tables/asimnetworksessionlogs.md)
- [`AWSVPCFlow`](../tables/awsvpcflow.md)
- [`AZFWIdpsSignature`](../tables/azfwidpssignature.md)
- [`AZFWNatRule`](../tables/azfwnatrule.md)
- [`AZFWNetworkRule`](../tables/azfwnetworkrule.md)
- [`AZFWThreatIntel`](../tables/azfwthreatintel.md)
- [`AzureDiagnostics`](../tables/azurediagnostics.md)
- [`AzureNetworkAnalytics_CL`](../tables/azurenetworkanalytics-cl.md)
- [`CarbonBlackEvents_CL`](../tables/carbonblackevents-cl.md)
- [`CarbonBlackNotifications_CL`](../tables/carbonblacknotifications-cl.md)
- [`CommonSecurityLog`](../tables/commonsecuritylog.md)
- [`Corelight_CL`](../tables/corelight-cl.md)
- [`DeviceNetworkEvents`](../tables/devicenetworkevents.md)
- [`Event`](../tables/event.md)
- [`Illumio_Flow_Events_CL`](../tables/illumio-flow-events-cl.md)
- [`NTANetAnalytics`](../tables/ntanetanalytics.md)
- [`SecurityEvent`](../tables/securityevent.md)
- [`SecurityIoTRawEvent`](../tables/securityiotrawevent.md)
- [`SentinelOne_CL`](../tables/sentinelone-cl.md)
- [`Syslog`](../tables/syslog.md)
- [`ThreatIntelIndicators`](../tables/threatintelindicators.md)
- [`Update`](../tables/update.md)
- [`VMConnection`](../tables/vmconnection.md)
- [`VectraStream_CL`](../tables/vectrastream-cl.md)
- [`WindowsEvent`](../tables/windowsevent.md)
- [`barracuda_CL`](../tables/barracuda-cl.md)
- [`meraki_CL`](../tables/meraki-cl.md)

---

**Browse:**

- [← Back to Hunting Queries](hunting-queries.md)
- [← Back to Recorded Future](../solutions/recorded-future.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
