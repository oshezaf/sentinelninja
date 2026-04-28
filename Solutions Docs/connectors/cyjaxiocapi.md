# ⚠️ Cyjax Threat Intelligence IOC Connector

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace or not installed in Content Hub.

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Cyjax.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `CyjaxIOCAPI` |
| **Publisher** | Cyjax |
| **Used in Solutions** | [Cyjax](../solutions/cyjax.md) |
| **Collection Method** | [Azure Function](../methods/azure-function.md) |
| **Connector Definition Files** | [CyjaxIOC_API_FunctionApp.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cyjax/Data%20Connectors/CyjaxIOC_API_FunctionApp.json) |
| **Ingestion API** | [HTTP Data Collector API](../methods/http-data-collector-api.md) — *Connector definition requires workspace key (SharedKey pattern)* |

The [Cyjax](https://www.cyjax.com/) Threat Intelligence IOC data connector provides the capability to ingest Indicators of Compromise (IOCs) from the Cyjax API v2 into Microsoft Sentinel as STIX 2.1 Threat Intelligence indicators. The connector fetches IOCs including IPs, domains, URLs, file hashes, emails, and hostnames, enriches them with GeoIP, ASN, and sighting data, and uploads them to the Microsoft Sentinel Threat Intelligence platform via the Upload Indicator API.



The connector supports:

- Automated IOC collection with configurable schedule

- IOC enrichment with GeoIP, ASN, and sighting data

- STIX 2.1 indicator mapping with TLP markings

- Incremental fetching with checkpoint management



## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`ThreatIntelIndicators`](../tables/threatintelindicators.md) | ✓ | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and write permissions on the workspace are required.
- **Keys** (Workspace): Read permissions to shared keys for the workspace are required. [See the documentation to learn more about workspace keys](https://docs.microsoft.com/azure/azure-monitor/platform/agent-windows#obtain-workspace-id-and-key).

**Custom Permissions:**
- **Azure Subscription**: Azure Subscription with owner role is required to register an application in Microsoft Entra ID and assign role of contributor to app in resource group.
- **Microsoft.Web/sites permissions**: Read and write permissions to Azure Functions to create a Function App is required. [See the documentation to learn more about Azure Functions](https://docs.microsoft.com/azure/azure-functions/).
- **Cyjax API Credentials**: A Cyjax API v2 access token (Bearer Token) is required. Contact Cyjax to obtain API credentials.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Resource Group**

You need to have a resource group created with a subscription you are going to use.

**2. Functions App**

You need to have an Azure App registered for this connector to use:
1. Application (Client) ID
2. Tenant ID
3. Client Secret

>**NOTE:** This connector uses Azure Functions to connect to the Cyjax API v2 to pull IOC indicators into Microsoft Sentinel. This might result in additional data ingestion costs. Check the [Azure Functions pricing page](https://azure.microsoft.com/pricing/details/functions/) for details.

**STEP 1 - App Registration steps for the Application in Microsoft Entra ID**

This integration requires an App registration in the Azure portal. Follow the steps in this section to create a new application in Microsoft Entra ID:
1. Sign in to the [Azure portal](https://portal.azure.com/).
2. Search for and select **Microsoft Entra ID**.
3. Under **Manage**, select **App registrations > New registration**.
4. Enter a display **Name** for your application.
5. Select **Register** to complete the initial app registration.
6. When registration finishes, the Azure portal displays the app registration's Overview pane. You see the **Application (client) ID** and **Tenant ID**. The client ID and Tenant ID are required as configuration parameters for the execution of the Cyjax IOC Data Connector.

> **Reference link:** [https://learn.microsoft.com/azure/active-directory/develop/quickstart-register-app](https://learn.microsoft.com/azure/active-directory/develop/quickstart-register-app)

**STEP 2 - Add a client secret for application in Microsoft Entra ID**

Sometimes called an application password, a client secret is a string value required for the execution of the Cyjax IOC Data Connector. Follow the steps in this section to create a new Client Secret:
1. In the Azure portal, in **App registrations**, select your application.
2. Select **Certificates & secrets > Client secrets > New client secret**.
3. Add a description for your client secret.
4. Select an expiration for the secret or specify a custom lifetime. Limit is 24 months.
5. Select **Add**.
6. *Record the secret's value for use in your client application code. This secret value is never displayed again after you leave this page.* The secret value is required as configuration parameter for the execution of the Cyjax IOC Data Connector.

> **Reference link:** [https://learn.microsoft.com/azure/active-directory/develop/quickstart-register-app#add-a-client-secret](https://learn.microsoft.com/azure/active-directory/develop/quickstart-register-app#add-a-client-secret)

**STEP 3 - Assign Microsoft Sentinel Contributor Role**

Assign the **Microsoft Sentinel Contributor** role to the App Registration to allow it to upload threat intelligence indicators:
1. Go to the **Log Analytics workspace** associated with your Microsoft Sentinel instance.
2. Select **Access control (IAM)** from the left menu.
3. Click **Add > Add role assignment**.
4. Search for **Microsoft Sentinel Contributor** and select it.
5. Under **Members**, select **User, group, or service principal** and search for your App Registration name.
6. Select the app and click **Review + assign**.

**STEP 4 - Obtain Cyjax API Credentials**

Contact Cyjax to obtain your API v2 access token (Bearer Token). This token is used to authenticate requests to the Cyjax IOC and enrichment endpoints.

**STEP 5 - Deploy the Cyjax IOC Connector**

>**IMPORTANT:** Before deploying the Cyjax IOC connector, have the Cyjax API access token, Azure App Registration credentials (Client ID, Client Secret, Tenant ID), and Workspace ID readily available.
- **Workspace ID**: `WorkspaceId`
  > *Note: The value above is dynamically provided when these instructions are presented within Microsoft Sentinel.*

**8. Option 1 - Azure Resource Manager (ARM) Template**

Use this method for automated deployment of the Cyjax IOC Data Connector.

1. Click the **Deploy to Azure** button below.

	[![Deploy To Azure](https://aka.ms/deploytoazurebutton)](https://aka.ms/sentinel-CyjaxIOC-azuredeploy) [![Deploy to Azure Gov](https://aka.ms/deploytoazuregovbutton)](https://aka.ms/sentinel-CyjaxIOC-azuredeploy-gov)
2. Select the preferred **Subscription**, **Resource Group** and **Region**.
3. Enter the below information:

	 a. **FunctionName** - Enter a unique Function App name (max 11 characters)

	 b. **Location** - The location for data collection rules and endpoints deployment

	 c. **WorkspaceID** - Enter the Log Analytics Workspace ID

	 d. **AzureClientID** - Enter Azure Client ID from your App Registration

	 e. **AzureClientSecret** - Enter Azure Client Secret from your App Registration

	 f. **AzureTenantID** - Enter Azure Tenant ID

	 g. **CyjaxBaseURL** - Enter Cyjax API v2 Base URL (default: https://api.cymon.co/v2)

	 h. **CyjaxAccessToken** - Enter Cyjax API Bearer Token

	 i. **LookbackDays** - Number of days to look back on first run (default: 1)

	 j. **EnableEnrichment** - Set to true to enrich IOCs with GeoIP, ASN, and sighting data. Set to false to skip enrichment and reduce API calls and execution time (default: true)

	 k. **IOCQuery** - Optional free-text search query to filter IOCs from the Cyjax API (e.g. a keyword, threat actor, or campaign name). Leave empty to fetch all available IOCs

	 l. **IndicatorType** - Filter IOCs by type. Enter comma-separated values (e.g., URL,Domain,IPv4). Supported types: URL, Domain, IPv4, IPv6, Hostname, Email, FileHash-SHA1, FileHash-SHA256, FileHash-MD5, FileHash-SSDEEP. Leave empty to fetch all types

	 m. **Schedule** - Enter a valid Quartz Cron-Expression (default: every 10 minutes)

	 n. **LogLevel** - Set the log level (default: Info)

	 o. **AppInsightsWorkspaceResourceID** - Enter the Application Insights Workspace Resource ID

4. Mark the checkbox labeled **I agree to the terms and conditions stated above**.
5. Click **Purchase** to deploy.

**9. Option 2 - Manual Deployment of Azure Functions**

Use the following step-by-step instructions to deploy the Cyjax IOC data connector manually with Azure Functions (Deployment via Visual Studio Code).

**1. Deploy a Function App**

> **NOTE:** You will need to [prepare VS code](https://docs.microsoft.com/azure/azure-functions/functions-create-first-function-python#prerequisites) for Azure function development.

1. Download the [Azure Function App](https://aka.ms/sentinel-CyjaxIOC-functionapp) file. Extract archive to your local development computer.
2. Start VS Code. Choose File in the main menu and select Open Folder.
3. Select the top level folder from extracted files.
4. Choose the Azure icon in the Activity bar, then in the **Azure: Functions** area, choose the **Deploy to function app** button.
If you aren't already signed in, choose the Azure icon in the Activity bar, then in the **Azure: Functions** area, choose **Sign in to Azure**
If you're already signed in, go to the next step.
5. Provide the following information at the prompts:

	a. **Select folder:** Choose a folder from your workspace or browse to one that contains your function app.

	b. **Select Subscription:** Choose the subscription to use.

	c. Select **Create new Function App in Azure** (Don't choose the Advanced option)

	d. **Enter a globally unique name for the function app:** Type a name that is valid in a URL path. The name you type is validated to make sure that it's unique in Azure Functions. (e.g. CYJAXXXXXX).

	e. **Select a runtime:** Choose Python 3.12

	f. Select a location for new resources. For better performance and lower costs choose the same [region](https://azure.microsoft.com/regions/) where Microsoft Sentinel is located.

6. Deployment will begin. A notification is displayed after your function app is created and the deployment package is applied.
7. Go to Azure Portal for the Function App configuration.

**2. Configure the Function App**

1. In the Function App, select the Function App Name and select **Configuration**.
2. In the **Application settings** tab, select **+ New application setting**.
3. Add each of the following application settings individually, with their respective values (case-sensitive):

	 - **WorkspaceID** - Your Log Analytics Workspace ID

	 - **AzureClientID** - Azure Client ID from your App Registration

	 - **AzureClientSecret** - Azure Client Secret from your App Registration

	 - **AzureTenantID** - Your Azure Tenant ID

	 - **CyjaxBaseURL** - Cyjax API v2 Base URL (default: https://api.cymon.co/v2)

	 - **CyjaxAccessToken** - Your Cyjax API Bearer Token

	 - **LookbackDays** - Number of days to look back on first run (default: 1)

	 - **EnableEnrichment** - Set to true to enrich IOCs with GeoIP, ASN, and sighting data. Set to false to skip enrichment and reduce API calls and execution time (default: true)

	 - **IOCQuery** - Optional free-text search query to filter IOCs from the Cyjax API (e.g. a keyword, threat actor, or campaign name). Leave empty to fetch all available IOCs (optional)

	 - **IndicatorType** - Filter IOCs by type. Enter comma-separated values (e.g., URL,Domain,IPv4). Supported types: URL, Domain, IPv4, IPv6, Hostname, Email, FileHash-SHA1, FileHash-SHA256, FileHash-MD5, FileHash-SSDEEP. Leave empty to fetch all types (optional)

	 - **Schedule** - Quartz Cron-Expression (default: every 10 minutes)

	 - **LogLevel** - Log level (default: Info)

	 - **AppInsightsWorkspaceResourceID** - Application Insights Workspace Resource ID (optional)

	 - **logAnalyticsUri** (optional) - Use logAnalyticsUri to override the log analytics API endpoint for dedicated cloud. For example, for public cloud, leave the value empty; for Azure GovUS cloud environment, specify the value in the following format: `https://<CustomerId>.ods.opinsights.azure.us`.

4. Once all application settings have been entered, click **Save**.

## Additional Documentation

> 📄 *Source: [Cyjax\Data Connectors\README.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Cyjax\Data Connectors\README.md)*

# Cyjax IOC Data Connector for Microsoft Sentinel

This directory contains the Cyjax IOC (Indicators of Compromise) Data Connector for Microsoft Sentinel, which enables ingestion of threat intelligence indicators from the Cyjax API v2 into Microsoft Sentinel.

## Overview

The Cyjax IOC Data Connector provides the capability to:
- Ingest IOCs from Cyjax API v2 into Microsoft Sentinel as STIX 2.1 Threat Intelligence indicators
- Fetch various types of IOCs including IPs, domains, URLs, file hashes, emails, and hostnames
- Enrich IOCs with GeoIP, ASN, and sighting data
- Upload indicators to Microsoft Sentinel via the Upload Indicator API
- Support automated IOC collection with configurable schedules
- Incremental fetching with checkpoint management

## Files in this Directory

### Configuration Files
- `CyjaxIOC_API_FunctionApp.json` - Microsoft Sentinel data connector definition file
- `azuredeploy_Connector_CyjaxIOC_AzureFunction.json` - ARM template for automated deployment

### Source Code
- `CyjaxIOCIngestion/` - Azure Function source code for the connector
- `SharedCode/` - Shared utility code and libraries

### Function App Configuration
- `host.json` - Azure Functions host configuration
- `requirements.txt` - Python dependencies for the Azure Function

## Prerequisites

1. **Azure Subscription** with owner role to register applications and assign roles
2. **Microsoft Sentinel** workspace with appropriate permissions
3. **Cyjax API v2** access token (Bearer Token)
4. **Azure App Registration** with the following:
   - Application (Client) ID
   - Tenant ID
   - Client Secret

## Deployment Options

### Option 1: Automated Deployment via ARM Template

1. Click the "Deploy to Azure" button in the Microsoft Sentinel portal
2. Provide the following parameters:
   - **FunctionName**: Unique Function App name (max 11 characters)
   - **Location**: Region for deployment
   - **WorkspaceID**: Log Analytics Workspace ID
   - **AzureClientID**: Azure Client ID from App Registration
   - **AzureClientSecret**: Azure Client Secret from App Registration
   - **AzureTenantID**: Azure Tenant ID
   - **CyjaxBaseURL**: Cyjax API v2 Base URL (default: https://api.cymon.co/v2)
   - **CyjaxAccessToken**: Cyjax API Bearer Token
   - **LookbackDays**: Days to look back on first run (default: 1)
   - **EnableEnrichment**: Set to `true` to enrich IOCs with GeoIP, ASN, and sighting data. Set to `false` to skip enrichment and reduce API calls and execution time (default: `true`)
   - **IOCQuery**: Optional free-text search query to filter IOCs from the Cyjax API (e.g. a keyword, threat actor, or campaign name). Leave empty to fetch all available IOCs
   - **IndicatorType**: Filter IOCs by type. Enter comma-separated values (e.g., URL,Domain,IPv4). Supported types: URL, Domain, IPv4, IPv6, Hostname, Email, FileHash-SHA1, FileHash-SHA256, FileHash-MD5, FileHash-SSDEEP. Leave empty to fetch all types
   - **Schedule**: Quartz Cron-Expression (default: every 10 minutes)
   - **LogLevel**: Log level (default: Info)
   - **AppInsightsWorkspaceResourceID**: Application Insights Workspace Resource ID (optional)

### Option 2: Manual Deployment via Visual Studio Code

1. Deploy the Function App using VS Code
2. Configure application settings in Azure Portal
3. Required application settings:
   - `WorkspaceID`: Your Log Analytics Workspace ID
   - `AzureClientID`: Azure Client ID from App Registration
   - `AzureClientSecret`: Azure Client Secret from App Registration
   - `AzureTenantID`: Your Azure Tenant ID
   - `CyjaxBaseURL`: Cyjax API v2 Base URL
   - `CyjaxAccessToken`: Your Cyjax API Bearer Token
   - `LookbackDays`: Number of days to look back (default: 1)
   - `ENABLE_ENRICHMENT`: Set to `true` to enrich IOCs with GeoIP, ASN, and sighting data. Set to `false` to skip enrichment (default: `true`)
   - `IOC_QUERY`: Optional free-text search query to filter IOCs (e.g. keyword, threat actor, campaign name). Leave empty for no filter (optional)
   - `Indicator_Type`: Filter IOCs by type. Enter comma-separated values (e.g., URL,Domain,IPv4). Supported types: URL, Domain, IPv4, IPv6, Hostname, Email, FileHash-SHA1, FileHash-SHA256, FileHash-MD5, FileHash-SSDEEP. Leave empty to fetch all types (optional)
   - `Schedule`: Quartz Cron-Expression
   - `LogLevel`: Log level (Info/Debug/Error/Warning)
   - `AppInsightsWorkspaceResourceID`: Application Insights Workspace Resource ID (optional)
   - `logAnalyticsUri`: Log Analytics API endpoint override (optional)

## Configuration Steps

### 1. App Registration in Microsoft Entra ID

1. Sign in to the [Azure portal](https://portal.azure.com/)
2. Navigate to **Microsoft Entra ID** → **App registrations** → **New registration**
3. Enter a display name for your application
4. Select **Register**
5. Note the **Application (client) ID** and **Tenant ID**

### 2. Add Client Secret

1. In your app registration, go to **Certificates & secrets** → **Client secrets**
2. Click **New client secret**
3. Add a description and expiration
4. Select **Add** and copy the secret value immediately

### 3. Assign Microsoft Sentinel Contributor Role

1. Go to your Log Analytics workspace
2. Select **Access control (IAM)** → **Add role assignment**
3. Choose **Microsoft Sentinel Contributor** role
4. Select your app registration as the member
5. Click **Review + assign**

### 4. Obtain Cyjax API Credentials

Contact Cyjax to obtain your API v2 access token (Bearer Token)

## Data Types

The connector ingests data into the following table:
- **ThreatIntelIndicators** - Microsoft Sentinel's built-in threat intelligence table

## Monitoring and Troubleshooting

### Monitoring
- Use Application Insights to monitor function execution
- Check the Azure Function logs for errors and warnings
- Monitor data ingestion in Microsoft Sentinel

### Common Issues
1. **Authentication failures**: Verify Azure App credentials and Cyjax API token
2. **Permission errors**: Ensure Microsoft Sentinel Contributor role is assigned
3. **Data not appearing**: Check function logs and verify schedule configuration

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

