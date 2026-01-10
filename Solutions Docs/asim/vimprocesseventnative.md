# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Process Event ASIM filtering parser for Microsoft Sentinel native Process Event table

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `vimProcessEventNative` |
| **Built-in Parser** | `_Im_ProcessEvent_Native` |
| **Schema** | ProcessEvent |
| **Schema Version** | 0.1.4 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Native |
| **Parser Version** | 0.1.0 |
| **Last Updated** | Nov 22 2023 |
| **Unifying Parser** | [imProcessCreate](improcesscreate.md), [imProcessEvent](improcessevent.md), [imProcessTerminate](improcessterminate.md) |
| **Source File** | [Parsers\ASimProcessEvent\Parsers\vimProcessEventNative.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimProcessEvent/Parsers/vimProcessEventNative.yaml) |

## Description

This ASIM parser supports normalizing the native Process Event table (ASimProcessEventLogs) to the ASIM Process Event normalized schema. While the native table is ASIM compliant, the parser is needed to add capabilities, such as aliases, available only at query time.

## Source Tables

This parser reads from the following tables:

| Table |
|:------|
| [ASimProcessEventLogs](../tables/asimprocesseventlogs.md) |

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
| `actorusername_has` | string | * |
| `dvcipaddr_has_any_prefix` | dynamic | dynamic([]) |
| `dvchostname_has_any` | dynamic | dynamic([]) |
| `eventtype` | string | * |
| `hashes_has_any` | dynamic | dynamic([]) |
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

