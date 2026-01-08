# Trend Micro Apex One

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Trend_Micro_Logo.svg" alt="Trend Micro Apex One Logo" width="75" height="75">

The [Trend Micro Apex One](https://www.trendmicro.com/business/products/user-protection/sps/endpoint.htmlhttps:/www.trendmicro.com/business/products/user-protection/sps/endpoint.html) solution for Microsoft Sentinel enables ingestion of [Trend Micro Apex One events](https://aka.ms/sentinel-TrendMicroApex-OneEvents) into Microsoft Sentinel. Refer to [Trend Micro Apex Central](https://aka.ms/sentinel-TrendMicroApex-OneCentral) for more information. 

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
| **First Published** | 2021-07-06 |
| **Last Updated** | 2022-03-24 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Trend%20Micro%20Apex%20One](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/Trend%20Micro%20Apex%20One) |

## Data Connectors

This solution has **2 discovered data connector(s)⚠️** (not in Solution definition):

- [[Deprecated] Trend Micro Apex One via Legacy Agent](../connectors/trendmicroapexone.md) ⚠️
- [[Deprecated] Trend Micro Apex One via AMA](../connectors/trendmicroapexoneama.md) ⚠️

*⚠️ Discovered connector - found in solution folder but not listed in Solution JSON definition.*

## Tables Reference

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | [[Deprecated] Trend Micro Apex One via AMA](../connectors/trendmicroapexoneama.md), [[Deprecated] Trend Micro Apex One via Legacy Agent](../connectors/trendmicroapexone.md) | - |

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
| [ApexOne - Attack Discovery Detection](../content/trend-micro-apex-one-apexone-attack-discovery-detection-7a3193b8-67b7-11ec-90d6-0242ac120003-a72ca676.md) | High | InitialAccess | - |
| [ApexOne - C&C callback events](../content/trend-micro-apex-one-apexone-c&c-callback-events-1a87cd10-67b7-11ec-90d6-0242ac120003-9344779a.md) | High | CommandAndControl | - |
| [ApexOne - Commands in Url](../content/trend-micro-apex-one-apexone-commands-in-url-4a9a5900-67b7-11ec-90d6-0242ac120003-d17dff8a.md) | High | InitialAccess | - |
| [ApexOne - Device access permissions was changed](../content/trend-micro-apex-one-apexone-device-access-permissions-was-changed-b463b952-67b8-11ec-90d6-0242ac120003-865f571b.md) | Medium | PrivilegeEscalation | - |
| [ApexOne - Inbound remote access connection](../content/trend-micro-apex-one-apexone-inbound-remote-access-connection-6303235a-ee70-42a4-b969-43e7b969b916-992a56b7.md) | High | LateralMovement | - |
| [ApexOne - Multiple deny or terminate actions on single IP](../content/trend-micro-apex-one-apexone-multiple-deny-or-terminate-actions-on-single-ip-cd94e078-67b7-11ec-90d6-0242ac120003-d82f94a5.md) | High | InitialAccess | - |
| [ApexOne - Possible exploit or execute operation](../content/trend-micro-apex-one-apexone-possible-exploit-or-execute-operation-e289d762-6cc2-11ec-90d6-0242ac120003-ccf90dbf.md) | High | PrivilegeEscalation, Persistence | - |
| [ApexOne - Spyware with failed response](../content/trend-micro-apex-one-apexone-spyware-with-failed-response-c92d9fe4-67b6-11ec-90d6-0242ac120003-c437c42d.md) | High | InitialAccess | - |
| [ApexOne - Suspicious commandline arguments](../content/trend-micro-apex-one-apexone-suspicious-commandline-arguments-4d7199b2-67b8-11ec-90d6-0242ac120003-ad589883.md) | High | Execution | - |
| [ApexOne - Suspicious connections](../content/trend-micro-apex-one-apexone-suspicious-connections-9e3dc038-67b7-11ec-90d6-0242ac120003-1a074d22.md) | High | CommandAndControl | - |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [ApexOne - Behavior monitoring actions by files](../content/trend-micro-apex-one-apexone-behavior-monitoring-actions-by-files-96451e96-67b5-11ec-90d6-0242ac120003-87c1a703.md) | Execution | - |
| [ApexOne - Behavior monitoring event types by users](../content/trend-micro-apex-one-apexone-behavior-monitoring-event-types-by-users-433ccdb0-67b6-11ec-90d6-0242ac120003-589eed1f.md) | Privilege Escalation, Persistence | - |
| [ApexOne - Behavior monitoring operations by users](../content/trend-micro-apex-one-apexone-behavior-monitoring-operations-by-users-0caa3472-67b6-11ec-90d6-0242ac120003-1d28776b.md) | Execution | - |
| [ApexOne - Behavior monitoring triggered policy by command line](../content/trend-micro-apex-one-apexone-behavior-monitoring-triggered-policy-by-command-line-14a4a824-67b6-11ec-90d6-0242ac120003-2c0ff361.md) | Execution | - |
| [ApexOne - Channel type by users](../content/trend-micro-apex-one-apexone-channel-type-by-users-40d8ad3e-67b4-11ec-90d6-0242ac120003-e82a1272.md) | CommandandControl | - |
| [ApexOne - Data loss prevention action by IP](../content/trend-micro-apex-one-apexone-data-loss-prevention-action-by-ip-6c7f9bfe-67b5-11ec-90d6-0242ac120003-b9cca4d4.md) | Collection | - |
| [ApexOne - Rare application protocols by Ip address](../content/trend-micro-apex-one-apexone-rare-application-protocols-by-ip-address-be89944e-4e75-4d0a-b2d6-ae757d22ed43-0e863ded.md) | InitialAccess | - |
| [ApexOne - Spyware detection](../content/trend-micro-apex-one-apexone-spyware-detection-506955be-648f-11ec-90d6-0242ac120003-42ec9672.md) | Execution | - |
| [ApexOne - Suspicious files events](../content/trend-micro-apex-one-apexone-suspicious-files-events-7bf0f260-61a0-11ec-90d6-0242ac120003-58b95e02.md) | Execution | - |
| [ApexOne - Top sources with alerts](../content/trend-micro-apex-one-apexone-top-sources-with-alerts-8bb86556-67b4-11ec-90d6-0242ac120003-9e3076ba.md) | Execution, InitialAccess, PrivilegeEscalation, DefenseEvasion, CommandAndControl, Exfiltration | - |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [TrendMicroApexOne](../content/trend-micro-apex-one-trendmicroapexone-36972fb3.md) | - |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [TMApexOneEvent](../content/trend-micro-apex-one-tmapexoneevent-9d6d5723-1769-43e2-8938-f5f0db89ccf7-fd47af22.md) | - | - |

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
