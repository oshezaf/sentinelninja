# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Alert Event ASIM filtering parser for SentinelOne Singularity platform

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `vimAlertEventSentinelOneSingularity` |
| **Built-in Parser** | `_Im_AlertEvent_SentinelOneSingularity` |
| **Schema** | AlertEvent |
| **Schema Version** | 0.1 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | SentinelOne |
| **Parser Version** | 0.1.0 |
| **Last Updated** | Oct 09, 2024 |
| **Unifying Parser** | [imAlertEvent](imalertevent.md) |
| **Source File** | [Parsers\ASimAlertEvent\Parsers\vimAlertEventSentinelOneSingularity.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimAlertEvent/Parsers/vimAlertEventSentinelOneSingularity.yaml) |

## Description

This ASIM parser supports normalizing and filtering the SentinelOne alerts to the ASIM Alert normalized schema.

## Source Tables

This parser reads from the following tables:

| Table |
|:------|
| [SentinelOne_CL](../tables/sentinelone-cl.md) |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `starttime` | datetime | datetime(null) |
| `endtime` | datetime | datetime(null) |
| `ipaddr_has_any_prefix` | dynamic | dynamic([]) |
| `hostname_has_any` | dynamic | dynamic([]) |
| `username_has_any` | dynamic | dynamic([]) |
| `attacktactics_has_any` | dynamic | dynamic([]) |
| `attacktechniques_has_any` | dynamic | dynamic([]) |
| `threatcategory_has_any` | dynamic | dynamic([]) |
| `alertverdict_has_any` | dynamic | dynamic([]) |
| `eventseverity_has_any` | dynamic | dynamic([]) |
| `disabled` | bool | False |

## References

- [ASIM Alert Event Schema](https://aka.ms/ASimAlertEventDoc)
- [ASIM](https://aka.ms/AboutASIM)

---

**Browse:**

- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

