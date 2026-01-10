# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Process Create Event ASIM filtering parser for Sysmon for Linux

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `vimProcessCreateLinuxSysmon` |
| **Built-in Parser** | `_Im_ProcessCreate_LinuxSysmon` |
| **Schema** | ProcessEvent |
| **Schema Version** | 0.1.0 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Sysmon for Linux |
| **Parser Version** | 0.3.0 |
| **Last Updated** | Apr 30, 2022 |
| **Unifying Parser** | [imProcessCreate](improcesscreate.md), [imProcessEvent](improcessevent.md) |
| **Source File** | [Parsers\ASimProcessEvent\Parsers\vimProcessCreateLinuxSysmon.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimProcessEvent/Parsers/vimProcessCreateLinuxSysmon.yaml) |

## Description

This ASIM parser supports filtering and normalizing Sysmon for Linux process create events (event 1) collected using the Syslog connector to the ASIM Process Event normalized schema.

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
| `commandline_has_any` | dynamic | dynamic([]) |
| `commandline_has_all` | dynamic | dynamic([]) |
| `commandline_has_any_ip_prefix` | dynamic | dynamic([]) |
| `actingprocess_has_any` | dynamic | dynamic([]) |
| `targetprocess_has_any` | dynamic | dynamic([]) |
| `parentprocess_has_any` | dynamic | dynamic([]) |
| `targetusername` | string | * |
| `dvcipaddr_has_any_prefix` | dynamic | dynamic([]) |
| `dvcname_has_any` | dynamic | dynamic([]) |
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

