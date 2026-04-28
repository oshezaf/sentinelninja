# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Network Session ASIM parser

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

---

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimNetworkSession` |
| **Built-in Parser** | `_ASim_NetworkSession` |
| **Schema** | NetworkSession |
| **Schema Version** | 0.2.7 |
| **Parser Type** | 📦 Union (schema-level) |
| **Parser Version** | 0.7.2 ([version history](https://github.com/Azure/Azure-Sentinel/tree/master/Parsers/ASimNetworkSession/CHANGELOG/ASimNetworkSession.md)) |
| **Last Updated** | Mar 30, 2026 |
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
| Barracuda WAF | [_ASim_NetworkSession_BarracudaCEF](asimnetworksessionbarracudacef.md) | [Common Event Format](../solutions/common-event-format.md)<br>[VirtualMetric DataStream](../solutions/virtualmetric-datastream.md)<br>[Zscaler Internet Access](../solutions/zscaler-internet-access.md) |
| Barracuda WAF | [_ASim_NetworkSession_BarracudaWAF](asimnetworksessionbarracudawaf.md) |  |
| CheckPointFirewall | [_ASim_NetworkSession_CheckPointFirewall](asimnetworksessioncheckpointfirewall.md) | [Common Event Format](../solutions/common-event-format.md)<br>[VirtualMetric DataStream](../solutions/virtualmetric-datastream.md)<br>[Zscaler Internet Access](../solutions/zscaler-internet-access.md) |
| CheckPointSmartDefense | [_ASim_NetworkSession_CheckPointSmartDefense](asimnetworksessioncheckpointsmartdefense.md) | [Common Event Format](../solutions/common-event-format.md)<br>[VirtualMetric DataStream](../solutions/virtualmetric-datastream.md)<br>[Zscaler Internet Access](../solutions/zscaler-internet-access.md) |
| CiscoASA | [_ASim_NetworkSession_CiscoASA](asimnetworksessionciscoasa.md) | [CiscoASA](../solutions/ciscoasa.md)<br>[Common Event Format](../solutions/common-event-format.md)<br>[VirtualMetric DataStream](../solutions/virtualmetric-datastream.md)<br>[Zscaler Internet Access](../solutions/zscaler-internet-access.md) |
| Cisco Firepower | [_ASim_NetworkSession_CiscoFirepower](asimnetworksessionciscofirepower.md) | [Common Event Format](../solutions/common-event-format.md)<br>[VirtualMetric DataStream](../solutions/virtualmetric-datastream.md)<br>[Zscaler Internet Access](../solutions/zscaler-internet-access.md) |
| Cisco ISE | [_ASim_NetworkSession_CiscoISE](asimnetworksessionciscoise.md) | [Syslog](../solutions/syslog.md) |
| Cisco Meraki | [_ASim_NetworkSession_CiscoMeraki](asimnetworksessionciscomeraki.md) | [CiscoMeraki](../solutions/ciscomeraki.md)<br>[CustomLogsAma](../solutions/customlogsama.md) |
| Cisco Meraki | [_ASim_NetworkSession_CiscoMeraki](asimnetworksessionciscomeraki.md) | [CiscoMeraki](../solutions/ciscomeraki.md)<br>[CustomLogsAma](../solutions/customlogsama.md) |
| Cisco Meraki | [_ASim_NetworkSession_CiscoMerakiSyslog](asimnetworksessionciscomerakisyslog.md) | [Syslog](../solutions/syslog.md) |
| Corelight Zeek | [_ASim_NetworkSession_CorelightZeek](asimnetworksessioncorelightzeek.md) | [Corelight](../solutions/corelight.md) |
| CrowdStrike Falcon Endpoint Protection | [_ASim_NetworkSession_CrowdStrikeFalconHost](asimnetworksessioncrowdstrikefalconhost.md) | [Common Event Format](../solutions/common-event-format.md)<br>[VirtualMetric DataStream](../solutions/virtualmetric-datastream.md)<br>[Zscaler Internet Access](../solutions/zscaler-internet-access.md) |
| ForcePointFirewall | [_ASim_NetworkSession_ForcePointFirewall](asimnetworksessionforcepointfirewall.md) | [Common Event Format](../solutions/common-event-format.md)<br>[VirtualMetric DataStream](../solutions/virtualmetric-datastream.md)<br>[Zscaler Internet Access](../solutions/zscaler-internet-access.md) |
| Fortinet FortiGate | [_ASim_NetworkSession_FortinetFortiGate](asimnetworksessionfortinetfortigate.md) | [Common Event Format](../solutions/common-event-format.md)<br>[VirtualMetric DataStream](../solutions/virtualmetric-datastream.md)<br>[Zscaler Internet Access](../solutions/zscaler-internet-access.md) |
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
| Native | [_ASim_NetworkSession_Native](asimnetworksessionnative.md) | [Cisco Meraki Events via REST API](../solutions/cisco-meraki-events-via-rest-api.md)<br>[SynqlyIntegrationConnector](../solutions/synqlyintegrationconnector.md)<br>[VMware Carbon Black Cloud](../solutions/vmware-carbon-black-cloud.md) |
| Palo Alto PanOS | [_ASim_NetworkSession_PaloAltoCEF](asimnetworksessionpaloaltocef.md) | [Common Event Format](../solutions/common-event-format.md)<br>[VirtualMetric DataStream](../solutions/virtualmetric-datastream.md)<br>[Zscaler Internet Access](../solutions/zscaler-internet-access.md) |
| Palo Alto Cortex Data Lake | [_ASim_NetworkSession_PaloAltoCortexDataLake](asimnetworksessionpaloaltocortexdatalake.md) | [Common Event Format](../solutions/common-event-format.md)<br>[VirtualMetric DataStream](../solutions/virtualmetric-datastream.md)<br>[Zscaler Internet Access](../solutions/zscaler-internet-access.md) |
| SentinelOne | [_ASim_NetworkSession_SentinelOne](asimnetworksessionsentinelone.md) |  |
| SonicWall | [_ASim_NetworkSession_SonicWallFirewall](asimnetworksessionsonicwallfirewall.md) | [Common Event Format](../solutions/common-event-format.md)<br>[VirtualMetric DataStream](../solutions/virtualmetric-datastream.md)<br>[Zscaler Internet Access](../solutions/zscaler-internet-access.md) |
| VMConnection | [_ASim_NetworkSession_VMConnection](asimnetworksessionvmconnection.md) |  |
| VMware Carbon Black Cloud | [_ASim_NetworkSession_VMwareCarbonBlackCloud](asimnetworksessionvmwarecarbonblackcloud.md) |  |
| Vectra AI Streams | [_ASim_NetworkSession_VectraAI](asimnetworksessionvectraai.md) | [CustomLogsAma](../solutions/customlogsama.md)<br>[Vectra AI Stream](../solutions/vectra-ai-stream.md) |
| WatchGuard Fireware OS | [_ASim_NetworkSession_WatchGuardFirewareOS](asimnetworksessionwatchguardfirewareos.md) | [Syslog](../solutions/syslog.md) |
| Zscaler ZIA Firewall | [_ASim_NetworkSession_ZscalerZIA](asimnetworksessionzscalerzia.md) | [Common Event Format](../solutions/common-event-format.md)<br>[VirtualMetric DataStream](../solutions/virtualmetric-datastream.md)<br>[Zscaler Internet Access](../solutions/zscaler-internet-access.md) |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `pack` | bool | False |

## References

- [ASIM NetworkSession Schema](https://aka.ms/ASimNetworkSessionDoc)
- [ASIM](https://aka.ms/AboutASIM)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

