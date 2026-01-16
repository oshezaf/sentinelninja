# GitHub Inactive or New Account Access or Usage

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Content Index](../content/content-index.md)

---

This hunting query identifies Accounts that are new or inactive and have accessed or used GitHub that may be a sign of compromise.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [GitHub](../solutions/github.md) |
| **ID** | `b8508e24-47a6-4f8e-9066-3cc937197e7f` |
| **Tactics** | Persistence |
| **Techniques** | T1136 |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/GitHub/Hunting%20Queries/Inactive%20or%20New%20Account%20Usage.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`GitHubAuditLogPolling_CL`](../tables/githubauditlogpolling-cl.md)
- [`GitHubAuditLogsV2_CL`](../tables/githubauditlogsv2-cl.md)
- [`GitHub_CL`](../tables/github-cl.md)
- [`ImpactedUser`](../tables/impacteduser.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to GitHub](../solutions/github.md)

