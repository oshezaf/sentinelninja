# Summarize Data for Network Session Essentials

This playbook summarizes data for Network Session Essentials and lands it into custom tables.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [Network Session Essentials](../solutions/network-session-essentials.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Network%20Session%20Essentials/Playbooks/SummarizeData_NSE/azuredeploy.json) |

## Tables Used

| Table | Usage |
|:------|:------|
| [`ASimNetworkSessionLogs`](../tables/asimnetworksessionlogs.md) | read |
| [`AWSVPCFlow`](../tables/awsvpcflow.md) | read |
| [`AzureDiagnostics`](../tables/azurediagnostics.md) | read |
| [`AzureNetworkAnalytics_CL`](../tables/azurenetworkanalytics-cl.md) | read |
| [`CarbonBlackEvents_CL`](../tables/carbonblackevents-cl.md) | read |
| [`CarbonBlackNotifications_CL`](../tables/carbonblacknotifications-cl.md) | read |
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | read |
| [`Corelight_CL`](../tables/corelight-cl.md) | read |
| [`DefenderIoTRawEvent`](../tables/defenderiotrawevent.md) | read |
| [`DeviceNetworkEvents`](../tables/devicenetworkevents.md) | read |
| [`Event`](../tables/event.md) | read |
| [`EventsData`](../tables/eventsdata.md) | read |
| [`Illumio_Flow_Events_CL`](../tables/illumio-flow-events-cl.md) | read |
| [`NTANetAnalytics`](../tables/ntanetanalytics.md) | read |
| [`NetworkCustomAnalytics_CL`](../tables/networkcustomanalytics-cl.md) | write |
| [`NetworkCustomAnalytics_country_CL`](../tables/networkcustomanalytics-country-cl.md) | write |
| [`NetworkCustomAnalytics_ip_CL`](../tables/networkcustomanalytics-ip-cl.md) | read/write |
| [`NetworkCustomAnalytics_protocol_CL`](../tables/networkcustomanalytics-protocol-cl.md) | read/write |
| [`NetworkCustomAnalytics_rule_CL`](../tables/networkcustomanalytics-rule-cl.md) | write |
| [`NetworkCustomAnalytics_sourceInfo_CL`](../tables/networkcustomanalytics-sourceinfo-cl.md) | write |
| [`NetworkCustomAnalytics_source_port_CL`](../tables/networkcustomanalytics-source-port-cl.md) | write |
| [`NetworkCustomAnalytics_threat_CL`](../tables/networkcustomanalytics-threat-cl.md) | write |
| [`NetworkCustomAnalytics_threat_ioc_CL`](../tables/networkcustomanalytics-threat-ioc-cl.md) | write |
| [`RawNetworkEvents`](../tables/rawnetworkevents.md) | read |
| [`SecurityEvent`](../tables/securityevent.md) | read |
| [`SecurityIoTRawEvent`](../tables/securityiotrawevent.md) | read |
| [`SentinelOne_CL`](../tables/sentinelone-cl.md) | read |
| [`Syslog`](../tables/syslog.md) | read |
| [`VMConnection`](../tables/vmconnection.md) | read |
| [`VectraStream_CL`](../tables/vectrastream-cl.md) | read |
| [`WindowsEvent`](../tables/windowsevent.md) | read |
| [`barracuda_CL`](../tables/barracuda-cl.md) | read |
| [`meraki_CL`](../tables/meraki-cl.md) | read |
| [`parsedData`](../tables/parseddata.md) | read |

---

**Browse:**

- [← Back to Playbooks](playbooks.md)
- [← Back to Network Session Essentials](../solutions/network-session-essentials.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
