# Feedly IoC

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Feedly.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `FeedlyCCPDefinition` |
| **Publisher** | Feedly |
| **Used in Solutions** | [Feedly](../solutions/feedly.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [Feedly_DataConnectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Feedly/Data%20Connectors/Feedly_CCF/Feedly_DataConnectorDefinition.json) |
| **DCR Definition Files** | [Feedly_DCR.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Feedly/Data%20Connectors/Feedly_CCF/Feedly_DCR.json) |
| **CCF Configuration** | [Feedly_PollingConfig.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Feedly/Data%20Connectors/Feedly_CCF/Feedly_PollingConfig.json) |
| **CCF Capabilities** | `APIKey`, `Paging` |
| **Microsoft Learn** | [View on Learn](https://learn.microsoft.com/azure/sentinel/data-connectors-reference#feedly-ioc) |

The [Feedly](https://feedly.com/) IoC data connector ingests Indicators of Compromise from the Feedly API into the native [ThreatIntelIndicators](https://learn.microsoft.com/azure/azure-monitor/reference/tables/threatintelindicators) table in Microsoft Sentinel. Indicators are tagged with `SourceSystem == "Feedly"` so they participate in Microsoft Sentinel threat-intelligence matching, analytics, and hunting the same way as other TIP integrations (for example Recorded Future via the Upload Indicators API).

## Tables Ingested

This connector ingests data into the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`ThreatIntelIndicators`](../tables/threatintelindicators.md) | `ObservableKey in "domain-name:value,ipv4-addr:value,url:value"`<br>`SourceSystem == "Feedly"` | ✓ | ✓ | ✗ |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and Write permissions are required.

**Custom Permissions:**
- **Feedly API access**: Access to the Feedly API is required. You need a Feedly API token with access to the IoC streams you want to ingest. Generate your API token at https://feedly.com/i/team/api

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Connect to Feedly to start collecting IoCs in Microsoft Sentinel**

1) Go to https://feedly.com/i/team/api and generate a new API token for the connector.
2) In Microsoft Sentinel, provide your Feedly API Key and Stream IDs, then click Connect.
3) Indicators are written to the native ThreatIntelIndicators table with SourceSystem Feedly. Query them with: ThreatIntelIndicators | where SourceSystem == "Feedly"
- **Feedly API Key**: (password field)
- **Feedly Stream IDs**: streamId1,streamId2,streamId3
- Click 'Connect' to establish connection

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

