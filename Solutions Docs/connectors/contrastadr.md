# ContrastADR

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/ContrastADR.svg" alt="" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Connectors Index](../connectors-index.md)

---

| Attribute | Value |
|:----------|:------|
| **Connector ID** | `ContrastADR` |
| **Publisher** | Contrast Security |
| **Used in Solutions** | [ContrastADR](../solutions/contrastadr.md) |
| **Collection Method** | [Azure Function](../methods/azure-function.md) |
| **Connector Definition Files** | [ContrastADR_API_FunctionApp.json](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ContrastADR/Data%20Connectors/ContrastADR_API_FunctionApp.json) |
| **Ingestion API** | [HTTP Data Collector API](../methods/http-data-collector-api.md) — *Azure Function code uses SharedKey/HTTP Data Collector API* |
| **Custom Log V1 Tables** | Yes 🔶 — ingests into tables with type-suffixed columns |

The ContrastADR data connector provides the capability to ingest Contrast ADR attack events into Microsoft Sentinel using the ContrastADR Webhook. ContrastADR data connector can enrich the incoming webhook data with ContrastADR API enrichment calls.

## Tables Ingested

This connector ingests data into the following tables:

| Table | Transformations | Ingestion API | Lake-Only |
|:------|:---------------:|:-------------:|:---------:|
| [`ContrastADRIncident_CL`](../tables/contrastadrincident-cl.md) 🔶 | ✗ | ✓ | ✗ |
| [`ContrastADR_CL`](../tables/contrastadr-cl.md) 🔶 | ✗ | ✓ | ✗ |

> 💡 **Tip:** Tables with Ingestion API support allow data ingestion via the [Azure Monitor Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview), which also enables custom transformations during ingestion.

## Permissions

**Resource Provider Permissions:**
- **Workspace** (Workspace): read and write permissions are required.
- **Keys** (Workspace): read permissions to shared keys for the workspace are required. [See the documentation to learn more about workspace keys](https://docs.microsoft.com/azure/azure-monitor/platform/agent-windows#obtain-workspace-id-and-key).

**Custom Permissions:**
- **Microsoft.Web/sites permissions**: Read and write permissions to Azure Functions to create a Function App is required. [See the documentation to learn more about Azure Functions](https://docs.microsoft.com/azure/azure-functions/).

## Setup Instructions

> ⚠️ **Note**: These instructions were automatically generated from the connector's user interface definition file using AI and may not be fully accurate. Please verify all configuration steps in the Microsoft Sentinel portal.

Use these Workspace id and primakey key as shared key in azure function app
- **Workspace ID**: `WorkspaceId`
  > *Note: The value above is dynamically provided when these instructions are presented within Microsoft Sentinel.*
- **Primary Key**: `PrimaryKey`
  > *Note: The value above is dynamically provided when these instructions are presented within Microsoft Sentinel.*

**2. Azure Resource Manager (ARM) Template**

Use this method to automate deployment of the ContrastADR Data Connector using ARM Template.

1. Click the **Deploy to Azure** button below. 

	[![Deploy To Azure](https://aka.ms/deploytoazurebutton)](https://aka.ms/sentinel-ContrastADR-azuredeploy)
2. Provide the following parameters: Region, Function Name, LOG_ANALYTICS_SHARED_KEY, LOG_ANALYTICS_WORKSPACE_ID

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Connectors Index](../connectors-index.md)

