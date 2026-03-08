# 🔍 Atlassian Confluence

> 🔍 **Discovered:** This item was discovered by scanning the solution folder but is not listed in the Solution JSON file.

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Workbooks/Images/Logos/Azure_Sentinel.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `AtlassianConfluence` |
| **Publisher** | Atlassian |
| **Used in Solutions** | [AtlassianConfluenceAudit](../solutions/atlassianconfluenceaudit.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [azuredeploy_Confluence_native_poller_connector.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AtlassianConfluenceAudit/Data%20Connectors/ConfluenceNativePollerConnector/azuredeploy_Confluence_native_poller_connector.json) |
| **CCF Configuration** | [AtlassianConfluenceAudit_PollingConfig.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AtlassianConfluenceAudit/Data%20Connectors/AtlassianConfluenceAuditLogs_CCP/AtlassianConfluenceAudit_PollingConfig.json) |
| **CCF Capabilities** | `Basic`, `Paging` |

The Atlassian Confluence data connector provides the capability to ingest [Atlassian Confluence audit logs](https://developer.atlassian.com/cloud/confluence/rest/api-group-audit/) into Microsoft Sentinel.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`AtlassianConfluenceNativePoller_CL`](../tables/atlassianconfluencenativepoller-cl.md) | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): read and write permissions are required.
- **Keys** (Workspace): read permissions to shared keys for the workspace are required. [See the documentation to learn more about workspace keys](https://docs.microsoft.com/azure/azure-monitor/platform/agent-windows#obtain-workspace-id-and-key)

**Custom Permissions:**
- **Atlassian Confluence API credentials**: Confluence Username and Confluence Access Token are required. [See the documentation to learn more about Atlassian Confluence API](https://developer.atlassian.com/cloud/confluence/rest/intro/). Confluence domain must be provided as well.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Connect Atlassian Confluence**

Please insert your credentials
> 📋 **Additional Configuration Step**: This connector includes a configuration step of type `BasicAuth`. Please refer to the Microsoft Sentinel portal for detailed configuration options for this step.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Connectors Index](../connectors-index.md)

