# Nasuni

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Solutions/Nasuni/Data%20Connectors/Logo/Nasuni.svg" alt="Nasuni Logo" width="75" height="75">

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

The [Nasuni](https://www.nasuni.com) solution for Microsoft Sentinel allows you to analyze Nasuni audit events and Notifications collected via Syslog. It includes analytics rules to automatically generate Incidents when a ransomware attack is detected and perform appropriate entity mapping. 

 This solution is dependent on the Syslog solution containing the Syslog via AMA connector to collect the logs. The Syslog  solution will be installed as part of this solution installation. 

 **NOTE**: Microsoft recommends installation of Syslog via AMA Connector. Legacy connector uses the Log Analytics agent which were deprecated on **Aug 31, 2024.** Using MMA and AMA on same machine can cause log duplication and extra ingestion cost [more details](https://learn.microsoft.com/en-us/azure/sentinel/ama-migrate).

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Nasuni |
| **Support Tier** | Partner |
| **Support Link** | [https://github.com/nasuni-labs/Azure-Sentinel](https://github.com/nasuni-labs/Azure-Sentinel) |
| **Categories** | domains |
| **Version** | 3.0.3 |
| **Author** | Nasuni - support@nasuni.com |
| **First Published** | 2023-07-07 |
| **Last Updated** | 2023-07-07 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Nasuni](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Nasuni) |
| **Dependencies** | [Syslog](syslog.md) |

## Data Connectors

This solution has **1 discovered data connector(s)⚠️** (not in Solution definition):

- [[Deprecated] Nasuni Edge Appliance](../connectors/nasuniedgeappliance.md) ⚠️

*⚠️ Discovered connector - found in solution folder but not listed in Solution JSON definition.*

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`Syslog`](../tables/syslog.md) | [[Deprecated] Nasuni Edge Appliance](../connectors/nasuniedgeappliance.md) | Analytics, Hunting |

## Content Items

This solution includes **3 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 2 |
| Hunting Queries | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Ransomware Attack Detected](../content/nasuni-ransomware-attack-detected-6c8770fb-c854-403e-a64d-0293ba344d5f-009250d8.md) | High | Impact | [`Syslog`](../tables/syslog.md) |
| [Ransomware Client Blocked](../content/nasuni-ransomware-client-blocked-0c96a5a2-d60d-427d-8399-8df7fe8e6536-b5c61929.md) | High | Impact | [`Syslog`](../tables/syslog.md) |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [Nasuni File Delete Activity](../content/nasuni-nasuni-file-delete-activity-64a3477e-d06f-4491-86a5-6f99702e267f-9caf20b1.md) | Impact | [`Syslog`](../tables/syslog.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                          |
|-------------|--------------------------------|---------------------------------------------|
| 3.0.3       |     03-01-2025                 | Removed Deprecated **Data connector**       |
| 3.0.2       |     18-07-2024                 | Deprecating data connectors                |
| 3.0.1       |     02-08-2023                 | Solution Id and Tier Updated                |
| 3.0.0       |     14-07-2023                 | Initial Solution Release                     |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Solutions Index](../solutions-index.md)

