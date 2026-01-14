# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Known Nylon Typhoon Registry modifications patterns

This query identifies instances where malware intentionally configures the browser settings for its use by modifying the following registry entries by Nylon Typhoon threat actor.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Legacy IOC based Threat Protection](../solutions/legacy-ioc-based-threat-protection.md) |
| **ID** | `f090f8f4a-b986-42d2-b536-e0795c723e25` |
| **Severity** | Medium |
| **Tactics** | Persistence |
| **Techniques** | T1546.012 |
| **Required Connectors** | [SecurityEvents](../connectors/securityevents.md), [MicrosoftThreatProtection](../connectors/microsoftthreatprotection.md), [WindowsSecurityEvents](../connectors/windowssecurityevents.md), [WindowsForwardedEvents](../connectors/windowsforwardedevents.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Legacy%20IOC%20based%20Threat%20Protection/Hunting%20Queries/NylonTyphoonRegIOCPatterns.yaml) |

## <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> ASIM Parsers Used

This content item uses ASIM (Advanced Security Information Model) parsers for normalized data:

- [`_Im_RegistryEvent_Microsoft365D`](../asim/im-registryevent-microsoft365d.md)
- [`_Im_RegistryEvent_MicrosoftSecurityEvent`](../asim/im-registryevent-microsoftsecurityevent.md)
- [`_Im_RegistryEvent_MicrosoftSysmon`](../asim/im-registryevent-microsoftsysmon.md)
- [`_Im_RegistryEvent_MicrosoftSysmonWindowsEvent`](../asim/im-registryevent-microsoftsysmonwindowsevent.md)
- [`_Im_RegistryEvent_MicrosoftWindowsEvent`](../asim/im-registryevent-microsoftwindowsevent.md)
- [`_Im_RegistryEvent_Native`](../asim/im-registryevent-native.md)
- [`_Im_RegistryEvent_SentinelOne`](../asim/im-registryevent-sentinelone.md)
- [`_Im_RegistryEvent_TrendMicroVisionOne`](../asim/im-registryevent-trendmicrovisionone.md)
- [`_Im_RegistryEvent_VMwareCarbonBlackCloud`](../asim/im-registryevent-vmwarecarbonblackcloud.md)

## Tables Used

This content item queries data from the following tables:

- [`Event`](../tables/event.md)
- [`SecurityEvent`](../tables/securityevent.md)
- [`WindowsEvent`](../tables/windowsevent.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to Legacy IOC based Threat Protection](../solutions/legacy-ioc-based-threat-protection.md)

