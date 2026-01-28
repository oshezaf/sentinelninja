# AI Agents - Organization or Multi-tenant Shared

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This query identifies Copilot Studio AI agents that are shared broadly-either with the entire organization or configured for multi-tenant access. Such configurations significantly increase the risk of unauthorized access by unintended users, which could lead to data exposure or misuse of agent capabilities.  Multi-tenant sharing is especially sensitive because it extends access beyond organizational boundaries. Recommended Action: Review these agents to confirm whether broad sharing is necessary

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | GitHub Only |
| **ID** | `4a8b2c5d-6e7f-8a9b-0c1d-2e3f4a5b6c7d` |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Hunting Queries/AI%20Agents/AIAgentsOrganizationWideShared.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API |
|:------|:---------------:|:-------------:|
| [`AIAgentsInfo`](../tables/aiagentsinfo.md) | — | ✗ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md)

