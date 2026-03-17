# AI Agents - Sending email to AI controlled input values

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This query identifies Copilot Studio AI agents using generative orchestration to send emails  via the Outlook connector where all action input values are populated dynamically by the orchestrator.  This configuration is risky because if an attacker successfully performs a prompt injection (XPIA) attack,  the agent could be manipulated to exfiltrate sensitive data to arbitrary recipients. Recommended Action: Confirm with the agent owner whether this behavior is required and understand the busines

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | GitHub Only |
| **ID** | `9e4f8a1b-2c3d-4e5f-6a7b-8c9d0e1f2a3b` |
| **Tactics** | Exfiltration, Impact |
| **Techniques** | T1041, T1565 |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Hunting Queries/AI%20Agents/AIAgentsEmailAIControlledInputs.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`AIAgentsInfo`](../tables/aiagentsinfo.md) | ? | ✗ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md)

