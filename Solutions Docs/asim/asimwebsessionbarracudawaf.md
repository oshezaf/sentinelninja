# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Web Session ASIM parser for Barracuda WAF

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to ASIM Index](asim-index.md)

---

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimWebSessionBarracudaWAF` |
| **Built-in Parser** | `_ASim_WebSession_BarracudaWAF` |
| **Schema** | WebSession |
| **Schema Version** | 0.2.6 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Barracuda WAF |
| **Parser Version** | 0.2.2 |
| **Last Updated** | Jun 26, 2025 |
| **Unifying Parser** | [ASimWebSession](asimwebsession.md) |
| **Source File** | [Parsers\ASimWebSession\Parsers\ASimWebSessionBarracudaWAF.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimWebSession/Parsers/ASimWebSessionBarracudaWAF.yaml) |

## Description

This ASIM parser supports normalizing the Barracuda WAF logs ingested in 'barracuda_CL' table to the ASIM Web Session normalized schema.

## Source Tables

This parser reads from the following tables:

| Table |
|:------|
| [barracuda_CL](../tables/barracuda-cl.md) |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `disabled` | bool | False |

## References

- [ASIM Web Session Schema](https://aka.ms/ASimWebSessionDoc)
- [ASIM](https://aka.ms/AboutASIM)
- [Logs type Description in Barracuda WAF](https://campus.barracuda.com/product/webapplicationfirewall/doc/78810008/types-of-logs/)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to ASIM Index](asim-index.md)

