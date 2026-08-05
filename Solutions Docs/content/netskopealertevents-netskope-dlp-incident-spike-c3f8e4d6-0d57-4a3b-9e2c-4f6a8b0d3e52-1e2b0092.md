# Netskope - DLP Incident Spike

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Detects a spike in Netskope DLP incidents within a short window. A sudden increase in DLP violations for a single user or DLP profile can indicate active data exfiltration, a misconfigured policy, or bulk handling of sensitive data. Triggers when a user generates more DLP incidents in the last hour than a configurable threshold.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [NetskopeAlertEvents](../solutions/netskopealertevents.md) |
| **ID** | `c3f8e4d6-0d57-4a3b-9e2c-4f6a8b0d3e52` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Exfiltration, Collection |
| **Techniques** | T1567, T1530 |
| **Required Connectors** | [NetskopeAlertEventsConnector](../connectors/netskopealerteventsconnector.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/NetskopeAlertEvents/Analytic%20Rules/NetskopeAlertEvents_Rule3.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`NetskopeAlertEvents_CL`](../tables/netskopealertevents-cl.md) | ? | ✓ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to NetskopeAlertEvents](../solutions/netskopealertevents.md)

