# ZeroNetworks

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Zero Networks |
| **Support Tier** | Partner |
| **Support Link** | [https://zeronetworks.com](https://zeronetworks.com) |
| **Categories** | domains |
| **First Published** | 2022-06-06 |
| **Last Updated** | 2025-09-17 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ZeroNetworks](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ZeroNetworks) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Zero Networks Segment Audit](../connectors/zeronetworkssegmentauditnativepoller.md)

## Tables Reference

This solution uses **2 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`ZNSegmentAuditNativePoller_CL`](../tables/znsegmentauditnativepoller-cl.md) | [Zero Networks Segment Audit](../connectors/zeronetworkssegmentauditnativepoller.md) | Analytics, Hunting, Workbooks |
| [`ZNSegmentAudit_CL`](../tables/znsegmentaudit-cl.md) | - | Analytics, Hunting, Workbooks |

## Content Items

This solution includes **12 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Hunting Queries | 4 |
| Analytic Rules | 3 |
| Playbooks | 3 |
| Workbooks | 1 |
| Parsers | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Zero Networks Segement - Machine Removed from protection](../content/a4ce12ca-d01d-460a-b15e-6c74ef328b82.md) | High | DefenseEvasion | [`ZNSegmentAuditNativePoller_CL`](../tables/znsegmentauditnativepoller-cl.md)<br>[`ZNSegmentAudit_CL`](../tables/znsegmentaudit-cl.md) |
| [Zero Networks Segment - New API Token created](../content/603a6b18-b54a-43b7-bb61-d2b0b47d224a.md) | Low | CredentialAccess | [`ZNSegmentAuditNativePoller_CL`](../tables/znsegmentauditnativepoller-cl.md)<br>[`ZNSegmentAudit_CL`](../tables/znsegmentaudit-cl.md) |
| [Zero Networks Segment - Rare JIT Rule Creation](../content/58688058-68b2-4b39-8009-ac6dc4d81ea1.md) | Medium | LateralMovement | [`ZNSegmentAuditNativePoller_CL`](../tables/znsegmentauditnativepoller-cl.md)<br>[`ZNSegmentAudit_CL`](../tables/znsegmentaudit-cl.md) |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [Zero Networks Segment - Excessive access by user](../content/3dd14edf-788d-4f42-868f-28f3208b92a9.md) | LateralMovement | [`ZNSegmentAuditNativePoller_CL`](../tables/znsegmentauditnativepoller-cl.md)<br>[`ZNSegmentAudit_CL`](../tables/znsegmentaudit-cl.md) |
| [Zero Networks Segment - Excessive access to a built-in group by user](../content/0e68d210-a8ec-4e13-9f46-61011c020b87.md) | LateralMovement | [`ZNSegmentAuditNativePoller_CL`](../tables/znsegmentauditnativepoller-cl.md)<br>[`ZNSegmentAudit_CL`](../tables/znsegmentaudit-cl.md) |
| [Zero Networks Segment - Inbound Block Rules Deleted](../content/fcbbd670-d4e6-4f3a-9008-d8905e84cf79.md) | DefenseEvasion | [`ZNSegmentAuditNativePoller_CL`](../tables/znsegmentauditnativepoller-cl.md)<br>[`ZNSegmentAudit_CL`](../tables/znsegmentaudit-cl.md) |
| [Zero Networks Segment - Outbound Block Rules Deleted](../content/d8945c8f-bba4-4e02-ad09-228b067ebcf2.md) | DefenseEvasion | [`ZNSegmentAuditNativePoller_CL`](../tables/znsegmentauditnativepoller-cl.md)<br>[`ZNSegmentAudit_CL`](../tables/znsegmentaudit-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [ZNSegmentAudit](../content/znsegmentaudit-zeronetworks.md) | [`ZNSegmentAuditNativePoller_CL`](../tables/znsegmentauditnativepoller-cl.md)<br>[`ZNSegmentAudit_CL`](../tables/znsegmentaudit-cl.md) |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Add Asset to Protection - Zero Networks Segment](../content/add-asset-to-protection---zero-networks-segment-zeronetworks.md) | This playbook takes a host from a Microsoft Sentinel incident and adds it to protection. The playboo... | - |
| [Add Block Outbound Rule - Zero Networks Acccess Orchestrator](../content/add-block-outbound-rule---zero-networks-acccess-orchestrator-zeronetworks.md) | This playbook allows blocking an IP outbound from protected assets in Zero Networks Segment. | - |
| [Enrich Incident - Zero Networks Acccess Orchestrator](../content/enrich-incident---zero-networks-acccess-orchestrator-zeronetworks.md) | This playbook will take each Host entity and get its Asset status from Zero Network Segment. The pla... | - |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [ZNSegmentAudit](../content/4677df99-9bff-4b87-a7b9-575091361d82.md) | - | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                     |
|-------------|--------------------------------|--------------------------------------------------------|
|  3.0.2      |  17-09-2025                    | Removed Deprecated **Data Connector**.  |
|  3.0.1      |  06-02-2025                    | Added missing parameter **URI** to Solution.  |
|  3.0.0      |  11-12-2024                    | Updated solution to 3.0.0  |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
