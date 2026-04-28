# Cyera DSPM Microsoft Sentinel Data Connector

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/cyera_icon.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `CyeraDSPMCCF` |
| **Publisher** | Cyera Inc |
| **Used in Solutions** | [CyeraDSPM](../solutions/cyeradspm.md) |
| **Collection Method** | [CCF](../methods/ccf.md) |
| **Connector Definition Files** | [CyeraDSPMLogs_ConnectorDefinitionCCF.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CyeraDSPM/Data%20Connectors/CyeraDSPM_CCF/CyeraDSPMLogs_ConnectorDefinitionCCF.json) |
| **CCF Configuration** | [CyeraDSPMLogs_DataConnectorPoller.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CyeraDSPM/Data%20Connectors/CyeraDSPM_CCF/CyeraDSPMLogs_DataConnectorPoller.json) |
| **CCF Capabilities** | `JwtToken` |

The [Cyera DSPM](https://api.cyera.io/) data connector allows you to connect to your Cyera's DSPM tenant and ingesting Classifications, Assets, Issues, and Identity Resources/Definitions into Microsoft Sentinel. The data connector is built on Microsoft Sentinel's Codeless Connector Framework and uses the Cyera's API to fetch Cyera's [DSPM Telemetry](https://www.cyera.com/) once received can be correlated with security events creating custom columns so that queries don't need to parse it again, thus resulting in better performance.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`CyeraAssets_CL`](../tables/cyeraassets-cl.md) | ? | ✓ | ? |
| [`CyeraAssets_MS_CL`](../tables/cyeraassets-ms-cl.md) | ? | ✓ | ? |
| [`CyeraClassifications_CL`](../tables/cyeraclassifications-cl.md) | ? | ✓ | ? |
| [`CyeraIdentities_CL`](../tables/cyeraidentities-cl.md) | ? | ✓ | ? |
| [`CyeraIssues_CL`](../tables/cyeraissues-cl.md) | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): Read and Write permissions are required.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Cyera DSPM Authentication**

Connect to your Cyera DSPM tenenant via Personal Access Tokens
- **Cyera Personal Access Token Client ID**: client_id
- **Cyera Personal Access Token Secret Key**: (password field)
- Click 'Connect' to establish connection

## Additional Documentation

> 📄 *Source: [CyeraDSPM\Data Connectors\README.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CyeraDSPM\Data Connectors\README.md)*

# CyeraDSPM Integration for Microsoft Sentinel

## Introduction

This folder contains the Azure function time trigger code for CyeraDSPM-Microsoft Sentinel connector. The connector will run periodically and ingest the CyeraDSPM data into the Microsoft Sentinel logs custom table `CyeraDSPM_CL`. 
## Folders

1. `CyeraDSPM_CCF/` - This contains the package, requirements, ARM JSON file, connector page template JSON, and other dependencies. 
2. `CyeraDSPM_Functions/` - This contains the Azure function source code along with sample data.


## Installing for the users

After the solution is published, we can find the connector in the connector gallery of Microsoft Sentinel among other connectors in Data connectors section of Sentinel. 

i. Go to Microsoft Sentinel -> Data Connectors

ii. Click on the CyeraDSPM connector, connector page will open. 

iii. Click on the blue `Deploy to Azure` button.   


It will lead to a custom deployment page where after entering accurate credentials and other information, the resources will get created. 


The connector should start ingesting the data into the logs in next 10-15 minutes.


## Installing for testing


i. Log in to Azure portal using the URL - [https://portal.azure.com/?feature.BringYourOwnConnector=true](https://portal.azure.com/?feature.BringYourOwnConnector=true).

ii. Go to Microsoft Sentinel -> Data Connectors

iii. Click the “import” button at the top and select the json file `CyeraDSPM_API_FunctionApp.JSON` downloaded on your local machine from Github.

iv. This will load the connector page and rest of the process will be same as the Installing for users guideline above.


Each invocation and its logs of the function can be seen in Function App service of Azure, available in the Azure Portal outside the Microsoft Sentinel.

i. Go to Function App and click on the function which you have deployed, identified with the given name at the deployment stage.

ii. Go to Functions -> CyeraDSPMSentinelConnector -> Monitor

iii. By clicking on invocation time, you can see all the logs for that run. 

**Note: Furthermore we can check logs in Application Insights of the given function in detail if needed. We can search the logs by operation ID in Transaction search section.**

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

