# GitHub Repo switched from private to public

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This hunting query identifies GitHub activites where a repo was changed from private to public that may be a sign of compromise.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [[GitHub Only]](../solutions/[github-only].md) |
| **ID** | `a6e2afd3-559c-4e88-a693-39c1f6789ef1` |
| **Tactics** | Collection |
| **Techniques** | T1213 |

## Tables Used

This content item queries data from the following tables:

- [`GitHubAuditLogPolling_CL`](../tables/githubauditlogpolling-cl.md)
- [`GitHubAuditLogsV2_CL`](../tables/githubauditlogsv2-cl.md)
- [`GitHub_CL`](../tables/github-cl.md)
- [`ImpactedUser`](../tables/impacteduser.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to [GitHub Only]](../solutions/[github-only].md)

