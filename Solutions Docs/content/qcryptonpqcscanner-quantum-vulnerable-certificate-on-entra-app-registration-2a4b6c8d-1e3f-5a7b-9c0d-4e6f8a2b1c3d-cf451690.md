# Quantum-vulnerable certificate on Entra app registration

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

An Entra ID (Azure AD) app registration or service principal has a certificate credential using a classical algorithm (RSA or elliptic-curve) that is vulnerable to Shor's algorithm. These certificates authenticate workloads and service-to-service flows -- a compromised cert allows impersonation of the application identity. Rotate to a PQ-hybrid certificate or shorten the validity window.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [QCryptonPQCScanner](../solutions/qcryptonpqcscanner.md) |
| **ID** | `2a4b6c8d-1e3f-5a7b-9c0d-4e6f8a2b1c3d` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | CredentialAccess |
| **Techniques** | T1552 |
| **Required Connectors** | [QCryptonPQCScanner](../connectors/qcryptonpqcscanner.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/QCryptonPQCScanner/Analytic%20Rules/QuantumVulnerableEntraCert.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`PQReadiness_CL`](../tables/pqreadiness-cl.md) | ? | ✓ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to QCryptonPQCScanner](../solutions/qcryptonpqcscanner.md)

