# Digital Guardian Data Loss Prevention

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **First Published** | 2021-07-23 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Digital%20Guardian%20Data%20Loss%20Prevention](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Digital%20Guardian%20Data%20Loss%20Prevention) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [[Deprecated] Digital Guardian Data Loss Prevention](../connectors/digitalguardiandlp.md)

## Tables Reference

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`Syslog`](../tables/syslog.md) | [[Deprecated] Digital Guardian Data Loss Prevention](../connectors/digitalguardiandlp.md) | Analytics, Hunting, Workbooks |

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
| [Digital Guardian - Bulk exfiltration to external domain](../content/5f75a873-b524-4ba5-a3b8-2c20db517148.md) | Medium | Exfiltration | [`Syslog`](../tables/syslog.md) |
| [Digital Guardian - Exfiltration to external domain](../content/a19885c8-1e44-47e3-81df-d1d109f5c92d.md) | Medium | Exfiltration | [`Syslog`](../tables/syslog.md) |
| [Digital Guardian - Exfiltration to online fileshare](../content/f7b6ddef-c1e9-46f0-8539-dbba7fb8a5b8.md) | High | Exfiltration | [`Syslog`](../tables/syslog.md) |
| [Digital Guardian - Exfiltration to private email](../content/edead9b5-243a-466b-ae78-2dae32ab1117.md) | High | Exfiltration | [`Syslog`](../tables/syslog.md) |
| [Digital Guardian - Exfiltration using DNS protocol](../content/39e25deb-49bb-4cdb-89c1-c466d596e2bd.md) | High | Exfiltration | [`Syslog`](../tables/syslog.md) |
| [Digital Guardian - Incident with not blocked action](../content/07bca129-e7d6-4421-b489-32abade0b6a7.md) | High | Exfiltration | [`Syslog`](../tables/syslog.md) |
| [Digital Guardian - Multiple incidents from user](../content/e8901dac-2549-4948-b793-5197a5ed697a.md) | High | Exfiltration | [`Syslog`](../tables/syslog.md) |
| [Digital Guardian - Possible SMTP protocol abuse](../content/a374a933-f6c4-4200-8682-70402a9054dd.md) | High | Exfiltration | [`Syslog`](../tables/syslog.md) |
| [Digital Guardian - Sensitive data transfer over insecure channel](../content/b52cda18-c1af-40e5-91f3-1fcbf9fa267e.md) | Medium | Exfiltration | [`Syslog`](../tables/syslog.md) |
| [Digital Guardian - Unexpected protocol](../content/a14f2f95-bbd2-4036-ad59-e3aff132b296.md) | High | Exfiltration | [`Syslog`](../tables/syslog.md) |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [Digital Guardian - Files sent by users](../content/66dd7ab7-bbc0-48b7-a3b9-4e71e610df48.md) | Exfiltration | [`Syslog`](../tables/syslog.md) |
| [Digital Guardian - Incident domains](../content/444c91d4-e4b8-4adc-9b05-61fe908441b8.md) | Exfiltration | [`Syslog`](../tables/syslog.md) |
| [Digital Guardian - Insecure file transfer sources](../content/196930a4-bd79-4800-b2bb-582a8f1c8dd4.md) | Exfiltration | [`Syslog`](../tables/syslog.md) |
| [Digital Guardian - Inspected files](../content/e459b709-55f7-48b6-8afc-0ae1062d3584.md) | Exfiltration | [`Syslog`](../tables/syslog.md) |
| [Digital Guardian - New incidents](../content/ae482a2c-b4e7-46fc-aeb7-744f7aad27ea.md) | Exfiltration | [`Syslog`](../tables/syslog.md) |
| [Digital Guardian - Rare Urls](../content/b9a69da9-1ca0-4e09-a24f-5d88d57e0402.md) | Exfiltration | [`Syslog`](../tables/syslog.md) |
| [Digital Guardian - Rare destination ports](../content/82cba92e-fe2f-4bba-9b46-647040b24090.md) | Exfiltration | [`Syslog`](../tables/syslog.md) |
| [Digital Guardian - Rare network protocols](../content/8ab2f0db-baa1-495c-a8dd-718b81d0b8c7.md) | Exfiltration | [`Syslog`](../tables/syslog.md) |
| [Digital Guardian - Urls used](../content/310433ca-67aa-406d-bbdf-c167a474b0a0.md) | Exfiltration | [`Syslog`](../tables/syslog.md) |
| [Digital Guardian - Users' incidents](../content/83d5652c-025c-4cee-9f33-3bc114648859.md) | Exfiltration | [`Syslog`](../tables/syslog.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [DigitalGuardian](../content/digitalguardian-digital-guardian-data-loss-prevention.md) | [`Syslog`](../tables/syslog.md) |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [DigitalGuardianDLPEvent](../content/93e0affa-35d8-4fe3-8af3-e8a8e1084483.md) | - | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                                        |
|-------------|--------------------------------|-------------------------------------------------------------------------------------------|
| 3.0.2       | 26-12-2024                     | Removed Deprecated **Data connector**                                                     |
| 3.0.1       | 25-07-2024                     | Deprecating data connectors                                                               |
| 3.0.0       | 09-10-2023                     | Fixed KQL validation failure in **Hunting Query** (Digital Guardian - Users incidents)    |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
