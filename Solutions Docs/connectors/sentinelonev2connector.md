# SentinelOne V2 (via Codeless Connector Framework)

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `SentinelOneV2Connector` |
| **Publisher** | Microsoft |
| **Used in Solutions** | [SentinelOne](../solutions/sentinelone.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [SentinelOneV2_ConnectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SentinelOne/Data%20Connectors/SentinelOneV2_ccf/SentinelOneV2_ConnectorDefinition.json) |
| **DCR Definition Files** | [SentinelOneV2_DCR.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SentinelOne/Data%20Connectors/SentinelOneV2_ccf/SentinelOneV2_DCR.json) |
| **CCF Configuration** | [SentinelOneV2_PollerConfig.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SentinelOne/Data%20Connectors/SentinelOneV2_ccf/SentinelOneV2_PollerConfig.json) |
| **CCF Capabilities** | `APIKey`, `Paging`, `POST` |
| **Microsoft Learn** | [View on Learn](https://learn.microsoft.com/azure/sentinel/data-connectors-reference#sentinelone-v2-via-codeless-connector-framework) |

The SentinelOne V2 data connector ingests Activities, Agents, Groups and Threats logs from the SentinelOne REST API, and security alerts from the SentinelOne Unified Alert Management (UAM) GraphQL API, into Microsoft Sentinel. It is built on the Microsoft Sentinel Codeless Connector Platform and uses DCR-based ingestion-time transformations. See: [SentinelOne UAM GraphQL API](https://usea1-partners.sentinelone.net/soc-docs/en/unified-alert-management-graphql-api.html)

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`OneActivities_CL`](../tables/oneactivities-cl.md) | ? | ✓ | ? |
| [`OneAgents_CL`](../tables/oneagents-cl.md) | ? | ✓ | ? |
| [`OneAlertsV2_CL`](../tables/onealertsv2-cl.md) | ? | ✓ | ? |
| [`OneGroups_CL`](../tables/onegroups-cl.md) | ? | ✓ | ? |
| [`OneThreats_CL`](../tables/onethreats-cl.md) | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and Write permissions are required.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Connect SentinelOne to Microsoft Sentinel**

Configure your SentinelOne API connection. Each instance corresponds to a single SentinelOne Management URL + API Token.
#### Configuration steps for the SentinelOne API
Follow the instructions below to obtain the credentials. Alerts are collected via the [SentinelOne Unified Alert Management GraphQL API](https://usea1-partners.sentinelone.net/soc-docs/en/unified-alert-management-graphql-api.html).
#### 1. Retrieve SentinelOne Management URL
   1.1. Log in to the SentinelOne **Management Console** with Admin user credentials.
   1.2. In the **Management Console** copy the URL link without the URL path.
#### 2. Retrieve API Token
   2.1. Log in to the SentinelOne **Management Console** with Admin user credentials.
   2.2. In the **Management Console**, click **Settings**.
   2.3. In **Settings** view click on **USERS**.
   2.4. In the **USERS** page click on **Service Users** -> **Actions** -> **Create new service user**.
   2.5. Choose **Expiration date** and **scope** (by site) and click on **Create User**.
   2.6. Once the **Service User** is created copy the **API Token** from the page and press **Save**.
#### 3. Connect new instances
To enable the SentinelOne connector for Microsoft Sentinel, click the **Add new instance** button, fill in the required information in the context pane and click on **Connect**.
**Connector Management Interface**

This section is an interactive interface in the Microsoft Sentinel portal that allows you to manage your data collectors.

📊 **View Existing Collectors**: A management table displays all currently configured data collectors with the following information:
- **Management URL**
- **Data Type**

➕ **Add New Collector**: Click the "Add new collector" button to configure a new data collector (see configuration form below).

🔧 **Manage Collectors**: Use the actions menu to delete or modify existing collectors.

> 💡 **Portal-Only Feature**: This configuration interface is only available when viewing the connector in the Microsoft Sentinel portal. You cannot configure data collectors through this static documentation.

**SentinelOne connector**

*Add new instance*

When you click the "Add new instance" button in the portal, a configuration form will open. You'll need to provide:

- **SentinelOne Management URL** (required): https://example.sentinelone.net
- **API Token** (required): API Token

> 💡 **Portal-Only Feature**: This configuration form is only available in the Microsoft Sentinel portal.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

