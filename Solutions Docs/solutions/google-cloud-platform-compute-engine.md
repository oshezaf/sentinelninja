# Google Cloud Platform Compute Engine

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/google_logo.svg" alt="Google Cloud Platform Compute Engine Logo" width="75" height="75">

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

The Google Cloud Platform Compute Engine solution provides the capability to ingest [Compute Engine Audit logs](https://cloud.google.com/compute/docs/logging/audit-logging) into Microsoft Sentinel using the Compute Engine API.

**Underlying Microsoft Technologies used:**

This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs

 • [Codeless Connector Framework(CCF)](https://learn.microsoft.com/en-us/azure/sentinel/create-codeless-connector)

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com/](https://support.microsoft.com/) |
| **Categories** | domains |
| **Version** | 3.0.1 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2022-07-07 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Google%20Cloud%20Platform%20Compute%20Engine](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Google%20Cloud%20Platform%20Compute%20Engine) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Google Cloud Platform Compute Engine (via Codeless Connector Framework)](../connectors/gcpcomputeenginelogsccpdefinition.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`GCPComputeEngine`](../tables/gcpcomputeengine.md) | [Google Cloud Platform Compute Engine (via Codeless Connector Framework)](../connectors/gcpcomputeenginelogsccpdefinition.md) | - |

## Release Notes

**Version** | **Date Modified (DD-MM-YYYY)**| **ChangeHistory**                                                                         |
|------------|-------------------------------|-------------------------------------------------------------------------------------------|
| 3.0.1      | 28-08-2025                    | Moving Google Cloud Platform Compute Engine **CCF Data Connector** to GA.                                               |
| 3.0.0      | 17-07-2025                    | Initial Solution Release.                                               |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Solutions Index](../solutions-index.md)

