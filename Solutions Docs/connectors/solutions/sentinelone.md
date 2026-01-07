# SentinelOne

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **First Published** | 2024-11-26 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SentinelOne](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/SentinelOne) |

## Data Connectors

This solution provides **2 data connector(s)**:

- [SentinelOne](../connectors/sentinelone.md)
- [SentinelOne](../connectors/sentineloneccp.md)

## Tables Reference

This solution uses **6 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`SentinelOneActivities_CL`](../tables/sentineloneactivities-cl.md) | [SentinelOne](../connectors/sentineloneccp.md) | - |
| [`SentinelOneAgents_CL`](../tables/sentineloneagents-cl.md) | [SentinelOne](../connectors/sentineloneccp.md) | - |
| [`SentinelOneAlerts_CL`](../tables/sentinelonealerts-cl.md) | [SentinelOne](../connectors/sentineloneccp.md) | - |
| [`SentinelOneGroups_CL`](../tables/sentinelonegroups-cl.md) | [SentinelOne](../connectors/sentineloneccp.md) | - |
| [`SentinelOneThreats_CL`](../tables/sentinelonethreats-cl.md) | [SentinelOne](../connectors/sentineloneccp.md) | - |
| [`SentinelOne_CL`](../tables/sentinelone-cl.md) | [SentinelOne](../connectors/sentinelone.md) | Analytics, Hunting, Workbooks |

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
| [Sentinel One - Admin login from new location](../content/382f37b3-b49a-492f-b436-a4717c8c5c3e.md) | High | InitialAccess, PrivilegeEscalation | [`SentinelOne_CL`](../tables/sentinelone-cl.md) |
| [Sentinel One - Agent uninstalled from multiple hosts](../content/4ad87e4a-d045-4c6b-9652-c9de27fcb442.md) | High | DefenseEvasion | [`SentinelOne_CL`](../tables/sentinelone-cl.md) |
| [Sentinel One - Alert from custom rule](../content/5f37de91-ff2b-45fb-9eda-49e9f76a3942.md) | High | InitialAccess | [`SentinelOne_CL`](../tables/sentinelone-cl.md) |
| [Sentinel One - Blacklist hash deleted](../content/de339761-2298-4b37-8f1b-80ebd4f0b5f6.md) | Medium | DefenseEvasion | [`SentinelOne_CL`](../tables/sentinelone-cl.md) |
| [Sentinel One - Exclusion added](../content/4224409f-a7bf-45eb-a931-922d79575a05.md) | Medium | DefenseEvasion | [`SentinelOne_CL`](../tables/sentinelone-cl.md) |
| [Sentinel One - Multiple alerts on host](../content/47e427e6-61bc-4e24-8d16-a12871b9f939.md) | High | InitialAccess | [`SentinelOne_CL`](../tables/sentinelone-cl.md) |
| [Sentinel One - New admin created](../content/e73d293d-966c-47ec-b8e0-95255755f12c.md) | Medium | PrivilegeEscalation | [`SentinelOne_CL`](../tables/sentinelone-cl.md) |
| [Sentinel One - Rule deleted](../content/e171b587-22bd-46ec-b96c-7c99024847a7.md) | Medium | DefenseEvasion | [`SentinelOne_CL`](../tables/sentinelone-cl.md) |
| [Sentinel One - Rule disabled](../content/84e210dd-8982-4398-b6f3-264fd72d036c.md) | Medium | DefenseEvasion | [`SentinelOne_CL`](../tables/sentinelone-cl.md) |
| [Sentinel One - Same custom rule triggered on different hosts](../content/5586d378-1bce-4d9b-9ac8-e7271c9d5a9a.md) | High | InitialAccess, LateralMovement | [`SentinelOne_CL`](../tables/sentinelone-cl.md) |
| [Sentinel One - User viewed agent's passphrase](../content/51999097-60f4-42c0-bee8-fa28160e5583.md) | Medium | CredentialAccess | [`SentinelOne_CL`](../tables/sentinelone-cl.md) |

### Hunting Queries

| Name | Tactics | Tables Used |
|:-----|:--------|:------------|
| [Sentinel One - Agent not updated](../content/7fc83c11-1d80-4d1e-9d4b-4f48bbf77abe.md) | DefenseEvasion | [`SentinelOne_CL`](../tables/sentinelone-cl.md) |
| [Sentinel One - Agent status](../content/4b2ed4b6-10bf-4b2c-b31e-ae51b575dfd4.md) | DefenseEvasion | [`SentinelOne_CL`](../tables/sentinelone-cl.md) |
| [Sentinel One - Alert triggers (files, processes, strings)](../content/660e92b5-1ef6-471f-b753-44a34af82c41.md) | InitialAccess | [`SentinelOne_CL`](../tables/sentinelone-cl.md) |
| [Sentinel One - Deleted rules](../content/8d1ca735-e29a-4bea-a2ec-93162790b686.md) | DefenseEvasion | [`SentinelOne_CL`](../tables/sentinelone-cl.md) |
| [Sentinel One - Hosts not scanned recently](../content/e45ff570-e8a6-4f8e-9c08-7ee92ef86060.md) | DefenseEvasion | [`SentinelOne_CL`](../tables/sentinelone-cl.md) |
| [Sentinel One - New rules](../content/9c3a38e4-0975-4f96-82ee-90ce68bec76a.md) | DefenseEvasion | [`SentinelOne_CL`](../tables/sentinelone-cl.md) |
| [Sentinel One - Scanned hosts](../content/17c77743-8bdb-4d29-a3cb-a7a08676122f.md) | DefenseEvasion | [`SentinelOne_CL`](../tables/sentinelone-cl.md) |
| [Sentinel One - Sources by alert count](../content/acd0a127-461e-48c8-96fa-27d14595abe0.md) | InitialAccess | [`SentinelOne_CL`](../tables/sentinelone-cl.md) |
| [Sentinel One - Uninstalled agents](../content/f3a7cedd-6fc3-4661-a0ad-c1738e531917.md) | DefenseEvasion | [`SentinelOne_CL`](../tables/sentinelone-cl.md) |
| [Sentinel One - Users by alert count](../content/56500e23-4e64-45a5-a444-98a1acb2f700.md) | InitialAccess | [`SentinelOne_CL`](../tables/sentinelone-cl.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [SentinelOne](../content/sentinelone-sentinelone.md) | [`SentinelOne_CL`](../tables/sentinelone-cl.md) |

### Parsers

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [SentinelOne](../content/e1cb35b3-ee01-4c8f-a361-0850d0554ab6.md) | - | - |

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

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
