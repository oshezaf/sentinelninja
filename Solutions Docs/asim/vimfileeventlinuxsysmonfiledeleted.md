# <img src="../images/asim-badge.png" alt="ASIM" height="32"> File delete activity ASIM filtering parser for Sysmon for Linux

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `vimFileEventLinuxSysmonFileDeleted` |
| **Built-in Parser** | `_Im_FileEvent_LinuxSysmonFileDeleted` |
| **Schema** | FileEvent |
| **Schema Version** | 0.1.0 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Microsoft Sysmon for Linux |
| **Parser Version** | 0.2.1 |
| **Last Updated** | Nov 17, 2023 |
| **Unifying Parser** | [imFileEvent](imfileevent.md) |
| **Source File** | [Parsers\ASimFileEvent\Parsers\vimFileEventLinuxSysmonFileDeleted.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimFileEvent/Parsers/vimFileEventLinuxSysmonFileDeleted.yaml) |

## Description

This ASIM parser supports normalizing Sysmon for Linux events 23 and 26, stored in the Syslog table, to the ASIM file activity schema file delete event.

## Source Tables

This parser reads from the following tables:

| Table |
|:------|
| [Syslog](../tables/syslog.md) |

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

- [ASIM File Schema](https://aka.ms/ASimFileEventDoc)
- [ASIM](https://aka.ms/AboutASIM)

---

**Browse:**

- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

