# <img src="../images/asim-badge.png" alt="ASIM" height="32"> File create Activity ASIM parser for Sysmon for Linux

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimFileEventLinuxSysmonFileCreated` |
| **Built-in Parser** | `_ASim_FileEvent_LinuxSysmonFileCreated` |
| **Schema** | FileEvent |
| **Schema Version** | 0.1.0 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Microsoft Sysmon for Linux |
| **Parser Version** | 0.2.1 |
| **Last Updated** | Nov 16, 2023 |
| **Unifying Parser** | [ASimFileEvent](asimfileevent.md) |
| **Source File** | [Parsers\ASimFileEvent\Parsers\ASimFileEventLinuxSysmonFileCreated.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimFileEvent/Parsers/ASimFileEventLinuxSysmonFileCreated.yaml) |

## Description

This ASIM parser supports normalizing Sysmon for Linux event 11, stored in the Syslog table, to the ASIM file activity schema file create event.

## Source Tables

This parser reads from the following tables:

| Table |
|:------|
| [Syslog](../tables/syslog.md) |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
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

