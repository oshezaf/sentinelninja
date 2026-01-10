# <img src="../images/asim-badge.png" alt="ASIM" height="32"> DNS activity ASIM parser for Zscaler ZIA

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimDnsZscalerZIA` |
| **Built-in Parser** | `_ASim_Dns_ZscalerZIA` |
| **Schema** | Dns |
| **Schema Version** | 0.1.3 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Zscaler ZIA DNS |
| **Parser Version** | 0.6 |
| **Last Updated** | Feb 19 2023 |
| **Unifying Parser** | [ASimDns](asimdns.md) |
| **Source File** | [Parsers\ASimDns\Parsers\ASimDnsZscalerZIA.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimDns/Parsers/ASimDnsZscalerZIA.yaml) |

## Description

This ASIM parser supports normalizing Zscaler ZIA DNS logs to the ASIM Dns normalized schema.

## Source Tables

This parser reads from the following tables:

| Table |
|:------|
| [CommonSecurityLog](../tables/commonsecuritylog.md) |

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

