# Utimaco ESKM - PERMISSION_DENIED burst for a KMIP user

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Identifies a single KMIP user receiving 10 or more PERMISSION_DENIED responses within 30 minutes on Utimaco ESKM. May indicate privilege probing, key access reconnaissance, or a misconfigured application.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Utimaco Enterprise Secure Key Manager](../solutions/utimaco-enterprise-secure-key-manager.md) |
| **ID** | `9b1a3b3e-7e16-4a3b-8a8f-7f1f2b1c0a02` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Discovery |
| **Techniques** | T1087 |
| **Required Connectors** | [UtimacoESKMConnector](../connectors/utimacoeskmconnector.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Utimaco%20Enterprise%20Secure%20Key%20Manager/Analytic%20Rules/UtimacoESKM_PermissionDeniedBurst.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`UtimacoESKMKmipServerLogs_CL`](../tables/utimacoeskmkmipserverlogs-cl.md) | ? | ✓ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Utimaco Enterprise Secure Key Manager](../solutions/utimaco-enterprise-secure-key-manager.md)

