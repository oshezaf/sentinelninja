# Utimaco ESKM - New source IPs connecting to KMIP

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Identifies new client IPs connecting to Utimaco ESKM in the last 24 hours that were not seen in the prior 14 days.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Utimaco Enterprise Secure Key Manager](../solutions/utimaco-enterprise-secure-key-manager.md) |
| **ID** | `9b1a3b3e-7e16-4a3b-8a8f-7f1f2b1c0b02` |
| **Tactics** | InitialAccess |
| **Techniques** | T1133 |
| **Required Connectors** | [UtimacoESKMConnector](../connectors/utimacoeskmconnector.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Utimaco%20Enterprise%20Secure%20Key%20Manager/Hunting%20Queries/UtimacoESKM_NewSourceIPs.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`UtimacoESKMKmipServerLogs_CL`](../tables/utimacoeskmkmipserverlogs-cl.md) | ? | ✓ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to Utimaco Enterprise Secure Key Manager](../solutions/utimaco-enterprise-secure-key-manager.md)

