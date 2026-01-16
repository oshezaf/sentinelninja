# AI Agents - HTTP Requests to Connector Endpoints

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Content Index](../content/content-index.md)

---

This query identifies Copilot Studio AI agents that use HTTP actions to endpoints where Power Platform connectors are available (e.g., graph.microsoft.com, management.azure.com).  Using direct HTTP calls instead of built-in connectors can indicate inefficient implementation and may introduce security risks, such as bypassing connector-level authentication and governance controls. Recommended Action: Verify with the agent owner whether direct HTTP calls are necessary.  If not, replace them with t

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [[GitHub Only]](../solutions/[github-only].md) |
| **ID** | `8b3c7d9e-0f1a-2b3c-4d5e-6f7a8b9c0d1e` |
| **Tactics** | DefenseEvasion |
| **Techniques** | T1562 |

## Tables Used

This content item queries data from the following tables:

- [`AIAgentsInfo`](../tables/aiagentsinfo.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to [GitHub Only]](../solutions/[github-only].md)

