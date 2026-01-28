# Common Event Format

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="Common Event Format Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

The Common Event Format (CEF) solution for Microsoft Sentinel allows you to ingest logs from any product and/or appliance that can send logs in the [Common Event Format (CEF) over Syslog messages](https://docs.microsoft.com/azure/sentinel/connect-common-event-format). 

Installing this solution will deploy two data connectors,

1. Common Event Format via AMA - This data connector helps in ingesting CEF formatted logs into your Log Analytics Workspace using the new Azure Monitor Agent. Learn more about ingesting using the new Azure Monitor Agent [here](https://learn.microsoft.com/azure/sentinel/connect-cef-ama). Microsoft recommends using this Data Connector
2. Common Event Format via Legacy Agent - This data connector helps in ingesting CEF formatted logs into your Log Analytics Workspace using the legacy Log Analytics agent.

<P style="color:red">**NOTE**: Microsoft recommends Installation of Common Event Format via AMA. Legacy connector uses the Log Analytics agent which is about to be deprecated by **Aug 31, 2024,** and thus should only be installed where AMA is not supported.</p>

**Underlying Microsoft Technologies used:**

 This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs: 

 a. [Agent-based log collection (CEF over Syslog)](https://docs.microsoft.com/azure/sentinel/connect-common-event-format)

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **Version** | 3.0.5 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2022-05-30 |
| **Solution Folder** | [Common Event Format](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Common%20Event%20Format) |

## Data Connectors

This solution provides **1 data connector(s)** (plus 1 discovered⚠️):

- [Common Event Format (CEF)](../connectors/cef.md)
- [Common Event Format (CEF) via AMA](../connectors/cefama.md) ⚠️

*⚠️ Discovered connector - found in solution folder but not listed in Solution JSON definition.*

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | [Common Event Format (CEF)](../connectors/cef.md), [Common Event Format (CEF) via AMA](../connectors/cefama.md) | Workbooks |

## Content Items

This solution includes **1 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Workbooks | 1 |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [CEFOverviewWorkbook](../content/common-event-format-cefoverviewworkbook-a335b98c.md) | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                           |
|-------------|--------------------------------|------------------------------------------------------------------------------|
| 3.0.6       | 20-08-2025                     | The main template solution has been updated by changing arrays to fields for datatypes, graphqueries and samplequeries. |
| 3.0.5       | 08-07-2025                     | Modifying the availability status.|
| 3.0.4       | 24-06-2025                     | Updated Connector kind of Legacy CEF **Data Connector** so that the queries will be reflected.|
| 3.0.3       | 18-06-2025                     | Updated Connectivity Criteria for Legacy CEF **Data Connector** to add Device Vendors|
| 3.0.2       | 30-04-2025                     | Updated Connectivity Criteria for CEFAMA **Data Connector**                  |
| 3.0.1       | 04-07-2024                     | CEFOverview workbook added                                                   |
| 3.0.0       | 22-05-2024                     | Updated connectivity criteria for **Data Connector**   					  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

