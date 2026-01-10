# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Authentication ASIM filtering parser for Okta

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `vimAuthenticationOktaV2` |
| **Built-in Parser** | `_Im_Authentication_OktaV2` |
| **Schema** | Authentication |
| **Schema Version** | 0.1.3 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Okta |
| **Parser Version** | 0.3.1 |
| **Last Updated** | May 20, 2024 |
| **Unifying Parser** | [imAuthentication](imauthentication.md) |
| **Source File** | [Parsers\ASimAuthentication\Parsers\vimAuthenticationOktaV2.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimAuthentication/Parsers/vimAuthenticationOktaV2.yaml) |

## Description

This ASIM parser supports normalizing Okta sign in logs, stored in the OktaV2_CL table, to the ASIM Authentication schema.

## Source Tables

This parser reads from the following tables:

| Table |
|:------|
| [OktaV2_CL](../tables/oktav2-cl.md) |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `starttime` | datetime | datetime(null) |
| `endtime` | datetime | datetime(null) |
| `username_has_any` | dynamic | dynamic([]) |
| `targetappname_has_any` | dynamic | dynamic([]) |
| `srcipaddr_has_any_prefix` | dynamic | dynamic([]) |
| `srchostname_has_any` | dynamic | dynamic([]) |
| `eventtype_in` | dynamic | dynamic([]) |
| `eventresultdetails_in` | dynamic | dynamic([]) |
| `eventresult` | string | * |
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

