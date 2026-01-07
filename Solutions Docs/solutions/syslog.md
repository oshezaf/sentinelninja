# Syslog

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **First Published** | 2022-05-23 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Syslog](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Syslog) |

## Data Connectors

This solution provides **2 data connector(s)**:

- [Syslog via Legacy Agent](../connectors/syslog.md)
- [Syslog via AMA](../connectors/syslogama.md)

## Tables Reference

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`Syslog`](../tables/syslog.md) | [Syslog via AMA](../connectors/syslogama.md), [Syslog via Legacy Agent](../connectors/syslog.md) | Analytics, Hunting, Workbooks |

## Content Items

This solution includes **18 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Hunting Queries | 9 |
| Analytic Rules | 7 |
| Workbooks | 2 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Failed logon attempts in authpriv](../content/e7ec9fa6-e7f7-41ed-a34b-b956837a3ee6.md) | Medium | CredentialAccess | [`Syslog`](../tables/syslog.md) |
| [NRT Squid proxy events related to mining pools](../content/dd03057e-4347-4853-bf1e-2b2d21eb4e59.md) | Low | CommandAndControl | [`Syslog`](../tables/syslog.md) |
| [SFTP File transfer above threshold](../content/bb6a74c8-889d-4c6e-8412-7d5efe33f4ed.md) | Medium | Exfiltration | [`Syslog`](../tables/syslog.md) |
| [SFTP File transfer folder count above threshold](../content/7355434e-09d5-4401-b56d-e03e9379dfb1.md) | Medium | Exfiltration | [`Syslog`](../tables/syslog.md) |
| [SSH - Potential Brute Force](../content/e1ce0eab-10d1-4aae-863f-9a383345ba88.md) | Low | CredentialAccess | [`Syslog`](../tables/syslog.md) |
| [Squid proxy events for ToR proxies](../content/90d3f6ec-80fb-48e0-9937-2c70c9df9bad.md) | Low | CommandAndControl | [`Syslog`](../tables/syslog.md) |
| [Squid proxy events related to mining pools](../content/80733eb7-35b2-45b6-b2b8-3c51df258206.md) | Low | CommandAndControl | [`Syslog`](../tables/syslog.md) |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [Crypto currency miners EXECVE](../content/1ef1c38f-26dd-4e28-b884-5b3665352648.md) | Persistence, Execution | [`Syslog`](../tables/syslog.md) |
| [Editing Linux scheduled tasks through Crontab](../content/6f0f1821-5981-408a-930b-8b2ca60e9e6c.md) | Persistence, Execution | [`Syslog`](../tables/syslog.md) |
| [Linux scheduled task Aggregation](../content/eb09da09-6f6c-4502-bf74-f7b9f1343539.md) | Persistence, Execution | [`Syslog`](../tables/syslog.md) |
| [Rare process running on a Linux host](../content/d0ae35df-0eaf-491f-b23e-8190e4f3ffe9.md) | Execution, Persistence | [`Syslog`](../tables/syslog.md) |
| [SCX Execute RunAs Providers](../content/0d298a1d-1a08-4f4b-8b28-687bfe0012e8.md) | InitialAccess, Execution | [`Syslog`](../tables/syslog.md) |
| [Squid commonly abused TLDs](../content/7aaa7675-1580-47d8-a404-039cb7284279.md) | CommandAndControl | [`Syslog`](../tables/syslog.md) |
| [Squid data volume timeseries anomalies](../content/e472c490-4792-4f12-8b6b-6ab3e0404d35.md) | CommandAndControl, Exfiltration | [`Syslog`](../tables/syslog.md) |
| [Squid malformed requests](../content/edbeec9f-86b9-475d-8a42-cc7b95ad2baa.md) | Discovery | [`Syslog`](../tables/syslog.md) |
| [Suspicious crytocurrency mining related threat activity detected](../content/005d6e3c-7453-46f6-aef3-f59695594545.md) | DefenseEvasion | [`Syslog`](../tables/syslog.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [LinuxMachines](../content/linuxmachines-syslog.md) | [`Syslog`](../tables/syslog.md) |
| [SyslogConnectorsOverviewWorkbook](../content/syslogconnectorsoverviewworkbook-syslog.md) | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                 |
|-------------|--------------------------------|--------------------------------------------------------------------|
| 3.0.7       | 04-11-2024                     |  Updated the Syslog **Data Connector** template to latest version  |
| 3.0.6       | 01-08-2024                     |  Updated **Analytic rules** for entity mappings and parameter for parser function  |
| 3.0.5       | 16-07-2024                     |  Added 2 new Workspace Function **Parsers** and a new **Workbook**       |
| 3.0.4       | 27-06-2024                     |  Updated Connectivity criteria query for **Data Connector**        |
| 3.0.3       | 10-04-2024                     |  Updated Entity Mappings **Analytic Rule** FailedLogonAttempts_UnknownUser.yaml    |
| 3.0.2       | 21-02-2024                     |  Addition of new Syslog AMA **Data Connector**                     |
| 3.0.1       | 01-02-2024                     |  **Hunting Queries** Description updated                           |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
