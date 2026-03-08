# ⚠️ ESET Protect Platform

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace or not installed in Content Hub.

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/eset-logo.svg" alt="ESET Protect Platform Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | ESET Enterprise Integrations |
| **Support Tier** | Partner |
| **Support Link** | [https://help.eset.com/eset_connect/en-US/integrations.html](https://help.eset.com/eset_connect/en-US/integrations.html) |
| **Categories** | domains |
| **Version** | 3.2.0 |
| **Author** | ESET |
| **First Published** | 2024-10-29 |
| **Last Updated** | 2025-06-17 |
| **Solution Folder** | [ESET Protect Platform](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ESET%20Protect%20Platform) |

ESET Protect Platform solution for Microsoft Sentinel ingests detections from [ESET Protect Platform](https://www.eset.com/int/business/protect-platform/) using the provided [Integration REST API](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ESET%20Protect%20Platform/Data%20Connectors). 

**Underlying Microsoft Technologies used:**

The ESET Protect Platform solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs:

a. [Logs Ingestion API in Azure Monitor](https://learn.microsoft.com/en-us/azure/azure-monitor/logs/logs-ingestion-api-overview)

b. [Azure Functions](https://azure.microsoft.com/services/functions/#overview)



## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)

## Data Connectors

This solution provides **1 data connector(s)**:

- [ESET Protect Platform](../connectors/esetprotectplatform.md)

## Tables Used

This solution uses **2 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`IntegrationTableIncidents_CL`](../tables/integrationtableincidents-cl.md) | [ESET Protect Platform](../connectors/esetprotectplatform.md) | - |
| [`IntegrationTable_CL`](../tables/integrationtable-cl.md) | [ESET Protect Platform](../connectors/esetprotectplatform.md) | - |

## Content Items

This solution includes **1 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Parsers | 1 |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [ESETProtectPlatform](../parsers/esetprotectplatform.md) | - | [`IntegrationTable_CL`](../tables/integrationtable-cl.md) *(read)* |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                         |
|-------------|--------------------------------|----------------------------------------------------------------------------|
| 3.1.1       | 25-04-2025                     | Add the location parameter to ARM template and update the email address.   |
| 3.1.0       | 06-02-2025                     | Updated **Data Connector** FunctionApp code to work with old param and new |
| 3.0.0       | 04-11-2024                     | Initial Solution Release                                                   |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md) · [🔍](https://oshezaf.github.io/sentinelninja/index.html)

↑ [Back to Solutions Index](../solutions-index.md)

