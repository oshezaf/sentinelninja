# <img src="../images/asim-badge.png" alt="ASIM" height="32"> ThreatConnect

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/ThreatConnect.svg" alt="ThreatConnect Logo" width="75" height="75">

The [ThreatConnect Threat Intelligence Platform](https://threatconnect.com/) solution for Microsoft Sentinel provides Workbooks and Analytics to demonstrate the value of ThreatConnect data inside Microsoft Sentintel.

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | ThreatConnect, Inc. |
| **Support Tier** | Partner |
| **Support Link** | [https://threatconnect.com/contact/](https://threatconnect.com/contact/) |
| **Categories** | domains |
| **Version** | 3.0.1 |
| **Author** | JP Bourget jp@bluecycle.net |
| **First Published** | 2023-09-11 |
| **Last Updated** | 2023-09-11 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ThreatConnect](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/ThreatConnect) |

## Data Connectors

**This solution does not include data connectors.**

This solution may contain other components such as analytics rules, workbooks, hunting queries, or playbooks.

## <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> ASIM Parsers Used

This solution uses **1 ASIM parser(s)** for normalized data:

| Table | Used By Content |
|-------|----------------|
| [`_Im_NetworkSession`](../asim/imnetworksession.md) | Analytics |

## Tables Used

This solution queries **5 table(s)** from its content items:

| Table | Used By Content |
|-------|----------------|
| [`AADNonInteractiveUserSignInLogs`](../tables/aadnoninteractiveusersigninlogs.md) | Analytics |
| [`DnsEvents`](../tables/dnsevents.md) | Analytics |
| [`OfficeActivity`](../tables/officeactivity.md) | Analytics |
| [`SigninLogs`](../tables/signinlogs.md) | Analytics |
| [`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) | Analytics |

### Internal Tables

The following **2 table(s)** are used internally by this solution's playbooks:

| Table | Used By Content |
|-------|----------------|
| [`SecurityAlert`](../tables/securityalert.md) | Workbooks |
| [`SecurityIncident`](../tables/securityincident.md) | Workbooks |

## Content Items

This solution includes **6 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 5 |
| Workbooks | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Threat Connect TI map Domain entity to DnsEvents](../content/threatconnect-threat-connect-ti-map-domain-entity-to-dnsevents-f8960f1c-07d2-512b-9c41-952772d40c84-e3919e52.md) | Medium | CommandAndControl | [`DnsEvents`](../tables/dnsevents.md)<br>[`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) |
| [ThreatConnect TI Map URL Entity to OfficeActivity Data](../content/threatconnect-threatconnect-ti-map-url-entity-to-officeactivity-data-12c3b31b-66a6-53ff-b6ab-6ae45e56dc92-426bca4a.md) | Medium | CommandAndControl | [`OfficeActivity`](../tables/officeactivity.md)<br>[`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) |
| [ThreatConnect TI map Email entity to OfficeActivity](../content/threatconnect-threatconnect-ti-map-email-entity-to-officeactivity-4f7ade3e-7121-5274-83ea-d7ed22a01fea-d74546e3.md) | Medium | CommandAndControl | [`OfficeActivity`](../tables/officeactivity.md)<br>[`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) |
| [ThreatConnect TI map Email entity to SigninLogs](../content/threatconnect-threatconnect-ti-map-email-entity-to-signinlogs-ecb68ce7-c309-59a7-a8de-07ccf2a0ea4f-22788640.md) | Medium | CommandAndControl | [`AADNonInteractiveUserSignInLogs`](../tables/aadnoninteractiveusersigninlogs.md)<br>[`SigninLogs`](../tables/signinlogs.md)<br>[`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) |
| <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [ThreatConnect TI map IP entity to Network Session Events (ASIM Network Session schema)](../content/threatconnect-threatconnect-ti-map-ip-entity-to-network-session-events-asim-network-session-schema-ee1fd303-2081-47b7-8f02-e38bfd0868e6-1359f109.md) | Medium | CommandAndControl | <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_NetworkSession`](../asim/imnetworksession.md)<br>[`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [ThreatConnectOverview](../content/threatconnect-threatconnectoverview-c70716b8.md) | *Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md)<br>[`SecurityIncident`](../tables/securityincident.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                             									|
|-------------|--------------------------------|------------------------------------------------------------------------------------|
| 3.0.1       | 02-07-2025                     | Updated ThreatConnect **Workbook** to ThreatIntelIndicators table references.	   	|
| 3.0.1       | 10-06-2024                     | Added missing AMA **Data Connector** reference in **Analytic rules**   			|
| 3.0.0       | 12-10-2023                     | Initial Solution Release.	                      									|

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

