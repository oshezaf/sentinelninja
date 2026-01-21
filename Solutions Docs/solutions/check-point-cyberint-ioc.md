# Check Point Cyberint IOC

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/checkpoint-cyberint.svg" alt="Check Point Cyberint IOC Logo" width="75" height="75">

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

Cyberint, a Check Point company, provides Microsoft Sentinel integration to streamline critical IOC and bring enriched threat intelligence from the Infinity External Risk Management solution into Microsoft Sentinel. This simplifies the process of tracking the status of tickets with automatic sync updates across systems. Using this new integration for Microsoft Sentinel, existing Cyberint and Microsoft Sentinel customers can easily pull logs based on Cyberint's findings into Microsoft Sentinel platform.

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Cyberint |
| **Support Tier** | Partner |
| **Support Link** | [https://cyberint.com/customer-support/](https://cyberint.com/customer-support/) |
| **Categories** | domains |
| **Version** | 3.0.1 |
| **Author** | Cyberint - support@checkpoint.com |
| **First Published** | 2025-04-29 |
| **Solution Folder** | [Check Point Cyberint IOC](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Check%20Point%20Cyberint%20IOC) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Check Point Cyberint IOC Connector](../connectors/checkpointcyberintioc.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`iocsent_CL`](../tables/iocsent-cl.md) | [Check Point Cyberint IOC Connector](../connectors/checkpointcyberintioc.md) | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**       |
| ----------- | ------------------------------ | ------------------------ |
| 3.0.1       | 12-09-2025                     | Replaces the variable reference for graphQueriesTableName with the explicit table name **'iocsent_CL'** |
| 3.0.0       | 17-06-2025                     | Initial Solution release. |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

