# Thinkst Canary

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/ThinkstCanary.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `ThinkstCanary` |
| **Publisher** | Thinkst Engineering |
| **Used in Solutions** | [ThinkstCanary](../solutions/thinkstcanary.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [ThinkstCanary_ConnectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ThinkstCanary/Data%20Connectors/ThinkstCanaryLogs_ccp/ThinkstCanary_ConnectorDefinition.json) |
| **DCR Definition Files** | [ThinkstCanary_DCR.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ThinkstCanary/Data%20Connectors/ThinkstCanaryLogs_ccp/ThinkstCanary_DCR.json) |
| **CCF Configuration** | [ThinkstCanary_PollingConfig.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ThinkstCanary/Data%20Connectors/ThinkstCanaryLogs_ccp/ThinkstCanary_PollingConfig.json) |
| **CCF Capabilities** | `APIKey`, `Paging` |
| **Microsoft Learn** | [View on Learn](https://learn.microsoft.com/azure/sentinel/data-connectors-reference#thinkst-canary) |

The Thinkst Canary connector allows you to ingest security incidents from your Thinkst Canary honeypot network into Microsoft Sentinel. Canary devices detect unauthorized access attempts including SSH logins, RDP sessions, HTTP requests, database queries, file share access, and Canarytoken triggers. This connector automatically pulls all incident data for analysis and alerting.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`ThinkstCanaryIncidents_CL`](../tables/thinkstcanaryincidents-cl.md) | ✓ | ✓ | ✓ |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): read and write permissions are required.
- **Keys** (Workspace): read permissions to shared keys for the workspace are required. [See the documentation to learn more about workspace keys](https://docs.microsoft.com/azure/azure-monitor/platform/agent-windows#obtain-workspace-id-and-key).

**Custom Permissions:**
- **Thinkst Canary API Key**: A Thinkst Canary API authentication token is required. [See the documentation](https://docs.canary.tools/guide/user-settings.html#generating-an-api-key) to learn how to generate an API key.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Connect Thinkst Canary to Microsoft Sentinel**

Provide your Thinkst Canary Console domain (e.g. 'yourhash' from yourhash.canary.tools) and API authentication token.
- **Canary Console Domain**: yourhash
- **API Authentication Token**: (password field)
- Click 'Connect' to establish connection

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

