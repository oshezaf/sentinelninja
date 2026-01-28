# GoogleCloudPlatformNAT

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/google_logo.svg" alt="GoogleCloudPlatformNAT Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

The Google Cloud Platform NAT solution provides the capability to ingest [Cloud NAT traffic logs](https://cloud.google.com/nat/docs/monitoring) and [Cloud NAT Audit logs](https://cloud.google.com/nat/docs/audit-logging) into Microsoft Sentinel using the GCP Compute Engine API and GCP Logging API. 

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
| **First Published** | 2025-05-29 |
| **Solution Folder** | [GoogleCloudPlatformNAT](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/GoogleCloudPlatformNAT) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Google Cloud Platform NAT (via Codeless Connector Framework)](../connectors/gcpnatlogsccpdefinition.md)

## Tables Used

This solution uses **2 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`GCPNAT`](../tables/gcpnat.md) | [Google Cloud Platform NAT (via Codeless Connector Framework)](../connectors/gcpnatlogsccpdefinition.md) | - |
| [`GCPNATAudit`](../tables/gcpnataudit.md) | [Google Cloud Platform NAT (via Codeless Connector Framework)](../connectors/gcpnatlogsccpdefinition.md) | - |

## Release Notes

**Version** | **Date Modified (DD-MM-YYYY)**| **ChangeHistory**                                                                         |
|------------|-------------------------------|-------------------------------------------------------------------------------------------|
| 3.0.1      | 03-09-2025                    | Google Cloud Platform NAT **CCF Data Connector** moving to GA							 |
| 3.0.0      | 17-07-2025                    | Initial Solution Release. <br/> Added new **CCF Connector** - *GCPNATLogsCCPDefinition.*	 |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

