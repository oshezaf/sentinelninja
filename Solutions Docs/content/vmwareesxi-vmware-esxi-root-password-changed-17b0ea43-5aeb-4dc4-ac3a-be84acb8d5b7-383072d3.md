# VMware ESXi - Root password changed

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Content Index](../content/content-index.md)

---

Detects when root user password is changed.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [VMWareESXi](../solutions/vmwareesxi.md) |
| **ID** | `17b0ea43-5aeb-4dc4-ac3a-be84acb8d5b7` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess, Persistence, DefenseEvasion |
| **Techniques** | T1078, T1098, T1556 |
| **Required Connectors** | [SyslogAma](../connectors/syslogama.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/VMWareESXi/Analytic%20Rules/ESXiRootPasswordChange.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`Syslog`](../tables/syslog.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to VMWareESXi](../solutions/vmwareesxi.md)

