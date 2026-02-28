# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Process Event filtering parser

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

---

## Parser Information

| Property | Value |
|:---------|:------|
| **Parser Name** | `imProcessEvent` |
| **Built-in Parser** | `_Im_ProcessEvent` |
| **Schema** | ProcessEvent |
| **Schema Version** | 0.1.0 |
| **Parser Type** | 📦 Union (schema-level) |
| **Parser Version** | 0.1.3 ([version history](https://github.com/Azure/Azure-Sentinel/tree/master/Parsers/ASimProcessEvent/CHANGELOG/imProcessEvent.md)) |
| **Last Updated** | June 3, 2024 |
| **Source File** | [Parsers\ASimProcessEvent\Parsers\imProcessEvent.yaml](https://github.com/Azure/Azure-Sentinel/blob/master/Parsers/ASimProcessEvent/Parsers/imProcessEvent.yaml) |

## Description

This ASIM parser supports normalizing process event logs from all supported sources to the ASIM ProcessEvent normalized schema.

## Products

This union parser includes parsers for the following products:

| Product | Source Parser | Solutions |
|:--------|:--------------|:----------|
|  | [_Im_ProcessCreate_LinuxSysmon](im-processcreate-linuxsysmon.md) |  |
|  | [_Im_ProcessCreate_MD4IoT](im-processcreate-md4iot.md) |  |
|  | [_Im_ProcessCreate_MicrosoftSecurityEvents](im-processcreate-microsoftsecurityevents.md) |  |
|  | [_Im_ProcessCreate_MicrosoftWindowsEvents](im-processcreate-microsoftwindowsevents.md) |  |
| SentinelOne | [_Im_ProcessCreate_SentinelOne](asimprocesscreatesentinelone.md) | [SentinelOne](../solutions/sentinelone.md) |
|  | [_Im_ProcessCreate_VMwareCarbonBlackCloud](im-processcreate-vmwarecarbonblackcloud.md) |  |
| Sysmon | [_Im_ProcessEvent_CreateMicrosoftSysmon](asimprocesseventcreatemicrosoftsysmon.md) |  |
| Sysmon | [_Im_ProcessEvent_CreateMicrosoftSysmonWindowsEvent](asimprocesseventcreatemicrosoftsysmonwindowsevent.md) | [Windows Forwarded Events](../solutions/windows-forwarded-events.md) |
| Microsoft 365 Defender for endpoint | [_Im_ProcessEvent_Microsoft365D](asimprocesseventmicrosoft365d.md) |  |
| Native | [_Im_ProcessEvent_Native](asimprocesseventnative.md) | [CrowdStrike Falcon Endpoint Protection](../solutions/crowdstrike-falcon-endpoint-protection.md)<br>[VMware Carbon Black Cloud](../solutions/vmware-carbon-black-cloud.md) |
|  | [_Im_ProcessTerminate_LinuxSysmon](im-processterminate-linuxsysmon.md) |  |
|  | [_Im_ProcessTerminate_MD4IoT](im-processterminate-md4iot.md) |  |
|  | [_Im_ProcessTerminate_MicrosoftSecurityEvents](im-processterminate-microsoftsecurityevents.md) |  |
|  | [_Im_ProcessTerminate_MicrosoftSysmon](im-processterminate-microsoftsysmon.md) |  |
|  | [_Im_ProcessTerminate_MicrosoftSysmonWindowsEvent](im-processterminate-microsoftsysmonwindowsevent.md) |  |
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
| `targetusername` | string | * |
| `dvcipaddr_has_any_prefix` | dynamic | dynamic([]) |
| `dvcname_has_any` | dynamic | dynamic([]) |
| `hashes_has_any` | dynamic | dynamic([]) |
| `eventtype` | string | * |

## References

- [ASIM Process Schema](https://aka.ms/ASimProcessEventDoc)
- [ASIM](https://aka.ms/AboutASIM)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · **ASIM Parsers** · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to ASIM Index](asim-index.md)

