# Linux scheduled task Aggregation

This query aggregates and charts cron job data based on unique user-command pairs. It shows the frequency of commands, the number of computers they've run on, and their percentage of total tenant computers.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Syslog](../solutions/syslog.md) |
| **ID** | `eb09da09-6f6c-4502-bf74-f7b9f1343539` |
| **Tactics** | Persistence, Execution |
| **Techniques** | T1059, T1053, T1037 |
| **Required Connectors** | [Syslog](../connectors/syslog.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Syslog/Hunting%20Queries/SchedTaskAggregation.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`Syslog`](../tables/syslog.md)

---

**Browse:**

- [← Back to Hunting Queries](hunting-queries.md)
- [← Back to Syslog](../solutions/syslog.md)
- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

