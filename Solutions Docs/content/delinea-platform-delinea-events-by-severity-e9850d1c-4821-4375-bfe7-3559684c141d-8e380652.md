# Delinea - Events by severity

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Breaks down the Delinea Platform audit stream by event severity / level (e.g. PrivilegedActivity, Info, Warning, Error) over the lookback window, with no alerting threshold applied. Shows the event count, distinct users, and the top event types contributing to each level so an analyst can gauge the overall mix of activity and zero in on the higher-severity tiers. Use it to spot an unusual spike of privileged or error-level events relative to normal volume.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Delinea Platform](../solutions/delinea-platform.md) |
| **ID** | `e9850d1c-4821-4375-bfe7-3559684c141d` |
| **Tactics** | Discovery |
| **Techniques** | T1087 |
| **Required Connectors** | [DelineaPlatformConnector](../connectors/delineaplatformconnector.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Delinea%20Platform/Hunting%20Queries/DelineaEventsBySeverity.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`DelineaAuditEvents_CL`](../tables/delineaauditevents-cl.md) | ✗ | ✓ | ✗ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to Delinea Platform](../solutions/delinea-platform.md)

