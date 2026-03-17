# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Registry Event ASIM Parser

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

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
| **Parser Version** | 0.1.4 ([version history](https://github.com/Azure/Azure-Sentinel/tree/master/Parsers/ASimRegistryEvent/CHANGELOG/imRegistry.md)) |
| **Last Updated** | Jun 3, 2024 |
| **Source File** | [Parsers\ASimRegistryEvent\Parsers\imRegistryEvent.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimRegistryEvent/Parsers/imRegistryEvent.yaml) |

## Description

This ASIM parser supports normalizing Registry Event logs from all supported sources to the ASIM Registry Event normalized schema.

## Products

This union parser includes parsers for the following products:

| Product | Source Parser | Solutions |
|:--------|:--------------|:----------|
| Microsoft 365 Defender for Endpoint | [_Im_RegistryEvent_Microsoft365D](asimregistryeventmicrosoft365d.md) | [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md) |
| Security Events | [_Im_RegistryEvent_MicrosoftSecurityEvent](asimregistryeventmicrosoftsecurityevent.md) | [Windows Security Events](../solutions/windows-security-events.md) |
| Microsoft Sysmon | [_Im_RegistryEvent_MicrosoftSysmon](asimregistryeventmicrosoftsysmon.md) |  |
| Microsoft Sysmon | [_Im_RegistryEvent_MicrosoftSysmonWindowsEvent](asimregistryeventmicrosoftsysmonwindowsevent.md) | [Windows Forwarded Events](../solutions/windows-forwarded-events.md) |
| Security Events | [_Im_RegistryEvent_MicrosoftWindowsEvent](asimregistryeventmicrosoftwindowsevent.md) | [Windows Forwarded Events](../solutions/windows-forwarded-events.md) |
| Native | [_Im_RegistryEvent_Native](asimregistryeventnative.md) | [CrowdStrike Falcon Endpoint Protection](../solutions/crowdstrike-falcon-endpoint-protection.md)<br>[VMware Carbon Black Cloud](../solutions/vmware-carbon-black-cloud.md) |
| SentinelOne | [_Im_RegistryEvent_SentinelOne](asimregistryeventsentinelone.md) | [SentinelOne](../solutions/sentinelone.md) |
| Trend Micro Vision One | [_Im_RegistryEvent_TrendMicroVisionOne](asimregistryeventtrendmicrovisionone.md) | [Trend Micro Vision One](../solutions/trend-micro-vision-one.md) |
| VMware Carbon Black Cloud | [_Im_RegistryEvent_VMwareCarbonBlackCloud](asimregistryeventvmwarecarbonblackcloud.md) | [VMware Carbon Black Cloud](../solutions/vmware-carbon-black-cloud.md) |

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

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

