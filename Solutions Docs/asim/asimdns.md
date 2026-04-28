# <img src="../images/asim-badge.png" alt="ASIM" height="32"> DNS activity ASIM parser

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

---

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimDns` |
| **Built-in Parser** | `_ASim_Dns` |
| **Schema** | Dns |
| **Schema Version** | 0.1.7 |
| **Parser Type** | 📦 Union (schema-level) |
| **Parser Version** | 0.5.2 ([version history](https://github.com/Azure/Azure-Sentinel/tree/master/Parsers/ASimDns/CHANGELOG/ASimDns.md)) |
| **Last Updated** | June 7, 2024 |
| **Source File** | [Parsers\ASimDns\Parsers\ASimDns.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimDns/Parsers/ASimDns.yaml) |

## Description

This ASIM parser supports normalizing DNS activity logs from all supported sources to the ASIM DNS activity normalized schema.

## Products

This union parser includes parsers for the following products:

| Product | Source Parser | Solutions |
|:--------|:--------------|:----------|
| Azure Firewall | [_ASim_Dns_AzureFirewall](asimdnsazurefirewall.md) | [Azure Firewall](../solutions/azure-firewall.md) |
| Cisco Umbrella | [_ASim_Dns_CiscoUmbrella](asimdnsciscoumbrella.md) | [CiscoUmbrella](../solutions/ciscoumbrella.md) |
| Corelight Zeek | [_ASim_Dns_CorelightZeek](asimdnscorelightzeek.md) | [Corelight](../solutions/corelight.md) |
| Fortinet FortiGate | [_ASim_Dns_FortinetFortiGate](asimdnsfortinetfortigate.md) | [Common Event Format](../solutions/common-event-format.md)<br>[VirtualMetric DataStream](../solutions/virtualmetric-datastream.md)<br>[Zscaler Internet Access](../solutions/zscaler-internet-access.md) |
| GCP Cloud DNS | [_ASim_Dns_Gcp](asimdnsgcp.md) |  |
| Infoblox BloxOne | [_ASim_Dns_InfobloxBloxOne](asimdnsinfobloxbloxone.md) | [Common Event Format](../solutions/common-event-format.md)<br>[VirtualMetric DataStream](../solutions/virtualmetric-datastream.md)<br>[Zscaler Internet Access](../solutions/zscaler-internet-access.md) |
| Infoblox NIOS | [_ASim_Dns_InfobloxNIOS](asimdnsinfobloxnios.md) | [Syslog](../solutions/syslog.md) |
| MS DNS Events | [_ASim_Dns_MicrosoftNXlog](asimdnsmicrosoftnxlog.md) | [NXLogDNSLogs](../solutions/nxlogdnslogs.md) |
| MS DNS Events | [_ASim_Dns_MicrosoftOMS](asimdnsmicrosoftoms.md) | [Windows Server DNS](../solutions/windows-server-dns.md) |
| Microsoft Windows Events Sysmon | [_ASim_Dns_MicrosoftSysmon](asimdnsmicrosoftsysmon.md) |  |
| Microsoft Windows Events Sysmon | [_ASim_Dns_MicrosoftSysmonWindowsEvent](asimdnsmicrosoftsysmonwindowsevent.md) | [Windows Forwarded Events](../solutions/windows-forwarded-events.md) |
| Native | [_ASim_Dns_Native](asimdnsnative.md) | [SynqlyIntegrationConnector](../solutions/synqlyintegrationconnector.md) |
| SentinelOne | [_ASim_Dns_SentinelOne](asimdnssentinelone.md) |  |
| Vectra AI Streams | [_ASim_Dns_VectraAI](asimdnsvectraai.md) | [CustomLogsAma](../solutions/customlogsama.md)<br>[Vectra AI Stream](../solutions/vectra-ai-stream.md) |
| Zscaler ZIA DNS | [_ASim_Dns_ZscalerZIA](asimdnszscalerzia.md) | [Common Event Format](../solutions/common-event-format.md)<br>[VirtualMetric DataStream](../solutions/virtualmetric-datastream.md)<br>[Zscaler Internet Access](../solutions/zscaler-internet-access.md) |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `pack` | bool | False |

## References

- [ASIM DNS Schema](https://aka.ms/ASimDnsDoc)
- [ASIM](https://aka.ms/AboutASIM)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

