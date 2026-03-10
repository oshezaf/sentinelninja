# Quokka Q-scout for Microsoft Sentinel

*Solution: Quokka*

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/quokka_logo.svg" alt="Quokka Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Quokka |
| **Support Tier** | Partner |
| **Support Link** | [https://www.quokka.io/contact-us#customer-support](https://www.quokka.io/contact-us#customer-support) |
| **Categories** | domains |
| **Version** | 3.0.0 |
| **Author** | Quokka - mvang@quokka.io |
| **First Published** | 2025-10-30 |
| **Solution Folder** | [Quokka](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Quokka) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/quokka.azure-sentinel-solution-quokka) |
| **Popularity** | ⚪ Very Low (0%) |

The Qscout CCF data connector ingest app events logs from Quokka Qscout platform

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)

## Data Connectors

This solution provides **1 data connector(s)**:

- [QscoutAppEventsConnector (via Codeless Connector Framework)](../connectors/qscoutappeventsccfdefinition.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`QscoutAppEvents_CL`](../tables/qscoutappevents-cl.md) | [QscoutAppEventsConnector (via Codeless Connector Framework)](../connectors/qscoutappeventsccfdefinition.md) | Analytics, Workbooks |

## Content Items

This solution includes **2 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 1 |
| Workbooks | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Quokka - Malicious Results Detected](../content/quokka-quokka-malicious-results-detected-97ad71ed-e4c0-4f7a-b1a2-683108bece4f-1210d06b.md) | Medium | InitialAccess, Execution, Persistence, PrivilegeEscalation, DefenseEvasion, CredentialAccess, Discovery, Collection, CommandAndControl, Impact | [`QscoutAppEvents_CL`](../tables/qscoutappevents-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [QscoutDashboards](../content/quokka-qscoutdashboards-03cf0a2b.md) | [`QscoutAppEvents_CL`](../tables/qscoutappevents-cl.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                     |
|-------------|--------------------------------|--------------------------------------------------------|
| 3.0.1       | 13-01-2026                     | Fix an issue with the **CCF Data Connector** that prevented it from polling data.|
| 3.0.0       | 07-11-2025                     | Initial Solution Release for Quokka **CCF Data Connector** with an Analytic Rule and a Workbook.      |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

