# Zero Networks Segment - Excessive access to a built-in group by user

A rule was created which granted a user access to a large, built-in, group of assets.

| Attribute | Value |
|:----------|:------|
| **Type** | Hunting Query |
| **Solution** | [ZeroNetworks](../solutions/zeronetworks.md) |
| **ID** | `0e68d210-a8ec-4e13-9f46-61011c020b87` |
| **Severity** | Medium |
| **Tactics** | LateralMovement |
| **Techniques** | T1210, T1570, T0866 |
| **Required Connectors** | [ZeroNetworksSegmentAuditFunction](../connectors/zeronetworkssegmentauditfunction.md), [ZeroNetworksSegmentAuditNativePoller](../connectors/zeronetworkssegmentauditnativepoller.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ZeroNetworks/Hunting%20Queries/ZNSegmentExcessiveAccesstoBuiltinGroupbyUser.yaml) |

---

**Browse:**

- [← Back to Hunting Queries](hunting-queries.md)
- [← Back to ZeroNetworks](../solutions/zeronetworks.md)
- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

