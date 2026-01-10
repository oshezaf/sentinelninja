# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Process Create Event ASIM parser for Sysmon

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimProcessEventCreateMicrosoftSysmonWindowsEvent` |
| **Built-in Parser** | `_ASim_ProcessEvent_CreateMicrosoftSysmonWindowsEvent` |
| **Schema** | ProcessEvent |
| **Schema Version** | 0.1.4 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Sysmon |
| **Parser Version** | 0.4.1 |
| **Last Updated** | Jun 18, 2024 |
| **Unifying Parser** | [ASimProcessEvent](asimprocessevent.md) |
| **Source File** | [Parsers\ASimProcessEvent\Parsers\ASimProcessCreateMicrosoftSysmonWindowsEvent.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimProcessEvent/Parsers/ASimProcessCreateMicrosoftSysmonWindowsEvent.yaml) |

## Description

This ASIM parser supports normalizing Sysmon process create events (event 1) collected logs ingested in 'WindowsEvent' table to the ASIM Process Event normalized schema.

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

- [ASIM Process Schema](https://aka.ms/ASimProcessEventDoc)
- [ASIM](https://aka.ms/AboutASIM)

---

**Browse:**

- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

