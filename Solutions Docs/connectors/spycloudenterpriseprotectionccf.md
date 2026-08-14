# ⚠️ SpyCloud Enterprise Protection Connector

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace or not installed in Content Hub.

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/SpyCloud_Enterprise_Protection.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `SpyCloudEnterpriseProtectionCCF` |
| **Publisher** | SpyCloud |
| **Used in Solutions** | [SpyCloud Enterprise Protection CCF](../solutions/spycloud-enterprise-protection-ccf.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [SpyCloudEnterpriseProtectionLogsV2_connectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SpyCloud%20Enterprise%20Protection%20CCF/Data%20Connectors/SpyCloudEnterpriseProtectionLogsV2_ccp/SpyCloudEnterpriseProtectionLogsV2_connectorDefinition.json) |
| **DCR Definition Files** | [SpyCloudEnterpriseProtectionLogsV2_DCR.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SpyCloud%20Enterprise%20Protection%20CCF/Data%20Connectors/SpyCloudEnterpriseProtectionLogsV2_ccp/SpyCloudEnterpriseProtectionLogsV2_DCR.json) |
| **CCF Configuration** | [SpyCloudEnterpriseProtectionLogsV2_PollerConfig.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SpyCloud%20Enterprise%20Protection%20CCF/Data%20Connectors/SpyCloudEnterpriseProtectionLogsV2_ccp/SpyCloudEnterpriseProtectionLogsV2_PollerConfig.json) |
| **CCF Capabilities** | `APIKey`, `Paging` |

Ingests SpyCloud Watchlist exposure data into Microsoft Sentinel, including compromised credentials and infected machine records associated with monitored assets. Also includes SpyCloud breach catalog metadata for contextual enrichment and correlation.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`SpyCloudBreachCatalogV2_CL`](../tables/spycloudbreachcatalogv2-cl.md) | ? | ✓ | ? |
| [`SpyCloudBreachWatchlistV2_CL`](../tables/spycloudbreachwatchlistv2-cl.md) | ? | ✓ | ? |
| [`SpyCloud_ConditionalAccessLogsV2_CL`](../tables/spycloud-conditionalaccesslogsv2-cl.md) | ? | ✓ | ? |
| [`Spycloud_MDE_LogsV2_CL`](../tables/spycloud-mde-logsv2-cl.md) | ? | ✓ | ? |
| [`spycloud_compassV2_CL`](../tables/spycloud-compassv2-cl.md) | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and write permissions are required to ingest data into the Log Analytics workspace.

**Custom Permissions:**
- **Microsoft Sentinel Contributor**: Microsoft Sentinel Contributor role is required to manage data connectors.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Configure SpyCloud API**

Enter your SpyCloud API key.
- **API Key**: (password field)
- **Severity** (multi-select)
  - 2
  - 5
  - 20
  - 25
  - 30
- **Ingest Compass Data (once daily, yesterday data)** (select)
  - On
  - Off
- Click 'connect' to establish connection

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

