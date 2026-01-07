# Ubiquiti UniFi

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **First Published** | 2022-06-01 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Ubiquiti%20UniFi](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Ubiquiti%20UniFi) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [[Deprecated] Ubiquiti UniFi](../connectors/ubiquitiunifi.md)

## Tables Reference

This solution uses **2 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) | - | Analytics |
| [`Ubiquiti_CL`](../tables/ubiquiti-cl.md) | [[Deprecated] Ubiquiti UniFi](../connectors/ubiquitiunifi.md) | - |

## Content Items

This solution includes **22 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 10 |
| Hunting Queries | 10 |
| Workbooks | 1 |
| Parsers | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Ubiquiti - Connection to known malicious IP or C2](../content/ubiquiti-unifi-ubiquiti---connection-to-known-malicious-ip-or-c2-db60ca0b-b668-439b-b889-b63b57ef20fb.md) | Medium | Exfiltration, CommandAndControl | [`ThreatIntelligenceIndicator`](../tables/threatintelligenceindicator.md) |
| [Ubiquiti - Large ICMP to external server](../content/ubiquiti-unifi-ubiquiti---large-icmp-to-external-server-6df85d74-e32f-4b71-80e5-bfe2af00be1c.md) | Medium | Exfiltration, CommandAndControl | - |
| [Ubiquiti - Possible connection to cryptominning pool](../content/ubiquiti-unifi-ubiquiti---possible-connection-to-cryptominning-pool-7feb3c32-2a11-4eb8-a2d7-e3792b31cb80.md) | Medium | CommandAndControl | - |
| [Ubiquiti - RDP from external source](../content/ubiquiti-unifi-ubiquiti---rdp-from-external-source-95d5ca9b-72c5-4b80-ad5c-b6401cdc5e08.md) | Medium | InitialAccess | - |
| [Ubiquiti - SSH from external source](../content/ubiquiti-unifi-ubiquiti---ssh-from-external-source-0998a19d-8451-4cdd-8493-fc342816a197.md) | Medium | InitialAccess | - |
| [Ubiquiti - Unknown MAC Joined AP](../content/ubiquiti-unifi-ubiquiti---unknown-mac-joined-ap-9757cee3-1a6c-4d8e-a968-3b7e48ded690.md) | Medium | InitialAccess | - |
| [Ubiquiti - Unusual DNS connection](../content/ubiquiti-unifi-ubiquiti---unusual-dns-connection-14a23ded-7fb9-48ee-ba39-859517a49b51.md) | Medium | CommandAndControl | - |
| [Ubiquiti - Unusual FTP connection to external server](../content/ubiquiti-unifi-ubiquiti---unusual-ftp-connection-to-external-server-fd200125-9d57-4838-85ca-6430c63e4e5d.md) | Medium | Exfiltration, CommandAndControl | - |
| [Ubiquiti - Unusual traffic](../content/ubiquiti-unifi-ubiquiti---unusual-traffic-31e868c0-91d3-40eb-accc-3fa73aa96f8e.md) | Medium | CommandAndControl | - |
| [Ubiquiti - connection to non-corporate DNS server](../content/ubiquiti-unifi-ubiquiti---connection-to-non-corporate-dns-server-fe232837-9bdc-4e2b-8c08-cdac2610eed3.md) | Medium | CommandAndControl, Exfiltration | - |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [Ubiquiti - DNS requests timed out](../content/ubiquiti-unifi-ubiquiti---dns-requests-timed-out-1e55cd44-36ee-47c5-98e6-7d6bb5f9cb37.md) | CommandAndControl, Exfiltration | - |
| [Ubiquiti - Hidden internal DNS server](../content/ubiquiti-unifi-ubiquiti---hidden-internal-dns-server-2ad0b4eb-cc60-4d81-9fbe-d1d6f5f6da3a.md) | CommandAndControl | - |
| [Ubiquiti - Rare internal ports](../content/ubiquiti-unifi-ubiquiti---rare-internal-ports-cb1b48ad-141e-4349-bc12-59d05dec949f.md) | CommandAndControl | - |
| [Ubiquiti - Top blocked destinations](../content/ubiquiti-unifi-ubiquiti---top-blocked-destinations-c10b0205-0cba-4701-abe0-77d540aa327e.md) | CommandAndControl, Exfiltration | - |
| [Ubiquiti - Top blocked external services](../content/ubiquiti-unifi-ubiquiti---top-blocked-external-services-1711aa1d-fd4f-4142-ba4e-4f959a43783d.md) | CommandAndControl, Exfiltration | - |
| [Ubiquiti - Top blocked internal services](../content/ubiquiti-unifi-ubiquiti---top-blocked-internal-services-f81cdd1a-9d8b-4a64-8a11-68d11e9ce9a3.md) | InitialAccess, CommandAndControl | - |
| [Ubiquiti - Top blocked sources](../content/ubiquiti-unifi-ubiquiti---top-blocked-sources-d306cfb0-cabf-4fd8-ad93-a8002129974e.md) | CommandAndControl, Exfiltration | - |
| [Ubiquiti - Top firewall rules](../content/ubiquiti-unifi-ubiquiti---top-firewall-rules-c7bb439e-fb88-4ca2-bbc3-47779ac42a22.md) | CommandAndControl, Exfiltration | - |
| [Ubiquiti - Unusual number of subdomains for top level domain (TLD)](../content/ubiquiti-unifi-ubiquiti---unusual-number-of-subdomains-for-top-level-domain-%28tld%29-5bf4b982-a9e6-4877-b2c0-bdbe4d0f27db.md) | CommandAndControl | - |
| [Ubiquiti - Vulnerable devices](../content/ubiquiti-unifi-ubiquiti---vulnerable-devices-e51aa189-40cc-465c-89eb-cb22db2f53ca.md) | InitialAccess | - |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [Ubiquiti](../content/ubiquiti-unifi-ubiquiti.md) | - |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [UbiquitiAuditEvent](../content/ubiquiti-unifi-ubiquitiauditevent-43be2e48-86c5-4e72-9b33-5190a78e6cc3.md) | - | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                        |
|-------------|--------------------------------|---------------------------------------------------------------------------|
| 3.0.3       | 04-12-2024                     | Removed Deprecated **Data Connector**                                     |
| 3.0.2       | 09-08-2024                     | Deprecating data connectors                                               |
| 3.0.1       | 16-07-2024                     | Updated the **Analytic rules** for missing TTP					   		   |
| 3.0.0       | 23-01-2024                     | Updated the **Data Connector** by removing preview-tag   				   |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
