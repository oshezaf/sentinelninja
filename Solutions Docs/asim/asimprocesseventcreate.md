# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Process Create ASIM parser

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

---

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimProcessEventCreate` |
| **Built-in Parser** | `_ASim_ProcessEvent_Create` |
| **Schema** | ProcessEvent |
| **Schema Version** | 0.1.0 |
| **Parser Type** | 📦 Union (schema-level) |
| **Parser Version** | 0.1.1 ([version history](https://github.com/Azure/Azure-Sentinel/tree/master/Parsers/ASimProcessEvent/CHANGELOG/ASimProcessEventCreate.md)) |
| **Last Updated** | Feb 23, 2022 |
| **Source File** | [Parsers\ASimProcessEvent\Parsers\ASimProcessEventCreate.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimProcessEvent/Parsers/ASimProcessEventCreate.yaml) |

## Description

This ASIM parser supports normalizing process create event logs from all supported sources to the ASIM ProcessEvent normalized schema.

## Products

This union parser includes parsers for the following products:

| Product | Source Parser | Solutions |
|:--------|:--------------|:----------|
| SentinelOne | [_ASim_ProcessCreate_SentinelOne](asimprocesscreatesentinelone.md) | [SentinelOne](../solutions/sentinelone.md) |
| Sysmon for Linux | [_ASim_ProcessEvent_CreateLinuxSysmon](asimprocesscreatelinuxsysmon.md) | [Syslog](../solutions/syslog.md) |
| Security Events | [_ASim_ProcessEvent_CreateMicrosoftSecurityEvents](asimprocesscreatemicrosoftsecurityevents.md) | [Windows Security Events](../solutions/windows-security-events.md) |
| Sysmon | [_ASim_ProcessEvent_CreateMicrosoftSysmon](asimprocesseventcreatemicrosoftsysmon.md) |  |
| Security Events | [_ASim_ProcessEvent_CreateMicrosoftWindowsEvents](asimprocesscreatemicrosoftwindowsevents.md) | [Windows Forwarded Events](../solutions/windows-forwarded-events.md) |
| Trend Micro Vision One | [_ASim_ProcessEvent_CreateTrendMicroVisionOne](asimprocesscreatetrendmicrovisionone.md) | [Trend Micro Vision One](../solutions/trend-micro-vision-one.md) |
| VMware Carbon Black Cloud | [_ASim_ProcessEvent_CreateVMwareCarbonBlackCloud](asimprocesscreatevmwarecarbonblackcloud.md) | [VMware Carbon Black Cloud](../solutions/vmware-carbon-black-cloud.md) |
| Microsoft Defender for IoT | [_ASim_ProcessEvent_MD4IoT](asimprocesseventmd4iot.md) |  |
| Microsoft 365 Defender for endpoint | [_ASim_ProcessEvent_Microsoft365D](asimprocesseventmicrosoft365d.md) |  |
| Native | [_ASim_ProcessEvent_Native](asimprocesseventnative.md) | [CrowdStrike Falcon Endpoint Protection](../solutions/crowdstrike-falcon-endpoint-protection.md)<br>[VMware Carbon Black Cloud](../solutions/vmware-carbon-black-cloud.md) |

## References

- [ASIM Process Schema](https://aka.ms/ASimProcessEventDoc)
- [ASIM](https://aka.ms/AboutASIM)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

