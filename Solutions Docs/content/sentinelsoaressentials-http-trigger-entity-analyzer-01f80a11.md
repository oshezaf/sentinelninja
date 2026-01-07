# HTTP Trigger Entity Analyzer

This playbook is triggered by HTTP POST requests with entity information and performs automated investigation and enrichment of URL and User entities with asynchronous processing.

| Attribute | Value |
|:----------|:------|
| **Type** | Playbook |
| **Solution** | [SentinelSOARessentials](../solutions/sentinelsoaressentials.md) |
| **Source** | [View on GitHub](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SentinelSOARessentials/Playbooks/Http-Trigger-Entity-Analyzer/azuredeploy.json) |

## Additional Documentation

> 📄 *Source: [Http-Trigger-Entity-Analyzer/readme.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SentinelSOARessentials/Playbooks/Http-Trigger-Entity-Analyzer/readme.md)*

# Entity Analyzer - HTTP Trigger Playbook

Activating the 'Deploy' button initiates the deployment of an Azure Logic App integrated with Microsoft Sentinel MCP Actions, utilizing an HTTP request trigger.
The Logic App is configured to run when an HTTP POST request is received with entity information. This Logic App automatically analyzes URL and User entities and provides detailed security insights including classification, analysis results, and recommendations for each entity type.

The playbook automatically triggers when:
- An HTTP POST request is received with entity information
- External systems need to analyze URLs or User accounts
- Integration with custom applications or workflows is required
- On-demand entity analysis is needed via API calls

After the analysis is complete, the MCP Entity Analyzer conducts a comprehensive investigation of the entity and returns results asynchronously:
- **Initial Response (202 Accepted)**: Immediate acknowledgment with runId for tracking
- **Background Processing**: Analysis continues without timeout constraints
- **URL Analysis**: Security classification, threat intelligence, and URL reputation analysis
- **User Analysis**: Behavioral analysis, risk assessment, and user activity patterns
- **Classification**: Security classification for each entity
- **Analysis Results**: Detailed security analysis findings
- **Recommendations**: Security recommendations based on the analysis
- **Disclaimer**: AI-generated analysis disclaimer

### Prerequisites

Prior to beginning the installation process, it's crucial to confirm that you have met the following prerequisites:
- The user deploying this Logic App needs to have a **Contributor Role**
- The user has permissions to access **Microsoft Sentinel** workspace
- **Microsoft Sentinel data connector lake must be enabled** in your workspace for entity data collection
- The **SentinelMCP connector** is available in your environment
- You need to provide a valid **Sentinel workspace ID** during deployment
- Authentication support for the Entity Analyzer connection includes:
  - **Entra ID Authentication** (OAuth)
  - **Service Principal** (Application ID and Secret)
  - **Managed Identity** (System-assigned or User-assigned)

### Deployment Files

This playbook includes two deployment files:

#### 1. azuredeploy.json
The main ARM template file that defines the Azure resources to be deployed:
- **Logic App Workflow**: The main playbook with HTTP trigger and conditional logic
- **API Connection**: SentinelMCP connection for Microsoft Sentinel MCP integration
- **Workflow Definition**: Complete Logic App structure with triggers, actions, and conditions

#### 2. azuredeploy.parameters.json
The parameters file that contains the configuration values for deployment. This file should be customized before deployment:

**Parameters explained:**
- **PlaybookName**: 
  - **Description**: The name that will be assigned to your Logic App in Azure
  - **Default Value**: "Http-Trigger-Entity-Analyzer"
  - **Type**: String
  - **Usage**: This name will appear in your Azure Portal and be used to identify the Logic App
  
- **workspaceId**: 
  - **Description**: Your Microsoft Sentinel workspace ID (Log Analytics Workspace ID)
  - **Default Value**: `<Your-Sentinel-Workspace-ID>` (must be replaced)
  - **Type**: String
  - **Required**: Yes
  - **Usage**: Used to query Sentinel data for entity analysis
  - **How to find**: Azure Portal → Microsoft Sentinel → Settings → Workspace settings → Copy the Workspace ID
  
- **lookBackDays**: 
  - **Description**: The number of days to look back when analyzing entity data
  - **Default Value**: 40
  - **Type**: Integer
  - **Usage**: Determines the time range for historical data analysis (e.g., user sign-in logs, URL access patterns)
  - **Recommendation**: 30-90 days for comprehensive analysis, adjust based on your data retention policy

### Parameters

During deployment, you'll need to provide:
- **PlaybookName**: Name for the Logic App (default: "Http-Trigger-Entity-Analyzer")
- **workspaceId**: Your Azure Sentinel workspace ID (required)
- **lookBackDays**: Number of days to look back for entity analysis (default: 40 days)

### Deployment 

**Option 1: Deploy via Azure Portal (Recommended)**

To deploy the Entity Analyzer HTTP Trigger Logic App using the Deploy to Azure button:
1. Press on the Deploy button below
2. Select your subscription and resource group (use the same tenant where Microsoft Sentinel is configured)
3. Provide your Sentinel workspace ID
4. Configure the lookBackDays parameter if needed (default is 40 days)


[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FSentinelSOARessentials%2FPlaybooks%2FHttp-Trigger-Entity-Analyzer%2Fazuredeploy.json)

*[Content truncated...]*

---

**Browse:**

- [← Back to Playbooks](playbooks.md)
- [← Back to SentinelSOARessentials](../solutions/sentinelsoaressentials.md)
- [Content Index](content-index.md)
- [Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
