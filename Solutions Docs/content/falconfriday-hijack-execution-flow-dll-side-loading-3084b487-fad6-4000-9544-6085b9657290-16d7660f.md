# Hijack Execution Flow - DLL Side-Loading

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

This detection tries to identify all DLLs loaded by "high integrity" processes and cross-checks the DLL paths against FileCreate/FileModify events of the same DLL by a medium integrity process. Of course, we need to do some magic to filter out false positives as much as possible. So any FileCreate/FileModify done by "NT Authoriy\System" and the "RID 500" users aren't interesting. Also, we only want to see the FileCreate/FileModify actions which are performed with a default or limited token eleva

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [FalconFriday](../solutions/falconfriday.md) |
| **ID** | `3084b487-fad6-4000-9544-6085b9657290` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Persistence, PrivilegeEscalation, DefenseEvasion |
| **Techniques** | T1574.002 |
| **Required Connectors** | [MicrosoftThreatProtection](../connectors/microsoftthreatprotection.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/FalconFriday/Analytic%20Rules/DLLSideLoading.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Selection Criteria | Transformations | Ingestion API |
|:------|:-------------|:---------------:|:-------------:|
| [`DeviceFileEvents`](../tables/devicefileevents.md) |  | ✓ | ✗ |
| [`DeviceImageLoadEvents`](../tables/deviceimageloadevents.md) | `ActionType in "FileCreated,FileModified"` | ✓ | ✗ |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to FalconFriday](../solutions/falconfriday.md)

