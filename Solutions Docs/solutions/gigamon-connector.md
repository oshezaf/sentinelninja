# Gigamon Connector for Microsoft Sentinel Data Lake (CCF Push)

*Solution: Gigamon Connector*

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/gigamon.svg" alt="Gigamon Connector Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Gigamon |
| **Support Tier** | Partner |
| **Support Link** | [https://www.gigamon.com/](https://www.gigamon.com/) |
| **Categories** | domains |
| **Version** | 3.0.0 |
| **Author** | Gigamon |
| **Last Updated** | 2026-03-06 |
| **Solution Folder** | [Gigamon Connector](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Gigamon%20Connector) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/gigamon-inc.microsoft-sentinel-solution-gigamon) · Popularity: 🟡 Low (33%) |

Gigamon Application Metadata Intelligence empowers your Observability, Security Information and Event Management (SIEM), and Network Performance Monitoring tools with critical metadata attributes across thousands of business, consumer, and IT applications and services. Get deep application visibility to rapidly pinpoint performance bottlenecks, quality issues, and potential network security risks. Application Metadata Intelligence (AMI) helps you monitor and manage complex digital applications for your digital transformation initiatives. This can be achieved through the Gigamon Connector Solution by sending the AMI metadata to Microsoft Sentinel.  Some benefits to highlight are Rich Actionable Insights, Boost Security Posture etc..

 For more, [click here](https://www.gigamon.com/products/optimize-traffic/application-intelligence/application-metadata.html) 

**Underlying Microsoft Technologies used:**

 This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs: 

 a. [Azure Monitor HTTP Data Collector API](https://docs.microsoft.com/azure/azure-monitor/logs/data-collector-api)

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)

## Data Connectors

This solution provides **1 data connector(s)**:

- [Gigamon AMX Connector](../connectors/gigamondefinition.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`GigamonV2_CL`](../tables/gigamonv2-cl.md) | [Gigamon AMX Connector](../connectors/gigamondefinition.md) | Workbooks |

## Content Items

This solution includes **1 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Workbooks | 1 |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [Gigamon](../content/gigamon-connector-gigamon-07ba033c.md) | [`GigamonV2_CL`](../tables/gigamonv2-cl.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                          |
|-------------|--------------------------------|---------------------------------------------|
| 3.0.1       | 19-02-2026                     | **CCF** Push Connector.                     |  
| 3.0.0       | 25-10-2023                     | Initial Solution Release.                   |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

