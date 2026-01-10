# <img src="../images/asim-badge.png" alt="ASIM" height="32"> DNS activity ASIM parser for Sysmon for Windows

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimDnsMicrosoftSysmonWindowsEvent` |
| **Built-in Parser** | `_ASim_Dns_MicrosoftSysmonWindowsEvent` |
| **Schema** | Dns |
| **Schema Version** | 0.1.7 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Microsoft Windows Events Sysmon |
| **Parser Version** | 0.5.1 |
| **Last Updated** | Jul 19, 2024 |
| **Unifying Parser** | [ASimDns](asimdns.md) |
| **Source File** | [Parsers\ASimDns\Parsers\ASimDnsMicrosoftSysmonWindowsEvent.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimDns/Parsers/ASimDnsMicrosoftSysmonWindowsEvent.yaml) |

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

