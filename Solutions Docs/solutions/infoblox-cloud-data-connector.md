# Infoblox Cloud Data Connector

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Infoblox |
| **Support Tier** | Partner |
| **Support Link** | [https://support.infoblox.com/](https://support.infoblox.com/) |
| **Categories** | domains |
| **First Published** | 2021-10-20 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Infoblox%20Cloud%20Data%20Connector](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Infoblox%20Cloud%20Data%20Connector) |

## Data Connectors

This solution provides **2 data connector(s)**:

- [[Deprecated] Infoblox Cloud Data Connector via Legacy Agent](../connectors/infobloxclouddataconnector.md)
- [[Deprecated] Infoblox Cloud Data Connector via AMA](../connectors/infobloxclouddataconnectorama.md)

## Tables Reference

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
| [Infoblox - Data Exfiltration Attack](../content/8db2b374-0337-49bd-94c9-cfbf8e5d83ad.md) | Medium | Impact | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Infoblox - High Threat Level Query Not Blocked Detected](../content/dc7af829-d716-4774-9d6f-03d9aa7c27a4.md) | Medium | Impact | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Infoblox - Many High Threat Level Queries From Single Host Detected](../content/3822b794-fa89-4420-aad6-0e1a2307f419.md) | Medium | Impact | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Infoblox - Many High Threat Level Single Query Detected](../content/99278700-79ca-4b0f-b416-bf57ec699e1a.md) | Medium | Impact | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Infoblox - Many NXDOMAIN DNS Responses Detected](../content/b2f34315-9065-488e-88d0-a171d2b0da8e.md) | Medium | Impact | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Infoblox - TI - CommonSecurityLog Match Found - MalwareC2](../content/5b0864a9-4577-4087-b9fa-de3e14a8a999.md) | Medium | Impact | [`CommonSecurityLog`](../tables/commonsecuritylog.md)<br>[`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) |
| [Infoblox - TI - InfobloxCDC Match Found - Lookalike Domains](../content/568730be-b39d-45e3-a392-941e00837d52.md) | Medium | Impact | [`CommonSecurityLog`](../tables/commonsecuritylog.md)<br>[`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) |
| [Infoblox - TI - Syslog Match Found - URL](../content/28ee3c2b-eb4b-44de-a71e-e462843fea72.md) | Medium | Impact | [`Syslog`](../tables/syslog.md)<br>[`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [InfobloxCDCB1TDWorkbook](../content/infobloxcdcb1tdworkbook-infoblox-cloud-data-connector.md) | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [Infoblox Import AISCOMM Weekly](../content/infoblox-import-aiscomm-weekly-infoblox-cloud-data-connector.md) | Leverages the Infoblox TIDE API to automatically import threat indicators into the ThreatIntelligenc... | - |
| [Infoblox Import Emails Weekly](../content/infoblox-import-emails-weekly-infoblox-cloud-data-connector.md) | Leverages the Infoblox TIDE API to automatically import threat indicators into the ThreatIntelligenc... | - |
| [Infoblox Import Hashes Weekly](../content/infoblox-import-hashes-weekly-infoblox-cloud-data-connector.md) | Leverages the Infoblox TIDE API to automatically import threat indicators into the ThreatIntelligenc... | - |
| [Infoblox Import Hosts Daily Lookalike Domains](../content/infoblox-import-hosts-daily-lookalike-domains-infoblox-cloud-data-connector.md) | Leverages the Infoblox TIDE API to automatically import threat indicators into the ThreatIntelligenc... | - |
| [Infoblox Import Hosts Daily MalwareC2DGA](../content/infoblox-import-hosts-daily-malwarec2dga-infoblox-cloud-data-connector.md) | Leverages the Infoblox TIDE API to automatically import threat indicators into the ThreatIntelligenc... | - |
| [Infoblox Import Hosts Daily Phishing](../content/infoblox-import-hosts-daily-phishing-infoblox-cloud-data-connector.md) | Leverages the Infoblox TIDE API to automatically import threat indicators into the ThreatIntelligenc... | - |
| [Infoblox Import Hosts Hourly](../content/infoblox-import-hosts-hourly-infoblox-cloud-data-connector.md) | Leverages the Infoblox TIDE API to automatically import threat indicators into the ThreatIntelligenc... | - |
| [Infoblox Import IPs Hourly](../content/infoblox-import-ips-hourly-infoblox-cloud-data-connector.md) | Leverages the Infoblox TIDE API to automatically import threat indicators into the ThreatIntelligenc... | - |
| [Infoblox Import URLs Hourly](../content/infoblox-import-urls-hourly-infoblox-cloud-data-connector.md) | Leverages the Infoblox TIDE API to automatically import threat indicators into the ThreatIntelligenc... | - |
| [Infoblox Incident Enrichment Domains](../content/infoblox-incident-enrichment-domains-infoblox-cloud-data-connector.md) | Leverages the Infoblox TIDE API to enrich Microsoft Sentinel incidents with detailed TIDE data. This... | - |
| [Infoblox Incident Send Email](../content/infoblox-incident-send-email-infoblox-cloud-data-connector.md) | Sends a detailed email when an incident occurs. Optionally enriches an applicable entity within the ... | - |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [InfobloxCDC](../content/3815f65b-5c24-49ea-ac06-c24b4223a5b6.md) | - | - |

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

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content-index.md)
