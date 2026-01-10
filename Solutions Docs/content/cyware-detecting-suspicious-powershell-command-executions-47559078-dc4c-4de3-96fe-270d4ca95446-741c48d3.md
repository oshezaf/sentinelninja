# Detecting Suspicious PowerShell Command Executions

Query identifies users denied registration for multiple webinars or recordings but successfully registered for at least one event. Threshold variable adjusts number of events user needs to be rejected from.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Cyware](../solutions/cyware.md) |
| **ID** | `47559078-dc4c-4de3-96fe-270d4ca95446` |
| **Tactics** | Execution |
| **Techniques** | T1059 |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cyware/Hunting%20Queries/DetectingSuspiciousPowerShellCommandExecutions.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`DeviceProcessEvents`](../tables/deviceprocessevents.md)

---

**Browse:**

- [← Back to Hunting Queries](hunting-queries.md)
- [← Back to Cyware](../solutions/cyware.md)
- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

