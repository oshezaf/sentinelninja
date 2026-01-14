# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Network Session ASIM parser for Check Point Firewall

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimNetworkSessionCheckPointFirewall` |
| **Built-in Parser** | `_ASim_NetworkSession_CheckPointFirewall` |
| **Schema** | NetworkSession |
| **Schema Version** | 0.2.6 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | CheckPointFirewall |
| **Parser Version** | 1.2.0 |
| **Last Updated** | Nov 26, 2025 |
| **Unifying Parser** | [ASimNetworkSession](asimnetworksession.md) |
| **Source File** | [Parsers\ASimNetworkSession\Parsers\ASimNetworkSessionCheckPointFirewall.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimNetworkSession/Parsers/ASimNetworkSessionCheckPointFirewall.yaml) |

## Description

This ASIM parser supports normalizing Check Point VPN-1 & Firewall-1 logs  coming from CEF  Data Connector to the ASIM Network Session normalized schema.

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
- [Field Description in Check Point Logs](https://supportcenter.checkpoint.com/supportcenter/portal?eventSubmit_doGoviewsolutiondetails=&solutionid=sk144192)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to ASIM Index](../asim/asim-index.md)

