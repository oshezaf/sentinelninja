# <img src="../images/asim-badge.png" alt="ASIM" height="32"> File event ASIM filtering parser for Windows Sysmon

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `vimFileEventMicrosoftSysmonWindowsEvent` |
| **Built-in Parser** | `_Im_FileEvent_MicrosoftSysmonWindowsEvent` |
| **Schema** | FileEvent |
| **Schema Version** | 0.2.1 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Windows Sysmon |
| **Parser Version** | 0.5.1 |
| **Last Updated** | Jul 19, 2024 |
| **Unifying Parser** | [imFileEvent](imfileevent.md) |
| **Source File** | [Parsers\ASimFileEvent\Parsers\vimFileEventMicrosoftSysmonWindowsEvent.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimFileEvent/Parsers/vimFileEventMicrosoftSysmonWindowsEvent.yaml) |

## Description

This ASIM parser supports normalizing Sysmon logs ingested in 'WindowsEvent' table to the ASIM file event schema.

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
| `eventtype_in` | dynamic | dynamic([]) |
| `srcipaddr_has_any_prefix` | dynamic | dynamic([]) |
| `actorusername_has_any` | dynamic | dynamic([]) |
| `targetfilepath_has_any` | dynamic | dynamic([]) |
| `srcfilepath_has_any` | dynamic | dynamic([]) |
| `hashes_has_any` | dynamic | dynamic([]) |
| `dvchostname_has_any` | dynamic | dynamic([]) |
| `disabled` | bool | False |

## References

- [ASIM File Event Schema](https://aka.ms/ASimFileEventDoc)
- [ASIM](https://aka.ms/AboutASIM)

---

**Browse:**

- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

