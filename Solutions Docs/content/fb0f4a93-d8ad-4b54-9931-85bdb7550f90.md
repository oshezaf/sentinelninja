# User Accessed Suspicious URL Categories

Creates an incident in the event the requested URL accessed by the user has been identified as Suspicious, Phishing, or Hacking.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [SymantecProxySG](../solutions/symantecproxysg.md) |
| **ID** | `fb0f4a93-d8ad-4b54-9931-85bdb7550f90` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess, CommandAndControl |
| **Techniques** | T1566, T1071 |
| **Required Connectors** | [SyslogAma](../connectors/syslogama.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SymantecProxySG/Analytic%20Rules/UserAccessedSuspiciousURLCategories.yaml) |

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to SymantecProxySG](../solutions/symantecproxysg.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
