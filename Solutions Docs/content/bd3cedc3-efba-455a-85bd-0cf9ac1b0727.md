# McAfee ePO - Firewall disabled

Detects when firewall was disabled from Mctray.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [McAfee ePolicy Orchestrator](../solutions/mcafee-epolicy-orchestrator.md) |
| **ID** | `bd3cedc3-efba-455a-85bd-0cf9ac1b0727` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | DefenseEvasion, CommandAndControl |
| **Techniques** | T1562, T1071 |
| **Required Connectors** | [SyslogAma](../connectors/syslogama.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/McAfee%20ePolicy%20Orchestrator/Analytic%20Rules/McAfeeEPOFirewallDisabled.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`Syslog`](../tables/syslog.md)

---

**Browse:**

- [← Back to Analytic Rules](../analytic-rules.md)
- [← Back to McAfee ePolicy Orchestrator](../solutions/mcafee-epolicy-orchestrator.md)
- [Content Index](../content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
