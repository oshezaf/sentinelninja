# Cisco SDWAN - Monitor Critical IPs

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This analytic rule will monitor critical IPs in Syslog and Netflow Data.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Cisco SD-WAN](../solutions/cisco-sd-wan.md) |
| **ID** | `a62a207e-62be-4a74-acab-4466d5b3854f` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | CommandAndControl |
| **Techniques** | T1071 |
| **Required Connectors** | [CiscoSDWAN](../connectors/ciscosdwan.md), [CiscoSDWAN](../connectors/ciscosdwan.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cisco%20SD-WAN/Analytic%20Rules/CiscoSDWANSentinelMonitorCriticalIP.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`CiscoSDWANNetflow_CL`](../tables/ciscosdwannetflow-cl.md) | — | ✗ | ✗ |
| [`Syslog`](../tables/syslog.md) | ✓ | ✓ | ✓ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Cisco SD-WAN](../solutions/cisco-sd-wan.md)

