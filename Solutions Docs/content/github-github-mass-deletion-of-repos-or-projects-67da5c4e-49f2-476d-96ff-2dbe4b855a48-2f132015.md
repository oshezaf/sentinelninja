# GitHub Mass Deletion of repos or projects

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This hunting query identifies GitHub activites where there are a large number of deletions that may be a sign of compromise.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [GitHub](../solutions/github.md) |
| **ID** | `67da5c4e-49f2-476d-96ff-2dbe4b855a48` |
| **Tactics** | Impact |
| **Techniques** | T1485 |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/GitHub/Hunting%20Queries/Mass%20Deletion%20of%20Repositories%20.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API |
|:------|:---------------:|:-------------:|
| [`GitHubAuditLogPolling_CL`](../tables/githubauditlogpolling-cl.md) | — | — |
| [`GitHubAuditLogsV2_CL`](../tables/githubauditlogsv2-cl.md) | — | — |
| [`GitHub_CL`](../tables/github-cl.md) | — | — |
| [`ImpactedUser`](../tables/impacteduser.md) | — | — |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to GitHub](../solutions/github.md)

