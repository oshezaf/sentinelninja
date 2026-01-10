# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Process Create Event ASIM parser for Sysmon

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `vimProcessEventCreateMicrosoftSysmonWindowsEvent` |
| **Built-in Parser** | `_Im_ProcessEvent_CreateMicrosoftSysmonWindowsEvent` |
| **Schema** | ProcessEvent |
| **Schema Version** | 0.1.0 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Sysmon |
| **Parser Version** | 0.5.1 |
| **Last Updated** | June 3, 2024 |
| **Unifying Parser** | [imProcessEvent](improcessevent.md) |
| **Source File** | [Parsers\ASimProcessEvent\Parsers\vimProcessCreateMicrosoftSysmonWidowsEvent.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimProcessEvent/Parsers/vimProcessCreateMicrosoftSysmonWidowsEvent.yaml) |

## Description

This ASIM parser supports normalizing Sysmon process create events (event 1) collected using the Event or WEF (WindowsEvent table) connectors logs ingested in 'WindowsEvent' table to the ASIM Process Event normalized schema.

## Source Tables

This parser reads from the following tables:

| Table |
|:------|
| [WindowsEvent](../tables/windowsevent.md) |

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
| `targetusername_has` | string | * |
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

