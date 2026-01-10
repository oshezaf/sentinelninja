# <img src="../images/asim-badge.png" alt="ASIM" height="32"> DNS activity ASIM filtering parser for Microsoft Sentinel native DNS table

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `vimDnsNative` |
| **Built-in Parser** | `_Im_Dns_Native` |
| **Schema** | Dns |
| **Schema Version** | 0.1.3 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Native |
| **Parser Version** | 0.6.1 |
| **Last Updated** | March 01 2023 |
| **Unifying Parser** | [imDns](imdns.md) |
| **Source File** | [Parsers\ASimDns\Parsers\vimDnsNative.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimDns/Parsers/vimDnsNative.yaml) |

## Description

This ASIM parser supports filtering and normalizing the native Microsoft Sentinel DNS table (ASimDnsActivityLogs) to the ASIM DNS activity normalized schema. While the native table is ASIM compliant, the parser is needed to add capabilities, such as aliases, available only at query time.

## Source Tables

This parser reads from the following tables:

| Table |
|:------|
| [ASimDnsActivityLogs](../tables/asimdnsactivitylogs.md) |

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

