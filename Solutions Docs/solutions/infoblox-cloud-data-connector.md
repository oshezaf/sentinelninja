# ⚠️ Infoblox Cloud Data Connector

> ⚠️ **Unpublished:** This item is from a solution that is not yet published on Azure Marketplace.

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/infoblox_logo.svg" alt="Infoblox Cloud Data Connector Logo" width="75" height="75">

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

The [Infoblox](https://www.infoblox.com/) Cloud solution allows you to easily connect your Infoblox BloxOne data with Microsoft Sentinel. By connecting your logs to Microsoft Sentinel, you can take advantage of search & correlation, alerting, and threat intelligence enrichment for each log.

 This solution is dependent on the Common Event Format solution containing the CEF via AMA connector to collect the logs. The CEF solution will be installed as part of this solution installation.

**NOTE:** Microsoft recommends installation of CEF via AMA Connector. The existing connectors were deprecated on **Aug 31, 2024.**

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Infoblox |
| **Support Tier** | Partner |
| **Support Link** | [https://support.infoblox.com/](https://support.infoblox.com/) |
| **Categories** | domains |
| **Version** | 3.0.4 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2021-10-20 |
| **Solution Folder** | [Infoblox Cloud Data Connector](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Infoblox%20Cloud%20Data%20Connector) |
| **Dependencies** | [Common Event Format](common-event-format.md) |

## Data Connectors

This solution provides **1 data connector(s)** (plus 1 discovered⚠️):

- [[Deprecated] Infoblox Cloud Data Connector via Legacy Agent](../connectors/infobloxclouddataconnector.md) ⚠️
- [[Deprecated] Infoblox Cloud Data Connector via AMA](../connectors/infobloxclouddataconnectorama.md)

*⚠️ Discovered connector - found in solution folder but not listed in Solution JSON definition.*

## Tables Used

This solution uses **3 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | [[Deprecated] Infoblox Cloud Data Connector via AMA](../connectors/infobloxclouddataconnectorama.md), [[Deprecated] Infoblox Cloud Data Connector via Legacy Agent](../connectors/infobloxclouddataconnector.md) | Analytics, Workbooks |
| [`Syslog`](../tables/syslog.md) | - | Analytics |
| [`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) | - | Analytics |

## Content Items

This solution includes **21 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Playbooks | 11 |
| Analytic Rules | 8 |
| Workbooks | 1 |
| Parsers | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Infoblox - Data Exfiltration Attack](../content/infoblox-cloud-data-connector-infoblox-data-exfiltration-attack-8db2b374-0337-49bd-94c9-cfbf8e5d83ad-0a635c49.md) | Medium | Impact | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Infoblox - High Threat Level Query Not Blocked Detected](../content/infoblox-cloud-data-connector-infoblox-high-threat-level-query-not-blocked-detected-dc7af829-d716-4774-9d6f-03d9aa7c27a4-fa962d5e.md) | Medium | Impact | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Infoblox - Many High Threat Level Queries From Single Host Detected](../content/infoblox-cloud-data-connector-infoblox-many-high-threat-level-queries-from-single-host-detected-3822b794-fa89-4420-aad6-0e1a2307f419-c7bc74ac.md) | Medium | Impact | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Infoblox - Many High Threat Level Single Query Detected](../content/infoblox-cloud-data-connector-infoblox-many-high-threat-level-single-query-detected-99278700-79ca-4b0f-b416-bf57ec699e1a-857f6b94.md) | Medium | Impact | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Infoblox - Many NXDOMAIN DNS Responses Detected](../content/infoblox-cloud-data-connector-infoblox-many-nxdomain-dns-responses-detected-b2f34315-9065-488e-88d0-a171d2b0da8e-1198d7a0.md) | Medium | Impact | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Infoblox - TI - CommonSecurityLog Match Found - MalwareC2](../content/infoblox-cloud-data-connector-infoblox-ti-commonsecuritylog-match-found-malwarec2-5b0864a9-4577-4087-b9fa-de3e14a8a999-339e0057.md) | Medium | Impact | [`CommonSecurityLog`](../tables/commonsecuritylog.md)<br>[`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) |
| [Infoblox - TI - InfobloxCDC Match Found - Lookalike Domains](../content/infoblox-cloud-data-connector-infoblox-ti-infobloxcdc-match-found-lookalike-domains-568730be-b39d-45e3-a392-941e00837d52-07dc8d1e.md) | Medium | Impact | [`CommonSecurityLog`](../tables/commonsecuritylog.md)<br>[`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) |
| [Infoblox - TI - Syslog Match Found - URL](../content/infoblox-cloud-data-connector-infoblox-ti-syslog-match-found-url-28ee3c2b-eb4b-44de-a71e-e462843fea72-5ddcadfd.md) | Medium | Impact | [`Syslog`](../tables/syslog.md)<br>[`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [InfobloxCDCB1TDWorkbook](../content/infoblox-cloud-data-connector-infobloxcdcb1tdworkbook-a058ef8d.md) | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Infoblox Import AISCOMM Weekly](../content/infoblox-cloud-data-connector-infoblox-import-aiscomm-weekly-dd357716.md) | Leverages the Infoblox TIDE API to automatically import threat indicators into the ThreatIntelligenc... | - |
| [Infoblox Import Emails Weekly](../content/infoblox-cloud-data-connector-infoblox-import-emails-weekly-d5f265d1.md) | Leverages the Infoblox TIDE API to automatically import threat indicators into the ThreatIntelligenc... | - |
| [Infoblox Import Hashes Weekly](../content/infoblox-cloud-data-connector-infoblox-import-hashes-weekly-b1fa5dae.md) | Leverages the Infoblox TIDE API to automatically import threat indicators into the ThreatIntelligenc... | - |
| [Infoblox Import Hosts Daily Lookalike Domains](../content/infoblox-cloud-data-connector-infoblox-import-hosts-daily-lookalike-domains-90f3b4ed.md) | Leverages the Infoblox TIDE API to automatically import threat indicators into the ThreatIntelligenc... | - |
| [Infoblox Import Hosts Daily MalwareC2DGA](../content/infoblox-cloud-data-connector-infoblox-import-hosts-daily-malwarec2dga-2525a945.md) | Leverages the Infoblox TIDE API to automatically import threat indicators into the ThreatIntelligenc... | - |
| [Infoblox Import Hosts Daily Phishing](../content/infoblox-cloud-data-connector-infoblox-import-hosts-daily-phishing-3a3444e1.md) | Leverages the Infoblox TIDE API to automatically import threat indicators into the ThreatIntelligenc... | - |
| [Infoblox Import Hosts Hourly](../content/infoblox-cloud-data-connector-infoblox-import-hosts-hourly-2e66b1c8.md) | Leverages the Infoblox TIDE API to automatically import threat indicators into the ThreatIntelligenc... | - |
| [Infoblox Import IPs Hourly](../content/infoblox-cloud-data-connector-infoblox-import-ips-hourly-5801ea64.md) | Leverages the Infoblox TIDE API to automatically import threat indicators into the ThreatIntelligenc... | - |
| [Infoblox Import URLs Hourly](../content/infoblox-cloud-data-connector-infoblox-import-urls-hourly-7a0063c2.md) | Leverages the Infoblox TIDE API to automatically import threat indicators into the ThreatIntelligenc... | - |
| [Infoblox Incident Enrichment Domains](../content/infoblox-cloud-data-connector-infoblox-incident-enrichment-domains-d0ecf1f5.md) | Leverages the Infoblox TIDE API to enrich Microsoft Sentinel incidents with detailed TIDE data. This... | - |
| [Infoblox Incident Send Email](../content/infoblox-cloud-data-connector-infoblox-incident-send-email-428d5589.md) | Sends a detailed email when an incident occurs. Optionally enriches an applicable entity within the ... | - |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [InfobloxCDC](../content/infoblox-cloud-data-connector-infobloxcdc-3815f65b-5c24-49ea-ac06-c24b4223a5b6-dbe6720d.md) | - | [`CommonSecurityLog`](../tables/commonsecuritylog.md) *(read)* |

## Release Notes

| **Version**   | **Date Modified**              | **Change History**                                                     |
|---------------|--------------------------------|------------------------------------------------------------------------|
| 3.0.5         | 06-01-2025                     | Removed Deprecated **Data Connector**                                  |
| 3.0.4         | 12-07-2024                     | Deprecating data connectors                                            |
| 3.0.3         | 30-04-2024                     | Updated package for parser issue fix while reinstall   |
| 3.0.2         | 05-03-2024                     | Updated InfobloxCDC parser to manually parse with extract() rather than dynamically due to slowness   |
| 3.0.1         | 11-09-2023                     | Addition of new Infoblox Cloud Data Connector AMA **Data Connector**   |
| 3.0.0         | 01-08-2023                     | Updated Infoblox logo, **Analytic Rules** Optimization updates. 5 new rules,**Playbooks** 11 new playbooks|
| 2.0.10        | 01-06-2023                     | Bug fixes, Documentation updates                                       |
| 1.0.0         | 01-04-2021                     | Initial Solution Release                                               |

---

**Browse:** [🏠](../README.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

