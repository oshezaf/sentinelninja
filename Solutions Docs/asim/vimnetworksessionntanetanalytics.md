# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Network Session ASIM filtering parser for NTANetAnalytics

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `vimNetworkSessionNTANetAnalytics` |
| **Built-in Parser** | `_Im_NetworkSession_NTANetAnalytics` |
| **Schema** | NetworkSession |
| **Schema Version** | 0.2.6 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Azure NTANetAnalytics |
| **Parser Version** | 0.1.0 |
| **Last Updated** | Sep 25, 2025 |
| **Unifying Parser** | [imNetworkSession](imnetworksession.md) |
| **Source File** | [Parsers\ASimNetworkSession\Parsers\vimNetworkSessionNTANetAnalytics.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimNetworkSession/Parsers/vimNetworkSessionNTANetAnalytics.yaml) |

## Description

This ASIM parser supports filters and normalizing the Traffic Analytics records for Flowlog enriched data to the ASIM NetworkSession normalized schema.

## Source Tables

This parser reads from the following tables:

| Table |
|:------|
| [NTANetAnalytics](../tables/ntanetanalytics.md) |

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

---

**Browse:**

- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

