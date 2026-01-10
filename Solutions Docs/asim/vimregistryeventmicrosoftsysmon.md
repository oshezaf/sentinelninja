# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Registry Event ASIM filtering parser for Microsoft Sysmon (registry creation event)

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `vimRegistryEventMicrosoftSysmon` |
| **Built-in Parser** | `_Im_RegistryEvent_MicrosoftSysmon` |
| **Schema** | RegistryEvent |
| **Schema Version** | 0.1.2 |
| **Parser Type** | 🔌 Source (product-specific) |
| **Product** | Microsoft Sysmon |
| **Parser Version** | 0.3.1 |
| **Last Updated** | Jun 18, 2024 |
| **Unifying Parser** | [imRegistry](imregistry.md) |
| **Source File** | [Parsers\ASimRegistryEvent\Parsers\vimRegistryEventMicrosoftSysmon.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimRegistryEvent/Parsers/vimRegistryEventMicrosoftSysmon.yaml) |

## Description

This ASIM parser supports normalizing Microsoft Sysmon events (event number 12, 13, 14) logs ingested in 'Event' table to the ASIM Registry Event normalized schema.

## Source Tables

This parser reads from the following tables:

| Table |
|:------|
| [Event](../tables/event.md) |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `starttime` | datetime | datetime(null) |
| `endtime` | datetime | datetime(null) |
| `eventtype_in` | dynamic | dynamic([]) |
| `actorusername_has_any` | dynamic | dynamic([]) |
| `registrykey_has_any` | dynamic | dynamic([]) |
| `registryvalue_has_any` | dynamic | dynamic([]) |
| `registrydata_has_any` | dynamic | dynamic([]) |
| `dvchostname_has_any` | dynamic | dynamic([]) |
| `disabled` | bool | False |

## References

- [ASIM Registry Schema](https://aka.ms/ASimRegistryEventDoc)
- [ASIM](https://aka.ms/AboutASIM)

---

**Browse:**

- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

