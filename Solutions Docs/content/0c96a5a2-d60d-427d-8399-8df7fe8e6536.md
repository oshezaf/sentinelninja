# Ransomware Client Blocked

Identifies malicious clients blocked by the Ransomware Protection service running on a Nasuni Edge Appliance.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Nasuni](../solutions/nasuni.md) |
| **ID** | `0c96a5a2-d60d-427d-8399-8df7fe8e6536` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Impact |
| **Techniques** | T1486 |
| **Required Connectors** | [SyslogAma](../connectors/syslogama.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Nasuni/Analytic%20Rules/RansomwareClientBlocked.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`Syslog`](../tables/syslog.md)

---

**Browse:**

- [← Back to Analytic Rules](analytic-rules.md)
- [← Back to Nasuni](../solutions/nasuni.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
