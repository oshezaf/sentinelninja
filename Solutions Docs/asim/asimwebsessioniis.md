# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Web Session ASIM parser for Windows IIS logs

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimWebSessionIIS` |
| **Built-in Parser** | `_ASim_WebSession_IIS` |
| **Schema** | WebSession |
| **Schema Version** | 0.2.6 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Internet Information Services (IIS) |
| **Parser Version** | 0.2 |
| **Last Updated** | Apr 19, 2023 |
| **Unifying Parser** | [ASimWebSession](asimwebsession.md) |
| **Source File** | [Parsers\ASimWebSession\Parsers\ASimWebSessionIIS.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimWebSession/Parsers/ASimWebSessionIIS.yaml) |

## Description

This ASIM parser supports normalizing IIS logs produced to the ASIM Web Session normalized schema.

## Source Tables

This parser reads from the following tables:

| Table |
|:------|
| [W3CIISLog](../tables/w3ciislog.md) |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `disabled` | bool | False |

## References

- [ASIM Web Session Schema](https://aka.ms/ASimWebSessionDoc)
- [ASIM](https:/aka.ms/AboutASIM)
- [IIS HTTP Status Code overview](https://learn.microsoft.com/en-us/troubleshoot/developer/webapps/iis/www-administration-management/http-status-code)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to ASIM Index](../asim/asim-index.md)

