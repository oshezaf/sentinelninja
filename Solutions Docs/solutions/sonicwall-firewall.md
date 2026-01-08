# SonicWall Firewall

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/sonicwall_logo.svg" alt="SonicWall Firewall Logo" width="75" height="75">

The [SonicWall Firewall](https://www.sonicwall.com/products/firewalls/) solution for Microsoft Sentinel enables ingestion of events using the Common Event Format (CEF) into Microsoft Sentinel for [SonicWall Firewalls](https://www.sonicwall.com/support/technical-documentation/?q=CEF&language=English).

 This solution is dependent on the Common Event Format solution containing the CEF via AMA connector to collect the logs. The CEF solution will be installed as part of this solution installation. 

**NOTE:** Microsoft recommends installation of CEF via AMA Connector. The existing connectors were deprecated on **Aug 31, 2024**.

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | SonicWall |
| **Support Tier** | Partner |
| **Support Link** | [https://www.sonicwall.com/support/](https://www.sonicwall.com/support/) |
| **Categories** | domains |
| **Version** | 3.1.2 |
| **Author** | SonicWall |
| **First Published** | 2022-05-06 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SonicWall%20Firewall](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SonicWall%20Firewall) |

## Data Connectors

This solution has **2 discovered data connector(s)⚠️** (not in Solution definition):

- [[Deprecated] SonicWall Firewall via Legacy Agent](../connectors/sonicwallfirewall.md) ⚠️
- [[Deprecated] SonicWall Firewall via AMA](../connectors/sonicwallfirewallama.md) ⚠️

*⚠️ Discovered connector - found in solution folder but not listed in Solution JSON definition.*

## Tables Reference

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | [[Deprecated] SonicWall Firewall via AMA](../connectors/sonicwallfirewallama.md), [[Deprecated] SonicWall Firewall via Legacy Agent](../connectors/sonicwallfirewall.md) | Analytics, Workbooks |

## Content Items

This solution includes **4 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 2 |
| Hunting Queries | 1 |
| Workbooks | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [SonicWall - Allowed SSH, Telnet, and RDP Connections](../content/sonicwall-firewall-sonicwall-allowed-ssh,-telnet,-and-rdp-connections-27f1a570-5f20-496b-88f6-a9aa2c5c9534-5e407210.md) | Medium | InitialAccess, Execution, Persistence, CredentialAccess, Discovery, LateralMovement, Collection, Exfiltration, Impact | - |
| [SonicWall - Capture ATP Malicious File Detection](../content/sonicwall-firewall-sonicwall-capture-atp-malicious-file-detection-3db9f99e-a459-41e0-8e02-8b332f5fcb2c-219e6d5b.md) | Medium | Execution | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [Outbound SSH/SCP Connections](../content/sonicwall-firewall-outbound-ssh-scp-connections-dedb8fb9-3caa-4b00-ae88-1898eed78917-0b8386aa.md) | Exfiltration | - |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [SonicWallFirewall](../content/sonicwall-firewall-sonicwallfirewall-108e460f.md) | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                 |
|-------------|--------------------------------|--------------------------------------------------------------------|
| 3.1.2       | 28-11-2024                     |    Removed Deprecated **Data Connectors**                          |
| 3.1.1       | 27-06-2024                     |	OMS Data Connector Migration                                    |
| 3.1.0       | 29-03-2024                     |	Addition of new content, including ASIM Network Session and Web Session parsers, Analytic Rules, Hunting Queries, and a Workbook.     |
| 3.0.0       | 18-09-2023                     |	Addition of new SonicWall Firewall AMA **Data Connector**     |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
