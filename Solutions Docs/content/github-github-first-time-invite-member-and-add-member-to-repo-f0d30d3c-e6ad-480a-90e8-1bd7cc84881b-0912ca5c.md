# GitHub First Time Invite Member and Add Member to Repo

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Content Index](../content/content-index.md)

---

This hunting query identifies a user that add/invite a member to the organization for the first time. This technique can be leveraged by attackers to add stealth account access to the organization.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [GitHub](../solutions/github.md) |
| **ID** | `f0d30d3c-e6ad-480a-90e8-1bd7cc84881b` |
| **Tactics** | Persistence |
| **Techniques** | T1136 |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/GitHub/Hunting%20Queries/First%20Time%20User%20Invite%20and%20Add%20Member%20to%20Org.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`GitHubAuditLogPolling_CL`](../tables/githubauditlogpolling-cl.md)
- [`GitHubAuditLogsV2_CL`](../tables/githubauditlogsv2-cl.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to GitHub](../solutions/github.md)

