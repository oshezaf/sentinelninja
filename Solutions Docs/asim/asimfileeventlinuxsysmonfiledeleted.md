# <img src="../images/asim-badge.png" alt="ASIM" height="32"> File delete activity ASIM parser for Sysmon for Linux

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to ASIM Index](asim-index.md)

---

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimFileEventLinuxSysmonFileDeleted` |
| **Built-in Parser** | `_ASim_FileEvent_LinuxSysmonFileDeleted` |
| **Schema** | FileEvent |
| **Schema Version** | 0.1.0 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Microsoft Sysmon for Linux |
| **Parser Version** | 0.2.1 ([version history](https://github.com/Azure/Azure-Sentinel/tree/master/Parsers/ASimFileEvent/CHANGELOG/ASimFileEventLinuxSysmonFileDeleted.md)) |
| **Last Updated** | Nov 17, 2023 |
| **Unifying Parser** | [ASimFileEvent](asimfileevent.md) |
| **Source File** | [Parsers\ASimFileEvent\Parsers\ASimFileEventLinuxSysmonFileDeleted.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimFileEvent/Parsers/ASimFileEventLinuxSysmonFileDeleted.yaml) |

## Description

This ASIM parser supports normalizing Sysmon for Linux events 23 and 26, stored in the Syslog table, to the ASIM file activity schema file delete event.

## Source Tables

This parser reads from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`Syslog`](../tables/syslog.md) | `SyslogMessage has "<Provider Name="`<br>`SyslogMessage has_any "<EventID>23</EventID>,<EventID>26</EventID>"` | ✓ | ✓ | ✓ |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `disabled` | bool | False |

## Associated Connectors

The following connectors provide data for this parser:

| Connector | Solution |
|:----------|:---------|
| [SyslogAma](../connectors/syslogama.md) | [Syslog](../solutions/syslog.md) |

**Solutions:** [Syslog](../solutions/syslog.md)

## References

- [ASIM File Schema](https://aka.ms/ASimFileEventDoc)
- [ASIM](https://aka.ms/AboutASIM)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to ASIM Index](asim-index.md)

