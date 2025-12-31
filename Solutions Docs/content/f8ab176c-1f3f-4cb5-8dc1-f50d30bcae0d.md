# Anomalous Code Execution on a Virtual Machine

'Adversaries may abuse command and script interpreters to execute commands, scripts, or binaries. These interfaces and languages provide ways of interacting with computer systems and are a common feature across many different platforms. APT19, for example, used PowerShell commands to execute payloads. The query below generates an output of all users performing an "action" operation regarding "runCommand" in virtual machines, where one or more features of the activity deviate from the user, his p

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [UEBA Essentials](../solutions/ueba-essentials.md) |
| **ID** | `f8ab176c-1f3f-4cb5-8dc1-f50d30bcae0d` |
| **Tactics** | Execution |
| **Techniques** | T1059 |
| **Required Connectors** | [BehaviorAnalytics](../connectors/behavioranalytics.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/UEBA%20Essentials/Hunting%20Queries/Anomalous%20Code%20Execution.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`BehaviorAnalytics`](../tables/behavioranalytics.md)

---

**Browse:**

- [← Back to Hunting Queries](hunting-queries.md)
- [← Back to UEBA Essentials](../solutions/ueba-essentials.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
