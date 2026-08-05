# Google Threat Intelligence Relevance System Alerts

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/GoogleThreatIntelligence.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `GoogleThreatIntelligenceRelevanceSystemAlertsAPI` |
| **Publisher** | Google |
| **Used in Solutions** | [Google Threat Intelligence](../solutions/google-threat-intelligence.md) |
| **Collection Method** | [Azure Function](../methods/azure-function.md) |
| **Connector Definition Files** | [GTIRelevanceSystemAlerts_API_FunctionApp.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Google%20Threat%20Intelligence/Data%20Connectors/GTIRelevanceSystemAlerts/GTIRelevanceSystemAlerts_API_FunctionApp.json) |
| **Ingestion API** | [Log Ingestion API](../methods/log-ingestion-api.md) — *Sibling ARM template declares DCR / Log Ingestion API resources* |

The [Google Threat Intelligence (virustotal)](https://www.virustotal.com) data connector ingests GTI Relevance System Alerts into Microsoft Sentinel. The connector polls the GTI Relevance System Alerts API on a configurable schedule and stores Relevance System Alerts data in the RelevanceSystemAlerts_CL custom table, enabling security analysts to investigate threats, correlate incidents, and respond to intelligence-driven alerts within the Sentinel workspace.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`RelevanceSystemAlerts_CL`](../tables/relevancesystemalerts-cl.md) | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): read and write permissions on the workspace are required.
- **Keys** (Workspace): read permissions to shared keys for the workspace are required. [See the documentation to learn more about workspace keys](https://docs.microsoft.com/azure/azure-monitor/platform/agent-windows#obtain-workspace-id-and-key).

**Custom Permissions:**
- **Azure Subscription**: An Azure Subscription with owner role is required to register an application in Microsoft Entra ID and assign the contributor role to the app in the resource group.
- **Microsoft.Web/sites permissions**: Read and write permissions to Azure Functions to create a Function App is required. [See the documentation to learn more about Azure Functions](https://docs.microsoft.com/azure/azure-functions/).
- **Google Threat Intelligence API Key**: A Google Threat Intelligence API key and project ID are required. See the [GTI documentation](https://gtidocs.virustotal.com/docs/how-get-gti-api-keys) to learn how to obtain an API key.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

>**NOTE:** This connector uses an Azure Function App (Timer Trigger, Python 3.12) to poll the Google Threat Intelligence Alerts API on a configurable schedule and ingest GTI Relevance System Alerts into the RelevanceSystemAlerts_CL custom table in Microsoft Sentinel. This may result in additional data ingestion costs. Check the [Azure Functions pricing page](https://azure.microsoft.com/pricing/details/functions/) for details.

**STEP 1 - Obtain Google Threat Intelligence API Credentials**

1. Log in to the [Google Threat Intelligence portal (virustotal)](https://www.virustotal.com).
2. Navigate to your GTI project settings and copy the **Project ID**.
3. Generate an **API Key** for your project and copy it securely.

**STEP 2 - App Registration steps for the Application in Microsoft Entra ID**

This integration requires an App registration in the Azure portal. Follow the steps in this section to create a new application in Microsoft Entra ID:
1. Sign in to the [Azure portal](https://portal.azure.com/).
2. Search for and select **Microsoft Entra ID**.
3. Under **Manage**, select **App registrations > New registration**.
4. Enter a display **Name** for your application (e.g. RelevanceSystemAlertsSentinelConnector).
5. Select **Register** to complete the initial app registration.
6. When registration finishes, the Azure portal displays the app registration's Overview pane. Copy the **Application (client) ID** and **Directory (Tenant) ID** — these are required as configuration parameters.

> **Reference link:** [https://learn.microsoft.com/azure/active-directory/develop/quickstart-register-app](https://learn.microsoft.com/azure/active-directory/develop/quickstart-register-app)

**STEP 3 - Add a client secret for the application in Microsoft Entra ID**

Sometimes called an application password, a client secret is a string value required for the connector. Follow the steps in this section to create a new Client Secret:
1. In the Azure portal, in **App registrations**, select your application.
2. Select **Certificates & secrets > Client secrets > New client secret**.
3. Add a description for your client secret.
4. Select an expiration for the secret or specify a custom lifetime. Limit is 24 months.
5. Select **Add**.
6. *Record the secret's value for use as the AzureClientSecret parameter. This secret value is never displayed again after you leave this page.*

> **Reference link:** [https://learn.microsoft.com/azure/active-directory/develop/quickstart-register-app#add-a-client-secret](https://learn.microsoft.com/azure/active-directory/develop/quickstart-register-app#add-a-client-secret)

**STEP 4 - Get the Object ID of your application in Microsoft Entra ID**

After creating your app registration, follow the steps in this section to get the Object ID:
1. Go to **Microsoft Entra ID**.
2. Select **Enterprise applications** from the left menu.
3. Find your newly created application in the list (search by the name you provided).
4. Click on the application.
5. On the overview page, copy the **Object ID**. This is the **AzureEntraObjectID** needed for the ARM template role assignment.

**STEP 5 - Deploy the connector and the associated Azure Function App**

**6. Azure Resource Manager (ARM) Template**

Use this method for automated deployment of the GTI Relevance System Alerts connector using an ARM Template.

1. Click the **Deploy to Azure** button below. 

	[![Deploy To Azure](https://aka.ms/deploytoazurebutton)](https://aka.ms/sentinel-GTIRelevanceSystemAlerts-azuredeploy) [![Deploy to Azure Gov](https://aka.ms/deploytoazuregovbutton)](https://aka.ms/sentinel-GTIRelevanceSystemAlerts-azuredeploy-gov)
2. Select the preferred **Subscription**, **Resource Group**, and **Location**. 
3. Enter the below information: 

	 a. **FunctionName** - Enter a unique name for the Azure Function App (maximum 11 characters). Example: `GTIRSAlerts`

	 b. **Location** - Azure region for the Function App and supporting resources. Defaults to the resource group location. Example: `eastus`

	 c. **WorkspaceName** - Enter the Microsoft Sentinel Log Analytics workspace name. Example: `MyWorkspace`

	 d. **AppInsightsWorkspaceResourceID** - Enter the fully qualified resource ID of the Log Analytics workspace for Application Insights. Format: `/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}`

	 e. **AzureTenantID** - Enter the Azure Tenant (Directory) ID obtained in STEP 2. Example: `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`

	 f. **AzureClientID** - Enter the Application (Client) ID obtained in STEP 2. Example: `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`

	 g. **AzureClientSecret** - Enter the client secret value obtained in STEP 3.

	 h. **AzureEntraObjectID** - Enter the Object ID of your Microsoft Entra app obtained in STEP 4. Example: `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`

	 i. **GTIProjectId** - Enter the Google Threat Intelligence project ID obtained in STEP 1. Example: `my-gti-project-id`. See the [GTI documentation](https://docs.cloud.google.com/threat-intelligence/guides/get-started) to learn how to get started.

	 j. **GTIApiKey** - Enter the Google Threat Intelligence API key obtained in STEP 1.

	 k. **GTIRelevanceSystemAlertsTableName** - Enter the name of the custom table for GTI Relevance System Alerts. The `_CL` suffix is appended automatically. **Maximum 52 characters** (the `_CL` suffix counts toward the Log Analytics 57-character table name limit). Default: `RelevanceSystemAlerts`

	 l. **StartDate** - (Optional) Enter the start datetime in `yyyy-mm-ddTHH:MM:SS[.fff]Z` format. Example: `2026-05-20T15:43:51Z`. Must be a past date. If not provided, data from the last 7 days will be fetched.

	 m. **GTIFilterExpression** - (Optional) Enter a GTI API filter expression to narrow which alerts are ingested. Example: `state = "NEW"`. Any `audit.update_time` condition will be automatically removed — the connector manages that filter internally. Your expression is combined with the checkpoint filter using `AND`.

	 n. **Schedule** - Enter a valid Quartz Cron expression for the timer trigger schedule. Default: `0 */10 * * * *` (every 10 minutes).

	 o. **LogLevel** - Set the log level for the Function App. Allowed values: `Debug`, `Info`, `Warning`, `Error`. Default: `Info`.

	 p. **KeyVaultName** - Enter name of keyvault where tokens will be stored.

4. Mark the checkbox labeled **I agree to the terms and conditions stated above**. 
5. Click **Purchase** to deploy.

**STEP 6 - Create a Keyvault**

 Follow these instructions to create a new Keyvault.
 1. In the Azure portal, Go to **Key vaults** and click on Create.
 2. Select Subscription, Resource Group and provide unique name of keyvault.

**STEP 7 - Create Access Policy in Keyvault**

 Follow these instructions to create access policy in Keyvault.
 1. Go to keyvaults, select your keyvault, go to Access policies on left side panel, click on create.
 2. Select all keys & secrets permissions. Click next.
 3. In the principal section, search for the function app name which was deployed in STEP - 5. Click next.

 **Note:** Ensure the Permission model in the Access Configuration of Key Vault is set to **'Vault access policy'**

**STEP 8 - Verify Data Ingestion**

After deployment, verify that data is being ingested into Microsoft Sentinel:
1. Navigate to **Microsoft Sentinel** → **Logs**.
2. Run the following query:

```kql
RelevanceSystemAlerts_CL
| sort by TimeGenerated desc
| limit 10
```

3. Data should appear within **5–10 minutes** of the first function execution.
4. The connector status on the **Data connectors** page shows **Connected** once data has been received within the last 30 days.

**Troubleshooting**

**Connector shows Disconnected**
- Verify the Function App is running: Azure Portal → Function App → Overview → Status should be **Running**.
- Confirm data has been ingested within the last 30 days.
- Review Application Insights logs for errors.

**Authentication errors (401 / 403)**
- Verify **AzureClientID**, **AzureClientSecret**, and **AzureTenantID** are correct in Function App → Configuration → Application settings.
- Ensure the client secret has not expired.
- Confirm the App Registration has sufficient permissions.

**No data in RelevanceSystemAlerts_CL table**
- Check Function App → Functions → RelevanceSystemAlerts → Monitor for execution errors.
- Verify the GTI API key and project ID are valid.
- Confirm the source API is reachable from Azure.
- Review Application Insights traces:

```kql
traces
| where timestamp > ago(1h)
| order by timestamp desc
| take 50
```

**Rate limit errors (429)**
- The connector automatically retries with exponential backoff. If errors persist, reduce the polling frequency by increasing the **Schedule** cron interval.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

