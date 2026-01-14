# ⚠️ ESET Inspect

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace.

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Solutions/ESETPROTECT/Workbooks/Images/Logo/eset.svg" alt="ESET Inspect Logo" width="75" height="75">

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

ESET Inspect solution for Microsoft Sentinel ingest detections from [ESET Inspect](https://www.eset.com/int/business/solutions/xdr-extended-detection-and-response/) using the provided [REST API](https://help.eset.com/ei_navigate/1.7/en-US/api.html). This API is present in ESET Inspect version 1.4 and later.

**Underlying Microsoft Technologies used:**

This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs:

a. [Azure Monitor HTTP Data Collector API](https://docs.microsoft.com/azure/azure-monitor/logs/data-collector-api)

b. [Azure Functions](https://azure.microsoft.com/services/functions/#overview)

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | ESET Enterprise |
| **Support Tier** | Partner |
| **Support Link** | [https://www.eset.com/int/business/solutions/endpoint-detection-and-response/](https://www.eset.com/int/business/solutions/endpoint-detection-and-response/) |
| **Categories** | domains |
| **Version** | 2.0.0 |
| **Author** | ESET Netherlands |
| **First Published** | 2022-06-01 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ESET%20Inspect](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ESET%20Inspect) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [ESET Inspect](../connectors/esetinspect.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`ESETInspect_CL`](../tables/esetinspect-cl.md) | [ESET Inspect](../connectors/esetinspect.md) | - |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Solutions Index](../solutions-index.md)

