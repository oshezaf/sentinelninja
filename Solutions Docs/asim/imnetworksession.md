# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Network Session ASIM filtering parser

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

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
| **Parser Version** | 0.6.2 ([version history](https://github.com/Azure/Azure-Sentinel/tree/master/Parsers/ASimNetworkSession/CHANGELOG/imNetworkSession.md)) |
| **Last Updated** | Jun 20, 2024 |
| **Source File** | [Parsers\ASimNetworkSession\Parsers\imNetworkSession.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimNetworkSession/Parsers/imNetworkSession.yaml) |

## Description

This ASIM parser supports filtering and normalizing Network Session logs from all supported sources to the ASIM Network Session normalized schema.

## Products

This union parser includes parsers for the following products:

| Product | Source Parser | Solutions |
|:--------|:--------------|:----------|
| AWS VPC | [_Im_NetworkSession_AWSVPC](asimnetworksessionawsvpc.md) | [AWS VPC Flow Logs](../solutions/aws-vpc-flow-logs.md) |
| AppGate SDP | [_Im_NetworkSession_AppGateSDP](asimnetworksessionappgatesdp.md) | [Syslog](../solutions/syslog.md) |
| Azure Firewall | [_Im_NetworkSession_AzureFirewall](asimnetworksessionazurefirewall.md) |  |
| Azure NSG flows | [_Im_NetworkSession_AzureNSG](asimnetworksessionazurensg.md) |  |
| Barracuda WAF | [_Im_NetworkSession_BarracudaCEF](asimnetworksessionbarracudacef.md) | [Common Event Format](../solutions/common-event-format.md)<br>[VirtualMetric DataStream](../solutions/virtualmetric-datastream.md) |
| Barracuda WAF | [_Im_NetworkSession_BarracudaWAF](asimnetworksessionbarracudawaf.md) |  |
| CheckPointFirewall | [_Im_NetworkSession_CheckPointFirewall](asimnetworksessioncheckpointfirewall.md) | [Common Event Format](../solutions/common-event-format.md)<br>[VirtualMetric DataStream](../solutions/virtualmetric-datastream.md) |
| CiscoASA | [_Im_NetworkSession_CiscoASA](asimnetworksessionciscoasa.md) | [CiscoASA](../solutions/ciscoasa.md)<br>[Common Event Format](../solutions/common-event-format.md)<br>[VirtualMetric DataStream](../solutions/virtualmetric-datastream.md) |
| Cisco Firepower | [_Im_NetworkSession_CiscoFirepower](asimnetworksessionciscofirepower.md) | [Common Event Format](../solutions/common-event-format.md)<br>[VirtualMetric DataStream](../solutions/virtualmetric-datastream.md) |
| Cisco ISE | [_Im_NetworkSession_CiscoISE](asimnetworksessionciscoise.md) | [Syslog](../solutions/syslog.md) |
| Cisco Meraki | [_Im_NetworkSession_CiscoMeraki](asimnetworksessionciscomeraki.md) | [CiscoMeraki](../solutions/ciscomeraki.md)<br>[CustomLogsAma](../solutions/customlogsama.md) |
| Cisco Meraki | [_Im_NetworkSession_CiscoMeraki](asimnetworksessionciscomeraki.md) | [CiscoMeraki](../solutions/ciscomeraki.md)<br>[CustomLogsAma](../solutions/customlogsama.md) |
| Cisco Meraki | [_Im_NetworkSession_CiscoMerakiSyslog](asimnetworksessionciscomerakisyslog.md) | [Syslog](../solutions/syslog.md) |
| CrowdStrike Falcon Endpoint Protection | [_Im_NetworkSession_CrowdStrikeFalconHost](asimnetworksessioncrowdstrikefalconhost.md) | [Common Event Format](../solutions/common-event-format.md)<br>[VirtualMetric DataStream](../solutions/virtualmetric-datastream.md) |
| ForcePointFirewall | [_Im_NetworkSession_ForcePointFirewall](asimnetworksessionforcepointfirewall.md) | [Common Event Format](../solutions/common-event-format.md)<br>[VirtualMetric DataStream](../solutions/virtualmetric-datastream.md) |
| Fortinet FortiGate | [_Im_NetworkSession_FortinetFortiGate](asimnetworksessionfortinetfortigate.md) | [Common Event Format](../solutions/common-event-format.md)<br>[VirtualMetric DataStream](../solutions/virtualmetric-datastream.md) |
| Illumio SaaS Core | [_Im_NetworkSession_IllumioSaaSCore](asimnetworksessionillumiosaascore.md) | [IllumioSaaS](../solutions/illumiosaas.md) |
| Sysmon for Linux | [_Im_NetworkSession_LinuxSysmon](asimnetworksessionlinuxsysmon.md) | [Syslog](../solutions/syslog.md) |
| Microsoft Defender for IoT | [_Im_NetworkSession_MD4IoTAgent](asimnetworksessionmd4iotagent.md) |  |
| Microsoft Defender for IoT | [_Im_NetworkSession_MD4IoTSensor](asimnetworksessionmd4iotsensor.md) |  |
| M365 Defender for Endpoint | [_Im_NetworkSession_Microsoft365Defender](asimnetworksessionmicrosoft365defender.md) |  |
| Windows Firewall | [_Im_NetworkSession_MicrosoftSecurityEventFirewall](asimnetworksessionmicrosoftsecurityeventfirewall.md) | [Microsoft Exchange Security - Exchange On-Premises](../solutions/microsoft-exchange-security-exchange-on-premises.md)<br>[Windows Security Events](../solutions/windows-security-events.md) |
| Windows Sysmon | [_Im_NetworkSession_MicrosoftSysmon](asimnetworksessionmicrosoftsysmon.md) |  |
| Windows Sysmon | [_Im_NetworkSession_MicrosoftSysmonWindowsEvent](asimnetworksessionmicrosoftsysmonwindowsevent.md) | [Windows Forwarded Events](../solutions/windows-forwarded-events.md) |
| Windows Firewall | [_Im_NetworkSession_MicrosoftWindowsEventFirewall](asimnetworksessionmicrosoftwindowseventfirewall.md) | [Windows Forwarded Events](../solutions/windows-forwarded-events.md) |
| Azure NTANetAnalytics | [_Im_NetworkSession_NTANetAnalytics](asimnetworksessionntanetanalytics.md) |  |
| Native | [_Im_NetworkSession_Native](asimnetworksessionnative.md) | [Cisco Meraki Events via REST API](../solutions/cisco-meraki-events-via-rest-api.md)<br>[CrowdStrike Falcon Endpoint Protection](../solutions/crowdstrike-falcon-endpoint-protection.md)<br>[VMware Carbon Black Cloud](../solutions/vmware-carbon-black-cloud.md) |
| Palo Alto PanOS | [_Im_NetworkSession_PaloAltoCEF](asimnetworksessionpaloaltocef.md) | [Common Event Format](../solutions/common-event-format.md)<br>[VirtualMetric DataStream](../solutions/virtualmetric-datastream.md) |
| Palo Alto Cortex Data Lake | [_Im_NetworkSession_PaloAltoCortexDataLake](asimnetworksessionpaloaltocortexdatalake.md) | [Common Event Format](../solutions/common-event-format.md)<br>[VirtualMetric DataStream](../solutions/virtualmetric-datastream.md) |
| SentinelOne | [_Im_NetworkSession_SentinelOne](asimnetworksessionsentinelone.md) | [SentinelOne](../solutions/sentinelone.md) |
| SonicWall | [_Im_NetworkSession_SonicWallFirewall](asimnetworksessionsonicwallfirewall.md) | [Common Event Format](../solutions/common-event-format.md)<br>[VirtualMetric DataStream](../solutions/virtualmetric-datastream.md) |
| VMConnection | [_Im_NetworkSession_VMConnection](asimnetworksessionvmconnection.md) |  |
| VMware Carbon Black Cloud | [_Im_NetworkSession_VMwareCarbonBlackCloud](asimnetworksessionvmwarecarbonblackcloud.md) | [VMware Carbon Black Cloud](../solutions/vmware-carbon-black-cloud.md) |
| Vectra AI Streams | [_Im_NetworkSession_VectraAI](asimnetworksessionvectraai.md) | [CustomLogsAma](../solutions/customlogsama.md)<br>[Vectra AI Stream](../solutions/vectra-ai-stream.md) |
| WatchGuard Fireware OS | [_Im_NetworkSession_WatchGuardFirewareOS](asimnetworksessionwatchguardfirewareos.md) | [Syslog](../solutions/syslog.md) |
| Zscaler ZIA Firewall | [_Im_NetworkSession_ZscalerZIA](asimnetworksessionzscalerzia.md) | [Common Event Format](../solutions/common-event-format.md)<br>[VirtualMetric DataStream](../solutions/virtualmetric-datastream.md) |
|  | [_im_NetworkSession_CorelightZeek](im-networksession-corelightzeek.md) |  |

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

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

