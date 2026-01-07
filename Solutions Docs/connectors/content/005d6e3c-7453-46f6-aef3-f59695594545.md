# Suspicious crytocurrency mining related threat activity detected

This query detects terminated suspicious crypto mining payloads/processes. Attackers often halt other mining processes to gain more resources on compromised systems for their payload.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Syslog](../solutions/syslog.md) |
| **ID** | `005d6e3c-7453-46f6-aef3-f59695594545` |
| **Tactics** | DefenseEvasion |
| **Techniques** | T1489 |
| **Required Connectors** | [Syslog](../connectors/syslog.md), [SyslogAma](../connectors/syslogama.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Syslog/Hunting%20Queries/CryptoThreatActivity.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`Syslog`](../tables/syslog.md)

---

**Browse:**

- [← Back to Hunting Queries](hunting-queries.md)
- [← Back to Syslog](../solutions/syslog.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
