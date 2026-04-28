# ExtraHop Detections Data Connector

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/ExtraHop.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `ExtraHop` |
| **Publisher** | ExtraHop |
| **Used in Solutions** | [ExtraHop](../solutions/extrahop.md) |
| **Collection Method** | [Azure Function](../methods/azure-function.md) |
| **Connector Definition Files** | [ExtraHop_FunctionApp.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ExtraHop/Data%20Connectors/ExtraHopDataConnector/ExtraHop_FunctionApp.json) |
| **Ingestion API** | [Log Ingestion API](../methods/log-ingestion-api.md) — *Azure Function code uses LogsIngestionClient/Log Ingestion API* |

The [ExtraHop](https://extrahop.com/) Detections Data Connector enables you to import detection data from ExtraHop RevealX to Microsoft Sentinel through webhook payloads. Data is ingested using the Azure Monitor Log Ingestion API via a Data Collection Rule (DCR).

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`ExtraHop_Detections_CL`](../tables/extrahop-detections-cl.md) | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): read and write permissions on the workspace are required.
- **Keys** (Workspace): read permissions to shared keys for the workspace are required. [See the documentation to learn more about workspace keys](https://docs.microsoft.com/azure/azure-monitor/platform/agent-windows#obtain-workspace-id-and-key).

**Custom Permissions:**
- **Azure Subscription**: Azure Subscription with owner role is required to register an application in Microsoft Entra ID, create a Data Collection Endpoint, Data Collection Rule, and assign the required roles.
- **Microsoft Entra App Registration**: A Microsoft Entra ID App Registration (Service Principal) with a Client Secret is required. The app's Object ID must be provided so the deployment can assign it the necessary role to publish logs via the Log Ingestion API.
- **Microsoft.Web/sites permissions**: Read and write permissions to Azure Functions to create a Function App is required. [See the documentation to learn more about Azure Functions](https://docs.microsoft.com/azure/azure-functions/).
- **ExtraHop RevealX permissions**: The following is required on your ExtraHop RevealX system:
 1. Your RevealX system must be running firmware version 9.9.2 or later.
 2. Your RevealX system must be connected to ExtraHop Cloud Services.
 3. Your user account must have System Administration privileges on RevealX 360 or Full Write privileges on RevealX Enterprise.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

>**NOTE:** This connector uses Azure Functions to receive ExtraHop webhook payloads and ingest them into Microsoft Sentinel using the **Azure Monitor Log Ingestion API** (DCR-based ingestion). This replaces the legacy Log Analytics HTTP Data Collector API. This might result in additional data ingestion costs. Check the [Azure Functions pricing page](https://azure.microsoft.com/pricing/details/functions/) for details.

>**(Optional Step)** Securely store API credentials in Azure Key Vault. Azure Key Vault provides a secure mechanism to store and retrieve key values. [Follow these instructions](https://docs.microsoft.com/azure/app-service/app-service-key-vault-references) to use Azure Key Vault with an Azure Function App.

**NOTE:** This data connector depends on a parser based on a Kusto Function to work as expected which is deployed as part of the solution. To view the function code in Log Analytics, open Log Analytics/Microsoft Sentinel Logs blade, click Functions and search for the alias **ExtraHopDetections** and load the function code or click [here](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ExtraHop/Parsers/ExtraHopDetections.yaml). The function usually takes 10-15 minutes to activate after solution installation/update.

**2. Configuration:**

**STEP 1 - App Registration steps for the Application in Microsoft Entra ID**

 This integration requires an App registration in the Azure portal. Follow the steps in this section to create a new application in Microsoft Entra ID:
 1. Sign in to the [Azure portal](https://portal.azure.com/).
 2. Search for and select **Microsoft Entra ID**.
 3. Under **Manage**, select **App registrations > New registration**.
 4. Enter a display **Name** for your application (e.g., `ExtraHopSentinelConnector`).
 5. Select **Register** to complete the initial app registration.
 6. When registration finishes, the Azure portal displays the app registration's Overview pane. You see the **Application (client) ID** and **Tenant ID**. The client ID and Tenant ID is required as configuration parameters for the execution of ExtraHop Data Connector. 

> **Reference link:** [https://learn.microsoft.com/azure/active-directory/develop/quickstart-register-app](https://learn.microsoft.com/azure/active-directory/develop/quickstart-register-app)

**STEP 2 - Add a client secret for application in Microsoft Entra ID**

 Sometimes called an application password, a client secret is a string value required for the execution of ExtraHop Data Connector. Follow the steps in this section to create a new Client Secret:
 1. In the Azure portal, in **App registrations**, select your application.
 2. Select **Certificates & secrets > Client secrets > New client secret**.
 3. Add a description for your client secret.
 4. Select an expiration for the secret or specify a custom lifetime. Limit is 24 months.
 5. Select **Add**. 
 6. *Record the secret's value for use in your client application code. This secret value is never displayed again after you leave this page.* The secret value is required as configuration parameter for the execution of ExtraHop Data Connector. 

> **Reference link:** [https://learn.microsoft.com/azure/active-directory/develop/quickstart-register-app#add-a-client-secret](https://learn.microsoft.com/azure/active-directory/develop/quickstart-register-app#add-a-client-secret)

**STEP 3 - Get Object ID of your application in Microsoft Entra ID**

 After creating your app registration, follow the steps in this section to get Object ID:
 1. Go to **Microsoft Entra ID**.
 2. Select **Enterprise applications** from the left menu.
 3. Find your newly created application in the list (you can search by the name you provided).
 4. Click on the application.
 5. On the overview page, copy the **Object ID**. This is the **AzureEntraObjectID** needed for your ARM template role assignment.

**STEP 4 - Deploy ExtraHop Data Connector**

>**IMPORTANT:** Before deploying the ExtraHop Data connector, have the Microsoft Entra ID App Registration details (Client ID, Client Secret, Tenant ID, and Object ID) readily available.

**6. Deploy the ExtraHop Detections Data Connector:**

Use this method for automated deployment of the ExtraHop Detections Data connector.

1. Click the **Deploy to Azure** button below. 

	[![Deploy To Azure](https://aka.ms/deploytoazurebutton)](https://aka.ms/sentinel-ExtraHop-azuredeploy)
2. Select the preferred **Subscription**, **Resource Group** and **Region**. 
3. Enter the below information : 

	 a. **FunctionName** - Enter the Function App name (used to name all related resources). Must be 1-11 characters. Default: `ExtraHop`

	 b. **Location** - The location in which the data collection rules and data collection endpoints should be deployed

	 c. **WorkspaceName** - Enter Microsoft Sentinel Workspace Name of Log Analytics workspace

	 d. **AzureClientId** - Enter Azure Client ID that you have created during app registration

	 e. **AzureClientSecret** - Enter Azure Client Secret that you have created during creating the client secret

	 f. **AzureEntraObjectID** - Enter Object id of your Microsoft Entra App

	 g. **TenantId** - Enter Tenant ID of your Microsoft Entra ID

	 h. **DetectionsTableName** - Enter name of the table used to store ExtraHop Detections logs. Default is 'ExtraHop_Detections'

	 i. **LogLevel** - Select log level or log severity value from Debug, Info, Error, Warning. By default it is set to Info

	 j. **AppInsightsWorkspaceResourceID** - Migrate Classic Application Insights to Log Analytic Workspace which is retiring by 29 Febraury 2024. Use 'Log Analytic Workspace-->Properties' blade having 'Resource ID' property value. This is a fully qualified resourceId which is in format '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}'

4. Mark the checkbox labeled **I agree to the terms and conditions stated above**. 
5. Click **Purchase** to deploy.

**STEP 5 - Post Deployment**

After successful deployment, configure the webhook connection from ExtraHop RevealX to Microsoft Sentinel.

**8. 1) Get the Function App endpoint**

1. Go to the Azure function overview page and click the **Functions** tab.
2. Click on the function called **ExtraHopHttpStarter**.
3. Go to **Get Function URL** and copy the function URL available under **default (Function key)**.
4. Replace **{functionname}** with **ExtraHopDetectionsOrchestrator** in the copied function URL.

**9. 2) Configure a connection to Microsoft Sentinel and specify webhook payload criteria from RevealX**

From your ExtraHop system, configure the Microsoft Sentinel integration to establish a connection between Microsoft Sentinel and ExtraHop RevealX and to create detection notification rules that will send webhook data to Microsoft Sentinel. For detailed instructions, refer to [Integrate ExtraHop RevealX with Microsoft Sentinel SIEM](https://docs.extrahop.com/current/rx-enterprise-integrations-microsoft-sentinel-siem/).

*After notification rules have been configured and Microsoft Sentinel is receiving webhook data, the Function App is triggered and you can view ExtraHop detections from the Log Analytics workspace custom table. Use the **ExtraHopDetections** parser function for a normalized view of the data.*

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

