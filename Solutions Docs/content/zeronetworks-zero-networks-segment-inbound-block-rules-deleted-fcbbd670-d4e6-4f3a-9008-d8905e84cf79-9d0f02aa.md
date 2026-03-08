# Zero Networks Segment - Inbound Block Rules Deleted

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Content Index](../content/content-index.md)

---

Query searches for inbound block rules deleted by non AI.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [ZeroNetworks](../solutions/zeronetworks.md) |
| **ID** | `fcbbd670-d4e6-4f3a-9008-d8905e84cf79` |
| **Severity** | Medium |
| **Tactics** | DefenseEvasion |
| **Techniques** | T1562 |
| **Required Connectors** | [ZeroNetworksSegmentAuditFunction](../connectors/zeronetworkssegmentauditfunction.md), [ZeroNetworksSegmentAuditNativePoller](../connectors/zeronetworkssegmentauditnativepoller.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ZeroNetworks/Hunting%20Queries/ZNSegmentInboundBlockRulesDeleted.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`ZNSegmentAuditNativePoller_CL`](../tables/znsegmentauditnativepoller-cl.md) | ✗ | ✓ | ✗ |
| [`ZNSegmentAudit_CL`](../tables/znsegmentaudit-cl.md) 🔶 | ? | ✓ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../../index.html)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to ZeroNetworks](../solutions/zeronetworks.md)

