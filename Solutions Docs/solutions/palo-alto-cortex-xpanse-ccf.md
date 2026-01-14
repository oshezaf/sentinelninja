# Palo Alto Cortex Xpanse CCF

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="Palo Alto Cortex Xpanse CCF Logo" width="75" height="75">

The [Palo Alto Cortex Xpanse ](https://www.paloaltonetworks.com/cortex/cortex-xpanse) data connector allows ingesting logs from the Palo Alto Cortex Xpanse API into Microsoft Sentinel. The data connector is built on Microsoft Sentinel Codeless Connector Framework. It uses the Palo Alto Cortex Xpanse API to fetch alerts logs and it supports DCR-based [ingestion time transformations](https://docs.microsoft.com/azure/azure-monitor/logs/custom-logs-overview) that parses the received security data into a custom table, thus resulting in better performance.

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **Version** | 3.0.0 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2024-12-07 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Palo%20Alto%20Cortex%20Xpanse%20CCF](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Palo%20Alto%20Cortex%20Xpanse%20CCF) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Palo Alto Cortex Xpanse (via Codeless Connector Framework)](../connectors/paloaltoexpanseccpdefinition.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`CortexXpanseAlerts_CL`](../tables/cortexxpansealerts-cl.md) | [Palo Alto Cortex Xpanse (via Codeless Connector Framework)](../connectors/paloaltoexpanseccpdefinition.md) | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                       |
|-------------|--------------------------------|--------------------------------------------------------------------------|
| 3.0.1       | 07-10-2025                     | Palo Alto Cortex Xpanse CCF **Data Connector** Moving to GA. |
| 3.0.0       | 04-08-2025                     | Initial Solution Release. <br/>New CCF **Data Connector** 'Palo Alto Cortex Xpanse CCF'.                                                |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Solutions Index](../solutions-index.md)

