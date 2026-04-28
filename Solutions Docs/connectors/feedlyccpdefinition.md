# Feedly IoC

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Feedly.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `FeedlyCCPDefinition` |
| **Publisher** | Feedly |
| **Used in Solutions** | [Feedly](../solutions/feedly.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [Feedly_DataConnectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Feedly/Data%20Connectors/Feedly_CCF/Feedly_DataConnectorDefinition.json) |
| **CCF Configuration** | [Feedly_PollingConfig.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Feedly/Data%20Connectors/Feedly_CCF/Feedly_PollingConfig.json) |
| **CCF Capabilities** | `APIKey`, `Paging` |
| **Custom Log V1 Tables** | Yes 🔶 — ingests into tables with type-suffixed columns |

The [Feedly](https://feedly.com/) IoC data connector provides the capability to ingest Indicators of Compromise (IoCs) from Feedly API into Microsoft Sentinel.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`feedly_indicators_CL`](../tables/feedly-indicators-cl.md) 🔶 | ? | ✓ | ? |

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
2) In Sentinel, in the connector page - provide your Feedly API Key and Stream IDs. Then click "Connect".
- **Feedly API Key**: (password field)
- **Feedly Stream IDs**: streamId1,streamId2,streamId3
- Click 'Connect' to establish connection

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

