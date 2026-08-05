# ESET Connect Data Connector (via Codeless Connector Framework)

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/eset-logo.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `ESETConnectConnector` |
| **Publisher** | ESET |
| **Used in Solutions** | [ESET Protect Platform](../solutions/eset-protect-platform.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [ESETProtectPlatform_ConnectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ESET%20Protect%20Platform/Data%20Connectors/ESETProtectPlatform_CCF/ESETProtectPlatform_ConnectorDefinition.json) |
| **DCR Definition Files** | [ESETProtectPlatform_DCR.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ESET%20Protect%20Platform/Data%20Connectors/ESETProtectPlatform_CCF/ESETProtectPlatform_DCR.json) |
| **CCF Configuration** | [ESETProtectPlatform_PollerConfig.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ESET%20Protect%20Platform/Data%20Connectors/ESETProtectPlatform_CCF/ESETProtectPlatform_PollerConfig.json) |
| **CCF Capabilities** | `OAuth2`, `Paging`, `Nested` |
| **Ingestion API** | [Log Ingestion API](../methods/log-ingestion-api.md) — *Sibling ARM template declares DCR / Log Ingestion API resources* |

The ESET Connect data connector enables comprehensive security monitoring by ingesting threat detections and incident data from multiple ESET products through the ESET Connect REST API. All detections from ESET PROTECT, ESET Inspect, and ESET Cloud Office Security are unified into the Detections table, with ESET PROTECT and Inspect providing basic endpoint detections via the /v1/detections API, while ESET Cloud Office Security delivers enhanced email security detections through the /v2/detections API. Additionally, incident management data from ESET Inspect is collected into the Incidents table via the /v2/incidents endpoint, providing enhanced incident correlation and management capabilities. The connector uses ESET Connect API credentials with username and password authentication, requiring an API user account with appropriate permissions for your selected products. Before using this connector, ensure you have an ESET Connect API user account, access to your selected ESET products (EP/EI/ECOS), appropriate API permissions for data access, and note that ESET Cloud Office Security is not supported in the Japan region.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`ESETInspectV2_CL`](../tables/esetinspectv2-cl.md) | ? | ✓ | ? |
| [`IntegrationTableIncidentsV2_CL`](../tables/integrationtableincidentsv2-cl.md) | ? | ✓ | ? |
| [`IntegrationTableV2_CL`](../tables/integrationtablev2-cl.md) | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and Write permissions are required.

**Custom Permissions:**
- **ESET Connect API access**: Access to ESET Connect API with appropriate permissions for selected products is required.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Connector Management**

Manage your ESET Connect connector instances
## ESET Connect Instances

Manage multiple ESET Connect connector instances. Each instance can monitor different ESET products and connect to different environments or regions.
**Connector Management Interface**

This section is an interactive interface in the Microsoft Sentinel portal that allows you to manage your data collectors.

📊 **View Existing Collectors**: A management table displays all currently configured data collectors with the following information:
- **Connector Name**
- **Product**
- **Base URL**

➕ **Add New Collector**: Click the "Add new collector" button to configure a new data collector (see configuration form below).

🔧 **Manage Collectors**: Use the actions menu to delete or modify existing collectors.

> 💡 **Portal-Only Feature**: This configuration interface is only available when viewing the connector in the Microsoft Sentinel portal. You cannot configure data collectors through this static documentation.

**Add ESET Connect Connector**

*Connect to ESET Connect API*

When you click the "Add Connector" button in the portal, a configuration form will open. You'll need to provide:

## Product Selection

Select which ESET product this connector instance will monitor. Create separate instances for each product you want to monitor.

- **Deployment Mode** (required): Select from available options
  - Cloud
  - On-Premise
- **ESET Product** (required): Select from available options
  - ESET PROTECT (EP)
  - ESET Inspect (EI)
  - ESET Cloud Office Security (ECOS)
## API Configuration

Configure your ESET Connect API endpoint and credentials.

- **Start From Detection ID (Optional)** (optional): 0
> **Optional:** Specify a detection ID to start from. Leave empty to collect all detections. This filter is applied in addition to the automatic time-based tracking.

- **ESET Connect API Base URL** (required): https://us.incident-management.eset.systems
## Authentication

Provide your ESET Connect API credentials.

- **ESET Token Endpoint Base URL** (required): https://eu.business-account.iam.eset.systems
- **ESET API Username** (required): Enter your ESET Connect API username (email)
- **ESET API Password** (required): Enter your ESET Connect API password
- **Client ID** (required): eset-sentinel-ccf
- **Client Secret** (required): Enter any non-empty value
- **Connector Friendly Name** (required): Enter a unique friendly name for this connector

> 💡 **Portal-Only Feature**: This configuration form is only available in the Microsoft Sentinel portal.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

