# Atlassian Organization Audit Events (via Codeless Connector Framework)

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/atlassian.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `AtlassianAuditEventsConnector` |
| **Publisher** | Atlassian |
| **Used in Solutions** | [AtlassianOrganizationAudit](../solutions/atlassianorganizationaudit.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [AtlassianOrganizationAudit_ConnectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AtlassianOrganizationAudit/Data%20Connectors/AtlassianOrganizationAuditConnector_CCF/AtlassianOrganizationAudit_ConnectorDefinition.json) |
| **DCR Definition Files** | [AtlassianOrganizationAudit_DCR.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AtlassianOrganizationAudit/Data%20Connectors/AtlassianOrganizationAuditConnector_CCF/AtlassianOrganizationAudit_DCR.json) |
| **CCF Configuration** | [AtlassianOrganizationAudit_PollerConfig.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AtlassianOrganizationAudit/Data%20Connectors/AtlassianOrganizationAuditConnector_CCF/AtlassianOrganizationAudit_PollerConfig.json) |
| **CCF Capabilities** | `APIKey`, `Paging` |

The Atlassian Organization Audit Events data connector provides the capability to ingest organization audit events from Atlassian Cloud into Microsoft Sentinel through the Polling API. This connector enables comprehensive security monitoring and compliance auditing across all Atlassian Cloud products including Jira (Software/Service Desk/Core), Confluence, Bitbucket, Trello, Opsgenie, Statuspage, and Loom. The connector ingests audit events covering user management, authentication activities, group changes, product access modifications, administrative actions, and policy changes. With 180 days of data retention in Atlassian Cloud, this connector provides visibility into user access granted/revoked, authentication failures and successes, MFA configuration changes, API token management, group membership changes, product license assignments, organization policy updates, and domain verification activities. The connector uses API Key authentication with read-only OAuth scope (read:events:admin) and is optimized for continuous polling with cursor-based pagination. This connector is built on Microsoft Sentinel Codeless Connector Platform and supports DCR-based ingestion time transformations for optimized query performance. Refer to Atlassian Organization Events API documentation for more information.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`AtlassianAuditEvents_CL`](../tables/atlassianauditevents-cl.md) | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and Write permissions are required.

**Custom Permissions:**
- **Atlassian Organization Events API access**: An API key with the read-only `read:events:admin` OAuth scope is required to read organization audit events. See the [Atlassian Organization Events API documentation](https://developer.atlassian.com/cloud/admin/organization/rest/) for more information.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Prerequisites**

Before setting up this connector, ensure you have the following:
- **Atlassian organization admin access** to create an API key with the `read:events:admin` OAuth scope.
- **Your Atlassian Organization ID** (a UUID).
- **Microsoft Sentinel workspace** with write permissions to configure the data connector.

**1. Create API Key in Atlassian**

Follow these steps to create an API key with the required permissions:
#### Create API Key
1. Navigate to [Atlassian Administration](https://admin.atlassian.com/)
2. Select your organization (if you have multiple)
3. Navigate to **Settings**, then select **API keys**
4. Click **Create API key**
5. Configure the API key:
   - **Name:** Microsoft Sentinel Integration (or descriptive name)
   - **Expiration:** Set expiration date (maximum 1 year from creation)
   - **Scopes:** Select `read:events:admin` (read-only access to audit events)
6. Click **Create**
7. **IMPORTANT:** Copy the API key immediately - it will not be shown again

**2. Get Your Organization ID**

Your Organization ID is required to connect to the Atlassian API:
#### Locate Organization ID
Your Organization ID is a UUID (e.g., `00000000-0000-0000-0000-000000000000`)

**Option 1: From Atlassian Administration URL**
- Look at the URL in your Atlassian Administration console
- Format: `https://admin.atlassian.com/o/{orgId}/overview`
- Copy the UUID between `/o/` and `/overview`

**Option 2: During API Key Creation**
- The Organization ID is displayed when you create an API key
- Copy it along with your API key

**Example:** `00000000-0000-0000-0000-000000000000`

**3. Connect to Microsoft Sentinel**

Add one connection per Atlassian organization (tenant). Each connection is identified by a unique Connection Alias and may target a different organization or API base URL, so you can ingest events from multiple Atlassian organizations side by side.
**Connector Management Interface**

This section is an interactive interface in the Microsoft Sentinel portal that allows you to manage your data collectors.

📊 **View Existing Collectors**: A management table displays all currently configured data collectors with the following information:
- **Connection Alias**
- **Atlassian API Base URL**
- **Organization ID**
- **Data Type**

➕ **Add New Collector**: Click the "Add new collector" button to configure a new data collector (see configuration form below).

🔧 **Manage Collectors**: Use the actions menu to delete or modify existing collectors.

> 💡 **Portal-Only Feature**: This configuration interface is only available when viewing the connector in the Microsoft Sentinel portal. You cannot configure data collectors through this static documentation.

**Configure Atlassian Connection**

*Connect to an Atlassian organization to ingest audit events*

When you click the "Add Connection" button in the portal, a configuration form will open. You'll need to provide:

*Connection Details*

- **Connection Alias** (required): e.g. Contoso Production
- **Atlassian API Base URL** (required): https://api.atlassian.com
- **Organization ID** (required): 00000000-0000-0000-0000-000000000000
- **API Key** (required): Enter your Atlassian API Key

> 💡 **Portal-Only Feature**: This configuration form is only available in the Microsoft Sentinel portal.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

