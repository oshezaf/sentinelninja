# Tanium's CCF Push Connector

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Tanium.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `TaniumConnector` |
| **Publisher** | Tanium Inc. |
| **Used in Solutions** | [Tanium](../solutions/tanium.md) |
| **Collection Method** | [CCF Push](../methods/ccf-push.md) |
| **Connector Definition Files** | [ConnectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Tanium/Data%20Connectors/ConnectorDefinition.json) |
| **CCF Configuration** | [DataConnector.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Tanium/Data%20Connectors/DataConnector.json) |
| **CCF Capabilities** | `Push` |
| **Ingestion API** | [Log Ingestion API](../methods/log-ingestion-api.md) — *CCF Push connectors use DCR-based Log Ingestion API* |
| **Custom Log V1 Tables** | Yes 🔶 — ingests into tables with type-suffixed columns |

This data feeds Microsoft Sentinel workbooks and playbooks so analysts can enrich incidents, visualize endpoint risk and health, and automate investigation and response workflows. For more details about Tanium, head to [https://www.tanium.com/contact-us/](https://www.tanium.com/contact-us/)

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`TaniumComplyCompliance_CL`](../tables/taniumcomplycompliance-cl.md) 🔶 | ? | ✓ | ? |
| [`TaniumComplyVulnerabilities_CL`](../tables/taniumcomplyvulnerabilities-cl.md) 🔶 | ? | ✓ | ? |
| [`TaniumDefenderHealth_CL`](../tables/taniumdefenderhealth-cl.md) 🔶 | ? | ✓ | ? |
| [`TaniumDiscoverUnmanagedAssets_CL`](../tables/taniumdiscoverunmanagedassets-cl.md) 🔶 | ? | ✓ | ? |
| [`TaniumHighUptime_CL`](../tables/taniumhighuptime-cl.md) 🔶 | ? | ✓ | ? |
| [`TaniumPatchCoverageStatus_CL`](../tables/taniumpatchcoveragestatus-cl.md) 🔶 | ? | ✓ | ? |
| [`TaniumPatchListApplicability_CL`](../tables/taniumpatchlistapplicability-cl.md) 🔶 | ? | ✓ | ? |
| [`TaniumPatchListCompliance_CL`](../tables/taniumpatchlistcompliance-cl.md) 🔶 | ? | ✓ | ? |
| [`TaniumSCCMClientHealth_CL`](../tables/taniumsccmclienthealth-cl.md) 🔶 | ? | ✓ | ? |
| [`TaniumThreatResponse_CL`](../tables/taniumthreatresponse-cl.md) 🔶 | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): read and write permissions are required.

**Custom Permissions:**
- **Microsoft Entra**: Permission to create an app registration in Microsoft Entra ID.
- **Microsoft Azure**: Permission to assign Monitoring Metrics Publisher role on data collection rule (DCR).

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Create ARM Resources and Provide the Required Permissions**

This connector enables your Tanium Server to push Basic Inventory data directly to Microsoft Sentinel via the Azure Monitor Ingestion API.
#### Automated Configuration and Secure Data Ingestion with Entra Application 
Clicking on "Deploy" will trigger the creation of Log Analytics table and a Data Collection Rule (DCR). 
It will then create an Entra application, link the DCR to it, and set the entered secret in the application. This setup enables the Tanium data to be sent securely to the DCR using an Entra token.
Deploy Tanium data connector resources

**2. Configure Tanium Connections**

Use the following parameters to configure the your Tanium Connections to push data to the workspace.
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
- **Compliance Findings Logs Stream Name**: `Custom-TaniumComplyCompliance`
- **Compliance Vulnerabilities Logs Stream Name**: `Custom-TaniumComplyVulnerabilities`
- **Defender Health Logs Stream Name**: `Custom-TaniumDefenderHealth`
- **Discover Unmanaged Assets Health Logs Stream Name**: `Custom-TaniumDiscoverUnmanagedAssets`
- **High Uptime Logs Stream Name**: `Custom-TaniumHighUptime`
- **Patch Coverage Status Logs Stream Name**: `Custom-TaniumPatchCoverageStatus`
- **Patch List Applicability Logs Stream Name**: `Custom-TaniumPatchListApplicability`
- **Patch List Compliance Logs Stream Name**: `Custom-TaniumPatchListCompliance`
- **SCCM Client Health Logs Stream Name**: `Custom-TaniumSCCMClientHealth`
- **Threat Response Alerts Logs Stream Name**: `Custom-TaniumThreatResponse`

**3. Create the Connection in Tanium**

After you've successfully deployed the data connector in Azure, create the required connection in your Tanium server in the Connect Module. For more information regarding the Connect module see [Tanium Help](https://help.tanium.com/bundle/ug_connect_cloud/page/connect/overview.html)
1. Download the [connection import file](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Tanium/Data%20Connectors/connect-module-connections.json).
1. Replace the placeholders with the parameters displayed above.
1. In your Tanium Server open the Connect Module.
1. Use the import functionality to import you new connections.

## Additional Documentation

> 📄 *Source: [Tanium\Data Connectors\README.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Tanium\Data Connectors\README.md)*

# Tanium Data Connector for Microsoft Sentinel

<img src="https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Tanium%5CData%20Connectors/../images/Tanium.svg" alt="Tanium" width="20%"/><br>

## Overview

The Tanium Data Connector deploys the required resources to your Azure instance to enable sending data from Tanium to Sentinel via Logs Ingestion Workspaces. For more information see [Tanium Data Connector](https://help.tanium.com/bundle/ConnectAzureSentinel/page/Integrations/MSFT/ConnectAzureSentinel/Get_to_know_our_Content.htm#_Tanium_Data_Connector)

## Setup Data Flow

Once you have deployed the Data Connector you'll be provided with the configuration values needed for your connections in Tanium. You'll need to create connections using the Tanium Connect Module in your Tanium Server.

> [!IMPORTANT]  
> One of the values that will be displayed after you deploy the connector will be the App Registration secret. Be sure to capture this value before refreshing or navigating away from the page, as you will not be able to access this again since it's a sensitive/secret value.

Use the [JSON file found here](./connect-module-connections.json) along with the [instructions on the Tanium Help site](https://help.tanium.com/bundle/ConnectAzureSentinel/page/Integrations/MSFT/ConnectAzureSentinel/Create_Connections.htm) to setup the necessary connections.

## Help

Having issues? See our [Tanium Help documentation](https://help.tanium.com/bundle/ConnectAzureSentinel/page/Integrations/MSFT/ConnectAzureSentinel/Overview.htm) for common issues, questions and FAQs.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

