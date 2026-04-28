# A365 AI Agents - HTTP Requests to Non-HTTPS Endpoints

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This query identifies A365 AI agents that send HTTP requests to endpoints using non-HTTPS schemes.  Communication over unencrypted HTTP exposes sensitive data in transit and increases the risk of interception or tampering.  Attackers could exploit this to capture credentials, session tokens, or other confidential information, leading to data breaches or unauthorized access. Recommended Action: Review these agents and update all HTTP actions to use HTTPS endpoints.  If non-secure communication is

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | GitHub Only |
| **ID** | `4f5a6b7c-8d9e-0f1a-2b3c-4d5e6f7a8b9c` |
| **Tactics** | CommandAndControl, CredentialAccess |
| **Techniques** | T1071, T1040 |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Hunting Queries/AI%20Agents/A365%20Connector/AIAgentsHTTPNonHTTPS.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`AIAgentsInfo`](../tables/aiagentsinfo.md) | ? | ✗ | ? |
| [`IdentityInfo`](../tables/identityinfo.md) | ✓ | ✗ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md)

