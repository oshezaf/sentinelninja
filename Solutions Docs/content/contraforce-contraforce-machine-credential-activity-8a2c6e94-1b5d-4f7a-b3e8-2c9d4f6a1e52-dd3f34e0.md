# ContraForce - Machine credential activity

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Identifies service-account and machine-credential lifecycle activity in the ContraForce workspace: service accounts created or deleted, credentials created, regenerated or revoked, and API client secret regenerations. Machine credentials grant standing programmatic access, so unexpected lifecycle events can indicate persistence being established or an attempt to rotate credentials out from under their legitimate owner.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [ContraForce](../solutions/contraforce.md) |
| **ID** | `8a2c6e94-1b5d-4f7a-b3e8-2c9d4f6a1e52` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Persistence, CredentialAccess |
| **Techniques** | T1098, T1136 |
| **Required Connectors** | [ContraForceEvents](../connectors/contraforceevents.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ContraForce/Analytic%20Rules/ContraForceMachineCredentialActivity.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`ContraForceEvents_CL`](../tables/contraforceevents-cl.md) | ✗ | ✓ | ✗ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to ContraForce](../solutions/contraforce.md)

