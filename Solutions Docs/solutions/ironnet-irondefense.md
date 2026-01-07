# IronNet IronDefense

<img src="https://raw.githubusercontent.com/Azure/Azure-Sentinel/master/Solutions/IronNet%20IronDefense/Workbooks/Images/Logos/IronNet.svg" alt="IronNet IronDefense Logo" width="75" height="75">

The [IronNet Collective Defense](https://www.ironnet.com/what-is-collective-defense) solution enables ingestion of IronDefense alerts, events, and IronDome notifications into Microsoft Sentinel, enabling Microsoft Sentinel to utilize IronDefense's behavioral analytics and the IronDome community to quickly identify threats in your enterprise network.

**Underlying Microsoft Technologies used:**

This solution takes a dependency on the following technologies, and some of these dependencies either may be in [Preview](https://azure.microsoft.com/support/legal/preview-supplemental-terms/) state or might result in additional ingestion or operational costs:
 a. [Agent-based log collection (CEF over Syslog)](https://docs.microsoft.com/azure/sentinel/connect-common-event-format)

## Solution Information

| Attribute | Value |
|:------------------------|:------|
| **Publisher** | Microsoft Corporation |
| **Support Tier** | Microsoft |
| **Support Link** | [https://support.microsoft.com](https://support.microsoft.com) |
| **Categories** | domains |
| **Version** | 2.0.1 |
| **Author** | Microsoft - support@microsoft.com |
| **First Published** | 2021-10-18 |
| **Solution Folder** | [https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/IronNet%20IronDefense](https://github.com/Azure/Azure-Sentinel/blob/master/Solutions/IronNet%20IronDefense) |

## Data Connectors

This solution provides **1 data connector(s)**:

- [IronNet IronDefense](../connectors/ironnetirondefense.md)

## Tables Reference

This solution uses **1 table(s)**:

| Table | Used By Connectors | Used By Content |
|-------|-------------------|----------------|
| [`CommonSecurityLog`](../tables/commonsecuritylog.md) | [IronNet IronDefense](../connectors/ironnetirondefense.md) | Analytics, Workbooks |

## Content Items

This solution includes **6 content item(s)**:

| Content Type | Count |
|:-------------|:------|
| Playbooks | 3 |
| Workbooks | 2 |
| Analytic Rules | 1 |

### Analytic Rules

| Name | Severity | Tactics | Tables Used |
|:-----|:---------|:--------|:------------|
| [Create Incidents from IronDefense](../content/ironnet-irondefense-create-incidents-from-irondefense-3cf46cb9-99d5-42ee-a43c-7bd88ea394a1-25613242.md) | Medium | - | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |

### Workbooks

| Name | Tables Used |
|:-----|:------------|
| [IronDefenseAlertDashboard](../content/ironnet-irondefense-irondefensealertdashboard-7226985d.md) | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |
| [IronDefenseAlertDetails](../content/ironnet-irondefense-irondefensealertdetails-13051619.md) | [`CommonSecurityLog`](../tables/commonsecuritylog.md) |

### Playbooks

| Name | Description | Tables Used |
|:-----|:------------|:------------|
| [IronNet_UpdateIronDefenseAlerts](../content/ironnet-irondefense-ironnet-updateirondefensealerts-20819590.md) ⚠️ | author: IronNet | - |
| [IronNet_UpdateSentinelIncidents](../content/ironnet-irondefense-ironnet-updatesentinelincidents-cc18ec68.md) ⚠️ | author: IronNet | - |
| [IronNet_Validate_IronNet_API](../content/ironnet-irondefense-ironnet-validate-ironnet-api-1e64f62c.md) ⚠️ | author: IronNet | - |

> ⚠️ Items marked with ⚠️ are not listed in the Solution JSON file. They were discovered by scanning the solution folder and may be legacy items, under development, or excluded from the official solution package.

---

**Browse:**

- [← Back to Solutions Index](../solutions-index.md)
- [Connectors Index](../connectors-index.md)
- [Tables Index](../tables-index.md)
- [Content Index](../content/content-index.md)
