# Quantum-vulnerable key detected in Key Vault

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

A key in Azure Key Vault has been classified as quantum-vulnerable (RSA or elliptic-curve). These key types are broken by Shor's algorithm on a sufficiently large fault-tolerant quantum computer. Rotate to a PQ-hybrid key (ML-KEM, ML-DSA) or plan migration before the harvest-now-decrypt-later window closes for long-lived data.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [QCryptonPQCScanner](../solutions/qcryptonpqcscanner.md) |
| **ID** | `8a1c4f2d-2b3a-4e5f-9c1d-1a2b3c4d5e6f` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Impact |
| **Techniques** | T1565 |
| **Required Connectors** | [QCryptonPQCScanner](../connectors/qcryptonpqcscanner.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/QCryptonPQCScanner/Analytic%20Rules/QuantumVulnerableKVKey.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`PQReadiness_CL`](../tables/pqreadiness-cl.md) | ? | ✓ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to QCryptonPQCScanner](../solutions/qcryptonpqcscanner.md)

