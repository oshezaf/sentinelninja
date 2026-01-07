# VMware ESXi - Root password changed

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

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to VMWareESXi](../solutions/vmwareesxi.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
