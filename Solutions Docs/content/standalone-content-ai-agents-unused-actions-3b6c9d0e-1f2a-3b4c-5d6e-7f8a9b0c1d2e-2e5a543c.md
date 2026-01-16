# AI Agents - Unused Actions

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Content Index](../content/content-index.md)

---

This query identifies Copilot Studio AI agents with classic orchestration that include Actions not referenced in any Topic.  While unused Actions may not pose an immediate security risk, they can introduce unnecessary exposure and potential maintenance issues.  In some cases, these orphaned Actions might still hold sensitive connection details or credentials, creating an indirect exposure risk if overlooked. Recommended Action: Review and remove unused Actions to reduce attack surface, simplify

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Standalone Content](../solutions/standalone-content.md) |
| **ID** | `3b6c9d0e-1f2a-3b4c-5d6e-7f8a9b0c1d2e` |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Hunting%20Queries/Hunting%20Queries/AI%20Agents/AIAgentsUnusedActions.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`AIAgentsInfo`](../tables/aiagentsinfo.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to Standalone Content](../solutions/standalone-content.md)

