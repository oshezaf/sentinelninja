# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Process Terminate Event ASIM parser for Microsoft Defender for IoT

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `vimProcessTerminateMD4IoT` |
| **Built-in Parser** | `_Im_ProcessTerminate_MD4IoT` |
| **Schema** | ProcessEvent |
| **Schema Version** | 0.1.0 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Microsoft Defender for IoT |
| **Parser Version** | 0.2.0 |
| **Last Updated** | Apr 30, 2022 |
| **Unifying Parser** | [imProcessEvent](improcessevent.md), [imProcessTerminate](improcessterminate.md) |
| **Source File** | [Parsers\ASimProcessEvent\Parsers\vimProcessTerminateMD4IoT.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimProcessEvent/Parsers/vimProcessTerminateMD4IoT.yaml) |

## Description

This ASIM parser supports filtering and normalizing Microsoft Defender for IoT events to the ASIM Process Event normalized schema.

## Source Tables

This parser reads from the following tables:

| Table |
|:------|
| [SecurityIoTRawEvent](../tables/securityiotrawevent.md) |

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
| `actorusername` | string | * |
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

