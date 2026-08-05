# Citrix DaaS Audit & Sessions (via Codeless Connector Framework)

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/citrix_logo.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `CitrixDaaSActionsConnector` |
| **Publisher** | Microsoft |
| **Used in Solutions** | [Citrix DaaS](../solutions/citrix-daas.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [CitrixDaaS_DataConnectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Citrix%20DaaS/Data%20Connectors/CitrixDaaS_CCF/CitrixDaaS_DataConnectorDefinition.json) |
| **DCR Definition Files** | [CitrixDaaS_DCR.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Citrix%20DaaS/Data%20Connectors/CitrixDaaS_CCF/CitrixDaaS_DCR.json) |
| **CCF Configuration** | [CitrixDaaS_PollingConfig.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Citrix%20DaaS/Data%20Connectors/CitrixDaaS_CCF/CitrixDaaS_PollingConfig.json) |
| **CCF Capabilities** | `JwtToken`, `Paging` |

Ingest configuration audit logs and session activity from Citrix DaaS (Citrix Virtual Apps and Desktops service). Provides audit trails for security investigations, compliance monitoring, and operational troubleshooting.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`CitrixDaaSConfigOps_CL`](../tables/citrixdaasconfigops-cl.md) | ? | ✓ | ? |
| [`CitrixDaaSSessions_CL`](../tables/citrixdaassessions-cl.md) | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and Write permissions are required.

**Custom Permissions:**
- **Citrix Cloud API Access**: Required permissions: Citrix Cloud API client credentials with read access to CVAD Manage APIs

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Configure Citrix Cloud API Access**

Follow these steps to enable API access:

1. Log in to **Citrix Cloud** console
2. Navigate to **Identity and Access Management** > **API Access**
3. Click **Create Client** (Secure Client)
4. Copy the **Client ID** and **Client Secret**
5. Note your **Customer ID** and **Site ID** (Instance ID)

To collect logs from multiple Citrix tenants, add a separate connection for each tenant. Every record is tagged with its **CitrixCustomerId** so you can differentiate tenants.
**Connector Management Interface**

This section is an interactive interface in the Microsoft Sentinel portal that allows you to manage your data collectors.

📊 **View Existing Collectors**: A management table displays all currently configured data collectors with the following information:
- **Citrix Customer ID**
- **Data Type**

➕ **Add New Collector**: Click the "Add new collector" button to configure a new data collector (see configuration form below).

🔧 **Manage Collectors**: Use the actions menu to delete or modify existing collectors.

> 💡 **Portal-Only Feature**: This configuration interface is only available when viewing the connector in the Microsoft Sentinel portal. You cannot configure data collectors through this static documentation.

**Add Citrix DaaS Connection**

*Connect to the Citrix DaaS REST API*

When you click the "Add Citrix tenant" button in the portal, a configuration form will open. You'll need to provide:

## Authentication

Provide the Citrix Cloud API credentials for the tenant. These are used to obtain a bearer token for the CVAD Manage APIs.

- **Base API URL** (required): https://api.cloud.com/cvad/manage
- **Citrix Customer ID** (required): Enter your Citrix-CustomerId
- **Citrix Site ID (Instance ID)** (required): Enter your Citrix-InstanceId
- **OAuth Client ID** (required): Enter your OAuth Client ID
- **OAuth Client Secret** (required): Enter your OAuth Client Secret

> 💡 **Portal-Only Feature**: This configuration form is only available in the Microsoft Sentinel portal.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

