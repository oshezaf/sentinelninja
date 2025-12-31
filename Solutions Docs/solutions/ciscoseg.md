# CiscoSEG

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **First Published** | 2021-06-23 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CiscoSEG](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CiscoSEG) |

## Data Connectors

This solution provides **2 data connector(s)**:

- [[Deprecated] Cisco Secure Email Gateway via Legacy Agent](../connectors/ciscoseg.md)
- [[Deprecated] Cisco Secure Email Gateway via AMA](../connectors/ciscosegama.md)

## Tables Reference

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | [[Deprecated] Cisco Secure Email Gateway via AMA](../connectors/ciscosegama.md), [[Deprecated] Cisco Secure Email Gateway via Legacy Agent](../connectors/ciscoseg.md) | Analytics, Hunting, Workbooks |

## Content Items

This solution includes **23 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Analytic Rules | 11 |
| Hunting Queries | 10 |
| Workbooks | 1 |
| Parsers | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Cisco SEG - DLP policy violation](../content/df5c34dd-e1e6-4e07-90b1-4309ebfe754c.md) | Medium | Exfiltration | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Cisco SEG - Malicious attachment not blocked](../content/236e872c-31d1-4b45-ac2a-fda3af465c97.md) | High | InitialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Cisco SEG - Multiple large emails sent to external recipient](../content/1399a9a5-6200-411e-8c34-ca5658754cf7.md) | Medium | Exfiltration | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Cisco SEG - Multiple suspiciuos attachments received](../content/dfdb9a73-4335-4bb4-b29b-eb713bce61a6.md) | High | InitialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Cisco SEG - Possible outbreak](../content/53242559-95ea-4d4c-b003-107e8f06304b.md) | Medium | InitialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Cisco SEG - Potential phishing link](../content/2e5158e1-9fc2-40ff-a909-c701a13a0405.md) | Medium | InitialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Cisco SEG - Suspicious link](../content/506291dd-8050-4c98-a92f-58e376080a0a.md) | High | InitialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Cisco SEG - Suspicious sender domain](../content/ef0a253c-95b5-48e1-8ebc-dbeb073b9338.md) | Medium | InitialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Cisco SEG - Unexpected attachment](../content/f8ba18c4-81e3-4db0-8f85-4989f2ed2ade.md) | High | InitialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Cisco SEG - Unexpected link](../content/9cb4a02d-3708-42ba-b33b-0fdd360ce4b6.md) | Medium | InitialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Cisco SEG - Unscannable attacment](../content/c66b8ced-8c76-415b-a0f3-08c7030a857d.md) | Medium | InitialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [Cisco SEG - DKIM failures](../content/d7ea4577-1192-49da-96a2-b6d8219c6ac0.md) | InitialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Cisco SEG - DMARK failures](../content/8bd157d3-2613-4a36-83e2-ec55332ed7f7.md) | InitialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Cisco SEG - Dropped incoming mails](../content/efb45608-3955-4915-8a46-ef5d7160cef7.md) | InitialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Cisco SEG - Dropped outgoing mails](../content/805b5625-8a04-4ca5-bab5-7c8cb383b3e3.md) | Exfiltration | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Cisco SEG - Failed incoming TLS connections](../content/4511f6a0-c174-4ccc-a851-24b14022e217.md) | InitialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Cisco SEG - Failed outgoing TLS connections](../content/aeb733e3-34e9-4724-97c7-c6ad31ea39e5.md) | Impact | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Cisco SEG - Insecure protocol](../content/2389de0a-f53f-4a11-b01b-1adce5f26287.md) | Impact | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Cisco SEG - SPF failures](../content/215a747d-5a5e-4596-b399-85ff5cc572bd.md) | InitialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Cisco SEG - Sources of spam mails](../content/7895ffa5-cd61-43cf-89e5-9630e79685fd.md) | InitialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [Cisco SEG - Top users receiving spam mails](../content/064b1051-d8ac-4ef2-a537-30d32b4c27d9.md) | InitialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [CiscoSEG](../content/ciscoseg-ciscoseg.md) | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [CiscoSEGEvent](../content/90ff11ee-9bb2-410d-a25f-728a889e7ccc.md) | - | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                 |
|-------------|--------------------------------|--------------------------------------------------------------------|
| 3.0.5       | 02-12-2024                     | Added Missed Column **Parser**                                     |
| 3.0.4       | 14-11-2024                     | Removed Deprecated **Data Connector**                              |
| 3.0.3       | 08-07-2024                     | Deprecated **Data Connector**   								    |
| 3.0.2       | 03-05-2024                     | Repackaged for parser issue fix on reinstall                       |
| 3.0.1       | 30-04-2024                     | Updated the **Data Connector** to fix conectivity criteria query   |
| 3.0.0       | 28-09-2023                     | Addition of new CiscoSEG AMA **Data Connector**                 | 	                                                            |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content-index.md)
