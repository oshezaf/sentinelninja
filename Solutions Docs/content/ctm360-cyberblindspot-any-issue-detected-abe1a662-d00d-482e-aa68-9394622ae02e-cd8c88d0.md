# CyberBlindSpot - Any Issue Detected

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Content Index](../content/content-index.md)

---

Generic alert that triggers when ANY CyberBlindSpot issue/incident is detected in the logs. Extracts nested metadata from RawPayload.

| Attribute | Value |
|:----------|:------|
| **Type** | Analytic Rule |
| **Solution** | [CTM360](../solutions/ctm360.md) |
| **ID** | `abe1a662-d00d-482e-aa68-9394622ae02e` |
| **Severity** | Informational |
| **Status** | Available |
| **Kind** | Scheduled |
| **Tactics** | Reconnaissance, Discovery, ResourceDevelopment, InitialAccess |
| **Techniques** | T1592, T1598, T1566 |
| **Required Connectors** | [CTM360CBSConnectorDefinition](../connectors/ctm360cbsconnectordefinition.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CTM360/Analytic%20Rules/CBSAnyIssueDetected.yaml) |

> ⚠️ **Not listed in Solution JSON:** This content item was discovered by scanning the solution folder but is not included in the official Solution JSON file. It may be a legacy item, under development, or excluded from the official solution package.

## Tables Used

This content item queries data from the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`CBSLog_AzureV2_CL`](../tables/cbslog-azurev2-cl.md) | ? | ✓ | ? |
| [`CBSLog_Azure_1_CL`](../tables/cbslog-azure-1-cl.md) 🔶 | ? | ✓ | ? |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Analytic Rules](analytic-rules.md) · [Back to CTM360](../solutions/ctm360.md)

