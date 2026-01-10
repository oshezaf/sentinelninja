# Ermes Browser Security

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Ermes_Browser_Security_Logo.svg" alt="Ermes Browser Security Logo" width="75" height="75">

The [Ermes Browser Security](https://www.ermes.company) Solution for Microsoft Sentinel provides a simple way to ingest Security and Audit events from Ermes into Microsoft Sentinel.

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Ermes Cyber Security S.p.A. |
| **Support Tier** | Partner |
| **Support Link** | [https://www.ermes.company](https://www.ermes.company) |
| **Categories** | domains |
| **Version** | 3.1.0 |
| **Author** | dev@ermes.company |
| **First Published** | 2023-09-29 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Ermes%20Browser%20Security](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Ermes%20Browser%20Security) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Ermes Browser Security Events](../connectors/ermesbrowsersecurityevents.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`ErmesBrowserSecurityEvents_CL`](../tables/ermesbrowsersecurityevents-cl.md) | [Ermes Browser Security Events](../connectors/ermesbrowsersecurityevents.md) | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                 |
|-------------|--------------------------------|----------------------------------------------------|
| 3.1.0       | 12-12-2025                     | Added custom API URL support and LogData field with additional event details |
| 3.0.3       | 19-02-2024                     | Updated _solutionVersion to dataConnectorCCPVersion. <br/> Removed grant_type and added the Solution version to the query parameters |
| 3.0.2       | 23-01-2024                     | Updated paging type in **CCP Data Connector**      |
| 3.0.1       | 28-11-2023                     | Updated **CCP Data Connector**                     |
| 3.0.0       | 29-09-2023                     | Initial Solution Release                           |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

