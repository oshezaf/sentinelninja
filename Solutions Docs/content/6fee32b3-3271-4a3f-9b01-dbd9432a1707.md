# Possible Container Miner related artifacts detected

Query uses syslog data to alert on artifacts from container images used in digital cryptocurrency mining, often seen post Log4j vulnerability (CVE-2021-44228) exploitation.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Apache Log4j Vulnerability Detection](../solutions/apache-log4j-vulnerability-detection.md) |
| **ID** | `6fee32b3-3271-4a3f-9b01-dbd9432a1707` |
| **Tactics** | Impact, Execution |
| **Techniques** | T1496, T1203 |
| **Required Connectors** | [Syslog](../connectors/syslog.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Apache%20Log4j%20Vulnerability%20Detection/Hunting%20Queries/Container_Miner_Activity.yaml) |

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
