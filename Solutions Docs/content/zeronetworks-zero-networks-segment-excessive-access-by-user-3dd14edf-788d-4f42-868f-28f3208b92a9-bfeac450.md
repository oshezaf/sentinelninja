# Zero Networks Segment - Excessive access by user

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Find users who gained access to the largest number of target assets in the selected time range

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [ZeroNetworks](../solutions/zeronetworks.md) |
| **ID** | `3dd14edf-788d-4f42-868f-28f3208b92a9` |
| **Severity** | Medium |
| **Tactics** | LateralMovement |
| **Techniques** | T1210, T1570, T0866 |
| **Required Connectors** | [ZeroNetworksSegmentAuditFunction](../connectors/zeronetworkssegmentauditfunction.md), [ZeroNetworksSegmentAuditNativePoller](../connectors/zeronetworkssegmentauditnativepoller.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ZeroNetworks/Hunting%20Queries/ZNSegmentExcessiveAccessbyUser.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`ZNSegmentAuditNativePoller_CL`](../tables/znsegmentauditnativepoller-cl.md) | — | ✗ | ✗ |
| [`ZNSegmentAudit_CL`](../tables/znsegmentaudit-cl.md) | — | — | — |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Hunting Queries](hunting-queries.md) · [Back to ZeroNetworks](../solutions/zeronetworks.md)

