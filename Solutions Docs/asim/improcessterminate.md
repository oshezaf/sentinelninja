# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Process Terminate ASIM parser

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to ASIM Index](asim-index.md)

---

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `imProcessTerminate` |
| **Built-in Parser** | `_Im_ProcessTerminate` |
| **Schema** | ProcessEvent |
| **Schema Version** | 0.1.0 |
| **Parser Type** | 📦 Union (schema-level) |
| **Parser Version** | 0.1.2 ([version history](https://github.com/Azure/Azure-Sentinel/tree/master/Parsers/ASimProcessEvent/CHANGELOG/imProcessTerminate.md)) |
| **Last Updated** | Feb 23, 2022 |
| **Source File** | [Parsers\ASimProcessEvent\Parsers\imProcessTerminate.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimProcessEvent/Parsers/imProcessTerminate.yaml) |

## Description

This ASIM parser supports normalizing process terminate event logs from all supported sources to the ASIM ProcessEvent normalized schema.

## Products

This union parser includes parsers for the following products:

| Product | Source Parser | Solutions |
|:--------|:--------------|:----------|
| Native | [_Im_ProcessEvent_Native](asimprocesseventnative.md) | [CrowdStrike Falcon Endpoint Protection](../solutions/crowdstrike-falcon-endpoint-protection.md)<br>[VMware Carbon Black Cloud](../solutions/vmware-carbon-black-cloud.md) |
|  | [_Im_ProcessTerminate_LinuxSysmon](im-processterminate-linuxsysmon.md) |  |
|  | [_Im_ProcessTerminate_MD4IoT](im-processterminate-md4iot.md) |  |
|  | [_Im_ProcessTerminate_MicrosoftSecurityEvents](im-processterminate-microsoftsecurityevents.md) |  |
|  | [_Im_ProcessTerminate_MicrosoftSysmon](im-processterminate-microsoftsysmon.md) |  |
|  | [_Im_ProcessTerminate_MicrosoftWindowsEvents](im-processterminate-microsoftwindowsevents.md) |  |
|  | [_Im_ProcessTerminate_VMwareCarbonBlackCloud](im-processterminate-vmwarecarbonblackcloud.md) |  |

## Parameters

| Name | Type | Default |
|:-----|:-----|:--------|
| `starttime` | datetime | datetime(null) |
| `endtime` | datetime | datetime(null) |
| `commandline_has_any` | dynamic | dynamic([]) |
| `commandline_has_all` | dynamic | dynamic([]) |
| `commandline_has_any_ip_prefix` | dynamic | dynamic([]) |
| `actingprocess_has_any` | dynamic | dynamic([]) |
| `targetprocess_has_any` | dynamic | dynamic([]) |
| `parentprocess_has_any` | dynamic | dynamic([]) |
| `actorusername` | string | * |
| `dvcipaddr_has_any_prefix` | dynamic | dynamic([]) |
| `dvcname_has_any` | dynamic | dynamic([]) |
| `eventtype` | string | * |

## References

- [ASIM Process Schema](https://aka.ms/ASimProcessEventDoc)
- [ASIM](https://aka.ms/AboutASIM)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to ASIM Index](asim-index.md)

