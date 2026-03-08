# CiscoISE - ISE administrator password has been reset

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Content Index](../content/content-index.md)

---

Detects when the ISE administrator password has been reset.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Cisco ISE](../solutions/cisco-ise.md) |
| **ID** | `e63b4d90-d0a8-4609-b187-babfcc7f86d7` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Persistence, PrivilegeEscalation |
| **Techniques** | T1098 |
| **Required Connectors** | [SyslogAma](../connectors/syslogama.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cisco%20ISE/Analytic%20Rules/CiscoISEAdminPasswordReset.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`Syslog`](../tables/syslog.md) | `ProcessName has_any "CISE,CSCO"` | ✓ | ✓ | ✓ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Cisco ISE](../solutions/cisco-ise.md)

