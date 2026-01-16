# GitHub First Time Repo Delete

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Content Index](../content/content-index.md)

---

This hunting query identifies GitHub activites its the first time a user deleted a repo that may be a sign of compromise.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [GitHub](../solutions/github.md) |
| **ID** | `c3237d88-fdc4-4dee-8b90-118ded2c507c` |
| **Tactics** | Impact |
| **Techniques** | T1485 |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/GitHub/Hunting%20Queries/User%20First%20Time%20Repository%20Delete%20Activity.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`GitHubAuditLogPolling_CL`](../tables/githubauditlogpolling-cl.md)
- [`GitHubAuditLogsV2_CL`](../tables/githubauditlogsv2-cl.md)
- [`GitHub_CL`](../tables/github-cl.md)
- [`ImpactedUser`](../tables/impacteduser.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to GitHub](../solutions/github.md)

