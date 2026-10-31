# Certificate expiring after 2030 still uses classical signature

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

A TLS or Key Vault certificate has an expiry date after 2030-01-01 and is signed with a quantum-vulnerable classical algorithm. Long-lived certificates are the primary harvest-now- decrypt-later risk vector. Reissue with a PQ-hybrid signature or shorten validity window.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [QCryptonPQCScanner](../solutions/qcryptonpqcscanner.md) |
| **ID** | `5e4d3c2b-1a9f-4e8d-7c6b-5a4d3f2e1c0b` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Persistence |
| **Techniques** | T1556 |
| **Required Connectors** | [QCryptonPQCScanner](../connectors/qcryptonpqcscanner.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/QCryptonPQCScanner/Analytic%20Rules/CertExpiresAfter2030Classical.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`PQReadiness_CL`](../tables/pqreadiness-cl.md) | ? | ✓ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to QCryptonPQCScanner](../solutions/qcryptonpqcscanner.md)

