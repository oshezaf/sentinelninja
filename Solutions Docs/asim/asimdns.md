# <img src="../images/asim-badge.png" alt="ASIM" height="32"> DNS activity ASIM parser

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md)

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
| **Parser Version** | 0.5.2 |
| **Last Updated** | June 7, 2024 |
| **Source File** | [Parsers\ASimDns\Parsers\ASimDns.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimDns/Parsers/ASimDns.yaml) |

## Description

This ASIM parser supports normalizing DNS activity logs from all supported sources to the ASIM DNS activity normalized schema.

## Products

This union parser includes parsers for the following products:

| Product | Source Parser |
|:--------|:--------------|
| Azure Firewall | [_ASim_Dns_AzureFirewall](asimdnsazurefirewall.md) |
| Cisco Umbrella | [_ASim_Dns_CiscoUmbrella](asimdnsciscoumbrella.md) |
| Corelight Zeek | [_ASim_Dns_CorelightZeek](asimdnscorelightzeek.md) |
| Fortinet FortiGate | [_ASim_Dns_FortinetFortiGate](asimdnsfortinetfortigate.md) |
| GCP Cloud DNS | [_ASim_Dns_Gcp](asimdnsgcp.md) |
| Infoblox BloxOne | [_ASim_Dns_InfobloxBloxOne](asimdnsinfobloxbloxone.md) |
| Infoblox NIOS | [_ASim_Dns_InfobloxNIOS](asimdnsinfobloxnios.md) |
| MS DNS Events | [_ASim_Dns_MicrosoftNXlog](asimdnsmicrosoftnxlog.md) |
| MS DNS Events | [_ASim_Dns_MicrosoftOMS](asimdnsmicrosoftoms.md) |
| Microsoft Windows Events Sysmon | [_ASim_Dns_MicrosoftSysmon](asimdnsmicrosoftsysmon.md) |
| Microsoft Windows Events Sysmon | [_ASim_Dns_MicrosoftSysmonWindowsEvent](asimdnsmicrosoftsysmonwindowsevent.md) |
| Native | [_ASim_Dns_Native](asimdnsnative.md) |
| SentinelOne | [_ASim_Dns_SentinelOne](asimdnssentinelone.md) |
| Vectra AI Streams | [_ASim_Dns_VectraAI](asimdnsvectraai.md) |
| Zscaler ZIA DNS | [_ASim_Dns_ZscalerZIA](asimdnszscalerzia.md) |
|  | [_Im_Dns_Empty](im-dns-empty.md) |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `pack` | bool | False |

## References

- [ASIM DNS Schema](https://aka.ms/ASimDnsDoc)
- [ASIM](https://aka.ms/AboutASIM)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to ASIM Index](asim-index.md)

