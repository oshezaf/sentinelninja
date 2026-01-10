# <img src="../images/asim-badge.png" alt="ASIM" height="32"> DNS activity ASIM filtering parser for Sysmon for Windows

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `vimDnsMicrosoftSysmonWindowsEvent` |
| **Built-in Parser** | `_Im_Dns_MicrosoftSysmonWindowsEvent` |
| **Schema** | Dns |
| **Schema Version** | 0.1.7 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Microsoft Windows Events Sysmon |
| **Parser Version** | 0.5.1 |
| **Last Updated** | Jul 19, 2024 |
| **Unifying Parser** | [imDns](imdns.md) |
| **Source File** | [Parsers\ASimDns\Parsers\vimDnsMicrosoftSysmonWindowsEvent.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimDns/Parsers/vimDnsMicrosoftSysmonWindowsEvent.yaml) |

## Description

This ASIM parser supports normalizing Sysmon for Windows DNS logs (event number 22) logs ingested in 'Event' table to the ASIM Dns normalized schema.

## Source Tables

This parser reads from the following tables:

| Table |
|:------|
| [WindowsEvent](../tables/windowsevent.md) |

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
| `eventtype` | string | Query |
| `disabled` | bool | False |

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

