# Exchange Security Insights Online Collector (Azure Monitor)

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `ESI-ModernExchangeOnlineCollector` |
| **Publisher** | Microsoft |
| **Used in Solutions** | [Microsoft Exchange Security - Exchange Online](../solutions/microsoft-exchange-security-exchange-online.md) |
| **Collection Method** | [CCF Push](../methods/ccf-push.md) |
| **Connector Definition Files** | [ESI-ModernExchangeOnlineCollector_connectorDefinition.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Exchange%20Security%20-%20Exchange%20Online/Data%20Connectors/ESI-ModernExchangeOnlineCollector_ccf/ESI-ModernExchangeOnlineCollector_connectorDefinition.json) |
| **DCR Definition Files** | [ESI-ModernExchangeOnlineCollector_DCR.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Exchange%20Security%20-%20Exchange%20Online/Data%20Connectors/ESI-ModernExchangeOnlineCollector_ccf/ESI-ModernExchangeOnlineCollector_DCR.json) |
| **CCF Configuration** | [ESI-ModernExchangeOnlineCollector_dataConnector.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Exchange%20Security%20-%20Exchange%20Online/Data%20Connectors/ESI-ModernExchangeOnlineCollector_ccf/ESI-ModernExchangeOnlineCollector_dataConnector.json) |
| **CCF Capabilities** | `Push` |
| **Ingestion API** | [Log Ingestion API](../methods/log-ingestion-api.md) — *CCF Push connectors use DCR-based Log Ingestion API* |
| **Custom Log V1 Tables** | Yes 🔶 — ingests into tables with type-suffixed columns |
| **Microsoft Learn** | [View on Learn](https://learn.microsoft.com/azure/sentinel/data-connectors-reference#exchange-security-insights-online-collector-using-azure-functions) |

Connector used to push Exchange Online Security configuration for Microsoft Sentinel Analysis using Azure Monitor Ingestion API.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`ESIAPIExchangeOnlineConfig_CL`](../tables/esiapiexchangeonlineconfig-cl.md) 🔶 | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): read and write permissions are required.

**Custom Permissions:**
- **Microsoft Entra**: Permission to create an app registration in Microsoft Entra ID. Typically requires Entra ID Application Developer role or higher.
- **Microsoft Azure**: Permission to assign Monitoring Metrics Publisher role on data collection rule (DCR). Typically requires Azure RBAC Owner or User   Access Administrator role.
- **microsoft.automation/automationaccounts permissions**: Read and write permissions to create an Azure Automation with a Runbook is required. [See the documentation to learn more about Automation Account](https://learn.microsoft.com/en-us/azure/automation/overview).
- **Microsoft.Graph permissions**: Group.Read.All, User.Read.All, and AuditLog.Read.All permissions are required to retrieve user and group information linked to Exchange Online assignments. [See the documentation to learn more](https://aka.ms/sentinel-ESI-OnlineCollectorPermissions).
- **Exchange Online permissions**: Exchange.ManageAsApp permission and **Global Reader** or **Security Reader** Role are needed to retrieve the Exchange Online Security Configuration.[See the documentation to learn more](https://aka.ms/sentinel-ESI-OnlineCollectorPermissions).
- **(Optional) Log Storage permissions**: Storage Blob Data Contributor to a storage account linked to the Automation Account Managed identity or an Application ID is mandatory to store logs.[See the documentation to learn more](https://aka.ms/sentinel-ESI-OnlineCollectorPermissions).

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

>**NOTE - UPDATE**

ℹ️ <H1><b><u>NOTE - UPDATE:</u></b></H1>For an existing deployment, update the collector script to version <b>8.0.0.0</b> or later, before switching to the Azure Monitor Log Ingestion API. <br/>See <a href='https://aka.ms/sentinel-ESI-OnlineCollectorUpdate'>ESI On-Premises Collector Update</a> and <a href='https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Exchange%20Security%20-%20Exchange%20Online/%23%20-%20General%20Content/Documentations/README_LogIngestionAPI.md#upgrade-an-existing-deployment'>Upgrade an existing deployment</a>.</br>For detailed documentation for the following steps, refer to the <a href='https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Exchange%20Security%20-%20Exchange%20Online/%23%20-%20General%20Content/Documentations/README_LogIngestionAPI.md'>Official Documentation</a>

**1. STEP 1. Deploy the Azure Monitor connector resources**

This connector enables the Exchange Online collector to send configuration data to Microsoft Sentinel through the Azure Monitor Log Ingestion API.
#### Automated Azure Monitor resource deployment
Selecting **Deploy** creates the Log Analytics table, Data Collection Endpoint (DCE), and Data Collection Rule (DCR). The Azure Automation deployment in the next step creates a system-assigned managed identity and grants it access to the DCR.
Deploy Exchange Collector Push connector resources

**STEP 2 - Deploy / Updating the Azure Automation collector**

>**IMPORTANT:** Before deploying Azure Automation, record the values below. For new deployment, choose your environment display name (this name will be used in the workbooks - remember the table can contain information from several environments), for example `Contoso`. The deployment adds the `-Cloud` suffix when needed.
- **Tenant ID (Directory ID)**: `TenantId`
  > *Note: The value above is dynamically provided when these instructions are presented within Microsoft Sentinel.*
- **Data Collection Endpoint Uri**: `DataCollectionEndpoint`
  > *Note: The value above is dynamically provided when these instructions are presented within Microsoft Sentinel.*
- **Data Collection Rule Immutable ID**: `DataCollectionRuleId`
  > *Note: The value above is dynamically provided when these instructions are presented within Microsoft Sentinel.*
- **Stream Name**: `Custom-ESIExchangeOnlineConfig`
- **DataCollectionRuleName**: `Retrieve the DCR resource name in the Azure portal by matching the immutable ID shown above.`

**Option 1 : Deploy the Azure Automation template for a new deployment**

1. Select the **Deploy to Azure** button below.

	[![Deploy To Azure](https://aka.ms/deploytoazurebutton)](https://aka.ms/sentinel-ESI-ExchangeCollector-azuredeploy)
2. Check the subscription, Select the resource group, Check the location.
3. Enter the Automation account name, environment name, tenant ID, DCE URI, DCR immutable ID, and DCR name. To retrieve the DCR name, follow [Retrieve the DCR name](https://github.com/nlepagnez/Azure-Sentinel/blob/Update-for-Azure-Monitor-API---Beta/Solutions/Microsoft%20Exchange%20Security%20-%20Exchange%20Online/%23%20-%20General%20Content/Documentations/README_LogIngestionAPI.md#retrieve-the-dcr-name).
4. Select **Review + create**, and then select **Create**.

The template creates the Automation account with a system-assigned managed identity, imports the required modules, deploys the runbook and daily schedule, creates the configuration variables, and assigns the managed identity to the DCR.

**Option 2 : Update an existing Deployment of Azure Automation**

 Use the following documentation to update an existing Azure Automation deployment. [Click Here](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Microsoft%20Exchange%20Security%20-%20Exchange%20Online/%23%20-%20General%20Content/Documentations/README_LogIngestionAPI.md#upgrade-an-existing-deployment)

**STEP 3 - Assign Microsoft Graph and Exchange Online permissions to the managed identity (only for new deployment)**

The Automation account managed identity requires application permissions to collect Exchange Online and Microsoft Graph information.
**Assign Permissions by Script**

**A. Download Permission Script**

  From a secure machine with the Microsoft Graph modules installed, download the Permission Update script.

(The script is also located in the CollectExchSecIns.zip file, so if the On-Premises solution is already deployed this modification can be done on this server.)

[Permission Update script](https://aka.ms/ESI-ExchangeCollector-Permissions)

  **B. Retrieve the Azure Automation managed identity object ID**

  Open the Automation account, select **Identity**, and copy the managed identity object ID.

  **C. Unblock the script and run the script with a Global Administrator account**

  Run `ExchangeOnlinePermSetup.ps1 -MIIDParam <managed-identity-object-id> -TenantId <tenant-id> -InteractiveAuth`. The script requires Microsoft Graph modules and admin consent. It assigns Exchange.ManageAsApp, User.Read.All, Group.Read.All, and AuditLog.Read.All.

  **D. Exchange Online Role Assignment. Do not forget this step !**

  1. As a **Global Administrator**, go to **Roles and Administrators**.
2. Select **Global Reader** role or **Security Reader** and click to 'Add assignments'.
3. Click on 'No member selected' and search your Managed Identity account Name beginning by **the name of your automation account** like 'ESI-Collector'. Select it and click on 'Select'.
4. Click **Next** and validate the assignment by clicking **Assign**.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

