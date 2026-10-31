# New quantum-vulnerable resource appeared

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

A resource with quantum-vulnerable posture appeared that was not observed in the previous 24-hour scan cycle. Investigate whether this is a new deployment that should have been provisioned with PQ-hybrid cryptography from the start.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [QCryptonPQCScanner](../solutions/qcryptonpqcscanner.md) |
| **ID** | `9b8c7d6e-5f4a-3b2c-1d0e-9f8a7b6c5d4e` |
| **Severity** | Informational |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Discovery |
| **Techniques** | T1082 |
| **Required Connectors** | [QCryptonPQCScanner](../connectors/qcryptonpqcscanner.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/QCryptonPQCScanner/Analytic%20Rules/NewQuantumVulnerableResource.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`PQReadiness_CL`](../tables/pqreadiness-cl.md) | ? | ✓ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to QCryptonPQCScanner](../solutions/qcryptonpqcscanner.md)

