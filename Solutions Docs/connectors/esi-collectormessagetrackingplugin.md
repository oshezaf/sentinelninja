# Plugin 'Message Tracking' for Exchange Security Insights Online Collector (Azure Monitor)

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `ESI-CollectorMessageTrackingPlugin` |
| **Publisher** | Microsoft |
| **Used in Solutions** | [Microsoft Exchange Security - Exchange Online](../solutions/microsoft-exchange-security-exchange-online.md) |
| **Collection Method** | [CCF Push](../methods/ccf-push.md) |
| **Connector Definition Files** | [ESI-CollectorMessageTrackingPlugin_connectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Exchange%20Security%20-%20Exchange%20Online/Data%20Connectors/ESI-CollectorMessageTrackingPlugin_ccf/ESI-CollectorMessageTrackingPlugin_connectorDefinition.json) |
| **DCR Definition Files** | [ESI-CollectorMessageTrackingPlugin_DCR.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Exchange%20Security%20-%20Exchange%20Online/Data%20Connectors/ESI-CollectorMessageTrackingPlugin_ccf/ESI-CollectorMessageTrackingPlugin_DCR.json) |
| **CCF Configuration** | [ESI-CollectorMessageTrackingPlugin_dataConnector.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Exchange%20Security%20-%20Exchange%20Online/Data%20Connectors/ESI-CollectorMessageTrackingPlugin_ccf/ESI-CollectorMessageTrackingPlugin_dataConnector.json) |
| **CCF Capabilities** | `Push` |
| **Ingestion API** | [Log Ingestion API](../methods/log-ingestion-api.md) — *CCF Push connectors use DCR-based Log Ingestion API* |
| **Custom Log V1 Tables** | Yes 🔶 — ingests into tables with type-suffixed columns |

Plugin Connector used in addition to Exchange Security Insights Online Collector (Azure Monitor) to collect MOnline Message Tracking using Azure Monitor Ingestion API.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`ExchangeOnlineMessageTracking_CL`](../tables/exchangeonlinemessagetracking-cl.md) 🔶 | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): read and write permissions are required.

**Custom Permissions:**
- **Microsoft Entra**: Permission to create an app registration in Microsoft Entra ID. Typically requires Entra ID Application Developer role or higher.
- **Microsoft Azure**: Permission to assign Monitoring Metrics Publisher role on data collection rule (DCR). Typically requires Azure RBAC Owner or User   Access Administrator role.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

>**NOTE**

ℹ️ <H1><b><u>NOTE:</u></b></H1> You need to install the Modern Exchange Online Collector Data Connector before to be able to use this connector.

**1. STEP 1. Create ARM Resources and Provide the Required Permissions**

This connector enables your Exchange Online Collector Message Tracking to push Exchange Online Message Tracking directly to Microsoft Sentinel via the Azure Monitor Ingestion API.
#### Automated Configuration and Secure Data Ingestion with Entra Application 
Clicking on "Deploy" will trigger the creation of a Log Analytics table and a Data Collection Rule (DCR). 
It will then create an Entra application, link the DCR to it, and set the entered secret in the application. This setup enables data to be sent securely to the DCR using an Entra token.
Deploy Exchange Collector Message Tracking Plugin connector resources

**STEP 2 - Activate Message Tracking Plugin in the Collector.**

To enable the Message Tracking Plugin, you need to modify the configuration of the Exchange Online Collector. This involves adding a specific section to the collector's configuration file, which will activate the plugin and allow it to start collecting message tracking data.
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
- **Stream Name**: `Custom-ExchangeOnlineMessageTracking`

**Configure Instance**

To configure the instance, you need to update the Exchange Online Collector configuration file with the provided parameters. This will enable the Message Tracking Plugin to send data to Microsoft Sentinel via the Azure Monitor Ingestion API.

**Deploy Message Tracking Instance Scheduler - Azure Resource Manager (ARM) Template**

Use this method for automated deployment of the 'ESI Exchange Online Security Configuration Message Tracking Plugin' connector.

1. Click the **Deploy to Azure** button below. 

	[![Deploy To Azure](https://aka.ms/deploytoazurebutton)](https://aka.ms/sentinel-ESI-ExchangeCollectorMessageTracking-azuredeploy)
2. Select the preferred **Subscription**, **Resource Group** and **Location**. 
3. Enter the **Workspace ID**, **Workspace Key**, **Tenant Name**, 'and/or Other required fields'. 
>4. Mark the checkbox labeled **I agree to the terms and conditions stated above**. 
5. Click **Purchase** to deploy.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

