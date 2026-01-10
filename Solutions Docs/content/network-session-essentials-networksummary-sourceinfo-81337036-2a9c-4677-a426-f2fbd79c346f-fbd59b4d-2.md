# <img src="../images/asim-badge.png" alt="ASIM" height="32"> NetworkSummary_SourceInfo

This summary rule aggregates recent network session data using the ASIM normalized _Im_NetworkSession function. It creates 20-minute summaries grouped by product name (vendor-product combination) and device hostname. This helps identify which products and hosts are actively generating network session events in near real time.

| Attribute | Value |
|:----------|:------|
| **Type** | Summary Rule |
| **Solution** | [Network Session Essentials](../solutions/network-session-essentials.md) |
| **ID** | `81337036-2a9c-4677-a426-f2fbd79c346f` |
| **Required Connectors** | [AWSS3](../connectors/awss3.md), [MicrosoftThreatProtection](../connectors/microsoftthreatprotection.md), [SecurityEvents](../connectors/securityevents.md), [WindowsSecurityEvents](../connectors/windowssecurityevents.md), [WindowsForwardedEvents](../connectors/windowsforwardedevents.md), [Zscaler](../connectors/zscaler.md), [MicrosoftSysmonForLinux](../connectors/microsoftsysmonforlinux.md), [PaloAltoNetworks](../connectors/paloaltonetworks.md), [AzureMonitor(VMInsights)](../connectors/azuremonitor-vminsights.md), [AzureFirewall](../connectors/azurefirewall.md), [AzureNSG](../connectors/azurensg.md), [CiscoASA](../connectors/ciscoasa.md), [CiscoAsaAma](../connectors/ciscoasaama.md), [Corelight](../connectors/corelight.md), [AIVectraStream](../connectors/aivectrastream.md), [CheckPoint](../connectors/checkpoint.md), [Fortinet](../connectors/fortinet.md), [CiscoMeraki](../connectors/ciscomeraki.md) |

## <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> ASIM Parsers Used

This content item uses ASIM (Advanced Security Information Model) parsers for normalized data:

- [`_Im_NetworkSession_AWSVPCV03`](../asim/vimnetworksessionawsvpc.md)
- [`_Im_NetworkSession_AppGateSDPV02`](../asim/vimnetworksessionappgatesdp.md)
- [`_Im_NetworkSession_CheckPointFirewallV11`](../asim/vimnetworksessioncheckpointfirewall.md)
- [`_Im_NetworkSession_CiscoASAV10`](../asim/vimnetworksessionciscoasa.md)
- [`_Im_NetworkSession_CiscoFirepowerV01`](../asim/vimnetworksessionciscofirepower.md)
- [`_Im_NetworkSession_CiscoISEV11`](../asim/vimnetworksessionciscoise.md)
- [`_Im_NetworkSession_EmptyV03`](../asim/vimnetworksessionempty.md)
- [`_Im_NetworkSession_ForcePointFirewallV01`](../asim/vimnetworksessionforcepointfirewall.md)
- [`_Im_NetworkSession_FortinetFortiGateV04`](../asim/vimnetworksessionfortinetfortigate.md)
- [`_Im_NetworkSession_LinuxSysmonV04`](../asim/vimnetworksessionlinuxsysmon.md)
- [`_Im_NetworkSession_Microsoft365DefenderV04`](../asim/vimnetworksessionmicrosoft365defender.md)
- [`_Im_NetworkSession_MicrosoftWindowsEventFirewallV04`](../asim/vimnetworksessionmicrosoftwindowseventfirewall.md)
- [`_Im_NetworkSession_NativeV03`](../asim/vimnetworksessionnative.md)
- [`_Im_NetworkSession_PaloAltoCEFV07`](../asim/vimnetworksessionpaloaltocef.md)
- [`_Im_NetworkSession_SonicWallFirewallV01`](../asim/vimnetworksessionsonicwallfirewall.md)
- [`_Im_NetworkSession_VMConnectionV02`](../asim/vimnetworksessionvmconnection.md)
- [`_Im_NetworkSession_WatchGuardFirewareOSV01`](../asim/vimnetworksessionwatchguardfirewareos.md)
- [`_Im_NetworkSession_ZscalerZIAV04`](../asim/vimnetworksessionzscalerzia.md)

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

