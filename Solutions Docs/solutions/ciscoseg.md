# CiscoSEG

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/cisco-logo-72px.svg" alt="CiscoSEG Logo" width="75" height="75">

The [Cisco Secure Email Gateway (SEG)](https://www.cisco.com/c/en/us/products/security/email-security/index.html) solution provides the capability to ingest [Cisco SEG Consolidated Event Logs](https://www.cisco.com/c/en/us/td/docs/security/esa/esa14-0/user_guide/b_ESA_Admin_Guide_14-0/b_ESA_Admin_Guide_12_1_chapter_0100111.html#con_1061902) into Microsoft Sentinel.

This solution is dependent on the Common Event Format solution containing the CEF via AMA connector to collect the logs. The CEF solution will be installed as part of this solution installation.

**NOTE:** Microsoft recommends installation of CEF via AMA Connector. The existing connectors are about to be deprecated by **Aug 31, 2024**.

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **Version** | 3.0.3 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2021-06-23 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CiscoSEG](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/CiscoSEG) |
| **Dependencies** | azuresentinel.azure-sentinel-solution-commoneventformat |

## Data Connectors

This solution has **2 discovered data connector(s)⚠️** (not in Solution definition):

- [[Deprecated] Cisco Secure Email Gateway via Legacy Agent](../connectors/ciscoseg.md) ⚠️
- [[Deprecated] Cisco Secure Email Gateway via AMA](../connectors/ciscosegama.md) ⚠️

*⚠️ Discovered connector - found in solution folder but not listed in Solution JSON definition.*

## Tables Reference

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | [[Deprecated] Cisco Secure Email Gateway via AMA](../connectors/ciscosegama.md), [[Deprecated] Cisco Secure Email Gateway via Legacy Agent](../connectors/ciscoseg.md) | - |

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
| [Cisco SEG - DLP policy violation](../content/ciscoseg-cisco-seg-dlp-policy-violation-df5c34dd-e1e6-4e07-90b1-4309ebfe754c-96f99f96.md) | Medium | Exfiltration | - |
| [Cisco SEG - Malicious attachment not blocked](../content/ciscoseg-cisco-seg-malicious-attachment-not-blocked-236e872c-31d1-4b45-ac2a-fda3af465c97-7e651da0.md) | High | InitialAccess | - |
| [Cisco SEG - Multiple large emails sent to external recipient](../content/ciscoseg-cisco-seg-multiple-large-emails-sent-to-external-recipient-1399a9a5-6200-411e-8c34-ca5658754cf7-2d76e97f.md) | Medium | Exfiltration | - |
| [Cisco SEG - Multiple suspiciuos attachments received](../content/ciscoseg-cisco-seg-multiple-suspiciuos-attachments-received-dfdb9a73-4335-4bb4-b29b-eb713bce61a6-8ef60726.md) | High | InitialAccess | - |
| [Cisco SEG - Possible outbreak](../content/ciscoseg-cisco-seg-possible-outbreak-53242559-95ea-4d4c-b003-107e8f06304b-e012a15d.md) | Medium | InitialAccess | - |
| [Cisco SEG - Potential phishing link](../content/ciscoseg-cisco-seg-potential-phishing-link-2e5158e1-9fc2-40ff-a909-c701a13a0405-0b87976a.md) | Medium | InitialAccess | - |
| [Cisco SEG - Suspicious link](../content/ciscoseg-cisco-seg-suspicious-link-506291dd-8050-4c98-a92f-58e376080a0a-090fa657.md) | High | InitialAccess | - |
| [Cisco SEG - Suspicious sender domain](../content/ciscoseg-cisco-seg-suspicious-sender-domain-ef0a253c-95b5-48e1-8ebc-dbeb073b9338-8e5c2362.md) | Medium | InitialAccess | - |
| [Cisco SEG - Unexpected attachment](../content/ciscoseg-cisco-seg-unexpected-attachment-f8ba18c4-81e3-4db0-8f85-4989f2ed2ade-f10c8136.md) | High | InitialAccess | - |
| [Cisco SEG - Unexpected link](../content/ciscoseg-cisco-seg-unexpected-link-9cb4a02d-3708-42ba-b33b-0fdd360ce4b6-603d8991.md) | Medium | InitialAccess | - |
| [Cisco SEG - Unscannable attacment](../content/ciscoseg-cisco-seg-unscannable-attacment-c66b8ced-8c76-415b-a0f3-08c7030a857d-d10ee3f4.md) | Medium | InitialAccess | - |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [Cisco SEG - DKIM failures](../content/ciscoseg-cisco-seg-dkim-failures-d7ea4577-1192-49da-96a2-b6d8219c6ac0-0f156528.md) | InitialAccess | - |
| [Cisco SEG - DMARK failures](../content/ciscoseg-cisco-seg-dmark-failures-8bd157d3-2613-4a36-83e2-ec55332ed7f7-116b51a1.md) | InitialAccess | - |
| [Cisco SEG - Dropped incoming mails](../content/ciscoseg-cisco-seg-dropped-incoming-mails-efb45608-3955-4915-8a46-ef5d7160cef7-ca1522f6.md) | InitialAccess | - |
| [Cisco SEG - Dropped outgoing mails](../content/ciscoseg-cisco-seg-dropped-outgoing-mails-805b5625-8a04-4ca5-bab5-7c8cb383b3e3-8e66b7fb.md) | Exfiltration | - |
| [Cisco SEG - Failed incoming TLS connections](../content/ciscoseg-cisco-seg-failed-incoming-tls-connections-4511f6a0-c174-4ccc-a851-24b14022e217-40bf1781.md) | InitialAccess | - |
| [Cisco SEG - Failed outgoing TLS connections](../content/ciscoseg-cisco-seg-failed-outgoing-tls-connections-aeb733e3-34e9-4724-97c7-c6ad31ea39e5-b30250d9.md) | Impact | - |
| [Cisco SEG - Insecure protocol](../content/ciscoseg-cisco-seg-insecure-protocol-2389de0a-f53f-4a11-b01b-1adce5f26287-8a5004c8.md) | Impact | - |
| [Cisco SEG - SPF failures](../content/ciscoseg-cisco-seg-spf-failures-215a747d-5a5e-4596-b399-85ff5cc572bd-f535331c.md) | InitialAccess | - |
| [Cisco SEG - Sources of spam mails](../content/ciscoseg-cisco-seg-sources-of-spam-mails-7895ffa5-cd61-43cf-89e5-9630e79685fd-1d6f85cd.md) | InitialAccess | - |
| [Cisco SEG - Top users receiving spam mails](../content/ciscoseg-cisco-seg-top-users-receiving-spam-mails-064b1051-d8ac-4ef2-a537-30d32b4c27d9-e16d1fea.md) | InitialAccess | - |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [CiscoSEG](../content/ciscoseg-ciscoseg-8d0b6fd3.md) | - |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [CiscoSEGEvent](../content/ciscoseg-ciscosegevent-90ff11ee-9bb2-410d-a25f-728a889e7ccc-bb048a59.md) | - | - |

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
- [Content Index](../content/content-index.md)
