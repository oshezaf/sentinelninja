# Excessive Denied Proxy Traffic

This alert creates an incident when a client generates an excessive amounts of denied proxy traffic.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [SymantecProxySG](../solutions/symantecproxysg.md) |
| **ID** | `7a58b253-0ef2-4248-b4e5-c350f15a8346` |
| **Severity** | Low |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | DefenseEvasion, CommandAndControl |
| **Techniques** | T1090, T1562 |
| **Required Connectors** | [SyslogAma](../connectors/syslogama.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SymantecProxySG/Analytic%20Rules/ExcessiveDeniedProxyTraffic.yaml) |

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to SymantecProxySG](../solutions/symantecproxysg.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
