# Digital Shadows Searchlight

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/DigitalShadowsLogo.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `DigitalShadowsSearchlightAzureFunctions` |
| **Publisher / Vendor** | Digital Shadows |
| **Source Product** | Searchlight *(basis: title)* |
| **Used in Solutions** | [Digital Shadows](../solutions/digital-shadows.md) |
| **Collection Method** | [Azure Function](../methods/azure-function.md) |
| **Connector Definition Files** | [DigitalShadowsSearchlight_API_functionApp.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Digital%20Shadows/Data%20Connectors/DigitalShadowsSearchlight_API_functionApp.json) |
| **Ingestion API** | [HTTP Data Collector API](../methods/http-data-collector-api.md) — *Azure Function code uses SharedKey/HTTP Data Collector API* |
| **Custom Log V1 Tables** | Yes 🔶 — ingests into tables with type-suffixed columns |
| **Microsoft Learn** | [View on Learn](https://learn.microsoft.com/azure/sentinel/data-connectors-reference#digital-shadows-searchlight-using-azure-functions) |

The Digital Shadows data connector provides ingestion of the incidents and alerts from Digital Shadows Searchlight into the Microsoft Sentinel using the REST API. The connector will provide the incidents and alerts information such that it helps to examine, diagnose and analyse the potential security risks and threats.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`DigitalShadows_CL`](../tables/digitalshadows-cl.md) 🔶 | ✓ | ✓ | ✓ |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): read and write permissions on the workspace are required.
- **Keys** (Workspace): read permissions to shared keys for the workspace are required. [See the documentation to learn more about workspace keys](https://docs.microsoft.com/azure/azure-monitor/platform/agent-windows#obtain-workspace-id-and-key).

**Custom Permissions:**
- **Microsoft.Web/sites permissions**: Read and write permissions to Azure Functions to create a Function App is required. [See the documentation to learn more about Azure Functions](https://docs.microsoft.com/azure/azure-functions/).
- **REST API Credentials/permissions**: **Digital Shadows account ID, secret and key** is required.  See the documentation to learn more about API on the `https://portal-digitalshadows.com/learn/searchlight-api/overview/description`.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

>**NOTE:** This connector uses Azure Functions to connect to a 'Digital Shadows Searchlight' to pull its logs into Microsoft Sentinel. This might result in additional data ingestion costs. Check the [Azure Functions pricing page](https://azure.microsoft.com/pricing/details/functions/) for details.

>**(Optional Step)** Securely store workspace and API authorization key(s) or token(s) in Azure Key Vault. Azure Key Vault provides a secure mechanism to store and retrieve key values. [Follow these instructions](https://docs.microsoft.com/azure/app-service/app-service-key-vault-references) to use Azure Key Vault with an Azure Function App.

**STEP 1 - Configuration steps for the 'Digital Shadows Searchlight' API**

The provider should provide or link to detailed steps to configure the 'Digital Shadows Searchlight' API endpoint so that the Azure Function can authenticate to it successfully, get its authorization key or token, and pull the appliance's logs into Microsoft Sentinel.

**STEP 2 - Choose ONE from the following two deployment options to deploy the connector and the associated Azure Function**

>**IMPORTANT:** Before deploying the 'Digital Shadows Searchlight' connector, have the Workspace ID  and Workspace Primary Key (can be copied from the following), as well as the 'Digital Shadows Searchlight' API authorization key(s) or Token, readily available.
- **Workspace ID**: `WorkspaceId`
  > *Note: The value above is dynamically provided when these instructions are presented within Microsoft Sentinel.*
- **Primary Key**: `PrimaryKey`
  > *Note: The value above is dynamically provided when these instructions are presented within Microsoft Sentinel.*

**Option 1 - Azure Resource Manager (ARM) Template**

Use this method for automated deployment of the 'Digital Shadows Searchlight' connector.

1. Click the **Deploy to Azure** button below. 

	[![Deploy To Azure](https://aka.ms/deploytoazurebutton)](https://aka.ms/sentinel-Digitalshadows-azuredeploy)
2. Select the preferred **Subscription**, **Resource Group** and **Location**. 
3. Enter the **Workspace ID**, **Workspace Key**, **API Username**, **API Password**, 'and/or Other required fields'. 
>Note: If using Azure Key Vault secrets for any of the values above, use the`@Microsoft.KeyVault(SecretUri={Security Identifier})`schema in place of the string values. Refer to [Key Vault references documentation](https://docs.microsoft.com/azure/app-service/app-service-key-vault-references) for further details. 
4. Mark the checkbox labeled **I agree to the terms and conditions stated above**. 
5. Click **Purchase** to deploy.

**Option 2 - Manual Deployment of Azure Functions**

 Use the following step-by-step instructions to deploy the 'Digital Shadows Searchlight' connector manually with Azure Functions.

**1. Create a Function App**

1.  From the Azure Portal, navigate to [Function App](https://portal.azure.com/#blade/HubsExtension/BrowseResource/resourceType/Microsoft.Web%2Fsites/kind/functionapp).
2. Click **+ Create** at the top.
3. In the **Basics** tab, ensure Runtime stack is set to **python 3.11**. 
4. In the **Hosting** tab, ensure **Plan type** is set to **'Consumption (Serverless)'**.
5.select Storage account
6. 'Add other required configurations'. 
5. 'Make other preferable configuration changes', if needed, then click **Create**.

**2. Import Function App Code(Zip deployment)**

1. Install Azure CLI
2. From terminal type **az functionapp deployment source config-zip -g <ResourceGroup> -n <FunctionApp> --src <Zip File>** and hit enter. Set the `ResourceGroup` value to: your resource group name. Set the `FunctionApp` value to: your newly created function app name. Set the `Zip File` value to: `digitalshadowsConnector.zip`(path to your zip file). Note:- Download the zip file from the link - [Function App Code](https://aka.ms/sentinel-DigitalShadows-functionapp)

**3. Configure the Function App**

1. In the Function App screen, click the Function App name and select **Configuration**.
2. In the **Application settings** tab, select **+ New application setting**.
3. Add each of the following 'x (number of)' application settings individually, under Name, with their respective string values (case-sensitive) under Value: 
		DigitalShadowsAccountID
		WorkspaceID
		WorkspaceKey
		DigitalShadowsKey
		DigitalShadowsSecret
		HistoricalDays
		DigitalShadowsURL
		ClassificationFilterOperation
		HighVariabilityClassifications
		FUNCTION_NAME
		logAnalyticsUri (optional)
(add any other settings required by the Function App)
Set the `DigitalShadowsURL` value to: `https://api.searchlight.app/v1`
Set the `HighVariabilityClassifications` value to: `exposed-credential,marked-document`
Set the `ClassificationFilterOperation` value to: `exclude` for exclude function app or `include` for include function app 
>Note: If using Azure Key Vault secrets for any of the values above, use the`@Microsoft.KeyVault(SecretUri={Security Identifier})`schema in place of the string values. Refer to [Azure Key Vault references documentation](https://docs.microsoft.com/azure/app-service/app-service-key-vault-references) for further details.
 - Use logAnalyticsUri to override the log analytics API endpoint for dedicated cloud. For example, for public cloud, leave the value empty; for Azure GovUS cloud environment, specify the value in the following format: https://<CustomerId>.ods.opinsights.azure.us. 
4. Once all application settings have been entered, click **Save**.

## Additional Documentation

> 📄 *Source: [Digital Shadows\Data Connectors\readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Digital Shadows\Data Connectors\readme.md)*

# Digital Shadows Integration for Microsoft Sentinel

## Introduction

This folder contains the Azure function time trigger code for Digital Shadows-Microsoft Sentinel connector. The connector will run periodically and ingest the Digital Shadows incidents and alerts data into the Microsoft Sentinel logs custom table `DigitalShadows_CL`. After the data has been ingested, Analytic rule will promote the data and create the Microsoft Sentinel incidents out of them. Analytic rule will also trigger playbooks, `status-and-severity-update` and `add-comments`. The playbooks will change the status and severity and add comments to Microsoft Sentinel incidents according to the latest Digital Shadows data logged. The data can be visualized in the Workbook labelled `Digital Shadows workbook`.

## Folders

1. `Digital shadows/` - This contains the package, requirements, ARM JSON file, connector page template JSON, and other dependencies. 
2. `DigitalShadowsConnectorAzureFunction/` - This contains the Azure function source code along with sample data.


## Installing for the users

After the solution is published, we can find the connector in the connector gallery of Microsoft Sentinel among other connectors in Data connectors section of Sentinel. 

i. Go to Microsoft Sentinel -> Data Connectors

ii. Click on the Digital Shadows connector, connector page will open. 

iii. Click on the blue `Deploy to Azure` button.   

![Deploy to Azure](https://user-images.githubusercontent.com/88835344/143393168-018f97fb-95c1-4884-ba93-09306dd168b0.png)



It will lead to a custom deployment page where after entering accurate credentials and other information, the resources will get created. 


![Create resources](https://user-images.githubusercontent.com/88835344/142581668-5d5dd767-55a2-49fc-a9c9-eb458f75a2a7.png)


The connector should start ingesting the data into the logs in next 5-10 minutes.


## Installing for testing


i. Log in to Azure portal using the URL - [https://portal.azure.com/?feature.BringYourOwnConnector=true](https://portal.azure.com/?feature.BringYourOwnConnector=true).

ii. Go to Microsoft Sentinel -> Data Connectors

iii. Click the “import” button at the top and select the json file `DigitalShadowsSearchlight_API_functionApp.JSON` downloaded on your local machine from GitHub.

iv. This will load the connector page and rest of the process will be same as the Installing for users guideline above.


Each invocation and its logs of the function can be seen in Function App service of Azure, available in the Azure Portal outside the Microsoft Sentinel.

i. Go to Function App and click on the function which you have deployed, identified with the given name at the deployment stage.

ii. Go to Functions -> DigitalShadowsConnectorAzureFunction -> Monitor

iii. By clicking on invocation time, you can see all the logs for that run. 

**Note: Furthermore we can check logs in Application Insights of the given function in detail if needed. We can search the logs by operation ID in Transaction search section.**

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

