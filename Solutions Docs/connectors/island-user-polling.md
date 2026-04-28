# Island Enterprise Browser User Events (Legacy)

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/island.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `Island_User_Polling` |
| **Publisher** | Island |
| **Used in Solutions** | [Island](../solutions/island.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [IslandUserAPIConnector.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Island/Data%20Connectors/IslandUserAPIConnector.json) |
| **CCF Configuration** | [IslandV2_PollerConfig.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Island/Data%20Connectors/IslandV2_CCP/IslandV2_PollerConfig.json) |
| **CCF Capabilities** | `APIKey`, `Paging` |

This is a legacy connector and is no longer recommended. Please use the **Island Enterprise Browser V2 Data Connector** instead, which supports user, admin and system events within a single connector.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`Island_User_CL`](../tables/island-user-cl.md) | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): read and write permissions are required.

**Custom Permissions:**
- **Island API Key**: An Island API key is required.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Connect Island to Microsoft Sentinel**

This is a legacy connector. For full setup instructions, refer to the [official Island documentation](https://documentation.island.io/docs/configure-the-microsoft-sentinel-integration) (requires login to the Island Management Console).
> 📋 **Additional Configuration Step**: This connector includes a configuration step of type `APIKey`. Please refer to the Microsoft Sentinel portal for detailed configuration options for this step.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

