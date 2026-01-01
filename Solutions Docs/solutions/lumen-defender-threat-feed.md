# Lumen Defender Threat Feed

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Lumen Technologies, Inc. |
| **Support Tier** | Partner |
| **Support Link** | [https://www.lumen.com/en-us/contact-us/support.html](https://www.lumen.com/en-us/contact-us/support.html) |
| **Categories** | domains |
| **First Published** | 2025-09-12 |
| **Last Updated** | 2025-09-12 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Lumen%20Defender%20Threat%20Feed](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Lumen%20Defender%20Threat%20Feed) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Lumen Defender Threat Feed Data Connector](../connectors/lumenthreatfeedconnector.md)

## Tables Reference

This solution uses **9 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`AlertsWithTiObservables`](../tables/alertswithtiobservables.md) | - | Workbooks |
| [`AzureActivity`](../tables/azureactivity.md) | - | Workbooks |
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | - | Analytics, Hunting, Workbooks |
| [`CuratedTables`](../tables/curatedtables.md) | - | Workbooks |
| [`IncidentsWithLumen`](../tables/incidentswithlumen.md) | - | Workbooks |
| [`OfficeActivity`](../tables/officeactivity.md) | - | Analytics |
| [`SecurityEvent`](../tables/securityevent.md) | - | Analytics |
| [`ThreatIntelIndicatorsv2`](../tables/threatintelindicatorsv2.md) | - | Workbooks |
| [`WindowsEvent`](../tables/windowsevent.md) | - | Analytics |

### Internal Tables

The following **2 table(s)** are used internally by this solution's playbooks:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`SecurityIncident`](../tables/securityincident.md) | - | Workbooks |
| [`ThreatIntelIndicators`](../tables/threatintelindicators.md) | [Lumen Defender Threat Feed Data Connector](../connectors/lumenthreatfeedconnector.md) | Analytics, Hunting |

## Content Items

This solution includes **10 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 8 |
| Hunting Queries | 1 |
| Workbooks | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Lumen TI IPAddress in CommonSecurityLog](../content/bc8a262a-5db3-4ac1-8757-519ed36ed929.md) | Medium | CommandAndControl | [`CommonSecurityLog`](../tables/commonsecuritylog.md)<br>*Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| [Lumen TI IPAddress in DeviceEvents](../content/fa566691-42a2-4136-6a8b-ffa3ea510000.md) | Medium | CommandAndControl | *Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| [Lumen TI IPAddress in IdentityLogonEvents](../content/a7cd18cd-1503-47ec-8dca-65d750540637.md) | Medium | CommandAndControl | *Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| [Lumen TI IPAddress in OfficeActivity](../content/0e96c419-68eb-4235-947e-7e86e136cda0.md) | Medium | CommandAndControl | [`OfficeActivity`](../tables/officeactivity.md)<br>*Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| [Lumen TI IPAddress in SecurityEvents](../content/140a2cb5-4b4a-485c-aab3-2415c24d37e6.md) | Medium | CommandAndControl | [`SecurityEvent`](../tables/securityevent.md)<br>*Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| [Lumen TI IPAddress in SigninLogs](../content/1425aea5-a9e5-4288-886e-934b90664a91.md) | Medium | CommandAndControl | *Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| [Lumen TI IPAddress in WindowsEvents](../content/4776281c-6c49-46ac-8444-4dd8ba2f4565.md) | Medium | CommandAndControl | [`WindowsEvent`](../tables/windowsevent.md)<br>*Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |
| [Lumen TI domain in DnsEvents](../content/29bf5bcd-6795-4c79-a91f-aaef5a618bab.md) | Medium | CommandAndControl | *Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [Lumen TI IPAddress indicator in CommonSecurityLog](../content/4e329d3a-9fc0-4be7-9000-e092e7f68011.md) | CommandAndControl | [`CommonSecurityLog`](../tables/commonsecuritylog.md)<br>*Internal use:*<br>[`ThreatIntelIndicators`](../tables/threatintelindicators.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [Lumen-Threat-Feed-Overview](../content/lumen-threat-feed-overview-lumen-defender-threat-feed.md) | [`AlertsWithTiObservables`](../tables/alertswithtiobservables.md)<br>[`AzureActivity`](../tables/azureactivity.md)<br>[`CommonSecurityLog`](../tables/commonsecuritylog.md)<br>[`CuratedTables`](../tables/curatedtables.md)<br>[`IncidentsWithLumen`](../tables/incidentswithlumen.md)<br>[`ThreatIntelIndicatorsv2`](../tables/threatintelindicatorsv2.md)<br>*Internal use:*<br>[`SecurityIncident`](../tables/securityincident.md) |

## Additional Documentation

> 📄 *Source: [Lumen Defender Threat Feed/README.md](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Lumen Defender Threat Feed/README.md)*

[![Lumen](Workbooks/Images/Logo/Lumen.svg)](https://www.lumen.com/)

# Lumen Defender Threat Feed for Microsoft Sentinel

Within a SIEM like Microsoft Sentinel, threat indicators (IoCs) help correlate known-bad artifacts—such as IPs, domains, URLs, and file hashes—with activity in your environment. Lumen’s Black Lotus Labs® (BLL) harnesses unmatched network visibility and machine intelligence to produce high-confidence indicators that can be operationalized at scale for detection and investigation.

Learn more:

- Black Lotus Labs overview: [https://www.lumen.com/en-us/security/black-lotus-labs.html](https://www.lumen.com/en-us/security/black-lotus-labs.html)
- BLL blog archive: [https://blog.lumen.com/black-lotus-labs/](https://blog.lumen.com/black-lotus-labs/)
- BLL on X/Twitter: [https://twitter.com/blacklotuslabs](https://twitter.com/blacklotuslabs)

## Key features

Lumen Defender Threat Feed for Microsoft Sentinel offers powerful intelligence capabilities designed for security operations:

### Lumen Defender Threat Feed Data Connector

- The Lumen Defender Threat Feed connector (Azure Durable Functions) pulls indicators from Lumen’s Threat Feed API and writes them to the Sentinel Threat Intelligence store via the STIX Objects Upload API.
- Microsoft Sentinel analytic rules correlate Lumen indicators with your logs and create alerts/incidents for matches.

### Threat Research Workbook (Visibility)

- The Lumen workbook surfaces ingestion trends, active indicators by type, risk distribution, tags, sightings across curated tables, and correlated alerts/incidents.

### Hunting (Proactive)

- Included hunting queries help you pivot on a suspicious indicator across common data sources (e.g., CommonSecurityLog, Device* tables, DNS, SigninLogs, OfficeActivity).

## Solution contents

- Data Connector
  - `Data Connectors/LumenThreatFeed` (ARM templates + Function App implementation)
- Analytic Rules (examples)
  - `Lumen_DomainEntity_DNS.yaml`
  - `Lumen_IPEntity_CommonSecurityLog.yaml`
  - `Lumen_IPEntity_DeviceEvents.yaml`
  - `Lumen_IPEntity_IdentityLogonEvents.yaml`
  - `Lumen_IPEntity_OfficeActivity.yaml`
  - `Lumen_IPEntity_SecurityEvent.yaml`
  - `Lumen_IPEntity_SigninLogs.yaml`
  - `Lumen_IPEntity_WindowsEvents.yaml`
- Hunting Queries
  - `Lumen_IPIndicator_CommonSecurityLog.yaml`
- Workbook
  - `Workbooks/Lumen-Threat-Feed-Overview.json`

## Support

- Lumen Defender Threat Feed/API access: [DefenderThreatFeedSales@Lumen.com](mailto:DefenderThreatFeedSales@Lumen.com?subject=API%20Access%20Request) or your Lumen representative
- If you need assistance in setting up the solution: [DefenderThreatFeedSupport@lumen.com](mailto:DefenderThreatFeedSupport@Lumen.com?subject=Solution%20Support%20Request)
- Microsoft Sentinel configuration: Your Azure admin team
- Solution content issues: Contact Lumen for assistance

— For release history, see `ReleaseNotes.md`. Solution metadata: `SolutionMetadata.json`.

## Release Notes

# Release Notes

| Version | Date Modified (DD-MM-YYYY) | Change History |
|---------|----------------------------|----------------|
| 1.0.0   | 09-12-2025                 | Initial Solution Release |
| 1.1.0   | 10-23-2025                 | Update data connector to utilize more frequent TI object updates and improvements to Workbook |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
