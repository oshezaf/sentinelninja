# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Registry Event ASIM Parser

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to ASIM Index](asim-index.md)

---

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimRegistry` |
| **Built-in Parser** | `_ASim_RegistryEvent` |
| **Schema** | RegistryEvent |
| **Schema Version** | 0.1.2 |
| **Parser Type** | 📦 Union (schema-level) |
| **Parser Version** | 0.1.3 |
| **Last Updated** | Jun 3, 2024 |
| **Source File** | [Parsers\ASimRegistryEvent\Parsers\ASimRegistryEvent.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimRegistryEvent/Parsers/ASimRegistryEvent.yaml) |

## Description

This ASIM parser supports normalizing Registry Event logs from all supported sources to the ASIM Registry Event normalized schema.

## Products

This union parser includes parsers for the following products:

| Product | Source Parser |
|:--------|:--------------|
| Microsoft 365 Defender for Endpoint | [_ASim_RegistryEvent_Microsoft365D](asimregistryeventmicrosoft365d.md) |
| Security Events | [_ASim_RegistryEvent_MicrosoftSecurityEvent](asimregistryeventmicrosoftsecurityevent.md) |
| Microsoft Sysmon | [_ASim_RegistryEvent_MicrosoftSysmon](asimregistryeventmicrosoftsysmon.md) |
| Microsoft Sysmon | [_ASim_RegistryEvent_MicrosoftSysmonWindowsEvent](asimregistryeventmicrosoftsysmonwindowsevent.md) |
| Security Events | [_ASim_RegistryEvent_MicrosoftWindowsEvent](asimregistryeventmicrosoftwindowsevent.md) |
| Native | [_ASim_RegistryEvent_Native](asimregistryeventnative.md) |
| SentinelOne | [_ASim_RegistryEvent_SentinelOne](asimregistryeventsentinelone.md) |
| Trend Micro Vision One | [_ASim_RegistryEvent_TrendMicroVisionOne](asimregistryeventtrendmicrovisionone.md) |
| VMware Carbon Black Cloud | [_ASim_RegistryEvent_VMwareCarbonBlackCloud](asimregistryeventvmwarecarbonblackcloud.md) |
|  | [_Im_RegistryEvent_Empty](im-registryevent-empty.md) |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `pack` | bool | False |

## References

- [ASIM Registry Schema](https://aka.ms/ASimRegistryEventDoc)
- [ASIM](https:/aka.ms/AboutASIM)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to ASIM Index](asim-index.md)

