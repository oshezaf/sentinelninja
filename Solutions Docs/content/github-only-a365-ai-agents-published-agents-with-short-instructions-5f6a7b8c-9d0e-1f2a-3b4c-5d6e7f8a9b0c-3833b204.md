# A365 AI Agents - Published Agents with Short Instructions

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This query identifies A365 AI agents that are published but have short or insufficient instructions.  Short instructions increase the risk of prompt injection attacks, where malicious input can influence the agent to deviate from its intended behavior.  Without clear guidance, the agent may respond unpredictably or expose sensitive data. Recommended Action: Ensure all generative orchestration components have well-defined instructions that specify the agent`s purpose, boundaries, and allowed acti

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | GitHub Only |
| **ID** | `5f6a7b8c-9d0e-1f2a-3b4c-5d6e7f8a9b0c` |
| **Tactics** | Impact, DefenseEvasion |
| **Techniques** | T1499, T1562 |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Hunting Queries/AI%20Agents/A365%20Connector/AIAgentsShortInstructions.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`AIAgentsInfo`](../tables/aiagentsinfo.md) | ? | ✗ | ? |
| [`IdentityInfo`](../tables/identityinfo.md) | ✓ | ✗ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md)

