# AI Agents - Published Agents with Short Instructions

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This query identifies AI agents that are published but have short or insufficient instructions (fewer than 100 characters). Short instructions increase the risk of prompt injection attacks, where malicious input can influence the agent to deviate from its intended behavior. Without clear guidance, the agent may respond unpredictably or expose sensitive data. Recommended Action: Ensure all published agents have well-defined instructions that specify the agent's purpose, boundaries, and allowed ac

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | GitHub Only |
| **ID** | `2f1f88de-d79f-44bf-96d0-52fd9cbf49c4` |
| **Tactics** | Impact, DefenseEvasion |
| **Techniques** | T1499, T1562 |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Hunting Queries/AI%20Agents/AgentsInfoShortInstructions.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`AgentsInfo`](../tables/agentsinfo.md) | `Instructions != "N/A"`<br>`LifecycleStatus != "Deleted"`<br>`PublishedStatus == "Published"` | ✓ | ✗ | ✓ |
| [`IdentityInfo`](../tables/identityinfo.md) |  | ✓ | ✗ | ✓ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md)

