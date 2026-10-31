# SilentPush Feeds

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/SilentPush.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `SilentPushFeedsConnectorDefinition` |
| **Publisher** | Silent Push |
| **Used in Solutions** | [SilentPush](../solutions/silentpush.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [Connector_SilentPush_Feeds_Definition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SilentPush/Data%20Connectors/SilentPushFeeds/Connector_SilentPush_Feeds_Definition.json) |
| **DCR Definition Files** | [Connector_SilentPush_Feeds_DCR.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SilentPush/Data%20Connectors/SilentPushFeeds/Connector_SilentPush_Feeds_DCR.json) |
| **Microsoft Learn** | [View on Learn](https://learn.microsoft.com/azure/sentinel/data-connectors-reference#silentpush-feeds) |

Native codeless data connector for monitoring Silent Push threat actor feeds. Supports feed exports in CSV format with a header row (e.g. `*_enriched.csv`). Not compatible with headerless plaintext indicator lists (e.g. `*_ips.txt`, `*_domains.txt`) -- use the SilentPush Export Enrichment playbooks for those instead.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`SLP_Feeds_CL`](../tables/slp-feeds-cl.md) | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and Write permissions are required.

**Custom Permissions:**
- **Silent Push API access**: sign up to https://app.silentpush.com

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Connect to Silent Push and collect feed**

In order to start collecting Silent Push feeds, please provide the required information below. Note: the feed you select must export as a CSV file with a header row (e.g. an *_enriched.csv export) -- headerless plaintext indicator lists (e.g. *_ips.txt, *_domains.txt) are not supported here, use the SilentPush Export Enrichment playbooks for those instead.
- **API key**: (password field)
- **Data source**: organization-exports
- **Feed file name**: e.g. 01234567-0123-4567-8901-012345678901_enriched.csv
- Click 'Connect' to establish connection

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

