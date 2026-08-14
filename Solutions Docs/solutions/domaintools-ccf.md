# ⚠️ DomainTools CCF

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace or not installed in Content Hub.

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/DomainTools.svg" alt="DomainTools CCF Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | DomainTools |
| **Support Tier** | Partner |
| **Support Link** | [https://www.domaintools.com/support/](https://www.domaintools.com/support/) |
| **Categories** | Security - Threat Intelligence |
| **Version** | 3.0.0 |
| **Author** | DomainTools - memberservices@domaintools.com |
| **First Published** | 2025-11-30 |
| **Solution Folder** | [DomainTools CCF](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/DomainTools%20CCF) |

The [Domaintools Threat Intelligence Feeds](https://www.domaintools.com/products/threat-intelligence-feeds/) solution for Microsoft Sentinel contains CCF-based data connector that ingests domain-related threat intelligence from Domain tools including Newly Observed Domains (NOD), Newly Observed Hostnames (NOH), Newly Active Domains (NAD), and Domain Discovery. The solution also provides an analytic rule that automatically creates incidents when new domains are ingested, enabling security teams to quickly detect and investigate potentially malicious domains. In addition, a workbook is included to visualize domain activity, ingestion trends, and correlations with security telemetry, helping SOC analysts improve threat detection and response.

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)

## Data Connectors

This solution provides **1 data connector(s)**:

- [DomainTools Threat Intelligence Domain Feed](../connectors/domaintoolsccfdefinition.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`DomainToolsThreatIntelDomains_CL`](../tables/domaintoolsthreatinteldomains-cl.md) | [DomainTools Threat Intelligence Domain Feed](../connectors/domaintoolsccfdefinition.md) | Analytics, Workbooks |

## Content Items

This solution includes **6 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 4 |
| Workbooks | 1 |
| Parsers | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [DomainTools New Domain Discovery Indicators Ingested](../content/domaintools-ccf-domaintools-new-domain-discovery-indicators-ingested-f8c223c1-1a28-4b28-8e9f-5e33b610916b-b02c3e11.md) | Medium | - | [`DomainToolsThreatIntelDomains_CL`](../tables/domaintoolsthreatinteldomains-cl.md) |
| [DomainTools Newly Added Domains Feeds Ingested](../content/domaintools-ccf-domaintools-newly-added-domains-feeds-ingested-f8c223c1-1a28-4b28-8e9f-5e34b610916b-f2a08b02.md) | Medium | - | [`DomainToolsThreatIntelDomains_CL`](../tables/domaintoolsthreatinteldomains-cl.md) |
| [DomainTools Newly Observed Domains Feeds Ingested](../content/domaintools-ccf-domaintools-newly-observed-domains-feeds-ingested-f8c223c1-1a28-4b28-8e9f-5e35b610916b-f546635e.md) | Medium | - | [`DomainToolsThreatIntelDomains_CL`](../tables/domaintoolsthreatinteldomains-cl.md) |
| [DomainTools Newly Observed Hostnames Feeds Ingested](../content/domaintools-ccf-domaintools-newly-observed-hostnames-feeds-ingested-f8c223c1-1a28-4b28-8e9f-5e36b610916b-a022e58d.md) | Medium | - | [`DomainToolsThreatIntelDomains_CL`](../tables/domaintoolsthreatinteldomains-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [DomainTools_workbook](../content/domaintools-ccf-domaintools-workbook-f4481e81.md) | [`DomainToolsThreatIntelDomains_CL`](../tables/domaintoolsthreatinteldomains-cl.md) |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [DomainToolsThreatIntelDomains](../parsers/domaintoolsthreatinteldomains.md) | - | [`DomainToolsThreatIntelDomains_CL`](../tables/domaintoolsthreatinteldomains-cl.md) *(read)* |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History** |
|-------------|--------------------------------|--------------------|
| 3.0.0       | 10-11-2025                     | Includes all CCF connector definitions and configurations. |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

