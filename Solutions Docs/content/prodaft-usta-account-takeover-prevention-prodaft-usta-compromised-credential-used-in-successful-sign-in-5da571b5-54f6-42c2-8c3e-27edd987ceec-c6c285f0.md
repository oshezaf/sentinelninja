# PRODAFT USTA - Compromised credential used in successful sign-in

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Correlates corporate credentials exposed in PRODAFT USTA Account Takeover Prevention tickets with successful Microsoft Entra ID sign-ins for the same user. A successful sign-in by an account whose credentials are known to be compromised is a strong signal of account takeover. Requires the Microsoft Entra ID (SigninLogs) connector. Username matching is best-effort (case-insensitive) because USTA may record either an email or a bare username.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [PRODAFT USTA - Account Takeover Prevention](../solutions/prodaft-usta-account-takeover-prevention.md) |
| **ID** | `5da571b5-54f6-42c2-8c3e-27edd987ceec` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | CredentialAccess, InitialAccess |
| **Techniques** | T1078, T1555 |
| **Required Connectors** | [PRODAFTUstaATPCCPDefinition](../connectors/prodaftustaatpccpdefinition.md), [AzureActiveDirectory](../connectors/azureactivedirectory.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/PRODAFT%20USTA%20-%20Account%20Takeover%20Prevention/Analytic%20Rules/CompromisedCredentialUsedInSignin.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`PRODAFTUstaCompromisedCredentials_CL`](../tables/prodaftustacompromisedcredentials-cl.md) |  | ? | ✓ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to PRODAFT USTA - Account Takeover Prevention](../solutions/prodaft-usta-account-takeover-prevention.md)

