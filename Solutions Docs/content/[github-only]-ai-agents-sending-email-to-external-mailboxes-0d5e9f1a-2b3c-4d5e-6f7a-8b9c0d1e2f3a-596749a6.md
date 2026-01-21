# AI Agents - Sending email to external mailboxes

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This query identifies Copilot Studio AI agents configured to send emails to external mailboxes (outside the organization`s domains).  Such configurations can lead to sensitive or internal data being exfiltrated beyond organizational boundaries, creating compliance and security risks.  Attackers could exploit this to leak confidential information or use compromised agents as a channel for data exfiltration. Recommended Action: Verify with the agent owner whether sending emails externally is neces

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [[GitHub Only]](../solutions/[github-only].md) |
| **ID** | `0d5e9f1a-2b3c-4d5e-6f7a-8b9c0d1e2f3a` |
| **Tactics** | Exfiltration |
| **Techniques** | T1041 |

## Tables Used

This content item queries data from the following tables:

- [`AIAgentsInfo`](../tables/aiagentsinfo.md)
- [`IdentityInfo`](../tables/identityinfo.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to [GitHub Only]](../solutions/[github-only].md)

