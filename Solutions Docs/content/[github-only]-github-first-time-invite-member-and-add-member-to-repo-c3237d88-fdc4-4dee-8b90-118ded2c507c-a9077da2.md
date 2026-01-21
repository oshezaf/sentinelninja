# GitHub First Time Invite Member and Add Member to Repo

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This hunting query identifies a user that add/invite a member to the organization for the first time. This technique can be leveraged by attackers to add stealth account access to the organization.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [[GitHub Only]](../solutions/[github-only].md) |
| **ID** | `c3237d88-fdc4-4dee-8b90-118ded2c507c` |
| **Tactics** | Persistence |
| **Techniques** | T1136 |

## Tables Used

This content item queries data from the following tables:

- [`GitHubAuditLogPolling_CL`](../tables/githubauditlogpolling-cl.md)
- [`GitHubAuditLogsV2_CL`](../tables/githubauditlogsv2-cl.md)
- [`GitHub_CL`](../tables/github-cl.md)
- [`ImpactedUser`](../tables/impacteduser.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to [GitHub Only]](../solutions/[github-only].md)

