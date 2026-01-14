# Anomalous Failed Logon

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Content Index](../content/content-index.md)

---

Adversaries with no prior knowledge of legitimate credentials within the system or environment may guess passwords to attempt access to accounts. Emotet, for example, has been observed using a hard-coded list of passwords to brute-force user accounts. The query below generates an output of all users with 'High' BlastRadius that perform failed Sign-in:Invalid username or password.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [UEBA Essentials](../solutions/ueba-essentials.md) |
| **ID** | `77a58c08-bc8e-48b3-8fe9-6c38fd011cd9` |
| **Tactics** | CredentialAccess |
| **Techniques** | T1110.001 |
| **Required Connectors** | [BehaviorAnalytics](../connectors/behavioranalytics.md), [AzureActiveDirectory](../connectors/azureactivedirectory.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/UEBA%20Essentials/Hunting%20Queries/Anomalous%20Failed%20Logon.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`BehaviorAnalytics`](../tables/behavioranalytics.md)
- [`SigninLogs`](../tables/signinlogs.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to UEBA Essentials](../solutions/ueba-essentials.md)

