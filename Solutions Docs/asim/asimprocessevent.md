# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Process Event ASIM parser

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

---

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimProcessEvent` |
| **Built-in Parser** | `_ASim_ProcessEvent` |
| **Schema** | ProcessEvent |
| **Schema Version** | 0.1.0 |
| **Parser Type** | 📦 Union (schema-level) |
| **Parser Version** | 0.1.2 ([version history](https://github.com/Azure/Azure-Sentinel/tree/master/Parsers/ASimProcessEvent/CHANGELOG/ASimProcessEvent.md)) |
| **Last Updated** | June 3, 2024 |
| **Source File** | [Parsers\ASimProcessEvent\Parsers\ASimProcessEvent.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimProcessEvent/Parsers/ASimProcessEvent.yaml) |

## Description

This ASIM parser supports normalizing process event logs from all supported sources to the ASIM ProcessEvent normalized schema.

## Products

This union parser includes parsers for the following products:

| Product | Source Parser |
|:--------|:--------------|
| SentinelOne | [_ASim_ProcessCreate_SentinelOne](asimprocesscreatesentinelone.md) |
| Sysmon for Linux | [_ASim_ProcessEvent_CreateLinuxSysmon](asimprocesscreatelinuxsysmon.md) |
| Security Events | [_ASim_ProcessEvent_CreateMicrosoftSecurityEvents](asimprocesscreatemicrosoftsecurityevents.md) |
| Sysmon | [_ASim_ProcessEvent_CreateMicrosoftSysmon](asimprocesseventcreatemicrosoftsysmon.md) |
| Sysmon | [_ASim_ProcessEvent_CreateMicrosoftSysmonWindowsEvent](asimprocesseventcreatemicrosoftsysmonwindowsevent.md) |
| Security Events | [_ASim_ProcessEvent_CreateMicrosoftWindowsEvents](asimprocesscreatemicrosoftwindowsevents.md) |
| Trend Micro Vision One | [_ASim_ProcessEvent_CreateTrendMicroVisionOne](asimprocesscreatetrendmicrovisionone.md) |
| VMware Carbon Black Cloud | [_ASim_ProcessEvent_CreateVMwareCarbonBlackCloud](asimprocesscreatevmwarecarbonblackcloud.md) |
| Microsoft Defender for IoT | [_ASim_ProcessEvent_MD4IoT](asimprocesseventmd4iot.md) |
| Microsoft 365 Defender for endpoint | [_ASim_ProcessEvent_Microsoft365D](asimprocesseventmicrosoft365d.md) |
| Native | [_ASim_ProcessEvent_Native](asimprocesseventnative.md) |
| Sysmon for Linux | [_ASim_ProcessEvent_TerminateLinuxSysmon](asimprocessterminatelinuxsysmon.md) |
| Security Events | [_ASim_ProcessEvent_TerminateMicrosoftSecurityEvents](asimprocessterminatemicrosoftsecurityevents.md) |
| Microsoft Windows Events Sysmon | [_ASim_ProcessEvent_TerminateMicrosoftSysmon](asimprocesseventterminatemicrosoftsysmon.md) |
| Microsoft Windows Events Sysmon | [_ASim_ProcessEvent_TerminateMicrosoftSysmonWindowsEvent](asimprocesseventterminatemicrosoftsysmonwindowsevent.md) |
| Security Events | [_ASim_ProcessEvent_TerminateMicrosoftWindowsEvents](asimprocessterminatemicrosoftwindowsevents.md) |
|  | [_ASim_ProcessEvent_TerminateVMwareCarbonBlackCloud](asim-processevent-terminatevmwarecarbonblackcloud.md) |
|  | [_Im_Process_Empty](im-process-empty.md) |

## Source Tables

This parser reads from the following tables:

| Table | Transformations | Ingestion API |
|:------|:---------------:|:-------------:|
| [`ASimProcessCreateLinuxSysmon`](../asim/asimprocesscreatelinuxsysmon.md) | — | — |
| [`ASimProcessCreateMicrosoftSecurityEvents`](../asim/asimprocesscreatemicrosoftsecurityevents.md) | — | — |
| [`ASimProcessCreateMicrosoftWindowsEvents`](../asim/asimprocesscreatemicrosoftwindowsevents.md) | — | — |
| [`ASimProcessCreateSentinelOne`](../asim/asimprocesscreatesentinelone.md) | — | — |
| [`ASimProcessCreateTrendMicroVisionOne`](../asim/asimprocesscreatetrendmicrovisionone.md) | — | — |
| [`ASimProcessCreateVMwareCarbonBlackCloud`](../asim/asimprocesscreatevmwarecarbonblackcloud.md) | — | — |
| [`ASimProcessEventCreateMicrosoftSysmon`](../asim/asimprocesseventcreatemicrosoftsysmon.md) | — | — |
| [`ASimProcessEventCreateMicrosoftSysmonWindowsEvent`](../asim/asimprocesseventcreatemicrosoftsysmonwindowsevent.md) | — | — |
| [`ASimProcessEventMD4IoT`](../asim/asimprocesseventmd4iot.md) | — | — |
| [`ASimProcessEventMicrosoft365D`](../asim/asimprocesseventmicrosoft365d.md) | — | — |
| [`ASimProcessEventNative`](../asim/asimprocesseventnative.md) | — | — |
| [`ASimProcessEventTerminateMicrosoftSysmon`](../asim/asimprocesseventterminatemicrosoftsysmon.md) | — | — |
| [`ASimProcessEventTerminateMicrosoftSysmonWindowsEvent`](../asim/asimprocesseventterminatemicrosoftsysmonwindowsevent.md) | — | — |
| [`ASimProcessTerminateLinuxSysmon`](../asim/asimprocessterminatelinuxsysmon.md) | — | — |
| [`ASimProcessTerminateMicrosoftSecurityEvents`](../asim/asimprocessterminatemicrosoftsecurityevents.md) | — | — |
| [`ASimProcessTerminateMicrosoftWindowsEvents`](../asim/asimprocessterminatemicrosoftwindowsevents.md) | — | — |
| [`ASimProcessTerminateVMwareCarbonBlackCloud`](../asim/asimprocessterminatevmwarecarbonblackcloud.md) | — | — |

## References

- [ASIM Process Schema](https://aka.ms/ASimProcessEventDoc)
- [ASIM](https://aka.ms/AboutASIM)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

