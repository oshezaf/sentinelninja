# Sentinel Data and Log Connector for Upwind

*Solution: Upwind*

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Solutions/Upwind/Data%20Connectors/Logos/upwind.svg" alt="Upwind Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Upwind |
| **Support Tier** | Partner |
| **Support Link** | [https://upwind.io](https://upwind.io) |
| **Categories** | Security - Cloud Security,IT Operations |
| **Version** | 3.0.4 |
| **Author** | Upwind - support@upwind.io |
| **First Published** | 2026-03-10 |
| **Last Updated** | 2026-10-21 |
| **Solution Folder** | [Upwind](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Upwind) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/upwindsecurityinc1754856292483.azure-sentinel-solution-upwind-logs-loader) · Popularity: 🔵 Medium (67%) |

The **Upwind Catalog Loader** solution ingests inventory/catalog assets, vulnerability findings, threat detections, threat events, threat stories, and configuration findings from the [Upwind](https://upwind.io) cloud security platform into Microsoft Sentinel custom tables using an Azure Function and the [Azure Monitor Ingestion API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview) (DCE/DCR).

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

- [Upwind Catalog Loader (Ingestion API)](../connectors/upwindcatalogloader.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`UpwindCatalogAssets_CL`](../tables/upwindcatalogassets-cl.md) | [Upwind Catalog Loader (Ingestion API)](../connectors/upwindcatalogloader.md) | - |

## Additional Documentation

> 📄 *Source: [Upwind/README.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Upwind/README.md)*

# Upwind Sentinel Connector

Microsoft Sentinel data connector that ingests data from **six Upwind API endpoints** — inventory/catalog assets (all categories), vulnerability findings, threat detections, threat events, threat stories, and configuration (posture) findings — from the [Upwind](https://upwind.io) cloud security platform into six custom Log Analytics tables, using an Azure Function and the [Azure Monitor Ingestion API](https://learn.microsoft.com/azure/azure-monitor/logs/logs-ingestion-api-overview) (DCE/DCR).

## What it does

- Timer-triggered Azure Function (Python 3.11) that runs on a configurable CRON schedule (default: top of every hour)
- Authenticates to Upwind via OAuth2 `client_credentials` flow
- Fetches all six datasets on every run, **independently** — if one Upwind endpoint fails or isn't entitled for your org, the others still complete
- Ships each dataset to its own DCR stream / custom table via the Azure Monitor Ingestion API

| Dataset | Upwind endpoint | Sync style | Destination table |
|---|---|---|---|
| Inventory / catalog assets (all categories) | `POST /v2/organizations/{orgId}/inventory/catalog/assets/search` | Time-windowed by last update | `UpwindCatalogAssets_CL` |
| Vulnerability findings | `GET /v1/organizations/{orgId}/vulnerability-findings` | Time-windowed by first seen | `UpwindVulnerabilityFindings_CL` |
| Threat detections | `GET /v1/organizations/{orgId}/threat-detections` | Time-windowed | `UpwindThreatDetections_CL` |
| Threat events | `GET /v1/organizations/{orgId}/threat-events` | Time-windowed | `UpwindThreatEvents_CL` |
| Threat stories | `POST /v2/organizations/{orgId}/threats/stories/search` | Time-windowed | `UpwindThreatStories_CL` |
| Configuration (posture) findings | `POST /v2/organizations/{orgId}/configurations/findings/search` | Time-windowed | `UpwindConfigurationFindings_CL` |


*[Content truncated...]*

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                                 |
|-------------|--------------------------------|------------------------------------------------------------------------------------|
| 3.0.4       | 21-10-2026                     | Added instructions for updating an existing deployment to the data connector page, and replaced the retired `UpwindThreatLookbackMinutes` parameter with `UpwindCatalogSchedule`. Connector code since 3.0.3: each run fetches only what changed in its time window and stays inside the Function App timeout, with a periodic full catalog sync, and vulnerability findings fill the `exploitable`, `internet_exposure`, `fix`, `fix_available`, `image_name` and `status` columns. To get it, redeploy the Function App with **Deploy to Azure**. |
| 3.0.3       | 28-07-2026                     | Expanded ingestion from 1 to 6 Upwind API endpoints, fixed asset ingestion and deployment issues, enabled cross-resource-group Log Analytics support, and resolved custom-table schema conflicts by renaming reserved columns. |
| 3.0.2       | 28-04-2026                     | Fixed Function App deployment: restructured zip package to flat layout and removed separate App Service Plan for correct code deployment. |
| 3.0.1       | 12-04-2026                     | Updated **SolutionMetadata** publisherId to align the solution package metadata with publisher validation requirements. |
| 3.0.0       | 10-03-2026                     | Initial solution release.                                                          |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

