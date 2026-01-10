# Datalake2Sentinel

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/OrangeCyberdefenseLogo.svg" alt="Datalake2Sentinel Logo" width="75" height="75">

The Datalake2Sentinel solution is a Microsoft Sentinel data connector, that allows you to ingest threat indicators from Orange Cyberdefense Threat Intelligence platform's Datalake into Microsoft Sentinel via the Upload Indicators REST API.



## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Orange Cyberdefense |
| **Support Tier** | Partner |
| **Support Link** | [https://www.orangecyberdefense.com/global/contact](https://www.orangecyberdefense.com/global/contact) |
| **Categories** | domains,verticals |
| **Version** | 3.0.0 |
| **Author** | OrangeCyberdefense |
| **First Published** | 2024-01-15 |
| **Last Updated** | 2024-01-15 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Datalake2Sentinel](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Datalake2Sentinel) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Datalake2Sentinel](../connectors/datalake2sentinelconnector.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) | [Datalake2Sentinel](../connectors/datalake2sentinelconnector.md) | - |

## Additional Documentation

> 📄 *Source: [Datalake2Sentinel/README.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Datalake2Sentinel/README.md)*

The Datalake to Microsoft Sentinel integration allows you to upload indicators from Orange Cyberdefense **Datalake** Platform to Microsoft Sentinel.

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                   |
| ----------- | ------------------------------ | -------------------------------------|
| 3.0.0       | 31-01-2024                     | Initial Solution Release             |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

