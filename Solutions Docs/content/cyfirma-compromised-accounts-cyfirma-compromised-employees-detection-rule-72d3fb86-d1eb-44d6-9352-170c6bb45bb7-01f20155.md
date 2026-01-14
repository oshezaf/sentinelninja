# CYFIRMA - Compromised Employees Detection Rule

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Content Index](../content/content-index.md)

---

Identifies and alerts on internal employee accounts that have been compromised, based on CYFIRMA's threat intelligence. This rule captures the latest exposure of user credentials, IP addresses, hostnames, operating systems, and pass hashes observed in the threat feed. It supports rapid detection and investigation of phishing, stealer malware, and insider compromise scenarios.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Cyfirma Compromised Accounts](../solutions/cyfirma-compromised-accounts.md) |
| **ID** | `72d3fb86-d1eb-44d6-9352-170c6bb45bb7` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | CredentialAccess, InitialAccess, Persistence |
| **Techniques** | T1003, T1552, T1078, T1098 |
| **Required Connectors** | [CyfirmaCompromisedAccountsDataConnector](../connectors/cyfirmacompromisedaccountsdataconnector.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cyfirma%20Compromised%20Accounts/Analytic%20Rules/CompromisedEmployeesRule.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`CyfirmaCompromisedAccounts_CL`](../tables/cyfirmacompromisedaccounts-cl.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Cyfirma Compromised Accounts](../solutions/cyfirma-compromised-accounts.md)

