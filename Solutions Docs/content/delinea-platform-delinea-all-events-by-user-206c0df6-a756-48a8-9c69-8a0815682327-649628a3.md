# Delinea - All events by user

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Summarizes every Delinea Platform audit event over the lookback window grouped by the acting user, with no alerting threshold applied. Gives an analyst a single per-principal activity baseline - total events, which services and event types each user touched, how many distinct source IPs they came from, and their first/last activity in range. Pivot on users with an unusually broad event-type or source-IP footprint, or use it as the starting point for a deeper per-user investigation.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Delinea Platform](../solutions/delinea-platform.md) |
| **ID** | `206c0df6-a756-48a8-9c69-8a0815682327` |
| **Tactics** | Discovery |
| **Techniques** | T1087 |
| **Required Connectors** | [DelineaPlatformConnector](../connectors/delineaplatformconnector.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Delinea%20Platform/Hunting%20Queries/DelineaAllEventsByUser.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`DelineaAuditEvents_CL`](../tables/delineaauditevents-cl.md) | ? | ✓ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to Delinea Platform](../solutions/delinea-platform.md)

