# Google Apigee

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Solutions/Google%20Apigee/logo/Google-Cloud-Branding.png" alt="Google Apigee Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

The [Google ApigeeX](https://cloud.google.com/apigee/docs) solution provides the capability to ingest ApigeeX audit logs into Microsoft Sentinel using the GCP Logging API or PubSub architecture. Refer to [GCP Logging API documentation](https://cloud.google.com/logging/docs/reference/v2/rest) for more information on the Azure Function connector and the [Microsoft Sentinel documentation](https://learn.microsoft.com/azure/sentinel/connect-google-cloud-platform?tabs=terraform%2Cauditlogs) for the basics on PubSub based ingestion.

**Underlying Microsoft Technologies used:**

This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs:

 • [Microsoft Sentinel Codeless Connector Framework](https://aka.ms/Sentinel-CCP_Platform)

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **Version** | 3.1.1 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2021-10-28 |
| **Solution Folder** | [Google Apigee](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Google%20Apigee) |

## Data Connectors

This solution provides **1 data connector(s)** (plus 1 discovered⚠️):

- [[DEPRECATED] Google ApigeeX](../connectors/apigeexdataconnector.md) ⚠️
- [Google ApigeeX (via Codeless Connector Framework)](../connectors/googleapigeexlogsccpdefinition.md)

*⚠️ Discovered connector - found in solution folder but not listed in Solution JSON definition.*

## Tables Used

This solution uses **2 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`ApigeeX_CL`](../tables/apigeex-cl.md) | [[DEPRECATED] Google ApigeeX](../connectors/apigeexdataconnector.md) | - |
| [`GCPApigee`](../tables/gcpapigee.md) | [Google ApigeeX (via Codeless Connector Framework)](../connectors/googleapigeexlogsccpdefinition.md) | - |

## Content Items

This solution includes **3 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Parsers | 3 |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [ApigeeX](../content/google-apigee-apigeex-d597b0df-ea3d-479f-97ea-8c90922437a1-7eaf19c0.md) | - | [`ApigeeX_CL`](../tables/apigeex-cl.md) *(read)*<br>[`GoogleApigeeXV2_CL`](../tables/googleapigeexv2-cl.md) *(read)* |
| [ApigeeXV2](../content/google-apigee-apigeexv2-f44281ae-62a7-4043-b27a-aa6e438f3e1a-6924bb32.md) | - | - |
| [Unified_ApigeeX](../content/google-apigee-unified-apigeex-6eae941d-8cdb-45c7-9896-aab2a6082dfb-96a25c59.md) | - | [`ApigeeXV2_CL`](../tables/apigeexv2-cl.md) *(read)*<br>[`ApigeeX_CL`](../tables/apigeex-cl.md) *(read)* |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                 |
|-------------|--------------------------------|--------------------------------------------------------------------|
| 3.1.1       | 20-08-2025                     | Moving Google Apigee **CCF Data Connector** to GA					 |
| 3.1.0       | 20-05-2025                     | Migrated the Function app connector to **CCF Data Connector** and Updated the **Parser** |
| 3.1.0       | 28-02-2025                     | Added new CCP **Data Connector** to the Solution                                 |
| 3.0.0       | 05-09-2024                     | Updated the python runtime version to 3.11 in **Data Connector** Function APP    |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

