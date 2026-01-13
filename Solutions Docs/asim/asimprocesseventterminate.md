# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Process Terminate ASIM parser

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `ASimProcessEventTerminate` |
| **Built-in Parser** | `_ASim_ProcessEvent_Terminate` |
| **Schema** | ProcessEvent |
| **Schema Version** | 0.1.0 |
| **Parser Type** | 📦 Union (schema-level) |
| **Parser Version** | 0.1.1 |
| **Last Updated** | Feb 23, 2022 |
| **Source File** | [Parsers\ASimProcessEvent\Parsers\ASimProcessEventTerminate.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimProcessEvent/Parsers/ASimProcessEventTerminate.yaml) |

## Description

This ASIM parser supports normalizing process terminate event logs from all supported sources to the ASIM ProcessEvent normalized schema.

## Products

This union parser includes parsers for the following products:

| Product | Source Parser |
|:--------|:--------------|
| Microsoft Defender for IoT | [_ASim_ProcessEvent_MD4IoT](asimprocesseventmd4iot.md) |
| Microsoft 365 Defender for endpoint | [_ASim_ProcessEvent_Microsoft365D](asimprocesseventmicrosoft365d.md) |
| Native | [_ASim_ProcessEvent_Native](asimprocesseventnative.md) |
| Sysmon for Linux | [_ASim_ProcessEvent_TerminateLinuxSysmon](asimprocessterminatelinuxsysmon.md) |
| Security Events | [_ASim_ProcessEvent_TerminateMicrosoftSecurityEvents](asimprocessterminatemicrosoftsecurityevents.md) |
| Microsoft Windows Events Sysmon | [_ASim_ProcessEvent_TerminateMicrosoftSysmon](asimprocesseventterminatemicrosoftsysmon.md) |
| Security Events | [_ASim_ProcessEvent_TerminateMicrosoftWindowsEvents](asimprocessterminatemicrosoftwindowsevents.md) |
|  | [_ASim_ProcessEvent_TerminateVMwareCarbonBlackCloud](asim-processevent-terminatevmwarecarbonblackcloud.md) |
|  | [_Im_Process_Empty](im-process-empty.md) |

## References

- [ASIM Process Schema](https://aka.ms/ASimProcessEventDoc)
- [ASIM](https://aka.ms/AboutASIM)

---

**Browse:**

- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

