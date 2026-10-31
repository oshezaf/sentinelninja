# Delinea - Rare / first-seen event types

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Identifies Delinea Platform event types that appear in the recent window but were never seen during the preceding baseline period, using a leftanti join against the baseline set - with no alerting threshold applied. A brand-new event type can signal a newly enabled feature, a configuration change, or an attacker exercising functionality the environment does not normally use. Pivot on the users and source IPs associated with each first-seen event type to decide whether it is benign. Tune 'baselin

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Delinea Platform](../solutions/delinea-platform.md) |
| **ID** | `634f4212-76e3-485e-a6cc-5b1929476ef8` |
| **Tactics** | Discovery |
| **Techniques** | T1087, T1518 |
| **Required Connectors** | [DelineaPlatformConnector](../connectors/delineaplatformconnector.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Delinea%20Platform/Hunting%20Queries/DelineaRareEventTypes.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`DelineaAuditEvents_CL`](../tables/delineaauditevents-cl.md) | ✗ | ✓ | ✗ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to Delinea Platform](../solutions/delinea-platform.md)

