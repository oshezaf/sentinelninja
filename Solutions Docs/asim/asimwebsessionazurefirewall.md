# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Web Session ASIM parser for Azure Firewall

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimWebSessionAzureFirewall` |
| **Built-in Parser** | `_ASim_WebSession_AzureFirewall` |
| **Schema** | WebSession |
| **Schema Version** | 0.2.6 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Azure Firewall |
| **Parser Version** | 0.1.0 |
| **Last Updated** | Dec 3, 2025 |
| **Unifying Parser** | [ASimWebSession](asimwebsession.md) |
| **Source File** | [Parsers\ASimWebSession\Parsers\ASimWebSessionAzureFirewall.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimWebSession/Parsers/ASimWebSessionAzureFirewall.yaml) |

## Description

This ASIM parser supports normalizing Azure Firewall logs to the ASIM Web Session normalized schema.

## Source Tables

This parser reads from the following tables:

| Table |
|:------|
| [AZFWApplicationRule](../tables/azfwapplicationrule.md) |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `disabled` | bool | False |

## References

- [ASIM Web Session Schema](https://aka.ms/ASimWebSessionDoc)
- [ASIM](https://aka.ms/AboutASIM)

---

**Browse:**

- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

