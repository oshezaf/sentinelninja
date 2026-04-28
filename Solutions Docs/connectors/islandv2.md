# Island Enterprise Browser V2

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/island.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `IslandV2` |
| **Publisher** | Island |
| **Used in Solutions** | [Island](../solutions/island.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [IslandV2_connectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Island/Data%20Connectors/IslandV2_CCP/IslandV2_connectorDefinition.json) |
| **CCF Configuration** | [IslandV2_PollerConfig.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Island/Data%20Connectors/IslandV2_CCP/IslandV2_PollerConfig.json) |
| **CCF Capabilities** | `APIKey`, `Paging` |

The Island Enterprise Browser V2 Data Connector allows you to ingest user events, admin events, and system events, all within a single connector.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`Island_AdminEvents_V2_CL`](../tables/island-adminevents-v2-cl.md) | ? | ✓ | ? |
| [`Island_SystemEvents_V2_CL`](../tables/island-systemevents-v2-cl.md) | ? | ✓ | ? |
| [`Island_UserEvents_V2_CL`](../tables/island-userevents-v2-cl.md) | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and Write permissions are required.

**Custom Permissions:**
- **Island API Key**: An Island API key is required. Generate the API Key via Island Management Console. For further instructions, refer to the [official Island documentation](https://documentation.island.io/docs/configure-the-microsoft-sentinel-integration).

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Connect Island to Microsoft Sentinel**

API URL and API Key are available via Island Management Console. For further instructions, refer to the [official Island documentation](https://documentation.island.io/docs/configure-the-microsoft-sentinel-integration).
>
- **API URL**: API URL
- **API Key**: (password field)
- Click 'Connect' to establish connection

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

