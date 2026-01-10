# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Process Terminate Event ASIM parser for Microsoft Windows Security Events

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimProcessEventTerminateMicrosoftSysmonWindowsEvent` |
| **Built-in Parser** | `_ASim_ProcessEvent_TerminateMicrosoftSysmonWindowsEvent` |
| **Schema** | ProcessEvent |
| **Schema Version** | 0.1.4 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Microsoft Windows Events Sysmon |
| **Parser Version** | 0.4.1 |
| **Last Updated** | Jun 18, 2024 |
| **Unifying Parser** | [ASimProcessEvent](asimprocessevent.md) |
| **Source File** | [Parsers\ASimProcessEvent\Parsers\ASimProcessTerminateMicrosoftSysmonWindowsEvent.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimProcessEvent/Parsers/ASimProcessTerminateMicrosoftSysmonWindowsEvent.yaml) |

## Description

This ASIM parser supports normalizing Microsoft Windows Sysmon process terminate events (event 5) collected using the Event or WEF (WindowsEvent table) connectors logs ingested in 'WindowsEvent' table to the ASIM Process Event normalized schema.

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

