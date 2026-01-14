# <img src="../images/asim-badge.png" alt="ASIM" height="32"> File Event ASIM parser for Microsoft Windows Events

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimFileEventMicrosoftSecurityEvents` |
| **Built-in Parser** | `_ASim_FileEvent_MicrosoftSecurityEvents` |
| **Schema** | FileEvent |
| **Schema Version** | 0.2.1 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Microsoft Windows Events |
| **Parser Version** | 0.2.0 |
| **Last Updated** | Jul 23, 2024 |
| **Unifying Parser** | [ASimFileEvent](asimfileevent.md) |
| **Source File** | [Parsers\ASimFileEvent\Parsers\ASimFileEventMicrosoftSecurityEvents.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimFileEvent/Parsers/ASimFileEventMicrosoftSecurityEvents.yaml) |

## Description

This ASIM parser supports normalizing Microsoft Windows Events (WindowsEvent and SecurityEvent tables) logs ingested in 'SecurityEvent' table to the ASIM File Event normalized schema. Event IDs which are parsed as part of this parser: 4663

## Source Tables

This parser reads from the following tables:

| Table |
|:------|
| [SecurityEvent](../tables/securityevent.md) |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `disabled` | bool | False |

## References

- [ASIM File Event Schema](https://aka.ms/ASimFileEventDoc)
- [ASIM](https://aka.ms/AboutASIM)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to ASIM Index](../asim/asim-index.md)

