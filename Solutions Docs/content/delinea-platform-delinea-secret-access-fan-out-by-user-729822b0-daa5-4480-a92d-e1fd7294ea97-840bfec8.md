# Delinea - Secret access fan-out by user

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Ranks users by the number of distinct secrets they accessed or exported over the lookback window, with no alerting threshold applied. The 'Bulk secret export / access' analytic rule only fires above a tuned distinct-secret threshold; this hunting query shows the full distribution so an analyst can establish what normal access fan-out looks like per principal and spot users trending upward before they cross the alert line. The Exports column highlights anyone whose activity is weighted toward exp

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [Delinea Platform](../solutions/delinea-platform.md) |
| **ID** | `729822b0-daa5-4480-a92d-e1fd7294ea97` |
| **Tactics** | CredentialAccess |
| **Techniques** | T1555, T1212 |
| **Required Connectors** | [DelineaPlatformConnector](../connectors/delineaplatformconnector.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Delinea%20Platform/Hunting%20Queries/DelineaSecretAccessFanout.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`DelineaAuditEvents_CL`](../tables/delineaauditevents-cl.md) | ✗ | ✓ | ✗ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to Delinea Platform](../solutions/delinea-platform.md)

