# <img src="../images/asim-badge.png" alt="ASIM" height="32"> DNS activity ASIM parser for Cisco Umbrella

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimDnsCiscoUmbrella` |
| **Built-in Parser** | `_ASim_Dns_CiscoUmbrella` |
| **Schema** | Dns |
| **Schema Version** | 0.1.3 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Cisco Umbrella |
| **Parser Version** | 0.3 |
| **Last Updated** | Jan 17 2022 |
| **Unifying Parser** | [ASimDns](asimdns.md) |
| **Source File** | [Parsers\ASimDns\Parsers\ASimDnsCiscoUmbrella.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimDns/Parsers/ASimDnsCiscoUmbrella.yaml) |

## Description

This ASIM parser supports normalizing Cisco Umbrella DNS logs to the ASIM Dns normalized schema.

## Source Tables

This parser reads from the following tables:

| Table |
|:------|
| [Cisco_Umbrella_dns_CL](../tables/cisco-umbrella-dns-cl.md) |

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

