# Darktrace ActiveAI Security Platform Connector

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Darktrace.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `DarktraceActiveAISecurityPlatform` |
| **Publisher** | Darktrace |
| **Source Vendor** | Darktrace *(basis: publisher)* |
| **Used in Solutions** | [Darktrace](../solutions/darktrace.md) |
| **Collection Method** | [CCF Push](../methods/ccf-push.md) |
| **Connector Definition Files** | [Darktrace_ConnectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Darktrace/Data%20Connectors/ccf/Darktrace_ConnectorDefinition.json) |
| **DCR Definition Files** | [Darktrace_DCR.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Darktrace/Data%20Connectors/ccf/Darktrace_DCR.json) |
| **CCF Configuration** | [Darktrace_DataConnector.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Darktrace/Data%20Connectors/ccf/Darktrace_DataConnector.json) |
| **CCF Capabilities** | `Push` |
| **Ingestion API** | [Log Ingestion API](../methods/log-ingestion-api.md) — *CCF Push connectors use DCR-based Log Ingestion API* |

The Darktrace ActiveAI Security Platform Connector connector provides the capability to read raw event data from Darktrace in Microsoft Sentinel.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`DarktraceASM_CL`](../tables/darktraceasm-cl.md) | ? | ✓ | ? |
| [`DarktraceEMAIL_CL`](../tables/darktraceemail-cl.md) | ? | ✓ | ? |
| [`DarktraceIncidents_CL`](../tables/darktraceincidents-cl.md) | ? | ✓ | ? |
| [`DarktraceModelAlerts_CL`](../tables/darktracemodelalerts-cl.md) | ? | ✓ | ? |
| [`DarktraceResponseActions_CL`](../tables/darktraceresponseactions-cl.md) | ? | ✓ | ? |
| [`DarktraceSystemStatusAlerts_CL`](../tables/darktracesystemstatusalerts-cl.md) | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): read and write permissions are required.

**Custom Permissions:**
- **Microsoft Entra**: Permission to create an app registration in Microsoft Entra ID. Typically requires Entra ID Application Developer role or higher.
- **Microsoft Azure**: Permission to assign Monitoring Metrics Publisher role on data collection rule (DCR). Typically requires Azure RBAC Owner or User Access Administrator role

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Create ARM Resources and Provide the Required Permissions**

This connector reads data from the tables that Darktrace uses in a Microsoft Analytics Workspace, if the Microsoft Sentinel Log Ingestion configuration is enabled in Darktrace then raw event data is sent to the Microsoft Sentinel Ingestion API.
#### Automated Configuration and Secure Data Ingestion with Entra Application 
Clicking on "Deploy" will trigger the creation of Log Analytics tables and a Data Collection Rule (DCR). 
It will then create an Entra application, link the DCR to it, and set the entered secret in the application. This setup enables data to be sent securely to the DCR using an Entra token.
Deploy Darktrace connector resources

**2. Push your logs into the workspace**

Use the following parameters to configure the your machine to send the logs to the workspace.
- **Tenant ID (Directory ID)**: `TenantId`
  > *Note: The value above is dynamically provided when these instructions are presented within Microsoft Sentinel.*
- **Entra App Registration Application ID**: `ApplicationId`
  > *Note: The value above is dynamically provided when these instructions are presented within Microsoft Sentinel.*
- **Entra App Registration Secret**: `ApplicationSecret`
  > *Note: The value above is dynamically provided when these instructions are presented within Microsoft Sentinel.*
- **Data Collection Endpoint Uri**: `DataCollectionEndpoint`
  > *Note: The value above is dynamically provided when these instructions are presented within Microsoft Sentinel.*
- **Data Collection Rule Immutable ID**: `DataCollectionRuleId`
  > *Note: The value above is dynamically provided when these instructions are presented within Microsoft Sentinel.*
- **Attack Surface Management Stream Name**: `Custom-DarktraceASM`
- **EMAIL Stream Name**: `Custom-DarktraceEMAIL`
- **AI Analyst Incidents Stream Name**: `Custom-DarktraceIncidents`
- **Model Alerts Stream Name**: `Custom-DarktraceModelAlerts`
- **Autonomous Response Stream Name**: `Custom-DarktraceResponseActions`
- **System Status Alerts Stream Name**: `Custom-DarktraceSystemStatusAlerts`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

