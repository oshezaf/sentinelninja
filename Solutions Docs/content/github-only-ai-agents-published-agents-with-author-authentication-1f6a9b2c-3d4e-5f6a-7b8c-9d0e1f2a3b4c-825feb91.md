# AI Agents - Published Agents with Author Authentication

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This query identifies Copilot Studio AI agents that are published and use the maker`s personal credentials in their authentication or integration flows.  This configuration introduces security risks because any interaction with the agent could leverage the maker`s privileges, potentially granting access to sensitive resources.  If the agent is compromised, attackers could perform actions with the maker`s permissions, leading to privilege escalation or data exposure. Recommended Action: Replace m

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | GitHub Only |
| **ID** | `1f6a9b2c-3d4e-5f6a-7b8c-9d0e1f2a3b4c` |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Hunting Queries/AI%20Agents/PublishedAIAgentsAuthorAuthentication.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API |
|:------|:---------------:|:-------------:|
| [`AIAgentsInfo`](../tables/aiagentsinfo.md) | — | ✗ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md)

