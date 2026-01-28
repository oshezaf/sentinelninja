# ZeroNetworks

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/ZeroNetworks.svg" alt="ZeroNetworks Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

The [Zero Networks Segment](https://zeronetworks.com/product) solution for Microsoft Sentinel allows monitoring Zero Networks Segment Audit activity. Audit log data is ingested in Microsoft Sentinel using REST API.

**Underlying Microsoft Technologies used:**

This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs

 a. [Azure Monitor HTTP Data Collector API ](https://learn.microsoft.com/azure/azure-monitor/logs/data-collector-api)

 b. [Azure Functions](https://azure.microsoft.com/products/functions/#overview)

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Zero Networks |
| **Support Tier** | Partner |
| **Support Link** | [https://zeronetworks.com](https://zeronetworks.com) |
| **Categories** | domains |
| **Version** | 3.0.2 |
| **Author** | Nicholas DiCola - nicholas@zeronetworks.com |
| **First Published** | 2022-06-06 |
| **Last Updated** | 2025-09-17 |
| **Solution Folder** | [ZeroNetworks](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ZeroNetworks) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Zero Networks Segment Audit](../connectors/zeronetworkssegmentauditnativepoller.md)

## Tables Used

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
| [Zero Networks Segement - Machine Removed from protection](../content/zeronetworks-zero-networks-segement-machine-removed-from-protection-a4ce12ca-d01d-460a-b15e-6c74ef328b82-f5e27fd6.md) | High | DefenseEvasion | [`ZNSegmentAuditNativePoller_CL`](../tables/znsegmentauditnativepoller-cl.md)<br>[`ZNSegmentAudit_CL`](../tables/znsegmentaudit-cl.md) |
| [Zero Networks Segment - New API Token created](../content/zeronetworks-zero-networks-segment-new-api-token-created-603a6b18-b54a-43b7-bb61-d2b0b47d224a-514e9182.md) | Low | CredentialAccess | [`ZNSegmentAuditNativePoller_CL`](../tables/znsegmentauditnativepoller-cl.md)<br>[`ZNSegmentAudit_CL`](../tables/znsegmentaudit-cl.md) |
| [Zero Networks Segment - Rare JIT Rule Creation](../content/zeronetworks-zero-networks-segment-rare-jit-rule-creation-58688058-68b2-4b39-8009-ac6dc4d81ea1-aa30ba7d.md) | Medium | LateralMovement | [`ZNSegmentAuditNativePoller_CL`](../tables/znsegmentauditnativepoller-cl.md)<br>[`ZNSegmentAudit_CL`](../tables/znsegmentaudit-cl.md) |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [Zero Networks Segment - Excessive access by user](../content/zeronetworks-zero-networks-segment-excessive-access-by-user-3dd14edf-788d-4f42-868f-28f3208b92a9-bfeac450.md) | LateralMovement | [`ZNSegmentAuditNativePoller_CL`](../tables/znsegmentauditnativepoller-cl.md)<br>[`ZNSegmentAudit_CL`](../tables/znsegmentaudit-cl.md) |
| [Zero Networks Segment - Excessive access to a built-in group by user](../content/zeronetworks-zero-networks-segment-excessive-access-to-a-built-in-group-by-user-0e68d210-a8ec-4e13-9f46-61011c020b87-cd570e45.md) | LateralMovement | [`ZNSegmentAuditNativePoller_CL`](../tables/znsegmentauditnativepoller-cl.md)<br>[`ZNSegmentAudit_CL`](../tables/znsegmentaudit-cl.md) |
| [Zero Networks Segment - Inbound Block Rules Deleted](../content/zeronetworks-zero-networks-segment-inbound-block-rules-deleted-fcbbd670-d4e6-4f3a-9008-d8905e84cf79-9d0f02aa.md) | DefenseEvasion | [`ZNSegmentAuditNativePoller_CL`](../tables/znsegmentauditnativepoller-cl.md)<br>[`ZNSegmentAudit_CL`](../tables/znsegmentaudit-cl.md) |
| [Zero Networks Segment - Outbound Block Rules Deleted](../content/zeronetworks-zero-networks-segment-outbound-block-rules-deleted-d8945c8f-bba4-4e02-ad09-228b067ebcf2-e3e2394a.md) | DefenseEvasion | [`ZNSegmentAuditNativePoller_CL`](../tables/znsegmentauditnativepoller-cl.md)<br>[`ZNSegmentAudit_CL`](../tables/znsegmentaudit-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [ZNSegmentAudit](../content/zeronetworks-znsegmentaudit-0143013d.md) | [`ZNSegmentAuditNativePoller_CL`](../tables/znsegmentauditnativepoller-cl.md)<br>[`ZNSegmentAudit_CL`](../tables/znsegmentaudit-cl.md) |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Add Asset to Protection - Zero Networks Segment](../content/zeronetworks-add-asset-to-protection-zero-networks-segment-16e37e2a.md) | This playbook takes a host from a Microsoft Sentinel incident and adds it to protection. The playboo... | - |
| [Add Block Outbound Rule - Zero Networks Acccess Orchestrator](../content/zeronetworks-add-block-outbound-rule-zero-networks-acccess-orchestrator-7ca46c7d.md) | This playbook allows blocking an IP outbound from protected assets in Zero Networks Segment. | - |
| [Enrich Incident - Zero Networks Acccess Orchestrator](../content/zeronetworks-enrich-incident-zero-networks-acccess-orchestrator-65bface5.md) | This playbook will take each Host entity and get its Asset status from Zero Network Segment. The pla... | - |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [ZNSegmentAudit](../content/zeronetworks-znsegmentaudit-4677df99-9bff-4b87-a7b9-575091361d82-d33a74e6.md) | - | [`ZNSegmentAuditNativePoller_CL`](../tables/znsegmentauditnativepoller-cl.md) *(read)*<br>[`ZNSegmentAudit_CL`](../tables/znsegmentaudit-cl.md) *(read)* |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                     |
|-------------|--------------------------------|--------------------------------------------------------|
|  3.0.2      |  17-09-2025                    | Removed Deprecated **Data Connector**.  |
|  3.0.1      |  06-02-2025                    | Added missing parameter **URI** to Solution.  |
|  3.0.0      |  11-12-2024                    | Updated solution to 3.0.0  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

