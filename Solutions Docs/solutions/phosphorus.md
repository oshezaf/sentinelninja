# Phosphorus Connector for Microsoft Sentinel

*Solution: Phosphorus*

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Phosphorus.svg" alt="Phosphorus Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Phosphorus Inc. |
| **Support Tier** | Partner |
| **Support Link** | [https://phosphorus.io](https://phosphorus.io) |
| **Categories** | domains |
| **Version** | 1.0.0 |
| **Author** | Phosphorus |
| **First Published** | 2024-08-13 |
| **Last Updated** | 2024-08-13 |
| **Solution Folder** | [Phosphorus](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Phosphorus) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/4043.microsoft-sentinel-solution-phosphorus) |
| **Popularity** | ⚪ Very Low (3%) |
| **Rating** | ★★★★★ 5.0/5 (1 ratings) |

Phosphorus Microsoft Sentinel Solution is a data connector used to ingest device data logs into Microsoft Sentinel.

**Underlying Microsoft Technologies used:**

This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs

 a. [Codeless Connector Platform](https://docs.microsoft.com/azure/sentinel/create-codeless-connector?tabs=deploy-via-arm-template%2Cconnect-via-the-azure-portal)

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Additional Documentation](#additional-documentation)

## Data Connectors

This solution provides **1 data connector(s)**:

- [Phosphorus Devices](../connectors/phosphorus-polling.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`Phosphorus_CL`](../tables/phosphorus-cl.md) | [Phosphorus Devices](../connectors/phosphorus-polling.md) | - |

## Additional Documentation

> 📄 *Source: [Phosphorus/README.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Phosphorus/README.md)*

This repository contains all resources for the Phosphorus Azure Sentinel Solution.
The Phosphorus Solution is built in order to easily integrate Phosphorus with Azure Sentinel.

By deploying this solution, you'll be able to ingest device data from Phosphorus into Microsoft Sentinel

The solution consists out of the following resources:
- A codeless API connector to ingest data into Sentinel.

## Data Connector Deployment
The data connector will retrieve the Phosphorus device data through the Phosphorus REST API.

This is a codeless API connector. After the deployment of the ARM template, the connector will be available in the Data Connectors list to connect.

Input the Phosphorus Instance Domain name, Integration Name, API key , click Connect button and Microsoft Sentinel will start to pull in device data.

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                          |
|-------------|--------------------------------|---------------------------------------------|
| 3.0.0       | 15-08-2024                     | Initial Solution Release |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

