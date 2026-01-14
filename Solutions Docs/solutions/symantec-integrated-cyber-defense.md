# Symantec Integrated Cyber Defense

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/symantec_logo.svg" alt="Symantec Integrated Cyber Defense Logo" width="75" height="75">

The [Symantec Integrated Cyber Defense Exchange](https://www.broadcom.com/products/cyber-security/integrated-cyber-defense/integrated-cyber-defense-exchange) (ICDx) solution allows you to easily connect your Symantec security solutions logs with Microsoft Sentinel, to view dashboards, create custom alerts, and improve investigation.

**Underlying Microsoft Technologies used:**

This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs:

a. [Azure Monitor HTTP Data Collector API](https://docs.microsoft.com/azure/azure-monitor/logs/data-collector-api)

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **Version** | 2.0.0 |
| **Author** | Symantec |
| **First Published** | 2022-06-02 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Symantec%20Integrated%20Cyber%20Defense](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Symantec%20Integrated%20Cyber%20Defense) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Symantec Integrated Cyber Defense Exchange](../connectors/symantec.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`SymantecICDx_CL`](../tables/symantecicdx-cl.md) | [Symantec Integrated Cyber Defense Exchange](../connectors/symantec.md) | - |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Solutions Index](../solutions-index.md)

