# Hunting Query for Failed CSPM Scan Items

This query pulls in all the failed scan results from the CSPM scans

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Prancer PenSuiteAI Integration](../solutions/prancer-pensuiteai-integration.md) |
| **ID** | `322591e4-5b68-4574-be00-2e1b618eab7c` |
| **Severity** | High |
| **Tactics** | Collection |
| **Techniques** | T0811 |
| **Required Connectors** | [PrancerLogData](../connectors/prancerlogdata.md) |
| **Solution JSON** | ⚠️ Not listed |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Prancer%20PenSuiteAI%20Integration/Hunting%20Queries/CSPM_query.yaml) |

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
