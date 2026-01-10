# GoogleCloudPlatformResourceManager

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/google_logo.svg" alt="GoogleCloudPlatformResourceManager Logo" width="75" height="75">

The Google Cloud Platform Resource Manager solution provides the capability to ingest [Admin Activity and Data Access Audit logs](https://cloud.google.com/resource-manager/docs/audit-logging) into Microsoft Sentinel using the GCP Cloud Resource Manager API and GCP Logging API. 

**Underlying Microsoft Technologies used:**

This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs

 • [Codeless Connector Framework (CCF)](https://learn.microsoft.com/en-us/azure/sentinel/create-codeless-connector)

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com/](https://support.microsoft.com/) |
| **Categories** | domains |
| **Version** | 3.0.1 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2025-03-07 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/GoogleCloudPlatformResourceManager](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/GoogleCloudPlatformResourceManager) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Google Cloud Platform Resource Manager (via Codeless Connector Framework)](../connectors/gcpresourcemanagerlogsccfdefinition.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`GCPResourceManager`](../tables/gcpresourcemanager.md) | [Google Cloud Platform Resource Manager (via Codeless Connector Framework)](../connectors/gcpresourcemanagerlogsccfdefinition.md) | - |

## Release Notes

**Version** | **Date Modified (DD-MM-YYYY)**| **ChangeHistory**                                                                         |
|------------|-------------------------------|-------------------------------------------------------------------------------------------|
| 3.0.1      | 02-09-2025                    | GCP Resource Manager **CCF Conector** moving to GA                                        |
| 3.0.0      | 18-06-2025                    | Initial Solution Release.                                               |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

