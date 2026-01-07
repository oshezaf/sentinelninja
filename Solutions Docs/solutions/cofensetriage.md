# CofenseTriage

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/CofenseTriage.svg" alt="CofenseTriage Logo" width="75" height="75">

Cofense Triage for Microsoft Sentinel.

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Cofense Support |
| **Support Tier** | Partner |
| **Support Link** | [https://cofense.com/contact-support/](https://cofense.com/contact-support/) |
| **Categories** | domains |
| **Version** | 3.0.0 |
| **Author** | Cofense - support@cofense.com |
| **First Published** | 2023-03-24 |
| **Last Updated** | 2023-03-24 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CofenseTriage](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CofenseTriage) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Cofense Triage Threat Indicators Ingestion](../connectors/cofensetriage.md)

## Tables Reference

This solution uses **3 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`Cofense_Triage_failed_indicators_CL`](../tables/cofense-triage-failed-indicators-cl.md) | [Cofense Triage Threat Indicators Ingestion](../connectors/cofensetriage.md) | - |
| [`Report_links_data_CL`](../tables/report-links-data-cl.md) | [Cofense Triage Threat Indicators Ingestion](../connectors/cofensetriage.md) | Workbooks |
| [`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) | [Cofense Triage Threat Indicators Ingestion](../connectors/cofensetriage.md) | - |

## Content Items

This solution includes **1 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Workbooks | 1 |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [CofenseTriageThreatIndicators](../content/cofensetriage-cofensetriagethreatindicators-b9ec5acc.md) | [`Report_links_data_CL`](../tables/report-links-data-cl.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                          |
|-------------|--------------------------------|---------------------------------------------|
| 3.0.0       | 20-06-2024                     | Updated Data Connector to retry failed indicators.                    |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
