# 🔗 Azure Health Data Services (Azure Diagnostics)

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Integrations](../integrations-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Integrations Index](../integrations-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Collection Method** | [Azure Diagnostics](../methods/azure-diagnostics.md) |

[Azure Health Data Services](https://learn.microsoft.com/en-us/azure/healthcare-apis/healthcare-apis-overview) is a set of managed API services for health data in FHIR, DICOM, and MedTech formats.

To collect Azure Health Data Services logs into a Log Analytics workspace, configure [Azure Diagnostic Settings](https://learn.microsoft.com/en-us/azure/healthcare-apis/logging) for the resource, selecting the log categories to send to the workspace.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`AHDSDeidAuditLogs`](../tables/ahdsdeidauditlogs.md) | ✓ | ✗ | — |
| [`AHDSDicomAuditLogs`](../tables/ahdsdicomauditlogs.md) | ✓ | ✗ | — |
| [`AHDSDicomDiagnosticLogs`](../tables/ahdsdicomdiagnosticlogs.md) | ✓ | ✗ | — |
| [`AHDSMedTechDiagnosticLogs`](../tables/ahdsmedtechdiagnosticlogs.md) | ✓ | ✗ | — |
| [`MicrosoftHealthcareApisAuditLogs`](../tables/microsofthealthcareapisauditlogs.md) | ✓ | ✗ | — |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Integrations](../integrations-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Integrations Index](../integrations-index.md)

