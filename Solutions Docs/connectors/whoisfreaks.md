# WhoisFreaks Threat & NRD Feeds (via Codeless Connector Framework)

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/whoisfreaks.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `WhoisFreaks` |
| **Publisher** | Whoisfreaks |
| **Used in Solutions** | [WhoisFreaks](../solutions/whoisfreaks.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [WhoisFreaks_ConnectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/WhoisFreaks/Data%20Connectors/WhoisFreaks_CCF/WhoisFreaks_ConnectorDefinition.json) |
| **DCR Definition Files** | [WhoisFreaks_DCR.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/WhoisFreaks/Data%20Connectors/WhoisFreaks_CCF/WhoisFreaks_DCR.json) |
| **CCF Configuration** | [WhoisFreaks_PollingConfig.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/WhoisFreaks/Data%20Connectors/WhoisFreaks_CCF/WhoisFreaks_PollingConfig.json) |
| **CCF Capabilities** | `APIKey`, `Nested` |
| **Microsoft Learn** | [View on Learn](https://learn.microsoft.com/azure/sentinel/data-connectors-reference#whoisfreaks-threat--nrd-feeds-via-codeless-connector-framework) |

Ingest WhoisFreaks threat feeds and newly registered domain data into Microsoft Sentinel. Threat payload fields retain their API names. WHOIS NRD payload fields retain their API names. No-WHOIS NRD domains are stored in a dedicated table. Both NRD tables include an `nrd_type` column (`gtld` or `cctld`).

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`WhoisFreaksNRDNoWhois_CL`](../tables/whoisfreaksnrdnowhois-cl.md) | ? | ✓ | ? |
| [`WhoisFreaksNRD_CL`](../tables/whoisfreaksnrd-cl.md) | ? | ✓ | ? |
| [`WhoisFreaksThreat_CL`](../tables/whoisfreaksthreat-cl.md) | ✗ | ✓ | ✗ |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and write permissions on the workspace are required.

**Custom Permissions:**
- **WhoisFreaks API key**: A valid commercial WhoisFreaks API key with access to the threat and NRD stream feeds.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Connect WhoisFreaks to Microsoft Sentinel**

Enter your commercial API key and select the feeds enabled by your subscription. Only the selected feeds are provisioned; select at least one.
- **WhoisFreaks API Key**: (password field)
- **Feeds to enable** (multi-select)
  - threat malware
  - threat phishing
  - threat spam
  - nrd gtld whois
  - nrd gtld nowhois
  - ... and 2 more options

ℹ️ The feed selection above is a form and is not read back from the workspace after the page reloads. The Data received chart on the left shows one line per feed; a feed with no line is not enabled. To change the enabled feeds, select Disconnect, then select the feeds and Connect again.
- Click 'Connect' to establish connection

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

