# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Authentication ASIM parser for Microsoft Entra ID interactive sign-in logs

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimAuthenticationSigninLogs` |
| **Built-in Parser** | `_ASim_Authentication_SigninLogs` |
| **Schema** | Authentication |
| **Schema Version** | 0.1.0 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Microsoft Entra ID |
| **Parser Version** | 0.3.2 |
| **Last Updated** | 19 Mar 2024 |
| **Unifying Parser** | [ASimAuthentication](asimauthentication.md) |
| **Source File** | [Parsers\ASimAuthentication\Parsers\ASimAuthenticationAADSigninLogs.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimAuthentication/Parsers/ASimAuthenticationAADSigninLogs.yaml) |

## Description

This ASIM parser supports normalizing Microsoft Entra ID Interactive sign in logs, stored in the  SigninLogs table, to the ASIM Authentication schema.

## Source Tables

This parser reads from the following tables:

| Table |
|:------|
| [SigninLogs](../tables/signinlogs.md) |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `disabled` | bool | False |

## References

- [Using functions](https://docs.microsoft.com/azure/azure-monitor/log-query/function)
- [Authentication schema documentation](https://aka.ms/ASimAuthenticationDoc)

---

**Browse:**

- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

