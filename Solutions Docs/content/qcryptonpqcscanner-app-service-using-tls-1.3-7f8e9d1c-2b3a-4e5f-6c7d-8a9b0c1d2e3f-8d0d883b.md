# App Service using TLS < 1.3

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

An Azure App Service is configured to accept inbound TLS below 1.3. Only TLS 1.3 supports the negotiation of hybrid PQ key exchange (X25519MLKEM768 etc.); legacy versions cannot be upgraded to PQ without a client protocol change.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [QCryptonPQCScanner](../solutions/qcryptonpqcscanner.md) |
| **ID** | `7f8e9d1c-2b3a-4e5f-6c7d-8a9b0c1d2e3f` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess |
| **Techniques** | T1190 |
| **Required Connectors** | [QCryptonPQCScanner](../connectors/qcryptonpqcscanner.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/QCryptonPQCScanner/Analytic%20Rules/AppServiceLegacyTLS.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`PQReadiness_CL`](../tables/pqreadiness-cl.md) | ? | ✓ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to QCryptonPQCScanner](../solutions/qcryptonpqcscanner.md)

