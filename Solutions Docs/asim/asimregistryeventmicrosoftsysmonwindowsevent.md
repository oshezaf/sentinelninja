# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Registry Event ASIM parser for Microsoft Sysmon (registry creation event)

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimRegistryEventMicrosoftSysmonWindowsEvent` |
| **Built-in Parser** | `_ASim_RegistryEvent_MicrosoftSysmonWindowsEvent` |
| **Schema** | RegistryEvent |
| **Schema Version** | 0.1.2 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Microsoft Sysmon |
| **Parser Version** | 0.3.1 |
| **Last Updated** | Jun 18, 2024 |
| **Unifying Parser** | [ASimRegistry](asimregistry.md) |
| **Source File** | [Parsers\ASimRegistryEvent\Parsers\ASimRegistryEventMicrosoftSysmonWindowsEvent.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimRegistryEvent/Parsers/ASimRegistryEventMicrosoftSysmonWindowsEvent.yaml) |

## Description

This ASIM parser supports normalizing Microsoft Sysmon events (event number 12, 13, 14) logs ingested in 'WindowsEvent' table to the ASIM Registry Event normalized schema.

## Source Tables

This parser reads from the following tables:

| Table |
|:------|
| [WindowsEvent](../tables/windowsevent.md) |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `disabled` | bool | False |

## References

- [ASIM Registry Schema](https://aka.ms/ASimRegistryEventDoc)
- [ASIM](https://aka.ms/AboutASIM)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to ASIM Index](../asim/asim-index.md)

