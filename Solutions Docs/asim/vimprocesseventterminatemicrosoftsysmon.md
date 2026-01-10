# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Process Terminate Event ASIM parser for Microsoft Windows Security Events

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `vimProcessEventTerminateMicrosoftSysmon` |
| **Built-in Parser** | `_Im_ProcessTerminate_MicrosoftSysmon` |
| **Schema** | ProcessEvent |
| **Schema Version** | 0.1.4 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Microsoft Windows Events Sysmon |
| **Parser Version** | 0.4.1 |
| **Last Updated** | Jun 18, 2024 |
| **Unifying Parser** | [imProcessEvent](improcessevent.md), [imProcessTerminate](improcessterminate.md) |
| **Source File** | [Parsers\ASimProcessEvent\Parsers\vimProcessTerminateMicrosoftSysmon.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimProcessEvent/Parsers/vimProcessTerminateMicrosoftSysmon.yaml) |

## Description

This ASIM parser supports normalizing Microsoft Windows Sysmon process terminate events (event 5) collected using the Event or WEF (WindowsEvent table) connectors logs ingested in 'Event' table to the ASIM Process Event normalized schema.

## Source Tables

This parser reads from the following tables:

| Table |
|:------|
| [Event](../tables/event.md) |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `starttime` | datetime | datetime(null) |
| `endtime` | datetime | datetime(null) |
| `commandline_has_any` | dynamic | dynamic([]) |
| `commandline_has_all` | dynamic | dynamic([]) |
| `commandline_has_any_ip_prefix` | dynamic | dynamic([]) |
| `actingprocess_has_any` | dynamic | dynamic([]) |
| `targetprocess_has_any` | dynamic | dynamic([]) |
| `parentprocess_has_any` | dynamic | dynamic([]) |
| `actorusername_has` | string | * |
| `dvcipaddr_has_any_prefix` | dynamic | dynamic([]) |
| `dvchostname_has_any` | dynamic | dynamic([]) |
| `eventtype` | string | * |
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

