# AI Agents - MCP Tool with Maker Credentials

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Identifies AI agents with Model Context Protocol (MCP) tools configured using maker credentials. This configuration can create security risks because the tool runs with the maker`s personal permissions. Any user interacting with the agent could indirectly gain access to resources the maker can access. I compromised, the agent could be used to perform actions with the maker`s privileges. Recommended Action: Replace maker credentials with secure alternatives like managed identities or service prin

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | GitHub Only |
| **ID** | `7e9f6a0b-1c2d-3e4f-5a6b-7c8d9e0f1a2b` |
| **Tactics** | CredentialAccess, PrivilegeEscalation |
| **Techniques** | T1078, T1552 |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Hunting Queries/AI%20Agents/AIAgentsMCPToolMakerCredentials.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API |
|:------|:---------------:|:-------------:|
| [`AIAgentsInfo`](../tables/aiagentsinfo.md) | — | ✗ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md)

