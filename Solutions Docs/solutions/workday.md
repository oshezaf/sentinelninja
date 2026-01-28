# Workday

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/workday-logo.svg" alt="Workday Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

The [Workday](https://www.workday.com/) solution for Microsoft Sentinel enables you to ingest User Activity Logs from Workday into Microsoft Sentinel using [Workday's API](https://community.workday.com/sites/default/files/file-hosting/restapi/index.html#privacy/v1/get-/activityLogging). 

**Underlying Microsoft Technologies used:**

This solution takes a dependency on the following technologies, and some of these dependencies either may be in Preview state or might result in additional ingestion or operational costs:

a. [Codeless Connector Platform (CCP)](https://learn.microsoft.com/en-us/azure/sentinel/create-custom-connector#connect-with-the-codeless-connector-platform).

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **Version** | 3.0.3 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2024-02-15 |
| **Solution Folder** | [Workday](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Workday) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Workday User Activity](../connectors/workdayccpdefinition.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`ASimAuditEventLogs`](../tables/asimauditeventlogs.md) | [Workday User Activity](../connectors/workdayccpdefinition.md) | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                           |
|-------------|--------------------------------|--------------------------------------------------------------|
| 3.0.3       | 23-12-2025                     | Updated page size for the Workday **Data connector** and configure the query window.|
| 3.0.2       | 02-04-2025                     | Updated **Data Connector** guidelines.     |
| 3.0.1       | 10-01-2025                     | Transitioned the **CCP Connector** to General Availability (GA).     |
| 3.0.0       | 13-03-2024                     | Initial Solution Release.                                     |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

