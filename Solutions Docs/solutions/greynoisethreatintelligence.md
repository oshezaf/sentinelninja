# <img src="../images/asim-badge.png" alt="ASIM" height="32"> GreyNoiseThreatIntelligence

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/greynoise_logomark_black.svg" alt="GreyNoiseThreatIntelligence Logo" width="75" height="75">

The [GreyNoise Threat Intelligence](https://www.greynoise.io/) solution for Microsoft Sentinel provides context to IP addresses seen in your environment by querying the GreyNoise API. GreyNoise collects, analyzes, and labels data on IPs that scan the internet and saturate security tools with noise. We provides near real time, actionable threat intelligence from our proprietary network of over 3,100 sensors running worldwide. This unique perspective helps analysts spend less time on irrelevant or harmless activity, and more time on targeted and emerging threats. 
 [Learn More about GreyNoise Threat Intelligence](https://www.greynoise.io/) | [GreyNoise Docs](https://docs.greynoise.io)

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | GreyNoise |
| **Support Tier** | Partner |
| **Support Link** | [https://www.greynoise.io/contact/general](https://www.greynoise.io/contact/general) |
| **Categories** | domains |
| **Version** | 3.0.3 |
| **Author** | JP Bourget jp@bluecycle.net |
| **First Published** | 2023-09-05 |
| **Last Updated** | 2025-07-28 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/GreyNoiseThreatIntelligence](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/GreyNoiseThreatIntelligence) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [GreyNoise Threat Intelligence](../connectors/greynoise2sentinelapi.md)

## <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> ASIM Parsers Used

This solution uses **1 ASIM parser(s)** for normalized data:

| Parser | Used By Content |
|--------|----------------|
| [`_Im_NetworkSession`](../asim/imnetworksession.md) | Analytics |

## Tables Used

This solution uses **6 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`AADNonInteractiveUserSignInLogs`](../tables/aadnoninteractiveusersigninlogs.md) | - | Analytics |
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | - | Analytics |
| [`DnsEvents`](../tables/dnsevents.md) | - | Analytics |
| [`OfficeActivity`](../tables/officeactivity.md) | - | Analytics |
| [`SigninLogs`](../tables/signinlogs.md) | - | Analytics |
| [`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) | [GreyNoise Threat Intelligence](../connectors/greynoise2sentinelapi.md) | Analytics, Workbooks |

### Internal Tables

The following **2 table(s)** are used internally by this solution's content items:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`SecurityAlert`](../tables/securityalert.md) | - | Workbooks |
| [`SecurityIncident`](../tables/securityincident.md) | - | Workbooks |

## Content Items

This solution includes **6 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 5 |
| Workbooks | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [GreyNoise TI Map IP Entity to CommonSecurityLog](../content/greynoisethreatintelligence-greynoise-ti-map-ip-entity-to-commonsecuritylog-e50657d7-8bca-43ff-a647-d407fae440d6-31126886.md) | Medium | CommandAndControl | [`CommonSecurityLog`](../tables/commonsecuritylog.md)<br>[`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) |
| [GreyNoise TI Map IP Entity to DnsEvents](../content/greynoisethreatintelligence-greynoise-ti-map-ip-entity-to-dnsevents-ddf47b6f-870c-5712-a296-1383acb13c82-ac046e7e.md) | Medium | CommandAndControl | [`DnsEvents`](../tables/dnsevents.md)<br>[`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) |
| [GreyNoise TI Map IP Entity to SigninLogs](../content/greynoisethreatintelligence-greynoise-ti-map-ip-entity-to-signinlogs-f6c76cc9-218c-5b76-9b82-8607f09ea1b4-318921fb.md) | Medium | CommandAndControl | [`AADNonInteractiveUserSignInLogs`](../tables/aadnoninteractiveusersigninlogs.md)<br>[`SigninLogs`](../tables/signinlogs.md)<br>[`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) |
| <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [GreyNoise TI map IP entity to Network Session Events (ASIM Network Session schema)](../content/greynoisethreatintelligence-greynoise-ti-map-ip-entity-to-network-session-events-asim-network-session-sc-536e8e5c-ce0e-575e-bcc9-aba8e7bf9316-294d0914.md) | Medium | CommandAndControl | <img src="../images/asim-logo-small.png" alt="ASIM" height="16"> [`_Im_NetworkSession`](../asim/imnetworksession.md)<br>[`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) |
| [GreyNoise TI map IP entity to OfficeActivity](../content/greynoisethreatintelligence-greynoise-ti-map-ip-entity-to-officeactivity-c51628fe-999c-5150-9fd7-660fc4f58ed2-a0b3d699.md) | Medium | CommandAndControl | [`OfficeActivity`](../tables/officeactivity.md)<br>[`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [GreyNoiseOverview](../content/greynoisethreatintelligence-greynoiseoverview-879c7a2d.md) | [`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md)<br>*Internal use:*<br>[`SecurityAlert`](../tables/securityalert.md)<br>[`SecurityIncident`](../tables/securityincident.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                          |
|-------------|--------------------------------|---------------------------------------------|
| 3.0.3      | 17-07-2025                     | Updated to use GreyNoise Python SDK v3.0.1, use new Threat Intel API, updated requirements.txt, updated Data Connector instructions |
| 3.0.2       | 30-05-2024                     | Added missing AMA **Data Connector** reference in **Analytic rules**  |
| 3.0.1       | 29-11-2023                     | Updated the **Data Connector** Instructions, Fixed a Data Connector bug with Benign Indicator Ingest|
| 3.0.0       | 21-09-2023                     | Initial Solution Release                    |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Solutions Index](../solutions-index.md)

