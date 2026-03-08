# High Number of Urgent Vulnerabilities Detected

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Content Index](../content/content-index.md)

---

This Creates an incident when a host has a high number of Urgent, severity 5, vulnerabilities detected.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [QualysVM](../solutions/qualysvm.md) |
| **ID** | `3edb7215-250b-40c0-8b46-79093949242d` |
| **Severity** | Medium |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | InitialAccess |
| **Techniques** | T1190 |
| **Required Connectors** | [QualysVMLogsCCPDefinition](../connectors/qualysvmlogsccpdefinition.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/QualysVM/Analytic%20Rules/HighNumberofVulnDetectedV2.yaml) |

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`QualysHostDetectionV2_CL`](../tables/qualyshostdetectionv2-cl.md) 🔶 | ? | ✓ | ? |
| [`QualysHostDetectionV3_CL`](../tables/qualyshostdetectionv3-cl.md) | ✓ | ✓ | ✓ |
| [`QualysHostDetection_CL`](../tables/qualyshostdetection-cl.md) 🔶 | ? | ✓ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](../index.html)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to QualysVM](../solutions/qualysvm.md)

