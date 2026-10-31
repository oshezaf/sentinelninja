# ContraForce Events

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/contraforce.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `ContraForceEvents` |
| **Publisher** | ContraForce |
| **Used in Solutions** | [ContraForce](../solutions/contraforce.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [ContraForceEvents_DataConnectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ContraForce/Data%20Connectors/ContraForceEvents_ccp/ContraForceEvents_DataConnectorDefinition.json) |
| **DCR Definition Files** | [ContraForceEvents_DCR.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ContraForce/Data%20Connectors/ContraForceEvents_ccp/ContraForceEvents_DCR.json) |
| **CCF Configuration** | [ContraForceEvents_PollingConfig.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ContraForce/Data%20Connectors/ContraForceEvents_ccp/ContraForceEvents_PollingConfig.json) |
| **CCF Capabilities** | `Basic`, `Paging` |
| **Microsoft Learn** | [View on Learn](https://learn.microsoft.com/azure/sentinel/data-connectors-reference#contraforce-events) |

The ContraForce Events connector ingests security service delivery events from your [ContraForce](https://www.contraforce.com) workspace into Microsoft Sentinel: incident detections from every connected security platform, administrative access changes (role and member changes), machine credential activity, and destructive workspace actions. Use it to monitor the security operations ContraForce performs on this workspace from inside your own Sentinel.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`ContraForceEvents_CL`](../tables/contraforceevents-cl.md) | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and Write permissions are required.

**Custom Permissions:**
- **ContraForce service account credential**: A ContraForce service-account credential with the 'Audit: Export' scope, created in the ContraForce portal under Settings > Developers. The service account must have a role on the workspace you are connecting.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Create a ContraForce export credential**

In the ContraForce portal, open **Settings > Developers**, select (or create) a service account that has a role on the workspace you want to connect, and add a credential with the **Audit: Export** scope. Copy the client ID and the one-time client secret.

> Events follow the account they occur under: connect each customer workspace for its events, and your own organization account for organization-level events such as service account and credential activity.

**2. Connect your ContraForce workspace**

Enter your ContraForce portal URL (change it only if you use a regional portal, e.g. the UK platform), your ContraForce workspace ID (shown in the ContraForce portal URL and workspace settings), and the credential from step 1, then select **Connect**.
- **ContraForce portal URL**: https://portal.contraforce.com
- **ContraForce workspace ID**: 00000000-0000-0000-0000-000000000000
- **Client ID**: Client ID
- **Client secret**: (password field)
- Click 'Connect' to establish connection

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

