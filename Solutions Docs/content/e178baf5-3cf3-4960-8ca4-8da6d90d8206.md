# Suspicious manipulation of firewall detected via Syslog data

This query searches for any suspicious manipulation of firewall often performed by attackers after exploiting remote code execution vulnerability in Log4j component of Apache for C2 communications or exfiltration.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Apache Log4j Vulnerability Detection](../solutions/apache-log4j-vulnerability-detection.md) |
| **ID** | `e178baf5-3cf3-4960-8ca4-8da6d90d8206` |
| **Tactics** | DefenseEvasion |
| **Techniques** | T1562 |
| **Required Connectors** | [Syslog](../connectors/syslog.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Apache%20Log4j%20Vulnerability%20Detection/Hunting%20Queries/Firewall_Disable_Activity.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`Syslog`](../tables/syslog.md)

---

**Browse:**

- [← Back to Hunting Queries](hunting-queries.md)
- [← Back to Apache Log4j Vulnerability Detection](../solutions/apache-log4j-vulnerability-detection.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
