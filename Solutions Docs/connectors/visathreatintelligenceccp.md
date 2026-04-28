# ⚠️ Visa Threat Intelligence

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace or not installed in Content Hub.

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Visa_VTI_Logo.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `VisaThreatIntelligenceCCP` |
| **Publisher** | Microsoft |
| **Used in Solutions** | [Visa Threat Intelligence (VTI)](../solutions/visa-threat-intelligence-vti.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [VisaThreatIntelligenceConnector.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Visa%20Threat%20Intelligence%20%28VTI%29/Data%20Connectors/VisaThreatIntelligenceConnector.json) |

# Visa Threat Intelligence Connector

This connector collects Indicators of Compromise (IOC) from the Visa Threat Intelligence Platform (VTIP) using HTTP polling and API Key-Shared Secret Authentication (X-Pay Token).

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`VisaThreatIntelligenceIOC_CL`](../tables/visathreatintelligenceioc-cl.md) | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and Write permissions are required.

**Custom Permissions:**
- **Visa API access**: Access to Visa Threat Intelligence API: API Key-Shared Secret Authentication (X-Pay Token)

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Base Configuration**

Configure your Visa API connection
## Base Configuration

Provide the base URL for your VTIP API endpoints.
- **VTIP API endpoints Base URL**: https://api.visa.com

ℹ️ Enter the base URL of your VTIP API endpoints without trailing slash (e.g., https://api.visa.com)

**2. Authentication Configuration**

Provide credentials for X-Pay Token.
> Follow Visa Developer Tutorials [API Key and Shared Secret (X-Pay Token)](https://developer.visa.com/pages/working-with-the-visa-api#decrypting-shared-secrets) to get api key and decrypted shared secret
- **API Key**: (password field)
- **API Secret**: (password field)

**3. Connect**

Enable data ingestion.
- Click 'Connect' to establish connection

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

