# Sophos Cloud Optix

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/sophos_logo.svg" alt="Sophos Cloud Optix Logo" width="75" height="75">

The [Sophos](https://www.sophos.com) Cloud Optix solution allows you to easily connect your [Sophos Cloud Optix](https://www.sophos.com/en-us/products/cloud-optix) logs with Microsoft Sentinel, to view dashboards, create custom alerts, and improve investigation. 

**Underlying Microsoft Technologies used:**

 This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs: 

a. [Azure Monitor HTTP Data Collector API](https://docs.microsoft.com/azure/azure-monitor/logs/data-collector-api)

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Sophos |
| **Support Tier** | Partner |
| **Support Link** | [https://www.sophos.com/en-us/support](https://www.sophos.com/en-us/support) |
| **Categories** | domains |
| **Version** | 2.0.1 |
| **Author** | Sophos |
| **First Published** | 2022-05-02 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Sophos%20Cloud%20Optix](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Sophos%20Cloud%20Optix) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Sophos Cloud Optix](../connectors/sophoscloudoptix.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`SophosCloudOptix_CL`](../tables/sophoscloudoptix-cl.md) | [Sophos Cloud Optix](../connectors/sophoscloudoptix.md) | - |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

