# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Unicode Obfuscation in Command Line

The query looks for Command Lines that contain non ASCII characaters. Insertion of these characters could be used to evade detections.  Command lines should be reviewed to determine whether inclusion of non ASCII characters was deliberate or not

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Endpoint Threat Protection Essentials](../solutions/endpoint-threat-protection-essentials.md) |
| **ID** | `a953f304-12e4-48ae-bedc-d58fb1b0c6a6` |
| **Tactics** | DefenseEvasion |
| **Techniques** | T1027 |
| **Required Connectors** | [SecurityEvents](../connectors/securityevents.md), [WindowsSecurityEvents](../connectors/windowssecurityevents.md), [MicrosoftThreatProtection](../connectors/microsoftthreatprotection.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Endpoint%20Threat%20Protection%20Essentials/Hunting%20Queries/UnicodeObfuscationInCommandLine.yaml) |

## <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> ASIM Parsers Used

This content item uses ASIM (Advanced Security Information Model) parsers for normalized data:

- [`_Im_ProcessCreateTrendMicroVisionOne`](../asim/im-processcreatetrendmicrovisionone.md)
- [`_Im_ProcessCreate_LinuxSysmon`](../asim/im-processcreate-linuxsysmon.md)
- [`_Im_ProcessCreate_MD4IoT`](../asim/im-processcreate-md4iot.md)
- [`_Im_ProcessCreate_MicrosoftSecurityEvents`](../asim/im-processcreate-microsoftsecurityevents.md)
- [`_Im_ProcessCreate_MicrosoftSysmon`](../asim/im-processcreate-microsoftsysmon.md)
- [`_Im_ProcessCreate_MicrosoftWindowsEvents`](../asim/im-processcreate-microsoftwindowsevents.md)
- [`_Im_ProcessCreate_SentinelOne`](../asim/im-processcreate-sentinelone.md)
- [`_Im_ProcessCreate_VMwareCarbonBlackCloud`](../asim/im-processcreate-vmwarecarbonblackcloud.md)
- [`_Im_ProcessEvent_Microsoft365D`](../asim/im-processevent-microsoft365d.md)
- [`_Im_ProcessEvent_Native`](../asim/im-processevent-native.md)

## Tables Used

This content item queries data from the following tables:

- [`DeviceProcessEvents`](../tables/deviceprocessevents.md)
- [`SecurityEvent`](../tables/securityevent.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to Endpoint Threat Protection Essentials](../solutions/endpoint-threat-protection-essentials.md)

