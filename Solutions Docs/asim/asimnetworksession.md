# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Network Session ASIM parser

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to ASIM Index](asim-index.md)

---

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimNetworkSession` |
| **Built-in Parser** | `_ASim_NetworkSession` |
| **Schema** | NetworkSession |
| **Schema Version** | 0.2.0 |
| **Parser Type** | 📦 Union (schema-level) |
| **Parser Version** | 0.7.1 ([version history](https://github.com/Azure/Azure-Sentinel/tree/master/Parsers/ASimNetworkSession/CHANGELOG/ASimNetworkSession.md)) |
| **Last Updated** | Jul 19, 2024 |
| **Source File** | [Parsers\ASimNetworkSession\Parsers\ASimNetworkSession.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimNetworkSession/Parsers/ASimNetworkSession.yaml) |

## Description

This ASIM parser supports normalizing Network Session logs from all supported sources to the ASIM Network Session normalized schema.

## Products

This union parser includes parsers for the following products:

| Product | Source Parser | Solutions |
|:--------|:--------------|:----------|
| AWS VPC | [_ASim_NetworkSession_AWSVPC](asimnetworksessionawsvpc.md) | [AWS VPC Flow Logs](../solutions/aws-vpc-flow-logs.md) |
| AppGate SDP | [_ASim_NetworkSession_AppGateSDP](asimnetworksessionappgatesdp.md) | [Syslog](../solutions/syslog.md) |
| Azure Firewall | [_ASim_NetworkSession_AzureFirewall](asimnetworksessionazurefirewall.md) | [Azure Firewall](../solutions/azure-firewall.md) |
| Azure NSG flows | [_ASim_NetworkSession_AzureNSG](asimnetworksessionazurensg.md) |  |
| Barracuda WAF | [_ASim_NetworkSession_BarracudaCEF](asimnetworksessionbarracudacef.md) | [Common Event Format](../solutions/common-event-format.md)<br>[VirtualMetric DataStream](../solutions/virtualmetric-datastream.md) |
| Barracuda WAF | [_ASim_NetworkSession_BarracudaWAF](asimnetworksessionbarracudawaf.md) |  |
| CheckPointFirewall | [_ASim_NetworkSession_CheckPointFirewall](asimnetworksessioncheckpointfirewall.md) | [Common Event Format](../solutions/common-event-format.md)<br>[VirtualMetric DataStream](../solutions/virtualmetric-datastream.md) |
| CiscoASA | [_ASim_NetworkSession_CiscoASA](asimnetworksessionciscoasa.md) | [CiscoASA](../solutions/ciscoasa.md)<br>[Common Event Format](../solutions/common-event-format.md)<br>[VirtualMetric DataStream](../solutions/virtualmetric-datastream.md) |
| Cisco Firepower | [_ASim_NetworkSession_CiscoFirepower](asimnetworksessionciscofirepower.md) | [Common Event Format](../solutions/common-event-format.md)<br>[VirtualMetric DataStream](../solutions/virtualmetric-datastream.md) |
| Cisco ISE | [_ASim_NetworkSession_CiscoISE](asimnetworksessionciscoise.md) | [Syslog](../solutions/syslog.md) |
| Cisco Meraki | [_ASim_NetworkSession_CiscoMeraki](asimnetworksessionciscomeraki.md) | [CiscoMeraki](../solutions/ciscomeraki.md)<br>[CustomLogsAma](../solutions/customlogsama.md) |
| Cisco Meraki | [_ASim_NetworkSession_CiscoMeraki](asimnetworksessionciscomeraki.md) | [CiscoMeraki](../solutions/ciscomeraki.md)<br>[CustomLogsAma](../solutions/customlogsama.md) |
| Cisco Meraki | [_ASim_NetworkSession_CiscoMerakiSyslog](asimnetworksessionciscomerakisyslog.md) | [Syslog](../solutions/syslog.md) |
| Corelight Zeek | [_ASim_NetworkSession_CorelightZeek](asimnetworksessioncorelightzeek.md) | [Corelight](../solutions/corelight.md) |
| CrowdStrike Falcon Endpoint Protection | [_ASim_NetworkSession_CrowdStrikeFalconHost](asimnetworksessioncrowdstrikefalconhost.md) | [Common Event Format](../solutions/common-event-format.md)<br>[VirtualMetric DataStream](../solutions/virtualmetric-datastream.md) |
| ForcePointFirewall | [_ASim_NetworkSession_ForcePointFirewall](asimnetworksessionforcepointfirewall.md) | [Common Event Format](../solutions/common-event-format.md)<br>[VirtualMetric DataStream](../solutions/virtualmetric-datastream.md) |
| Fortinet FortiGate | [_ASim_NetworkSession_FortinetFortiGate](asimnetworksessionfortinetfortigate.md) | [Common Event Format](../solutions/common-event-format.md)<br>[VirtualMetric DataStream](../solutions/virtualmetric-datastream.md) |
| Illumio SaaS Core | [_ASim_NetworkSession_IllumioSaaSCore](asimnetworksessionillumiosaascore.md) | [IllumioSaaS](../solutions/illumiosaas.md) |
| Sysmon for Linux | [_ASim_NetworkSession_LinuxSysmon](asimnetworksessionlinuxsysmon.md) | [Syslog](../solutions/syslog.md) |
| Microsoft Defender for IoT | [_ASim_NetworkSession_MD4IoTAgent](asimnetworksessionmd4iotagent.md) |  |
| Microsoft Defender for IoT | [_ASim_NetworkSession_MD4IoTSensor](asimnetworksessionmd4iotsensor.md) |  |
| M365 Defender for Endpoint | [_ASim_NetworkSession_Microsoft365Defender](asimnetworksessionmicrosoft365defender.md) |  |
| Windows Firewall | [_ASim_NetworkSession_MicrosoftSecurityEventFirewall](asimnetworksessionmicrosoftsecurityeventfirewall.md) | [Microsoft Exchange Security - Exchange On-Premises](../solutions/microsoft-exchange-security-exchange-on-premises.md)<br>[Windows Security Events](../solutions/windows-security-events.md) |
| Windows Sysmon | [_ASim_NetworkSession_MicrosoftSysmon](asimnetworksessionmicrosoftsysmon.md) |  |
| Windows Sysmon | [_ASim_NetworkSession_MicrosoftSysmonWindowsEvent](asimnetworksessionmicrosoftsysmonwindowsevent.md) | [Windows Forwarded Events](../solutions/windows-forwarded-events.md) |
| Windows Firewall | [_ASim_NetworkSession_MicrosoftWindowsEventFirewall](asimnetworksessionmicrosoftwindowseventfirewall.md) | [Windows Forwarded Events](../solutions/windows-forwarded-events.md) |
| Azure NTANetAnalytics | [_ASim_NetworkSession_NTANetAnalytics](asimnetworksessionntanetanalytics.md) |  |
| Native | [_ASim_NetworkSession_Native](asimnetworksessionnative.md) | [Cisco Meraki Events via REST API](../solutions/cisco-meraki-events-via-rest-api.md)<br>[CrowdStrike Falcon Endpoint Protection](../solutions/crowdstrike-falcon-endpoint-protection.md)<br>[VMware Carbon Black Cloud](../solutions/vmware-carbon-black-cloud.md) |
| Palo Alto PanOS | [_ASim_NetworkSession_PaloAltoCEF](asimnetworksessionpaloaltocef.md) | [Common Event Format](../solutions/common-event-format.md)<br>[VirtualMetric DataStream](../solutions/virtualmetric-datastream.md) |
| Palo Alto Cortex Data Lake | [_ASim_NetworkSession_PaloAltoCortexDataLake](asimnetworksessionpaloaltocortexdatalake.md) | [Common Event Format](../solutions/common-event-format.md)<br>[VirtualMetric DataStream](../solutions/virtualmetric-datastream.md) |
| SentinelOne | [_ASim_NetworkSession_SentinelOne](asimnetworksessionsentinelone.md) | [SentinelOne](../solutions/sentinelone.md) |
| SonicWall | [_ASim_NetworkSession_SonicWallFirewall](asimnetworksessionsonicwallfirewall.md) | [Common Event Format](../solutions/common-event-format.md)<br>[VirtualMetric DataStream](../solutions/virtualmetric-datastream.md) |
| VMConnection | [_ASim_NetworkSession_VMConnection](asimnetworksessionvmconnection.md) |  |
| VMware Carbon Black Cloud | [_ASim_NetworkSession_VMwareCarbonBlackCloud](asimnetworksessionvmwarecarbonblackcloud.md) | [VMware Carbon Black Cloud](../solutions/vmware-carbon-black-cloud.md) |
| Vectra AI Streams | [_ASim_NetworkSession_VectraAI](asimnetworksessionvectraai.md) | [CustomLogsAma](../solutions/customlogsama.md)<br>[Vectra AI Stream](../solutions/vectra-ai-stream.md) |
| WatchGuard Fireware OS | [_ASim_NetworkSession_WatchGuardFirewareOS](asimnetworksessionwatchguardfirewareos.md) | [Syslog](../solutions/syslog.md) |
| Zscaler ZIA Firewall | [_ASim_NetworkSession_ZscalerZIA](asimnetworksessionzscalerzia.md) | [Common Event Format](../solutions/common-event-format.md)<br>[VirtualMetric DataStream](../solutions/virtualmetric-datastream.md) |

## Source Tables

This parser reads from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`ASimNetworkSessionAWSVPC`](../asim/asimnetworksessionawsvpc.md) | ? | ? | ? |
| [`ASimNetworkSessionAppGateSDP`](../asim/asimnetworksessionappgatesdp.md) | ? | ? | ? |
| [`ASimNetworkSessionAzureFirewall`](../asim/asimnetworksessionazurefirewall.md) | ? | ? | ? |
| [`ASimNetworkSessionAzureNSG`](../asim/asimnetworksessionazurensg.md) | ? | ? | ? |
| [`ASimNetworkSessionBarracudaCEF`](../asim/asimnetworksessionbarracudacef.md) | ? | ? | ? |
| [`ASimNetworkSessionBarracudaWAF`](../asim/asimnetworksessionbarracudawaf.md) | ? | ? | ? |
| [`ASimNetworkSessionCheckPointFirewall`](../asim/asimnetworksessioncheckpointfirewall.md) | ? | ? | ? |
| [`ASimNetworkSessionCiscoASA`](../asim/asimnetworksessionciscoasa.md) | ? | ? | ? |
| [`ASimNetworkSessionCiscoFirepower`](../asim/asimnetworksessionciscofirepower.md) | ? | ? | ? |
| [`ASimNetworkSessionCiscoISE`](../asim/asimnetworksessionciscoise.md) | ? | ? | ? |
| [`ASimNetworkSessionCiscoMeraki`](../asim/asimnetworksessionciscomeraki.md) | ? | ? | ? |
| [`ASimNetworkSessionCiscoMerakiSyslog`](../asim/asimnetworksessionciscomerakisyslog.md) | ? | ? | ? |
| [`ASimNetworkSessionCorelightZeek`](../asim/asimnetworksessioncorelightzeek.md) | ? | ? | ? |
| [`ASimNetworkSessionCrowdStrikeFalconHost`](../asim/asimnetworksessioncrowdstrikefalconhost.md) | ? | ? | ? |
| [`ASimNetworkSessionForcePointFirewall`](../asim/asimnetworksessionforcepointfirewall.md) | ? | ? | ? |
| [`ASimNetworkSessionFortinetFortiGate`](../asim/asimnetworksessionfortinetfortigate.md) | ? | ? | ? |
| [`ASimNetworkSessionIllumioSaaSCore`](../asim/asimnetworksessionillumiosaascore.md) | ? | ? | ? |
| [`ASimNetworkSessionLinuxSysmon`](../asim/asimnetworksessionlinuxsysmon.md) | ? | ? | ? |
| [`ASimNetworkSessionMD4IoTAgent`](../asim/asimnetworksessionmd4iotagent.md) | ? | ? | ? |
| [`ASimNetworkSessionMD4IoTSensor`](../asim/asimnetworksessionmd4iotsensor.md) | ? | ? | ? |
| [`ASimNetworkSessionMicrosoft365Defender`](../asim/asimnetworksessionmicrosoft365defender.md) | ? | ? | ? |
| [`ASimNetworkSessionMicrosoftSecurityEventFirewall`](../asim/asimnetworksessionmicrosoftsecurityeventfirewall.md) | ? | ? | ? |
| [`ASimNetworkSessionMicrosoftSysmon`](../asim/asimnetworksessionmicrosoftsysmon.md) | ? | ? | ? |
| [`ASimNetworkSessionMicrosoftSysmonWindowsEvent`](../asim/asimnetworksessionmicrosoftsysmonwindowsevent.md) | ? | ? | ? |
| [`ASimNetworkSessionMicrosoftWindowsEventFirewall`](../asim/asimnetworksessionmicrosoftwindowseventfirewall.md) | ? | ? | ? |
| [`ASimNetworkSessionNTANetAnalytics`](../asim/asimnetworksessionntanetanalytics.md) | ? | ? | ? |
| [`ASimNetworkSessionNative`](../asim/asimnetworksessionnative.md) | ? | ? | ? |
| [`ASimNetworkSessionPaloAltoCEF`](../asim/asimnetworksessionpaloaltocef.md) | ? | ? | ? |
| [`ASimNetworkSessionPaloAltoCortexDataLake`](../asim/asimnetworksessionpaloaltocortexdatalake.md) | ? | ? | ? |
| [`ASimNetworkSessionSentinelOne`](../asim/asimnetworksessionsentinelone.md) | ? | ? | ? |
| [`ASimNetworkSessionSonicWallFirewall`](../asim/asimnetworksessionsonicwallfirewall.md) | ? | ? | ? |
| [`ASimNetworkSessionVMConnection`](../asim/asimnetworksessionvmconnection.md) | ? | ? | ? |
| [`ASimNetworkSessionVMwareCarbonBlackCloud`](../asim/asimnetworksessionvmwarecarbonblackcloud.md) | ? | ? | ? |
| [`ASimNetworkSessionVectraAI`](../asim/asimnetworksessionvectraai.md) | ? | ? | ? |
| [`ASimNetworkSessionWatchGuardFirewareOS`](../asim/asimnetworksessionwatchguardfirewareos.md) | ? | ? | ? |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `pack` | bool | False |

## References

- [ASIM NetworkSession Schema](https://aka.ms/ASimNetworkSessionDoc)
- [ASIM](https://aka.ms/AboutASIM)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to ASIM Index](asim-index.md)

