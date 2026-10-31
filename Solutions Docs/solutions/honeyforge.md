# ⚠️ HoneyForge

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace or not installed in Content Hub.

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/HoneyForgeLogo.svg" alt="HoneyForge Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | BUI |
| **Support Tier** | Partner |
| **Support Link** | [https://honeyforge.tech](https://honeyforge.tech) |
| **Categories** | Security - Threat Intelligence,Security - Network |
| **Version** | 3.0.0 |
| **Author** | BUI - support@bui.co.za |
| **First Published** | 2026-07-20 |
| **Last Updated** | 2026-07-20 |
| **Solution Folder** | [HoneyForge](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/HoneyForge) |

The [HoneyForge](https://honeyforge.tech) solution for Microsoft Sentinel enables you to ingest HoneyForge honeypot deception sensor events into Microsoft Sentinel via CEF/AMA, providing visibility into attack sources, targeted sensors, protocols, and threat trends across your honeypot deployment.

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)

## Data Connectors

This solution provides **1 data connector(s)**:

- [HoneyForge Threat Detection](../connectors/honeyforge.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | [HoneyForge Threat Detection](../connectors/honeyforge.md) | Analytics, Hunting, Workbooks |

## Content Items

This solution includes **8 content item(s)** (7 in solution, 1 discovered 🔍):

| Content Type | Total | In Solution | Discovered |
|:-------------|------:|------------:|-----------:|
| Hunting Queries | 5 | 5 | - |
| Analytic Rules | 1 | 1 | - |
| Workbooks | 1 | 1 | - |
| Parsers | 1 | 0 | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [HoneyForge - Deception Sensor Interaction](../content/honeyforge-honeyforge-deception-sensor-interaction-bb3b1339-c1fa-473a-8663-3fea78c2e7e2-edbcbf31.md) | High | Reconnaissance, InitialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [HoneyForge - High-Frequency Sensor Interactions](../content/honeyforge-honeyforge-high-frequency-sensor-interactions-73cf5ff5-5e6f-7a8b-1c2d-3e4f5a6b7c8d-e06bcdef.md) | Reconnaissance | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [HoneyForge - Off-Hours Sensor Activity](../content/honeyforge-honeyforge-off-hours-sensor-activity-5a15c525-6f7a-8b9c-2d3e-4f5a6b7c8d9e-12345d9e.md) | Reconnaissance | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [HoneyForge - Repeated Probes from Same Source](../content/honeyforge-honeyforge-repeated-probes-from-same-source-e4905b78-2c3d-4e5f-9a0b-1c2d3e4f5a6b-1d6e323b.md) | Reconnaissance | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [HoneyForge - Sensor Fleet Coverage and Health](../content/honeyforge-honeyforge-sensor-fleet-coverage-and-health-7bf37318-4d5e-6f7a-0b1c-2d3e4f5a6b7c-d524d741.md) | Reconnaissance | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [HoneyForge - Top Attacking Source IPs](../content/honeyforge-honeyforge-top-attacking-source-ips-795b6ec0-3e9a-4b12-8f4d-1a2b3c4d5e6f-8c38ffd0.md) | Reconnaissance | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [HoneyForge](../content/honeyforge-honeyforge-fd3830f1.md) | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [HoneyForgeEvent](../parsers/honeyforgeevent.md) ⚠️ | | | [`CommonSecurityLog`](../tables/commonsecuritylog.md) *(read)* |

> ⚠️ Items marked with ⚠️ are not listed in the Solution JSON file. They were discovered by scanning the solution folder and may be legacy items, under development, or excluded from the official solution package.

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History** |
|------------|-------------------------------|-------------------|
| 3.0.0      | 09-10-2026                    | Initial release of HoneyForge Threat Detection solution |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

