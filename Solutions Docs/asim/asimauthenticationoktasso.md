# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Authentication ASIM parser for Okta

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimAuthenticationOktaSSO` |
| **Built-in Parser** | `_ASim_Authentication_OktaSSO` |
| **Schema** | Authentication |
| **Schema Version** | 0.1.3 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Okta |
| **Parser Version** | 0.3.0 |
| **Last Updated** | May 20, 2024 |
| **Unifying Parser** | [ASimAuthentication](asimauthentication.md) |
| **Source File** | [Parsers\ASimAuthentication\Parsers\ASimAuthenticationOktaOSS.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimAuthentication/Parsers/ASimAuthenticationOktaOSS.yaml) |

## Description

This ASIM parser supports normalizing Okta sign in logs, stored in the Okta_CL table, to the ASIM Authentication schema.

## Source Tables

This parser reads from the following tables:

| Table |
|:------|
| [Okta_CL](../tables/okta-cl.md) |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `disabled` | bool | False |

## References

- [ASIM Authentication Schema](https://aka.ms/ASimAuthenticationDoc)
- [ASIM](https://aka.ms/AboutASIM)

---

**Browse:**

- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

