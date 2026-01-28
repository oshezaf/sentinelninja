# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Registry Event ASIM Parser

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

---

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `imRegistry` |
| **Built-in Parser** | `_Im_RegistryEvent` |
| **Schema** | RegistryEvent |
| **Schema Version** | 0.1.2 |
| **Parser Type** | 📦 Union (schema-level) |
| **Parser Version** | 0.1.4 |
| **Last Updated** | Jun 3, 2024 |
| **Source File** | [Parsers\ASimRegistryEvent\Parsers\imRegistryEvent.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimRegistryEvent/Parsers/imRegistryEvent.yaml) |

## Description

This ASIM parser supports normalizing Registry Event logs from all supported sources to the ASIM Registry Event normalized schema.

## Products

This union parser includes parsers for the following products:

| Product | Source Parser |
|:--------|:--------------|
|  | [_Im_RegistryEvent_Empty](im-registryevent-empty.md) |
|  | [_Im_RegistryEvent_Microsoft365D](im-registryevent-microsoft365d.md) |
|  | [_Im_RegistryEvent_MicrosoftSecurityEvent](im-registryevent-microsoftsecurityevent.md) |
|  | [_Im_RegistryEvent_MicrosoftSysmon](im-registryevent-microsoftsysmon.md) |
|  | [_Im_RegistryEvent_MicrosoftSysmonWindowsEvent](im-registryevent-microsoftsysmonwindowsevent.md) |
|  | [_Im_RegistryEvent_MicrosoftWindowsEvent](im-registryevent-microsoftwindowsevent.md) |
|  | [_Im_RegistryEvent_Native](im-registryevent-native.md) |
|  | [_Im_RegistryEvent_SentinelOne](im-registryevent-sentinelone.md) |
|  | [_Im_RegistryEvent_TrendMicroVisionOne](im-registryevent-trendmicrovisionone.md) |
|  | [_Im_RegistryEvent_VMwareCarbonBlackCloud](im-registryevent-vmwarecarbonblackcloud.md) |

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
| `pack` | bool | False |

## References

- [ASIM Registry Schema](https://aka.ms/ASimRegistryEventDoc)
- [ASIM](https:/aka.ms/AboutASIM)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

