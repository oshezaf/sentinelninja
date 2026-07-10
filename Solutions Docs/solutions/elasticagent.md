# Elastic Agent Solution

*Solution: ElasticAgent*

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Workbooks/Images/Logos/Azure_Sentinel.svg" alt="ElasticAgent Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | Security - Threat Protection |
| **Source Vendor** | Elastic *(basis: publisher)* |
| **Source Product** | Agent |
| **Version** | 3.0.0 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2021-11-12 |
| **Last Updated** | 2026-05-25 |
| **Solution Folder** | [ElasticAgent](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ElasticAgent) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/azuresentinel.azure-sentinel-solution-elasticagent) · Popularity: 🟡 Low (27%) |

The [Elastic Agent](https://www.elastic.co/security) solution provides the capability to ingest Elastic Agent logs, metrics, and security data into Microsoft Sentinel.
  
  **Underlying Microsoft Technologies used:** 

 This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs:

  a. [Agent based logs collection from Windows and Linux machines](https://docs.microsoft.com/azure/azure-monitor/agents/data-sources-custom-logs)




## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)

## Data Connectors

This solution provides **2 data connector(s)**:

- [Elastic Agent](../connectors/elasticagent.md)
- [Elastic Agent (via Codeless Connector Framework)](../connectors/elasticagentconnector.md)

## Tables Used

This solution uses **2 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`ElasticAgentLogsV2_CL`](../tables/elasticagentlogsv2-cl.md) | [Elastic Agent (via Codeless Connector Framework)](../connectors/elasticagentconnector.md) | - |
| [`ElasticAgentLogs_CL`](../tables/elasticagentlogs-cl.md) | [Elastic Agent](../connectors/elasticagent.md) | - |

## Content Items

This solution includes **1 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Parsers | 1 |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [ElasticAgentEvent](../parsers/elasticagentevent.md) | - | [`ElasticAgentLogs_CL`](../tables/elasticagentlogs-cl.md) *(read)* |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History** |
|---|---|---|
| 3.0.0 | 11-05-2026 | **Data Connector** via Codeless Connector Framework added |
| 2.0.0 | 14-06-2022 | **Data Connector** customs added |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

