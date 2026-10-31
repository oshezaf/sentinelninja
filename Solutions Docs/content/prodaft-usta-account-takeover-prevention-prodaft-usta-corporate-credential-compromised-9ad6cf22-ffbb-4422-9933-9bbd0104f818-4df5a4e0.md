# PRODAFT USTA - Corporate credential compromised

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Identifies a new PRODAFT USTA Account Takeover Prevention ticket that exposes a corporate credential (IsCorporate = true). These typically originate from infostealer infections on a victim host and indicate that a valid corporate identity may be available to threat actors. Investigate the affected account, reset credentials, and review the victim host for malware.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [PRODAFT USTA - Account Takeover Prevention](../solutions/prodaft-usta-account-takeover-prevention.md) |
| **ID** | `9ad6cf22-ffbb-4422-9933-9bbd0104f818` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | CredentialAccess, InitialAccess |
| **Techniques** | T1555, T1078 |
| **Required Connectors** | [PRODAFTUstaATPCCPDefinition](../connectors/prodaftustaatpccpdefinition.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/PRODAFT%20USTA%20-%20Account%20Takeover%20Prevention/Analytic%20Rules/CorporateCredentialCompromised.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`PRODAFTUstaCompromisedCredentials_CL`](../tables/prodaftustacompromisedcredentials-cl.md) | ? | ✓ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to PRODAFT USTA - Account Takeover Prevention](../solutions/prodaft-usta-account-takeover-prevention.md)

