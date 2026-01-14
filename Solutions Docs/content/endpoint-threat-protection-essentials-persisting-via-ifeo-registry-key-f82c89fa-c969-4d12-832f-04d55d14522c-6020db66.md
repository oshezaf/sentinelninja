# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Persisting via IFEO Registry Key

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Content Index](../content/content-index.md)

---

This query detects frequent creation and deletion of IFEO registry keys in a short time, a technique used by adversaries for system persistence.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Endpoint Threat Protection Essentials](../solutions/endpoint-threat-protection-essentials.md) |
| **ID** | `f82c89fa-c969-4d12-832f-04d55d14522c` |
| **Severity** | Medium |
| **Tactics** | Persistence |
| **Techniques** | T1546.012 |
| **Required Connectors** | [SecurityEvents](../connectors/securityevents.md), [WindowsSecurityEvents](../connectors/windowssecurityevents.md), [WindowsForwardedEvents](../connectors/windowsforwardedevents.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Endpoint%20Threat%20Protection%20Essentials/Hunting%20Queries/PersistViaIFEORegistryKey.yaml) |

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

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to Endpoint Threat Protection Essentials](../solutions/endpoint-threat-protection-essentials.md)

