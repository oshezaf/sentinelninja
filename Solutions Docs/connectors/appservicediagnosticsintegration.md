# 🔗 Azure App Service (Azure Diagnostics)

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Integrations](../integrations-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Integrations Index](../integrations-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Collection Method** | [Azure Diagnostics](../methods/azure-diagnostics.md) |

[Azure App Service](https://learn.microsoft.com/en-us/azure/app-service/overview) is a fully managed platform for building, deploying, and scaling web apps.

To collect Azure App Service logs into a Log Analytics workspace, configure [Azure Diagnostic Settings](https://learn.microsoft.com/en-us/azure/app-service/troubleshoot-diagnostic-logs) for the resource, selecting the log categories to send to the workspace.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`AppServiceAntivirusScanAuditLogs`](../tables/appserviceantivirusscanauditlogs.md) | ✓ | ✗ | — |
| [`AppServiceAppLogs`](../tables/appserviceapplogs.md) | ✓ | ✗ | — |
| [`AppServiceAuditLogs`](../tables/appserviceauditlogs.md) | ✓ | ✗ | — |
| [`AppServiceAuthenticationLogs`](../tables/appserviceauthenticationlogs.md) | ✓ | ✗ | — |
| [`AppServiceConsoleLogs`](../tables/appserviceconsolelogs.md) | ✓ | ✗ | — |
| [`AppServiceFileAuditLogs`](../tables/appservicefileauditlogs.md) | ✓ | ✗ | — |
| [`AppServiceHTTPLogs`](../tables/appservicehttplogs.md) | ✓ | ✗ | — |
| [`AppServicePlatformLogs`](../tables/appserviceplatformlogs.md) | ✓ | ✗ | — |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Integrations](../integrations-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Integrations Index](../integrations-index.md)

