# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Authentication ASIM parser for Microsoft Entra ID managed identity sign-in logs

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimAuthenticationAADManagedIdentitySignInLogs` |
| **Built-in Parser** | `_ASim_Authentication_AADManagedIdentitySignInLogs` |
| **Schema** | Authentication |
| **Schema Version** | 0.1.0' |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Microsoft Entra ID |
| **Parser Version** | 0.2.2 |
| **Last Updated** | Mar 20 2024 |
| **Unifying Parser** | [ASimAuthentication](asimauthentication.md) |
| **Source File** | [Parsers\ASimAuthentication\Parsers\ASimAuthenticationAADManagedIdentity.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimAuthentication/Parsers/ASimAuthenticationAADManagedIdentity.yaml) |

## Description

This ASIM parser supports normalizing Microsoft Entra ID Managed Identity sign in logs, stored in the  AADManagedIdentitySignInLogs table, to the ASIM Authentication schema.ParserName: ASimAuthenticationAADManagedIdentitySignInLogs

## Source Tables

This parser reads from the following tables:

| Table |
|:------|
| [AADManagedIdentitySignInLogs](../tables/aadmanagedidentitysigninlogs.md) |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `disabled` | bool | False |

## References

- [ASIM Authentication Schema](https://aka.ms/ASimAuthenticationDoc)
- [ASIM](https:/aka.ms/AboutASIM)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to ASIM Index](../asim/asim-index.md)

