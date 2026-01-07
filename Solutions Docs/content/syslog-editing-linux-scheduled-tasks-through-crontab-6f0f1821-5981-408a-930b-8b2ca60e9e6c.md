# Editing Linux scheduled tasks through Crontab

This query displays user edits to scheduled tasks via crontab, bucketed into 10-min intervals. It collects all actions by a user over seven days.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Syslog](../solutions/syslog.md) |
| **ID** | `6f0f1821-5981-408a-930b-8b2ca60e9e6c` |
| **Tactics** | Persistence, Execution |
| **Techniques** | T1059, T1053, T1037 |
| **Required Connectors** | [Syslog](../connectors/syslog.md), [SyslogAma](../connectors/syslogama.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Syslog/Hunting%20Queries/SchedTaskEditViaCrontab.yaml) |

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
