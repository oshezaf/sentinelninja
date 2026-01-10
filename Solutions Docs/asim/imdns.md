# <img src="../images/asim-badge.png" alt="ASIM" height="32"> DNS activity ASIM filtering parser.

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `imDns` |
| **Built-in Parser** | `_Im_Dns` |
| **Schema** | Dns |
| **Schema Version** | 0.1.7 |
| **Parser Type** | 📦 Union (schema-level) |
| **Parser Version** | 0.5.2 |
| **Last Updated** | June 7, 2024 |
| **Source File** | [Parsers\ASimDns\Parsers\imDns.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimDns/Parsers/imDns.yaml) |

## Description

This ASIM parser supports filtering and normalizing DNS activity logs from all supported sources to the ASIM DNS activity normalized schema.

## Products

This union parser includes parsers for the following products:

| Product | Source Parser |
|:--------|:--------------|
| Azure Firewall | [_Im_Dns_AzureFirewall](vimdnsazurefirewall.md) |
| Cisco | [_Im_Dns_CiscoUmbrella](vimdnsciscoumbrella.md) |
| Corelight Zeek | [_Im_Dns_CorelightZeek](vimdnscorelightzeek.md) |
| Microsoft | [_Im_Dns_Empty](vimdnsempty.md) |
| Fortinet FortiGate | [_Im_Dns_FortinetFortiGate](vimdnsfortinetfortigate.md) |
| GCP Cloud DNS | [_Im_Dns_Gcp](vimdnsgcp.md) |
| Infoblox BloxOne | [_Im_Dns_InfobloxBloxOne](vimdnsinfobloxbloxone.md) |
| Infoblox NIOS | [_Im_Dns_InfobloxNIOS](vimdnsinfobloxnios.md) |
| MS DNS Events | [_Im_Dns_MicrosoftNXlog](vimdnsmicrosoftnxlog.md) |
| MS DNS Events | [_Im_Dns_MicrosoftOMS](vimdnsmicrosoftoms.md) |
| Microsoft Windows Events Sysmon | [_Im_Dns_MicrosoftSysmon](vimdnsmicrosoftsysmon.md) |
| Microsoft Windows Events Sysmon | [_Im_Dns_MicrosoftSysmonWindowsEvent](vimdnsmicrosoftsysmonwindowsevent.md) |
| Native | [_Im_Dns_Native](vimdnsnative.md) |
| SentinelOne | [_Im_Dns_SentinelOne](vimdnssentinelone.md) |
| Vectra AI Streams | [_Im_Dns_VectraAI](vimdnsvectraai.md) |
| Zscaler ZIA DNS | [_Im_Dns_ZscalerZIA](vimdnszscalerzia.md) |

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

**Browse:**

- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

