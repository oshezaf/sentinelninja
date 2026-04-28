# Lumen Defender Threat Feed Data Connector V2

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Solutions/Lumen%20Defender%20Threat%20Feed/Workbooks/Images/Logo/Lumen.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `LumenThreatFeedConnectorV2` |
| **Publisher** | Lumen Technologies, Inc. |
| **Used in Solutions** | [Lumen Defender Threat Feed](../solutions/lumen-defender-threat-feed.md) |
| **Collection Method** | [Azure Function](../methods/azure-function.md) |
| **Connector Definition Files** | [LumenThreatFeedConnectorV2_ConnectorUI.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Lumen%20Defender%20Threat%20Feed/Data%20Connectors/LumenThreatFeedv2/LumenThreatFeedConnectorV2_ConnectorUI.json) |

The [Lumen Defender Threat Feed](https://www.lumen.com/en-us/security/black-lotus-labs.html) connector provides the capability to ingest STIX-formatted threat intelligence indicators from Lumen's Black Lotus Labs research team into Microsoft Sentinel. The connector automatically downloads and uploads threat intelligence indicators including IPv4 addresses and domains to the ThreatIntelIndicators table via the STIX Objects Upload API.



**NOTE:** This data connector uses the [Azure Functions Flex Consumption Plan](https://learn.microsoft.com/azure/azure-functions/flex-consumption-plan). More pricing details are [here](https://azure.microsoft.com/pricing/details/functions/#pricing).

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`ThreatIntelIndicators`](../tables/threatintelindicators.md) | ✓ | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Log Analytics Workspace** (Workspace): Read and write permissions on the Log Analytics workspace are required.

**Custom Permissions:**
- **Microsoft.Web/sites permissions**: Read and write permissions to Azure Functions to create a Function App is required. [See the documentation to learn more about Azure Functions](https://docs.microsoft.com/azure/azure-functions/).
- **Azure Entra App Registration**: An Azure Entra application registration with the Microsoft Sentinel Contributor role assigned is required for STIX Objects API access. [See the documentation to learn more about Azure Entra applications](https://docs.microsoft.com/azure/active-directory/develop/quickstart-register-app).
- **Microsoft Sentinel Contributor Role**: Microsoft Sentinel Contributor role is required for the Azure Entra application to upload threat intelligence indicators.
- **Lumen Defender Threat Feed API Key**: A Lumen Defender Threat Feed API Key is required for accessing threat intelligence data. [Contact Lumen for API access](mailto:DefenderThreatFeedSales@Lumen.com?subject=API%20Access%20Request).

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

>**NOTE:** This connector uses Azure Functions with the Flex Consumption Plan to connect to the Lumen Defender Threat Feed API and upload threat intelligence indicators to Microsoft Sentinel via the STIX Objects API. This might result in additional data ingestion costs. Check the [Azure Functions pricing page](https://azure.microsoft.com/pricing/details/functions/) for details.

>**(Optional Step)** Securely store API keys and secrets in Azure Key Vault. Azure Key Vault provides a secure mechanism to store and retrieve key values. [Follow these instructions](https://docs.microsoft.com/azure/app-service/app-service-key-vault-references) to use Azure Key Vault with an Azure Functions App.

**1. Configuration**

**STEP 1 - Obtain Lumen Defender Threat Feed API Key**

1. [Contact Lumen](mailto:DefenderThreatFeedSales@Lumen.com?subject=API%20Access%20Request) to obtain API access to our Threat Feed API service
2. Obtain your API key for authentication.

**STEP 2 - Configure Azure Entra ID Application and gather information**

1. Create a new Entra app registration from the **App registrations** tab in the Entra ID section of the Azure portal. [See the documentation for a guide to registering an application in Microsoft Entra ID.](https://learn.microsoft.com/en-us/entra/identity-platform/quickstart-register-app)
2. Create a client secret and note the **Application ID**, **Tenant ID**, and **Client Secret**
3. Assign the **Microsoft Sentinel Contributor** role to the newly registered application in the **Access control (IAM)** menu of your Microsoft Sentinel Log Analytics Workspace
4. Make note of your **Workspace ID**, which can be obtained from the **overview** page of the Log Analytics Workspace for your Microsoft Sentinel instance.
- **Tenant ID**: `TenantId`
  > *Note: The value above is dynamically provided when these instructions are presented within Microsoft Sentinel.*
- **Workspace ID**: `WorkspaceId`
  > *Note: The value above is dynamically provided when these instructions are presented within Microsoft Sentinel.*

**STEP 3 - Enable the **Threat Intelligence Upload Indicators API (Preview)** data connector in Microsoft Sentinel**

1. Deploy the **Threat Intelligence (New) Solution**, which includes the **Threat Intelligence Upload Indicators API (Preview)**
2. Browse to the Content Hub, find and select the **Threat Intelligence (NEW)** solution.
3. Select the **Install/Update** button.

**STEP 4 - Deploy the Azure Function**

>**IMPORTANT:** Before deploying the Lumen Defender Threat Feed connector, have the following information readily available:
> - Tenant ID and Workspace ID
> - Azure Entra application details (Client ID, Client Secret)
> - Lumen API key
>1. Click the Deploy to Azure button.

[![Deploy To Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FLumen%2520Defender%2520Threat%2520Feed%2FData%2520Connectors%2FLumenThreatFeedv2%2Fazuredeploy_Connector_LumenThreatFeed_AzureFunction_v2.json)

2. Fill in the appropriate values for each parameter:

**Basic Settings:**
- **Subscription**: Confirm the correct subscription is selected or use the dropdown to change your selection
- **Resource Group**: Select the resource group to be used by the Function App and related resources
- **Function Name**: Enter a globally unique name for the Function App (11-character limit recommended)
- **App Insights Workspace Resource ID**: The Resource ID of the Log Analytics Workspace for Application Insights (click **JSON View** on the Log Analytics workspace to copy)

**Lumen API Settings:**
- **Lumen API Key**: Obtain an API key through Lumen support
- **Lumen Base URL**: Filled in automatically and should generally not be changed
- **Confidence Threshold** (Optional): Minimum confidence score (60-100) for indicators (default: 60)
- **Enable IPv4** (Optional): Enable IPv4 address indicators (default: true)
- **Enable Domain** (Optional): Enable domain name indicators (default: true)

**Azure Entra ID Settings:**
- **Workspace ID**: Found in the "Overview" tab for the Log Analytics Workspace of the Microsoft Sentinel instance
- **Tenant ID**: Obtained from the Entra App Registration overview page (listed as Directory ID)
- **Client ID**: Obtained from the Entra App Registration overview page (listed as Application ID)
- **Client Secret**: Obtained when the secret is created during the app registration process

**STEP 5 - Verify Deployment**

1. The connector polls for indicator updates every 15 minutes.
2. After the app performs its first run, review the indicators ingested by either viewing the "Lumen Defender Threat Feed Overview" workbook or viewing the "Threat Intelligence" section in Microsoft Sentinel. In Microsoft Sentinel "Threat Intelligence", filter for source "Lumen" to display only Lumen generated indicators.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

