# ForescoutHostPropertyMonitor

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/forescout-logo.svg" alt="ForescoutHostPropertyMonitor Logo" width="75" height="75">

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

Forescout Host Property Monitor offers host property analysis, incident generation and action dispatching for hosts managed by Forescout Continuum platform.

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Forescout Technologies |
| **Support Tier** | Partner |
| **Support Link** | [https://www.forescout.com/support](https://www.forescout.com/support) |
| **Categories** | domains |
| **Version** | 3.0.0 |
| **Author** | Julian Wang - julian.wang@forescout.com |
| **First Published** | 2022-06-28 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ForescoutHostPropertyMonitor](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ForescoutHostPropertyMonitor) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Forescout Host Property Monitor](../connectors/forescouthostpropertymonitor.md)

## Tables Used

This solution uses **3 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`ForescoutComplianceStatus_CL`](../tables/forescoutcompliancestatus-cl.md) | [Forescout Host Property Monitor](../connectors/forescouthostpropertymonitor.md) | Workbooks |
| [`ForescoutHostProperties_CL`](../tables/forescouthostproperties-cl.md) | [Forescout Host Property Monitor](../connectors/forescouthostpropertymonitor.md) | Analytics, Workbooks |
| [`ForescoutPolicyStatus_CL`](../tables/forescoutpolicystatus-cl.md) | [Forescout Host Property Monitor](../connectors/forescouthostpropertymonitor.md) | Workbooks |

## Content Items

This solution includes **3 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 1 |
| Workbooks | 1 |
| Playbooks | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Forescout-DNS_Sniff_Event_Monitor](../content/forescouthostpropertymonitor-forescout-dns-sniff-event-monitor-d272e277-f285-4dbc-ae2d-7f65ba64a79e-39ee6063.md) | Medium | - | [`ForescoutHostProperties_CL`](../tables/forescouthostproperties-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [ForescoutHostPropertyMonitorWorkbook](../content/forescouthostpropertymonitor-forescouthostpropertymonitorworkbook-cbfbbf6d.md) | [`ForescoutComplianceStatus_CL`](../tables/forescoutcompliancestatus-cl.md)<br>[`ForescoutHostProperties_CL`](../tables/forescouthostproperties-cl.md)<br>[`ForescoutPolicyStatus_CL`](../tables/forescoutpolicystatus-cl.md) |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Forescout-DNS_Sniff_Event_Playbook](../content/forescouthostpropertymonitor-forescout-dns-sniff-event-playbook-171772ed.md) | This playbook will update incident with action to perform on endpoint | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                       |
|-------------|--------------------------------|--------------------------------------------------------------------------|
| 3.0.0       | 18-02-2025                     | Added new **Workbook** Forescout Host Property Monitor Workbook.<br/> Changes to **Analytic Rules** and **Playbook** corresponding to Customer table changes replaced HTTP Data Collector API with Log Ingestion API.|
| 2.0.1       | 26-05-2022                     | Updated Support details from Microsoft to Forescout.                                                 |
| 2.0.0       | 05-11-2023                     | Initial Solution Release.                                                 |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

