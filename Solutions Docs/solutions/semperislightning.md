# Semperis Lightning Sentinel Connector

*Solution: SemperisLightning*

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Solutions/SemperisLightning/Data%20Connectors/Logos/semperis.svg" alt="SemperisLightning Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Semperis |
| **Support Tier** | Partner |
| **Support Link** | [https://www.semperis.com/support/](https://www.semperis.com/support/) |
| **Categories** | domains |
| **Version** | 3.0.0 |
| **Author** | Semperis |
| **First Published** | 2026-03-01 |
| **Last Updated** | 2026-03-23 |
| **Solution Folder** | [SemperisLightning](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SemperisLightning) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/semperis.azure-sentinel-solution-semperislightning) · Popularity: ⚪ Very Low (0%) |

This custom data connector uses a Function App to pull Semperis Lightning data and uploads it into the selected Log Analytics workspace via the Azure Log Ingestion API.

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Additional Documentation](#additional-documentation)

## Data Connectors

This solution provides **1 data connector(s)**:

- [Semperis Lightning Logs](../connectors/semperislightninglogsazurefunctions.md)

## Tables Used

This solution uses **7 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`LightningAttackPathLinks_CL`](../tables/lightningattackpathlinks-cl.md) | [Semperis Lightning Logs](../connectors/semperislightninglogsazurefunctions.md) | - |
| [`LightningAttackPaths_CL`](../tables/lightningattackpaths-cl.md) | [Semperis Lightning Logs](../connectors/semperislightninglogsazurefunctions.md) | - |
| [`LightningIOEResults_CL`](../tables/lightningioeresults-cl.md) | [Semperis Lightning Logs](../connectors/semperislightninglogsazurefunctions.md) | - |
| [`LightningIOEsMetadata_CL`](../tables/lightningioesmetadata-cl.md) | [Semperis Lightning Logs](../connectors/semperislightninglogsazurefunctions.md) | - |
| [`LightningIndicatorExecutions_CL`](../tables/lightningindicatorexecutions-cl.md) | [Semperis Lightning Logs](../connectors/semperislightninglogsazurefunctions.md) | - |
| [`LightningTier0Attackers_CL`](../tables/lightningtier0attackers-cl.md) | [Semperis Lightning Logs](../connectors/semperislightninglogsazurefunctions.md) | - |
| [`LightningTier0Nodes_CL`](../tables/lightningtier0nodes-cl.md) | [Semperis Lightning Logs](../connectors/semperislightninglogsazurefunctions.md) | - |

## Additional Documentation

> 📄 *Source: [SemperisLightning/README.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SemperisLightning/README.md)*

# Semperis Lightning Connector for Microsoft Sentinel

This connector ingests all data sources from Semperis Lightning into Microsoft Sentinel/Log Analytics:
- Tier0 Nodes (Identity Graph)
- Attack Paths 
- Attack Path Links
- Tier0 Attackers (Zone Access Objects)
- Indicator Executions
- IoES Metadata
- IoE Results

## Prerequisites

1. **Azure Subscription** with permissions to create resources
2. **Log Analytics Workspace** (existing)
3. **Semperis Lightning API Key** from your Semperis instance
4. **Azure CLI** (for deployment) or Azure Portal

## Deployment

### Option 1: Azure Portal (Recommended)

1. Click the button below or go to Azure Portal
   ```
   https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FSemperisLightning%2FData%2520Connectors%2FSemperisLightningLogs%2Fazuredeploy_Connector_SemperisLightning_AzureFunction.json
   ```

2. Fill in the required parameters:
   - **Log Analytics Workspace Resource ID**: Get from your workspace's JSON View
   - **Semperis API Key**: Your Semperis Lightning API key
   - **Semperis Zone**: Select na (North America) or eu (Europe)
   - **Connector Schedule**: Default is `0 * * * * *` (every 1 hour)

3. Click **Review + Create** then **Create**

### Option 2: Azure CLI

```bash
# Set variables
export RESOURCE_GROUP="myResourceGroup"
export WORKSPACE_ID="/subscriptions/xxx/resourcegroups/xxx/providers/microsoft.operationalinsights/workspaces/xxx"
export API_KEY="your-semperis-api-key"
export LOCATION="eastus"

# Deploy
az deployment group create \
  --name semperis-connector \
  --resource-group $RESOURCE_GROUP \
  --template-file azuredeploy_Connector_SemperisLightning_AzureFunction.json \
  --parameters \
    LogAnalyticsWorkspaceResourceID="$WORKSPACE_ID" \
    SemperisApiKey="$API_KEY" \
    SemperisZone="na" \
   ConnectorSchedule="0 * * * * *"
```

## What Gets Created

The template creates:
- **7 Custom Log Analytics Tables** (all with `_CL` suffix)
- **1 Data Collection Endpoint (DCE)**
- **7 Data Collection Rules (DCRs)**
- **Azure Function App** (Python 3.11, Elastic Premium Plan)
- **Storage Accounts** (for function runtime and state)
- **Key Vault** (for secure API key storage)
- **Application Insights** (for monitoring)
- **User-Assigned Managed Identity** (for authentication)

## Data Ingestion Schedule

By default, the connector ingests data every 1 hour. You can modify the schedule using CRON expressions:

| Expression | Frequency |
|---|---|
| `0 * * * * *` | Every 1 hour (default) |
| `0 */4 * * * *` | Every 4 hours |
| `0 * * * * *` | Every hour |
| `0 0 * * * *` | Daily at midnight UTC |

## Monitoring

1. **Application Insights**: Check function health in Azure Portal
2. **Log Analytics**: Query the custom tables for data
   ```kusto
   LightningTier0Nodes_CL
   | where TimeGenerated > ago(24h)
   | count
   ```

## Field Mappings

### Tier0 Nodes
| API Field | Log Analytics Field |

*[Content truncated...]*

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                          |
|-------------|--------------------------------|-------------------------------------------------------------|
| 3.0.0       | 23-03-2026                     | Initial Solution Release. Added Semperis Lightning Connector            |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

