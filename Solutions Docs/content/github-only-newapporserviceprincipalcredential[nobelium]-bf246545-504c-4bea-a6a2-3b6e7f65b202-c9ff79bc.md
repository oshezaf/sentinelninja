# NewAppOrServicePrincipalCredential[Nobelium]

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This query will find when a new credential is added to an application or service principal. The Nobelium activity group was able to gain sufficient access to add credentials to existing applications with mail read permissions. They used that access to exfiltrate email. See Customer Guidance on Recent Nation-State Cyber Attacks for more on the Nobelium campaign (formerly known as Solorigate). Additional information on OAuth Credential Grants can be found in RFC 6749 Section 4.4 or Microsoft Entra

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | GitHub Only |
| **ID** | `bf246545-504c-4bea-a6a2-3b6e7f65b202` |
| **Tactics** | Persistence |
| **Required Connectors** | [MicrosoftThreatProtection](../connectors/microsoftthreatprotection.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Hunting Queries/Microsoft%20365%20Defender/Persistence/NewAppOrServicePrincipalCredential%5BNobelium%5D.yaml) |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md)

