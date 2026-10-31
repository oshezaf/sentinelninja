# Fortinet FortiNDR Cloud

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/fortinet_logo.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `FortinetFortiNdrCloudDataConnector` |
| **Publisher** | Fortinet |
| **Used in Solutions** | [Fortinet FortiNDR Cloud](../solutions/fortinet-fortindr-cloud.md) |
| **Collection Method** | [Azure Function](../methods/azure-function.md) |
| **Connector Definition Files** | [FortinetFortiNdrCloud_API_AzureFunctionApp.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Fortinet%20FortiNDR%20Cloud/Data%20Connectors/FortinetFortiNdrCloud_API_AzureFunctionApp.json) |
| **Ingestion API** | [Log Ingestion API](../methods/log-ingestion-api.md) — *Sibling ARM template declares DCR / Log Ingestion API resources* |
| **Microsoft Learn** | [View on Learn](https://learn.microsoft.com/azure/sentinel/data-connectors-reference#fortinet-fortindr-cloud) |

The Fortinet FortiNDR Cloud data connector provides the capability to ingest [Fortinet FortiNDR Cloud](https://docs.fortinet.com/product/fortindr-cloud) data into Microsoft Sentinel using the FortiNDR Cloud API

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`FortinetFortiNdrCloudRaw_CL`](../tables/fortinetfortindrcloudraw-cl.md) | ? | ✓ | ? |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): read and write permissions on the workspace are required.
- **Keys** (Workspace): read permissions to shared keys for the workspace are required. [See the documentation to learn more about workspace keys](https://docs.microsoft.com/azure/azure-monitor/platform/agent-windows#obtain-workspace-id-and-key).

**Custom Permissions:**
- **Microsoft.Web/sites permissions**: Read and write permissions to Azure Functions to create a Function App is required. [See the documentation to learn more about Azure Functions](https://docs.microsoft.com/azure/azure-functions/).
- **MetaStream Credentials**: **AWS Access Key Id**, **AWS Secret Access Key**, **FortiNDR Cloud Account Code** are required to retrieve event data.
- **API Credentials**: **FortiNDR Cloud API Token**, **FortiNDR Cloud Account UUID** are required to retrieve detection data.

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

>**NOTE:** This connector uses an enterprise application integration model via Azure Functions to securely pull logs from the FortiNDR Cloud API into Microsoft Sentinel. This deployment may incur data ingestion and compute costs. Check the [Azure Functions pricing page](https://azure.microsoft.com/pricing/details/functions/) for details.

>**(Optional Step)** Securely store **API authorization key(s) or token(s)** in Azure Key Vault. Azure Key Vault provides a secure mechanism to store and retrieve key values. [Follow these instructions](https://docs.microsoft.com/azure/app-service/app-service-key-vault-references) to use Azure Key Vault with an Azure Function App.

>**NOTE:** This connector uses a parser based on a Kusto Function to normalize fields. [Follow these steps](https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Solutions/Fortinet%20FortiNDR%20Cloud/Parsers/Fortinet_FortiNDR_Cloud.md) to create the Kusto function alias **Fortinet_FortiNDR_Cloud**.

**STEP 1 - Deploy the connector and the associated Azure Function**

>**IMPORTANT:** Before deploying the Fortinet FortiNDR Cloud connector, have the value below, readily available.
- **Workspace ID**: `WorkspaceId`
  > *Note: The value above is dynamically provided when these instructions are presented within Microsoft Sentinel.*

**STEP 2 - Azure Resource Manager (ARM) Template**

Use this method for automated deployment of the Fortinet FortiNDR Cloud connector.

1. Click the **Deploy to Azure** button below.

	[![Deploy To Azure](https://aka.ms/deploytoazurebutton)](https://aka.ms/sentinel-FortinetFortiNDR-azuredeploy)
2. Select the preferred **Subscription**, **Resource Group** and **Location**.
3. Click **Create** to deploy.

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Connectors Index](../connectors-index.md)

