# Failover Plan Started

Detects when a failover plan starts. This might indicate disaster recovery activity or issues with primary systems.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Veeam](../solutions/veeam.md) |
| **ID** | `e06ec6d7-d9f6-4675-89bf-03fa8a0e0be0` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Required Connectors** | [Syslog](../connectors/syslog.md), [SyslogAma](../connectors/syslogama.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Veeam/Analytic%20Rules/Failover_Plan_Started.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`Event`](../tables/event.md)
- [`Syslog`](../tables/syslog.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Veeam](../solutions/veeam.md)

