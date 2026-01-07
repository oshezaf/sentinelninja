# CyberArk - High-Risk Actions Outside Business Hours

Detects privileged or destructive actions (delete/disable/rotate/elevate/etc.) occurring outside standard business hours. Useful for insider misuse or compromised admin detection.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [CyberArkAudit](../solutions/cyberarkaudit.md) |
| **Severity** | High |
| **Kind** | Scheduled |
| **Tactics** | DefenseEvasion |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CyberArkAudit/Analytics%20Rules/CyberArkAuditHighRiskActions.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`CyberArk_AuditEvents_CL`](../tables/cyberark-auditevents-cl.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to CyberArkAudit](../solutions/cyberarkaudit.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
