# TI map IP entity to Network Session Events (ASIM Network Session schema)

This rule identifies a match Network Sessions for which the source or destination IP address is a known IoC. This analytic rule uses [ASIM](https://aka.ms/AboutASIM) and supports any built-in or custom source that supports the ASIM NetworkSession schema

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Threat Intelligence](../solutions/threat-intelligence.md) |
| **ID** | `e2399891-383c-4caf-ae67-68a008b9f89e` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | CommandAndControl |
| **Techniques** | T1071 |
| **Required Connectors** | [AWSS3](../connectors/awss3.md), [MicrosoftThreatProtection](../connectors/microsoftthreatprotection.md), [SecurityEvents](../connectors/securityevents.md), [WindowsForwardedEvents](../connectors/windowsforwardedevents.md), [Zscaler](../connectors/zscaler.md), [MicrosoftSysmonForLinux](../connectors/microsoftsysmonforlinux.md), [PaloAltoNetworks](../connectors/paloaltonetworks.md), [AzureMonitor(VMInsights)](../connectors/azuremonitor-vminsights.md), [AzureFirewall](../connectors/azurefirewall.md), [AzureNSG](../connectors/azurensg.md), [CiscoASA](../connectors/ciscoasa.md), [Corelight](../connectors/corelight.md), [AIVectraStream](../connectors/aivectrastream.md), [CheckPoint](../connectors/checkpoint.md), [Fortinet](../connectors/fortinet.md), [MicrosoftDefenderThreatIntelligence](../connectors/microsoftdefenderthreatintelligence.md), [CiscoMeraki](../connectors/ciscomeraki.md), [ThreatIntelligenceTaxii](../connectors/threatintelligencetaxii.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Threat%20Intelligence/Analytic%20Rules/IPEntity_imNetworkSession.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`ASimNetworkSessionLogs`](../tables/asimnetworksessionlogs.md)
- [`AWSVPCFlow`](../tables/awsvpcflow.md)
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
- [`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md)
- [`VMConnection`](../tables/vmconnection.md)
- [`VectraStream_CL`](../tables/vectrastream-cl.md)
- [`WindowsEvent`](../tables/windowsevent.md)
- [`barracuda_CL`](../tables/barracuda-cl.md)
- [`meraki_CL`](../tables/meraki-cl.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to Threat Intelligence](../solutions/threat-intelligence.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
