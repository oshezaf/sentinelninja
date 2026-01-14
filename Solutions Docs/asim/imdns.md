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
|  | [_Im_Dns_AzureFirewall](im-dns-azurefirewall.md) |
|  | [_Im_Dns_CiscoUmbrella](im-dns-ciscoumbrella.md) |
|  | [_Im_Dns_CorelightZeek](im-dns-corelightzeek.md) |
|  | [_Im_Dns_Empty](im-dns-empty.md) |
|  | [_Im_Dns_FortinetFortiGate](im-dns-fortinetfortigate.md) |
|  | [_Im_Dns_Gcp](im-dns-gcp.md) |
|  | [_Im_Dns_InfobloxBloxOne](im-dns-infobloxbloxone.md) |
|  | [_Im_Dns_InfobloxNIOS](im-dns-infobloxnios.md) |
|  | [_Im_Dns_MicrosoftNXlog](im-dns-microsoftnxlog.md) |
|  | [_Im_Dns_MicrosoftOMS](im-dns-microsoftoms.md) |
|  | [_Im_Dns_MicrosoftSysmon](im-dns-microsoftsysmon.md) |
|  | [_Im_Dns_MicrosoftSysmonWindowsEvent](im-dns-microsoftsysmonwindowsevent.md) |
|  | [_Im_Dns_Native](im-dns-native.md) |
|  | [_Im_Dns_SentinelOne](im-dns-sentinelone.md) |
|  | [_Im_Dns_VectraAI](im-dns-vectraai.md) |
|  | [_Im_Dns_ZscalerZIA](im-dns-zscalerzia.md) |

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

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to ASIM Index](../asim/asim-index.md)

