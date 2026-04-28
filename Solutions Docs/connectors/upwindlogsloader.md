# ⚠️ Upwind Logs Loader (Ingestion API)

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace or not installed in Content Hub.

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Solutions/Upwind/Data%20Connectors/Logos/upwind.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `UpwindLogsLoader` |
| **Publisher** | Upwind |
| **Used in Solutions** | [Upwind](../solutions/upwind.md) |
| **Collection Method** | [Azure Function](../methods/azure-function.md) |
| **Connector Definition Files** | [UpwindLogsLoader_API_FunctionApp.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Upwind/Data%20Connectors/UpwindLogsLoader_API_FunctionApp.json) |
| **Ingestion API** | [Log Ingestion API](../methods/log-ingestion-api.md) — *Azure Function code uses LogsIngestionClient/Log Ingestion API* |

The **Upwind Logs Loader** data connector ingests compute platform assets from the [Upwind](https://upwind.io) cloud security platform into a Microsoft Sentinel custom table using an Azure Function and the [Azure Monitor Ingestion API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview) (DCE/DCR).



Upwind provides runtime-powered cloud security, correlating cloud posture with live workload context. This connector surfaces your Upwind inventory — compute platform assets across AWS, GCP, and Azure — directly into Microsoft Sentinel for correlation, hunting, and incident enrichment.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`UpwindLogsAssets_CL`](../tables/upwindlogsassets-cl.md) | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): read and write permissions on the workspace are required.
- **Keys** (Workspace): read permissions to shared keys for the workspace are required. [See the documentation to learn more about workspace keys](https://docs.microsoft.com/azure/azure-monitor/platform/agent-windows#obtain-workspace-id-and-key).

**Custom Permissions:**
- **Microsoft.Web/sites permissions**: Read and write permissions to Azure Functions to create a Function App is required. [See the documentation to learn more about Azure Functions](https://docs.microsoft.com/azure/azure-functions/).
- **Upwind API Credentials**: An Upwind API client ID and client secret are required. Obtain these from your Upwind platform under **Settings → API Keys**. The client credentials are used to authenticate against `https://auth.upwind.io/oauth/token` to obtain a bearer token.
- **Upwind Organization ID**: Your Upwind Organization ID is required. Find it in the Upwind platform under **Settings → Organization**.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

>**NOTE:** This connector uses Azure Functions and the Azure Monitor Ingestion API (DCE/DCR) to push Upwind logs into Microsoft Sentinel. The ARM template automatically creates the Data Collection Endpoint, custom log table (`UpwindLogsAssets_CL`), Data Collection Rule, and role assignment. This might result in additional data ingestion costs. Check the [Azure Functions pricing page](https://azure.microsoft.com/pricing/details/functions/) and [Azure Monitor pricing page](https://azure.microsoft.com/pricing/details/monitor/) for details.

>**(Optional)** During deployment, choose **Key Vault** as the authentication method to securely store your Upwind client secret. You can provide an existing Key Vault name or let the template create a new one. A user-assigned managed identity is automatically configured with the required Key Vault access policies.

**1. STEP 1 – Obtain Upwind API credentials**

1. Log in to the **[Upwind platform](https://app.upwind.io)**.
2. Navigate to **Settings → API Keys**.
3. Create a new API key and note the **Client ID** and **Client Secret**.
4. Navigate to **Settings → Organization** and note your **Organization ID**.

**2. STEP 2 – Deploy the Azure Function App**

Click **Deploy to Azure** and fill in the parameters. The template automatically creates the DCE, `UpwindLogs_CL` table, DCR, role assignment, and Function App.

[![Deploy To Azure](https://aka.ms/deploytoazurebutton)](https://aka.ms/sentinel-Upwind-azuredeploy)

**Parameters to fill in:**

| Parameter | Description |
|---|---|
| `WorkspaceName` | Name of your Log Analytics / Microsoft Sentinel workspace |
| `UpwindOrgId` | Upwind Organization ID from Step 1 |
| `UpwindClientId` | Upwind API Client ID from Step 1 |
| `UpwindClientSecret` | Upwind API Client Secret from Step 1 |
| `AppInsightsWorkspaceResourceID` | Full Resource ID of the Log Analytics workspace (from **Log Analytics workspace → Properties**) |
- **Workspace ID**: `WorkspaceId`
  > *Note: The value above is dynamically provided when these instructions are presented within Microsoft Sentinel.*

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

