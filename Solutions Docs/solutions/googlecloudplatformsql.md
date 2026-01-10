# GoogleCloudPlatformSQL

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/google_logo.svg" alt="GoogleCloudPlatformSQL Logo" width="75" height="75">

The GCP Cloud SQL solution provides the capability to ingest [GCP Cloud SQL logs](https://cloud.google.com/sql/docs/introduction) into Microsoft Sentinel using the GCP Logging API.
  
  **Underlying Microsoft Technologies used:** 

This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs:

  • [Codeless Connector Framework(CCF)](https://learn.microsoft.com/en-us/azure/sentinel/create-codeless-connector)

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **Version** | 3.0.0 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2021-07-30 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/GoogleCloudPlatformSQL](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/GoogleCloudPlatformSQL) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [GCP Cloud SQL (via Codeless Connector Framework)](../connectors/gcpcloudsqlccfdefinition.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`GCPCloudSQL`](../tables/gcpcloudsql.md) | [GCP Cloud SQL (via Codeless Connector Framework)](../connectors/gcpcloudsqlccfdefinition.md) | - |

## Release Notes

**Version** | **Date Modified (DD-MM-YYYY)**| **ChangeHistory**                                                                         |
|------------|-------------------------------|-------------------------------------------------------------------------------------------|
| 3.0.1      | 02-09-2025                    | GCP Cloud SQL **CCF Conector** moving to GA  |
| 3.0.0      | 16-07-2025                    | Initial Solution Release and Added new **CCF Data Connector**. |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

