# OpenCTI

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="OpenCTI Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **Version** | 2.0.0 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2022-09-22 |
| **Last Updated** | 2022-09-22 |
| **Solution Folder** | [OpenCTI](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/OpenCTI) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/azuresentinel.azure-sentinel-solution-opencti) |
| **Popularity** | 🔵 Medium (78%) |
| **Rating** | ★★★☆☆ 3.0/5 (2 ratings) |

The [OpenCTI](https://www.filigran.io/en/products/opencti/) solution for Microsoft Sentinel enables you to ingest threat intelligence data from OpenCTI platform into Microsoft Sentinel. This solution includes SOAR Connector and Playbooks which leverage OpenCTI indicators data to not only enrich Microsoft Sentinel incidents but also add indicators to OpenCTI.

 

## Data Connectors

**This solution does not include data connectors.**

This solution may contain other components such as analytics rules, workbooks, hunting queries, or playbooks.

## Content Items

This solution includes **4 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Playbooks | 4 |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Create Indicator - OpenCTI](../content/opencti-create-indicator-opencti-6ab19615.md) | This playbook adds new indicator in OpenCTI based on the entities info present in Sentinel incident.... | - |
| [Entity (IP, URL, FileHash, Account, Host) Enrichment - OpenCTI](../content/opencti-entity-ip,-url,-filehash,-account,-host-enrichment-opencti-75a41abc.md) | This playbook search in OpenCTI for indicatoes based on the entities (Account, Host, IP, FileHash, U... | - |
| [Read Stream- OpenCTI Indicators](../content/opencti-read-stream-opencti-indicators-996513dc.md) | This playbook fetches indicators from OpenCTI and send to Sentinel. Supported types are Domain, File... | - |
| [Send to Security Graph API - Batch Import (OpenCTI)](../content/opencti-send-to-security-graph-api-batch-import-opencti-5f826cb2.md) | This playbook sends messages to Security GraphAPI in batches | - |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

