# BETTER Mobile Threat Defense (MTD)

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/BETTER_MTD_logo.svg" alt="BETTER Mobile Threat Defense (MTD) Logo" width="75" height="75">

The [BETTER Mobile Threat Defense](https://mtd-docs.bmobi.net/) Solution for Microsoft Sentinel allows Enterprises to connect their Better MTD instances with Microsoft Sentinel, to view the [incidents](https://mtd-docs.bmobi.net/incidents/incidents) in Dashboards, create custom alerts, use it to trigger playbooks and expands threat hunting capabilities. This gives users more insight into their organization's mobile devices and ability to quickly analyse current mobile security posture which improves their overall SecOps capabilities.

For more details about this solution refer to [https://mtd-docs.bmobi.net/integrations/azure-sentinel](https://mtd-docs.bmobi.net/integrations/azure-sentinel)

**Underlying Microsoft Technologies used:**

This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs: 

- [Azure Monitor HTTP Data Collector API](https://docs.microsoft.com/azure/azure-monitor/logs/data-collector-api)

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Better Mobile Security Inc. |
| **Support Tier** | Partner |
| **Support Link** | [https://www.better.mobi/about#contact-us](https://www.better.mobi/about#contact-us) |
| **Categories** | domains |
| **Version** | 2.0.1 |
| **Author** | Better Mobile Security Inc |
| **First Published** | 2022-05-02 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/BETTER%20Mobile%20Threat%20Defense%20%28MTD%29](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/BETTER%20Mobile%20Threat%20Defense%20%28MTD%29) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [BETTER Mobile Threat Defense (MTD)](../connectors/bettermtd.md)

## Tables Used

This solution uses **4 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`BetterMTDAppLog_CL`](../tables/bettermtdapplog-cl.md) | [BETTER Mobile Threat Defense (MTD)](../connectors/bettermtd.md) | Workbooks |
| [`BetterMTDDeviceLog_CL`](../tables/bettermtddevicelog-cl.md) | [BETTER Mobile Threat Defense (MTD)](../connectors/bettermtd.md) | Workbooks |
| [`BetterMTDIncidentLog_CL`](../tables/bettermtdincidentlog-cl.md) | [BETTER Mobile Threat Defense (MTD)](../connectors/bettermtd.md) | Workbooks |
| [`BetterMTDNetflowLog_CL`](../tables/bettermtdnetflowlog-cl.md) | [BETTER Mobile Threat Defense (MTD)](../connectors/bettermtd.md) | Workbooks |

## Content Items

This solution includes **1 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Workbooks | 1 |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [BETTER_MTD_Workbook](../content/better-mobile-threat-defense-mtd-better-mtd-workbook-e3655f79.md) | [`BetterMTDAppLog_CL`](../tables/bettermtdapplog-cl.md)<br>[`BetterMTDDeviceLog_CL`](../tables/bettermtddevicelog-cl.md)<br>[`BetterMTDIncidentLog_CL`](../tables/bettermtdincidentlog-cl.md)<br>[`BetterMTDNetflowLog_CL`](../tables/bettermtdnetflowlog-cl.md) |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

