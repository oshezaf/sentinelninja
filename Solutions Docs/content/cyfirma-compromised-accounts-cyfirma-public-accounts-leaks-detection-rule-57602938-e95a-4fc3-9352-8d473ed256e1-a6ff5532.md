# CYFIRMA - Public Accounts Leaks Detection Rule

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Content Index](../content/content-index.md)

---

Detects exposed public-facing account credentials as identified in CYFIRMA's threat intelligence feeds. This rule monitors for credentials leaked through third-party breaches, dark web sources, or public repositories that could impact the organization's users or systems. It captures key details such as email, username, IP address, and associated devices. These accounts may not be directly managed by the enterprise but still pose a risk of lateral access, shadow IT, or third-party exposure.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Cyfirma Compromised Accounts](../solutions/cyfirma-compromised-accounts.md) |
| **ID** | `57602938-e95a-4fc3-9352-8d473ed256e1` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | CredentialAccess, InitialAccess, Discovery |
| **Techniques** | T1078, T1087, T1552 |
| **Required Connectors** | [CyfirmaCompromisedAccountsDataConnector](../connectors/cyfirmacompromisedaccountsdataconnector.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cyfirma%20Compromised%20Accounts/Analytic%20Rules/PublicAccountsLeaksRule.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`CyfirmaCompromisedAccounts_CL`](../tables/cyfirmacompromisedaccounts-cl.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Cyfirma Compromised Accounts](../solutions/cyfirma-compromised-accounts.md)

