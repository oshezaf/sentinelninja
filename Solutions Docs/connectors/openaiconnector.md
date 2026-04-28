# ⚠️ OpenAI (via Codeless Connector Framework)

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace or not installed in Content Hub.

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/OpenAI.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `OpenAIConnector` |
| **Publisher** | Microsoft |
| **Used in Solutions** | [OpenAI](../solutions/openai.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [OpenAI_ConnectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/OpenAI/Data%20Connectors/OpenAI_CCP/OpenAI_ConnectorDefinition.json) |
| **CCF Configuration** | [OpenAI_PollingConfig.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/OpenAI/Data%20Connectors/OpenAI_CCP/OpenAI_PollingConfig.json) |
| **CCF Capabilities** | `APIKey`, `Paging` |

The OpenAI data connector enables you to ingest audit logs, chat completion data, or both from your OpenAI organization into Microsoft Sentinel through the OpenAI API. Each data type uses a separate REST API poller and requires a different API key type: **audit logs** (user actions, API key management, organization changes, security events) require an **organization-level admin API key**, while **chat completions** (model usage, token consumption, performance metrics) require a **project-level API key**. You may configure one or both data types independently. Data is collected into separate tables (OpenAIAuditLogs and OpenAIChatCompletions) for security monitoring, compliance analysis, and usage monitoring. Refer to [OpenAI API documentation](https://platform.openai.com/docs/api-reference) for more information.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`OpenAIAuditLogs_CL`](../tables/openaiauditlogs-cl.md) | ? | ✓ | ? |
| [`OpenAIChatCompletions_CL`](../tables/openaichatcompletions-cl.md) | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and Write permissions are required.

**Custom Permissions:**
- **OpenAI API access**: Each data type requires a different API key type. An **organization-level admin API key** is required for audit logs - these can be created in your OpenAI organization settings. A **project-level API key** is required for chat completions - these can be created under a specific project in the OpenAI dashboard. You may configure audit logs, chat completions, or both independently.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Connection Information**

Details on the connections used to collect data from OpenAI's API.
- **Audit Logs** (`OpenAIAuditLogs`):
    - Use **organization-level admin API keys**.
    - Audit logging must be enabled in your OpenAI organization settings. Organization owners can go to OpenAI's `Organization settings` -> `Data controls` -> `Data retention` to enable audit logging.
    - Once OpenAI audit logging is enabled, it cannot be disabled without contacting OpenAI support.
- **Chat Completions** (`OpenAIChatCompletions`):
    - Use **project-level API keys**.
    - Only chat completions created with the `store` parameter set to `true` will be collected.
    - Deleting stored chat completions while this connector is active may require you to disconnect and reconnect to reset the data collection state.

**2. Add OpenAI Audit Logs Connection**

Enter your OpenAI API credentials to collect audit logs data from OpenAI API.
**Add OpenAI Audit Logs Connection**

*Connect to OpenAI Audit Logs API*

When you click the "Add Connection" button in the portal, a configuration form will open. You'll need to provide:

## OpenAI Audit Logs Connection

Configure your OpenAI organization-level admin API key to collect audit logs (user actions, API key management, organization changes, security events).

> **Note:** Audit logs require an **organization-level admin API key**. These can be created in your OpenAI organization settings.

- **Audit Logs Connection Name** (optional): e.g. My OpenAI Org - Audit Logs
- **Organization API Key** (required): Enter your OpenAI organization-level admin API key

> 💡 **Portal-Only Feature**: This configuration form is only available in the Microsoft Sentinel portal.


**3. Add OpenAI Chat Completions Connection**

Enter your OpenAI API credentials to collect chat completions data from OpenAI API.
**Add OpenAI Chat Completions Connection**

*Connect to OpenAI Chat Completions API*

When you click the "Add Connection" button in the portal, a configuration form will open. You'll need to provide:

## OpenAI Chat Completions Connection

Configure your OpenAI project-level API key to collect chat completions data (model usage, token consumption, performance metrics).

> **Note:** Chat completions require a **project-level API key**. These can be created under a specific project in the OpenAI dashboard. Only chat completions created with the `store` parameter set to `true` will be collected.

- **Chat Completions Connection Name** (optional): e.g. My OpenAI Project - Chat Completions
- **Project API Key** (required): Enter your OpenAI project-level API key

> 💡 **Portal-Only Feature**: This configuration form is only available in the Microsoft Sentinel portal.


**Connector Management Interface**

This section is an interactive interface in the Microsoft Sentinel portal that allows you to manage your data collectors.

📊 **View Existing Collectors**: A management table displays all currently configured data collectors with the following information:
- **Friendly Name**
- **Data Type**
- **URL**

➕ **Add New Collector**: Click the "Add new collector" button to configure a new data collector (see configuration form below).

🔧 **Manage Collectors**: Use the actions menu to delete or modify existing collectors.

> 💡 **Portal-Only Feature**: This configuration interface is only available when viewing the connector in the Microsoft Sentinel portal. You cannot configure data collectors through this static documentation.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

