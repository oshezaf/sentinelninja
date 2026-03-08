# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Authentication ASIM parser for Microsoft Entra ID non-interactive sign-in logs

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to ASIM Index](asim-index.md)

---

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimAuthenticationAADNonInteractiveUserSignInLogs` |
| **Built-in Parser** | `_ASim_Authentication_AADNonInteractiveUserSignInLogs` |
| **Schema** | Authentication |
| **Schema Version** | 0.1.0 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Microsoft Entra ID |
| **Parser Version** | 0.2.3 ([version history](https://github.com/Azure/Azure-Sentinel/tree/master/Parsers/ASimAuthentication/CHANGELOG/ASimAuthenticationAADNonInteractiveUserSignInLogs.md)) |
| **Last Updated** | Feb 04, 2026 |
| **Unifying Parser** | [ASimAuthentication](asimauthentication.md) |
| **Source File** | [Parsers\ASimAuthentication\Parsers\ASimAuthenticationAADNonInteractive.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimAuthentication/Parsers/ASimAuthenticationAADNonInteractive.yaml) |

## Description

This ASIM parser supports normalizing Microsoft Entra ID Non Interactive sign in logs, stored in the AADNonInteractiveUserSignInLogs table, to the ASIM Authentication schema.

## Source Tables

This parser reads from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`AADNonInteractiveUserSignInLogs`](../tables/aadnoninteractiveusersigninlogs.md) | ✓ | ✗ | ✓ |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `disabled` | bool | False |

## Associated Connectors

The following connectors provide data for this parser:

| Connector | Solution |
|:----------|:---------|
| [AzureActiveDirectory](../connectors/azureactivedirectory.md) | [Microsoft Entra ID](../solutions/microsoft-entra-id.md) |

**Solutions:** [Microsoft Entra ID](../solutions/microsoft-entra-id.md)

## References

- [Using functions](https://docs.microsoft.com/azure/azure-monitor/log-query/function)
- [Authentication schema documentation](https://aka.ms/ASimAuthenticationDoc)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to ASIM Index](asim-index.md)

