# ALC-WebCTRL

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="ALC-WebCTRL Logo" width="75" height="75">

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

The [Automated Logic WebCTRL](https://www.automatedlogic.com/en/products/webctrl-building-automation-system/) solution allows you to easily stream the audit logs from the WebCTRL SQL server hosted on Windows machines connected to your Microsoft Sentinel. This connection enables you to view dashboards, create custom alerts and improve investigation. This gives insights into your Industrial Control Systems that are monitored or controlled by the WebCTRL BAS application. 

**Underlying Microsoft Technologies used:**

 This solution is dependent on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs: 

 a. [Agent based logs collection from Windows and Linux machines](https://docs.microsoft.com/azure/azure-monitor/agents/data-sources-custom-logs)

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **Version** | 2.0.0 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2021-11-18 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ALC-WebCTRL](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ALC-WebCTRL) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Automated Logic WebCTRL ](../connectors/automatedlogicwebctrl.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`Event`](../tables/event.md) | [Automated Logic WebCTRL ](../connectors/automatedlogicwebctrl.md) | - |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Solutions Index](../solutions-index.md)

