# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Registry Event ASIM Parser

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
| Microsoft | [_Im_RegistryEvent_Empty](vimregistryeventempty.md) |
| Microsoft 365 Defender for Endpoint | [_Im_RegistryEvent_Microsoft365D](vimregistryeventmicrosoft365d.md) |
| Security Events | [_Im_RegistryEvent_MicrosoftSecurityEvent](vimregistryeventmicrosoftsecurityevent.md) |
| Microsoft Sysmon | [_Im_RegistryEvent_MicrosoftSysmon](vimregistryeventmicrosoftsysmon.md) |
| Microsoft Sysmon | [_Im_RegistryEvent_MicrosoftSysmonWindowsEvent](vimregistryeventmicrosoftsysmonwindowsevent.md) |
| Security Events | [_Im_RegistryEvent_MicrosoftWindowsEvent](vimregistryeventmicrosoftwindowsevent.md) |
| Native | [_Im_RegistryEvent_Native](vimregistryeventnative.md) |
| SentinelOne | [_Im_RegistryEvent_SentinelOne](vimregistryeventsentinelone.md) |
| Trend Micro Vision One | [_Im_RegistryEvent_TrendMicroVisionOne](vimregistryeventtrendmicrovisionone.md) |
| VMware Carbon Black Cloud | [_Im_RegistryEvent_VMwareCarbonBlackCloud](vimregistryeventvmwarecarbonblackcloud.md) |

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

**Browse:**

- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

