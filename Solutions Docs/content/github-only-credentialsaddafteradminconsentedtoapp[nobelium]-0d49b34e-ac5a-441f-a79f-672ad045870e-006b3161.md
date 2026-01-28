# CredentialsAddAfterAdminConsentedToApp[Nobelium]

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Credentials were added to an application by UserA, after the application was granted admin consent rights by UserB The Nobelium activity group has been observed adding credentials (x509 keys or password credentials) for one or more legitimate OAuth Applications or Service Principals, usually with existing Mail.Read or Mail.ReadWrite permissions, which grants the ability to read mail content from Exchange Online via Microsoft Graph or Outlook REST. Examples include mail archiving applications. Se

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | GitHub Only |
| **ID** | `0d49b34e-ac5a-441f-a79f-672ad045870e` |
| **Tactics** | Persistence |
| **Required Connectors** | [MicrosoftThreatProtection](../connectors/microsoftthreatprotection.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Hunting Queries/Microsoft%20365%20Defender/Persistence/CredentialsAddAfterAdminConsentedToApp%5BNobelium%5D.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API |
|:------|:-------------|:---------------:|:-------------:|
| [`CloudAppEvents`](../tables/cloudappevents.md) | `ActionType in "Add service principal credentials.,Consent to application.,Update application - Certificates`<br>`secrets management"` | ✓ | ✗ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md)

