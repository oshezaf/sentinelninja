# McAfee ePO - Multiple threats on same host

Rule fires when multiple threat events were detected on the same host.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [McAfee ePolicy Orchestrator](../solutions/mcafee-epolicy-orchestrator.md) |
| **ID** | `f53e5168-afdb-4fad-b29a-bb9cb71ec460` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess, Persistence, DefenseEvasion, PrivilegeEscalation |
| **Techniques** | T1562, T1070, T1189, T1195, T1543, T1055 |
| **Required Connectors** | [SyslogAma](../connectors/syslogama.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/McAfee%20ePolicy%20Orchestrator/Analytic%20Rules/McAfeeEPOMultipleThreatsSameHost.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`Syslog`](../tables/syslog.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to McAfee ePolicy Orchestrator](../solutions/mcafee-epolicy-orchestrator.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
