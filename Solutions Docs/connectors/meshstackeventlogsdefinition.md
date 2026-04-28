# meshStack Event Logs

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/meshcloud.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `meshStackEventLogsDefinition` |
| **Publisher** | meshcloud |
| **Used in Solutions** | [meshStack](../solutions/meshstack.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [meshStackEventLogs_connectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/meshStack/Data%20Connectors/meshStackEventLogs_ccp/meshStackEventLogs_connectorDefinition.json) |
| **CCF Configuration** | [meshStackEventLogs_PollerConfig.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/meshStack/Data%20Connectors/meshStackEventLogs_ccp/meshStackEventLogs_PollerConfig.json) |
| **CCF Capabilities** | `OAuth2`, `Paging` |

The meshStack Event Logs connector provides the capability to ingest meshStack platform events into Microsoft Sentinel. By connecting meshStack event logs into Microsoft Sentinel, you can view this data in workbooks, use it to create custom alerts, and improve your investigation process for cloud platform governance, audit, and compliance monitoring.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`meshStackEventLogs_CL`](../tables/meshstackeventlogs-cl.md) | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and Write permissions are required.

**Custom Permissions:**
- **meshStack OAuth2 API Key**: A valid meshStack API Key with the 'Admin: List Event Logs in any Workspace' permission is required. Create the API Key in the meshStack Admin Panel under Access Control > API Keys. The API Key provides OAuth2 credentials (Key ID as client_id and Key Secret as client_secret) for authentication. Note: The API Key is bound to a workspace but can access events from all workspaces.
- **meshStack Instance**: Access to a meshStack instance with the Events API enabled.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Connect meshStack Event Logs to Microsoft Sentinel**

Enter your meshStack instance API URL and OAuth2 credentials from the API Key. The API URL format should be: `https://your-meshstack-instance.io`. Create an API Key in meshStack (Admin Panel > Access Control > API Keys) with the 'Admin: List Event Logs in any Workspace' permission. The API Key provides a **Key ID** (client_id) and **Key Secret** (client_secret) for OAuth2 authentication.
- **meshStack API URL**: https://your-meshstack-instance.io
- **Client ID (Key ID)**: Enter Key ID from API Key
- **Client Secret (Key Secret)**: (password field)
- Click 'Connect' to establish connection

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

