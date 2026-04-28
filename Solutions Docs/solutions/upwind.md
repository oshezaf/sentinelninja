# ⚠️ Upwind

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace or not installed in Content Hub.

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Solutions/Upwind/Data%20Connectors/Logos/upwind.svg" alt="Upwind Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Upwind |
| **Support Tier** | Partner |
| **Support Link** | [https://upwind.io](https://upwind.io) |
| **Categories** | domains |
| **Version** | 3.0.1 |
| **Author** | Upwind - hello@upwind.io |
| **First Published** | 2026-03-10 |
| **Solution Folder** | [Upwind](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Upwind) |

The **Upwind Logs Loader** solution ingests compute platform assets from the [Upwind](https://upwind.io) cloud security platform into a Microsoft Sentinel custom table using an Azure Function and the [Azure Monitor Ingestion API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview) (DCE/DCR).

  **Underlying Microsoft Technologies used:**

  This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs:

  a. [Azure Monitor Ingestion API (DCE/DCR)](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview)

  b. [Azure Functions](https://azure.microsoft.com/services/functions/#overview)



## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Additional Documentation](#additional-documentation)

## Data Connectors

This solution provides **1 data connector(s)**:

- [Upwind Logs Loader (Ingestion API)](../connectors/upwindlogsloader.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`UpwindLogsAssets_CL`](../tables/upwindlogsassets-cl.md) | [Upwind Logs Loader (Ingestion API)](../connectors/upwindlogsloader.md) | - |

## Additional Documentation

> 📄 *Source: [Upwind/README.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Upwind/README.md)*

# Upwind Sentinel Connector

Microsoft Sentinel data connector that ingests **compute platform assets** from the [Upwind](https://upwind.io) cloud security platform into a custom Log Analytics table (`UpwindLogsAssets_CL`) using an Azure Function and the [Azure Monitor Ingestion API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview) (DCE/DCR).

## What it does

- Timer-triggered Azure Function (Python 3.11) that runs on a configurable CRON schedule (default: top of every hour)
- Authenticates to Upwind via OAuth2 `client_credentials` flow
- Pages through all compute platform assets from `/v2/organizations/{orgId}/inventory/catalog/assets/search`
- Maps each asset to the `UpwindLogsAssets_CL` schema and ships records via the Azure Monitor Ingestion API

## Folder structure

```
UpwindLogsLoader/
├── SolutionMetadata.json
├── ReleaseNotes.md
├── Data/
│   └── Solution_UpwindLogsLoader.json
├── Package/
│   ├── 3.0.0.zip                    <- Sentinel content hub package
│   ├── createUiDefinition.json
│   ├── mainTemplate.json
│   └── testParameters.json
└── Data Connectors/
    ├── azuredeploy_UpwindLogsLoader_API_FunctionApp.json  <- ARM deploy template
    ├── UpwindLogsLoader_API_FunctionApp.json              <- Connector definition
    ├── createUiDef.json                                   <- Deployment wizard UI
    ├── UpwindLogsLoader.zip      <- Self-contained Function App package
    ├── host.json
    ├── requirements.txt
    ├── Logos/
    │   └── upwind.svg
    └── UpwindLogsLoader/
        ├── __init__.py
        ├── config.py
        ├── function.json
        ├── upwind_catalog_client.py
        └── upwind_client.py
```

## Deployment

Click the button below to deploy all required Azure resources (DCE, custom table, DCR, role assignment, storage, App Insights, Function App) in one step:

[![Deploy To Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#view/Microsoft_Azure_CreateUIDef/CustomDeploymentBlade/uri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FUpwind%2FData%20Connectors%2Fazuredeploy_UpwindLogsLoader_API_FunctionApp.json/uiFormDefinitionUri/https%3A%2F%2Fraw.githubusercontent.com%2FAzure%2FAzure-Sentinel%2Fmaster%2FSolutions%2FUpwind%2FData%20Connectors%2FcreateUiDef.json)

### Parameters

| Parameter                        | Description                                                     |
|----------------------------------|-----------------------------------------------------------------|
| `WorkspaceName`                  | Name of your Log Analytics / Sentinel workspace                 |
| `UpwindOrgId`                    | Upwind Organization ID (Settings → Organization)                |
| `UpwindClientId`                 | Upwind API Client ID (Settings → API Keys)                      |
| `UpwindClientSecret`             | Upwind API Client Secret                                        |

*[Content truncated...]*

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                                 |
|-------------|--------------------------------|------------------------------------------------------------------------------------|
| 3.0.1       | 12-04-2026                     | Updated **SolutionMetadata** publisherId to align the solution package metadata with publisher validation requirements. |
| 3.0.0       | 10-03-2026                     | Initial solution release.                                                          |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

