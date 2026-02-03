# GoogleCloudPlatformCDN

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/google_logo.svg" alt="GoogleCloudPlatformCDN Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

The Google Cloud Platform CDN solution provides the capability to ingest [Cloud CDN Audit logs](https://cloud.google.com/cdn/docs/audit-logging) and [Cloud CDN traffic logs](https://cloud.google.com/cdn/docs/logging) into Microsoft Sentinel using the GCP Compute Engine API and GCP Logging API. 

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
| **Version** | 3.0.0 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2025-03-07 |
| **Solution Folder** | [GoogleCloudPlatformCDN](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/GoogleCloudPlatformCDN) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Google Cloud Platform CDN (via Codeless Connector Framework)](../connectors/gcpcdnlogsccpdefinition.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`GCPCDN`](../tables/gcpcdn.md) | [Google Cloud Platform CDN (via Codeless Connector Framework)](../connectors/gcpcdnlogsccpdefinition.md) | - |

## Release Notes

**Version** | **Date Modified (DD-MM-YYYY)**| **ChangeHistory**                                                                         |
|------------|-------------------------------|-------------------------------------------------------------------------------------------|
| 3.0.1      | 13-08-2025                    | Google Cloud Platform CDN **CCF Connector** moving to GA.                 |
| 3.0.0      | 20-03-2025                    | Initial Solution Release.                                                 |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

