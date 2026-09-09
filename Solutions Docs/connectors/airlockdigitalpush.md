# Airlock Digital (Push)

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/AirlockDigital.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `AirlockDigitalPush` |
| **Publisher** | Airlock Digital |
| **Used in Solutions** | [AirlockDigital](../solutions/airlockdigital.md) |
| **Collection Method** | [CCF Push](../methods/ccf-push.md) |
| **Connector Definition Files** | [AirlockDigitalPush_ConnectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AirlockDigital/Data%20Connectors/AirlockDigitalPush_CCF/AirlockDigitalPush_ConnectorDefinition.json) |
| **DCR Definition Files** | [AirlockDigitalPush_DCR.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AirlockDigital/Data%20Connectors/AirlockDigitalPush_CCF/AirlockDigitalPush_DCR.json) |
| **CCF Configuration** | [AirlockDigitalPush_PollerConfig.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AirlockDigital/Data%20Connectors/AirlockDigitalPush_CCF/AirlockDigitalPush_PollerConfig.json) |
| **CCF Capabilities** | `Push` |
| **Ingestion API** | [Log Ingestion API](../methods/log-ingestion-api.md) — *CCF Push connectors use DCR-based Log Ingestion API* |

The [Airlock Digital](https://www.airlockdigital.com/) **Push** connector streams execution history, server activity, and policy change logs into Microsoft Sentinel in near real time. It supports both self-hosted servers and Airlock Digital SaaS running v7.0 or higher. Events are pushed by Airlock's external logging feature as they occur, so there is no polling delay, and authentication uses a Microsoft Entra application. This is the recommended connector for Airlock Digital v7.0 and higher. For self-hosted servers older than v7.0, use the **Airlock Digital (Poll)** connector.



>**NOTE:** Use one connector per Airlock Digital server. If the same server is collected by more than one Airlock Digital connector, duplicate data is populated in the tables.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`AirlockDigitalExecutionHistories_CL`](../tables/airlockdigitalexecutionhistories-cl.md) | ? | ✓ | ? |
| [`AirlockDigitalPolicyChanges_CL`](../tables/airlockdigitalpolicychanges-cl.md) | ? | ✓ | ? |
| [`AirlockDigitalServerActivities_CL`](../tables/airlockdigitalserveractivities-cl.md) | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and Write permissions are required.

**Custom Permissions:**
- **Microsoft Entra**: Permission to create an app registration in Microsoft Entra ID. Typically requires the Application Developer role or higher.
- **Microsoft Azure**: Permission to assign the Monitoring Metrics Publisher role on the data collection rule. Typically requires Owner or User Access Administrator.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Deploy the push resources**

This step provisions the data collection rule, custom table, and Microsoft Entra application that Airlock uses to send logs into Microsoft Sentinel.

ℹ️ The Client Secret is never stored. It is shown only once, right after you select Deploy, and the connector page may clear it within a few seconds, so use the copy icon beside the field to copy it immediately. If you miss it, open Microsoft Entra ID > App registrations, select the app named Airlock Digital Log Push OAuth, go to Certificates & secrets, create a new client secret, and copy its value. There it stays visible until you leave that page.
Deploy

**2. Configure Airlock external logging**

On your Airlock Digital server, go to **Settings** > **Logging** > **External Logging** and add a **Microsoft Sentinel CEF - HTTP(S)** log receiver using the values below.
- **Tenant ID**: `TenantId`
  > *Note: The value above is dynamically provided when these instructions are presented within Microsoft Sentinel.*
- **Application (Client) ID**: `ApplicationId`
  > *Note: The value above is dynamically provided when these instructions are presented within Microsoft Sentinel.*
- **Client Secret**: `ApplicationSecret`
  > *Note: The value above is dynamically provided when these instructions are presented within Microsoft Sentinel.*
- **Data Collection Endpoint URI**: `DataCollectionEndpoint`
  > *Note: The value above is dynamically provided when these instructions are presented within Microsoft Sentinel.*
- **DCR Immutable ID**: `DataCollectionRuleId`
  > *Note: The value above is dynamically provided when these instructions are presented within Microsoft Sentinel.*
- **Stream Name**: `Custom-AirlockDigital_CL`

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

