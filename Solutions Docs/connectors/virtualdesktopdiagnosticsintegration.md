# 🔗 Azure Virtual Desktop (Azure Diagnostics)

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Integrations](../integrations-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Integrations Index](../integrations-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Collection Method** | [Azure Diagnostics](../methods/azure-diagnostics.md) |

[Azure Virtual Desktop](https://learn.microsoft.com/en-us/azure/virtual-desktop/overview) is a desktop and app virtualization service running in the cloud.

To collect Azure Virtual Desktop logs into a Log Analytics workspace, configure [Azure Diagnostic Settings](https://learn.microsoft.com/en-us/azure/virtual-desktop/diagnostics-log-analytics) for the resource, selecting the log categories to send to the workspace.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`WVDAgentHealthStatus`](../tables/wvdagenthealthstatus.md) | ✓ | ✗ | — |
| [`WVDAutoscaleEvaluationPooled`](../tables/wvdautoscaleevaluationpooled.md) | ✗ | ✗ | — |
| [`WVDCheckpoints`](../tables/wvdcheckpoints.md) | ✓ | ✗ | — |
| [`WVDConnectionGraphicsDataPreview`](../tables/wvdconnectiongraphicsdatapreview.md) | ✗ | ✗ | — |
| [`WVDConnectionNetworkData`](../tables/wvdconnectionnetworkdata.md) | ✓ | ✗ | — |
| [`WVDConnections`](../tables/wvdconnections.md) | ✓ | ✗ | — |
| [`WVDErrors`](../tables/wvderrors.md) | ✓ | ✗ | — |
| [`WVDFeeds`](../tables/wvdfeeds.md) | ✓ | ✗ | — |
| [`WVDHostRegistrations`](../tables/wvdhostregistrations.md) | ✓ | ✗ | — |
| [`WVDManagement`](../tables/wvdmanagement.md) | ✓ | ✗ | — |
| [`WVDSessionHostManagement`](../tables/wvdsessionhostmanagement.md) | ✗ | ✗ | — |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Integrations](../integrations-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Integrations Index](../integrations-index.md)

