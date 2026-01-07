# Trend Micro Cloud App Security

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **First Published** | 2021-09-28 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Trend%20Micro%20Cloud%20App%20Security](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Trend%20Micro%20Cloud%20App%20Security) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [Trend Micro Cloud App Security](../connectors/trendmicrocas.md)

## Tables Reference

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`TrendMicroCAS_CL`](../tables/trendmicrocas-cl.md) | [Trend Micro Cloud App Security](../connectors/trendmicrocas.md) | - |

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
| [Trend Micro CAS - DLP violation](../content/trend-micro-cloud-app-security-trend-micro-cas---dlp-violation-1ddeb8ad-cad9-4db4-b074-f9da003ca3ed.md) | High | Exfiltration | - |
| [Trend Micro CAS - Infected user](../content/trend-micro-cloud-app-security-trend-micro-cas---infected-user-3649dfb8-a5ca-47dd-8965-cd2f633ca533.md) | High | InitialAccess | - |
| [Trend Micro CAS - Multiple infected users](../content/trend-micro-cloud-app-security-trend-micro-cas---multiple-infected-users-65c2a6fe-ff7b-46b0-9278-61265f77f3bc.md) | High | InitialAccess | - |
| [Trend Micro CAS - Possible phishing mail](../content/trend-micro-cloud-app-security-trend-micro-cas---possible-phishing-mail-9e7b3811-d743-479c-a296-635410562429.md) | Medium | InitialAccess | - |
| [Trend Micro CAS - Ransomware infection](../content/trend-micro-cloud-app-security-trend-micro-cas---ransomware-infection-0bec3f9a-dbe9-4b4c-9ff6-498d64bbef90.md) | High | Impact | - |
| [Trend Micro CAS - Ransomware outbreak](../content/trend-micro-cloud-app-security-trend-micro-cas---ransomware-outbreak-38e043ce-a1fd-497b-8d4f-ce5ca2db90cd.md) | High | Impact | - |
| [Trend Micro CAS - Suspicious filename](../content/trend-micro-cloud-app-security-trend-micro-cas---suspicious-filename-52c4640a-1e2b-4155-b69e-e1869c9a57c9.md) | Medium | InitialAccess | - |
| [Trend Micro CAS - Threat detected and not blocked](../content/trend-micro-cloud-app-security-trend-micro-cas---threat-detected-and-not-blocked-c8e2ad52-bd5f-4f74-a2f7-6c3ab8ba687a.md) | High | DefenseEvasion | - |
| [Trend Micro CAS - Unexpected file on file share](../content/trend-micro-cloud-app-security-trend-micro-cas---unexpected-file-on-file-share-de54f817-f338-46bf-989b-4e016ea6b71b.md) | Medium | InitialAccess | - |
| [Trend Micro CAS - Unexpected file via mail](../content/trend-micro-cloud-app-security-trend-micro-cas---unexpected-file-via-mail-201fd2d1-9131-4b29-bace-ce5d19f3e4ee.md) | Medium | InitialAccess | - |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [Trend Micro CAS - DLP violations](../content/trend-micro-cloud-app-security-trend-micro-cas---dlp-violations-001be88a-e98f-4e9a-ad30-62b9ad8222a5.md) | Exfiltration | - |
| [Trend Micro CAS - Files received via email services](../content/trend-micro-cloud-app-security-trend-micro-cas---files-received-via-email-services-5b2dc14b-a55c-4002-8c2a-94f521baa0f4.md) | InitialAccess | - |
| [Trend Micro CAS - Files stored on cloud fileshare services](../content/trend-micro-cloud-app-security-trend-micro-cas---files-stored-on-cloud-fileshare-services-765f1769-cbe2-4c1a-a708-1769c2c48d79.md) | InitialAccess | - |
| [Trend Micro CAS - Infected files received via email](../content/trend-micro-cloud-app-security-trend-micro-cas---infected-files-received-via-email-8c386a11-7282-41ae-8181-2bfcafe20aad.md) | InitialAccess | - |
| [Trend Micro CAS - Ransomware threats](../content/trend-micro-cloud-app-security-trend-micro-cas---ransomware-threats-440f5440-e452-4b19-a8a4-5e39b5676657.md) | InitialAccess | - |
| [Trend Micro CAS - Rare files received via email services](../content/trend-micro-cloud-app-security-trend-micro-cas---rare-files-received-via-email-services-08df251e-56c6-4e06-a41b-2c86344cb383.md) | InitialAccess | - |
| [Trend Micro CAS - Risky users](../content/trend-micro-cloud-app-security-trend-micro-cas---risky-users-496a35f6-bc85-47f9-a48f-9a55d3c9530f.md) | InitialAccess | - |
| [Trend Micro CAS - Security risk scan threats](../content/trend-micro-cloud-app-security-trend-micro-cas---security-risk-scan-threats-993ca829-5d6a-4432-b192-e5dcf7bfea0c.md) | InitialAccess | - |
| [Trend Micro CAS - Suspicious files on sharepoint](../content/trend-micro-cloud-app-security-trend-micro-cas---suspicious-files-on-sharepoint-dfd91afc-66f0-4661-90d7-82f9b5bf3d8f.md) | InitialAccess | - |
| [Trend Micro CAS - Virtual Analyzer threats](../content/trend-micro-cloud-app-security-trend-micro-cas---virtual-analyzer-threats-5ce1415f-cdea-4740-a481-73c1394248c2.md) | InitialAccess | - |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [TrendMicroCAS](../content/trend-micro-cloud-app-security-trendmicrocas.md) | - |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [TrendMicroCAS](../content/trend-micro-cloud-app-security-trendmicrocas-399d4ecf-aea4-4be0-ae28-9f4106f68808.md) | - | - |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
