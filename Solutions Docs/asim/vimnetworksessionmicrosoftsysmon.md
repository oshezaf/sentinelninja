# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Network Session Event ASIM parser for Sysmon (Event 3)

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `vimNetworkSessionMicrosoftSysmon` |
| **Built-in Parser** | `_Im_NetworkSession_MicrosoftSysmon` |
| **Schema** | NetworkSession |
| **Schema Version** | 0.2.6 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Windows Sysmon |
| **Parser Version** | 0.1.1 |
| **Last Updated** | Jun 18, 2024 |
| **Unifying Parser** | [imNetworkSession](imnetworksession.md) |
| **Source File** | [Parsers\ASimNetworkSession\Parsers\vimNetworkSessionMicrosoftSysmon.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimNetworkSession/Parsers/vimNetworkSessionMicrosoftSysmon.yaml) |

## Description

This ASIM parser supports normalizing Sysmon network session events (event 3) collected using the Event or WEF (WindowsEvent table) connectors logs ingested in 'Event' table to the ASIM Process Event normalized schema.

## Source Tables

This parser reads from the following tables:

| Table |
|:------|
| [Event](../tables/event.md) |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `starttime` | datetime | datetime(null) |
| `endtime` | datetime | datetime(null) |
| `srcipaddr_has_any_prefix` | dynamic | dynamic([]) |
| `dstipaddr_has_any_prefix` | dynamic | dynamic([]) |
| `ipaddr_has_any_prefix` | dynamic | dynamic([]) |
| `dstportnumber` | int | int(null) |
| `dvcaction` | dynamic | dynamic([]) |
| `hostname_has_any` | dynamic | dynamic([]) |
| `eventresult` | string | * |
| `disabled` | bool | False |

## References

- [ASIM Network Session Schema](https://aka.ms/ASimNetworkSessionDoc)
- [ASIM](https://aka.ms/AboutASIM)

---

**Browse:**

- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

