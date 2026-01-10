# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Network Session ASIM parser for WatchGuard Fireware OS

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `vimNetworkSessionWatchGuardFirewareOS` |
| **Built-in Parser** | `_Im_NetworkSession_WatchGuardFirewareOS` |
| **Schema** | NetworkSession |
| **Schema Version** | 0.2.4 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | WatchGuard Fireware OS |
| **Parser Version** | 0.1.5 |
| **Last Updated** | Mar 10, 2024 |
| **Unifying Parser** | [imNetworkSession](imnetworksession.md) |
| **Source File** | [Parsers\ASimNetworkSession\Parsers\vimNetworkSessionWatchGuardFirewareOS.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimNetworkSession/Parsers/vimNetworkSessionWatchGuardFirewareOS.yaml) |

## Description

This ASIM parser supports filtering and normalizing WatchGuard Fireware OS logs produced by the Microsoft Sentinel Syslog connector to the ASIM Network Session normalized schema.

## Source Tables

This parser reads from the following tables:

| Table |
|:------|
| [Syslog](../tables/syslog.md) |

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
| `disabled` | bool | False |

## References

- [ASIM Network Session Schema](https://aka.ms/ASimNetworkSessionDoc)
- [ASIM](https://aka.ms/AboutASIM)
- [WatchGuard Help Center](https://www.watchguard.com/help/docs/help-center/en-US/Content/en-US/Fireware/_intro/fireware_help_front.html?tocpath=Fireware%7C_____0)

---

**Browse:**

- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

