# Vectra RUX - Create Incident for Escalated Account Detection or Unresolved Priority Account

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This query creates a Microsoft Sentinel incident when a detection on an account entity has been escalated in Vectra (investigation_status = escalated). Escalation indicates that a human analyst or MDR service has reviewed the detection and determined it requires immediate customer attention or notification. One incident is created per detection - grouping is based on alert display name so that repeated rule evaluations against the same detection do not create duplicate incidents.  This query cre

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [Vectra XDR](../solutions/vectra-xdr.md) |
| **ID** | `231904f5-b670-4223-9bec-2e9aeca9cf5a` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Discovery, LateralMovement, CredentialAccess, Exfiltration, CommandAndControl, Persistence |
| **Techniques** | T1078, T1110, T1003, T1041, T1071 |
| **Required Connectors** | [VectraRUXConnector](../connectors/vectraruxconnector.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Vectra%20XDR/Analytic%20Rules/Vectra_RUX_Incident_Detection_Account.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`Detections_Data_CCF_CL`](../tables/detections-data-ccf-cl.md) | ? | ✓ | ? |
| [`Detections_Data_CL`](../tables/detections-data-cl.md) | ✓ | ✓ | ✓ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to Vectra XDR](../solutions/vectra-xdr.md)

