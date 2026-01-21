# Syslog

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="Syslog Logo" width="75" height="75">

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

---

The Syslog solution allows you to ingest events from applications or appliances that generate and can forward logs in the Syslog format to a Syslog Forwarder. The Agent for Linux is then able to forward these logs to the Log Analytics/Microsoft Sentinel workspace.

Installing this solution will deploy two data connectors,

1. **Syslog via AMA** - This data connector helps in ingesting syslog messages into your Log Analytics Workspace using the new Azure Monitor Agent. Learn more about ingesting using the new Azure Monitor Agent [here](https://learn.microsoft.com/en-us/azure/azure-monitor/agents/data-collection-syslog). Microsoft recommends using this Data Connector.

2. **Syslog via Legacy Agent** - This data connector helps in ingesting syslog messages into your Log Analytics Workspace using the legacy Log Analytics agent.

<P>**NOTE**: After the solution is installed, Microsoft recommends configuring and leveraging the Syslog via AMA connector for log ingestion. Legacy connector uses the Log Analytics agent, which is about to be deprecated by **Aug 31, 2024,** and thus should only be installed where AMA is not supported.</p>

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **Version** | 3.0.6 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2022-05-23 |
| **Solution Folder** | [Syslog](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Syslog) |

## Data Connectors

This solution provides **2 data connector(s)**:

- [Syslog via Legacy Agent](../connectors/syslog.md)
- [Syslog via AMA](../connectors/syslogama.md)

## Tables Used

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
| [Failed logon attempts in authpriv](../content/syslog-failed-logon-attempts-in-authpriv-e7ec9fa6-e7f7-41ed-a34b-b956837a3ee6-eb207cad.md) | Medium | CredentialAccess | [`Syslog`](../tables/syslog.md) |
| [NRT Squid proxy events related to mining pools](../content/syslog-nrt-squid-proxy-events-related-to-mining-pools-dd03057e-4347-4853-bf1e-2b2d21eb4e59-bc48dba2.md) | Low | CommandAndControl | [`Syslog`](../tables/syslog.md) |
| [SFTP File transfer above threshold](../content/syslog-sftp-file-transfer-above-threshold-bb6a74c8-889d-4c6e-8412-7d5efe33f4ed-7f06d2d2.md) | Medium | Exfiltration | [`Syslog`](../tables/syslog.md) |
| [SFTP File transfer folder count above threshold](../content/syslog-sftp-file-transfer-folder-count-above-threshold-7355434e-09d5-4401-b56d-e03e9379dfb1-648b0cfd.md) | Medium | Exfiltration | [`Syslog`](../tables/syslog.md) |
| [SSH - Potential Brute Force](../content/syslog-ssh-potential-brute-force-e1ce0eab-10d1-4aae-863f-9a383345ba88-08e1a5a9.md) | Low | CredentialAccess | [`Syslog`](../tables/syslog.md) |
| [Squid proxy events for ToR proxies](../content/syslog-squid-proxy-events-for-tor-proxies-90d3f6ec-80fb-48e0-9937-2c70c9df9bad-1bd82f05.md) | Low | CommandAndControl | [`Syslog`](../tables/syslog.md) |
| [Squid proxy events related to mining pools](../content/syslog-squid-proxy-events-related-to-mining-pools-80733eb7-35b2-45b6-b2b8-3c51df258206-05fb1303.md) | Low | CommandAndControl | [`Syslog`](../tables/syslog.md) |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [Crypto currency miners EXECVE](../content/syslog-crypto-currency-miners-execve-1ef1c38f-26dd-4e28-b884-5b3665352648-c1378546.md) | Persistence, Execution | [`Syslog`](../tables/syslog.md) |
| [Editing Linux scheduled tasks through Crontab](../content/syslog-editing-linux-scheduled-tasks-through-crontab-6f0f1821-5981-408a-930b-8b2ca60e9e6c-5de4e857.md) | Persistence, Execution | [`Syslog`](../tables/syslog.md) |
| [Linux scheduled task Aggregation](../content/syslog-linux-scheduled-task-aggregation-eb09da09-6f6c-4502-bf74-f7b9f1343539-ae42cc38.md) | Persistence, Execution | [`Syslog`](../tables/syslog.md) |
| [Rare process running on a Linux host](../content/syslog-rare-process-running-on-a-linux-host-d0ae35df-0eaf-491f-b23e-8190e4f3ffe9-bece04a6.md) | Execution, Persistence | [`Syslog`](../tables/syslog.md) |
| [SCX Execute RunAs Providers](../content/syslog-scx-execute-runas-providers-0d298a1d-1a08-4f4b-8b28-687bfe0012e8-bc82896d.md) | InitialAccess, Execution | [`Syslog`](../tables/syslog.md) |
| [Squid commonly abused TLDs](../content/syslog-squid-commonly-abused-tlds-7aaa7675-1580-47d8-a404-039cb7284279-58ed2cc3.md) | CommandAndControl | [`Syslog`](../tables/syslog.md) |
| [Squid data volume timeseries anomalies](../content/syslog-squid-data-volume-timeseries-anomalies-e472c490-4792-4f12-8b6b-6ab3e0404d35-8dc40325.md) | CommandAndControl, Exfiltration | [`Syslog`](../tables/syslog.md) |
| [Squid malformed requests](../content/syslog-squid-malformed-requests-edbeec9f-86b9-475d-8a42-cc7b95ad2baa-73064f82.md) | Discovery | [`Syslog`](../tables/syslog.md) |
| [Suspicious crytocurrency mining related threat activity detected](../content/syslog-suspicious-crytocurrency-mining-related-threat-activity-detected-005d6e3c-7453-46f6-aef3-f59695594545-4f6cf014.md) | DefenseEvasion | [`Syslog`](../tables/syslog.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [LinuxMachines](../content/syslog-linuxmachines-b765d65a.md) | [`Syslog`](../tables/syslog.md) |
| [SyslogConnectorsOverviewWorkbook](../content/syslog-syslogconnectorsoverviewworkbook-1e6251c7.md) | - |

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

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md) · [📊](../statistics.md)

↑ [Back to Solutions Index](../solutions-index.md)

