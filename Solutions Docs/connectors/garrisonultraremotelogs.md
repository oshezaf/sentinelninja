# Garrison ULTRA Remote Logs

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Garrison_Logomark.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `GarrisonULTRARemoteLogs` |
| **Publisher** | Garrison |
| **Used in Solutions** | [Garrison ULTRA](../solutions/garrison-ultra.md) |
| **Collection Method** | [REST API](../methods/rest-api.md) |
| **Connector Definition Files** | [GarrisonULTRARemoteLogs_ConnectorUI.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Garrison%20ULTRA/Data%20Connectors/GarrisonULTRARemoteLogs/GarrisonULTRARemoteLogs_ConnectorUI.json) |
| **Ingestion API** | [HTTP Data Collector API](../methods/http-data-collector-api.md) — *Connector definition requires workspace key (SharedKey pattern)* |

The [Garrison ULTRA](https://www.garrison.com/en/garrison-ultra-cloud-platform) Remote Logs connector allows you to ingest Garrison ULTRA Remote Logs into Microsoft Sentinel.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`Garrison_ULTRARemoteLogs_CL`](../tables/garrison-ultraremotelogs-cl.md) | ✗ | ✓ | ✗ |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): read and write permissions on the workspace are required.
- **Keys** (Workspace): read permissions to shared keys for the workspace are required. [See the documentation to learn more about workspace keys](https://docs.microsoft.com/azure/azure-monitor/platform/agent-windows#obtain-workspace-id-and-key).

**Custom Permissions:**
- **Garrison ULTRA**: To use this data connector you must have an active [Garrison ULTRA](https://www.garrison.com/en/garrison-ultra-cloud-platform) license.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

**1. Deployment - Azure Resource Manager (ARM) Template**

These steps outline the automated deployment of the Garrison ULTRA Remote Logs data connector using an ARM Tempate.

1. Click the **Deploy to Azure** button below. 

	[![Deploy To Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Frefs%2Fheads%2Fmaster%2FSolutions%2FGarrison%2520ULTRA%2FData%2520Connectors%2FGarrisonULTRARemoteLogs%2Fazuredeploy_DataCollectionResources.json) 			
2. Provide the required details such as Resource Group, Microsoft Sentinel Workspace and ingestion configurations 
> **NOTE:** It is recommended to create a new Resource Group for deployment of these resources.
3. Mark the checkbox labeled **I agree to the terms and conditions stated above**. 
4. Click **Purchase** to deploy.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

