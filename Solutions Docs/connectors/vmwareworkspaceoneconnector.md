# VMware Workspace ONE (via Codeless Connector Framework)

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `VMwareWorkspaceOneConnector` |
| **Publisher** | Microsoft |
| **Used in Solutions** | [VMware Workspace ONE](../solutions/vmware-workspace-one.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [VMwareWorkspaceOne_ConnectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/VMware%20Workspace%20ONE/Data%20Connectors/VMwareWorkspaceOneConnector_CCF/VMwareWorkspaceOne_ConnectorDefinition.json) |
| **DCR Definition Files** | [VMwareWorkspaceOne_DCR.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/VMware%20Workspace%20ONE/Data%20Connectors/VMwareWorkspaceOneConnector_CCF/VMwareWorkspaceOne_DCR.json) |
| **CCF Configuration** | [VMwareWorkspaceOne_PollerConfig.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/VMware%20Workspace%20ONE/Data%20Connectors/VMwareWorkspaceOneConnector_CCF/VMwareWorkspaceOne_PollerConfig.json) |
| **CCF Capabilities** | `OAuth2`, `Paging`, `Nested` |
| **Microsoft Learn** | [View on Learn](https://learn.microsoft.com/azure/sentinel/data-connectors-reference#vmware-workspace-one-via-codeless-connector-framework) |

The VMware Workspace ONE connector ingests enrolled device inventory and installed application details from the Workspace ONE Unified Endpoint Management (UEM) platform into Microsoft Sentinel. It supports device compliance tracking, non-compliant endpoint detection, and unauthorized application discovery across iOS, Android, Windows, and macOS managed devices.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`VMwareWorkspaceOneDeviceApps_CL`](../tables/vmwareworkspaceonedeviceapps-cl.md) | ? | ✓ | ? |
| [`VMwareWorkspaceOneDevices_CL`](../tables/vmwareworkspaceonedevices-cl.md) | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read, Write, and Delete permissions are required.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Connect VMware Workspace ONE to Microsoft Sentinel**
## Prerequisites

Before connecting, ensure:
1. You have an active **VMware Workspace ONE UEM** (Omnissa) tenant
2. You have administrator access to create an OAuth Client in **Groups & Settings -> Configurations -> OAuth Client Management**
3. The OAuth Client role must include: **REST API Devices Read**, **REST API MDM Devices**, **REST API Apps Read**

## Authentication Setup

Create an OAuth Client in Workspace ONE UEM:
1. Go to **Groups & Settings -> Configurations** and search for *OAuth*
2. Select **OAuth Client Management** -> click **Add**
3. Enter a Name (e.g., `MicrosoftSentinelConnector`), assign a role with device/app read permissions, set Status to **Enabled**, then click **Save**
4. **Copy the Client ID and Client Secret immediately** - they cannot be retrieved after closing the dialog

## Auth URL by Region

Select the Auth URL that matches your Workspace ONE tenant's data center region:

| Region | Auth URL |
|--------|----------|
| United States / Canada | `https://na.uemauth.vmwservices.com` |
| United Kingdom / Germany | `https://emea.uemauth.vmwservices.com` |
| Australia / APAC | `https://apac.uemauth.vmwservices.com` |
| UAT Environment | `https://uat.uemauth.vmwservices.com` |
**Connector Management Interface**

This section is an interactive interface in the Microsoft Sentinel portal that allows you to manage your data collectors.

📊 **View Existing Collectors**: A management table displays all currently configured data collectors with the following information:
- **Connection Name**
- **Instance URL**

➕ **Add New Collector**: Click the "Add new collector" button to configure a new data collector (see configuration form below).

🔧 **Manage Collectors**: Use the actions menu to delete or modify existing collectors.

> 💡 **Portal-Only Feature**: This configuration interface is only available when viewing the connector in the Microsoft Sentinel portal. You cannot configure data collectors through this static documentation.

**Configure Workspace ONE Connection**

*Connect to a Workspace ONE UEM tenant*

When you click the "Add Connection" button in the portal, a configuration form will open. You'll need to provide:

- **Connection Name** (required): e.g., Contoso-WS1-Production
- **Instance URL** (required): https://yourorg.awmdm.com
- **Auth URL** (required): https://na.uemauth.vmwservices.com
- **Client ID** (required): Enter the OAuth Client ID
- **Client Secret** (required): Enter the OAuth Client Secret
- **Collect Application Details** (required): Select from available options
  - Yes, collect installed app inventory per device
  - No, collect device inventory only

> 💡 **Portal-Only Feature**: This configuration form is only available in the Microsoft Sentinel portal.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

