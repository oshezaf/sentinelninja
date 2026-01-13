# <img src="../images/asim-badge.png" alt="ASIM" height="32"> NetworkSummary_Source_Port

This summary rule aggregates network session data using the ASIM normalized _Im_NetworkSession function. It creates hourly summaries of traffic grouped by source port, network direction, and device action. The output helps identify traffic patterns by port usage and action types over time, enabling efficient detection of unusual behavior or port-based anomalies.

| Attribute | Value |
|:----------|:------|
| **Type** | Summary Rule |
| **Solution** | [Network Session Essentials](../solutions/network-session-essentials.md) |
| **ID** | `1347d3bc-080a-49bf-a1f0-b430a5fa6475` |
| **Required Connectors** | [AWSS3](../connectors/awss3.md), [MicrosoftThreatProtection](../connectors/microsoftthreatprotection.md), [SecurityEvents](../connectors/securityevents.md), [WindowsSecurityEvents](../connectors/windowssecurityevents.md), [WindowsForwardedEvents](../connectors/windowsforwardedevents.md), [Zscaler](../connectors/zscaler.md), [MicrosoftSysmonForLinux](../connectors/microsoftsysmonforlinux.md), [PaloAltoNetworks](../connectors/paloaltonetworks.md), [AzureMonitor(VMInsights)](../connectors/azuremonitor-vminsights.md), [AzureFirewall](../connectors/azurefirewall.md), [AzureNSG](../connectors/azurensg.md), [CiscoASA](../connectors/ciscoasa.md), [CiscoAsaAma](../connectors/ciscoasaama.md), [Corelight](../connectors/corelight.md), [AIVectraStream](../connectors/aivectrastream.md), [CheckPoint](../connectors/checkpoint.md), [Fortinet](../connectors/fortinet.md), [CiscoMeraki](../connectors/ciscomeraki.md) |

## <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> ASIM Parsers Used

This content item uses ASIM (Advanced Security Information Model) parsers for normalized data:

- [`_Im_NetworkSession_AWSVPCV03`](../asim/im-networksession-awsvpcv03.md)
- [`_Im_NetworkSession_AppGateSDPV02`](../asim/im-networksession-appgatesdpv02.md)
- [`_Im_NetworkSession_CheckPointFirewallV11`](../asim/im-networksession-checkpointfirewallv11.md)
- [`_Im_NetworkSession_CiscoASAV10`](../asim/im-networksession-ciscoasav10.md)
- [`_Im_NetworkSession_CiscoFirepowerV01`](../asim/im-networksession-ciscofirepowerv01.md)
- [`_Im_NetworkSession_CiscoISEV11`](../asim/im-networksession-ciscoisev11.md)
- [`_Im_NetworkSession_EmptyV03`](../asim/im-networksession-emptyv03.md)
- [`_Im_NetworkSession_ForcePointFirewallV01`](../asim/im-networksession-forcepointfirewallv01.md)
- [`_Im_NetworkSession_FortinetFortiGateV04`](../asim/im-networksession-fortinetfortigatev04.md)
- [`_Im_NetworkSession_LinuxSysmonV04`](../asim/im-networksession-linuxsysmonv04.md)
- [`_Im_NetworkSession_Microsoft365DefenderV04`](../asim/im-networksession-microsoft365defenderv04.md)
- [`_Im_NetworkSession_MicrosoftWindowsEventFirewallV04`](../asim/im-networksession-microsoftwindowseventfirewallv04.md)
- [`_Im_NetworkSession_NativeV03`](../asim/im-networksession-nativev03.md)
- [`_Im_NetworkSession_PaloAltoCEFV07`](../asim/im-networksession-paloaltocefv07.md)
- [`_Im_NetworkSession_SonicWallFirewallV01`](../asim/im-networksession-sonicwallfirewallv01.md)
- [`_Im_NetworkSession_VMConnectionV02`](../asim/im-networksession-vmconnectionv02.md)
- [`_Im_NetworkSession_WatchGuardFirewareOSV01`](../asim/im-networksession-watchguardfirewareosv01.md)
- [`_Im_NetworkSession_ZscalerZIAV04`](../asim/im-networksession-zscalerziav04.md)

---

**Browse:**

- [← Back to Summary Rules](summary-rules.md)
- [← Back to Network Session Essentials](../solutions/network-session-essentials.md)
- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

