# XBOW Security Platform (via Azure Function)

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/XBOW.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `XbowSecurityConnector` |
| **Publisher** | XBOW |
| **Used in Solutions** | [XBOW](../solutions/xbow.md) |
| **Collection Method** | [Azure Function](../methods/azure-function.md) |
| **Connector Definition Files** | [Xbow_API_Xbow.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/XBOW/Data%20Connectors/Xbow_API_Xbow.json) |
| **Ingestion API** | [Log Ingestion API](../methods/log-ingestion-api.md) — *Azure Function code uses LogsIngestionClient/Log Ingestion API* |

The **XBOW** data connector ingests asset snapshots, vulnerability findings, and assessment activity from the [XBOW Security Platform](https://console.xbow.com) into Microsoft Sentinel. An Azure Function polls the XBOW API on a timer and pushes asset JSON snapshots into `XbowAssets_CL`, enriched findings (with evidence, PoC recipes, impact, and mitigations) into `XbowFindings_CL`, and assessment lifecycle events into `XbowAssessments_CL`, using the [Azure Monitor Ingestion API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview) (DCE/DCR).

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`XbowAssessments_CL`](../tables/xbowassessments-cl.md) | ? | ✓ | ? |
| [`XbowAssets_CL`](../tables/xbowassets-cl.md) | ? | ✓ | ? |
| [`XbowFindings_CL`](../tables/xbowfindings-cl.md) | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): read and write permissions on the workspace are required.
- **Keys** (Workspace): read permissions to shared keys for the workspace are required. [See the documentation to learn more about workspace keys](https://docs.microsoft.com/azure/azure-monitor/platform/agent-windows#obtain-workspace-id-and-key).

**Custom Permissions:**
- **XBOW API Token**: A XBOW Personal Access Token is required. Generate one in the [XBOW console](https://console.xbow.com) under **Settings > Personal Access Tokens**. Scope the token to the organization you want to monitor.
- **XBOW Organization ID**: The Organization ID from your XBOW account. Find it in the XBOW console URL or via the API.
- **Microsoft.Web/sites permissions**: Read and write permissions to Azure Functions to create a Function App is required. [See the documentation to learn more about Azure Functions](https://docs.microsoft.com/azure/azure-functions/).
- **Custom prerequisites if necessary, otherwise delete this customs tag**: Description for any custom pre-requisites
- **Azure AD App Registration**: An Azure AD App Registration (service principal) is required. You must manually assign the **Monitoring Metrics Publisher** role on the Data Collection Rule (DCR) to this App Registration after deployment.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

>**NOTE:** This connector uses Azure Functions and the Azure Monitor Ingestion API (DCE/DCR) to ingest XBOW assets, findings, and assessments into Microsoft Sentinel. The ARM template automatically creates the Data Collection Endpoint, custom log tables (`XbowAssets_CL`, `XbowFindings_CL`, and `XbowAssessments_CL`), Data Collection Rule, and Function App. This might result in additional data ingestion costs. Check the [Azure Functions pricing page](https://azure.microsoft.com/pricing/details/functions/) and [Azure Monitor pricing page](https://azure.microsoft.com/pricing/details/monitor/) for details.

>**(Optional Step)** Securely store your XBOW API Token and App Registration credentials in Azure Key Vault. [Follow these instructions](https://docs.microsoft.com/azure/app-service/app-service-key-vault-references) to use Azure Key Vault references with an Azure Function App.

**1. STEP 1 – Generate a XBOW API Token**

1. Log into the [XBOW console](https://console.xbow.com) with administrator access.
2. Click your profile icon (top right) and select **Settings**.
3. In the left sidebar, click **Personal Access Tokens**.
4. Click **Generate new token**, provide a name, and select the organization scope.
5. Copy and securely store your token — it will not be shown again.
6. Note your **Organization ID** from the XBOW console or from the URL when viewing your organization.

**2. STEP 2 – Create an Azure AD App Registration and Grant DCR Role**

1. In the [Azure Portal](https://portal.azure.com), navigate to **Azure Active Directory > App registrations > New registration**.
2. Provide a name (e.g. `Xbow-Sentinel-Connector`) and register.
3. Under **Certificates & secrets**, create a new client secret. Note the **Tenant ID**, **Client ID**, and **Client Secret**.
4. Deploy the connector using Step 3 below, then return here.
5. Open the deployed **Data Collection Rule** (from the deployment outputs or by searching in the resource group).
6. Go to **Access control (IAM) > Add role assignment**.
7. Select role **Monitoring Metrics Publisher**.
8. Assign access to the App Registration (service principal) created above.
9. Wait a few minutes for RBAC propagation before verifying ingestion.

**3. STEP 3 – Deploy the Azure Function App**

Click **Deploy to Azure** and fill in the parameters. The template will automatically create the Data Collection Endpoint, `XbowAssets_CL`, `XbowFindings_CL`, and `XbowAssessments_CL` tables, Data Collection Rule, and Function App.

[![Deploy To Azure](https://aka.ms/deploytoazurebutton)](https://aka.ms/sentinel-Xbow-azuredeploy)

**Parameters to fill in:**

| Parameter | Description |
|---|---|
| `WorkspaceName` | Name of your Log Analytics / Microsoft Sentinel workspace |
| `XbowApiToken` | XBOW Personal Access Token from Step 1 |
| `XbowOrgId` | XBOW Organization ID from Step 1 |
| `TenantId` | Azure AD Tenant ID from Step 2 |
| `ClientId` | App Registration Client ID from Step 2 |
| `ClientSecret` | App Registration Client Secret from Step 2 |
| `AppInsightsWorkspaceResourceID` | Full Resource ID of the Log Analytics workspace (from **Log Analytics workspace > Properties**) |
| `FunctionAppLocation` | Optional Azure region for Function App resources (defaults to the Resource Group location) |
- **Workspace ID**: `WorkspaceId`
  > *Note: The value above is dynamically provided when these instructions are presented within Microsoft Sentinel.*

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

