# AI Agents - Published Dormant (30d)

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Content Index](../content/content-index.md)

---

This query identifies Copilot Studio AI agents that are published but have not been used by any user in the organization for the last 30 days.  Dormant agents can create unnecessary exposure and may still hold active connections or credentials, which could become a security risk if left unmanaged.  They also increase clutter and make it harder to maintain a clean, efficient environment. Recommended Action: Review these agents to confirm whether they are still needed. If not, consider unpublishin

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Standalone Content](../solutions/standalone-content.md) |
| **ID** | `5e8f1a2b-3c4d-5e6f-7a8b-9c0d1e2f3a4b` |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Hunting%20Queries/Hunting%20Queries/AI%20Agents/PublishedDormantAIAgents.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`AIAgentsInfo`](../tables/aiagentsinfo.md)
- [`CloudAppEvents`](../tables/cloudappevents.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to Standalone Content](../solutions/standalone-content.md)

