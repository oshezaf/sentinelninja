# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Network Session ASIM parser for Barracuda WAF

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimNetworkSessionBarracudaCEF` |
| **Built-in Parser** | `_ASim_NetworkSession_BarracudaCEF` |
| **Schema** | NetworkSession |
| **Schema Version** | 0.2.6 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Barracuda WAF |
| **Parser Version** | 0.2.1 |
| **Last Updated** | Jul 17, 2024 |
| **Unifying Parser** | [ASimNetworkSession](asimnetworksession.md) |
| **Source File** | [Parsers\ASimNetworkSession\Parsers\ASimNetworkSessionBarracudaCEF.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimNetworkSession/Parsers/ASimNetworkSessionBarracudaCEF.yaml) |

## Description

This ASIM parser supports normalizing Barracuda WAF logs ingested in 'CommonSecurityLog' table to the ASIM Web Session normalized schema.

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

- [ASIM Network Session Schema](https://aka.ms/ASimNetworkSessionDoc)
- [ASIM](https://aka.ms/AboutASIM)
- [Logs type Description in Barracuda WAF](https://campus.barracuda.com/product/webapplicationfirewall/doc/78810008/types-of-logs/)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to ASIM Index](../asim/asim-index.md)

