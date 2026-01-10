# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Network Session ASIM parser for NTANetAnalytics

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimNetworkSessionNTANetAnalytics` |
| **Built-in Parser** | `_ASim_NetworkSession_NTANetAnalytics` |
| **Schema** | NetworkSession |
| **Schema Version** | 0.2.6 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Azure NTANetAnalytics |
| **Parser Version** | 0.1.0 |
| **Last Updated** | Sep 25, 2025 |
| **Unifying Parser** | [ASimNetworkSession](asimnetworksession.md) |
| **Source File** | [Parsers\ASimNetworkSession\Parsers\ASimNetworkSessionNTANetAnalytics.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimNetworkSession/Parsers/ASimNetworkSessionNTANetAnalytics.yaml) |

## Description

This ASIM parser supports normalizing the Traffic Analytics records for Flowlog enriched data to the ASIM NetworkSession normalized schema.

## Source Tables

This parser reads from the following tables:

| Table |
|:------|
| [NTANetAnalytics](../tables/ntanetanalytics.md) |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
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

