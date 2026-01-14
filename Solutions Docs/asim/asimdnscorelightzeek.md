# <img src="../images/asim-badge.png" alt="ASIM" height="32"> DNS activity ASIM parser for Corelight Zeek

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to ASIM Index](asim-index.md)

---

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimDnsCorelightZeek` |
| **Built-in Parser** | `_ASim_Dns_CorelightZeek` |
| **Schema** | Dns |
| **Schema Version** | 0.1.4 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Corelight Zeek |
| **Parser Version** | 0.5 |
| **Last Updated** | Dec 11 2022 |
| **Unifying Parser** | [ASimDns](asimdns.md) |
| **Source File** | [Parsers\ASimDns\Parsers\ASimDnsCorelightZeek.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimDns/Parsers/ASimDnsCorelightZeek.yaml) |

## Description

This ASIM parser supports normalizing Corelight Zeek DNS logs to the ASIM Dns normalized schema.

## Source Tables

This parser reads from the following tables:

| Table |
|:------|
| [Corelight_CL](../tables/corelight-cl.md) |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `disabled` | bool | False |

## References

- [ASIM DNS Schema](https://aka.ms/ASimDnsDoc)
- [ASIM](https://aka.ms/AboutASIM)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to ASIM Index](asim-index.md)

