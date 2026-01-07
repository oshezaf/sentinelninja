# Talon

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Talon.svg" alt="Talon Logo" width="75" height="75">

The [Talon](https://talon-sec.com/) events and audit logs connector allows you to easily connect your [Talon activity logs with Microsoft Sentinel](https://docs.console.talon-sec.com/en/articles/254-microsoft-sentinel-integration), to view dashboards, create custom alerts, and improve investigation./n/n**Underlying Microsoft Technologies used:**

This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs:/n/n a. [Azure Monitor HTTP Data Collector API ](https://docs.microsoft.com/azure/azure-monitor/logs/data-collector-api)

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Talon Security |
| **Support Tier** | Partner |
| **Support Link** | [https://docs.console.talon-sec.com/](https://docs.console.talon-sec.com/) |
| **Categories** | domains |
| **Version** | 2.0.0 |
| **Author** | Talon |
| **First Published** | 2023-01-25 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Talon](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Talon) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Talon Insights](../connectors/talonlogs.md)

## Tables Reference

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`Talon_CL`](../tables/talon-cl.md) | [Talon Insights](../connectors/talonlogs.md) | Workbooks |

## Content Items

This solution includes **1 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Workbooks | 1 |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [TalonInsights](../content/talon-taloninsights-a46f557d.md) | [`Talon_CL`](../tables/talon-cl.md) |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
