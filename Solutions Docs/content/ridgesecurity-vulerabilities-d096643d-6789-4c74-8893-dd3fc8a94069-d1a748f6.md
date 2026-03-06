# Vulerabilities

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Content Index](../content/content-index.md)

---

This query searches for all the vulerabilities that RidgeBot identified

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [RidgeSecurity](../solutions/ridgesecurity.md) |
| **ID** | `d096643d-6789-4c74-8893-dd3fc8a94069` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Execution, InitialAccess, PrivilegeEscalation |
| **Techniques** | T1189, T1059, T1053, T1548 |
| **Required Connectors** | [RidgeBotDataConnector](../connectors/ridgebotdataconnector.md), [CefAma](../connectors/cefama.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/RidgeSecurity/Analytic%20Rules/RidgeSecurity_Vulnerabilities.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | `DeviceEventClassID startswith "40"`<br>`DeviceVendor == "RidgeSecurity"` | ✓ | ✓ | ✓ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to RidgeSecurity](../solutions/ridgesecurity.md)

