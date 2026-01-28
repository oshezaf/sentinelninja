# CyberArkEPM - Uncommon Windows process started from System folder

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Detects when uncommon windows proccess is started from System folder.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [CyberArkEPM](../solutions/cyberarkepm.md) |
| **ID** | `16b940d2-aaf8-4eaa-a5e1-05df5f5c3d43` |
| **Severity** | Medium |
| **Kind** | Scheduled |
| **Tactics** | Execution, DefenseEvasion |
| **Techniques** | T1204, T1036 |
| **Required Connectors** | [CyberArkEPM](../connectors/cyberarkepm.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CyberArkEPM/Analytic%20Rules/CyberArkEPMNewProcessStartetFromSystem.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API |
|:------|:---------------:|:-------------:|
| [`CyberArkEPM_CL`](../tables/cyberarkepm-cl.md) | — | — |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to CyberArkEPM](../solutions/cyberarkepm.md)

