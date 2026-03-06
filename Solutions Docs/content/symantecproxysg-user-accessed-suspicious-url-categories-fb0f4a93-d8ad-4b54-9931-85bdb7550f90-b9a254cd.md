# User Accessed Suspicious URL Categories

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Content Index](../content/content-index.md)

---

Creates an incident in the event the requested URL accessed by the user has been identified as Suspicious, Phishing, or Hacking.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [SymantecProxySG](../solutions/symantecproxysg.md) |
| **ID** | `fb0f4a93-d8ad-4b54-9931-85bdb7550f90` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess, CommandAndControl |
| **Techniques** | T1566, T1071 |
| **Required Connectors** | [SyslogAma](../connectors/syslogama.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SymantecProxySG/Analytic%20Rules/UserAccessedSuspiciousURLCategories.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`Syslog`](../tables/syslog.md) | `Facility == "local0"` | ✓ | ✓ | ✓ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to SymantecProxySG](../solutions/symantecproxysg.md)

