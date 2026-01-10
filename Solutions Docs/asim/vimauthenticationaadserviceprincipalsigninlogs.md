# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Authentication ASIM filtering parser for Microsoft Entra ID service principal sign-in logs

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `vimAuthenticationAADServicePrincipalSignInLogs` |
| **Built-in Parser** | `_Im_Authentication_AADServicePrincipalSignInLogs` |
| **Schema** | Authentication |
| **Schema Version** | 0.1.3 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Microsoft Entra ID |
| **Parser Version** | 0.2.2 |
| **Last Updated** | Mar 20, 2024 |
| **Unifying Parser** | [imAuthentication](imauthentication.md) |
| **Source File** | [Parsers\ASimAuthentication\Parsers\vimAuthenticationAADServicePrincipalSignInLogs.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimAuthentication/Parsers/vimAuthenticationAADServicePrincipalSignInLogs.yaml) |

## Description

This ASIM parser supports filtering and normalizing Azure Active Directory Service Principal sign in logs, stored in the AADServicePrincipalSignInLogs table, to the ASIM Authentication schema.

## Source Tables

This parser reads from the following tables:

| Table |
|:------|
| [AADServicePrincipalSignInLogs](../tables/aadserviceprincipalsigninlogs.md) |

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

