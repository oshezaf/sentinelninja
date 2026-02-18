# 🔗 Microsoft Dev Box (Azure Diagnostics)

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Integrations](../integrations-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Integrations Index](../integrations-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Collection Method** | [Azure Diagnostics](../methods/azure-diagnostics.md) |

[Microsoft Dev Box](https://learn.microsoft.com/en-us/azure/dev-box/overview-what-is-microsoft-dev-box) is a managed service providing self-service, cloud-based developer workstations.

To collect Microsoft Dev Box logs into a Log Analytics workspace, configure [Azure Diagnostic Settings](https://learn.microsoft.com/en-us/azure/dev-box/how-to-configure-dev-box-azure-diagnostic-logs) for the resource, selecting the log categories to send to the workspace.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`DevCenterAgentHealthLogs`](../tables/devcenteragenthealthlogs.md) | ✗ | ✗ | — |
| [`DevCenterBillingEventLogs`](../tables/devcenterbillingeventlogs.md) | ✓ | ✗ | — |
| [`DevCenterConnectionLogs`](../tables/devcenterconnectionlogs.md) | ✗ | ✗ | — |
| [`DevCenterDiagnosticLogs`](../tables/devcenterdiagnosticlogs.md) | ✓ | ✗ | — |
| [`DevCenterResourceOperationLogs`](../tables/devcenterresourceoperationlogs.md) | ✓ | ✗ | — |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Integrations](../integrations-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Integrations Index](../integrations-index.md)

