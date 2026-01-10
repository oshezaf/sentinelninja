# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Network Session ASIM filtering parser

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `imNetworkSession` |
| **Built-in Parser** | `_Im_NetworkSession` |
| **Schema** | NetworkSession |
| **Schema Version** | 0.2.0 |
| **Parser Type** | 📦 Union (schema-level) |
| **Parser Version** | 0.6.2 |
| **Last Updated** | Jun 20, 2024 |
| **Source File** | [Parsers\ASimNetworkSession\Parsers\imNetworkSession.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimNetworkSession/Parsers/imNetworkSession.yaml) |

## Description

This ASIM parser supports filtering and normalizing Network Session logs from all supported sources to the ASIM Network Session normalized schema.

## Products

This union parser includes parsers for the following products:

| Product | Source Parser |
|:--------|:--------------|
| AWS VPC | [_Im_NetworkSession_AWSVPC](vimnetworksessionawsvpc.md) |
| AppGate SDP | [_Im_NetworkSession_AppGateSDP](vimnetworksessionappgatesdp.md) |
| Azure Firewall | [_Im_NetworkSession_AzureFirewall](vimnetworksessionazurefirewall.md) |
| Azure NSG flows | [_Im_NetworkSession_AzureNSG](vimnetworksessionazurensg.md) |
| Barracuda WAF | [_Im_NetworkSession_BarracudaCEF](vimnetworksessionbarracudacef.md) |
| Barracuda WAF | [_Im_NetworkSession_BarracudaWAF](vimnetworksessionbarracudawaf.md) |
| CheckPointFirewall | [_Im_NetworkSession_CheckPointFirewall](vimnetworksessioncheckpointfirewall.md) |
| CiscoASA | [_Im_NetworkSession_CiscoASA](vimnetworksessionciscoasa.md) |
| Cisco Firepower | [_Im_NetworkSession_CiscoFirepower](vimnetworksessionciscofirepower.md) |
| Cisco ISE | [_Im_NetworkSession_CiscoISE](vimnetworksessionciscoise.md) |
| Cisco Meraki | [_Im_NetworkSession_CiscoMeraki](vimnetworksessionciscomeraki.md) |
| Cisco Meraki | [_Im_NetworkSession_CiscoMeraki](vimnetworksessionciscomeraki.md) |
| Cisco Meraki | [_Im_NetworkSession_CiscoMerakiSyslog](vimnetworksessionciscomerakisyslog.md) |
| CrowdStrike Falcon Endpoint Protection | [_Im_NetworkSession_CrowdStrikeFalconHost](vimnetworksessioncrowdstrikefalconhost.md) |
| Microsoft | [_Im_NetworkSession_Empty](vimnetworksessionempty.md) |
| ForcePointFirewall | [_Im_NetworkSession_ForcePointFirewall](vimnetworksessionforcepointfirewall.md) |
| Fortinet FortiGate | [_Im_NetworkSession_FortinetFortiGate](vimnetworksessionfortinetfortigate.md) |
| Illumio SaaS Core | [_Im_NetworkSession_IllumioSaaSCore](vimnetworksessionillumiosaascore.md) |
| Sysmon for Linux | [_Im_NetworkSession_LinuxSysmon](vimnetworksessionlinuxsysmon.md) |
| Microsoft Defender for IoT | [_Im_NetworkSession_MD4IoTAgent](vimnetworksessionmd4iotagent.md) |
| Microsoft Defender for IoT | [_Im_NetworkSession_MD4IoTSensor](vimnetworksessionmd4iotsensor.md) |
| M365 Defender for Endpoint | [_Im_NetworkSession_Microsoft365Defender](vimnetworksessionmicrosoft365defender.md) |
| Windows Firewall | [_Im_NetworkSession_MicrosoftSecurityEventFirewall](vimnetworksessionmicrosoftsecurityeventfirewall.md) |
| Windows Sysmon | [_Im_NetworkSession_MicrosoftSysmon](vimnetworksessionmicrosoftsysmon.md) |
| Windows Sysmon | [_Im_NetworkSession_MicrosoftSysmonWindowsEvent](vimnetworksessionmicrosoftsysmonwindowsevent.md) |
| Windows Firewall | [_Im_NetworkSession_MicrosoftWindowsEventFirewall](vimnetworksessionmicrosoftwindowseventfirewall.md) |
| Azure NTANetAnalytics | [_Im_NetworkSession_NTANetAnalytics](vimnetworksessionntanetanalytics.md) |
| Native | [_Im_NetworkSession_Native](vimnetworksessionnative.md) |
| Palo Alto PanOS | [_Im_NetworkSession_PaloAltoCEF](vimnetworksessionpaloaltocef.md) |
| Palo Alto Cortex Data Lake | [_Im_NetworkSession_PaloAltoCortexDataLake](vimnetworksessionpaloaltocortexdatalake.md) |
| SentinelOne | [_Im_NetworkSession_SentinelOne](vimnetworksessionsentinelone.md) |
| SonicWall | [_Im_NetworkSession_SonicWallFirewall](vimnetworksessionsonicwallfirewall.md) |
| VMConnection | [_Im_NetworkSession_VMConnection](vimnetworksessionvmconnection.md) |
| VMware Carbon Black Cloud | [_Im_NetworkSession_VMwareCarbonBlackCloud](vimnetworksessionvmwarecarbonblackcloud.md) |
| Vectra AI Streams | [_Im_NetworkSession_VectraAI](vimnetworksessionvectraai.md) |
| WatchGuard Fireware OS | [_Im_NetworkSession_WatchGuardFirewareOS](vimnetworksessionwatchguardfirewareos.md) |
| Zscaler ZIA Firewall | [_Im_NetworkSession_ZscalerZIA](vimnetworksessionzscalerzia.md) |
| Corelight Zeek | [_im_NetworkSession_CorelightZeek](vimnetworksessioncorelightzeek.md) |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `starttime` | datetime | datetime(null) |
| `endtime` | datetime | datetime(null) |
| `srcipaddr_has_any_prefix` | dynamic | dynamic([]) |
| `dstipaddr_has_any_prefix` | dynamic | dynamic([]) |
| `ipaddr_has_any_prefix` | dynamic | dynamic([]) |
| `dstportnumber` | int | int(null) |
| `hostname_has_any` | dynamic | dynamic([]) |
| `dvcaction` | dynamic | dynamic([]) |
| `eventresult` | string | * |
| `pack` | bool | False |

## References

- [ASIM NetworkSession Schema](https://aka.ms/ASimNetworkSessionDoc)
- [ASIM](https://aka.ms/AboutASIM)

---

**Browse:**

- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

