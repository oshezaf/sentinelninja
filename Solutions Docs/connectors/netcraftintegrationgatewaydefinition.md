# Netcraft Integration Gateway

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/netcraft.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `NetcraftIntegrationGatewayDefinition` |
| **Publisher** | Netcraft |
| **Used in Solutions** | [NetcraftIntegrationGateway](../solutions/netcraftintegrationgateway.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [NetcraftIntegrationGateway_ConnectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/NetcraftIntegrationGateway/Data%20Connectors/NetcraftIntegrationGateway_ccf/NetcraftIntegrationGateway_ConnectorDefinition.json) |
| **DCR Definition Files** | [NetcraftIntegrationGateway_DCR.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/NetcraftIntegrationGateway/Data%20Connectors/NetcraftIntegrationGateway_ccf/NetcraftIntegrationGateway_DCR.json) |
| **CCF Configuration** | [NetcraftIntegrationGateway_PollerConfig.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/NetcraftIntegrationGateway/Data%20Connectors/NetcraftIntegrationGateway_ccf/NetcraftIntegrationGateway_PollerConfig.json) |
| **CCF Capabilities** | `APIKey`, `Paging` |
| **Microsoft Learn** | [View on Learn](https://learn.microsoft.com/azure/sentinel/data-connectors-reference#netcraft-integration-gateway) |

[Netcraft](https://www.netcraft.com/) brings takedown activity, domain detection results, Social (Fraud Detection) findings, and deep and dark web intelligence into Microsoft Sentinel, so external threats against your brand appear alongside your internal telemetry.



The connector ingests four data streams into dedicated tables:



- Takedown, into `NetcraftTakedown_CL`. New takedowns, important notes, blocked or waiting events, and status changes.

- Domain detection, into `NetcraftDomainDetection_CL`. New and updated domain results, with risk level, tags, and hosting detail.

- Social (Fraud Detection), into `NetcraftSocialResult_CL`, `NetcraftAppResult_CL`, `NetcraftAdvertResult_CL`, and `NetcraftSearchTask_CL`. Brand abuse and impersonation found across social media, advertising platforms, and mobile app stores.

- Deep and dark web, into `NetcraftDdwIntelligence_CL`. New intelligence matches covering credentials, cards, documents, domains, and mentions.



Events are polled on the schedule you choose. The solution also ships analytics rule templates, workbooks, and hunting queries, so detections and dashboards are available as soon as data arrives.



Field-level reference and event schemas: [https://api.netcraft.com/integration-gateway/v1](https://api.netcraft.com/integration-gateway/v1)



**Prerequisites**



To connect Netcraft to Microsoft Sentinel you need:



- Workspace: read and write permissions on the Sentinel workspace.

- Netcraft organisation API key: available from your Netcraft account.

- No additional Azure resources. The connector runs on the Codeless Connector Framework, so there is no Azure Function to deploy and no extra Azure consumption cost.



**Configuration**



Enter your Netcraft organisation API key, choose how often Sentinel should poll, then select Connect. Data typically appears in your workspace within one polling interval.



- Gateway base URL: `https://api.netcraft.com/integration-gateway/v1` (prefilled)

- Organisation API key

- Polling frequency

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`NetcraftAdvertResult_CL`](../tables/netcraftadvertresult-cl.md) | ? | ✓ | ? |
| [`NetcraftAppResult_CL`](../tables/netcraftappresult-cl.md) | ? | ✓ | ? |
| [`NetcraftDdwIntelligence_CL`](../tables/netcraftddwintelligence-cl.md) | ? | ✓ | ? |
| [`NetcraftDomainDetection_CL`](../tables/netcraftdomaindetection-cl.md) | ? | ✓ | ? |
| [`NetcraftSearchTask_CL`](../tables/netcraftsearchtask-cl.md) | ? | ✓ | ? |
| [`NetcraftSocialResult_CL`](../tables/netcraftsocialresult-cl.md) | ? | ✓ | ? |
| [`NetcraftTakedown_CL`](../tables/netcrafttakedown-cl.md) | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and Write permissions are required.

**Custom Permissions:**
- **Netcraft organisation API key**: A Netcraft organisation API key presented as a Bearer token against the Integration Gateway (see https://api.netcraft.com/integration-gateway/v1).

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Connect Netcraft Integration Gateway to Microsoft Sentinel**

Provide the gateway base URL (including `/v1` for production), organisation API key, and polling frequency, then click Connect. Pollers send `connector=sentinel` automatically. Takedown (4 streams), Domain Detection (`/events/domain-detection/results`), Deep & Dark Web (`/events/deep-and-dark-web/matches`), Social, App, and Advert results, and the three task streams are polled with cursor pagination. Results use their own tables. Tasks share `NetcraftSearchTask_CL`.
- **Gateway base URL (no trailing slash)**: https://api.netcraft.com/integration-gateway/v1
- **Organisation API key**: (password field)
- **Polling Frequency** (select)
  - Every 15 minutes
  - Every 30 minutes
  - Every hour
  - Every 2 hours
- Click 'Connect' to establish connection

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

