# McAfee ePO - Infected Systems

Query searches for infected systems based on scan results.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [McAfee ePolicy Orchestrator](../solutions/mcafee-epolicy-orchestrator.md) |
| **ID** | `2e7a56fb-ffff-491c-bdee-e772f83c47e2` |
| **Tactics** | InitialAccess |
| **Techniques** | T1189, T1195 |
| **Required Connectors** | [SyslogAma](../connectors/syslogama.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/McAfee%20ePolicy%20Orchestrator/Hunting%20Queries/McAfeeEPOInfectedSystems.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`Syslog`](../tables/syslog.md)

---

**Browse:**

- [← Back to Hunting Queries](../hunting-queries.md)
- [← Back to McAfee ePolicy Orchestrator](../solutions/mcafee-epolicy-orchestrator.md)
- [Content Index](../content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
