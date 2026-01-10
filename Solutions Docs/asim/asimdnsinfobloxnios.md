# <img src="../images/asim-badge.png" alt="ASIM" height="32"> DNS activity ASIM parser for Infoblox NIOS

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimDnsInfobloxNIOS` |
| **Built-in Parser** | `_ASim_Dns_InfobloxNIOS` |
| **Schema** | Dns |
| **Schema Version** | 0.1.3 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Infoblox NIOS |
| **Parser Version** | 0.6.1 |
| **Last Updated** | Dec 11 2022 |
| **Unifying Parser** | [ASimDns](asimdns.md) |
| **Source File** | [Parsers\ASimDns\Parsers\ASimDnsInfobloxNIOS.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimDns/Parsers/ASimDnsInfobloxNIOS.yaml) |

## Description

This ASIM parser supports normalizing Infoblox NIOS DNS logs to the ASIM Dns normalized schema.

## Source Tables

This parser reads from the following tables:

| Table |
|:------|
| [Syslog](../tables/syslog.md) |

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

