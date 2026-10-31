# ContraForce - Destructive workspace action

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Identifies destructive actions against the ContraForce workspace or its account: workspace deletion, account deactivation, and account purge. These actions terminate or remove the security service delivery for the affected workspace and should always correspond to a planned offboarding; anything else warrants immediate investigation.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [ContraForce](../solutions/contraforce.md) |
| **ID** | `c5e9a1d7-4b2f-4e6c-8a9d-7f3b1c5e2a84` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Impact |
| **Techniques** | T1485, T1531 |
| **Required Connectors** | [ContraForceEvents](../connectors/contraforceevents.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ContraForce/Analytic%20Rules/ContraForceDestructiveWorkspaceAction.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`ContraForceEvents_CL`](../tables/contraforceevents-cl.md) | ✗ | ✓ | ✗ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to ContraForce](../solutions/contraforce.md)

