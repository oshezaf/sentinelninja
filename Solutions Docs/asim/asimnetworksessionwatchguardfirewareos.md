# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Network Session ASIM parser for WatchGuard Fireware OS

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

---

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimNetworkSessionWatchGuardFirewareOS` |
| **Built-in Parser** | `_ASim_NetworkSession_WatchGuardFirewareOS` |
| **Schema** | NetworkSession |
| **Schema Version** | 0.2.4 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | WatchGuard Fireware OS |
| **Parser Version** | 0.1.4 ([version history](https://github.com/Azure/Azure-Sentinel/tree/master/Parsers/ASimNetworkSession/CHANGELOG/ASimNetworkSessionWatchGuardFirewareOS.md)) |
| **Last Updated** | Aug 29th, 2022 |
| **Unifying Parser** | [ASimNetworkSession](asimnetworksession.md) |
| **Source File** | [Parsers\ASimNetworkSession\Parsers\ASimNetworkSessionWatchGuardFirewareOS.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimNetworkSession/Parsers/ASimNetworkSessionWatchGuardFirewareOS.yaml) |

## Description

This ASIM parser supports normalizing WatchGuard Fireware OS logs to the ASIM Network Session normalized schema.

## Source Tables

This parser reads from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`Syslog`](../tables/syslog.md) | `SyslogMessage !has "3000-0151"`<br>`SyslogMessage !has "icmp"`<br>`SyslogMessage !has "igmp"`<br>`SyslogMessage !has "msg="`<br>`SyslogMessage has "3000-0151"`<br>`SyslogMessage has "icmp"`<br>`SyslogMessage has "igmp"`<br>`SyslogMessage has_any "msg_id="` | ✓ | ✓ | ? |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `disabled` | bool | False |

## Associated Connectors

The following connectors provide data for this parser:

| Connector | Solution |
|:----------|:---------|
| [SyslogAma](../connectors/syslogama.md) | [Syslog](../solutions/syslog.md) |

**Solutions:** [Syslog](../solutions/syslog.md)

## References

- [ASIM Network Session Schema](https://aka.ms/ASimNetworkSessionDoc)
- [ASIM](https:/aka.ms/AboutASIM)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

