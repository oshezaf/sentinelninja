# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Web Session ASIM parser for Microsoft Sentinel native Network Session table

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimWebSessionNative` |
| **Built-in Parser** | `_ASim_WebSession_Native` |
| **Schema** | WebSession |
| **Schema Version** | 0.2.5 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Native |
| **Parser Version** | 0.1 |
| **Last Updated** | Jan 5 2023 |
| **Unifying Parser** | [ASimWebSession](asimwebsession.md) |
| **Source File** | [Parsers\ASimWebSession\Parsers\ASimWebSessionNative.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimWebSession/Parsers/ASimWebSessionNative.yaml) |

## Description

This ASIM parser supports normalizing the native Microsoft Sentinel Web Session table (ASimWebSessionLogs) to the ASIM WebSession normalized schema. While the native table is ASIM compliant, the parser is needed to add capabilities, such as aliases, available only at query time.

## Source Tables

This parser reads from the following tables:

| Table |
|:------|
| [ASimWebSessionLogs](../tables/asimwebsessionlogs.md) |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `disabled` | bool | False |

## References

- [ASIM Web Session Schema](https://aka.ms/ASimWebSessionDoc)
- [ASIM](https:/aka.ms/AboutASIM)

---

**Browse:**

- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

