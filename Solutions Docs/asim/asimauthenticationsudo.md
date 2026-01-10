# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Authentication ASIM parser for Syslog sudo

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimAuthenticationSudo` |
| **Built-in Parser** | `_ASim_Authentication_Sudo` |
| **Schema** | Authentication |
| **Schema Version** | 0.1.1 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | sudo |
| **Parser Version** | 0.1.2 |
| **Last Updated** | 21 Jul 2023 |
| **Unifying Parser** | [ASimAuthentication](asimauthentication.md) |
| **Source File** | [Parsers\ASimAuthentication\Parsers\ASimAuthenticationSudo.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimAuthentication/Parsers/ASimAuthenticationSudo.yaml) |

## Description

This ASIM parser supports normalizing Syslog sudo sign in logs to the ASIM Authentication schema.

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

- [ASIM Authentication Schema](https://aka.ms/ASimAuthenticationDoc)
- [ASIM](https:/aka.ms/AboutASIM)

---

**Browse:**

- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

