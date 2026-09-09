# AnyDesk Service Installation - Potentially Malicious RMM Tool Installation

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Identifies when the AnyDesk service is installed onto a system. This can be legitimate if the organization allows AnyDesk, however if it is not a commonly utilized application, any service installations should be considered suspect.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Intel471](../solutions/intel471.md) |
| **ID** | `4103b086-f093-4084-9125-15b9a6c872b8` |
| **Tactics** | CommandAndControl, Persistence, PrivilegeEscalation |
| **Techniques** | T1219, T1543.003 |
| **Required Connectors** | [SecurityEvents](../connectors/securityevents.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Intel471/Hunting%20Queries/anydesk-service-installation-potentially-malicious-rmm-tool-installation.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`Event`](../tables/event.md) | `EventID == "7045"` | ✓ | ✓ | ✗ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to Intel471](../solutions/intel471.md)

