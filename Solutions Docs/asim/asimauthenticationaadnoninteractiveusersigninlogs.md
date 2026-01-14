# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Authentication ASIM parser for Microsoft Entra ID non-interactive sign-in logs

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimAuthenticationAADNonInteractiveUserSignInLogs` |
| **Built-in Parser** | `_ASim_Authentication_AADNonInteractiveUserSignInLogs` |
| **Schema** | Authentication |
| **Schema Version** | 0.1.0 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Microsoft Entra ID |
| **Parser Version** | 0.2.2 |
| **Last Updated** | Mar 19 2024 |
| **Unifying Parser** | [ASimAuthentication](asimauthentication.md) |
| **Source File** | [Parsers\ASimAuthentication\Parsers\ASimAuthenticationAADNonInteractive.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimAuthentication/Parsers/ASimAuthenticationAADNonInteractive.yaml) |

## Description

This ASIM parser supports normalizing Microsoft Entra ID Non Interactive sign in logs, stored in the AADNonInteractiveUserSignInLogs table, to the ASIM Authentication schema.

## Source Tables

This parser reads from the following tables:

| Table |
|:------|
| [AADNonInteractiveUserSignInLogs](../tables/aadnoninteractiveusersigninlogs.md) |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `disabled` | bool | False |

## References

- [Using functions](https://docs.microsoft.com/azure/azure-monitor/log-query/function)
- [Authentication schema documentation](https://aka.ms/ASimAuthenticationDoc)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to ASIM Index](../asim/asim-index.md)

