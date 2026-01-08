# NetworkSummary_Result

This summary rule aggregates recent network session data using the ASIM normalized _Im_NetworkSession function. It creates 20-minute summaries grouped by event result, network direction, device action, and event severity. This supports real-time monitoring of network outcomes and helps detect patterns in blocked, failed, or high-severity traffic.

| Attribute | Value |
|:----------|:------|
| **Type** | Summary Rule |
| **Solution** | [Network Session Essentials](../solutions/network-session-essentials.md) |
| **ID** | `c5a4f3e9-e577-4db0-94f2-87d497b40bcd` |
| **Required Connectors** | [AWSS3](../connectors/awss3.md), [MicrosoftThreatProtection](../connectors/microsoftthreatprotection.md), [SecurityEvents](../connectors/securityevents.md), [WindowsSecurityEvents](../connectors/windowssecurityevents.md), [WindowsForwardedEvents](../connectors/windowsforwardedevents.md), [Zscaler](../connectors/zscaler.md), [MicrosoftSysmonForLinux](../connectors/microsoftsysmonforlinux.md), [PaloAltoNetworks](../connectors/paloaltonetworks.md), [AzureMonitor(VMInsights)](../connectors/azuremonitor-vminsights.md), [AzureFirewall](../connectors/azurefirewall.md), [AzureNSG](../connectors/azurensg.md), [CiscoASA](../connectors/ciscoasa.md), [CiscoAsaAma](../connectors/ciscoasaama.md), [Corelight](../connectors/corelight.md), [AIVectraStream](../connectors/aivectrastream.md), [CheckPoint](../connectors/checkpoint.md), [Fortinet](../connectors/fortinet.md), [CiscoMeraki](../connectors/ciscomeraki.md) |

## Tables Used

This content item queries data from the following tables:

- [`_Im_NetworkSession_AWSVPCV03`](../tables/im-networksession-awsvpcv03.md)
- [`_Im_NetworkSession_AppGateSDPV02`](../tables/im-networksession-appgatesdpv02.md)
- [`_Im_NetworkSession_CheckPointFirewallV11`](../tables/im-networksession-checkpointfirewallv11.md)
- [`_Im_NetworkSession_CiscoASAV10`](../tables/im-networksession-ciscoasav10.md)
- [`_Im_NetworkSession_CiscoFirepowerV01`](../tables/im-networksession-ciscofirepowerv01.md)
- [`_Im_NetworkSession_CiscoISEV11`](../tables/im-networksession-ciscoisev11.md)
- [`_Im_NetworkSession_ForcePointFirewallV01`](../tables/im-networksession-forcepointfirewallv01.md)
- [`_Im_NetworkSession_FortinetFortiGateV04`](../tables/im-networksession-fortinetfortigatev04.md)
- [`_Im_NetworkSession_LinuxSysmonV04`](../tables/im-networksession-linuxsysmonv04.md)
- [`_Im_NetworkSession_Microsoft365DefenderV04`](../tables/im-networksession-microsoft365defenderv04.md)
- [`_Im_NetworkSession_MicrosoftWindowsEventFirewallV04`](../tables/im-networksession-microsoftwindowseventfirewallv04.md)
- [`_Im_NetworkSession_NativeV03`](../tables/im-networksession-nativev03.md)
- [`_Im_NetworkSession_PaloAltoCEFV07`](../tables/im-networksession-paloaltocefv07.md)
- [`_Im_NetworkSession_SonicWallFirewallV01`](../tables/im-networksession-sonicwallfirewallv01.md)
- [`_Im_NetworkSession_VMConnectionV02`](../tables/im-networksession-vmconnectionv02.md)
- [`_Im_NetworkSession_WatchGuardFirewareOSV01`](../tables/im-networksession-watchguardfirewareosv01.md)
- [`_Im_NetworkSession_ZscalerZIAV04`](../tables/im-networksession-zscalerziav04.md)

---

**Browse:**

- [← Back to Summary Rules](summary-rules.md)
- [← Back to Network Session Essentials](../solutions/network-session-essentials.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
