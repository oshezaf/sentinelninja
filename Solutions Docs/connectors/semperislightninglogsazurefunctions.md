# Semperis Lightning Logs

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Solutions/SemperisLightning/Data%20Connectors/Logos/semperis.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `SemperisLightningLogsAzureFunctions` |
| **Publisher** | Semperis |
| **Used in Solutions** | [SemperisLightning](../solutions/semperislightning.md) |
| **Collection Method** | [Azure Function](../methods/azure-function.md) |
| **Connector Definition Files** | [SemperisLightningLogs_AzureFunction.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SemperisLightning/Data%20Connectors/SemperisLightningLogs/SemperisLightningLogs_AzureFunction.json) |
| **Ingestion API** | [Log Ingestion API](../methods/log-ingestion-api.md) — *Azure Function code uses LogsIngestionClient/Log Ingestion API* |

The [Semperis Lightning](https://www.semperis.com/platform/) connector uses Azure Functions to ingest Semperis Lightning identity security data into Microsoft Sentinel. The connector deploys an Azure Function and collects data into custom Log Analytics tables for investigation and threat hunting.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`LightningAttackPathLinks_CL`](../tables/lightningattackpathlinks-cl.md) | ? | ✓ | ? |
| [`LightningAttackPaths_CL`](../tables/lightningattackpaths-cl.md) | ? | ✓ | ? |
| [`LightningIOEResults_CL`](../tables/lightningioeresults-cl.md) | ? | ✓ | ? |
| [`LightningIOEsMetadata_CL`](../tables/lightningioesmetadata-cl.md) | ? | ✓ | ? |
| [`LightningIndicatorExecutions_CL`](../tables/lightningindicatorexecutions-cl.md) | ? | ✓ | ? |
| [`LightningTier0Attackers_CL`](../tables/lightningtier0attackers-cl.md) | ? | ✓ | ? |
| [`LightningTier0Nodes_CL`](../tables/lightningtier0nodes-cl.md) | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): read and write permissions on the workspace are required.
- **Keys** (Workspace): read permissions to shared keys for the workspace are required. [See the documentation to learn more about workspace keys](https://docs.microsoft.com/azure/azure-monitor/platform/agent-windows#obtain-workspace-id-and-key).

**Custom Permissions:**
- **Microsoft.Web/sites permissions**: Read and write permissions to Azure Functions to create a Function App is required. [See the documentation to learn more about Azure Functions](https://docs.microsoft.com/azure/azure-functions/).
- **Semperis Lightning API credentials**: A Semperis Lightning **API Key** and selected **Zone** (na or eu) are required to authenticate the connector to Semperis Lightning.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

>**NOTE:** This connector uses Azure Functions to connect to Semperis Lightning and pull data into Microsoft Sentinel. This might result in additional data ingestion costs. Check the [Azure Functions pricing page](https://azure.microsoft.com/pricing/details/functions/) for details.

>**(Optional Step)** Securely store workspace and API authorization key(s) in Azure Key Vault. Azure Key Vault provides a secure mechanism to store and retrieve key values. [Follow these instructions](https://docs.microsoft.com/azure/app-service/app-service-key-vault-references) to use Azure Key Vault with an Azure Function App.

>Ensure the workspace is added to Microsoft Sentinel before deploying the connector.

**1. STEP 1 - Configure access for Semperis Lightning**

1. Sign in to your Semperis Lightning tenant.
2. Create or retrieve a valid **Semperis API Key** for connector access.
3. Confirm your **Semperis Zone** value (**na** for North America or **eu** for Europe) for use during deployment.

**2. STEP 2 - Deploy the 'Semperis Lightning Logs' connector and the associated Azure Function**

1. Click the **Deploy to Azure** button below.

	[![Deploy To Azure](https://aka.ms/deploytoazurebutton)](https://aka.ms/sentinel-semperis-azuredeploy)

**3. STEP 3 - Set the connector parameters**

1. Select the preferred **Subscription** and an existing **Resource Group**.
2. Enter an existing **Log Analytics Workspace Resource ID** belonging to the resource group.
3. Click **Next**.
4. Enter your **Semperis API Key** and select the **Semperis Zone**.
5. Optionally adjust the **Connector Schedule** (default: every 1 hour).
6. Review the settings and click **Create**.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

