# Elastic Agent (via Codeless Connector Framework)

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Workbooks/Images/Logos/Azure_Sentinel.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `ElasticAgentConnector` |
| **Publisher** | Microsoft |
| **Used in Solutions** | [ElasticAgent](../solutions/elasticagent.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [ElasticAgent_ConnectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ElasticAgent/Data%20Connectors/ElasticAgent_CCF/ElasticAgent_ConnectorDefinition.json) |
| **DCR Definition Files** | [ElasticAgent_DCR.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ElasticAgent/Data%20Connectors/ElasticAgent_CCF/ElasticAgent_DCR.json) |
| **CCF Configuration** | [ElasticAgent_PollingConfig.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ElasticAgent/Data%20Connectors/ElasticAgent_CCF/ElasticAgent_PollingConfig.json) |
| **CCF Capabilities** | `APIKey`, `Paging`, `POST` |

The Elastic Agent data connector enables you to ingest system metrics, logs, and telemetry data collected by Elastic Agent from Elasticsearch into Microsoft Sentinel. This connector uses the Elasticsearch Search API with API key authentication to query multiple data streams (CPU, memory, process, filesystem, network, load, uptime, agent metrics, and logs). It supports DCR-based ingestion time transformations for efficient query execution. For more information, see the API documentation: https://www.elastic.co/docs/api/doc/elasticsearch/operation/operation-search

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`ElasticAgentLogsV2_CL`](../tables/elasticagentlogsv2-cl.md) | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and Write permissions are required.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Prerequisites**

Ensure you have the required access and configuration.
## Prerequisites

- An Elasticsearch deployment (self-managed or Elastic Cloud)
- Elastic Agent deployed with System integration enabled
- Agent monitoring enabled for logs and metrics
- Elasticsearch API key with read permissions on all indices
- Network connectivity from Microsoft Sentinel to your Elasticsearch endpoint

### Required Indices

The connector queries the following Elasticsearch indices:

**Metrics:**
- `metrics-system.cpu-*` - CPU metrics
- `metrics-system.memory-*` - Memory metrics
- `metrics-system.process-*` - Process metrics
- `metrics-system.filesystem-*` - Filesystem metrics
- `metrics-system.network-*` - Network metrics
- `metrics-system.load-*` - System load (Linux only)
- `metrics-system.uptime-*` - System uptime
- `metrics-elastic_agent.*` - Agent telemetry

**Logs:**
- `logs-elastic_agent-*` - Agent logs

**2. Configure Elasticsearch Connections**

Add one or more Elasticsearch connections to collect data from.
## Elasticsearch Connections

You can add multiple connections to collect data from different Elasticsearch deployments. Each connection requires its own Elasticsearch URL and API key.

### Creating an API Key

1. In Kibana, go to **Stack Management > API Keys**
2. Click **Create API key**
3. Set a name and configure permissions:
   - Read access to `metrics-system.*`
   - Read access to `metrics-elastic_agent.*`
   - Read access to `logs-elastic_agent-*`
4. Copy the Base64-encoded API key value
**Connector Management Interface**

This section is an interactive interface in the Microsoft Sentinel portal that allows you to manage your data collectors.

📊 **View Existing Collectors**: A management table displays all currently configured data collectors with the following information:
- **Stream Name**
- **Elasticsearch URL**

➕ **Add New Collector**: Click the "Add new collector" button to configure a new data collector (see configuration form below).

🔧 **Manage Collectors**: Use the actions menu to delete or modify existing collectors.

> 💡 **Portal-Only Feature**: This configuration interface is only available when viewing the connector in the Microsoft Sentinel portal. You cannot configure data collectors through this static documentation.

**Add Elasticsearch Connection**

*Connect to Elasticsearch*

When you click the "Add Connection" button in the portal, a configuration form will open. You'll need to provide:

### Connection Details

Provide the connection details for your Elasticsearch deployment.

- **Connector Name** (required): e.g. Production Cluster, Dev Environment
- **Elasticsearch URL** (required): e.g. https://your-deployment.es.us-east-1.aws.elastic.cloud
- **API Key** (required): Enter your Elasticsearch API key (base64 encoded)

> 💡 **Portal-Only Feature**: This configuration form is only available in the Microsoft Sentinel portal.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

