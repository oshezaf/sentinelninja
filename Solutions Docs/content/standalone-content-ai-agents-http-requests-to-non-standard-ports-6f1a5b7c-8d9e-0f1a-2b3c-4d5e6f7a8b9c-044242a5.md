# AI Agents - HTTP Requests to Non-standard Ports

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Content Index](../content/content-index.md)

---

This query identifies Copilot Studio AI agents that send HTTP requests to endpoints using non-standard ports (other than 443).  Communication over uncommon ports can indicate suspicious activity, unauthorized network communication, or attempts to bypass security controls.  Such behavior may expose sensitive data or create opportunities for attackers to exploit less-monitored channels. Recommended Action: Review these agents to confirm whether using non-standard ports is necessary for the busines

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Standalone Content](../solutions/standalone-content.md) |
| **ID** | `6f1a5b7c-8d9e-0f1a-2b3c-4d5e6f7a8b9c` |
| **Tactics** | CommandAndControl, Exfiltration |
| **Techniques** | T1071, T1041 |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Hunting%20Queries/Hunting%20Queries/AI%20Agents/AIAgentsHTTPNonStandardPorts.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`AIAgentsInfo`](../tables/aiagentsinfo.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to Standalone Content](../solutions/standalone-content.md)

