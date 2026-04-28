# Copilot Studio AI Agents - Dormant Author Authentication Connection

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This query identifies Copilot Studio AI agents that are published and contain actions configured with Author Authentication (maker`s personal credentials) but have not been used or invoked in the last 30 days.  Dormant actions with elevated permissions pose a security risk because they retain access to resources even when inactive.  If these credentials remain valid, an attacker compromising the agent or its environment could exploit them for privilege escalation or unauthorized access. Recommen

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | GitHub Only |
| **ID** | `2a5b8c1d-4e7f-0a1b-2c3d-4e5f6a7b8c9d` |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Hunting Queries/AI%20Agents/Copilot%20Studio%20Connector/DormantAuthorAuthenticationAIAgents.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`AIAgentsInfo`](../tables/aiagentsinfo.md) |  | ? | ✗ | ? |
| [`CloudAppEvents`](../tables/cloudappevents.md) | `ActionType == "CopilotInteraction"` | ✓ | ✗ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md)

