# ⚠️ Vaikora AI Agent Behavioral Signals

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace or not installed in Content Hub.

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/vaikora_logo.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `VaikoraSentinel` |
| **Publisher** | Data443 Risk Mitigation, Inc. |
| **Used in Solutions** | [Vaikora-Sentinel](../solutions/vaikora-sentinel.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [Vaikora_ConnectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Vaikora-Sentinel/Data%20Connectors/VaikoraSentinel_CCF/Vaikora_ConnectorDefinition.json) |
| **CCF Configuration** | [Vaikora_PollerConfig.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Vaikora-Sentinel/Data%20Connectors/VaikoraSentinel_CCF/Vaikora_PollerConfig.json) |
| **CCF Capabilities** | `APIKey`, `Paging` |
| **Custom Log V1 Tables** | Yes 🔶 — ingests into tables with type-suffixed columns |

Ingest AI agent behavioral signals from the Vaikora API into Microsoft Sentinel using the Codeless Connector Framework (CCF). Monitor agent actions, policy decisions, anomaly scores, and risk levels to detect suspicious AI activity in your environment.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`Vaikora_AgentSignals_CL`](../tables/vaikora-agentsignals-cl.md) 🔶 | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and write permissions are required.

**Custom Permissions:**
- **Vaikora API Key**: A Vaikora API key (vk_xxxxx) with read access to the actions endpoint. Obtain this from your Vaikora dashboard under Settings > API Keys.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Connect Vaikora AI Agent Behavioral Signals**

To enable the Vaikora connector, enter your Vaikora API key below and click Connect. The Agent ID is optional; use it to scope ingestion to a single agent, or leave it blank to ingest actions from all agents the key can see.

Your API key is available in the [Vaikora dashboard](https://vaikora.com) under **Settings > API Keys**. The Agent ID is the UUID shown on each agent's detail page.
- **Vaikora API Key**: (password field)
- **Vaikora Agent ID (optional)**: Leave blank to monitor all agents
- Click 'Connect' to establish connection

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

