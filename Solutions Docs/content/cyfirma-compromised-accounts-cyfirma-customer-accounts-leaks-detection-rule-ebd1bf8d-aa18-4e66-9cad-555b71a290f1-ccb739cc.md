# CYFIRMA - Customer Accounts Leaks Detection Rule

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Detects recent leaks of customer account credentials based on CYFIRMA's threat intelligence.   This rule surfaces the latest credential exposures, including email, username, and breach metadata.   It enables security teams to quickly identify and investigate leaked customer data from third-party breaches, dark web listings, or public repositories.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Cyfirma Compromised Accounts](../solutions/cyfirma-compromised-accounts.md) |
| **ID** | `ebd1bf8d-aa18-4e66-9cad-555b71a290f1` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | CredentialAccess, InitialAccess |
| **Techniques** | T1552, T1078 |
| **Required Connectors** | [CyfirmaCompromisedAccountsDataConnector](../connectors/cyfirmacompromisedaccountsdataconnector.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cyfirma%20Compromised%20Accounts/Analytic%20Rules/CustomerAccountsLeaksRule.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API |
|:------|:---------------:|:-------------:|
| [`CyfirmaCompromisedAccounts_CL`](../tables/cyfirmacompromisedaccounts-cl.md) | — | — |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Cyfirma Compromised Accounts](../solutions/cyfirma-compromised-accounts.md)

