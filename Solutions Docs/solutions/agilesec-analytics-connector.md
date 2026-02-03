# AgileSec Analytics Connector

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Solutions/AgileSec%20Analytics%20Connector/Workbooks/Images/Logo/infosecglobal.svg" alt="AgileSec Analytics Connector Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

The AgileSec Analytics Connector solution provides the capability to ingest AgileSec Analytics Connector events into Microsoft Sentinel. 

**Underlying Microsoft Technologies used:**

 This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs: 

 a. [Azure Monitor HTTP Data Collector API](https://docs.microsoft.com/azure/azure-monitor/logs/data-collector-api)

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | InfoSecGlobal |
| **Support Tier** | Partner |
| **Support Link** | [https://www.infosecglobal.com/](https://www.infosecglobal.com/) |
| **Categories** | domains |
| **Version** | 2.0.0 |
| **Author** | InfoSecGlobal |
| **Solution Folder** | [AgileSec Analytics Connector](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/AgileSec%20Analytics%20Connector) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [InfoSecGlobal Data Connector](../connectors/infosecdataconnector.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`InfoSecAnalytics_CL`](../tables/infosecanalytics-cl.md) | [InfoSecGlobal Data Connector](../connectors/infosecdataconnector.md) | Workbooks |

## Content Items

This solution includes **1 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Workbooks | 1 |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [InfoSecGlobal](../content/agilesec-analytics-connector-infosecglobal-f1e4d51f.md) | [`InfoSecAnalytics_CL`](../tables/infosecanalytics-cl.md) |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

