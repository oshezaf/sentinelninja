# Generate alerts based on ExtraHop detections recommended for triage

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This analytics rule will generate alerts in Microsoft Sentinel for detections from ExtraHop that are recommended for triage.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [ExtraHop](../solutions/extrahop.md) |
| **ID** | `cd65aebc-7e85-4cbb-9f91-ff0376c5d37d` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Persistence |
| **Techniques** | T1546 |
| **Required Connectors** | [ExtraHop](../connectors/extrahop.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ExtraHop/Analytic%20Rules/ExtraHopSentinelAlerts.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`ExtraHop_Detections_CL`](../tables/extrahop-detections-cl.md) | — | ✗ | ✗ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to ExtraHop](../solutions/extrahop.md)

