# Hunting Query for High Severity PAC findings

This query pulls in all the high severity Pensuite AI pentest findings into one location

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Prancer PenSuiteAI Integration](../solutions/prancer-pensuiteai-integration.md) |
| **ID** | `37cb2dea-7a62-4a8d-923b-d588c6372608` |
| **Severity** | High |
| **Tactics** | Collection |
| **Techniques** | T0811 |
| **Required Connectors** | [PrancerLogData](../connectors/prancerlogdata.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Prancer%20PenSuiteAI%20Integration/Hunting%20Queries/PAC_high_severity_query.yaml) |

> ⚠️ **Not listed in Solution JSON:** This content item was discovered by scanning the solution folder but is not included in the official Solution JSON file. It may be a legacy item, under development, or excluded from the official solution package.

## Tables Used

This content item queries data from the following tables:

- [`prancer_CL`](../tables/prancer-cl.md)

---

**Browse:**

- [← Back to Hunting Queries](hunting-queries.md)
- [← Back to Prancer PenSuiteAI Integration](../solutions/prancer-pensuiteai-integration.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
