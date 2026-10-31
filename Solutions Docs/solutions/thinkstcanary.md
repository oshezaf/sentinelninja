# Thinkst Canary Solution for Azure Sentinel

*Solution: ThinkstCanary*

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/ThinkstCanary.svg" alt="ThinkstCanary Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Thinkst Applied Research |
| **Support Tier** | Partner |
| **Support Link** | [https://help.canary.tools/](https://help.canary.tools/) |
| **Categories** | Security - Threat Protection |
| **Version** | 3.0.0 |
| **Author** | Thinkst Applied Research - support@canary.tools |
| **First Published** | 2026-08-18 |
| **Last Updated** | 2026-09-14 |
| **Solution Folder** | [ThinkstCanary](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ThinkstCanary) |
| **Marketplace** | [Azure Marketplace](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/thinkst.azure-sentinel-solution-thinkst-canary) · Popularity: 🟡 Low (15%) |

The Thinkst Canary solution for Microsoft Sentinel ingests Canary and Canarytoken incidents through the Codeless Connector Framework and provides normalized parsers, detections and response automation.

## Contents

- [Data Connectors](#data-connectors)
- [Tables Used](#tables-used)
- [Content Items](#content-items)

## Data Connectors

This solution provides **1 data connector(s)**:

- [Thinkst Canary](../connectors/thinkstcanary.md)

## Tables Used

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`ThinkstCanaryIncidents_CL`](../tables/thinkstcanaryincidents-cl.md) | [Thinkst Canary](../connectors/thinkstcanary.md) | Analytics |

## Content Items

This solution includes **1 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Canary alerts to incidents](../content/thinkstcanary-canary-alerts-to-incidents-06360572-94a7-42a4-add7-58fb933b2353-988d1059.md) | High | LateralMovement, Exfiltration | [`ThinkstCanaryIncidents_CL`](../tables/thinkstcanaryincidents-cl.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                                                          |
|-------------|--------------------------------|-------------------------------------------------------------------------------------------------------------|
| 3.0.0       | 18-08-2026                     | Initial CCF connector and analytic rule for ingesting and detecting Thinkst Canary and Canarytoken incidents. |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Methods](../methods-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [Logic Apps](../logic-apps/logic-apps-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

