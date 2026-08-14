# Privileged identities authenticating via legacy protocols

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Identifies successful sign-ins by privileged accounts using legacy clients such as Exchange ActiveSync, IMAP4, POP3, SMTP Auth, MAPI over HTTP, or other legacy clients. These protocols may bypass modern Conditional Access and MFA controls.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | Standalone Content |
| **ID** | `06184800-6d66-46ce-aabd-7e17e9cf3fb0` |
| **Tactics** | InitialAccess, CredentialAccess |
| **Techniques** | T1078.004, T1110.003 |
| **Required Connectors** | [MicrosoftThreatProtection](../connectors/microsoftthreatprotection.md), [AzureActiveDirectory](../connectors/azureactivedirectory.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Hunting Queries/SigninLogs/PrivilegedAccountsUsingLegacyAuthentication.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`IdentityInfo`](../tables/identityinfo.md) |  | ✓ | ✗ | ✓ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md)

