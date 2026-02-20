# <img src="../images/asim-badge.png" alt="ASIM" height="32"> DNS activity ASIM filtering parser.

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

---

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `imDns` |
| **Built-in Parser** | `_Im_Dns` |
| **Schema** | Dns |
| **Schema Version** | 0.1.7 |
| **Parser Type** | 📦 Union (schema-level) |
| **Parser Version** | 0.5.2 ([version history](https://github.com/Azure/Azure-Sentinel/tree/master/Parsers/ASimDns/CHANGELOG/imDns.md)) |
| **Last Updated** | June 7, 2024 |
| **Source File** | [Parsers\ASimDns\Parsers\imDns.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimDns/Parsers/imDns.yaml) |

## Description

This ASIM parser supports filtering and normalizing DNS activity logs from all supported sources to the ASIM DNS activity normalized schema.

## Products

This union parser includes parsers for the following products:

| Product | Source Parser |
|:--------|:--------------|
| Azure Firewall | [_Im_Dns_AzureFirewall](asimdnsazurefirewall.md) |
| Cisco Umbrella | [_Im_Dns_CiscoUmbrella](asimdnsciscoumbrella.md) |
| Corelight Zeek | [_Im_Dns_CorelightZeek](asimdnscorelightzeek.md) |
| Fortinet FortiGate | [_Im_Dns_FortinetFortiGate](asimdnsfortinetfortigate.md) |
| GCP Cloud DNS | [_Im_Dns_Gcp](asimdnsgcp.md) |
| Infoblox BloxOne | [_Im_Dns_InfobloxBloxOne](asimdnsinfobloxbloxone.md) |
| Infoblox NIOS | [_Im_Dns_InfobloxNIOS](asimdnsinfobloxnios.md) |
| MS DNS Events | [_Im_Dns_MicrosoftNXlog](asimdnsmicrosoftnxlog.md) |
| MS DNS Events | [_Im_Dns_MicrosoftOMS](asimdnsmicrosoftoms.md) |
| Microsoft Windows Events Sysmon | [_Im_Dns_MicrosoftSysmon](asimdnsmicrosoftsysmon.md) |
| Microsoft Windows Events Sysmon | [_Im_Dns_MicrosoftSysmonWindowsEvent](asimdnsmicrosoftsysmonwindowsevent.md) |
| Native | [_Im_Dns_Native](asimdnsnative.md) |
| SentinelOne | [_Im_Dns_SentinelOne](asimdnssentinelone.md) |
| Vectra AI Streams | [_Im_Dns_VectraAI](asimdnsvectraai.md) |
| Zscaler ZIA DNS | [_Im_Dns_ZscalerZIA](asimdnszscalerzia.md) |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `starttime` | datetime | datetime(null) |
| `endtime` | datetime | datetime(null) |
| `srcipaddr` | string | * |
| `domain_has_any` | dynamic | dynamic([]) |
| `responsecodename` | string | * |
| `response_has_ipv4` | string | * |
| `response_has_any_prefix` | dynamic | dynamic([]) |
| `eventtype` | string | lookup |
| `pack` | bool | False |

## References

- [ASIM DNS Schema](https://aka.ms/ASimDnsDoc)
- [ASIM](https://aka.ms/AboutASIM)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

