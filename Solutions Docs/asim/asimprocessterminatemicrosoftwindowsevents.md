# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Process Terminate Event ASIM parser for WEF Security Events

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimProcessTerminateMicrosoftWindowsEvents` |
| **Built-in Parser** | `_ASim_ProcessEvent_TerminateMicrosoftWindowsEvents` |
| **Schema** | ProcessEvent |
| **Schema Version** | 0.1.0 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Security Events |
| **Parser Version** | 0.2 |
| **Last Updated** | May 1st 2023 |
| **Unifying Parser** | [ASimProcessEvent](asimprocessevent.md), [ASimProcessEventTerminate](asimprocesseventterminate.md) |
| **Source File** | [Parsers\ASimProcessEvent\Parsers\ASimProcessTerminateMicrosoftWindowsEvents.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimProcessEvent/Parsers/ASimProcessTerminateMicrosoftWindowsEvents.yaml) |

## Description

This ASIM parser supports normalizing Windows process terminate events (event 4689) collected using the WEF connector (WindowsEvent table) to the ASIM Process Event normalized schema.

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

