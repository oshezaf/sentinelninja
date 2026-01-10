# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Network Session ASIM parser for WatchGuard Fireware OS

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimNetworkSessionWatchGuardFirewareOS` |
| **Built-in Parser** | `_ASim_NetworkSession_WatchGuardFirewareOS` |
| **Schema** | NetworkSession |
| **Schema Version** | 0.2.4 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | WatchGuard Fireware OS |
| **Parser Version** | 0.1.4 |
| **Last Updated** | Aug 29th, 2022 |
| **Unifying Parser** | [ASimNetworkSession](asimnetworksession.md) |
| **Source File** | [Parsers\ASimNetworkSession\Parsers\ASimNetworkSessionWatchGuardFirewareOS.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimNetworkSession/Parsers/ASimNetworkSessionWatchGuardFirewareOS.yaml) |

## Description

This ASIM parser supports normalizing WatchGuard Fireware OS logs to the ASIM Network Session normalized schema.

## Source Tables

This parser reads from the following tables:

| Table |
|:------|
| [Syslog](../tables/syslog.md) |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `disabled` | bool | False |

## References

- [ASIM Network Session Schema](https://aka.ms/ASimNetworkSessionDoc)
- [ASIM](https:/aka.ms/AboutASIM)

---

**Browse:**

- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

