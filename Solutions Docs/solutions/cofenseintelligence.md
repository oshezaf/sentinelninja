# ⚠️ CofenseIntelligence

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace or not installed in Content Hub.

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/CofenseTriage.svg" alt="CofenseIntelligence Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

The Cofense-Intelligence solution provides the capability to ingest Threat Indicators from the Cofense Intelligence platform to Threat Intelligence Indicators in Microsoft Sentinel and Cofense Intelligence Threat Intelligence Indicators from Microsoft Sentinel Threat Intelligence to Microsoft Defender for Endpoints. 

**Underlying Microsoft Technologies used:**

This solution takes a dependency on the following technologies, and some of these dependencies either may be in 

**Underlying Microsoft Technologies used:**

This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs:

a.[Azure Monitor HTTP Data Collector API](https://learn.microsoft.com/azure/azure-monitor/logs/data-collector-api)

b.[Azure Functions](https://azure.microsoft.com/products/functions/#overview)

c.[Microsoft Threat Intelligence Indicator API](https://learn.microsoft.com/en-us/rest/api/securityinsights/preview/threat-intelligence-indicator)

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Cofense Support |
| **Support Tier** | Partner |
| **Support Link** | [https://cofense.com/contact-support/](https://cofense.com/contact-support/) |
| **Categories** | domains |
| **Version** | 3.0.0 |
| **Author** | Cofense - support@cofense.com |
| **First Published** | 2023-05-26 |
| **Last Updated** | 2024-05-26 |
| **Solution Folder** | [CofenseIntelligence](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CofenseIntelligence) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Cofense Intelligence Threat Indicators Ingestion](../connectors/cofenseintelligence.md)

## Tables Used

This solution uses **2 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`Malware_Data_CL`](../tables/malware-data-cl.md) | [Cofense Intelligence Threat Indicators Ingestion](../connectors/cofenseintelligence.md) | Workbooks |
| [`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) | [Cofense Intelligence Threat Indicators Ingestion](../connectors/cofenseintelligence.md) | Workbooks |

## Content Items

This solution includes **1 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Workbooks | 1 |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [CofenseIntelligenceThreatIndicators](../content/cofenseintelligence-cofenseintelligencethreatindicators-d6be930b.md) | [`Malware_Data_CL`](../tables/malware-data-cl.md)<br>[`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                          |
|-------------|--------------------------------|---------------------------------------------|
| 3.0.0       | 10-12-2022                     | Initial Solution Release                    |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

