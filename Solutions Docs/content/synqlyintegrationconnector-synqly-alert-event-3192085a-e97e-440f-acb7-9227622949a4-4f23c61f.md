# Synqly Alert Event

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Creates one Microsoft Sentinel alert for each qualifying Synqly-attributed ASIM Alert Event row. Native ASIM values take precedence, with retained OCSF data used to recover investigation context when normalized fields are empty. Replayed source rows can create additional alerts, and Microsoft Sentinel or Defender XDR may correlate related alerts into a shared incident.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [SynqlyIntegrationConnector](../solutions/synqlyintegrationconnector.md) |
| **ID** | `3192085a-e97e-440f-acb7-9227622949a4` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Required Connectors** | [SynqlyIntegrationConnector](../connectors/synqlyintegrationconnector.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SynqlyIntegrationConnector/Analytic%20Rules/SynqlyAlertEventToSentinelAlert.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`ASimAlertEventLogs`](../tables/asimalerteventlogs.md) |  | ✓ | ✓ | ✓ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to SynqlyIntegrationConnector](../solutions/synqlyintegrationconnector.md)

