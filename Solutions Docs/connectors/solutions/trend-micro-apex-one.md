# Trend Micro Apex One

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **First Published** | 2021-07-06 |
| **Last Updated** | 2022-03-24 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Trend%20Micro%20Apex%20One](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Trend%20Micro%20Apex%20One) |

## Data Connectors

This solution provides **2 data connector(s)**:

- [[Deprecated] Trend Micro Apex One via Legacy Agent](../connectors/trendmicroapexone.md)
- [[Deprecated] Trend Micro Apex One via AMA](../connectors/trendmicroapexoneama.md)

## Tables Reference

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | [[Deprecated] Trend Micro Apex One via AMA](../connectors/trendmicroapexoneama.md), [[Deprecated] Trend Micro Apex One via Legacy Agent](../connectors/trendmicroapexone.md) | Analytics, Hunting, Workbooks |

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
| [ApexOne - Attack Discovery Detection](../content/7a3193b8-67b7-11ec-90d6-0242ac120003.md) | High | InitialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [ApexOne - C&C callback events](../content/1a87cd10-67b7-11ec-90d6-0242ac120003.md) | High | CommandAndControl | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [ApexOne - Commands in Url](../content/4a9a5900-67b7-11ec-90d6-0242ac120003.md) | High | InitialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [ApexOne - Device access permissions was changed](../content/b463b952-67b8-11ec-90d6-0242ac120003.md) | Medium | PrivilegeEscalation | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [ApexOne - Inbound remote access connection](../content/6303235a-ee70-42a4-b969-43e7b969b916.md) | High | LateralMovement | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [ApexOne - Multiple deny or terminate actions on single IP](../content/cd94e078-67b7-11ec-90d6-0242ac120003.md) | High | InitialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [ApexOne - Possible exploit or execute operation](../content/e289d762-6cc2-11ec-90d6-0242ac120003.md) | High | PrivilegeEscalation, Persistence | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [ApexOne - Spyware with failed response](../content/c92d9fe4-67b6-11ec-90d6-0242ac120003.md) | High | InitialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [ApexOne - Suspicious commandline arguments](../content/4d7199b2-67b8-11ec-90d6-0242ac120003.md) | High | Execution | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [ApexOne - Suspicious connections](../content/9e3dc038-67b7-11ec-90d6-0242ac120003.md) | High | CommandAndControl | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [ApexOne - Behavior monitoring actions by files](../content/96451e96-67b5-11ec-90d6-0242ac120003.md) | Execution | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [ApexOne - Behavior monitoring event types by users](../content/433ccdb0-67b6-11ec-90d6-0242ac120003.md) | Privilege Escalation, Persistence | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [ApexOne - Behavior monitoring operations by users](../content/0caa3472-67b6-11ec-90d6-0242ac120003.md) | Execution | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [ApexOne - Behavior monitoring triggered policy by command line](../content/14a4a824-67b6-11ec-90d6-0242ac120003.md) | Execution | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [ApexOne - Channel type by users](../content/40d8ad3e-67b4-11ec-90d6-0242ac120003.md) | CommandandControl | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [ApexOne - Data loss prevention action by IP](../content/6c7f9bfe-67b5-11ec-90d6-0242ac120003.md) | Collection | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [ApexOne - Rare application protocols by Ip address](../content/be89944e-4e75-4d0a-b2d6-ae757d22ed43.md) | InitialAccess | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [ApexOne - Spyware detection](../content/506955be-648f-11ec-90d6-0242ac120003.md) | Execution | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [ApexOne - Suspicious files events](../content/7bf0f260-61a0-11ec-90d6-0242ac120003.md) | Execution | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [ApexOne - Top sources with alerts](../content/8bb86556-67b4-11ec-90d6-0242ac120003.md) | Execution, InitialAccess, PrivilegeEscalation, DefenseEvasion, CommandAndControl, Exfiltration | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [TrendMicroApexOne](../content/trendmicroapexone-trend-micro-apex-one.md) | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [TMApexOneEvent](../content/9d6d5723-1769-43e2-8938-f5f0db89ccf7.md) | - | - |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                                                 |
|-------------|--------------------------------|--------------------------------------------------------------------|
| 3.0.3       | 13-12-2024                     |  Removed Deprecated **Data  Connectors**                           |
| 3.0.2 	  | 12-07-2024 					   |  Deprecated **Data Connector** 									|
| 3.0.1       | 25-10-2023                     |  **Hunting Query** column corrected                                |   
| 3.0.0       | 22-09-2023                     |  Addition of new Trend Micro Apex One AMA **Data connector**       | 	                                                            |

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
