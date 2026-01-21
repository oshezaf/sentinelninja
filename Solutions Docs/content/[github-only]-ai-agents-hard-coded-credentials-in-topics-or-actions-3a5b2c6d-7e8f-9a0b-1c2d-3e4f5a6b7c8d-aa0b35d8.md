# AI Agents - Hard-coded credentials in Topics or Actions

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This query identifies Copilot Studio AI agents that contain hard-coded credentials in Topics or Actions.  Storing credentials in clear text within agent logic creates a security risk because these secrets can be exposed to unintended users or attackers.  If compromised, credentials could allow unauthorized access to external systems, APIs, or sensitive data. Recommended Action: Avoid embedding credentials directly in Topics or Actions. Use secure alternatives  such as Azure Key Vault with enviro

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [[GitHub Only]](../solutions/[github-only].md) |
| **ID** | `3a5b2c6d-7e8f-9a0b-1c2d-3e4f5a6b7c8d` |
| **Tactics** | CredentialAccess, InitialAccess |
| **Techniques** | T1552, T1078 |

## Tables Used

This content item queries data from the following tables:

- [`AIAgentsInfo`](../tables/aiagentsinfo.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to [GitHub Only]](../solutions/[github-only].md)

