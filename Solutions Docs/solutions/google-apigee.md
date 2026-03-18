# Google ApigeeX

*Solution: Google Apigee*

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Solutions/Google%20Apigee/logo/Google-Cloud-Branding.png" alt="Google Apigee Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

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
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/azuresentinel.azure-sentinel-solution-googleapigeex) · Popularity: 🔵 Medium (76%) |

The [Google ApigeeX](https://cloud.google.com/apigee/docs) solution provides the capability to ingest ApigeeX audit logs into Microsoft Sentinel using the GCP Logging API or PubSub architecture. Refer to [GCP Logging API documentation](https://cloud.google.com/logging/docs/reference/v2/rest) for more information on the Azure Function connector and the [Microsoft Sentinel documentation](https://learn.microsoft.com/azure/sentinel/connect-google-cloud-platform?tabs=terraform%2Cauditlogs) for the basics on PubSub based ingestion.

**Underlying Microsoft Technologies used:**

This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs:

 • [Microsoft Sentinel Codeless Connector Framework](https://aka.ms/Sentinel-CCP_Platform)

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)

## Data Connectors

This solution provides **1 data connector(s)** (plus 1 discovered⚠️):

- [[DEPRECATED] Google ApigeeX](../connectors/apigeexdataconnector.md) ⚠️ 🔶
- [Google ApigeeX (via Codeless Connector Framework)](../connectors/googleapigeexlogsccpdefinition.md)

> 🔍 **Discovered:** This item was discovered by scanning the solution folder but is not listed in the Solution JSON file.

> 🔶 **CLv1:** This connector ingests into a table that uses the legacy Custom Log V1 schema format with type-suffixed column names (e.g. `_s`, `_d`, `_b`, `_t`, `_g`). Note: identification is based on column name suffixes which are also permitted in CLv2, so this classification may not always be accurate.


## Tables Used

This solution uses **2 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`ApigeeX_CL`](../tables/apigeex-cl.md) 🔶 | [[DEPRECATED] Google ApigeeX](../connectors/apigeexdataconnector.md) | - |
| [`GCPApigee`](../tables/gcpapigee.md) | [Google ApigeeX (via Codeless Connector Framework)](../connectors/googleapigeexlogsccpdefinition.md) | - |


> 🔶 **CLv1:** This table uses the legacy Custom Log V1 schema format with type-suffixed column names (e.g. `_s`, `_d`, `_b`, `_t`, `_g`). Note: identification is based on column name suffixes which are also permitted in CLv2, so this classification may not always be accurate.

## Content Items

This solution includes **3 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Parsers | 3 |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [ApigeeX](../parsers/apigeex.md) | - | [`ApigeeX_CL`](../tables/apigeex-cl.md) *(read)*<br>[`GoogleApigeeXV2_CL`](../tables/googleapigeexv2-cl.md) *(read)* |
| [ApigeeXV2](../parsers/apigeexv2.md) | - | - |
| [Unified_ApigeeX](../parsers/unified-apigeex.md) | - | [`ApigeeXV2_CL`](../tables/apigeexv2-cl.md) *(read)*<br>[`ApigeeX_CL`](../tables/apigeex-cl.md) *(read)* |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                 |
|-------------|--------------------------------|--------------------------------------------------------------------|
| 3.1.1       | 20-08-2025                     | Moving Google Apigee **CCF Data Connector** to GA					 |
| 3.1.0       | 20-05-2025                     | Migrated the Function app connector to **CCF Data Connector** and Updated the **Parser** |
| 3.1.0       | 28-02-2025                     | Added new CCP **Data Connector** to the Solution                                 |
| 3.0.0       | 05-09-2024                     | Updated the python runtime version to 3.11 in **Data Connector** Function APP    |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

