# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Network Session ASIM filtering parser

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

---

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
|  | [_Im_NetworkSession_AWSVPC](im-networksession-awsvpc.md) |
|  | [_Im_NetworkSession_AppGateSDP](im-networksession-appgatesdp.md) |
|  | [_Im_NetworkSession_AzureFirewall](im-networksession-azurefirewall.md) |
|  | [_Im_NetworkSession_AzureNSG](im-networksession-azurensg.md) |
|  | [_Im_NetworkSession_BarracudaCEF](im-networksession-barracudacef.md) |
|  | [_Im_NetworkSession_BarracudaWAF](im-networksession-barracudawaf.md) |
|  | [_Im_NetworkSession_CheckPointFirewall](im-networksession-checkpointfirewall.md) |
|  | [_Im_NetworkSession_CiscoASA](im-networksession-ciscoasa.md) |
|  | [_Im_NetworkSession_CiscoFirepower](im-networksession-ciscofirepower.md) |
|  | [_Im_NetworkSession_CiscoISE](im-networksession-ciscoise.md) |
|  | [_Im_NetworkSession_CiscoMeraki](im-networksession-ciscomeraki.md) |
|  | [_Im_NetworkSession_CiscoMeraki](im-networksession-ciscomeraki.md) |
|  | [_Im_NetworkSession_CiscoMerakiSyslog](im-networksession-ciscomerakisyslog.md) |
|  | [_Im_NetworkSession_CrowdStrikeFalconHost](im-networksession-crowdstrikefalconhost.md) |
|  | [_Im_NetworkSession_Empty](im-networksession-empty.md) |
|  | [_Im_NetworkSession_ForcePointFirewall](im-networksession-forcepointfirewall.md) |
|  | [_Im_NetworkSession_FortinetFortiGate](im-networksession-fortinetfortigate.md) |
|  | [_Im_NetworkSession_IllumioSaaSCore](im-networksession-illumiosaascore.md) |
|  | [_Im_NetworkSession_LinuxSysmon](im-networksession-linuxsysmon.md) |
|  | [_Im_NetworkSession_MD4IoTAgent](im-networksession-md4iotagent.md) |
|  | [_Im_NetworkSession_MD4IoTSensor](im-networksession-md4iotsensor.md) |
|  | [_Im_NetworkSession_Microsoft365Defender](im-networksession-microsoft365defender.md) |
|  | [_Im_NetworkSession_MicrosoftSecurityEventFirewall](im-networksession-microsoftsecurityeventfirewall.md) |
|  | [_Im_NetworkSession_MicrosoftSysmon](im-networksession-microsoftsysmon.md) |
|  | [_Im_NetworkSession_MicrosoftSysmonWindowsEvent](im-networksession-microsoftsysmonwindowsevent.md) |
|  | [_Im_NetworkSession_MicrosoftWindowsEventFirewall](im-networksession-microsoftwindowseventfirewall.md) |
|  | [_Im_NetworkSession_NTANetAnalytics](im-networksession-ntanetanalytics.md) |
|  | [_Im_NetworkSession_Native](im-networksession-native.md) |
|  | [_Im_NetworkSession_PaloAltoCEF](im-networksession-paloaltocef.md) |
|  | [_Im_NetworkSession_PaloAltoCortexDataLake](im-networksession-paloaltocortexdatalake.md) |
|  | [_Im_NetworkSession_SentinelOne](im-networksession-sentinelone.md) |
|  | [_Im_NetworkSession_SonicWallFirewall](im-networksession-sonicwallfirewall.md) |
|  | [_Im_NetworkSession_VMConnection](im-networksession-vmconnection.md) |
|  | [_Im_NetworkSession_VMwareCarbonBlackCloud](im-networksession-vmwarecarbonblackcloud.md) |
|  | [_Im_NetworkSession_VectraAI](im-networksession-vectraai.md) |
|  | [_Im_NetworkSession_WatchGuardFirewareOS](im-networksession-watchguardfirewareos.md) |
|  | [_Im_NetworkSession_ZscalerZIA](im-networksession-zscalerzia.md) |
|  | [_im_NetworkSession_CorelightZeek](im-networksession-corelightzeek.md) |

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

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

