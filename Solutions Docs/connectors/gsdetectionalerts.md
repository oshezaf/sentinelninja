# ⚠️ Google SecOps Detection Alerts

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace or not installed in Content Hub.

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/GoogleSecOps.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `GSDetectionAlerts` |
| **Publisher** | Google |
| **Used in Solutions** | [GoogleSecOps](../solutions/googlesecops.md) |
| **Collection Method** | [Azure Function](../methods/azure-function.md) |
| **Connector Definition Files** | [GoogleSecOpsDetectionAlerts_API_FunctionApp.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/GoogleSecOps/Data%20Connectors/GoogleSecOpsDetectionAlerts/GoogleSecOpsDetectionAlerts_API_FunctionApp.json) |
| **Ingestion API** | [Log Ingestion API](../methods/log-ingestion-api.md) — *Sibling ARM template declares DCR / Log Ingestion API resources* |

The [Google SecOps](https://cloud.google.com/security/products/security-operations) (formerly Chronicle) data connector provides the capability to ingest detection alerts from Google SecOps into Microsoft Sentinel using the [legacyStreamDetectionAlerts](https://cloud.google.com/chronicle/docs/reference/rest/v1alpha/projects.locations.instances.legacy/legacyStreamDetectionAlerts) API. Refer to [API documentation](https://cloud.google.com/chronicle/docs/reference/rest) for more information. The connector provides the ability to get detection alert data which helps to examine potential security threats, investigate rule-based detections, and respond to incidents identified by Google SecOps.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`DetectionAlerts_CL`](../tables/detectionalerts-cl.md) | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): read and write permissions on the workspace are required.
- **Keys** (Workspace): read permissions to shared keys for the workspace are required. [See the documentation to learn more about workspace keys](https://docs.microsoft.com/azure/azure-monitor/platform/agent-windows#obtain-workspace-id-and-key).

**Custom Permissions:**
- **Microsoft.Web/sites permissions**: Read and write permissions to Azure Functions to create a Function App is required. [See the documentation to learn more about Azure Functions](https://docs.microsoft.com/azure/azure-functions/).
- **Microsoft.Insights/dataCollectionRules permissions**: Write permissions to Data Collection Rules are required.
- **Microsoft.Insights/dataCollectionEndpoints permissions**: Write permissions to Data Collection Endpoints are required.
- **Microsoft.Storage/storageAccounts permissions**: Read and write permissions to Azure Storage Account for File Share operations are required.
- **Microsoft Entra ID App Registration**: An app registration with API permissions for Azure Monitor Ingestion is required for posting data to Sentinel.
- **Google Cloud Service Account**: A Google Cloud service account with SecOps API access is required. The service account JSON key must be provided during deployment. [See the documentation to learn more about Google SecOps API access](https://cloud.google.com/chronicle/docs/reference/rest).

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

>**NOTE:** This connector uses two Azure Functions to connect to the Google SecOps API:
- **GoogleSecOpsToStorage**: Polls the Google SecOps API on a configurable schedule and saves raw detection batches to Azure File Share.
- **AzureStorageToSentinel**: Monitors the file share and ingests saved detections into Microsoft Sentinel via the Logs Ingestion API (DCR).

>**NOTE:** This connector uses Azure Functions and Azure Storage, which may result in additional data ingestion and operational costs. Check the [Azure Functions pricing page](https://azure.microsoft.com/pricing/details/functions/) and [Azure Storage pricing page](https://azure.microsoft.com/pricing/details/storage/blobs/) for details.

**STEP 1 - Configuration steps for Google SecOps Service Account**

1. Sign in to the [Google Cloud Console](https://console.cloud.google.com/) and select the **project** associated with your Google SecOps instance.
2. From the project selector at the top, note the **Project ID** — this is the **GoogleSecopsProjectId** parameter.
3. Navigate to **IAM & Admin > Service Accounts** and click **Create Service Account**.
4. Enter a name (e.g., `secops-sentinel-sa`) and click **Create and Continue**.
5. Assign a role that includes the permission: `chronicle.legacies.legacyStreamDetectionAlerts`.
6. Click **Done**, then click the newly created service account from the list.
7. Go to the **Keys** tab, click **Add Key > Create new key**, select **JSON**, and click **Create**. Save the downloaded file.
8. The full text content of the downloaded JSON file is the **GoogleSecopsServiceAccountJson** parameter.

> To find **GoogleSecopsRegion** and **GoogleSecopsInstanceId**: sign in to the [Google SecOps console](https://chronicle.security), go to **Settings > SIEM Settings**, and note the **Region** and **Instance ID** values displayed there.

**STEP 2 - App Registration steps for the Application in Microsoft Entra ID**

This integration requires an App registration in the Azure portal. Follow the steps below to create a new application in Microsoft Entra ID:
1. Sign in to the [Azure portal](https://portal.azure.com/).
2. Search for and select **Microsoft Entra ID**.
3. Under **Manage**, select **App registrations > New registration**.
4. Enter a display **Name** for your application (e.g., `gcs-detection-alerts-app`).
5. Select **Register** to complete the initial app registration.
6. When registration finishes, the Azure portal displays the app registration's **Overview** pane. Note the **Application (client) ID** — this is the **AzureClientId** parameter. Note the **Directory (tenant) ID** — this is the **TenantId** parameter.

> **Reference link:** [https://learn.microsoft.com/azure/active-directory/develop/quickstart-register-app](https://learn.microsoft.com/azure/active-directory/develop/quickstart-register-app)

**STEP 3 - Add a client secret for the application in Microsoft Entra ID**

Sometimes called an application password, a client secret is a string value required by this data connector. Follow the steps below to create a new Client Secret:
1. In the Azure portal, in **App registrations**, select your application.
2. Select **Certificates & secrets > Client secrets > New client secret**.
3. Add a description for your client secret.
4. Select an expiration for the secret or specify a custom lifetime. Limit is 24 months.
5. Select **Add**.
6. *Record the secret's **Value** for use as the **AzureClientSecret** parameter. This secret value is never displayed again after you leave this page.*

> **Reference link:** [https://learn.microsoft.com/azure/active-directory/develop/quickstart-register-app#add-a-client-secret](https://learn.microsoft.com/azure/active-directory/develop/quickstart-register-app#add-a-client-secret)

**STEP 4 - Get Object ID of your application in Microsoft Entra ID**

After creating your app registration, follow the steps below to get the Object ID required for the DCR role assignment:
1. Go to **Microsoft Entra ID**.
2. Select **Enterprise applications** from the left menu.
3. Search for and click your newly created application.
4. On the **Overview** page, copy the **Object ID** — this is the **AzureEntraObjectID** parameter.

**STEP 5 - Get Log Analytics Workspace details**

1. In the Azure portal, navigate to your **Log Analytics workspace**.
2. On the **Overview** page, copy the **Name** of the workspace — this is the **WorkspaceName** parameter.
3. From the left menu, go to **Settings > Properties**.
4. Copy the **Resource ID** value — this is the **AppInsightsWorkspaceResourceID** parameter. It follows the format:
   `/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.OperationalInsights/workspaces/{workspaceName}`

**6. Azure Resource Manager (ARM) Template**

Use this method for automated deployment of the Google SecOps Detection Alerts connector.

1. Click the **Deploy to Azure** button below.

	[![Deploy To Azure](https://aka.ms/deploytoazurebutton)](https://aka.ms/sentinel-GoogleSecOpsDetectionAlerts-azuredeploy) [![Deploy to Azure Gov](https://aka.ms/deploytoazuregovbutton)](https://aka.ms/sentinel-GoogleSecOpsDetectionAlerts-azuredeploy-gov)

2. Select the preferred **Subscription**, **Resource Group**, and **Location**.

3. Enter the below information in the deployment form:

	 a. **DetectionAlertsTableName** - Custom Log Analytics table name to store detection alerts. Default: `DetectionAlerts`. (_Note: `_CL` suffix is appended automatically._)

	 b. **GoogleSecopsProjectId** - Google Cloud project ID hosting the Google SecOps instance. Obtained in Step 1.

	 c. **GoogleSecopsRegion** - Google SecOps instance region. Select from the dropdown list of supported regions. Obtained in Step 1.

	 d. **GoogleSecopsInstanceId** - Google SecOps instance ID. Obtained in Step 1.

	 e. **GoogleSecopsServiceAccountJson** - Full JSON content of the downloaded Google Cloud service account key file. Obtained in Step 1.

	 f. **GoogleOAuthScope** - Google OAuth scope for service account authentication. Default: `https://www.googleapis.com/auth/cloud-platform`. Keep the default unless your organization requires a different scope.

	 g. **FunctionName** - Prefix for the Azure Function App name (1-11 characters). Default: `GSDAlerts`.

	 h. **LookbackDays** - Number of days to look back for the initial data pull (range: 1-7, default: 1). Subsequent runs automatically resume from the saved checkpoint.

	 i. **FetchSchedule** - CRON expression controlling how often the connector polls the Google SecOps API. Default: `0 */10 * * * *` (every 10 minutes).

	 j. **IngestSchedule** - CRON expression controlling how often saved detections are ingested into Sentinel. Default: `0 2/10 * * * *` (every 10 minutes, offset by 2 minutes).

	 k. **LogLevel** - Application log verbosity. Allowed values: `DEBUG`, `INFO`, `WARNING`, `ERROR`. Default: `INFO`.

	 l. **TenantId** - Directory (tenant) ID of your Microsoft Entra ID. Obtained in Step 2.

	 m. **AzureClientId** - Application (client) ID of the registered app. Obtained in Step 2.

	 n. **AzureClientSecret** - Client secret value of the registered app. Obtained in Step 3.

	 o. **AzureEntraObjectID** - Object ID of the registered app from Enterprise Applications. Obtained in Step 4.

	 p. **WorkspaceName** - Name of your Log Analytics workspace. Obtained in Step 5.

	 q. **AppInsightsWorkspaceResourceID** - Full resource ID of your Log Analytics workspace. Obtained in Step 5.

	 r. **Location** - Azure region for deploying data collection rules and endpoints. Defaults to the resource group location.

4. Mark the checkbox labeled **I agree to the terms and conditions stated above**.

5. Click **Review + Create** and then **Create** to deploy.

**STEP 7 - Verify Data Ingestion**

1. After deployment completes (10-20 minutes), navigate to your Log Analytics workspace.
2. Run the following query to verify data is arriving:

	```kusto
	DetectionAlerts_CL
	| where TimeGenerated > ago(1h)
	| summarize Count=count()
	```

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

