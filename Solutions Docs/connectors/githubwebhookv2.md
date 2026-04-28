# GitHub (using Webhooks) V2

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/GitHub.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `GitHubWebhookV2` |
| **Publisher** | Microsoft |
| **Used in Solutions** | [GitHub](../solutions/github.md) |
| **Collection Method** | [Azure Function](../methods/azure-function.md) |
| **Connector Definition Files** | [GithubWebhookV2_API_FunctionApp.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/GitHub/Data%20Connectors/GithubWebhookV2/GithubWebhookV2_API_FunctionApp.json) |
| **Ingestion API** | [Undetermined](../methods/undetermined.md) — *Azure Function code contains both Log Ingestion API and HTTP Data Collector API patterns* |
| **Custom Log V1 Tables** | Yes 🔶 — ingests into tables with type-suffixed columns |

The [GitHub](https://www.github.com) webhook data connector (V2) provides the capability to ingest GitHub subscribed events into Microsoft Sentinel using [GitHub webhook events](https://docs.github.com/en/developers/webhooks-and-events/webhooks/webhook-events-and-payloads). This connector uses the Azure Monitor **Logs Ingestion API (CLv2)** with **Managed Identity** authentication and is the designated successor to the original GitHub (using Webhooks) connector, which uses the CLv1 HTTP Data Collector API (ODS endpoint) that Microsoft is replacing with CLv2.



Events are written to the `GitHubAdvancedSecurityAlerts_CL` table. The `githubscanaudit` parser function provides a unified view across both the legacy `githubscanaudit_CL` table and the new `GitHubAdvancedSecurityAlerts_CL` table, so all existing workbooks, analytic rules, and hunting queries continue to work without modification.



> **Note:** If you are currently using the original GitHub (using Webhooks) connector, both connectors can run side-by-side. To avoid duplicate data ingestion, stop the original V1 Function App once you have confirmed V2 is working correctly. See the migration instructions at the bottom of this connector page.



> **Note:** If you intend to ingest GitHub Audit logs, refer to the GitHub Enterprise Audit Log Connector from the "**Data Connectors**" gallery.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`GitHubAdvancedSecurityAlerts_CL`](../tables/githubadvancedsecurityalerts-cl.md) 🔶 | ? | ✓ | ? |
| [`githubscanaudit_CL`](../tables/githubscanaudit-cl.md) | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): read and write permissions on the workspace are required.
- **Keys** (Workspace): read permissions to shared keys for the workspace are required. [See the documentation to learn more about workspace keys](https://docs.microsoft.com/azure/azure-monitor/platform/agent-windows#obtain-workspace-id-and-key).

**Custom Permissions:**
- **Microsoft.Web/sites permissions**: Read and write permissions to Azure Functions to create a Function App is required. [See the documentation to learn more about Azure Functions](https://docs.microsoft.com/azure/azure-functions/).
- **Microsoft.Authorization/roleAssignments permissions**: Permissions to create role assignments are required at the resource group scope. This is needed to grant the Function App's Managed Identity the **Monitoring Metrics Publisher** role on the Data Collection Rule.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

>**NOTE:** This connector is built on an HTTP trigger based Azure Function using the **Logs Ingestion API (CLv2)** with **Managed Identity** authentication. There is no need to configure a Workspace Key — authentication is handled automatically by the Function App's system-assigned managed identity. This might result in additional data ingestion costs. Check the [Azure Functions pricing page](https://azure.microsoft.com/pricing/details/functions/) for details.

>**(Optional Step)** Securely store the GitHub Webhook Secret in Azure Key Vault. [Follow these instructions](https://docs.microsoft.com/azure/app-service/app-service-key-vault-references) to use Azure Key Vault with an Azure Function App.

**Choose ONE from the following two deployment options to deploy the connector and the associated Azure Function**

>**IMPORTANT:** Before deploying the Github Webhook V2 connector, have the **Log Analytics Workspace Name** ready. The connector resources (Function App, DCE, DCR, table) must be deployed to the **same resource group** as the Log Analytics workspace.
- **Workspace Name**: `WorkspaceName`
  > *Note: The value above is dynamically provided when these instructions are presented within Microsoft Sentinel.*

**Option 1 - Azure Resource Manager (ARM) Template**

  Use this method for automated deployment of the GitHub V2 data connector using an ARM Template.

1. Click the **Deploy to Azure** button below.

	[![Deploy To Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FGitHub%2FData%2520Connectors%2FGithubWebhookV2%2Fazuredeploy_GithubWebhookV2_API_FunctionApp.json)
2. Select the **Subscription** and **Resource Group** — deploy to the **same resource group** as your Log Analytics workspace.
> **NOTE:** You can't mix Windows and Linux apps in the same region and resource group.
3. Enter the **WorkspaceName** — the name of your Log Analytics workspace (not the full resource ID).
4. Optionally enter a **GithubWebhookSecret** to enable payload signature validation.
5. Mark the checkbox labeled **I agree to the terms and conditions stated above**.
6. Click **Purchase** to deploy.

  **Option 2 - Manual Deployment of Azure Functions**

  Use the following step-by-step instructions to deploy the GitHub V2 webhook data connector manually with Azure Functions.
**Step 1 - Deploy a Function App**

    1. Download the [Azure Function App](https://aka.ms/sentinel-GitHubWebhookAPIV2-functionapp) file. Extract archive to your local development computer.
2. Follow the [function app manual deployment instructions](https://github.com/Azure/Azure-Sentinel/blob/master/DataConnectors/AzureFunctionsManualDeployment.md#function-app-manual-deployment-instructions) to deploy the Azure Functions app using VSCode.
3. After successful deployment of the function app, follow next steps for configuring it.

    **Step 2 - Configure the Function App**

    1. Go to Azure Portal for the Function App configuration.
2. In the Function App, select the Function App Name and select **Configuration**.
3. In the **Application settings** tab, select **New application setting**.
4. Add each of the following application settings individually, with their respective string values (case-sensitive):
		DCE_ENDPOINT - The logs ingestion endpoint of your Data Collection Endpoint
		DCR_RULE_ID - The immutableId of your Data Collection Rule
		DCR_STREAM_NAME - Custom-GitHubAdvancedSecurityAlerts_CL
		GithubWebhookSecret (optional) - Your GitHub webhook secret for payload validation
5. Once all application settings have been entered, click **Save**.
6. Ensure the Function App has a **System Assigned Managed Identity** enabled.
7. Grant the Managed Identity the **Monitoring Metrics Publisher** role on your Data Collection Rule.

**Post Deployment steps**

**STEP 1 - To get the Azure Function url**

  1. Go to Azure function Overview page and Click on "Functions" in the left blade.
 2. Click on the function called "GithubWebhookConnectorV2".
 3. Go to "GetFunctionurl" and copy the function url.

  **STEP 2 - Configure Webhook to Github Organization**

  1. Go to [GitHub](https://www.github.com) and open your account and click on "Your Organizations."
 2. Click on Settings.
 3. Click on "Webhooks" and enter the function app url which was copied from above STEP 1 under payload URL textbox.
 4. Choose content type as "application/json".
 5. Subscribe for events and Click on "Add Webhook"

*Now we are done with the GitHub Webhook V2 configuration. Once GitHub events are triggered, after the delay of 5 to 10 mins, you should be able to see all the transactional events from GitHub in the LogAnalytics workspace table called `GitHubAdvancedSecurityAlerts_CL`. Use the `githubscanaudit()` parser function for a unified view that includes data from both the legacy `githubscanaudit_CL` and new `GitHubAdvancedSecurityAlerts_CL` tables.*

**4. ⚠️ IMPORTANT: Migrating from GitHub Webhook V1 to V2**

If you are currently using the original **GitHub (using Webhooks)** connector (`githubscanaudit_CL` table), follow these steps to migrate to V2 without disrupting existing data or breaking workbooks and analytic rules.

**Before you begin:** Both connectors can run side-by-side. V1 data lands in `githubscanaudit_CL` and V2 data lands in `GitHubAdvancedSecurityAlerts_CL`. The `githubscanaudit()` parser function unions both tables so all workbooks, analytic rules, and hunting queries continue to work unchanged during and after migration.

**Migration Steps:**

1. **Deploy V2 alongside V1.** Complete all steps above to deploy the GitHub Webhook V2 Function App. Do not remove V1 yet.

2. **Verify V2 is receiving events.** Update the GitHub webhook payload URL in your GitHub Organization settings (**Settings → Webhooks**) to point to the new V2 Function App URL. Trigger some GitHub events and confirm data appears in `GitHubAdvancedSecurityAlerts_CL` within 5–10 minutes.

3. **Validate the unified parser.** Run `githubscanaudit() | sort by TimeGenerated desc | take 50` in Log Analytics to confirm both V1 and V2 data appears under the same schema.

4. **Disable the V1 Function App.** Once V2 is confirmed working, stop the original V1 Function App to prevent duplicate event ingestion:
   - In the Azure Portal, navigate to your original GitHub Webhook V1 Function App.
   - Under **Overview**, click **Stop** to halt execution.
   - Optionally, update the GitHub webhook payload URL to point exclusively to the V2 endpoint.

5. **Retain V1 data.** The `githubscanaudit_CL` table data is subject to your Log Analytics workspace retention policy. No action is required — historical V1 data continues to be queryable via `githubscanaudit()` until it ages out per your retention settings.

> **⚠️ Warning:** Do **not** delete the V1 Function App resources until you have verified V2 is fully operational and you no longer need to roll back. Running both simultaneously does **not** cause duplicate ingestion as long as only one webhook URL is active in GitHub at a time.

## Additional Documentation

> 📄 *Source: [GitHub\Data Connectors\GithubWebhookV2\README.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/GitHub\Data Connectors\GithubWebhookV2\README.md)*

# GitHub Webhook V2 Data Connector

> ⚠️ **IMPORTANT: Migrate to V2**
>
> The original GitHub Webhook connector (`GithubWebhook`) uses the **Azure Monitor HTTP Data Collector API (CLv1 / ODS endpoint)**. Microsoft is replacing this API with the **Logs Ingestion API (CLv2)**. V2 of this connector is the strategic replacement and should be used for all new deployments. Existing V1 deployments should be migrated to V2.
>
> See the [Migrating from V1](#migrating-from-v1) section below for step-by-step instructions.

## Overview

This connector is the designated successor to the original [GitHub Webhook connector](../GithubWebhook/) and ingests [GitHub webhook events](https://docs.github.com/en/developers/webhooks-and-events/webhooks/webhook-events-and-payloads) into Microsoft Sentinel using the **Logs Ingestion API (CLv2)** with **Managed Identity** authentication. It replaces the CLv1 HTTP Data Collector API (ODS endpoint) used by the original connector.

As of now the solution supports the following GitHub Advanced Security events:
- [Code Scanning Alert](https://docs.github.com/en/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#code_scanning_alert)
- [Repository Vulnerability Alert (Dependabot)](https://docs.github.com/en/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#repository_vulnerability_alert)
- [Secret Scanning Alert](https://docs.github.com/en/enterprise-cloud@latest/developers/webhooks-and-events/webhooks/webhook-events-and-payloads#secret_scanning_alert)

| | V1 (original) | V2 (this connector) |
|---|---|---|
| **API** | HTTP Data Collector API (ODS) — being replaced by CLv2 | Logs Ingestion API (CLv2/GIG) |
| **Auth** | SharedKey (`WorkspaceID` + `WorkspaceKey`) | Managed Identity (`DefaultAzureCredential`) |
| **Table** | `githubscanaudit_CL` | `GitHubAdvancedSecurityAlerts_CL` |
| **Column names** | Auto-generated `_s` / `_d` / `_b` suffixes | Explicit schema, identical `_s` / `_d` / `_b` names |
| **Unified view** | `githubscanaudit_CL` only | `githubscanaudit()` parser (unions both tables) |
| **Recommendation** | Migrate to V2 | ✅ Recommended for all deployments |

## Architecture

```
GitHub Org Webhook
        │  POST (HMAC-SHA256 signed)
        ▼
Azure Function App (HTTP trigger)
  ├── GithubWebhookConnectorV2/__init__.py
  │     ├── Verify x-hub-signature-256 (HMAC-SHA256)
  │     ├── customizeJson() — flatten nested JSON to _s strings
  │     └── LogsIngestionClient.upload() → DCE → DCR
  │
  ├── System-assigned Managed Identity
  │     └── Monitoring Metrics Publisher role on DCR
  │
  └── App Settings
        ├── DCE_ENDPOINT
        ├── DCR_RULE_ID
        ├── DCR_STREAM_NAME  (Custom-GitHubAdvancedSecurityAlerts_CL)
        └── GithubWebhookSecret  (optional, for HMAC validation)

DCR → Log Analytics Workspace → GitHubAdvancedSecurityAlerts_CL table
```

## Prerequisites

- Microsoft Sentinel workspace
- Permissions to create Azure Function Apps, role assignments, and DCE/DCR resources
- A GitHub Organization with Webhook configuration access

> **Best practice:** Create a new Resource Group for this connector — all provisioned resources (Function App, Storage Account, DCE, DCR, App Insights) will reside there.

## Deployment

### Option 1 — ARM Template (Recommended)

[![Deploy To Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FGitHub%2FData%2520Connectors%2FGithubWebhookV2%2Fazuredeploy_GithubWebhookV2_API_FunctionApp.json)

**Required parameters:**

| Parameter | Description |
|---|---|
| `FunctionName` | Name for the new Function App (default: `fngithubwebhookv2`) |
| `WorkspaceName` | The **name** of your Log Analytics workspace (e.g. `my-sentinel-workspace`). Deploy to the **same resource group** as the workspace. |
| `GithubWebhookSecret` | *(Optional)* Secret string used to validate the `x-hub-signature-256` header sent by GitHub |

The template automatically provisions:
- Storage Account, App Service Plan, Function App (with SystemAssigned identity)
- Application Insights
- Custom Log table `GitHubAdvancedSecurityAlerts_CL`
- Data Collection Endpoint (DCE)
- Data Collection Rule (DCR) with `transformKql: "source"` passthrough
- Role assignment granting the Function App's Managed Identity the **Monitoring Metrics Publisher** role on the DCR

### Option 2 — Manual Deployment

1. Deploy the Function App manually following the [Azure Functions manual deployment instructions](https://github.com/Azure/Azure-Sentinel/blob/master/DataConnectors/AzureFunctionsManualDeployment.md).
2. Create the `GitHubAdvancedSecurityAlerts_CL` table with the schema defined in the ARM template.
3. Create a DCE and DCR pointing to `GitHubAdvancedSecurityAlerts_CL`.
4. Enable **System Assigned Managed Identity** on the Function App.
5. Grant the Managed Identity the **Monitoring Metrics Publisher** role on the DCR.
6. Set the following Application Settings:

| Setting | Value |
|---|---|
| `DCE_ENDPOINT` | Logs ingestion endpoint URL from your DCE |
| `DCR_RULE_ID` | `immutableId` of your DCR |
| `DCR_STREAM_NAME` | `Custom-GitHubAdvancedSecurityAlerts_CL` |
| `GithubWebhookSecret` | *(Optional)* Your GitHub webhook secret |

## Post-Deployment Steps

### Get the Function App Endpoint

1. In the Azure Portal, go to your Function App → **Overview** → **Functions** → click **GithubWebhookConnectorV2**.

   ![Go to Function](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/GitHub%5CData%20Connectors%5CGithubWebhookV2/../GithubWebhook/Images/GotoFunction.jpg)

2. Click **Get Function URL** (highlighted below) and copy the URL.

   ![Function App Complete URL](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/GitHub%5CData%20Connectors%5CGithubWebhookV2/../GithubWebhook/Images/functionappcompleteurl.jpg)

3. *(Optional)* Generate a new function key and substitute it into the URL as the `code` query parameter.  
   Example: `https://fngithubwebhookv2.azurewebsites.net/api/GithubWebhookConnectorV2?code={apikey}`

   ![Function App Key](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/GitHub%5CData%20Connectors%5CGithubWebhookV2/../GithubWebhook/Images/FunctionAppfunctionKey.jpg)

### Configure Webhook on GitHub Organization

1. Go to GitHub → click your avatar → **Your Organizations**.

   ![GitHub Step 1](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/GitHub%5CData%20Connectors%5CGithubWebhookV2/../GithubWebhook/Images/Githubstep1.JPG)

2. Open the Organization → click **Settings**.

   ![GitHub Step 2](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/GitHub%5CData%20Connectors%5CGithubWebhookV2/../GithubWebhook/Images/GithubStep2.jpg)

3. Click **Webhooks** → **Add webhook** and fill in the form:
   - **Payload URL**: paste the Function App URL from above
   - **Content type**: `application/json`
   - **Secret**: enter your `GithubWebhookSecret` value (if set)
   - **Events**: select **Let me select individual events** and enable:
     - ✅ Code scanning alerts
     - ✅ Repository vulnerability alerts (Dependabot)
     - ✅ Secret scanning alerts

   ![GitHub Step 3](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/GitHub%5CData%20Connectors%5CGithubWebhookV2/../GithubWebhook/Images/GithubStep3.jpg)

4. Click **Add webhook**. GitHub will send a ping event — the Function App should return HTTP 200.

### Verify Data in Log Analytics

After 5–10 minutes (Log Analytics needs time to spin up resources on first ingest), events will appear in the `GitHubAdvancedSecurityAlerts_CL` table:

![Log Analytics Data](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/GitHub%5CData%20Connectors%5CGithubWebhookV2/../GithubWebhook/Images/LogAnalyticsdata.jpg)

> **Tip for testing secret scanning:** GitHub's built-in secret patterns require real credential formats. To reliably trigger a `secret_scanning_alert` webhook during testing, create a **custom secret scanning pattern** in your Organization settings using the pattern `TEST_SECRET_[A-Z0-9]{32}` and commit a matching string such as `TEST_SECRET_ABCD1234EFGH5678IJKL9012MNOP3456` to a repository.

## Querying Data

| Query | Description |
|---|---|
| `GitHubAdvancedSecurityAlerts_CL \| sort by TimeGenerated desc` | All V2 events |
| `githubscanaudit() \| sort by TimeGenerated desc` | Unified view (V1 + V2, all historical data) |
| `GitHubCodeScanningData()` | Code scanning alerts (uses `githubscanaudit()` — works with both tables) |
| `GitHubDependabotData()` | Dependabot vulnerability alerts |
| `GitHubSecretScanningData()` | Secret scanning alerts |

## Migrating from V1

> ⚠️ **Microsoft is replacing the CLv1 HTTP Data Collector API (used by the original GitHub Webhook connector) with the Logs Ingestion API (CLv2). V2 is the recommended replacement. Migrate existing V1 deployments to V2 to remain on a supported ingestion path.**

Because both tables share identical column names (`_s` / `_d` / `_b` suffixes), all existing workbooks, analytic rules, hunting queries, and parsers (`GitHubCodeScanningData`, `GitHubDependabotData`, `GitHubSecretScanningData`) continue to work without modification via the `githubscanaudit()` union parser.

**Migration Steps:**

1. **Deploy V2.** Complete all deployment steps above.

2. **Update the GitHub webhook URL.** In your GitHub Organization (**Settings → Webhooks**), update the payload URL to point to the new V2 Function App URL. This immediately redirects new events to V2.

3. **Verify V2 is receiving events.** Trigger some GitHub events and confirm data appears in `GitHubAdvancedSecurityAlerts_CL` within 5–10 minutes.

4. **Validate the unified parser.** Run the following in Log Analytics to confirm events appear:
   ```kql
   githubscanaudit()
   | sort by TimeGenerated desc
   | take 50
   ```

5. **Stop the V1 Function App.** Once V2 is confirmed working:
   - In the Azure Portal, navigate to your original V1 Function App.
   - Under **Overview**, click **Stop**.
   - This prevents any residual processing while freeing up Function App compute costs.

6. **Retain V1 historical data.** The `githubscanaudit_CL` table data is subject to your workspace retention policy. No action is required — historical V1 data remains queryable via `githubscanaudit()` until it ages out.

> **Note:** Do not delete V1 Function App resources until you are satisfied V2 is fully operational and you do not need to roll back.

## File Structure

```
GithubWebhookV2/
├── GithubWebhookConnectorV2/
│   ├── __init__.py          # Azure Function — CLv2 ingestion logic
│   └── function.json        # HTTP trigger binding
├── azuredeploy_GithubWebhookV2_API_FunctionApp.json  # ARM template
├── GithubWebhookV2_API_FunctionApp.json              # Connector definition
├── GithubWebhookV2.zip                               # Pre-built Linux deployment package
├── host.json                # Function host settings (retry, timeout)
├── requirements.txt         # Python dependencies
└── README.md                # This file
```

## Related Resources

- [Original V1 connector](../GithubWebhook/)
- [`githubscanaudit` union parser](../../Parsers/GitHubScanAudit.yaml)
- [Azure Monitor HTTP Data Collector API deprecation](https://aka.ms/Sentinel-Logs_migration)
- [Logs Ingestion API overview](https://docs.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview)
- [Azure Monitor Ingestion client library for Python](https://docs.microsoft.com/python/api/overview/azure/monitor-ingestion-readme)

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

