# ZNSegmentAudit_CL

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Ingestion API Supported** | ✓ Yes |

## Schema (22 columns)

**Source:** [KQL validation test schema](https://github.com/Azure/Azure-Sentinel/blob/master/.script/tests/KqlvalidationsTests/CustomTables/ZNSegmentAudit_CL.json)

| Column Name | Type |
|:------------|:-----|
| _ResourceId | string |
| auditType_d | real |
| Computer | string |
| destinationEntitiesList_s | string |
| details_s | string |
| enforcementSource_d | real |
| ManagementGroupName | string |
| MG | string |
| parentObjectId_g | string |
| performedBy_id_g | string |
| performedBy_id_s | string |
| performedBy_name_s | string |
| RawData | string |
| reportedObjectGeneration_d | real |
| reportedObjectId_g | string |
| reportedObjectId_s | string |
| SourceSystem | string |
| TenantId | string |
| TimeGenerated | datetime |
| timestamp_d | datetime |
| Type | string |
| userRole_d | real |

## Solutions (1)

This table is used by the following solutions:

- [ZeroNetworks](../solutions/zeronetworks.md)

---

## Content Items Using This Table (8)

### Analytic Rules (3)

**In solution [ZeroNetworks](../solutions/zeronetworks.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Zero Networks Segement - Machine Removed from protection](../content/zeronetworks-zero-networks-segement-machine-removed-from-protection-a4ce12ca-d01d-460a-b15e-6c74ef328b82-f5e27fd6.md) |  |
| [Zero Networks Segment - New API Token created](../content/zeronetworks-zero-networks-segment-new-api-token-created-603a6b18-b54a-43b7-bb61-d2b0b47d224a-514e9182.md) |  |
| [Zero Networks Segment - Rare JIT Rule Creation](../content/zeronetworks-zero-networks-segment-rare-jit-rule-creation-58688058-68b2-4b39-8009-ac6dc4d81ea1-aa30ba7d.md) |  |

### Hunting Queries (4)

**In solution [ZeroNetworks](../solutions/zeronetworks.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [Zero Networks Segment - Excessive access by user](../content/zeronetworks-zero-networks-segment-excessive-access-by-user-3dd14edf-788d-4f42-868f-28f3208b92a9-bfeac450.md) |  |
| [Zero Networks Segment - Excessive access to a built-in group by user](../content/zeronetworks-zero-networks-segment-excessive-access-to-a-built-in-group-by-user-0e68d210-a8ec-4e13-9f46-61011c020b87-cd570e45.md) |  |
| [Zero Networks Segment - Inbound Block Rules Deleted](../content/zeronetworks-zero-networks-segment-inbound-block-rules-deleted-fcbbd670-d4e6-4f3a-9008-d8905e84cf79-9d0f02aa.md) |  |
| [Zero Networks Segment - Outbound Block Rules Deleted](../content/zeronetworks-zero-networks-segment-outbound-block-rules-deleted-d8945c8f-bba4-4e02-ad09-228b067ebcf2-e3e2394a.md) |  |

### Workbooks (1)

**In solution [ZeroNetworks](../solutions/zeronetworks.md):**

| Content Item | Selection Criteria |
|:-------------|:-------------------|
| [ZNSegmentAudit](../content/zeronetworks-znsegmentaudit-0143013d.md) |  |

## Parsers Using This Table (1)

### Other Parsers (1)

| Parser | Solution | Selection Criteria |
|:-------|:---------|:-------------------|
| [ZNSegmentAudit](../parsers/znsegmentaudit.md) | [ZeroNetworks](../solutions/zeronetworks.md) |  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Tables Index](../tables-index.md)

