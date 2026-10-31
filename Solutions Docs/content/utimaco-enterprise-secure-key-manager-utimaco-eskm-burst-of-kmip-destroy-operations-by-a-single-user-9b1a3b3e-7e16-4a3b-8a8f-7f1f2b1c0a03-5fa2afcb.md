# Utimaco ESKM - Burst of KMIP DESTROY operations by a single user

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Identifies a single KMIP user issuing 20 or more DESTROY operations within 10 minutes on Utimaco ESKM. May indicate mass key/object deletion, insider sabotage, or ransomware-style cryptographic-material destruction.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Utimaco Enterprise Secure Key Manager](../solutions/utimaco-enterprise-secure-key-manager.md) |
| **ID** | `9b1a3b3e-7e16-4a3b-8a8f-7f1f2b1c0a03` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Impact |
| **Techniques** | T1485 |
| **Required Connectors** | [UtimacoESKMConnector](../connectors/utimacoeskmconnector.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Utimaco%20Enterprise%20Secure%20Key%20Manager/Analytic%20Rules/UtimacoESKM_DestroyBurst.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`UtimacoESKMKmipServerLogs_CL`](../tables/utimacoeskmkmipserverlogs-cl.md) | ? | ✓ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Utimaco Enterprise Secure Key Manager](../solutions/utimaco-enterprise-secure-key-manager.md)

