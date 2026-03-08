# <img src="../images/asim-badge.png" alt="ASIM" height="32"> Persisting via IFEO Registry Key

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

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

- [`imRegistry`](../asim/imregistry.md)

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`Event`](../tables/event.md) | `Source == "Microsoft-Windows-Sysmon"` | ✓ | ✗ | ✗ |
| [`SecurityEvent`](../tables/securityevent.md) |  | ✓ | ✓ | ✓ |
| [`WindowsEvent`](../tables/windowsevent.md) | `EventID in "12,13,4657"` | ✓ | ✓ | ✓ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to Endpoint Threat Protection Essentials](../solutions/endpoint-threat-protection-essentials.md)

