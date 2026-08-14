# AI Agents - Hard-coded credentials in Tools or Configuration

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This query identifies AI agents that contain hard-coded credentials in their declared tools, triggers, MCP servers, skills, capabilities, or raw agent configuration. Storing credentials in clear text within agent logic creates a security risk because these secrets can be exposed to unintended users or attackers. If compromised, credentials could allow unauthorized access to external systems, APIs, or sensitive data. Recommended Action: Avoid embedding credentials directly in tools or configurati

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | GitHub Only |
| **ID** | `fdc8a7ec-586d-4021-a78a-d27544986178` |
| **Tactics** | CredentialAccess, InitialAccess |
| **Techniques** | T1552, T1078 |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Hunting Queries/AI%20Agents/AgentsInfoHardCodedCredentials.yaml) |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md)

