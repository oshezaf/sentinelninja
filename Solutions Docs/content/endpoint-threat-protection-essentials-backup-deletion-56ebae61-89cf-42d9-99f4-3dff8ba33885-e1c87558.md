# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Backup Deletion

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Content Index](../content/content-index.md)

---

This query detects attempts to delete backups, which could be ransomware activity to prevent file restoration and disrupt business services.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Endpoint Threat Protection Essentials](../solutions/endpoint-threat-protection-essentials.md) |
| **ID** | `56ebae61-89cf-42d9-99f4-3dff8ba33885` |
| **Tactics** | Impact |
| **Techniques** | T1490 |
| **Required Connectors** | [MicrosoftDefenderAdvancedThreatProtection](../connectors/microsoftdefenderadvancedthreatprotection.md), [MicrosoftThreatProtection](../connectors/microsoftthreatprotection.md), [WindowsSecurityEvents](../connectors/windowssecurityevents.md), [WindowsForwardedEvents](../connectors/windowsforwardedevents.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Endpoint%20Threat%20Protection%20Essentials/Hunting%20Queries/BackupDeletion.yaml) |

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
- [`WindowsEvent`](../tables/windowsevent.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to Endpoint Threat Protection Essentials](../solutions/endpoint-threat-protection-essentials.md)

