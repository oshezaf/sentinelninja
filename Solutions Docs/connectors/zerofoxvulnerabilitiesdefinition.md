# ⚠️ ZeroFox Enterprise - Vulnerabilities

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace or not installed in Content Hub.

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/foxy-mark.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `ZeroFoxVulnerabilitiesDefinition` |
| **Publisher** | ZeroFox Enterprise |
| **Used in Solutions** | [ZeroFox Threat Intelligence](../solutions/zerofox-threat-intelligence.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [ZeroFoxThreatIntelligence_Vulnerabilities_ConnectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ZeroFox%20Threat%20Intelligence/Data%20Connectors/Vulnerabilities/ZeroFoxThreatIntelligence_Vulnerabilities_ConnectorDefinition.json) |
| **CCF Configuration** | [ZeroFoxThreatIntelligence_Vulnerabilities_PollerConfig.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ZeroFox%20Threat%20Intelligence/Data%20Connectors/Vulnerabilities/ZeroFoxThreatIntelligence_Vulnerabilities_PollerConfig.json) |
| **CCF Capabilities** | `JwtToken`, `Paging` |

Collects vulnerabilities data from the [ZeroFox](https://www.zerofox.com/threat-intelligence/) API into Microsoft Sentinel.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`ZeroFoxVulnerabilities_CL`](../tables/zerofoxvulnerabilities-cl.md) | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and Write permissions are required.

**Custom Permissions:**
- **ZeroFox Personal Access Token (PAT)**: A ZeroFox PAT is required. You can get it in Data Connectors > [API Data Feeds](https://cloud.zerofox.com/data_connectors/api).

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Connect ZeroFox to Microsoft Sentinel**

To enable the connector, provide the required information below and click Connect.
- **Provide your ZeroFox account username**: Zerofox Account name
- **Provide your ZeroFox PAT**: (password field)
- **Polling Frequency** (select)
  - Every 15 minutes
  - Every 30 minutes
  - Every hour
  - Every 2 hours
  - Every 6 hours
  - ... and 2 more options
- Click 'Connect' to establish connection

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

