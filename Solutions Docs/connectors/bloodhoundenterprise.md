# ⚠️ BloodHound Enterprise Data Connector (using Azure Functions)

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace or not installed in Content Hub.

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/BHE_Logo.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `BloodHoundEnterprise` |
| **Publisher / Vendor** | SpecterOps |
| **Used in Solutions** | [BloodHound Enterprise](../solutions/bloodhound-enterprise.md) |
| **Collection Method** | [Azure Function](../methods/azure-function.md) |
| **Connector Definition Files** | [BloodHoundFunction.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/BloodHound%20Enterprise/Data%20Connectors/BloodHoundFunction.json) |
| **Ingestion API** | [Log Ingestion API](../methods/log-ingestion-api.md) \| [HTTP Data Collector API](../methods/http-data-collector-api.md) — *Sibling ARM template declares DCR / Log Ingestion API resources; Connector definition requires workspace key (SharedKey pattern)* |

**[BloodHound Enterprise](https://bloodhoundenterprise.io/)** from **[SpecterOps](https://specterops.io/)** is an **Identity Attack Path Management** platform: it maps how attackers can move through identity relationships to reach critical assets so teams can **prioritize and remediate** those paths not only detect them. It brings clarity to identity sprawl in **Active Directory**, **Azure**, and beyond, including **Privilege Zone** style protection around what matters most in your environment.



This **Microsoft Sentinel** connector adds **BloodHound Enterprise attack path context** into your workspace alongside logs and alerts so you can **enrich investigations**, focus on high-value findings, and track exposure, audit activity, and **Tier Zero** assets in one place.



**What this connector does**

- Connects to the **BloodHound Enterprise REST API** using your configured credentials (see [Working with the API](https://bloodhound.specterops.io/integrations/bloodhound-api/working-with-api)) and runs on a **schedule** you set when the Azure Function is deployed. The data is collected through Azure Functions and stored in custom Log Analytics tables with dedicated Data Collection Rules (DCR) and Data Collection Endpoints (DCE).

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`BHEAttackPathsData_CL`](../tables/bheattackpathsdata-cl.md) | ? | ✓ | ? |
| [`BHEAttackPathsTimelineData_CL`](../tables/bheattackpathstimelinedata-cl.md) | ? | ✓ | ? |
| [`BHEAuditLogsData_CL`](../tables/bheauditlogsdata-cl.md) | ? | ✓ | ? |
| [`BHEFindingTrendsData_CL`](../tables/bhefindingtrendsdata-cl.md) | ? | ✓ | ? |
| [`BHEPostureHistoryData_CL`](../tables/bheposturehistorydata-cl.md) | ? | ✓ | ? |
| [`BHETierZeroAssetsData_CL`](../tables/bhetierzeroassetsdata-cl.md) | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): read and write permissions on the workspace are required.
- **Keys** (Workspace): read permissions to shared keys for the workspace are required. [See the documentation to learn more about workspace keys](https://docs.microsoft.com/azure/azure-monitor/platform/agent-windows#obtain-workspace-id-and-key).

**Custom Permissions:**
- **Microsoft.Web/sites permissions**: Read and write permissions to Azure Functions to create a Function App is required. [See the documentation to learn more about Azure Functions](https://docs.microsoft.com/azure/azure-functions/).
- **BloodHound Enterprise API access**: **Token ID**, **Token key**, and your tenant **base URL** are required to authenticate to the BloodHound Enterprise REST API (requests are signed per the SpecterOps API model see [Working with the API](https://bloodhound.specterops.io/integrations/bloodhound-api/working-with-api)).

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Step 1. Create BloodHound Enterprise API credentials**

In your BloodHound Enterprise tenant, create API credentials (**Token ID** and **Token key**) used to sign requests to the REST API. Follow [Working with the API](https://bloodhound.specterops.io/integrations/bloodhound-api/working-with-api) to create API credentials then store the values securely.

**2. Step 2. Create Microsoft Entra application**

Create a Microsoft Entra ID (Azure AD) application used for ingestion to Log Analytics (for example DCE/DCR-related access). Follow [Create a Microsoft Entra application](https://learn.microsoft.com/azure/azure-monitor/logs/tutorial-logs-ingestion-portal#create-microsoft-entra-application) to create Microsoft Entra application & its credentials then save **Application (client) ID**, **Client secret** value, and any other IDs your administrator requires. Store the client secret securely.

**3. Step 3. Deploy Function App**

>**NOTE:** This connector uses Azure Functions to pull data from BloodHound Enterprise into Microsoft Sentinel. This might result in additional data ingestion costs. Check the [Azure Functions pricing page](https://azure.microsoft.com/pricing/details/functions/) for details.

>**IMPORTANT:** Before deploying the BloodHound Enterprise connector, have the **Workspace name** (see below), **BloodHound Enterprise tenant URL**, **Token ID** and **Token key**, **Microsoft Entra Application (client) ID** and **client secret**, and your desired **environment** and **finding type** filters (or use template defaults such as **All**) ready.
- **Workspace Name**: `WorkspaceName`
  > *Note: The value above is dynamically provided when these instructions are presented within Microsoft Sentinel.*

**4. Deploy all the resources related to the data connector**

1. Click the **Deploy to Azure** button below. 

	[![Deploy To Azure](https://aka.ms/deploytoazurebutton)](https://aka.ms/sentinel-BloodhoundEnterprise-azuredeploy)
2. Select the preferred **Subscription**, **Resource Group**, and **Location**.
3. Enter **Function App name**, **Log Analytics workspace name** (Microsoft Sentinel workspace), **BloodHound Enterprise tenant domain** (URL), **BloodHound Token ID** and **Token key** (secure parameters), **Microsoft Entra Application (client) ID**, and **Microsoft Entra application client secret**.
4. Optional: set **Lookup days** (historical lookback), **Selected BloodHound environments** (comma-separated or **All**), and **Selected finding types** (or **All**) as described in the template.
5. Click **Review + create**, then **Create** to deploy.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

