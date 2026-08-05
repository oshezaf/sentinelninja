# Netskope - Suspicious Application Activity (Low Confidence / Risky App)

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Detects activity involving risky or low Cloud Confidence Level (CCL) applications, blocked application actions, or sensitive activities (upload, share, download) on unsanctioned apps. Helps surface Shadow IT and potential data leakage via risky cloud applications.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [NetskopeAlertEvents](../solutions/netskopealertevents.md) |
| **ID** | `b2e7d3c5-9c46-4f2a-8d1b-3e5f7a9c2d41` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Exfiltration, CommandAndControl |
| **Techniques** | T1567, T1102 |
| **Required Connectors** | [NetskopeAlertEventsConnector](../connectors/netskopealerteventsconnector.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/NetskopeAlertEvents/Analytic%20Rules/NetskopeAlertEvents_Rule2.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`NetskopeAlertEvents_CL`](../tables/netskopealertevents-cl.md) | ? | ✓ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to NetskopeAlertEvents](../solutions/netskopealertevents.md)

