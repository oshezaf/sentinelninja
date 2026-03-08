# Votiro - File Blocked from Connector

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Content Index](../content/content-index.md)

---

The analytic rule is intended to detect when a file is blocked by Votiro Sanitization Engine due to a specific policy, and notify the appropriate parties so that they can take appropriate action. The alert message will state that a file with a specific name and hash value was blocked by Votiro Sanatization Engine due to a specific policy name, and that more details can be found at a specific incident URL.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Votiro](../solutions/votiro.md) |
| **ID** | `17bf3780-ae0d-4cd9-a884-5df8b687f3f5` |
| **Severity** | Low |
| **Kind** | Scheduled |
| **Tactics** | DefenseEvasion, Discovery, Impact |
| **Techniques** | T1036, T1083, T1057, T1082, T1565, T1498, T0837 |
| **Required Connectors** | [Votiro](../connectors/votiro.md), [CefAma](../connectors/cefama.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Votiro/Analytic%20Rules/VotiroFileBlockedFromConnector.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | `DeviceProduct == "Votiro cloud"`<br>`DeviceVendor == "Votiro"` | ✓ | ✓ | ✓ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Votiro](../solutions/votiro.md)

