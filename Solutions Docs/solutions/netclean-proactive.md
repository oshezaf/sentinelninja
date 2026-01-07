# NetClean ProActive

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/NetCleanImpactLogo.svg" alt="NetClean ProActive Logo" width="75" height="75">

The [NetClean](https://www.netclean.com/) ProActive for Microsoft Sentinel solution gives you the ability to connect the [NetClean ProActive](https://www.netclean.com/proactive/) Incident logs with Microsoft Sentinel to view dashboards, create custom alerts, and improve investigation.

**Underlying Microsoft Technologies used:**

This solution might take a dependency on the other technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs:

1. [Azure Logic Apps](https://azure.microsoft.com/services/logic-apps/#overview)

 OR 

2. [Azure Monitor HTTP Data Collector API](https://docs.microsoft.com/azure/azure-monitor/logs/data-collector-api)



## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | NetClean |
| **Support Tier** | Partner |
| **Support Link** | [https://www.netclean.com/contact](https://www.netclean.com/contact) |
| **Categories** | domains |
| **Version** | 3.0.2 |
| **Author** | NetClean Technologies AB |
| **First Published** | 2022-06-30 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/NetClean%20ProActive](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/NetClean%20ProActive) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Netclean ProActive Incidents](../connectors/netclean-proactive-incidents.md)

## Tables Reference

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`Netclean_Incidents_CL`](../tables/netclean-incidents-cl.md) | [Netclean ProActive Incidents](../connectors/netclean-proactive-incidents.md) | Analytics, Workbooks |

## Content Items

This solution includes **2 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 1 |
| Workbooks | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [NetClean ProActive Incidents](../content/netclean-proactive-netclean-proactive-incidents-77548170-5c60-42e5-bdac-b0360d0779bb-1b0b1d6f.md) | High | Discovery | [`Netclean_Incidents_CL`](../tables/netclean-incidents-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [NetCleanProActiveWorkbook](../content/netclean-proactive-netcleanproactiveworkbook-47938b1a.md) | [`Netclean_Incidents_CL`](../tables/netclean-incidents-cl.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                          |
|-------------|--------------------------------|---------------------------------------------|
| 3.0.2       | 30-01-2025                     | Updated **Analytic Rules**, **Workbook** columns due to change in **Data Connector**  |
| 3.0.1       | 27-07-2023                     | Updated solution to remove unwanted spaces from variables.  |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
