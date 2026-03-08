# <img src="../images/asim-badge.png" alt="ASIM" height="32"> NetworkSummary_Threat

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Content Index](../content/content-index.md)

---

This summary rule aggregates recent network session data using the ASIM normalized _Im_NetworkSession function. It creates 20-minute summaries grouped by threat identifier or name, threat category, event severity, and device action. This enables efficient monitoring of threat-related network activity and supports detection of patterns across severity levels and response actions.

| Attribute | Value |
|:----------|:------|
| **Type** | Summary Rule |
| **Solution** | [Network Session Essentials](../solutions/network-session-essentials.md) |
| **ID** | `cc8aeea6-07a2-430a-808e-41ad5b91f08d` |
| **Required Connectors** | [AWSS3](../connectors/awss3.md), [MicrosoftThreatProtection](../connectors/microsoftthreatprotection.md), [SecurityEvents](../connectors/securityevents.md), [WindowsSecurityEvents](../connectors/windowssecurityevents.md), [WindowsForwardedEvents](../connectors/windowsforwardedevents.md), [Zscaler](../connectors/zscaler.md), [MicrosoftSysmonForLinux](../connectors/microsoftsysmonforlinux.md), [PaloAltoNetworks](../connectors/paloaltonetworks.md), [AzureMonitor(VMInsights)](../connectors/azuremonitor-vminsights.md), [AzureFirewall](../connectors/azurefirewall.md), [AzureNSG](../connectors/azurensg.md), [CiscoASA](../connectors/ciscoasa.md), [CiscoAsaAma](../connectors/ciscoasaama.md), [Corelight](../connectors/corelight.md), [AIVectraStream](../connectors/aivectrastream.md), [CheckPoint](../connectors/checkpoint.md), [Fortinet](../connectors/fortinet.md), [CiscoMeraki](../connectors/ciscomeraki.md) |

## <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> ASIM Parsers Used

This content item uses ASIM (Advanced Security Information Model) parsers for normalized data:

- [`_Im_NetworkSession_AWSVPCV03`](../asim/asimnetworksessionawsvpc.md)
- [`_Im_NetworkSession_AppGateSDPV02`](../asim/asimnetworksessionappgatesdp.md)
- [`_Im_NetworkSession_CheckPointFirewallV11`](../asim/asimnetworksessioncheckpointfirewall.md)
- [`_Im_NetworkSession_CiscoASAV10`](../asim/asimnetworksessionciscoasa.md)
- [`_Im_NetworkSession_CiscoFirepowerV01`](../asim/asimnetworksessionciscofirepower.md)
- [`_Im_NetworkSession_CiscoISEV11`](../asim/asimnetworksessionciscoise.md)
- [`_Im_NetworkSession_EmptyV03`](../asim/im-networksession-emptyv03.md)
- [`_Im_NetworkSession_ForcePointFirewallV01`](../asim/asimnetworksessionforcepointfirewall.md)
- [`_Im_NetworkSession_FortinetFortiGateV04`](../asim/asimnetworksessionfortinetfortigate.md)
- [`_Im_NetworkSession_LinuxSysmonV04`](../asim/asimnetworksessionlinuxsysmon.md)
- [`_Im_NetworkSession_Microsoft365DefenderV04`](../asim/asimnetworksessionmicrosoft365defender.md)
- [`_Im_NetworkSession_MicrosoftWindowsEventFirewallV04`](../asim/asimnetworksessionmicrosoftwindowseventfirewall.md)
- [`_Im_NetworkSession_NativeV03`](../asim/asimnetworksessionnative.md)
- [`_Im_NetworkSession_PaloAltoCEFV07`](../asim/asimnetworksessionpaloaltocef.md)
- [`_Im_NetworkSession_SonicWallFirewallV01`](../asim/asimnetworksessionsonicwallfirewall.md)
- [`_Im_NetworkSession_VMConnectionV02`](../asim/asimnetworksessionvmconnection.md)
- [`_Im_NetworkSession_WatchGuardFirewareOSV01`](../asim/asimnetworksessionwatchguardfirewareos.md)
- [`_Im_NetworkSession_ZscalerZIAV04`](../asim/asimnetworksessionzscalerzia.md)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Summary Rules](summary-rules.md) · [Back to Network Session Essentials](../solutions/network-session-essentials.md)

