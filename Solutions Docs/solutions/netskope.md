# Netskope

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="Netskope Logo" width="75" height="75">

The [Netskope Cloud Security Platform](https://www.netskope.com/platform) solution for Microsoft Sentinel enables you to ingest Netskope logs and events into Microsoft Sentinel. The connector provides visibility into Netskope Platform Events and Alerts in Microsoft Sentinel to improve monitoring and investigation capabilities.

**Underlying Microsoft Technologies used:**

This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs:

- [Azure Monitor HTTP Data Collector API](https://docs.microsoft.com/azure/azure-monitor/logs/data-collector-api)

- [Azure Functions](https://azure.microsoft.com/services/functions/#overview)

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Netskope |
| **Support Tier** | Partner |
| **Support Link** | [https://www.netskope.com/services#support](https://www.netskope.com/services#support) |
| **Categories** | domains |
| **Version** | 2.0.3 |
| **Author** | Netskope |
| **First Published** | 2022-05-05 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Netskope](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Netskope) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Netskope](../connectors/netskope.md)

## Tables Used

This solution uses **4 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`Netskope_Alerts_CL`](../tables/netskope-alerts-cl.md) | - | Workbooks |
| [`Netskope_CL`](../tables/netskope-cl.md) | [Netskope](../connectors/netskope.md) | - |
| [`Netskope_Events_CL`](../tables/netskope-events-cl.md) | - | Workbooks |
| [`Netskope_WebTX_CL`](../tables/netskope-webtx-cl.md) | - | Workbooks |

## Content Items

This solution includes **2 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Workbooks | 1 |
| Parsers | 1 |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [NetskopeEvents](../content/netskope-netskopeevents-8c0bf08d.md) | [`Netskope_Alerts_CL`](../tables/netskope-alerts-cl.md)<br>[`Netskope_Events_CL`](../tables/netskope-events-cl.md)<br>[`Netskope_WebTX_CL`](../tables/netskope-webtx-cl.md) |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Netskope](../content/netskope-netskope-9b3be3d9-99e1-43fa-8d82-3e90f8df7f42-9393ce81.md) ⚠️ | - | [`Netskope_CL`](../tables/netskope-cl.md) *(read)* |

> ⚠️ Items marked with ⚠️ are not listed in the Solution JSON file. They were discovered by scanning the solution folder and may be legacy items, under development, or excluded from the official solution package.

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Solutions Index](../solutions-index.md)

