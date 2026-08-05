# PRODAFT USTA - Infostealer exposure across corporate identities

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Summarizes corporate credential exposure from PRODAFT USTA ATP tickets, grouped by company and country. Shows distinct victim hosts and malware families to help spot infostealer activity affecting your identities.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [PRODAFT USTA - Account Takeover Prevention](../solutions/prodaft-usta-account-takeover-prevention.md) |
| **ID** | `c2acc93e-23c8-4d0c-87d7-eee7064e8fec` |
| **Tactics** | CredentialAccess |
| **Techniques** | T1555 |
| **Required Connectors** | [PRODAFTUstaATPCCPDefinition](../connectors/prodaftustaatpccpdefinition.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/PRODAFT%20USTA%20-%20Account%20Takeover%20Prevention/Hunting%20Queries/InfostealerExposureByCompany.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`PRODAFTUstaCompromisedCredentials_CL`](../tables/prodaftustacompromisedcredentials-cl.md) | ? | ✓ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to PRODAFT USTA - Account Takeover Prevention](../solutions/prodaft-usta-account-takeover-prevention.md)

