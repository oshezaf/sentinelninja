# Remote Desktop Network Traffic(ASIM Network Session schema)

This hunting query looks for unusual remote desktop activity by monitoring TCP/3389 traffic. While RDP is common, focus on atypical connections to identify potential threats.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Network Session Essentials](../solutions/network-session-essentials.md) |
| **ID** | `6fd69768-fdf1-4cfd-805f-b243be3f0c6d` |
| **Tactics** | LateralMovement |
| **Techniques** | T1021, T1021.001 |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Network%20Session%20Essentials/Hunting%20Queries/Remote%20Desktop%20Network%20Traffic%28ASIM%20Network%20Session%20schema%29.yaml) |

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
- [`Update`](../tables/update.md)
- [`VMConnection`](../tables/vmconnection.md)
- [`VectraStream_CL`](../tables/vectrastream-cl.md)
- [`WindowsEvent`](../tables/windowsevent.md)
- [`barracuda_CL`](../tables/barracuda-cl.md)
- [`meraki_CL`](../tables/meraki-cl.md)

---

**Browse:**

- [← Back to Hunting Queries](hunting-queries.md)
- [← Back to Network Session Essentials](../solutions/network-session-essentials.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
