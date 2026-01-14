# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Authentication ASIM parser for Windows Security Events

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to ASIM Index](asim-index.md)

---

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimAuthenticationMicrosoftWindowsEvent` |
| **Built-in Parser** | `_ASim_Authentication_MicrosoftWindowsEvent` |
| **Schema** | Authentication |
| **Schema Version** | 0.1.3 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Windows Security Events |
| **Parser Version** | 0.2.1 |
| **Last Updated** | Oct 15, 2024 |
| **Unifying Parser** | [ASimAuthentication](asimauthentication.md) |
| **Source File** | [Parsers\ASimAuthentication\Parsers\ASimAuthenticationMicrosoftWindowsEvent.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimAuthentication/Parsers/ASimAuthenticationMicrosoftWindowsEvent.yaml) |

## Description

This ASIM parser supports normalizing Windows Authentication events (4624, 4625, 4634, and 4647), collected either by the Log Analytics Agent or the Azure Monitor Agent, into either the WindowsEvent (WEF) or SecurityEvent tables, to the ASIM Authentication schema.

## Source Tables

This parser reads from the following tables:

| Table |
|:------|
| [SecurityEvent](../tables/securityevent.md) |
| [WindowsEvent](../tables/windowsevent.md) |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `disabled` | bool | False |

## References

- [ASIM Authentication Schema](https://aka.ms/ASimAuthenticationDoc)
- [ASIM](https://aka.ms/AboutASIM)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to ASIM Index](asim-index.md)

