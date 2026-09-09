# ⚠️ Speculus Threat Intelligence

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace or not installed in Content Hub.

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/speculus_logo.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `SpeculusThreatIntel` |
| **Publisher** | Speculus |
| **Used in Solutions** | [Speculus Threat Intelligence](../solutions/speculus-threat-intelligence.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [Speculus_ConnectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Speculus%20Threat%20Intelligence/Data%20Connectors/SpeculusThreatIntel_CCF/Speculus_ConnectorDefinition.json) |
| **DCR Definition Files** | [Speculus_DCR.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Speculus%20Threat%20Intelligence/Data%20Connectors/SpeculusThreatIntel_CCF/Speculus_DCR.json) |
| **CCF Configuration** | [Speculus_PollerConfig.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Speculus%20Threat%20Intelligence/Data%20Connectors/SpeculusThreatIntel_CCF/Speculus_PollerConfig.json) |
| **CCF Capabilities** | `APIKey`, `Paging` |

Ingest STIX 2.1 threat intelligence indicators from the Speculus TAXII 2.1 server using the Codeless Connector Framework (CCF). The Speculus feed provides IP indicators enriched with risk scoring, named attribution, scanner/Tor/proxy classification, and geo/network context.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`Speculus_Indicators_CL`](../tables/speculus-indicators-cl.md) | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and write permissions required

**Custom Permissions:**
- **Speculus API key**: A Speculus API key with access to the IOC feed. The key is sent as a Bearer token in the Authorization header. Contact Speculus to obtain one.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Connect Speculus Threat Intelligence**

Provide your Speculus TAXII server details and API key, then click Connect.

>Unless Speculus has provided different values, use the default TAXII base URL `https://feed.speculus.co/api1` and collection ID `f3a1c2d4-5b6e-4a7f-8c9d-0e1f2a3b4c5d` (the `speculus-ioc-feed` collection).

>Note: TAXII polling is not metered against your Speculus API quota — only the single-IP REST lookup used by the incident-enrichment playbook is quota-metered.
- **TAXII Base URL (including API root)**: https://feed.speculus.co/api1
- **Collection ID**: f3a1c2d4-5b6e-4a7f-8c9d-0e1f2a3b4c5d
- **API Key**: (password field)
- Click 'Connect' to establish connection

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

