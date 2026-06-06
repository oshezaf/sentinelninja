# MISP2Sentinel

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/misp-logo.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `MISP2SentinelConnector` |
| **Publisher** | MISP project & cudeso.be |
| **Used in Solutions** | [MISP2Sentinel](../solutions/misp2sentinel.md) |
| **Collection Method** | [Azure Function (TI Upload API)](../methods/azure-function-ti-upload-api.md) |
| **Connector Definition Files** | [MISP2SentinelConnector_UploadIndicatorsAPI.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/MISP2Sentinel/Data%20Connectors/MISP2SentinelConnector_UploadIndicatorsAPI.json) |
| **Ingestion API** | [STIX 2.1 Upload Indicators API](../methods/stix-2.1-upload-indicators-api.md) — *Connector definition filename suffix '_UploadIndicatorsAPI' indicates STIX 2.1 Upload Indicators API* |
| **Microsoft Learn** | [View on Learn](https://learn.microsoft.com/azure/sentinel/data-connectors-reference#misp2sentinel) |

This solution installs the MISP2Sentinel connector that allows you to automatically push threat indicators from MISP to Microsoft Sentinel via the Upload Indicators REST API. After installing the solution, configure and enable this data connector by following guidance in Manage solution view.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Selection Criteria | Transformations | Ingestion API | Lake-Only |
|:------|:-------------|:---------------:|:-------------:|:---------:|
| [`ThreatIntelIndicators`](../tables/threatintelindicators.md) | `SourceSystem == "MISP"` | ✓ | ✓ | ✗ |
| [`ThreatIntelObjects`](../tables/threatintelobjects.md) |  | ✓ | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): read and write permissions are required.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Installation and setup instructions**

Use the documentation from this GitHub repository to install and configure the MISP to Microsoft Sentinel connector: 

https://github.com/cudeso/misp2sentinel

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

