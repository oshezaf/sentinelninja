# ⚠️ DomainTools Threat Intelligence Domain Feed

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace or not installed in Content Hub.

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/DomainTools.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `DomainToolsCCFDefinition` |
| **Publisher** | DomainTools |
| **Used in Solutions** | [DomainTools CCF](../solutions/domaintools-ccf.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [DomainToolsFeedsLogs_connectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/DomainTools%20CCF/Data%20Connectors/DomainToolsFeedsLogs_ccf/DomainToolsFeedsLogs_connectorDefinition.json) |
| **DCR Definition Files** | [DomainToolsFeedsLogs_DCR.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/DomainTools%20CCF/Data%20Connectors/DomainToolsFeedsLogs_ccf/DomainToolsFeedsLogs_DCR.json) |
| **CCF Configuration** | [DomainToolsFeedsLogs_PollerConfig.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/DomainTools%20CCF/Data%20Connectors/DomainToolsFeedsLogs_ccf/DomainToolsFeedsLogs_PollerConfig.json) |
| **CCF Capabilities** | `APIKey` |

The DomainTools CCF Domain Data Connector retrieves threat-intelligence domain data from multiple DomainTools APIs—including Newly Observed Domains (NOD), Newly Active Domains (NAD), Newly Observed Hostnames (NOH), and Domain Discovery—and ingests it into Microsoft Sentinel for analysis and detection

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`DomainToolsThreatIntelDomains_CL`](../tables/domaintoolsthreatinteldomains-cl.md) | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and write permissions are required to ingest data into the Log Analytics workspace.

**Custom Permissions:**
- **DomainTools API Key is Required**: To access DomainTools Real Time Feed APIs We need the DomainTools API Key

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Configure DomainTools API**

Enter your DomainTools API key.
- **API Key**: (password field)
- Click 'connect' to establish connection

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

