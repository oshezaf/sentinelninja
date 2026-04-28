# Zero Networks Segment - Rare JIT Rule Creation

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Identifies when a JIT Rule connection is new or rare by a given account today based on comparison with the previous 14 days. JIT Rule creations are indicated by the Activity Type Id 20

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [ZeroNetworks](../solutions/zeronetworks.md) |
| **ID** | `58688058-68b2-4b39-8009-ac6dc4d81ea1` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | LateralMovement |
| **Techniques** | T1021 |
| **Required Connectors** | [ZeroNetworksSegmentAuditFunction](../connectors/zeronetworkssegmentauditfunction.md), [ZeroNetworksSegmentAuditNativePoller](../connectors/zeronetworkssegmentauditnativepoller.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ZeroNetworks/Analytic%20Rules/ZNSegmentRareJITRuleCreation.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`ZNAudit_CL`](../tables/znaudit-cl.md) | ? | ✓ | ? |
| [`ZNSegmentAuditNativePoller_CL`](../tables/znsegmentauditnativepoller-cl.md) | ? | ✓ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to ZeroNetworks](../solutions/zeronetworks.md)

