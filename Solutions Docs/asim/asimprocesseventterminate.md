# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Process Terminate ASIM parser

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to ASIM Index](asim-index.md)

---

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimProcessEventTerminate` |
| **Built-in Parser** | `_ASim_ProcessEvent_Terminate` |
| **Schema** | ProcessEvent |
| **Schema Version** | 0.1.0 |
| **Parser Type** | 📦 Union (schema-level) |
| **Parser Version** | 0.1.1 ([version history](https://github.com/Azure/Azure-Sentinel/tree/master/Parsers/ASimProcessEvent/CHANGELOG/ASimProcessEventTerminate.md)) |
| **Last Updated** | Feb 23, 2022 |
| **Source File** | [Parsers\ASimProcessEvent\Parsers\ASimProcessEventTerminate.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimProcessEvent/Parsers/ASimProcessEventTerminate.yaml) |

## Description

This ASIM parser supports normalizing process terminate event logs from all supported sources to the ASIM ProcessEvent normalized schema.

## Products

This union parser includes parsers for the following products:

| Product | Source Parser | Solutions |
|:--------|:--------------|:----------|
| Microsoft Defender for IoT | [_ASim_ProcessEvent_MD4IoT](asimprocesseventmd4iot.md) |  |
| Microsoft 365 Defender for endpoint | [_ASim_ProcessEvent_Microsoft365D](asimprocesseventmicrosoft365d.md) |  |
| Native | [_ASim_ProcessEvent_Native](asimprocesseventnative.md) | [CrowdStrike Falcon Endpoint Protection](../solutions/crowdstrike-falcon-endpoint-protection.md)<br>[VMware Carbon Black Cloud](../solutions/vmware-carbon-black-cloud.md) |
| Sysmon for Linux | [_ASim_ProcessEvent_TerminateLinuxSysmon](asimprocessterminatelinuxsysmon.md) | [Syslog](../solutions/syslog.md) |
| Security Events | [_ASim_ProcessEvent_TerminateMicrosoftSecurityEvents](asimprocessterminatemicrosoftsecurityevents.md) | [Windows Security Events](../solutions/windows-security-events.md) |
| Microsoft Windows Events Sysmon | [_ASim_ProcessEvent_TerminateMicrosoftSysmon](asimprocesseventterminatemicrosoftsysmon.md) |  |
| Security Events | [_ASim_ProcessEvent_TerminateMicrosoftWindowsEvents](asimprocessterminatemicrosoftwindowsevents.md) | [Windows Forwarded Events](../solutions/windows-forwarded-events.md) |
|  | [_ASim_ProcessEvent_TerminateVMwareCarbonBlackCloud](asim-processevent-terminatevmwarecarbonblackcloud.md) |  |

## Source Tables

This parser reads from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`ASimProcessEventMD4IoT`](../asim/asimprocesseventmd4iot.md) | ? | ? | ? |
| [`ASimProcessEventMicrosoft365D`](../asim/asimprocesseventmicrosoft365d.md) | ? | ? | ? |
| [`ASimProcessEventNative`](../asim/asimprocesseventnative.md) | ? | ? | ? |
| [`ASimProcessTerminateLinuxSysmon`](../asim/asimprocessterminatelinuxsysmon.md) | ? | ? | ? |
| [`ASimProcessTerminateMicrosoftSecurityEvents`](../asim/asimprocessterminatemicrosoftsecurityevents.md) | ? | ? | ? |
| [`ASimProcessTerminateMicrosoftSysmon`](../tables/asimprocessterminatemicrosoftsysmon.md) | ? | ? | ? |
| [`ASimProcessTerminateMicrosoftWindowsEvents`](../asim/asimprocessterminatemicrosoftwindowsevents.md) | ? | ? | ? |
| [`ASimProcessTerminateVMwareCarbonBlackCloud`](../asim/asimprocessterminatevmwarecarbonblackcloud.md) | ? | ? | ? |

## References

- [ASIM Process Schema](https://aka.ms/ASimProcessEventDoc)
- [ASIM](https://aka.ms/AboutASIM)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to ASIM Index](asim-index.md)

