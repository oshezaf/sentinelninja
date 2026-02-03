# Google Cloud Platform Cloud Run

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/google_logo.svg" alt="Google Cloud Platform Cloud Run Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

The GCP Cloud Run solution provides the capability to ingest [GCP Run logs](https://cloud.google.com/run/docs/audit-logging#google.cloud.run.v2.Executions) into Microsoft Sentinel using the GCP Logging API. Refer to [GCP Cloud Run API documentation](https://cloud.google.com/run/docs/audit-logging#google.cloud.run.v2.Executions) for more information.
  
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
| **Version** | 3.0.2 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2021-07-30 |
| **Solution Folder** | [Google Cloud Platform Cloud Run](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Google%20Cloud%20Platform%20Cloud%20Run) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [GCP Cloud Run (via Codeless Connector Framework)](../connectors/gcpcloudrunlogs-connectordefinition.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`GCPCloudRun`](../tables/gcpcloudrun.md) | [GCP Cloud Run (via Codeless Connector Framework)](../connectors/gcpcloudrunlogs-connectordefinition.md) | - |

## Release Notes

**Version** | **Date Modified (DD-MM-YYYY)**| **ChangeHistory**                                                                         |
|------------|-------------------------------|-------------------------------------------------------------------------------------------|
| 3.0.1      | 02-09-2025                    | GCP Cloud Run **CCF Conector** moving to GA                                        |
| 3.0.0      | 14-07-2025                    | Initial Solution Release and Added new **CCF Data Connector**.  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

