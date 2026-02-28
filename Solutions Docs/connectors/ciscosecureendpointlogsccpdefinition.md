# Cisco Secure Endpoint (via Codeless Connector Framework)

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/cisco-logo-72px.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `CiscoSecureEndpointLogsCCPDefinition` |
| **Publisher** | Microsoft |
| **Used in Solutions** | [Cisco Secure Endpoint](../solutions/cisco-secure-endpoint.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [CiscoSecureEndpointLogs_ConnectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cisco%20Secure%20Endpoint/Data%20Connectors/CiscoSecureEndpointLogs_ccp/CiscoSecureEndpointLogs_ConnectorDefinition.json) |
| **CCF Configuration** | [CiscoSecureEndpointLogs_PollingConfig.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cisco%20Secure%20Endpoint/Data%20Connectors/CiscoSecureEndpointLogs_ccp/CiscoSecureEndpointLogs_PollingConfig.json) |
| **CCF Capabilities** | `Basic`, `Paging` |
| **Ingestion API** | [Log Ingestion API](../methods/log-ingestion-api.md) — *CCF connectors use DCR-based Log Ingestion API* |

The Cisco Secure Endpoint (formerly AMP for Endpoints) data connector provides the capability to ingest Cisco Secure Endpoint [audit logs](https://developer.cisco.com/docs/secure-endpoint/auditlog/) and [events](https://developer.cisco.com/docs/secure-endpoint/v1-api-reference-event/) into Microsoft Sentinel.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`CiscoSecureEndpointAuditLogsV2_CL`](../tables/ciscosecureendpointauditlogsv2-cl.md) | ✓ | ✓ | ✓ |
| [`CiscoSecureEndpointEventsV2_CL`](../tables/ciscosecureendpointeventsv2-cl.md) | ✓ | ✓ | ✓ |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and Write permissions are required.

**Custom Permissions:**
- **Cisco Secure Endpoint API Credentials/Regions**: To create API Credentials and to understand the regions, follow the document link provided here. [Click here](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cisco%20Secure%20Endpoint/Data%20Connectors/README.md).

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Connect Cisco Secure Endpoint to Microsoft Sentinel**

To ingest data from Cisco Secure Endpoint to Microsoft Sentinel, you have to click on Add Account button below, then you get a pop up to fill the details like Email, Organization, Client ID, API Key and Region, provide the required information and click on Connect. You can see the connected organizations/emails in the below grid.
>
**Connector Management Interface**

This section is an interactive interface in the Microsoft Sentinel portal that allows you to manage your data collectors.

📊 **View Existing Collectors**: A management table displays all currently configured data collectors with the following information:
- **Organization**
- **Email**
- **Endpoint**

➕ **Add New Collector**: Click the "Add new collector" button to configure a new data collector (see configuration form below).

🔧 **Manage Collectors**: Use the actions menu to delete or modify existing collectors.

> 💡 **Portal-Only Feature**: This configuration interface is only available when viewing the connector in the Microsoft Sentinel portal. You cannot configure data collectors through this static documentation.

**Add Account**

*Add Account*

When you click the "Add Account" button in the portal, a configuration form will open. You'll need to provide:

- **Cisco Secure Endpoint Email** (optional): Enter your Cisco Email
- **Cisco Secure Endpoint Organization** (optional): Enter the name of your Organization
- **Cisco Secure Endpoint Client ID** (optional): Enter your Client ID
- **Cisco Secure Endpoint API Key** (optional): Enter your API Key
- **Cisco Secure Endpoint Region** (optional): Enter the region you want to connect

> 💡 **Portal-Only Feature**: This configuration form is only available in the Microsoft Sentinel portal.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

