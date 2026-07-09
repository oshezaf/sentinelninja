# CyberArk EPM

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/CyberArk_Logo.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `CyberArkEPMCCPDefinition` |
| **Publisher** | CyberArk |
| **Source Vendor** | CyberArk *(basis: publisher)* |
| **Used in Solutions** | [CyberArkEPM](../solutions/cyberarkepm.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [mainTemplate.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CyberArkEPM/Package/mainTemplate.json) |
| **Ingestion API** | [Log Ingestion API](../methods/log-ingestion-api.md) — *Sibling ARM template declares DCR / Log Ingestion API resources* |
| **Microsoft Learn** | [View on Learn](https://learn.microsoft.com/azure/sentinel/data-connectors-reference#cyberark-epm) |

The [CyberArk Endpoint Privilege Manager](https://www.cyberark.com/products/endpoint-privilege-manager/) data connector enables Microsoft Sentinel to ingest security event logs and other events from CyberArk EPM via REST API.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`CyberArk_EPMEvents_CL`](../tables/cyberark-epmevents-cl.md) | ✗ | ✓ | ✗ |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and Write permissions are required.

**Custom Permissions:**
- **CyberArk EPM Platform**: Access to perform required configurations in CyberArk EPM platform

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Connect to CyberArk EPM API to start collecting event logs in Microsoft Sentinel**

Follow the configuration steps [here](https://docs.cyberark.com/epm/latest/en/content/webservices/authenticate-with-identity-administration.htm) to integrate Microsoft Sentinel with CyberArk EPM and enable centralized monitoring of endpoint events within Microsoft Sentinel.
- **Web App ID**: The OAuth2 server web app ApplicationID
- **Region based Tenant URL**: e.g. api-na.epm.cyberark.cloud
- **Set ID**: List of comma seperated EPM Set IDs to poll events from
- **Identity Endpoint**: e.g. kln9281.id.cyberark.cloud
- **OAuth Configuration**:
  - Oauth Username
  - Oauth Password
  - Click 'Connect' to authenticate

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

