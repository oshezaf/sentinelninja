# Check Point Email Security (via Codeless Connector Framework)

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `CheckPointEmailSecConnector` |
| **Publisher** | Microsoft |
| **Used in Solutions** | [Checkpoint Email Security](../solutions/checkpoint-email-security.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [CheckPointEmailSecurity_ConnectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Checkpoint%20Email%20Security/Data%20Connectors/CheckPointEmailSecurity_CCF/CheckPointEmailSecurity_ConnectorDefinition.json) |
| **DCR Definition Files** | [CheckPointEmailSecurity_DCR.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Checkpoint%20Email%20Security/Data%20Connectors/CheckPointEmailSecurity_CCF/CheckPointEmailSecurity_DCR.json) |
| **CCF Configuration** | [CheckPointEmailSecurity_PollerConfig.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Checkpoint%20Email%20Security/Data%20Connectors/CheckPointEmailSecurity_CCF/CheckPointEmailSecurity_PollerConfig.json) |
| **CCF Capabilities** | `JwtToken`, `Paging`, `POST` |

The [Check Point Email Security (Harmony Email Collaboration)](https://www.checkpoint.com/harmony/email-security/) data connector provides the capability to ingest security events and audit logs from Check Point's Email Security platform into Microsoft Sentinel through the REST API. The connector provides visibility into advanced email threats including zero-day threats, phishing, account takeover, data leakage, and shadow IT discovery. It ingests security events, anti-phishing exceptions, spam exceptions, and audit logs into Microsoft Sentinel, helping organizations maintain security and compliance visibility.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`CheckPointEmailSecAntiPhishingExceptions_CL`](../tables/checkpointemailsecantiphishingexceptions-cl.md) | ? | ✓ | ? |
| [`CheckPointEmailSecurityAuditLogs_CL`](../tables/checkpointemailsecurityauditlogs-cl.md) | ? | ✓ | ? |
| [`CheckPointEmailSecurityEvents_CL`](../tables/checkpointemailsecurityevents-cl.md) | ? | ✓ | ? |
| [`CheckPointEmailSecuritySpamExceptions_CL`](../tables/checkpointemailsecurityspamexceptions-cl.md) | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and Write permissions are required.

**Custom Permissions:**
- **Check Point Email Security API Credentials**: Two separate Check Point Infinity Portal API keys are required. A **Harmony Email & Collaboration** API key (**Client ID** + **Client Secret**) is used for security events and exceptions. A separate **Logs as a Service** API key (**Audit Client ID** + **Audit Client Secret**) is required for audit logs. Generate both from your Check Point Infinity Portal under Global Settings > API Keys.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Connect Check Point Email Security to Microsoft Sentinel**
To gather data from Check Point Email Security, you need to provide the following credentials:
**1. API Base URL** - The base URL for your Check Point Email Security tenant (region-specific).
**2. Client ID** - Client ID of the Harmony Email & Collaboration API key (used for security events and exceptions).
**3. Client Secret** - Secret (access key) of the Harmony Email & Collaboration API key.
**4. Audit Client ID** - Client ID of a separate **Logs as a Service** API key (used for audit logs).
**5. Audit Client Secret** - Secret (access key) of the Logs as a Service API key.
To obtain these credentials, log in to your Check Point Infinity Portal and navigate to the **API Keys** section under **Global Settings**. Create one API key with the **Harmony Email & Collaboration** service for the Client ID/Secret, and a second API key with the **Logs as a Service** service for the Audit Client ID/Secret.
> **Multi-tenant support:** This connector supports ingesting data from multiple Check Point Email Security tenants in parallel. Click **Add Connection** once per tenant, supplying that tenant's API Base URL and credentials - each connection is tracked and managed independently in the grid below.
**Connector Management Interface**

This section is an interactive interface in the Microsoft Sentinel portal that allows you to manage your data collectors.

📊 **View Existing Collectors**: A management table displays all currently configured data collectors with the following information:
- **API Base URL**
- **Data Type**

➕ **Add New Collector**: Click the "Add new collector" button to configure a new data collector (see configuration form below).

🔧 **Manage Collectors**: Use the actions menu to delete or modify existing collectors.

> 💡 **Portal-Only Feature**: This configuration interface is only available when viewing the connector in the Microsoft Sentinel portal. You cannot configure data collectors through this static documentation.

**Configure Check Point Email Security API Connection**

*Connect to Check Point Email Security to ingest security data*

When you click the "Add Connection" button in the portal, a configuration form will open. You'll need to provide:

- **API Base URL** (required): https://cloudinfra-gw.portal.checkpoint.com
- **Client ID** (required): Your Client ID
- **Client Secret** (required): Your Client Secret
- **Audit Client ID** (required): Your Logs as a Service Client ID
- **Audit Client Secret** (required): Your Logs as a Service Client Secret

> 💡 **Portal-Only Feature**: This configuration form is only available in the Microsoft Sentinel portal.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

