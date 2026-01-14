# MISP2Sentinel

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `MISP2SentinelConnector` |
| **Publisher** | MISP project & cudeso.be |
| **Used in Solutions** | [MISP2Sentinel](../solutions/misp2sentinel.md) |
| **Collection Method** | REST API |
| **Connector Definition Files** | [MISP2SentinelConnector_UploadIndicatorsAPI.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/MISP2Sentinel/Data%20Connectors/MISP2SentinelConnector_UploadIndicatorsAPI.json) |

This solution installs the MISP2Sentinel connector that allows you to automatically push threat indicators from MISP to Microsoft Sentinel via the Upload Indicators REST API. After installing the solution, configure and enable this data connector by following guidance in Manage solution view.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Supports Transformations | Ingestion API Supported |
|-------|:------------------------:|:-----------------------:|
| [`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) | ✓ | ✗ |

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): read and write permissions are required.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Installation and setup instructions**

Use the documentation from this GitHub repository to install and configure the MISP to Microsoft Sentinel connector: 

https://github.com/cudeso/misp2sentinel

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Connectors Index](../connectors-index.md)

