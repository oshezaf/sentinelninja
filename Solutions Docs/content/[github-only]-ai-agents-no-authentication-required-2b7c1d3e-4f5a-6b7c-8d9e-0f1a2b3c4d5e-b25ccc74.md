# AI Agents - No Authentication Required

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This query identifies Copilot Studio AI agents without authentication mechanisms. Authentication is an agent-level configuration.  Such misconfiguration poses significant security risks because when the agent accesses resources requiring authentication, it authenticates as the agent's creator, not the user interacting with it.  If the agent has access to sensitive information, this could allow users to access resources they shouldn`t. Additionally, it expands the attack surface: if an attacker c

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [[GitHub Only]](../solutions/[github-only].md) |
| **ID** | `2b7c1d3e-4f5a-6b7c-8d9e-0f1a2b3c4d5e` |
| **Tactics** | InitialAccess, PrivilegeEscalation |
| **Techniques** | T1078, T1190 |

## Tables Used

This content item queries data from the following tables:

- [`AIAgentsInfo`](../tables/aiagentsinfo.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to [GitHub Only]](../solutions/[github-only].md)

