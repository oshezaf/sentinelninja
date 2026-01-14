# SentinelOne

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Logos/Azure_Sentinel.svg" alt="SentinelOne Logo" width="75" height="75">

The [SentinelOne](https://www.sentinelone.com/) solution provides ability to bring SentinelOne events to your Microsoft Sentinel Workspace to inform and to examine potential security risks, analyze your team's use of collaboration, diagnose configuration problems and more. 
 
 
 
 **Underlying Microsoft Technologies used:** 
 
 
 
 This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs:
 
 
 
 a. [Azure Monitor HTTP Data Collector API](https://docs.microsoft.com/azure/azure-monitor/logs/data-collector-api) 
 
 
 
 b. [Azure Functions](https://azure.microsoft.com/services/functions/#overview)

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **Version** | 3.0.1 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2024-11-26 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SentinelOne](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SentinelOne) |

## Data Connectors

This solution provides **2 data connector(s)**:

- [SentinelOne](../connectors/sentinelone.md)
- [SentinelOne](../connectors/sentineloneccp.md)

## Tables Used

This solution uses **6 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`SentinelOneActivities_CL`](../tables/sentineloneactivities-cl.md) | [SentinelOne](../connectors/sentineloneccp.md) | Analytics, Hunting, Workbooks |
| [`SentinelOneAgents_CL`](../tables/sentineloneagents-cl.md) | [SentinelOne](../connectors/sentineloneccp.md) | Analytics, Hunting, Workbooks |
| [`SentinelOneAlerts_CL`](../tables/sentinelonealerts-cl.md) | [SentinelOne](../connectors/sentineloneccp.md) | Analytics, Hunting, Workbooks |
| [`SentinelOneGroups_CL`](../tables/sentinelonegroups-cl.md) | [SentinelOne](../connectors/sentineloneccp.md) | Analytics, Hunting, Workbooks |
| [`SentinelOneThreats_CL`](../tables/sentinelonethreats-cl.md) | [SentinelOne](../connectors/sentineloneccp.md) | Analytics, Hunting, Workbooks |
| [`SentinelOne_CL`](../tables/sentinelone-cl.md) | [SentinelOne](../connectors/sentinelone.md) | Analytics, Hunting, Workbooks |

### Internal Tables

The following **1 table(s)** are used internally by this solution's content items:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`AlertInfo`](../tables/alertinfo.md) | - | Analytics, Hunting, Workbooks |

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
| [Sentinel One - Admin login from new location](../content/sentinelone-sentinel-one-admin-login-from-new-location-382f37b3-b49a-492f-b436-a4717c8c5c3e-e7ec747e.md) | High | InitialAccess, PrivilegeEscalation | [`SentinelOneActivities_CL`](../tables/sentineloneactivities-cl.md)<br>[`SentinelOneAgents_CL`](../tables/sentineloneagents-cl.md)<br>[`SentinelOneAlerts_CL`](../tables/sentinelonealerts-cl.md)<br>[`SentinelOneGroups_CL`](../tables/sentinelonegroups-cl.md)<br>[`SentinelOneThreats_CL`](../tables/sentinelonethreats-cl.md)<br>[`SentinelOne_CL`](../tables/sentinelone-cl.md)<br>*Internal use:*<br>[`AlertInfo`](../tables/alertinfo.md) |
| [Sentinel One - Agent uninstalled from multiple hosts](../content/sentinelone-sentinel-one-agent-uninstalled-from-multiple-hosts-4ad87e4a-d045-4c6b-9652-c9de27fcb442-10a3603c.md) | High | DefenseEvasion | [`SentinelOneActivities_CL`](../tables/sentineloneactivities-cl.md)<br>[`SentinelOneAgents_CL`](../tables/sentineloneagents-cl.md)<br>[`SentinelOneAlerts_CL`](../tables/sentinelonealerts-cl.md)<br>[`SentinelOneGroups_CL`](../tables/sentinelonegroups-cl.md)<br>[`SentinelOneThreats_CL`](../tables/sentinelonethreats-cl.md)<br>[`SentinelOne_CL`](../tables/sentinelone-cl.md)<br>*Internal use:*<br>[`AlertInfo`](../tables/alertinfo.md) |
| [Sentinel One - Alert from custom rule](../content/sentinelone-sentinel-one-alert-from-custom-rule-5f37de91-ff2b-45fb-9eda-49e9f76a3942-7cb8d841.md) | High | InitialAccess | [`SentinelOneActivities_CL`](../tables/sentineloneactivities-cl.md)<br>[`SentinelOneAgents_CL`](../tables/sentineloneagents-cl.md)<br>[`SentinelOneAlerts_CL`](../tables/sentinelonealerts-cl.md)<br>[`SentinelOneGroups_CL`](../tables/sentinelonegroups-cl.md)<br>[`SentinelOneThreats_CL`](../tables/sentinelonethreats-cl.md)<br>[`SentinelOne_CL`](../tables/sentinelone-cl.md)<br>*Internal use:*<br>[`AlertInfo`](../tables/alertinfo.md) |
| [Sentinel One - Blacklist hash deleted](../content/sentinelone-sentinel-one-blacklist-hash-deleted-de339761-2298-4b37-8f1b-80ebd4f0b5f6-8fa631c1.md) | Medium | DefenseEvasion | [`SentinelOneActivities_CL`](../tables/sentineloneactivities-cl.md)<br>[`SentinelOneAgents_CL`](../tables/sentineloneagents-cl.md)<br>[`SentinelOneAlerts_CL`](../tables/sentinelonealerts-cl.md)<br>[`SentinelOneGroups_CL`](../tables/sentinelonegroups-cl.md)<br>[`SentinelOneThreats_CL`](../tables/sentinelonethreats-cl.md)<br>[`SentinelOne_CL`](../tables/sentinelone-cl.md)<br>*Internal use:*<br>[`AlertInfo`](../tables/alertinfo.md) |
| [Sentinel One - Exclusion added](../content/sentinelone-sentinel-one-exclusion-added-4224409f-a7bf-45eb-a931-922d79575a05-c94db4fe.md) | Medium | DefenseEvasion | [`SentinelOneActivities_CL`](../tables/sentineloneactivities-cl.md)<br>[`SentinelOneAgents_CL`](../tables/sentineloneagents-cl.md)<br>[`SentinelOneAlerts_CL`](../tables/sentinelonealerts-cl.md)<br>[`SentinelOneGroups_CL`](../tables/sentinelonegroups-cl.md)<br>[`SentinelOneThreats_CL`](../tables/sentinelonethreats-cl.md)<br>[`SentinelOne_CL`](../tables/sentinelone-cl.md)<br>*Internal use:*<br>[`AlertInfo`](../tables/alertinfo.md) |
| [Sentinel One - Multiple alerts on host](../content/sentinelone-sentinel-one-multiple-alerts-on-host-47e427e6-61bc-4e24-8d16-a12871b9f939-a9644e81.md) | High | InitialAccess | [`SentinelOneActivities_CL`](../tables/sentineloneactivities-cl.md)<br>[`SentinelOneAgents_CL`](../tables/sentineloneagents-cl.md)<br>[`SentinelOneAlerts_CL`](../tables/sentinelonealerts-cl.md)<br>[`SentinelOneGroups_CL`](../tables/sentinelonegroups-cl.md)<br>[`SentinelOneThreats_CL`](../tables/sentinelonethreats-cl.md)<br>[`SentinelOne_CL`](../tables/sentinelone-cl.md)<br>*Internal use:*<br>[`AlertInfo`](../tables/alertinfo.md) |
| [Sentinel One - New admin created](../content/sentinelone-sentinel-one-new-admin-created-e73d293d-966c-47ec-b8e0-95255755f12c-c6c1cb15.md) | Medium | PrivilegeEscalation | [`SentinelOneActivities_CL`](../tables/sentineloneactivities-cl.md)<br>[`SentinelOneAgents_CL`](../tables/sentineloneagents-cl.md)<br>[`SentinelOneAlerts_CL`](../tables/sentinelonealerts-cl.md)<br>[`SentinelOneGroups_CL`](../tables/sentinelonegroups-cl.md)<br>[`SentinelOneThreats_CL`](../tables/sentinelonethreats-cl.md)<br>[`SentinelOne_CL`](../tables/sentinelone-cl.md)<br>*Internal use:*<br>[`AlertInfo`](../tables/alertinfo.md) |
| [Sentinel One - Rule deleted](../content/sentinelone-sentinel-one-rule-deleted-e171b587-22bd-46ec-b96c-7c99024847a7-13809a6c.md) | Medium | DefenseEvasion | [`SentinelOneActivities_CL`](../tables/sentineloneactivities-cl.md)<br>[`SentinelOneAgents_CL`](../tables/sentineloneagents-cl.md)<br>[`SentinelOneAlerts_CL`](../tables/sentinelonealerts-cl.md)<br>[`SentinelOneGroups_CL`](../tables/sentinelonegroups-cl.md)<br>[`SentinelOneThreats_CL`](../tables/sentinelonethreats-cl.md)<br>[`SentinelOne_CL`](../tables/sentinelone-cl.md)<br>*Internal use:*<br>[`AlertInfo`](../tables/alertinfo.md) |
| [Sentinel One - Rule disabled](../content/sentinelone-sentinel-one-rule-disabled-84e210dd-8982-4398-b6f3-264fd72d036c-8dd4a965.md) | Medium | DefenseEvasion | [`SentinelOneActivities_CL`](../tables/sentineloneactivities-cl.md)<br>[`SentinelOneAgents_CL`](../tables/sentineloneagents-cl.md)<br>[`SentinelOneAlerts_CL`](../tables/sentinelonealerts-cl.md)<br>[`SentinelOneGroups_CL`](../tables/sentinelonegroups-cl.md)<br>[`SentinelOneThreats_CL`](../tables/sentinelonethreats-cl.md)<br>[`SentinelOne_CL`](../tables/sentinelone-cl.md)<br>*Internal use:*<br>[`AlertInfo`](../tables/alertinfo.md) |
| [Sentinel One - Same custom rule triggered on different hosts](../content/sentinelone-sentinel-one-same-custom-rule-triggered-on-different-hosts-5586d378-1bce-4d9b-9ac8-e7271c9d5a9a-6f74484f.md) | High | InitialAccess, LateralMovement | [`SentinelOneActivities_CL`](../tables/sentineloneactivities-cl.md)<br>[`SentinelOneAgents_CL`](../tables/sentineloneagents-cl.md)<br>[`SentinelOneAlerts_CL`](../tables/sentinelonealerts-cl.md)<br>[`SentinelOneGroups_CL`](../tables/sentinelonegroups-cl.md)<br>[`SentinelOneThreats_CL`](../tables/sentinelonethreats-cl.md)<br>[`SentinelOne_CL`](../tables/sentinelone-cl.md)<br>*Internal use:*<br>[`AlertInfo`](../tables/alertinfo.md) |
| [Sentinel One - User viewed agent's passphrase](../content/sentinelone-sentinel-one-user-viewed-agent's-passphrase-51999097-60f4-42c0-bee8-fa28160e5583-1188d485.md) | Medium | CredentialAccess | [`SentinelOneActivities_CL`](../tables/sentineloneactivities-cl.md)<br>[`SentinelOneAgents_CL`](../tables/sentineloneagents-cl.md)<br>[`SentinelOneAlerts_CL`](../tables/sentinelonealerts-cl.md)<br>[`SentinelOneGroups_CL`](../tables/sentinelonegroups-cl.md)<br>[`SentinelOneThreats_CL`](../tables/sentinelonethreats-cl.md)<br>[`SentinelOne_CL`](../tables/sentinelone-cl.md)<br>*Internal use:*<br>[`AlertInfo`](../tables/alertinfo.md) |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [Sentinel One - Agent not updated](../content/sentinelone-sentinel-one-agent-not-updated-7fc83c11-1d80-4d1e-9d4b-4f48bbf77abe-d8920f73.md) | DefenseEvasion | [`SentinelOneActivities_CL`](../tables/sentineloneactivities-cl.md)<br>[`SentinelOneAgents_CL`](../tables/sentineloneagents-cl.md)<br>[`SentinelOneAlerts_CL`](../tables/sentinelonealerts-cl.md)<br>[`SentinelOneGroups_CL`](../tables/sentinelonegroups-cl.md)<br>[`SentinelOneThreats_CL`](../tables/sentinelonethreats-cl.md)<br>[`SentinelOne_CL`](../tables/sentinelone-cl.md)<br>*Internal use:*<br>[`AlertInfo`](../tables/alertinfo.md) |
| [Sentinel One - Agent status](../content/sentinelone-sentinel-one-agent-status-4b2ed4b6-10bf-4b2c-b31e-ae51b575dfd4-ecfcfb9d.md) | DefenseEvasion | [`SentinelOneActivities_CL`](../tables/sentineloneactivities-cl.md)<br>[`SentinelOneAgents_CL`](../tables/sentineloneagents-cl.md)<br>[`SentinelOneAlerts_CL`](../tables/sentinelonealerts-cl.md)<br>[`SentinelOneGroups_CL`](../tables/sentinelonegroups-cl.md)<br>[`SentinelOneThreats_CL`](../tables/sentinelonethreats-cl.md)<br>[`SentinelOne_CL`](../tables/sentinelone-cl.md)<br>*Internal use:*<br>[`AlertInfo`](../tables/alertinfo.md) |
| [Sentinel One - Alert triggers (files, processes, strings)](../content/sentinelone-sentinel-one-alert-triggers-files,-processes,-strings-660e92b5-1ef6-471f-b753-44a34af82c41-3e9fb5c4.md) | InitialAccess | [`SentinelOneActivities_CL`](../tables/sentineloneactivities-cl.md)<br>[`SentinelOneAgents_CL`](../tables/sentineloneagents-cl.md)<br>[`SentinelOneAlerts_CL`](../tables/sentinelonealerts-cl.md)<br>[`SentinelOneGroups_CL`](../tables/sentinelonegroups-cl.md)<br>[`SentinelOneThreats_CL`](../tables/sentinelonethreats-cl.md)<br>[`SentinelOne_CL`](../tables/sentinelone-cl.md)<br>*Internal use:*<br>[`AlertInfo`](../tables/alertinfo.md) |
| [Sentinel One - Deleted rules](../content/sentinelone-sentinel-one-deleted-rules-8d1ca735-e29a-4bea-a2ec-93162790b686-ccd750bf.md) | DefenseEvasion | [`SentinelOneActivities_CL`](../tables/sentineloneactivities-cl.md)<br>[`SentinelOneAgents_CL`](../tables/sentineloneagents-cl.md)<br>[`SentinelOneAlerts_CL`](../tables/sentinelonealerts-cl.md)<br>[`SentinelOneGroups_CL`](../tables/sentinelonegroups-cl.md)<br>[`SentinelOneThreats_CL`](../tables/sentinelonethreats-cl.md)<br>[`SentinelOne_CL`](../tables/sentinelone-cl.md)<br>*Internal use:*<br>[`AlertInfo`](../tables/alertinfo.md) |
| [Sentinel One - Hosts not scanned recently](../content/sentinelone-sentinel-one-hosts-not-scanned-recently-e45ff570-e8a6-4f8e-9c08-7ee92ef86060-f02435bd.md) | DefenseEvasion | [`SentinelOneActivities_CL`](../tables/sentineloneactivities-cl.md)<br>[`SentinelOneAgents_CL`](../tables/sentineloneagents-cl.md)<br>[`SentinelOneAlerts_CL`](../tables/sentinelonealerts-cl.md)<br>[`SentinelOneGroups_CL`](../tables/sentinelonegroups-cl.md)<br>[`SentinelOneThreats_CL`](../tables/sentinelonethreats-cl.md)<br>[`SentinelOne_CL`](../tables/sentinelone-cl.md)<br>*Internal use:*<br>[`AlertInfo`](../tables/alertinfo.md) |
| [Sentinel One - New rules](../content/sentinelone-sentinel-one-new-rules-9c3a38e4-0975-4f96-82ee-90ce68bec76a-83965701.md) | DefenseEvasion | [`SentinelOneActivities_CL`](../tables/sentineloneactivities-cl.md)<br>[`SentinelOneAgents_CL`](../tables/sentineloneagents-cl.md)<br>[`SentinelOneAlerts_CL`](../tables/sentinelonealerts-cl.md)<br>[`SentinelOneGroups_CL`](../tables/sentinelonegroups-cl.md)<br>[`SentinelOneThreats_CL`](../tables/sentinelonethreats-cl.md)<br>[`SentinelOne_CL`](../tables/sentinelone-cl.md)<br>*Internal use:*<br>[`AlertInfo`](../tables/alertinfo.md) |
| [Sentinel One - Scanned hosts](../content/sentinelone-sentinel-one-scanned-hosts-17c77743-8bdb-4d29-a3cb-a7a08676122f-33d8fd36.md) | DefenseEvasion | [`SentinelOneActivities_CL`](../tables/sentineloneactivities-cl.md)<br>[`SentinelOneAgents_CL`](../tables/sentineloneagents-cl.md)<br>[`SentinelOneAlerts_CL`](../tables/sentinelonealerts-cl.md)<br>[`SentinelOneGroups_CL`](../tables/sentinelonegroups-cl.md)<br>[`SentinelOneThreats_CL`](../tables/sentinelonethreats-cl.md)<br>[`SentinelOne_CL`](../tables/sentinelone-cl.md)<br>*Internal use:*<br>[`AlertInfo`](../tables/alertinfo.md) |
| [Sentinel One - Sources by alert count](../content/sentinelone-sentinel-one-sources-by-alert-count-acd0a127-461e-48c8-96fa-27d14595abe0-e0f215ff.md) | InitialAccess | [`SentinelOneActivities_CL`](../tables/sentineloneactivities-cl.md)<br>[`SentinelOneAgents_CL`](../tables/sentineloneagents-cl.md)<br>[`SentinelOneAlerts_CL`](../tables/sentinelonealerts-cl.md)<br>[`SentinelOneGroups_CL`](../tables/sentinelonegroups-cl.md)<br>[`SentinelOneThreats_CL`](../tables/sentinelonethreats-cl.md)<br>[`SentinelOne_CL`](../tables/sentinelone-cl.md)<br>*Internal use:*<br>[`AlertInfo`](../tables/alertinfo.md) |
| [Sentinel One - Uninstalled agents](../content/sentinelone-sentinel-one-uninstalled-agents-f3a7cedd-6fc3-4661-a0ad-c1738e531917-9f651695.md) | DefenseEvasion | [`SentinelOneActivities_CL`](../tables/sentineloneactivities-cl.md)<br>[`SentinelOneAgents_CL`](../tables/sentineloneagents-cl.md)<br>[`SentinelOneAlerts_CL`](../tables/sentinelonealerts-cl.md)<br>[`SentinelOneGroups_CL`](../tables/sentinelonegroups-cl.md)<br>[`SentinelOneThreats_CL`](../tables/sentinelonethreats-cl.md)<br>[`SentinelOne_CL`](../tables/sentinelone-cl.md)<br>*Internal use:*<br>[`AlertInfo`](../tables/alertinfo.md) |
| [Sentinel One - Users by alert count](../content/sentinelone-sentinel-one-users-by-alert-count-56500e23-4e64-45a5-a444-98a1acb2f700-01daf4b9.md) | InitialAccess | [`SentinelOneActivities_CL`](../tables/sentineloneactivities-cl.md)<br>[`SentinelOneAgents_CL`](../tables/sentineloneagents-cl.md)<br>[`SentinelOneAlerts_CL`](../tables/sentinelonealerts-cl.md)<br>[`SentinelOneGroups_CL`](../tables/sentinelonegroups-cl.md)<br>[`SentinelOneThreats_CL`](../tables/sentinelonethreats-cl.md)<br>[`SentinelOne_CL`](../tables/sentinelone-cl.md)<br>*Internal use:*<br>[`AlertInfo`](../tables/alertinfo.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [SentinelOne](../content/sentinelone-sentinelone-8f12ec76.md) | [`SentinelOneActivities_CL`](../tables/sentineloneactivities-cl.md)<br>[`SentinelOneAgents_CL`](../tables/sentineloneagents-cl.md)<br>[`SentinelOneAlerts_CL`](../tables/sentinelonealerts-cl.md)<br>[`SentinelOneGroups_CL`](../tables/sentinelonegroups-cl.md)<br>[`SentinelOneThreats_CL`](../tables/sentinelonethreats-cl.md)<br>[`SentinelOne_CL`](../tables/sentinelone-cl.md)<br>*Internal use:*<br>[`AlertInfo`](../tables/alertinfo.md) |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [SentinelOne](../content/sentinelone-sentinelone-e1cb35b3-ee01-4c8f-a361-0850d0554ab6-1faa824b.md) | - | [`SentinelOne_CL`](../tables/sentinelone-cl.md) *(read)* |

## Release Notes

| **Version** | **Date Modified (DD-MM-YYYY)** | **Change History**                          |
|-------------|--------------------------------|---------------------------------------------|
| 3.0.6       | 10-02-2025                     | Advancing CCP **Data Connector** from Public preview to Global Availability.|
| 3.0.5       | 20-01-2025                     | Updated "Sentinel One - Agent uninstalled from multiple hosts" **Analytic Rule** with  ActivityType  |
| 3.0.4       | 15-01-2025                     | Added older Function app **Data Connector** again to SOlution until final deprecation of Function app happens  |
| 3.0.3       | 12-12-2024                     | Added new CCP **Data Connector** and Updated **Parser**  |
| 3.0.2       | 11-09-2024                     | Updated the python runtime version to 3.11 in **Data Connector** Function App  |
| 3.0.1       | 03-05-2024                     | Repackaged for **Parser** issue fix             |
| 3.0.0       | 28-07-2023                     | Bug fixes in API version.                   |

---

**Browse:** [🏠](../readme.md) · [Solutions](../solutions-index.md) · [Connectors](../connectors-index.md) · [Tables](../tables-index.md) · [Content](../content/content-index.md) · [Parsers](../parsers/parsers-index.md) · [ASIM Parsers](../asim/asim-index.md) · [ASIM Products](../asim/asim-products-index.md)

↑ [Back to Solutions Index](../solutions-index.md)

