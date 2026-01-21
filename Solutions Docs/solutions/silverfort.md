# Silverfort

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/silverfort-logo.svg" alt="Silverfort Logo" width="75" height="75">

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

The [Silverfort](https://silverfort.com) ITDR Admin Console connector solution allows ingestion of Silverfort events and logging into Microsoft Sentinel.
 Silverfort provides syslog based events and logging using Common Event Format (CEF). By forwarding your Silverfort ITDR Admin Console CEF data into Microsoft Sentinel, you can take advantage of Sentinels's search & correlation, alerting, and threat intelligence enrichment on Silverfort data. 
 Please contact Silverfort or consult the Silverfort documentation for more information.

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Silverfort |
| **Support Tier** | Partner |
| **Support Link** | [https://www.silverfort.com/customer-success/#support](https://www.silverfort.com/customer-success/#support) |
| **Categories** | domains |
| **Version** | 1.0.0 |
| **Author** | Silverfort |
| **First Published** | 2024-09-01 |
| **Solution Folder** | [Silverfort](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Silverfort) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Silverfort Admin Console](../connectors/silverfortama.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | [Silverfort Admin Console](../connectors/silverfortama.md) | Analytics, Workbooks |

## Content Items

This solution includes **5 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 4 |
| Workbooks | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Silverfort - Certifried Incident](../content/silverfort-silverfort-certifried-incident-9ae540c9-c926-4100-8f07-1eac22596292-74a2bc0f.md) | High | PrivilegeEscalation | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Silverfort - Log4Shell Incident](../content/silverfort-silverfort-log4shell-incident-d6abed70-4043-46da-9304-a98f3446fa5f-69483854.md) | High | InitialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Silverfort - NoPacBreach Incident](../content/silverfort-silverfort-nopacbreach-incident-bdfd2c45-10a0-44e7-a90a-ba7b6bdd9ff2-486f0310.md) | High | PrivilegeEscalation | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Silverfort - UserBruteForce Incident](../content/silverfort-silverfort-userbruteforce-incident-46ff357b-9e98-465b-9e45-cd52fa4a7522-aec505ad.md) | High | CredentialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [SilverfortWorkbook](../content/silverfort-silverfortworkbook-63b31322.md) | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                |
|-------------|--------------------------------|-----------------------------------|
| 3.0.0       | 13-09-2024                     | Initial Solution Release          |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

