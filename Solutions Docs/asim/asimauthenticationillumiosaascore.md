# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Authentication ASIM parser for Illumio SaaS Core

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimAuthenticationIllumioSaaSCore` |
| **Built-in Parser** | `_ASim_Authentication_IllumioSaaSCore` |
| **Schema** | Authentication |
| **Schema Version** | 0.1.3 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Illumio |
| **Parser Version** | 0.3.0 |
| **Last Updated** | Oct 1, 2024 |
| **Unifying Parser** | [ASimAuthentication](asimauthentication.md) |
| **Source File** | [Parsers\ASimAuthentication\Parsers\ASimAuthenticationIllumioSaaSCore.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimAuthentication/Parsers/ASimAuthenticationIllumioSaaSCore.yaml) |

## Description

This ASIM parser supports normalizing Illumio sign in logs, stored in the Illumio_Auditable_Events_CL table, to the ASIM Authentication schema.

## Source Tables

This parser reads from the following tables:

| Table |
|:------|
| [Illumio_Auditable_Events_CL](../tables/illumio-auditable-events-cl.md) |

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

