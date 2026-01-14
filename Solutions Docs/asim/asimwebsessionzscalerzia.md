# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Web Session ASIM parser for Zscaler ZIA

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimWebSessionZscalerZIA` |
| **Built-in Parser** | `_ASim_WebSession_ZscalerZIA` |
| **Schema** | WebSession |
| **Schema Version** | 0.2.6 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Zscaler ZIA |
| **Parser Version** | 0.4.1 |
| **Last Updated** | Nov 3, 2025 |
| **Unifying Parser** | [ASimWebSession](asimwebsession.md) |
| **Source File** | [Parsers\ASimWebSession\Parsers\ASimWebSessionzScalerZIA.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimWebSession/Parsers/ASimWebSessionzScalerZIA.yaml) |

## Description

This ASIM parser supports normalizing Zscaler ZIA proxy logs produced by the Microsoft Sentinel Zscaler connector to the ASIM Web Session normalized schema.

## Source Tables

This parser reads from the following tables:

| Table |
|:------|
| [CommonSecurityLog](../tables/commonsecuritylog.md) |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `disabled` | bool | False |

## References

- [ASIM Web Session Schema](https://aka.ms/ASimWebSessionDoc)
- [ASIM](https://aka.ms/AboutASIM)
- [Zscaler Connector](https://docs.microsoft.com/azure/sentinel/data-connectors-reference#zscaler)
- [Zscaler Sentinel deployment guide](https://help.zscaler.com/zia/zscaler-microsoft-azure-sentinel-deployment-guide)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to ASIM Index](../asim/asim-index.md)

