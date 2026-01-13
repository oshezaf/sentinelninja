# Digital Guardian Data Loss Prevention

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="Digital Guardian Data Loss Prevention Logo" width="75" height="75">

The [Digital Guardian Data Loss Prevention (DLP)](https://digitalguardian.com/platform-overview) data connector provides the capability to ingest Digital Guardian DLP logs into Microsoft Sentinel.

 This solution is dependent on the Syslog solution containing the Syslog via AMA connector to collect the logs. The Syslog solution will be installed as part of this solution installation. 

 **NOTE**: Microsoft recommends installation of Syslog via AMA Connector.Legacy connector uses the Log Analytics agent which were deprecated on **Aug 31, 2024.** Using MMA and AMA on same machine can cause log duplication and extra ingestion cost [more details](https://learn.microsoft.com/en-us/azure/sentinel/ama-migrate).

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **Version** | 3.0.2 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2021-07-23 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Digital%20Guardian%20Data%20Loss%20Prevention](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Digital%20Guardian%20Data%20Loss%20Prevention) |
| **Dependencies** | [Syslog](syslog.md) |

## Data Connectors

This solution has **1 discovered data connector(s)⚠️** (not in Solution definition):

- [[Deprecated] Digital Guardian Data Loss Prevention](../connectors/digitalguardiandlp.md) ⚠️

*⚠️ Discovered connector - found in solution folder but not listed in Solution JSON definition.*

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
| [Digital Guardian - Bulk exfiltration to external domain](../content/digital-guardian-data-loss-prevention-digital-guardian-bulk-exfiltration-to-external-domain-5f75a873-b524-4ba5-a3b8-2c20db517148-16d27910.md) | Medium | Exfiltration | - |
| [Digital Guardian - Exfiltration to external domain](../content/digital-guardian-data-loss-prevention-digital-guardian-exfiltration-to-external-domain-a19885c8-1e44-47e3-81df-d1d109f5c92d-fb713a44.md) | Medium | Exfiltration | - |
| [Digital Guardian - Exfiltration to online fileshare](../content/digital-guardian-data-loss-prevention-digital-guardian-exfiltration-to-online-fileshare-f7b6ddef-c1e9-46f0-8539-dbba7fb8a5b8-696301bd.md) | High | Exfiltration | - |
| [Digital Guardian - Exfiltration to private email](../content/digital-guardian-data-loss-prevention-digital-guardian-exfiltration-to-private-email-edead9b5-243a-466b-ae78-2dae32ab1117-71788af9.md) | High | Exfiltration | - |
| [Digital Guardian - Exfiltration using DNS protocol](../content/digital-guardian-data-loss-prevention-digital-guardian-exfiltration-using-dns-protocol-39e25deb-49bb-4cdb-89c1-c466d596e2bd-9c7b7098.md) | High | Exfiltration | - |
| [Digital Guardian - Incident with not blocked action](../content/digital-guardian-data-loss-prevention-digital-guardian-incident-with-not-blocked-action-07bca129-e7d6-4421-b489-32abade0b6a7-499ad258.md) | High | Exfiltration | - |
| [Digital Guardian - Multiple incidents from user](../content/digital-guardian-data-loss-prevention-digital-guardian-multiple-incidents-from-user-e8901dac-2549-4948-b793-5197a5ed697a-e1d240c6.md) | High | Exfiltration | - |
| [Digital Guardian - Possible SMTP protocol abuse](../content/digital-guardian-data-loss-prevention-digital-guardian-possible-smtp-protocol-abuse-a374a933-f6c4-4200-8682-70402a9054dd-001679b1.md) | High | Exfiltration | - |
| [Digital Guardian - Sensitive data transfer over insecure channel](../content/digital-guardian-data-loss-prevention-digital-guardian-sensitive-data-transfer-over-insecure-channel-b52cda18-c1af-40e5-91f3-1fcbf9fa267e-0175d970.md) | Medium | Exfiltration | - |
| [Digital Guardian - Unexpected protocol](../content/digital-guardian-data-loss-prevention-digital-guardian-unexpected-protocol-a14f2f95-bbd2-4036-ad59-e3aff132b296-acbf8917.md) | High | Exfiltration | - |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [Digital Guardian - Files sent by users](../content/digital-guardian-data-loss-prevention-digital-guardian-files-sent-by-users-66dd7ab7-bbc0-48b7-a3b9-4e71e610df48-fff8bb41.md) | Exfiltration | - |
| [Digital Guardian - Incident domains](../content/digital-guardian-data-loss-prevention-digital-guardian-incident-domains-444c91d4-e4b8-4adc-9b05-61fe908441b8-770c2898.md) | Exfiltration | - |
| [Digital Guardian - Insecure file transfer sources](../content/digital-guardian-data-loss-prevention-digital-guardian-insecure-file-transfer-sources-196930a4-bd79-4800-b2bb-582a8f1c8dd4-173dbc52.md) | Exfiltration | - |
| [Digital Guardian - Inspected files](../content/digital-guardian-data-loss-prevention-digital-guardian-inspected-files-e459b709-55f7-48b6-8afc-0ae1062d3584-7b579b48.md) | Exfiltration | - |
| [Digital Guardian - New incidents](../content/digital-guardian-data-loss-prevention-digital-guardian-new-incidents-ae482a2c-b4e7-46fc-aeb7-744f7aad27ea-17962b79.md) | Exfiltration | - |
| [Digital Guardian - Rare Urls](../content/digital-guardian-data-loss-prevention-digital-guardian-rare-urls-b9a69da9-1ca0-4e09-a24f-5d88d57e0402-94010434.md) | Exfiltration | - |
| [Digital Guardian - Rare destination ports](../content/digital-guardian-data-loss-prevention-digital-guardian-rare-destination-ports-82cba92e-fe2f-4bba-9b46-647040b24090-ebe03fc4.md) | Exfiltration | - |
| [Digital Guardian - Rare network protocols](../content/digital-guardian-data-loss-prevention-digital-guardian-rare-network-protocols-8ab2f0db-baa1-495c-a8dd-718b81d0b8c7-37c677d6.md) | Exfiltration | - |
| [Digital Guardian - Urls used](../content/digital-guardian-data-loss-prevention-digital-guardian-urls-used-310433ca-67aa-406d-bbdf-c167a474b0a0-6a1b384a.md) | Exfiltration | - |
| [Digital Guardian - Users' incidents](../content/digital-guardian-data-loss-prevention-digital-guardian-users'-incidents-83d5652c-025c-4cee-9f33-3bc114648859-8c54f914.md) | Exfiltration | - |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [DigitalGuardian](../content/digital-guardian-data-loss-prevention-digitalguardian-b2733981.md) | - |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [DigitalGuardianDLPEvent](../content/digital-guardian-data-loss-prevention-digitalguardiandlpevent-93e0affa-35d8-4fe3-8af3-e8a8e1084483-905f7a39.md) | - | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                                        |
|-------------|--------------------------------|-------------------------------------------------------------------------------------------|
| 3.0.2       | 26-12-2024                     | Removed Deprecated **Data connector**                                                     |
| 3.0.1       | 25-07-2024                     | Deprecating data connectors                                                               |
| 3.0.0       | 09-10-2023                     | Fixed KQL validation failure in **Hunting Query** (Digital Guardian - Users incidents)    |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Solutions](../solutions-index.md)
- [Connectors](../connectors-index.md)
- [Tables](../tables-index.md)
- [Content](../content/content-index.md)
- [ASIM Parsers](../asim/asim-index.md)
- [ASIM Products](../asim/asim-products-index.md)

