# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Process Create Event ASIM parser for Microsoft 365 Defender for endpoint

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `vimProcessEventMicrosoft365D` |
| **Built-in Parser** | `_Im_ProcessEvent_Microsoft365D` |
| **Schema** | ProcessEvent |
| **Schema Version** | 0.1.0 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Microsoft 365 Defender for endpoint |
| **Parser Version** | 0.2.0 |
| **Last Updated** | Apr 30, 2022 |
| **Unifying Parser** | [imProcessCreate](improcesscreate.md), [imProcessEvent](improcessevent.md) |
| **Source File** | [Parsers\ASimProcessEvent\Parsers\vimProcessEventMicrosoft365D.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimProcessEvent/Parsers/vimProcessEventMicrosoft365D.yaml) |

## Description

This ASIM parser supports normalizing Microsoft 365 Defender for endpoint to the ASIM Process Event normalized schema.

## Source Tables

This parser reads from the following tables:

| Table |
|:------|
| [DeviceProcessEvents](../tables/deviceprocessevents.md) |

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

