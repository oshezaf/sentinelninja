# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Network Session  ASIM filtering parser for Microsoft Sentinel native Network Session table

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `vimNetworkSessionNative` |
| **Built-in Parser** | `_Im_NetworkSession_Native` |
| **Schema** | NetworkSession |
| **Schema Version** | 0.2.4 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Native |
| **Parser Version** | 0.3 |
| **Last Updated** | Jan 25 2023 |
| **Unifying Parser** | [imNetworkSession](imnetworksession.md) |
| **Source File** | [Parsers\ASimNetworkSession\Parsers\vimNetworkSessionNative.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimNetworkSession/Parsers/vimNetworkSessionNative.yaml) |

## Description

This ASIM parser supports filters and normalizing the native Microsoft Sentinel Network Session table (ASimNetworkSessionLogs) to the ASIM NetworkSession normalized schema. While the native table is ASIM compliant, the parser is needed to add capabilities, such as aliases, available only at query time.

## Source Tables

This parser reads from the following tables:

| Table |
|:------|
| [ASimNetworkSessionLogs](../tables/asimnetworksessionlogs.md) |

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
- [ASIM](https:/aka.ms/AboutASIM)

---

**Browse:**

- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

