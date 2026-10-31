# Delinea Platform Audit Events

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/DelineaLogo.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `DelineaPlatformConnector` |
| **Publisher** | Delinea |
| **Used in Solutions** | [Delinea Platform](../solutions/delinea-platform.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [Delinea_DataConnectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Delinea%20Platform/Data%20Connectors/DelineaAuditLogs_ccf/Delinea_DataConnectorDefinition.json) |
| **DCR Definition Files** | [Delinea_DCR.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Delinea%20Platform/Data%20Connectors/DelineaAuditLogs_ccf/Delinea_DCR.json) |
| **CCF Configuration** | [Delinea_PollingConfig.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Delinea%20Platform/Data%20Connectors/DelineaAuditLogs_ccf/Delinea_PollingConfig.json) |
| **CCF Capabilities** | `OAuth2`, `Paging` |
| **Microsoft Learn** | [View on Learn](https://learn.microsoft.com/azure/sentinel/data-connectors-reference#delinea-platform-audit-events) |

Ingests privileged-access audit events from the **Delinea Platform** (`/audit/api/audit-events`) into Microsoft Sentinel. Covers secret access, session recording, user activity, and configuration changes.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`DelineaAuditEvents_CL`](../tables/delineaauditevents-cl.md) | ✗ | ✓ | ✗ |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and Write permissions are required.

**Custom Permissions:**
- **Delinea Platform API access**: A service user with **Auditor** role is required. Create the user under **Access → Users** and assign it to a group with audit read permissions.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

To enable the Delinea Platform connector, click **Add tenant**, fill in your Delinea base URL and service user credentials, then click **Connect**.

Create a service user in your Delinea tenant under **Access → Roles / Groups / Users** and assign the **Auditor** role.
**Connector Management Interface**

This section is an interactive interface in the Microsoft Sentinel portal that allows you to manage your data collectors.

📊 **View Existing Collectors**: A management table displays all currently configured data collectors with the following information:
- **Delinea Base URL**

➕ **Add New Collector**: Click the "Add new collector" button to configure a new data collector (see configuration form below).

🔧 **Manage Collectors**: Use the actions menu to delete or modify existing collectors.

> 💡 **Portal-Only Feature**: This configuration interface is only available when viewing the connector in the Microsoft Sentinel portal. You cannot configure data collectors through this static documentation.

**Add tenant**

*Add Delinea Platform tenant*

When you click the "Add tenant" button in the portal, a configuration form will open. You'll need to provide:

- **Delinea Tenant Hostname** (optional): mycompany.delinea.app
- **Client ID** (optional): Service user Client ID
- **Client Secret** (optional): Service user Client Secret
- **Audit Levels to Ingest** (optional): Select from available options
  - Security Audit
  - Privileged Activity
  - System Activity
- **Risk Levels to Ingest** (optional): Select from available options
  - Critical
  - High
  - Medium
  - Low
- **Event Types to Ingest** (optional): Select from available options
  - Admin Aes Encryption Key
  - Admin Collection
  - Admin Credential Policy
  - Admin Data Generation Rule
  - Admin Email Template
  - ... and 40 more options

> 💡 **Portal-Only Feature**: This configuration form is only available in the Microsoft Sentinel portal.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

