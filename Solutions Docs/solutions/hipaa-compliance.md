# HIPAA Compliance

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="HIPAA Compliance Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

This Solution enables Microsoft Sentinel users to harness the power of their SIEM to assist in meeting HIPAA requirements. This Solution comes with pre-defined dashboards, visualizations, and reports, providing users with immediate insights in their HIPAA environment.

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com/](https://support.microsoft.com/) |
| **Categories** | domains |
| **Version** | 3.0.0 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2025-10-08 |
| **Solution Folder** | [HIPAA Compliance](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/HIPAA%20Compliance) |

## Data Connectors

**This solution does not include data connectors.**

This solution may contain other components such as analytics rules, workbooks, hunting queries, or playbooks.

## Tables Used

This solution queries **9 table(s)** from its content items:

| Table | Used By Content |
|-------|----------------|
| [`AzureDiagnostics`](../tables/azurediagnostics.md) | Workbooks |
| [`DeviceFileEvents`](../tables/devicefileevents.md) | Workbooks |
| [`DeviceInfo`](../tables/deviceinfo.md) | Workbooks |
| [`DeviceNetworkEvents`](../tables/devicenetworkevents.md) | Workbooks |
| [`DeviceProcessEvents`](../tables/deviceprocessevents.md) | Workbooks |
| [`Heartbeat`](../tables/heartbeat.md) | Workbooks |
| [`SecurityEvent`](../tables/securityevent.md) | Workbooks |
| [`SigninLogs`](../tables/signinlogs.md) | Workbooks |
| [`Syslog`](../tables/syslog.md) | Workbooks |

### Internal Tables

The following **4 table(s)** are used internally by this solution's content items:

| Table | Used By Content |
|-------|----------------|
| [`SecurityAlert`](../tables/securityalert.md) | Workbooks |
| [`SecurityIncident`](../tables/securityincident.md) | Workbooks |
| [`ThreatIntelIndicators`](../tables/threatintelindicators.md) | Workbooks |
| [`Watchlist`](../tables/watchlist.md) | Workbooks |

## Content Items

This solution includes **1 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Workbooks | 1 |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [HIPAACompliance](../content/hipaa-compliance-hipaacompliance-3850f8c8.md) | [`AzureDiagnostics`](../tables/azurediagnostics.md)<br>[`DeviceFileEvents`](../tables/devicefileevents.md)<br>[`DeviceInfo`](../tables/deviceinfo.md)<br>[`DeviceNetworkEvents`](../tables/devicenetworkevents.md)<br>[`DeviceProcessEvents`](../tables/deviceprocessevents.md)<br>[`Heartbeat`](../tables/heartbeat.md)<br>[`SecurityEvent`](../tables/securityevent.md)<br>[`SigninLogs`](../tables/signinlogs.md)<br>[`Syslog`](../tables/syslog.md)<br>*Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md)<br>[`SecurityIncident`](../tables/securityincident.md)<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md)<br>[`Watchlist`](../tables/watchlist.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                               |
|-------------|--------------------------------|------------------------------------------------------------------|
|  3.0.0      |  22-10-2025                    | Initial Solution release 										  |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

