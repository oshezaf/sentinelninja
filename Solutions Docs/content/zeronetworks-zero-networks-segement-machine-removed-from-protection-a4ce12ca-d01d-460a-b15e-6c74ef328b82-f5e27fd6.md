# Zero Networks Segement - Machine Removed from protection

Detects when a machine is removed from protection.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [ZeroNetworks](../solutions/zeronetworks.md) |
| **ID** | `a4ce12ca-d01d-460a-b15e-6c74ef328b82` |
| **Severity** | High |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | DefenseEvasion |
| **Techniques** | T1562 |
| **Required Connectors** | [ZeroNetworksSegmentAuditFunction](../connectors/zeronetworkssegmentauditfunction.md), [ZeroNetworksSegmentAuditNativePoller](../connectors/zeronetworkssegmentauditnativepoller.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ZeroNetworks/Analytic%20Rules/ZNSegmentMachineRemovedfromProtection.yaml) |

## Tables Used

This content item queries data from the following tables:

- [`ZNSegmentAuditNativePoller_CL`](../tables/znsegmentauditnativepoller-cl.md)
- [`ZNSegmentAudit_CL`](../tables/znsegmentaudit-cl.md)

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to ZeroNetworks](../solutions/zeronetworks.md)

