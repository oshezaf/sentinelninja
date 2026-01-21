# HolmSecurity

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="HolmSecurity Logo" width="75" height="75">

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

The [Holm Security](https://www.holmsecurity.com/) solution provides the capability to poll data from Holm Security Center into Microsoft Sentinel.
  
  **Underlying Microsoft Technologies used:** 

 This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs:

  a. [Azure Monitor HTTP Data Collector API](https://docs.microsoft.com/azure/azure-monitor/logs/data-collector-api)

 b. [Azure Functions](https://azure.microsoft.com/services/functions/#overview)



## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Holm Security |
| **Support Tier** | Partner |
| **Support Link** | [https://support.holmsecurity.com/](https://support.holmsecurity.com/) |
| **Categories** | domains |
| **Version** | 3.0.1 |
| **Author** | Holm Security |
| **First Published** | 2022-07-18 |
| **Solution Folder** | [HolmSecurity](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/HolmSecurity) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Holm Security Asset Data](../connectors/holmsecurityassets.md)

## Tables Used

This solution uses **2 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`net_assets_CL`](../tables/net-assets-cl.md) | [Holm Security Asset Data](../connectors/holmsecurityassets.md) | - |
| [`web_assets_CL`](../tables/web-assets-cl.md) | [Holm Security Asset Data](../connectors/holmsecurityassets.md) | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                          |
|-------------|--------------------------------|---------------------------------------------|
| 3.0.1       | 05-10-2023                     | Minor fixes |
| 3.0.0       | 28-09-2023                     | Repackaged with V3 |
| 2.0.0       | 17-02-2022                     | Initial Solution Release |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

