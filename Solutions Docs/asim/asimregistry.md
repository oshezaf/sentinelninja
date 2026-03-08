# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Registry Event ASIM Parser

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

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
| **Parser Version** | 0.1.3 ([version history](https://github.com/Azure/Azure-Sentinel/tree/master/Parsers/ASimRegistryEvent/CHANGELOG/ASimRegistry.md)) |
| **Last Updated** | Jun 3, 2024 |
| **Source File** | [Parsers\ASimRegistryEvent\Parsers\ASimRegistryEvent.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimRegistryEvent/Parsers/ASimRegistryEvent.yaml) |

## Description

This ASIM parser supports normalizing Registry Event logs from all supported sources to the ASIM Registry Event normalized schema.

## Products

This union parser includes parsers for the following products:

| Product | Source Parser | Solutions |
|:--------|:--------------|:----------|
| Microsoft 365 Defender for Endpoint | [_ASim_RegistryEvent_Microsoft365D](asimregistryeventmicrosoft365d.md) | [Microsoft Defender XDR](../solutions/microsoft-defender-xdr.md) |
| Security Events | [_ASim_RegistryEvent_MicrosoftSecurityEvent](asimregistryeventmicrosoftsecurityevent.md) | [Microsoft Exchange Security - Exchange On-Premises](../solutions/microsoft-exchange-security-exchange-on-premises.md)<br>[Windows Security Events](../solutions/windows-security-events.md) |
| Microsoft Sysmon | [_ASim_RegistryEvent_MicrosoftSysmon](asimregistryeventmicrosoftsysmon.md) |  |
| Microsoft Sysmon | [_ASim_RegistryEvent_MicrosoftSysmonWindowsEvent](asimregistryeventmicrosoftsysmonwindowsevent.md) | [Windows Forwarded Events](../solutions/windows-forwarded-events.md) |
| Security Events | [_ASim_RegistryEvent_MicrosoftWindowsEvent](asimregistryeventmicrosoftwindowsevent.md) | [Windows Forwarded Events](../solutions/windows-forwarded-events.md) |
| Native | [_ASim_RegistryEvent_Native](asimregistryeventnative.md) | [CrowdStrike Falcon Endpoint Protection](../solutions/crowdstrike-falcon-endpoint-protection.md)<br>[VMware Carbon Black Cloud](../solutions/vmware-carbon-black-cloud.md) |
| SentinelOne | [_ASim_RegistryEvent_SentinelOne](asimregistryeventsentinelone.md) | [SentinelOne](../solutions/sentinelone.md) |
| Trend Micro Vision One | [_ASim_RegistryEvent_TrendMicroVisionOne](asimregistryeventtrendmicrovisionone.md) | [Trend Micro Vision One](../solutions/trend-micro-vision-one.md) |
| VMware Carbon Black Cloud | [_ASim_RegistryEvent_VMwareCarbonBlackCloud](asimregistryeventvmwarecarbonblackcloud.md) | [VMware Carbon Black Cloud](../solutions/vmware-carbon-black-cloud.md) |

## Source Tables

This parser reads from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`ASimRegistryEventMicrosoft365D`](../asim/asimregistryeventmicrosoft365d.md) | ? | ? | ? |
| [`ASimRegistryEventMicrosoftSecurityEvent`](../asim/asimregistryeventmicrosoftsecurityevent.md) | ? | ? | ? |
| [`ASimRegistryEventMicrosoftSysmon`](../asim/asimregistryeventmicrosoftsysmon.md) | ? | ? | ? |
| [`ASimRegistryEventMicrosoftSysmonWindowsEvent`](../asim/asimregistryeventmicrosoftsysmonwindowsevent.md) | ? | ? | ? |
| [`ASimRegistryEventMicrosoftWindowsEvent`](../asim/asimregistryeventmicrosoftwindowsevent.md) | ? | ? | ? |
| [`ASimRegistryEventNative`](../asim/asimregistryeventnative.md) | ? | ? | ? |
| [`ASimRegistryEventSentinelOne`](../asim/asimregistryeventsentinelone.md) | ? | ? | ? |
| [`ASimRegistryEventTrendMicroVisionOne`](../asim/asimregistryeventtrendmicrovisionone.md) | ? | ? | ? |
| [`ASimRegistryEventVMwareCarbonBlackCloud`](../asim/asimregistryeventvmwarecarbonblackcloud.md) | ? | ? | ? |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `pack` | bool | False |

## References

- [ASIM Registry Schema](https://aka.ms/ASimRegistryEventDoc)
- [ASIM](https://aka.ms/AboutASIM)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to ASIM Index](asim-index.md)

